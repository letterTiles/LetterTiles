'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f159307000b71d91d9b5533b16b483bc",
"assets/assets/AndroidFG2.png": "14cb47e01a3f5a2210ec65e25d6885b3",
"assets/assets/BlankCloud.png": "01246d39ccb00b051ec1491c66718e8d",
"assets/assets/Branding/AndroidBG.png": "198acb353c7dcca81d3f062355933924",
"assets/assets/Branding/AndroidFG.png": "72de41b4667fb6c42b984a55aecd3d19",
"assets/assets/Branding/App_Title.png": "75a81840094e8bd732dda9f51b00cc0a",
"assets/assets/Branding/GnBLogo.png": "f2224ebab69253a9eaa4def5e58d00df",
"assets/assets/Branding/Icon.png": "e97c7bdb5f39700efff635dc3d2d6cf2",
"assets/assets/google_fonts/OFL.txt": "cabc2d83f0db00f1c4d8ab4f5cd8a34d",
"assets/assets/google_fonts/Quicksand-VariableFont_wght.ttf": "51b6fe996746b9607630d2cd0f81b913",
"assets/assets/Info/Flyout-About.png": "4b4ab37c7b6040b22d43e4b971a419e4",
"assets/assets/Landscape_4-3/Sky.png": "170e1415300c96f0ee4eb2cbd3f35ee0",
"assets/assets/Landscape_4-3/SkyWithLetters.png": "9d766b898ac73c704f4c88ad8d096923",
"assets/assets/Lesson_Icons/Back-icon-no-circle.png": "0fc659545577e8c71490a86e2791c0a4",
"assets/assets/Lesson_Icons/Go_Back_One.png": "147a9d34289f0e6df39ebed3c6b9433c",
"assets/assets/Lesson_Icons/Trash-icon-no-circle.png": "d37702223520e57d6c6d9052b8a6ea0f",
"assets/assets/Lesson_Landscape_4-3/grass.png": "7616f54b62481100cf355cd15883db7a",
"assets/assets/Lesson_Landscape_4-3/sky.png": "adddd9a7324bea19730aa73e5b2bb545",
"assets/assets/levelK.png": "333d555fa2fada9d0b471171bd971fa8",
"assets/assets/Level_Buttons/GettingStarted.png": "a0074aa94cd3858f9db80da7c8b3bfdf",
"assets/assets/Level_Buttons/level_1_btn.png": "78b15e0f61bac71db7350e9adb361a61",
"assets/assets/Level_Buttons/level_2_btn.png": "78dc43bc03f770e3986a54081d12b56f",
"assets/assets/Level_Buttons/level_k_btn.png": "d8124b3c1330fbb7ed2d1d486b733cda",
"assets/assets/Level_Buttons/PracticeA-Z.png": "b103f66f0831baae598d48f52af8d415",
"assets/assets/MenuForeground.png": "5a750734930531f50a4c09dbebfaed6b",
"assets/FontManifest.json": "3da9d71bd4950b5338888dd9e4ed6d5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "bcc1efbd2e9c82a3e536b6efee1595ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"icons/android-icon-144x144.png": "dbc40df879e15ab362924f1aafb02d45",
"index.html": "b99443d94c223d8075946ed7ab590ce1",
"/": "b99443d94c223d8075946ed7ab590ce1",
"main.dart.js": "9cc205469ffbe1a455ca340e599b5efa",
"manifest.json": "2ebf79023cee92a5c824a88178cbe9a1",
"version.json": "7ac24d16e38d491bec4e62c2ed9ce749"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
