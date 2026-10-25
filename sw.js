const CACHE='relationship-intelligence-v421-live-metrics';
const ASSETS=[
  './',
  './index.html',
  './styles.css?v=421-live-metrics',
  './expert-engine.js?v=421-live-metrics',
  './coach-router.js?v=421-live-metrics',
  './coach-database.js?v=421-live-metrics',
  './app.js?v=421-live-metrics',
  './normal-date.js?v=421-live-metrics',
  './live-metrics.js?v=421-live-metrics',
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
    event.respondWith(fetch(event.request).catch(()=>caches.match('./app.js?v=421-live-metrics')));
    return;
  }
  event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request)));
});
