const CACHE='relationship-intelligence-v364-meaning-crux';
const ASSETS=[
  './',
  './index.html',
  './styles.css?v=364-meaning-crux',
  './expert-engine.js?v=364-meaning-crux',
  './app.js?v=364-meaning-crux',
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
    event.respondWith(fetch(event.request).catch(()=>caches.match('./app.js?v=364-meaning-crux')));
    return;
  }
  event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request)));
});
