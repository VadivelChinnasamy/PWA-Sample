const staticDevCoffee = "picsday-site"
const assets = [
  "/",
  "/pwa-sample/index.html",
  "/pwa-sample/style.css",
  "/pwa-sample/app.js",
  "/pwa-sample/images/img-1.jpg",
  "/pwa-sample/images/img-2.jpg",
  "/pwa-sample/images/img-3.jpg",
  "/pwa-sample/images/img-4.jpg",
  "/pwa-sample/images/img-5.jpg",
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

/*
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

Update UI based on how the PWA was launched #

@media all and (display-mode: standalone) {
  body {
    background-color: yellow;
  }
}
*/