// Service Worker returns  a promise
let deferredPrompt;
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function() {
    console.log("Service worker registered ...");
  });
}

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("Before the beforeinstallprompt event is fired !");
  event.preventDefault();
  deferredPrompt = null;
  return false;
});
