'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ed6ad92f172f21224516e64ad63901a2",
"assets/assets/AndroidFG2.png": "14cb47e01a3f5a2210ec65e25d6885b3",
"assets/assets/Blank%2520Cloud.png": "01246d39ccb00b051ec1491c66718e8d",
"assets/assets/Branding/AndroidBG.png": "198acb353c7dcca81d3f062355933924",
"assets/assets/Branding/AndroidFG.png": "72de41b4667fb6c42b984a55aecd3d19",
"assets/assets/Branding/App%2520Title.png": "75a81840094e8bd732dda9f51b00cc0a",
"assets/assets/Branding/GnBLogo.png": "f2224ebab69253a9eaa4def5e58d00df",
"assets/assets/Branding/Icon.png": "e97c7bdb5f39700efff635dc3d2d6cf2",
"assets/assets/google_fonts/OFL.txt": "cabc2d83f0db00f1c4d8ab4f5cd8a34d",
"assets/assets/google_fonts/Quicksand-VariableFont_wght.ttf": "51b6fe996746b9607630d2cd0f81b913",
"assets/assets/Info/Flyout-About.png": "4b4ab37c7b6040b22d43e4b971a419e4",
"assets/assets/Landscape%252016-9/Bees%252016-9.png": "032ad90252ecf6844adf1a975879674a",
"assets/assets/Landscape%252016-9/Butterflies%252016-9.png": "e10c9649015788d3ccf33fe6eb009dcc",
"assets/assets/Landscape%252016-9/Hills%252016-9.png": "60b6b2010ec3b41e50fb269fcf8815ce",
"assets/assets/Landscape%252016-9/Landscape-Whole%252016-9.png": "2ae714da6dcd0018126e0c94e7397c6b",
"assets/assets/Landscape%252016-9/Letters%2520Overlay%252016-9.png": "78a0b5c811a37fc3f269f7fd26e41a9d",
"assets/assets/Landscape%252016-9/Sky%252016-9.png": "bb2b6a97e9fae0843e39e6e587332536",
"assets/assets/Landscape%252016-9/Sky%2520with%2520Letters%252016-9.png": "2da4db1d90ef4403d2911442180ea0b1",
"assets/assets/Landscape%252016-9/Trees%2520Hill%252016-9.png": "b21ffe55eab24cac09bf3e194e1e5401",
"assets/assets/Landscape%25204-3/Bees%25204-3.png": "912a5cf6a3949fd30d66df2f6477b163",
"assets/assets/Landscape%25204-3/Butterflies%25204-3.png": "37ad26fbc1313fd21b096f73fedb5d08",
"assets/assets/Landscape%25204-3/Hills%25204-3.png": "6374c731c65b268941f493d92682b1c3",
"assets/assets/Landscape%25204-3/Landscape%25204-3.png": "503fde69d90e45f3a7c68a5428f9b6d1",
"assets/assets/Landscape%25204-3/Letters%2520Overlay%25204-3.png": "fc5060de3ce69ea6b0ee79d4aac26dc1",
"assets/assets/Landscape%25204-3/Sky%25204-3.png": "170e1415300c96f0ee4eb2cbd3f35ee0",
"assets/assets/Landscape%25204-3/Sky%2520with%2520Letters%25204-3.png": "9d766b898ac73c704f4c88ad8d096923",
"assets/assets/Landscape%25204-3/Trees%2520Hill%25204-3.png": "922a0c0c14abea079b864b46528ae78b",
"assets/assets/Lesson%2520Icons/Back-icon-no%2520circle.png": "0fc659545577e8c71490a86e2791c0a4",
"assets/assets/Lesson%2520Icons/Back-icon.png": "b129ae950cbf368891ebb27799ee71f9",
"assets/assets/Lesson%2520Icons/Gear-icon-no%2520circle.png": "6cd9dfae7126034371d0ccd80b8bc7a2",
"assets/assets/Lesson%2520Icons/Gear-icon.png": "c63035f7578bb78708e1ffce00c11058",
"assets/assets/Lesson%2520Icons/Go%2520Back%2520One.png": "147a9d34289f0e6df39ebed3c6b9433c",
"assets/assets/Lesson%2520Icons/Trash-icon-no%2520circle.png": "d37702223520e57d6c6d9052b8a6ea0f",
"assets/assets/Lesson%2520Icons/Trash-icon.png": "239ff0f952cc1b1622a12d8c76dd427d",
"assets/assets/Lesson%2520Landscape%25204-3/grass.png": "7616f54b62481100cf355cd15883db7a",
"assets/assets/Lesson%2520Landscape%25204-3/sky.png": "adddd9a7324bea19730aa73e5b2bb545",
"assets/assets/Level%2520Buttons/Getting%2520Started.png": "a0074aa94cd3858f9db80da7c8b3bfdf",
"assets/assets/Level%2520Buttons/Level%25201%2520Btn.png": "78b15e0f61bac71db7350e9adb361a61",
"assets/assets/Level%2520Buttons/Level%25202%2520Btn.png": "78dc43bc03f770e3986a54081d12b56f",
"assets/assets/Level%2520Buttons/Level%2520K%2520Btn.png": "d8124b3c1330fbb7ed2d1d486b733cda",
"assets/assets/Level%2520Buttons/PracticeA-Z.png": "b103f66f0831baae598d48f52af8d415",
"assets/assets/levelK.png": "333d555fa2fada9d0b471171bd971fa8",
"assets/assets/MenuForeground.png": "5a750734930531f50a4c09dbebfaed6b",
"assets/FontManifest.json": "3da9d71bd4950b5338888dd9e4ed6d5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "bcc1efbd2e9c82a3e536b6efee1595ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"icons/android-icon-144x144.png": "dbc40df879e15ab362924f1aafb02d45",
"icons/android-icon-192x192.png": "d3dbaa1e6ccf96c58e24e8f9a26adb56",
"icons/android-icon-36x36.png": "45643e43d6b582f3d3a3d460ef932d61",
"icons/android-icon-48x48.png": "0e009ab7cc112faf12183c6db449d318",
"icons/android-icon-72x72.png": "15f32dc7eeab826f10183fee5d39f76f",
"icons/android-icon-96x96.png": "c6f6d7c28912484ca8ad93f41d1a749e",
"icons/apple-icon-114x114.png": "83b6307f80409628546ef6f833264fc8",
"icons/apple-icon-120x120.png": "b4a3ad00c2e32122d6d227159fc7ec72",
"icons/apple-icon-144x144.png": "4f2b327097804a01a4b734b75d2da844",
"icons/apple-icon-152x152.png": "92b323178c8a571fa01ff5252c5744d6",
"icons/apple-icon-180x180.png": "d42a25561f91e2da7c86165f818bd5db",
"icons/apple-icon-57x57.png": "5cdaeb139f035e81251f10d9e8c1963e",
"icons/apple-icon-60x60.png": "c3386cf0db06cb3bffad14561446c280",
"icons/apple-icon-72x72.png": "1e15410afc3bedfe82759a0eb6eccec9",
"icons/apple-icon-76x76.png": "48d040a975409ea968fcdbaa263ebc78",
"icons/apple-icon-precomposed.png": "cf9899f968f93b9b75bb65832e3cabac",
"icons/apple-icon.png": "cf9899f968f93b9b75bb65832e3cabac",
"icons/favicon-16x16.png": "fc65abac965a489c0223439ea0617444",
"icons/favicon-32x32.png": "678868d78eaddef04b9721cf37252b5b",
"icons/favicon-96x96.png": "ba4627e9c4b407c7e252a662d0ce309f",
"icons/favicon.ico": "85f0ed79e3a408574ab979ede28ecfa9",
"icons/ms-icon-144x144.png": "4f2b327097804a01a4b734b75d2da844",
"icons/ms-icon-150x150.png": "fef83ec258accbc01b685ee3ca63d145",
"icons/ms-icon-310x310.png": "4f6a1013d9d76518ba418cf7bb3ec2a8",
"icons/ms-icon-70x70.png": "5913b86f50c6896a4bcb2441b9eae11a",
"index.html": "d09a90940c81ab2be9cf6c86ceabb3eb",
"/": "d09a90940c81ab2be9cf6c86ceabb3eb",
"main.dart.js": "b350704d16e5ed19d0818bc12125315f",
"manifest.json": "2349430711077152580c02ab15dcc9ee",
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
