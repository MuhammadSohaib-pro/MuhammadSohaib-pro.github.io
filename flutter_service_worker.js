'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4cda4990b5d05a62215ea85dfe88b1fc",
"assets/AssetManifest.bin.json": "16d36b9f826e7f472605bd4561c16cb2",
"assets/AssetManifest.json": "f9d1b01b9ec1e4d0fad57796ffe0b1e9",
"assets/assets/fonts/Satoshi-Regular.otf": "177a4dda04b52dedbd966942e932c5dc",
"assets/assets/images/androidstudio_icon.png": "a28378dce49c375402ba3840ba130704",
"assets/assets/images/bloc_icon.png": "d56c9b59ae31df80dc5b3adec498ca21",
"assets/assets/images/contactbg.png": "61f947dab1b0f9389fb63e69196f2682",
"assets/assets/images/falconesport.png": "b1d6167aa38eea3b807b3079f96150ff",
"assets/assets/images/motorcut.png": "476a903068d18772c9833c069674ffb3",
"assets/assets/images/profile.jpg": "2e64888944565378d5610935a5669129",
"assets/assets/images/rentnroam.png": "295d31f560cda546273f747b444b8860",
"assets/assets/images/restapi_icon.png": "0182a5f9d4ccaca552d93f3d0f3882a3",
"assets/assets/images/routemaster.png": "b256678fcbdee3eddd0188670381aeb7",
"assets/assets/images/xcode_icon.png": "c0173f3571dd78e88eb65acf0a6c57e7",
"assets/assets/Muhammad%2520Sohaib%2520Flutter.pdf": "513cff21b8414cdfcd656ed82f86b026",
"assets/assets/svg/dartlang_icon.svg": "0a0434688a1bd1ea04d9b53143793716",
"assets/assets/svg/firebase_icon.svg": "45c1fbd5168c2da003f909342e417785",
"assets/assets/svg/flutter_icon.svg": "97307d22b63a6e4dc79191c33957de10",
"assets/assets/svg/github.svg": "aeed14ed2231e20b76af91d8faceae86",
"assets/assets/svg/git_icon.svg": "97989e68ec9c87c76008bbab7965999c",
"assets/assets/svg/initialDark.svg": "9f71ac7925d289982ec7bc56e9e56d4c",
"assets/assets/svg/initialLight.svg": "70d1ad65564456cb0589dbae721e1733",
"assets/assets/svg/lightDarkMode.svg": "68e97209f5798fa5df4da95b4d1fc8da",
"assets/assets/svg/linkedIn.svg": "3f2d8a434b715665f42d911f71278626",
"assets/assets/svg/mail.svg": "7fdda17a0fbb83392a37a5e5106b6cbd",
"assets/assets/svg/profile.png": "228ab79505198211b367367cd7e12a68",
"assets/assets/svg/profilebg.svg": "45485a2c232124ae22cef80300633833",
"assets/assets/svg/profilebgdark.svg": "d3770d7cefd1bd941d70cca6317fee81",
"assets/assets/svg/send_icon.svg": "6104171f617075bbe9a50dbdc4a5158e",
"assets/assets/svg/supabase_icon.svg": "88f8ed835e0986f354e07588a7df0622",
"assets/FontManifest.json": "0d1c41b661f7f121d80493d073846aea",
"assets/fonts/MaterialIcons-Regular.otf": "7d3e835169b6091917cb81d8274a2241",
"assets/loading.gif": "b24d9653fdba953ecd478e35af3b84fb",
"assets/NOTICES": "1b015db5a9a45f6a27530eff9c89da24",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "951d56036608c064b4ea94a9e14e08b7",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "6509ad6fe323bf90141c852926e99688",
"icons/Icon-192.png": "829f84b3da044866f26b088624b29b4e",
"icons/Icon-512.png": "681cff5a8b27f2df02ab456cb9ead175",
"icons/Icon-maskable-192.png": "829f84b3da044866f26b088624b29b4e",
"icons/Icon-maskable-512.png": "681cff5a8b27f2df02ab456cb9ead175",
"index.html": "6c47713c4bfd4d18e65bea85183280f9",
"/": "6c47713c4bfd4d18e65bea85183280f9",
"main.dart.js": "67fbdfcff4d16ba06408095ca3c34088",
"manifest.json": "7acf9df843225944fbf3ba8fdf8e5627",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
