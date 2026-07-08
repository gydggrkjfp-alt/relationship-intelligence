const CACHE='relationship-intelligence-v3915-view-hydrate';
const ASSETS=[
  './',
  './index.html',
  './styles.css?v=3915-view-hydrate',
  './expert-engine.js?v=3915-view-hydrate',
  './coach-router.js?v=3915-view-hydrate',
  './coach-database.js?v=3915-view-hydrate',
  './app.js?v=3915-view-hydrate',
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
    event.respondWith(fetch(event.request).catch(()=>caches.match('./app.js?v=3915-view-hydrate')));
    return;
  }
  event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request)));
});
