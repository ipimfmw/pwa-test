if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[r]) return;
    let t = {};
    const c = (e) => n(e, r),
      o = { module: { uri: r }, exports: t, require: c };
    s[r] = Promise.all(a.map((e) => o[e] || c(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-1846d813"], function (e) {
  "use strict";
  importScripts("fallback-RiDM8SAy37Ft5sN-Ucs3J.js"),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/RiDM8SAy37Ft5sN-Ucs3J/_buildManifest.js",
          revision: "RiDM8SAy37Ft5sN-Ucs3J",
        },
        {
          url: "/_next/static/RiDM8SAy37Ft5sN-Ucs3J/_middlewareManifest.js",
          revision: "RiDM8SAy37Ft5sN-Ucs3J",
        },
        {
          url: "/_next/static/RiDM8SAy37Ft5sN-Ucs3J/_ssgManifest.js",
          revision: "RiDM8SAy37Ft5sN-Ucs3J",
        },
        {
          url: "/_next/static/chunks/framework-6e4ba497ae0c8a3f.js",
          revision: "RiDM8SAy37Ft5sN-Ucs3J",
        },
        {
          url: "/_next/static/chunks/main-ec95d66e0c86d60d.js",
          revision: "RiDM8SAy37Ft5sN-Ucs3J",
        },
        {
          url: "/_next/static/chunks/pages/_app-6c488fb1a2dc269d.js",
          revision: "RiDM8SAy37Ft5sN-Ucs3J",
        },
        {
          url: "/_next/static/chunks/pages/_error-6679c1efb053c50e.js",
          revision: "RiDM8SAy37Ft5sN-Ucs3J",
        },
        {
          url: "/_next/static/chunks/pages/_offline-d0e78813f2aea7ce.js",
          revision: "RiDM8SAy37Ft5sN-Ucs3J",
        },
        {
          url: "/_next/static/chunks/pages/index-16107d9d2b9f47e2.js",
          revision: "RiDM8SAy37Ft5sN-Ucs3J",
        },
        {
          url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
          revision: "RiDM8SAy37Ft5sN-Ucs3J",
        },
        {
          url: "/_next/static/chunks/webpack-d66a1a543386ca7e.js",
          revision: "RiDM8SAy37Ft5sN-Ucs3J",
        },
        { url: "/_offline", revision: "RiDM8SAy37Ft5sN-Ucs3J" },
        { url: "/image/107.png", revision: "68fed25c320d867cc8a092e49ac3261d" },
        {
          url: "/image/1240.png",
          revision: "476f683b9ab052c0da28005185386a5b",
        },
        { url: "/image/142.png", revision: "ca6fa7d9c6060f0fa5baba983f834339" },
        { url: "/image/150.png", revision: "44e1fa263206c835d040ec08a1c86738" },
        { url: "/image/188.png", revision: "22dc2e22a8652db8a0bc027d0f730c89" },
        { url: "/image/284.png", revision: "e50719cfa1f3be4e6d00736b77927014" },
        { url: "/image/620.png", revision: "3c1f5c19d8e97990aaf4c380c10d6efb" },
        { url: "/image/71.png", revision: "91107b1e729f1b975d60199f4524e8a9" },
        { url: "/image/89.png", revision: "1e0b0ab5f26ac1ad614e338715e39307" },
        { url: "/manifest.json", revision: "ba39fda253121f5aa9553333025d4f0a" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    );
});
