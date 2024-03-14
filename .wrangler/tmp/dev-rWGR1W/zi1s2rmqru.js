// .wrangler/tmp/bundle-dieMI3/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/pages-B1OoR9/bundledWorker-0.1709454203465144.mjs
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ALSes_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_2, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_2, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  globalThis[Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: () => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
      getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args),
      get: (_2, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
      set: (_2, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value)
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var te = Object.create;
var V = Object.defineProperty;
var se = Object.getOwnPropertyDescriptor;
var re = Object.getOwnPropertyNames;
var ae = Object.getPrototypeOf;
var ne = Object.prototype.hasOwnProperty;
var k = (e, t) => () => (e && (t = e(e = 0)), t);
var j = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var ie = (e, t, r, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of re(t))
      !ne.call(e, n) && n !== r && V(e, n, { get: () => t[n], enumerable: !(s = se(t, n)) || s.enumerable });
  return e;
};
var O = (e, t, r) => (r = e != null ? te(ae(e)) : {}, ie(t || !e || !e.__esModule ? V(r, "default", { value: e, enumerable: true }) : r, e));
var y;
var l = k(() => {
  y = { collectedLocales: [] };
});
var f;
var h = k(() => {
  f = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/$", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/__index.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/$1.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/$", has: [{ type: "header", key: "rsc" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }], filesystem: [{ src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/\\.prefetch\\.rsc$", dest: "/__index.prefetch.rsc", check: true }, { src: "^/\\.rsc$", dest: "/index.rsc", check: true }, { src: "^/__index.prefetch.rsc$", dest: "/index.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }, { src: "^/(.+?).prefetch.rsc(?:/)?$", dest: "/$1.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [{ src: "^/_next/data/(.*)$", dest: "/404", status: 404 }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|G\\-XrNzZ3H27uNLF3Y1RFZ)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*)$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/_not-found", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "inline" }, overrides: { "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" } }, framework: { version: "14.1.0" }, crons: [] };
});
var m;
var p = k(() => {
  m = { "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/G-XrNzZ3H27uNLF3Y1RFZ/_buildManifest.js": { type: "static" }, "/_next/static/G-XrNzZ3H27uNLF3Y1RFZ/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/511-ad7b734d0648bc9f.js": { type: "static" }, "/_next/static/chunks/631f9b06-6adaad5592b331e6.js": { type: "static" }, "/_next/static/chunks/722-d23122ed4e2f01f7.js": { type: "static" }, "/_next/static/chunks/726-719fdc2d103358ad.js": { type: "static" }, "/_next/static/chunks/749-a43844227a98802b.js": { type: "static" }, "/_next/static/chunks/838-587a09278ae364a1.js": { type: "static" }, "/_next/static/chunks/app/layout-a0941967dd26e77e.js": { type: "static" }, "/_next/static/chunks/app/not-found-b9e8b78e8ad27412.js": { type: "static" }, "/_next/static/chunks/app/page-3dd4c58eb1678854.js": { type: "static" }, "/_next/static/chunks/app/proxy-party/page-c2672e2b0b334640.js": { type: "static" }, "/_next/static/chunks/app/ras-tool/page-8d3dc89698ad8675.js": { type: "static" }, "/_next/static/chunks/app/ras-tool/run-sheets/page-33ce8967bd2dbc26.js": { type: "static" }, "/_next/static/chunks/app/timekeeping/page-0742f4941a0ca017.js": { type: "static" }, "/_next/static/chunks/fd9d1056-76286ddac84065c4.js": { type: "static" }, "/_next/static/chunks/framework-aec844d2ccbe7592.js": { type: "static" }, "/_next/static/chunks/main-app-e555abe780aa1573.js": { type: "static" }, "/_next/static/chunks/main-d73a7978b89df832.js": { type: "static" }, "/_next/static/chunks/pages/_app-75f6107b0260711c.js": { type: "static" }, "/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js": { type: "static" }, "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js": { type: "static" }, "/_next/static/chunks/webpack-050872e2a6250d88.js": { type: "static" }, "/_next/static/css/290eaf9fd91e6d51.css": { type: "static" }, "/_next/static/media/05a31a2ca4975f99-s.woff2": { type: "static" }, "/_next/static/media/513657b02c5c193f-s.woff2": { type: "static" }, "/_next/static/media/51ed15f9841b9f9d-s.woff2": { type: "static" }, "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2": { type: "static" }, "/_next/static/media/d6b16ce4a6175f26-s.woff2": { type: "static" }, "/_next/static/media/ec159349637c90ad-s.woff2": { type: "static" }, "/_next/static/media/fd4db3eb5472fc27-s.woff2": { type: "static" }, "/next.svg": { type: "static" }, "/vercel.svg": { type: "static" }, "/_not-found": { type: "function", entrypoint: "__next-on-pages-dist__/functions/_not-found.func.js" }, "/_not-found.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/_not-found.func.js" }, "/api/hello": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/hello.func.js" }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/favicon.ico": { type: "override", path: "/favicon.ico", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/x-icon", "x-next-cache-tags": "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.html": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.rsc": { type: "override", path: "/index.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/proxy-party.html": { type: "override", path: "/proxy-party.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/proxy-party/layout,_N_T_/proxy-party/page,_N_T_/proxy-party", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/proxy-party": { type: "override", path: "/proxy-party.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/proxy-party/layout,_N_T_/proxy-party/page,_N_T_/proxy-party", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/proxy-party.rsc": { type: "override", path: "/proxy-party.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/ras-tool/run-sheets.html": { type: "override", path: "/ras-tool/run-sheets.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/ras-tool/layout,_N_T_/ras-tool/run-sheets/layout,_N_T_/ras-tool/run-sheets/page,_N_T_/ras-tool/run-sheets", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/ras-tool/run-sheets": { type: "override", path: "/ras-tool/run-sheets.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/ras-tool/layout,_N_T_/ras-tool/run-sheets/layout,_N_T_/ras-tool/run-sheets/page,_N_T_/ras-tool/run-sheets", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/ras-tool/run-sheets.rsc": { type: "override", path: "/ras-tool/run-sheets.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/ras-tool.html": { type: "override", path: "/ras-tool.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/ras-tool/layout,_N_T_/ras-tool/page,_N_T_/ras-tool", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/ras-tool": { type: "override", path: "/ras-tool.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/ras-tool/layout,_N_T_/ras-tool/page,_N_T_/ras-tool", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/ras-tool.rsc": { type: "override", path: "/ras-tool.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/timekeeping.html": { type: "override", path: "/timekeeping.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/timekeeping/layout,_N_T_/timekeeping/page,_N_T_/timekeeping", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/timekeeping": { type: "override", path: "/timekeeping.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/timekeeping/layout,_N_T_/timekeeping/page,_N_T_/timekeeping", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/timekeeping.rsc": { type: "override", path: "/timekeeping.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } } };
});
var $ = j((Fe, F) => {
  "use strict";
  l();
  h();
  p();
  function R(e, t) {
    e = String(e || "").trim();
    let r = e, s, n = "";
    if (/^[^a-zA-Z\\\s]/.test(e)) {
      s = e[0];
      let o = e.lastIndexOf(s);
      n += e.substring(o + 1), e = e.substring(1, o);
    }
    let a = 0;
    return e = ue(e, (o) => {
      if (/^\(\?[P<']/.test(o)) {
        let c = /^\(\?P?[<']([^>']+)[>']/.exec(o);
        if (!c)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);
        let u = o.substring(c[0].length, o.length - 1);
        return t && (t[a] = c[1]), a++, `(${u})`;
      }
      return o.substring(0, 3) === "(?:" || a++, o;
    }), e = e.replace(/\[:([^:]+):\]/g, (o, c) => R.characterClasses[c] || o), new R.PCRE(e, n, r, n, s);
  }
  function ue(e, t) {
    let r = 0, s = 0, n = false;
    for (let i = 0; i < e.length; i++) {
      let a = e[i];
      if (n) {
        n = false;
        continue;
      }
      switch (a) {
        case "(":
          s === 0 && (r = i), s++;
          break;
        case ")":
          if (s > 0 && (s--, s === 0)) {
            let o = i + 1, c = r === 0 ? "" : e.substring(0, r), u = e.substring(o), d = String(t(e.substring(r, o)));
            e = c + d + u, i = r;
          }
          break;
        case "\\":
          n = true;
          break;
        default:
          break;
      }
    }
    return e;
  }
  (function(e) {
    class t extends RegExp {
      constructor(s, n, i, a, o) {
        super(s, n), this.pcrePattern = i, this.pcreFlags = a, this.delimiter = o;
      }
    }
    e.PCRE = t, e.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(R || (R = {}));
  R.prototype = R.PCRE.prototype;
  F.exports = R;
});
var X = j((H) => {
  "use strict";
  l();
  h();
  p();
  H.parse = Re;
  H.serialize = we;
  var xe = Object.prototype.toString, T = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function Re(e, t) {
    if (typeof e != "string")
      throw new TypeError("argument str must be a string");
    for (var r = {}, s = t || {}, n = s.decode || ve, i = 0; i < e.length; ) {
      var a = e.indexOf("=", i);
      if (a === -1)
        break;
      var o = e.indexOf(";", i);
      if (o === -1)
        o = e.length;
      else if (o < a) {
        i = e.lastIndexOf(";", a - 1) + 1;
        continue;
      }
      var c = e.slice(i, a).trim();
      if (r[c] === void 0) {
        var u = e.slice(a + 1, o).trim();
        u.charCodeAt(0) === 34 && (u = u.slice(1, -1)), r[c] = Ne(u, n);
      }
      i = o + 1;
    }
    return r;
  }
  function we(e, t, r) {
    var s = r || {}, n = s.encode || Se;
    if (typeof n != "function")
      throw new TypeError("option encode is invalid");
    if (!T.test(e))
      throw new TypeError("argument name is invalid");
    var i = n(t);
    if (i && !T.test(i))
      throw new TypeError("argument val is invalid");
    var a = e + "=" + i;
    if (s.maxAge != null) {
      var o = s.maxAge - 0;
      if (isNaN(o) || !isFinite(o))
        throw new TypeError("option maxAge is invalid");
      a += "; Max-Age=" + Math.floor(o);
    }
    if (s.domain) {
      if (!T.test(s.domain))
        throw new TypeError("option domain is invalid");
      a += "; Domain=" + s.domain;
    }
    if (s.path) {
      if (!T.test(s.path))
        throw new TypeError("option path is invalid");
      a += "; Path=" + s.path;
    }
    if (s.expires) {
      var c = s.expires;
      if (!Pe(c) || isNaN(c.valueOf()))
        throw new TypeError("option expires is invalid");
      a += "; Expires=" + c.toUTCString();
    }
    if (s.httpOnly && (a += "; HttpOnly"), s.secure && (a += "; Secure"), s.priority) {
      var u = typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority;
      switch (u) {
        case "low":
          a += "; Priority=Low";
          break;
        case "medium":
          a += "; Priority=Medium";
          break;
        case "high":
          a += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (s.sameSite) {
      var d = typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite;
      switch (d) {
        case true:
          a += "; SameSite=Strict";
          break;
        case "lax":
          a += "; SameSite=Lax";
          break;
        case "strict":
          a += "; SameSite=Strict";
          break;
        case "none":
          a += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return a;
  }
  function ve(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
  }
  function Se(e) {
    return encodeURIComponent(e);
  }
  function Pe(e) {
    return xe.call(e) === "[object Date]" || e instanceof Date;
  }
  function Ne(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
});
l();
h();
p();
l();
h();
p();
l();
h();
p();
var w = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
l();
h();
p();
l();
h();
p();
l();
h();
p();
l();
h();
p();
var q = O($());
function N(e, t, r) {
  if (t == null)
    return { match: null, captureGroupKeys: [] };
  let s = r ? "" : "i", n = [];
  return { match: (0, q.default)(`%${e}%${s}`, n).exec(t), captureGroupKeys: n };
}
function v(e, t, r, { namedOnly: s } = {}) {
  return e.replace(/\$([a-zA-Z0-9_]+)/g, (n, i) => {
    let a = r.indexOf(i);
    return s && a === -1 ? n : (a === -1 ? t[parseInt(i, 10)] : t[a + 1]) || "";
  });
}
function M(e, { url: t, cookies: r, headers: s, routeDest: n }) {
  switch (e.type) {
    case "host":
      return { valid: t.hostname === e.value };
    case "header":
      return e.value !== void 0 ? E(e.value, s.get(e.key), n) : { valid: s.has(e.key) };
    case "cookie": {
      let i = r[e.key];
      return i && e.value !== void 0 ? E(e.value, i, n) : { valid: i !== void 0 };
    }
    case "query":
      return e.value !== void 0 ? E(e.value, t.searchParams.get(e.key), n) : { valid: t.searchParams.has(e.key) };
  }
}
function E(e, t, r) {
  let { match: s, captureGroupKeys: n } = N(e, t);
  return r && s && n.length ? { valid: !!s, newRouteDest: v(r, s, n, { namedOnly: true }) } : { valid: !!s };
}
l();
h();
p();
function D(e) {
  let t = new Headers(e.headers);
  return e.cf && (t.set("x-vercel-ip-city", e.cf.city), t.set("x-vercel-ip-country", e.cf.country), t.set("x-vercel-ip-country-region", e.cf.region), t.set("x-vercel-ip-latitude", e.cf.latitude), t.set("x-vercel-ip-longitude", e.cf.longitude)), t.set("x-vercel-sc-host", w), new Request(e, { headers: t });
}
l();
h();
p();
function _(e, t, r) {
  let s = t instanceof Headers ? t.entries() : Object.entries(t);
  for (let [n, i] of s) {
    let a = n.toLowerCase(), o = r?.match ? v(i, r.match, r.captureGroupKeys) : i;
    a === "set-cookie" ? e.append(a, o) : e.set(a, o);
  }
}
function S(e) {
  return /^https?:\/\//.test(e);
}
function x(e, t) {
  for (let [r, s] of t.entries()) {
    let n = /^nxtP(.+)$/.exec(r), i = /^nxtI(.+)$/.exec(r);
    n?.[1] ? (e.set(r, s), e.set(n[1], s)) : i?.[1] ? e.set(i[1], s.replace(/(\(\.+\))+/, "")) : (!e.has(r) || !!s && !e.getAll(r).includes(s)) && e.append(r, s);
  }
}
function U(e, t) {
  let r = new URL(t, e.url);
  return x(r.searchParams, new URL(e.url).searchParams), r.pathname = r.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(r, e);
}
function P(e) {
  return new Response(e.body, e);
}
function L(e) {
  return e.split(",").map((t) => {
    let [r, s] = t.split(";"), n = parseFloat((s ?? "q=1").replace(/q *= */gi, ""));
    return [r.trim(), isNaN(n) ? 1 : n];
  }).sort((t, r) => r[1] - t[1]).map(([t]) => t === "*" || t === "" ? [] : t).flat();
}
l();
h();
p();
function A(e) {
  switch (e) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
async function b(e, { request: t, assetsFetcher: r, ctx: s }, { path: n, searchParams: i }) {
  let a, o = new URL(t.url);
  x(o.searchParams, i);
  let c = new Request(o, t);
  try {
    switch (e?.type) {
      case "function":
      case "middleware": {
        let u = await import(e.entrypoint);
        try {
          a = await u.default(c, s);
        } catch (d) {
          let g = d;
          throw g.name === "TypeError" && g.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`) : d;
        }
        break;
      }
      case "override": {
        a = P(await r.fetch(U(c, e.path ?? n))), e.headers && _(a.headers, e.headers);
        break;
      }
      case "static": {
        a = await r.fetch(U(c, n));
        break;
      }
      default:
        a = new Response("Not Found", { status: 404 });
    }
  } catch (u) {
    return console.error(u), new Response("Internal Server Error", { status: 500 });
  }
  return P(a);
}
function B(e, t) {
  let r = "^//?(?:", s = ")/(.*)$";
  return !e.startsWith(r) || !e.endsWith(s) ? false : e.slice(r.length, -s.length).split("|").every((i) => t.has(i));
}
l();
h();
p();
function le(e, { protocol: t, hostname: r, port: s, pathname: n }) {
  return !(t && e.protocol.replace(/:$/, "") !== t || !new RegExp(r).test(e.hostname) || s && !new RegExp(s).test(e.port) || n && !new RegExp(n).test(e.pathname));
}
function he(e, t) {
  if (e.method !== "GET")
    return;
  let { origin: r, searchParams: s } = new URL(e.url), n = s.get("url"), i = Number.parseInt(s.get("w") ?? "", 10), a = Number.parseInt(s.get("q") ?? "75", 10);
  if (!n || Number.isNaN(i) || Number.isNaN(a) || !t?.sizes?.includes(i) || a < 0 || a > 100)
    return;
  let o = new URL(n, r);
  if (o.pathname.endsWith(".svg") && !t?.dangerouslyAllowSVG)
    return;
  let c = n.startsWith("/") || n.startsWith("%2F");
  if (!c && !t?.domains?.includes(o.hostname) && !t?.remotePatterns?.find((g) => le(o, g)))
    return;
  let u = e.headers.get("Accept") ?? "", d = t?.formats?.find((g) => u.includes(g))?.replace("image/", "");
  return { isRelative: c, imageUrl: o, options: { width: i, quality: a, format: d } };
}
function pe(e, t, r) {
  let s = new Headers();
  if (r?.contentSecurityPolicy && s.set("Content-Security-Policy", r.contentSecurityPolicy), r?.contentDispositionType) {
    let i = t.pathname.split("/").pop(), a = i ? `${r.contentDispositionType}; filename="${i}"` : r.contentDispositionType;
    s.set("Content-Disposition", a);
  }
  e.headers.has("Cache-Control") || s.set("Cache-Control", `public, max-age=${r?.minimumCacheTTL ?? 60}`);
  let n = P(e);
  return _(n.headers, s), n;
}
async function z(e, { buildOutput: t, assetsFetcher: r, imagesConfig: s }) {
  let n = he(e, s);
  if (!n)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: i, imageUrl: a } = n, o = new Request(a, { headers: e.headers }), c = i && a.pathname in t ? await r.fetch(o) : await fetch(o);
  return pe(c, a, s);
}
l();
h();
p();
l();
h();
p();
var de = "x-vercel-cache-tags";
var fe = "x-next-cache-soft-tags";
async function W(e) {
  let t = `https://${w}/v1/suspense-cache/`;
  if (!e.url.startsWith(t))
    return null;
  try {
    let r = new URL(e.url), s = await me();
    if (r.pathname === "/v1/suspense-cache/revalidate") {
      let i = r.searchParams.get("tags")?.split(",") ?? [];
      for (let a of i)
        await s.revalidateTag(a);
      return new Response(null, { status: 200 });
    }
    let n = r.pathname.replace("/v1/suspense-cache/", "");
    if (!n.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (e.method) {
      case "GET": {
        let i = K(e, fe), a = await s.get(n, { softTags: i });
        return a ? new Response(JSON.stringify(a.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (a.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let i = await e.json();
        return i.data.tags === void 0 && (i.tags ??= K(e, de) ?? []), await s.set(n, i), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (r) {
    return console.error(r), new Response("Error handling cache request", { status: 500 });
  }
}
async function me() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? G("kv") : G("cache-api");
}
async function G(e) {
  let t = await import(`./__next-on-pages-dist__/cache/${e}.js`);
  return new t.default();
}
function K(e, t) {
  return e.headers.get(t)?.split(",")?.filter(Boolean);
}
function J() {
  globalThis.fetch[Z] || (ye(), globalThis.fetch[Z] = true);
}
function ye() {
  let e = globalThis.fetch;
  globalThis.fetch = async (...t) => {
    let r = new Request(...t), s = await ge(r);
    return s || (s = await W(r), s) ? s : (_e(r), e(r));
  };
}
async function ge(e) {
  if (e.url.startsWith("blob:"))
    try {
      let r = (await import(`./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`)).default, s = { async arrayBuffer() {
        return r;
      }, get body() {
        return new ReadableStream({ start(n) {
          let i = Buffer.from(r);
          n.enqueue(i), n.close();
        } });
      }, async text() {
        return Buffer.from(r).toString();
      }, async json() {
        let n = Buffer.from(r);
        return JSON.stringify(n.toString());
      }, async blob() {
        return new Blob(r);
      } };
      return s.clone = () => ({ ...s }), s;
    } catch {
    }
  return null;
}
function _e(e) {
  e.headers.has("user-agent") || e.headers.set("user-agent", "Next.js Middleware");
}
var Z = Symbol.for("next-on-pages fetch patch");
l();
h();
p();
var Y = O(X());
var C = class {
  constructor(t, r, s, n, i) {
    this.routes = t;
    this.output = r;
    this.reqCtx = s;
    this.url = new URL(s.request.url), this.cookies = (0, Y.parse)(s.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), x(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = i?.find((a) => a.domain === this.url.hostname), this.locales = new Set(n.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(t, { checkStatus: r, checkIntercept: s }) {
    let n = N(t.src, this.path, t.caseSensitive);
    if (!n.match || t.methods && !t.methods.map((a) => a.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let i = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: t.dest };
    if (!t.has?.find((a) => {
      let o = M(a, i);
      return o.newRouteDest && (i.routeDest = o.newRouteDest), !o.valid;
    }) && !t.missing?.find((a) => M(a, i).valid) && !(r && t.status !== this.status)) {
      if (s && t.dest) {
        let a = /\/(\(\.+\))+/, o = a.test(t.dest), c = a.test(this.path);
        if (o && !c)
          return;
      }
      return { routeMatch: n, routeDest: i.routeDest };
    }
  }
  processMiddlewareResp(t) {
    let r = "x-middleware-override-headers", s = t.headers.get(r);
    if (s) {
      let c = new Set(s.split(",").map((u) => u.trim()));
      for (let u of c.keys()) {
        let d = `x-middleware-request-${u}`, g = t.headers.get(d);
        this.reqCtx.request.headers.get(u) !== g && (g ? this.reqCtx.request.headers.set(u, g) : this.reqCtx.request.headers.delete(u)), t.headers.delete(d);
      }
      t.headers.delete(r);
    }
    let n = "x-middleware-rewrite", i = t.headers.get(n);
    if (i) {
      let c = new URL(i, this.url), u = this.url.hostname !== c.hostname;
      this.path = u ? `${c}` : c.pathname, x(this.searchParams, c.searchParams), t.headers.delete(n);
    }
    let a = "x-middleware-next";
    t.headers.get(a) ? t.headers.delete(a) : !i && !t.headers.has("location") && (this.body = t.body, this.status = t.status), _(this.headers.normal, t.headers), this.headers.middlewareLocation = t.headers.get("location");
  }
  async runRouteMiddleware(t) {
    if (!t)
      return true;
    let r = t && this.output[t];
    if (!r || r.type !== "middleware")
      return this.status = 500, false;
    let s = await b(r, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(t), s.status === 500 ? (this.status = s.status, false) : (this.processMiddlewareResp(s), true);
  }
  applyRouteOverrides(t) {
    !t.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(t, r, s) {
    !t.headers || (_(this.headers.normal, t.headers, { match: r, captureGroupKeys: s }), t.important && _(this.headers.important, t.headers, { match: r, captureGroupKeys: s }));
  }
  applyRouteStatus(t) {
    !t.status || (this.status = t.status);
  }
  applyRouteDest(t, r, s) {
    if (!t.dest)
      return this.path;
    let n = this.path, i = t.dest;
    this.wildcardMatch && /\$wildcard/.test(i) && (i = i.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = v(i, r, s);
    let a = /\/index\.rsc$/i.test(this.path), o = /^\/(?:index)?$/i.test(n), c = /^\/__index\.prefetch\.rsc$/i.test(n);
    a && !o && !c && (this.path = n);
    let u = /\.rsc$/i.test(this.path), d = /\.prefetch\.rsc$/i.test(this.path), g = this.path in this.output;
    u && !d && !g && (this.path = this.path.replace(/\.rsc/i, ""));
    let I = new URL(this.path, this.url);
    return x(this.searchParams, I.searchParams), S(this.path) || (this.path = I.pathname), n;
  }
  applyLocaleRedirects(t) {
    if (!t.locale?.redirect || !/^\^(.)*$/.test(t.src) && t.src !== this.path || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: s, cookie: n } } = t, i = n && this.cookies[n], a = L(i ?? ""), o = L(this.reqCtx.request.headers.get("accept-language") ?? ""), d = [...a, ...o].map((g) => s[g]).filter(Boolean)[0];
    if (d) {
      !this.path.startsWith(d) && (this.headers.normal.set("location", d), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(t, r) {
    return !this.locales || r !== "miss" ? t : B(t.src, this.locales) ? { ...t, src: t.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : t;
  }
  async checkRoute(t, r) {
    let s = this.getLocaleFriendlyRoute(r, t), { routeMatch: n, routeDest: i } = this.checkRouteMatch(s, { checkStatus: t === "error", checkIntercept: t === "rewrite" }) ?? {}, a = { ...s, dest: i };
    if (!n?.match || a.middlewarePath && this.middlewareInvoked.includes(a.middlewarePath))
      return "skip";
    let { match: o, captureGroupKeys: c } = n;
    if (this.applyRouteOverrides(a), this.applyLocaleRedirects(a), !await this.runRouteMiddleware(a.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(a, o, c), this.applyRouteStatus(a);
    let d = this.applyRouteDest(a, o, c);
    if (a.check && !S(this.path))
      if (d === this.path) {
        if (t !== "miss")
          return this.checkPhase(A(t));
        this.status = 404;
      } else if (t === "miss") {
        if (!(this.path in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return a.continue ? "next" : "done";
  }
  async checkPhase(t) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let r = true;
    for (let i of this.routes[t]) {
      let a = await this.checkRoute(t, i);
      if (a === "error")
        return "error";
      if (a === "done") {
        r = false;
        break;
      }
    }
    if (t === "hit" || S(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    if (t === "none")
      for (let i of this.locales) {
        let a = new RegExp(`/${i}(/.*)`), c = this.path.match(a)?.[1];
        if (c && c in this.output) {
          this.path = c;
          break;
        }
      }
    let s = this.path in this.output;
    if (!s && this.path.endsWith("/")) {
      let i = this.path.replace(/\/$/, "");
      s = i in this.output, s && (this.path = i);
    }
    if (t === "miss" && !s) {
      let i = !this.status || this.status < 400;
      this.status = i ? 404 : this.status;
    }
    let n = "miss";
    return s || t === "miss" || t === "error" ? n = "hit" : r && (n = A(t)), this.checkPhase(n);
  }
  async run(t = "none") {
    this.checkPhaseCounter = 0;
    let r = await this.checkPhase(t);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), r;
  }
};
async function Q(e, t, r, s) {
  let n = new C(t.routes, r, e, s, t.wildcard), i = await ee(n);
  return be(e, i, r);
}
async function ee(e, t = "none", r = false) {
  return await e.run(t) === "error" || !r && e.status && e.status >= 400 ? ee(e, "error", true) : { path: e.path, status: e.status, headers: e.headers, searchParams: e.searchParams, body: e.body };
}
async function be(e, { path: t = "/404", status: r, headers: s, searchParams: n, body: i }, a) {
  let o = s.normal.get("location");
  if (o) {
    if (o !== s.middlewareLocation) {
      let d = [...n.keys()].length ? `?${n.toString()}` : "";
      s.normal.set("location", `${o ?? "/"}${d}`);
    }
    return new Response(null, { status: r, headers: s.normal });
  }
  let c;
  if (i !== void 0)
    c = new Response(i, { status: r });
  else if (S(t)) {
    let d = new URL(t);
    x(d.searchParams, n), c = await fetch(d, e.request);
  } else
    c = await b(a[t], e, { path: t, status: r, headers: s, searchParams: n });
  let u = s.normal;
  return _(u, c.headers), _(u, s.important), c = new Response(c.body, { ...c, status: r || c.status, headers: u }), c;
}
var ns = { async fetch(e, t, r) {
  J();
  let s = await __ALSes_PROMISE__;
  if (!s) {
    let a = new URL(e.url), o = await t.ASSETS.fetch(`${a.protocol}//${a.host}/cdn-cgi/errors/no-nodejs_compat.html`), c = o.ok ? o.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(c, { status: 503 });
  }
  let { envAsyncLocalStorage: n, requestContextAsyncLocalStorage: i } = s;
  return n.run({ ...t, NODE_ENV: "production", SUSPENSE_CACHE_URL: w }, async () => i.run({ env: t, ctx: r, cf: e.cf }, async () => {
    if (new URL(e.url).pathname.startsWith("/_next/image"))
      return z(e, { buildOutput: m, assetsFetcher: t.ASSETS, imagesConfig: f.images });
    let o = D(e);
    return Q({ request: o, ctx: r, assetsFetcher: t.ASSETS }, f, m, y);
  }));
} };

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-B1OoR9/zi1s2rmqru.js
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.10.0.", include: ["/*"], exclude: ["/_next/static/*"] };
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (ns.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return ns.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;
var wrap = void 0;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap2 = void 0;

// .wrangler/tmp/bundle-dieMI3/middleware-insertion-facade.js
var envWrappers = [wrap, wrap2].filter(Boolean);
var facade = {
  ...pages_dev_pipeline_default,
  envWrappers,
  middleware: [
    middleware_ensure_req_body_drained_default,
    middleware_miniflare3_json_error_default,
    ...pages_dev_pipeline_default.middleware ? pages_dev_pipeline_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-dieMI3/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  middleware_loader_entry_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=zi1s2rmqru.js.map
