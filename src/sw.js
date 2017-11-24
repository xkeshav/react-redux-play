/*global self*/
/*eslint no-restricted-globals: ["off", "self"]*/
(function() {
  var filesToCache = [
    '.',
    './assests',
    'index.html'
  ];

  var staticCacheName = 'pages-cache-v1';

  self.addEventListener('install', (event) => {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(staticCacheName)
      .then((cache) => {
        return cache.addAll(filesToCache);
      }).then(() => {
        return self.skipWaiting();
      }).catch((err) => {
        console.error('failed to cache', err);
      })
    );
  });

  self.addEventListener('fetch', (event) => {
    console.log('Fetch event for ==>', event.request.url);
    event.respondWith( async function() {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          console.log(`%cFound  ${event.request.url} in cache`, `color:green`);
          return cachedResponse;
        }
        console.log(`%cNetwork request for ${event.request.url}`, `color:blue`);
        return fetch(event.request);
          // if (response.status === 404) {
          //   return caches.match('pages/404.html');
          // }
          // return caches.open(staticCacheName).then(function(cache) {
          //   console.log('cache open', cache);
          //   if (event.request.url.indexOf('test') < 0) {
          //     console.log('inside if');
          //     cache.put(event.request.url, response.clone());
          //   }
          //   return response;
          }());
  });

  // TODO 3 - intercept network requests

  self.addEventListener('activate', (event) => {
    console.log('Activating new service worker...');
    var cacheWhitelist = [staticCacheName];
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all( cacheNames.map( (cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
            return false;
          })
        );
      })
    );
  });

})();
