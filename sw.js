const CACHE='relationship-intelligence-v3922-single-coach-intake';
const ASSETS=[
  './',
  './index.html',
  './styles.css?v=3922-single-coach-intake',
  './expert-engine.js?v=3922-single-coach-intake',
  './coach-router.js?v=3922-single-coach-intake',
  './coach-database.js?v=3922-single-coach-intake',
  './app.js?v=3922-single-coach-intake',
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
    event.respondWith(fetch(event.request).catch(()=>caches.match('./app.js?v=3922-single-coach-intake')));
    return;
  }
  event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request)));
});
