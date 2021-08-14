'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "427b85ea5743303488a213f48cf00315",
"assets/assets/Branding/App%2520Title.png": "75a81840094e8bd732dda9f51b00cc0a",
"assets/assets/Branding/desktop.ini": "44d24281ebf09a0285f90baaba945182",
"assets/assets/Branding/GnB%2520Logo-Dropshadow.png": "f2224ebab69253a9eaa4def5e58d00df",
"assets/assets/Info/Flyout-About.png": "4b4ab37c7b6040b22d43e4b971a419e4",
"assets/assets/Landscape%252016-9/Bees%252016-9.png": "032ad90252ecf6844adf1a975879674a",
"assets/assets/Landscape%252016-9/Butterflies%252016-9.png": "e10c9649015788d3ccf33fe6eb009dcc",
"assets/assets/Landscape%252016-9/desktop.ini": "44d24281ebf09a0285f90baaba945182",
"assets/assets/Landscape%252016-9/Hills%252016-9.png": "60b6b2010ec3b41e50fb269fcf8815ce",
"assets/assets/Landscape%252016-9/Landscape-Whole%252016-9.png": "2ae714da6dcd0018126e0c94e7397c6b",
"assets/assets/Landscape%252016-9/Letters%2520Overlay%252016-9.png": "78a0b5c811a37fc3f269f7fd26e41a9d",
"assets/assets/Landscape%252016-9/Sky%252016-9.png": "bb2b6a97e9fae0843e39e6e587332536",
"assets/assets/Landscape%252016-9/Sky%2520with%2520Letters%252016-9.png": "2da4db1d90ef4403d2911442180ea0b1",
"assets/assets/Landscape%252016-9/Trees%2520Hill%252016-9.png": "b21ffe55eab24cac09bf3e194e1e5401",
"assets/assets/Landscape%25204-3/Bees%25204-3.png": "912a5cf6a3949fd30d66df2f6477b163",
"assets/assets/Landscape%25204-3/Butterflies%25204-3.png": "37ad26fbc1313fd21b096f73fedb5d08",
"assets/assets/Landscape%25204-3/desktop.ini": "44d24281ebf09a0285f90baaba945182",
"assets/assets/Landscape%25204-3/Hills%25204-3.png": "6374c731c65b268941f493d92682b1c3",
"assets/assets/Landscape%25204-3/Landscape%25204-3.png": "503fde69d90e45f3a7c68a5428f9b6d1",
"assets/assets/Landscape%25204-3/Letters%2520Overlay%25204-3.png": "fc5060de3ce69ea6b0ee79d4aac26dc1",
"assets/assets/Landscape%25204-3/Sky%25204-3.png": "170e1415300c96f0ee4eb2cbd3f35ee0",
"assets/assets/Landscape%25204-3/Sky%2520with%2520Letters%25204-3.png": "9d766b898ac73c704f4c88ad8d096923",
"assets/assets/Landscape%25204-3/Trees%2520Hill%25204-3.png": "922a0c0c14abea079b864b46528ae78b",
"assets/assets/Lesson%2520Icons/Back-icon-no%2520circle.png": "0fc659545577e8c71490a86e2791c0a4",
"assets/assets/Lesson%2520Icons/Back-icon.png": "b129ae950cbf368891ebb27799ee71f9",
"assets/assets/Lesson%2520Icons/desktop.ini": "44d24281ebf09a0285f90baaba945182",
"assets/assets/Lesson%2520Icons/Gear-icon-no%2520circle.png": "6cd9dfae7126034371d0ccd80b8bc7a2",
"assets/assets/Lesson%2520Icons/Gear-icon.png": "c63035f7578bb78708e1ffce00c11058",
"assets/assets/Lesson%2520Icons/Trash-icon-no%2520circle.png": "d37702223520e57d6c6d9052b8a6ea0f",
"assets/assets/Lesson%2520Icons/Trash-icon.png": "239ff0f952cc1b1622a12d8c76dd427d",
"assets/assets/Lesson%2520Landscape%25204-3/grass.png": "7616f54b62481100cf355cd15883db7a",
"assets/assets/Lesson%2520Landscape%25204-3/sky.png": "adddd9a7324bea19730aa73e5b2bb545",
"assets/assets/Level%2520Buttons/Getting%2520Started.png": "a0074aa94cd3858f9db80da7c8b3bfdf",
"assets/assets/Level%2520Buttons/Level%25201%2520Btn.png": "78b15e0f61bac71db7350e9adb361a61",
"assets/assets/Level%2520Buttons/Level%25202%2520Btn.png": "78dc43bc03f770e3986a54081d12b56f",
"assets/assets/Level%2520Buttons/Level%2520K%2520Btn.png": "d8124b3c1330fbb7ed2d1d486b733cda",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f69a3e0e11f7fd15ac14cca7c81cb8ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8453c876ec9ea42fec5bf4358c82db6f",
"/": "8453c876ec9ea42fec5bf4358c82db6f",
"main.dart.js": "0914a7a8a7ce69139b985313d8703c19",
"manifest.json": "667b57d617695152bc8cb1cef352eb2b",
"version.json": "579dcdc0b4abd93065110cecd12a71b5"
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
