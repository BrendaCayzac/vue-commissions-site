/* eslint-disable no-console */

import { register } from "register-service-worker";
//declare let self: ServiceWorkerGlobalScope;
//self.addEventListener("install", () => self.skipWaiting());

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log("App is being served from cache by a service worker.");
    },
    registered(registration) {
      console.log("Service worker has been registered.");
      setInterval(() => {
        registration.update().then(() => console.log("Updated again"));
      }, 1000 * 60 * 60);
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated(registration) {
      window.location.reload();
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}
