'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "3eaade81921353e610d8f5bdf0e29135",
"/": "3eaade81921353e610d8f5bdf0e29135",
"main.dart.js": "0e9386afec495cd67d26e809e9f3a4c1",
"favicon.png": "ec16cd5c800b387a93bcafb696911b6d",
"icons/Icon-192.png": "ec16cd5c800b387a93bcafb696911b6d",
"icons/Icon-512.png": "ec16cd5c800b387a93bcafb696911b6d",
"manifest.json": "6312746126e98da52b8343d768ad6cea",
"assets/LICENSE": "02e4935b4c61144fbb47dbb308f07ef1",
"assets/images/bridge.jpg": "ec16cd5c800b387a93bcafb696911b6d",
"assets/AssetManifest.json": "9ebc438be026e0c83e3eb5a3fc38e552",
"assets/FontManifest.json": "dd2a43731eb27662124790d5366bfbf1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/UbuntuMono-Bold.ttf": "46f0a3ad815962005753c02c4181aadc",
"assets/fonts/UbuntuMono-Italic.ttf": "0d4d04d0a83b45c7ea224c63f5570fd9",
"assets/fonts/UbuntuMono-Regular.ttf": "e097b71641f2524e09820d9122b7e910",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/NunitoSans-ExtraLightItalic.ttf": "cf8d9c6c81866d3bdfc1f08d6ea80d8d"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
