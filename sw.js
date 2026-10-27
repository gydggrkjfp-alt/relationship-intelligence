const CACHE='relationship-intelligence-v422-event-timeline';
const ASSETS=[
  './',
  './index.html',
  './styles.css?v=422-event-timeline',
  './expert-engine.js?v=422-event-timeline',
  './coach-router.js?v=422-event-timeline',
  './coach-database.js?v=422-event-timeline',
  './app.js?v=422-event-timeline',
  './normal-date.js?v=422-event-timeline',
  './live-metrics.js?v=422-event-timeline',
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
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request).then(response=>
      caches.open(CACHE).then(cache=>cache.put(event.request,response.clone())).then(()=>response)
    ).catch(()=>caches.match(event.request).then(cached=>cached||caches.match('./index.html'))));
    return;
  }
  const requestUrl=new URL(event.request.url);
  if(requestUrl.pathname.endsWith('/app.js')){
    event.respondWith(fetch(event.request).catch(()=>caches.match('./app.js?v=422-event-timeline')));
    return;
  }
  event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request)));
});
