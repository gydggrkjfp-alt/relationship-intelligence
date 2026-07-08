const CACHE='relationship-intelligence-v3919-modern-wisdom';
const ASSETS=[
  './',
  './index.html',
  './styles.css?v=3919-modern-wisdom',
  './expert-engine.js?v=3919-modern-wisdom',
  './coach-router.js?v=3919-modern-wisdom',
  './coach-database.js?v=3919-modern-wisdom',
  './app.js?v=3919-modern-wisdom',
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
    event.respondWith(fetch(event.request).catch(()=>caches.match('./app.js?v=3919-modern-wisdom')));
    return;
  }
  event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request)));
});
