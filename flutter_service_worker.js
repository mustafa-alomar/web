'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fa8edf7497c1a6c049dd332264c1bee3",
"assets/assets/CMakeLists.txt": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "4874e1caf171a5f04e7b8b3667d020df",
"assets/fonts/Hacen_Tunisia_Bold.ttf": "fe04d1be46f7a04bada6f87558801376",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/image/-01.png": "c7e0e280a8ef5bd4d82c742908e6f701",
"assets/image/ar.jpg": "3085e9ae21e2f7753085454532bd0937",
"assets/image/ar2.jpg": "db5cc7896f6a63d9e8aba24d2ddc87ee",
"assets/image/bb.jpg": "0e9e46a7ea242e8594667ec6121ec108",
"assets/image/bkr.jpg": "3439f5866875bf48140de4d9bc6641d1",
"assets/image/calzone5.jpg": "91d3a72b2514bc2a033752e5849c1c6f",
"assets/image/hot0.jpg": "48843f3878e1b111bb476cdc9ed11fa1",
"assets/image/hot1.jpg": "951bb0a59b6bfadf877cc2020ce3a725",
"assets/image/hot2.jpg": "2b3990b32ac50e7c327444c4dde5f4d2",
"assets/image/ice1.jpg": "58a7a105b81a22673d1d4da693cd54a4",
"assets/image/ice2.jpg": "7d48777b41272483c7aa6c0b8a047296",
"assets/image/ice3.jpg": "8efff54f0a9900e9cc38e950efdbd121",
"assets/image/ice4.jpg": "7f7b417218f913790b488dfaa5e07c12",
"assets/image/icon.png": "225c9a638fb0a55112cfece92b64052e",
"assets/image/juice0.jpg": "7793f868eb61882272372eaa5a12e5e2",
"assets/image/juice1.jpg": "ce1943c6b905ac230019127a651f6e53",
"assets/image/juice2.jpg": "29bfd117ddec0a53a6f67b72cbd94737",
"assets/image/juice3.jpg": "d0daf114b1955b4070ddb5c6f023e6ef",
"assets/image/k-w1.jpg": "a85a5d18091bd8b234316357fdcbda5e",
"assets/image/k-w2.jpg": "6e05a3f6582218f373c3a75b79f590ec",
"assets/image/k-w3.jpg": "db278fd2a72d4b4b25ef8c31603564ae",
"assets/image/kalzon0.jpg": "2a6bab9153801558715d86c3dd636844",
"assets/image/ku0.jpg": "43e39a6cc0f80937e76043afde8069df",
"assets/image/ku2.jpg": "b9949507808cf7060b25e1cf8e03a2dd",
"assets/image/m-l1.jpg": "a699430cea844f2d8d76d1b415ddd2ff",
"assets/image/m-l2.jpg": "62d296850d168b439f6adb3895a8bdaa",
"assets/image/m-l3.jpg": "c4ad5ac07698e47363bebaa47210003e",
"assets/image/moj2.jpg": "e994aab6f83c3c19e403667bc50eaa05",
"assets/image/moj3.jpg": "752f69ee453689fd138acbee07327551",
"assets/image/muj1.jpg": "31c41c62e7d4c22c939bb9cdff684801",
"assets/image/piza1.jpg": "aed07b1453c41d223d55cd96f2c0c5a4",
"assets/image/piza2.jpg": "f2a4be7c747fa5897a44c6038f47b781",
"assets/image/piza3.jpg": "ef9f8c266546ab3fd05344dd95bd2b16",
"assets/image/start.png": "9656e0723f12b6b346a8587b831cf305",
"assets/NOTICES": "23577ea931c3fecfe8d1cbb7fe9c498f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/android-chrome-192x192.png": "1772d77d7c9667582427d8cc2145b51b",
"icons/android-chrome-512x512.png": "314bd3c4e942203d8a7805e9aad2e1ad",
"icons/apple-touch-icon.png": "af8b3d65ead0e614d99d7a095907f8e6",
"index.html": "8b3d857f17ef7eb711566b62ba352152",
"/": "8b3d857f17ef7eb711566b62ba352152",
"logo.png.png": "314bd3c4e942203d8a7805e9aad2e1ad",
"main.dart.js": "78140b6a9cc0a77ebaf0bd92bfb5c3ac",
"manifest.json": "387ae123dd69b4d84a9c036d80c2a982",
"version.json": "71ec481a2b9be8c7e4c5d0d56e3d1e6d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
