const CACHE='relationship-intelligence-v420-normal-date';
const ASSETS=[
  './',
  './index.html',
  './styles.css?v=420-normal-date',
  './expert-engine.js?v=420-normal-date',
  './coach-router.js?v=420-normal-date',
  './coach-database.js?v=420-normal-date',
  './app.js?v=420-normal-date',
  './normal-date.js?v=420-normal-date',
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
    event.respondWith(fetch(event.request).catch(()=>caches.match('./app.js?v=420-normal-date')));
    return;
  }
  event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request)));
});
