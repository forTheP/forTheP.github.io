'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "app.js": "dba3662692d24eaad83e194874aece25",
"assets/AssetManifest.json": "9d09ab1a104b810a52d8d142aaa7816c",
"assets/assets/icons/add-subtract.svg": "38c0bbc012f993b4750080fd6b71c00a",
"assets/assets/icons/align-text-left.svg": "1a74a6512b1a30375525b5e8394fafdd",
"assets/assets/icons/analysis.svg": "bc207e9accc12beb088dac95f0604834",
"assets/assets/icons/chart-pie.svg": "052759a5732d360d6da54f146d183089",
"assets/assets/icons/communication.svg": "9b42920f63589d15888dbdd2f25fe119",
"assets/assets/icons/copy-one.svg": "4644e26c79069265ff25484c7eef33a6",
"assets/assets/icons/data-display.svg": "4327a56c820afb0e2b1235cf24ab086f",
"assets/assets/icons/data-lock.svg": "bd445f79c31e38e089b35a4e83a64311",
"assets/assets/icons/dollar.svg": "f8628b71ca708bc765f54139c5addbc3",
"assets/assets/icons/every-user.svg": "ff484a2f6970a5d4c1287354e2dd1662",
"assets/assets/icons/exchange-one.svg": "54e9d0ba0a2c91c01f5ddaac61ef15b2",
"assets/assets/icons/file-code.svg": "21839c6b1d71f35bc6976d01fb1ea562",
"assets/assets/icons/file-conversion.svg": "25571a63a5987ef1b81d5fa788ae89c1",
"assets/assets/icons/file-success.svg": "b95b04b6c0645ccff470b3ce16764933",
"assets/assets/icons/find.svg": "95392c7c23ce0884576dd21d4bd9dcb6",
"assets/assets/icons/form-one.svg": "8d4418feaf40c78e188c46be17afff05",
"assets/assets/icons/github-one.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/id-card-v.svg": "b1ba90ab53235a292e521045488296dd",
"assets/assets/icons/info.svg": "472c875b0295a14d6842fca8bada438c",
"assets/assets/icons/iphone.svg": "07ed725db6487f190ad193891bc94680",
"assets/assets/icons/memory.svg": "f49eaeeeaad66c433e375ddfea5e0706",
"assets/assets/icons/message-unread.svg": "0dbd5d7df75ff50003b067999e42aac5",
"assets/assets/icons/Search.svg": "e633980006dbd98a91ae6e2d30afa7c3",
"assets/assets/icons/send.svg": "9d91f7acecb9d1af9b9cbe4ffa7b7460",
"assets/assets/icons/transfer-data.svg": "8cfdf6adb6e60f747661ad3ad833895c",
"assets/assets/icons/upload.svg": "3d0b558ad19f248579d8fd808c0087e2",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/logo1.png": "566999178a4b611180a9cac768112043",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/lottie/bomb1.json": "19fd455f5af689a53b03bc9c4eb16b0c",
"assets/assets/lottie/crown.json": "cc85e16641decedb4edb91e381ca4be3",
"assets/assets/lottie/crown_white.json": "f63a4e50417bece4c8069f87e0d34751",
"assets/FontManifest.json": "cb57a22dbcdb2286925ba897c49d41bc",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/NotoSansKR-Bold.otf": "b59ac7cf449e57469daf2480fafbddf4",
"assets/fonts/NotoSansKR-Regular.otf": "913f146b0200b19b17eb4de8b4427a9c",
"assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/NOTICES": "2f6f1df2b8e454bd9a4da8ecf4eeb119",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "6a2925df938d85a7b55d2c079b6d9f78",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "57a7cd4d319060fae53c41fa6f538b90",
"/": "57a7cd4d319060fae53c41fa6f538b90",
"main.dart.js": "5ed978c9428a1b75c117079842f53ef7",
"manifest.json": "1fc9f348db003254a594bc859cbb487b",
"version.json": "36ecbac4c5ed0bd9bb97a5afc47db4a5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
