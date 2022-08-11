let cache_assets = [
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js',
    '/',
    "/js/app.js",
    "/js/manifest.js",
    "/css/app.css",
    "/js/vendor.js",
];
let cache_name = "v3"; // The string used to identify our cache
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
self.addEventListener("fetch", event => {
    console.log(event.request.url)
    if (event.request.method !== 'GET') return fetch(event.request);
    event.respondWith(fromCache(event.request));
    event.waitUntil(
        update(event.request)
        // В конце, после получения "свежих" данных от сервера уведомляем всех клиентов.
            .then(refresh)
    );
})

function fromCache(request) {
    return caches.open(cache_name).then((cache) =>
        cache.match(request).then((matching) =>
            matching || Promise.reject('no-match')
        ));
}

function update(request) {
    return caches.open(cache_name).then((cache) =>
        fetch(request).then((response) =>
            cache.put(request, response.clone()).then(() => response)
        )
    );
}

// Шлём сообщения об обновлении данных всем клиентам.
function refresh(response) {
    return self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
            // Подробнее про ETag можно прочитать тут
            // https://en.wikipedia.org/wiki/HTTP_ETag
            const message = {
                type: 'refresh',
                url: response.url,
                eTag: response.headers.get('ETag')
            };
            // Уведомляем клиент об обновлении данных.
            client.postMessage(JSON.stringify(message));
        });
    });
}
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
