var CACHE_NAME = "krosan_cache";
var CACHED_URLS = [
"/offline/homepage-offline.html",
"/offline/homepage-offline.css",
"/assets/logo.PNG"

];

self.addEventListener("install", function(event) {
    event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
    return cache.addAll(CACHED_URLS);
    })
    );
    });

    
// self.addEventListener("fetch", function(event) {
//     console.log("Fetch request for:", event.request.url);
//     });
        

//When the user is offline, display offline page (Done)
self.addEventListener("fetch", function(event) {
    event.respondWith(
    fetch(event.request).catch(function() {
    return caches.match(event.request).then(function(response) {
    if (response) {
    return response;
    } else if (event.request.headers.get("accept").includes("text/html")) {
    return caches.match("/offline/homepage-offline.html");
    }
    });
    })
    );
    });


//Network, falling back to cache
self.addEventListener("fetch", function(event) {
    event.respondWith(
    caches.open("krosan_cache").then(function(cache) {
    return fetch(event.request).then(function(networkResponse) {
    cache.put(event.request, networkResponse.clone());
    return networkResponse;
    }).catch(function() {
    return caches.match(event.request);
    });
    })
    );
    });
    
    

// //Pointing all windows to login if logout is clicked
// self.addEventListener("message", function (event) {
//     var data = event.data;
//     console.log("hi")
//     console.log(event.data)
//     if (data.action === "logout") {
//         self.clients.matchAll().then(function (clients) {
//             clients.forEach(function (client) {
//                 if (client.url.includes("/homepage/homepage.html")) {
//                     client.postMessage(
//                         { action: "navigate", url: "/login/login.html" }
//                     );
//                 }
//             });
//         });
//     }
// });
    