const CACHE='relationship-intelligence-v3928-coach-situation-type';
const ASSETS=[
  './',
  './index.html',
  './styles.css?v=3928-coach-situation-type',
  './expert-engine.js?v=3928-coach-situation-type',
  './coach-router.js?v=3928-coach-situation-type',
  './coach-database.js?v=3928-coach-situation-type',
  './app.js?v=3928-coach-situation-type',
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
    event.respondWith(fetch(event.request).catch(()=>caches.match('./app.js?v=3928-coach-situation-type')));
    return;
  }
  event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request)));
});
