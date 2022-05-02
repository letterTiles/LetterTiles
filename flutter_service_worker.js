'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0630bffb047115676f403fbb14d7c0d9",
"assets/assets/Branding/AndroidBG.png": "198acb353c7dcca81d3f062355933924",
"assets/assets/Branding/AndroidFG.png": "72de41b4667fb6c42b984a55aecd3d19",
"assets/assets/Branding/AndroidFG2.png": "14cb47e01a3f5a2210ec65e25d6885b3",
"assets/assets/Branding/Icon.png": "e97c7bdb5f39700efff635dc3d2d6cf2",
"assets/assets/Branding/Icon512.png": "1d3168ce0ac50d6566e714c0283939f0",
"assets/assets/fonts/primer_print.ttf": "f4b9a102b98c7f85fa6596b6c5609cd3",
"assets/assets/fonts/primer_print_bold.ttf": "a8dea059612584f3ac06cef8521f2b8d",
"assets/assets/images/grass.png": "942fd612ff3bc6907ce0167ea5a992ed",
"assets/assets/images/parchment_texture.jpg": "19af62ef66085514371c7b433398ba9c",
"assets/assets/images/sky_with_sun.png": "0b66ecca02e1745e9cf9d1875ab6e158",
"assets/assets/Info/Flyout-About.png": "f3d74ea42c820d283f8001dab6f549f5",
"assets/assets/Landscape_4-3/grass.png": "942fd612ff3bc6907ce0167ea5a992ed",
"assets/assets/Landscape_4-3/MenuForeground.png": "f521b7ac365b45a5f98ccf01f7e1b8b6",
"assets/assets/Landscape_4-3/Sky.png": "34d38d5972b965af09954257d9d4eae6",
"assets/assets/Landscape_4-3/SkyWithLetters.png": "768e3d8ebaa88e588006fdfbd0ab61eb",
"assets/assets/Landscape_4-3/sky_with_sun.png": "0b66ecca02e1745e9cf9d1875ab6e158",
"assets/assets/Lesson_Icons/Back-icon-no-circle.png": "0fc659545577e8c71490a86e2791c0a4",
"assets/assets/Lesson_Icons/Go_Back_One.png": "147a9d34289f0e6df39ebed3c6b9433c",
"assets/assets/Lesson_Icons/Trash-icon-no-circle.png": "d37702223520e57d6c6d9052b8a6ea0f",
"assets/assets/Level_Buttons/BlankCloud.png": "8e6bd3c7ab29877c4f2a9636f5f880a3",
"assets/assets/Level_Buttons/GettingStarted.png": "a0074aa94cd3858f9db80da7c8b3bfdf",
"assets/assets/Level_Buttons/level_1_btn.png": "5ffa05eec2f0dd4b98d58dc603eed362",
"assets/assets/Level_Buttons/level_2_btn.png": "d30d8c8e6b59d9a40d846e6b3f59534b",
"assets/assets/Level_Buttons/level_k_btn.png": "932bd357b3bda60dc672b42644e505a6",
"assets/assets/Level_Buttons/PracticeA-Z.png": "2fa24552eff328312f227b1decbce95d",
"assets/FontManifest.json": "4b83ac5a2f10f6efd83eaab2265025a9",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "88a160495b3d7c9eca88489ededbe637",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/android-icon-144x144.png": "dbc40df879e15ab362924f1aafb02d45",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ea9aa8956513882db7e1467112c11c28",
 
"main.dart.js": "e90b52eab7a9e209b11be21389f9c881",
"manifest.json": "f434df8822c77e1ff24a654e13fb7788",
"script.js": "b3d0451bfae78701a6a77ea4b04be407",
"version.json": "c2fb7cf41f31b23dc1d2471cb34b14b2"
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
