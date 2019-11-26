self.addEventListener("install", function(event) {
  console.log("[Web Workers] is running and now installed,,", event);
});
self.addEventListener("activate", function(event) {
  console.log("[Web Workers] Activated web workers ...", event);
  return self.clients.claim();
});
self.addEventListener("fetch", function(event) {
  console.log("[Web Workers] Fetching something ...", event);
  event.respondWith(fetch(event.request));
});
