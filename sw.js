const CACHE='relationship-intelligence-v348-examples';
const ASSETS=[
  './',
  './index.html',
  './styles.css',
  './app.js?v=348-examples',
  './manifest.json'
];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>
      Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))
    ).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const requestUrl=new URL(event.request.url);
  if(requestUrl.pathname.endsWith('/app.js')){
    event.respondWith(fetch(event.request).catch(()=>caches.match('./app.js?v=348-examples')));
    return;
  }
  event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request)));
});
