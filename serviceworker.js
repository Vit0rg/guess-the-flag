const cacheName = 'static-data';

const resourcesToPrecache = 
[
  '/',
  'index.html',
  'assets/script.js',
  'assets/img/flag.svg',
  'assets/img/globe.svg',
  'assets/img/globe32.svg',
  'assets/img/globe64.svg',
  'assets/img/globe128.svg',
  'assets/img/globe144.png',
  'assets/img/globe192.png',
  'assets/img/globe256.svg',
  'assets/img/globe512.png',
  'assets/styles/main.css',
  'manifest.json'
]

self.addEventListener('install', (event) =>
{
  event.waitUntil(
    caches.open(cacheName)
    .then((cache) =>
    {
      return cache.addAll(resourcesToPrecache)
    })
  );

});

// when the browser requests a resource
addEventListener('fetch', event => 
{
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.add('/offline.html'))
  );
  event.respondWith(
  // look in the cache for the resource
  caches.match(event.request).then(async response => 
  {
    if (response) 
    {
      // is in cache, respond with the cached resource
      return response;
    }
    // if not found fetch it from the network
    const networkResponse = await fetch(event.request);
    // response needs to be cloned if going to be used more than once
    const clonedResponse = networkResponse.clone();
          
    // save response to runtime cache for later use
    const runtimeCache = await caches.open('runtime-cache');
    runtimeCache.put(event.request, networkResponse);
          
    // respond with the cloned network response
    return Promise.resolve(clonedResponse);
  })
  );
});

self.addEventListener('activate', event => 
{
  console.log("Deleting old cache")
  event.waitUntil(
    self.caches.delete(cacheName),
    //self.caches.delete("runtime-cache")
  )
})
