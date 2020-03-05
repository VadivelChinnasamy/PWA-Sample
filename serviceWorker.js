const staticDevCoffee = "picday-s1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/images/img-1.jpg",
  "/images/img-2.jpg",
  "/images/img-3.jpg",
  "/images/img-4.jpg",
  "/images/img-5.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});