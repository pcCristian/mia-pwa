
self.addEventListener('install', (event) => {
  console.log('Service worker installed.');
  self.skipWaiting();
});
self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
