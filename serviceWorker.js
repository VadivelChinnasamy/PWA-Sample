const staticDevCoffee = "picsday-site"
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
  "/images/picsday.png",
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

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
});


window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs installed');
});

/*
Update UI based on how the PWA was launched #

@media all and (display-mode: standalone) {
  body {
    background-color: yellow;
  }
}
*/