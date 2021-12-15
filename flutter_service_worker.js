'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "07b5e78f9f4c5c978915233f7b250e74",
"assets/assets/Branding/AndroidBG.png": "198acb353c7dcca81d3f062355933924",
"assets/assets/Branding/AndroidFG.png": "72de41b4667fb6c42b984a55aecd3d19",
"assets/assets/Branding/AndroidFG2.png": "14cb47e01a3f5a2210ec65e25d6885b3",
"assets/assets/Branding/Icon.png": "e97c7bdb5f39700efff635dc3d2d6cf2",
"assets/assets/fonts/primer_print.ttf": "f4b9a102b98c7f85fa6596b6c5609cd3",
"assets/assets/fonts/primer_print_bold.ttf": "a8dea059612584f3ac06cef8521f2b8d",
"assets/assets/google_fonts/OFL.txt": "cabc2d83f0db00f1c4d8ab4f5cd8a34d",
"assets/assets/google_fonts/Quicksand-VariableFont_wght.ttf": "51b6fe996746b9607630d2cd0f81b913",
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
"assets/FontManifest.json": "34aa298fa57f91e35eeb744d0c61beee",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "bcc1efbd2e9c82a3e536b6efee1595ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"icons/android-icon-144x144.png": "dbc40df879e15ab362924f1aafb02d45",
"index.html": "f9a92d7d4b8776af090d787b37fb130c",
 
"main.dart.js": "5e661a8649559a818ab44335fba021d8",
"manifest.json": "2ebf79023cee92a5c824a88178cbe9a1",
"version.json": "7ac24d16e38d491bec4e62c2ed9ce749"
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
