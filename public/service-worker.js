let cache_assets=["https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js","/","/js/app.js","/js/manifest.js","/css/app.css","/js/vendor.js"],cache_name="v1";self.addEventListener("install",(e=>{console.log("installing..."),e.waitUntil(caches.open(cache_name).then((e=>e.addAll(cache_assets))).catch((e=>console.log(e))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(e.request).then((s=>"GET"!==e.request.method?fetch(e.request):s||fetch(e.request).then((s=>{let t=s.clone();return caches.open(cache_name).then((s=>{s.put(e.request,t)})),s})).catch((()=>caches.match("./login"))))))})),self.addEventListener("activate",(e=>{var s=[cache_name];e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>{if(-1===s.indexOf(e))return caches.delete(e)}))))))}));
