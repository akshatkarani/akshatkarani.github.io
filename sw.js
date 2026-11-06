// The previous version of this site registered a caching service worker at
// /sw.js. Browsers that still have it installed will fetch this file on their
// next visit, install it, and it will clear the old caches and unregister
// itself so returning visitors see the current site.
//
// Safe to delete once old visitors have cycled through (a few months).
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => caches.delete(key)));
    await self.registration.unregister();
    const windows = await self.clients.matchAll({ type: 'window' });
    windows.forEach((client) => client.navigate(client.url));
  })());
});
