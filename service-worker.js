self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('crickiq-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/home.html',
        '/team_list.html',
        '/start_match.html',
        '/performance.html',
        '/css/style.css',
        '/js/app.js'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});