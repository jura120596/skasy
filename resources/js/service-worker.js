
let cache_assets = [
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js',
    '/',
    "/js/app.js",
    "/js/manifest.js",
    "/css/app.css",
    "/js/vendor.js",
];
let cache_name = "v1"; // The string used to identify our cache
self.addEventListener("install", event => {
    console.log("installing...");
    event.waitUntil(
        caches
            .open(cache_name)
            .then(cache => {
                return cache.addAll(cache_assets);
            })
            .catch(err => console.log(err))
    );
});
self.addEventListener("fetch", event => {event.respondWith(
    caches.match(event.request).then((resp) => {
        if (event.request.method !== 'GET') return fetch(event.request);
        const promise = fetch(event.request).then((response) => {
            let responseClone = response.clone();
            caches.open(cache_name).then((cache) => {
                cache.put(event.request, responseClone);
            });

            return response;
        }).catch(() => {
            return caches.match('./login');
        });
        return resp || promise
    })
)})
self.addEventListener('activate', (event) => {
    var cacheKeeplist = [cache_name];
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (cacheKeeplist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
