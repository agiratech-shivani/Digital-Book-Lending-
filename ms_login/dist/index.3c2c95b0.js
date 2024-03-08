// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1OYTL":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9200915b3c2c95b0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jZEa7":[function(require,module,exports) {
var _msalBrowser = require("@azure/msal-browser");
const msalConfig = {
    auth: {
        clientId: "e795f125-b26e-405a-9d58-e7088d0f72c0",
        authority: "https://login.microsoftonline.com/2a4a5a22-099a-4115-86f7-35b1367f0ea9",
        redirecturl: "http://localhost:8000/"
    },
    cache: {
        cacheLocation: "LocalStorage"
    }
};
const login = async ()=>{
    console.log("login called");
    const msalInstance = await (0, _msalBrowser.PublicClientApplication).createPublicClientApplication(msalConfig);
    const response = await msalInstance.loginPopup({
        scopes: [
            "user.read"
        ],
        prompt: "select_account",
        redirectUri: "http://localhost:8000/",
        popup: true
    });
    console.log(response);
    const myAccounts = msalInstance.getAllAccounts();
    console.log(myAccounts);
    if (myAccounts.length > 0) msalInstance.setActiveAccount(myAccounts[0]);
    const request = {
        scopes: [
            "User.Read"
        ]
    };
    msalInstance.acquireTokenSilent(request).then((tokenResponse)=>{
        var headers = new Headers();
        var bearer = "Bearer " + tokenResponse.accessToken;
        console.log(bearer);
        headers.append("Authorization", bearer);
        var options = {
            method: "GET",
            headers: headers
        };
        var graphEndpoint = "https://graph.microsoft.com/v1.0/me";
        fetch(graphEndpoint, options).then((resp)=>{
            console.log("graph response");
            return resp.json();
        }).then((res)=>{
            console.log(res);
            localStorage.setItem("employee-id", res.id);
        // fetch("http://localhost:8000/users", {
        //   method: "post",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     employeeId: res.id,
        //     mailId: res.mail,
        //     phone: res.mobilePhone,
        //     name: res.displayName,
        //   }),
        // })
        //   .then(() => {
        //     window.location.href = "/";
        //   })
        // .catch((err) => console.log(err));
        });
    }).catch(async (error)=>{
        console.log(error.name);
        console.log(error);
        if (error.name === "InteractionRequiredAuthError") {
            console.log("shivani");
            return await msalInstance.acquireTokenPopup(request);
        }
    });
};
login();

},{"@azure/msal-browser":"7iQtB"}],"7iQtB":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PublicClientApplication", ()=>(0, _publicClientApplicationMjs.PublicClientApplication));
parcelHelpers.export(exports, "PublicClientNext", ()=>(0, _publicClientNextMjs.PublicClientNext));
parcelHelpers.export(exports, "DEFAULT_IFRAME_TIMEOUT_MS", ()=>(0, _configurationMjs.DEFAULT_IFRAME_TIMEOUT_MS));
parcelHelpers.export(exports, "ApiId", ()=>(0, _browserConstantsMjs.ApiId));
parcelHelpers.export(exports, "BrowserCacheLocation", ()=>(0, _browserConstantsMjs.BrowserCacheLocation));
parcelHelpers.export(exports, "CacheLookupPolicy", ()=>(0, _browserConstantsMjs.CacheLookupPolicy));
parcelHelpers.export(exports, "InteractionStatus", ()=>(0, _browserConstantsMjs.InteractionStatus));
parcelHelpers.export(exports, "InteractionType", ()=>(0, _browserConstantsMjs.InteractionType));
parcelHelpers.export(exports, "WrapperSKU", ()=>(0, _browserConstantsMjs.WrapperSKU));
parcelHelpers.export(exports, "BrowserAuthError", ()=>(0, _browserAuthErrorMjs.BrowserAuthError));
parcelHelpers.export(exports, "BrowserAuthErrorMessage", ()=>(0, _browserAuthErrorMjs.BrowserAuthErrorMessage));
parcelHelpers.export(exports, "BrowserConfigurationAuthError", ()=>(0, _browserConfigurationAuthErrorMjs.BrowserConfigurationAuthError));
parcelHelpers.export(exports, "BrowserConfigurationAuthErrorMessage", ()=>(0, _browserConfigurationAuthErrorMjs.BrowserConfigurationAuthErrorMessage));
parcelHelpers.export(exports, "stubbedPublicClientApplication", ()=>(0, _ipublicClientApplicationMjs.stubbedPublicClientApplication));
parcelHelpers.export(exports, "NavigationClient", ()=>(0, _navigationClientMjs.NavigationClient));
parcelHelpers.export(exports, "MemoryStorage", ()=>(0, _memoryStorageMjs.MemoryStorage));
parcelHelpers.export(exports, "BrowserStorage", ()=>(0, _browserStorageMjs.BrowserStorage));
parcelHelpers.export(exports, "EventMessageUtils", ()=>(0, _eventMessageMjs.EventMessageUtils));
parcelHelpers.export(exports, "EventType", ()=>(0, _eventTypeMjs.EventType));
parcelHelpers.export(exports, "SignedHttpRequest", ()=>(0, _signedHttpRequestMjs.SignedHttpRequest));
parcelHelpers.export(exports, "BrowserPerformanceClient", ()=>(0, _browserPerformanceClientMjs.BrowserPerformanceClient));
parcelHelpers.export(exports, "BrowserPerformanceMeasurement", ()=>(0, _browserPerformanceMeasurementMjs.BrowserPerformanceMeasurement));
parcelHelpers.export(exports, "AccountEntity", ()=>(0, _msalCommon.AccountEntity));
parcelHelpers.export(exports, "AuthError", ()=>(0, _msalCommon.AuthError));
parcelHelpers.export(exports, "AuthErrorCodes", ()=>(0, _msalCommon.AuthErrorCodes));
parcelHelpers.export(exports, "AuthErrorMessage", ()=>(0, _msalCommon.AuthErrorMessage));
parcelHelpers.export(exports, "AuthenticationHeaderParser", ()=>(0, _msalCommon.AuthenticationHeaderParser));
parcelHelpers.export(exports, "AuthenticationScheme", ()=>(0, _msalCommon.AuthenticationScheme));
parcelHelpers.export(exports, "AzureCloudInstance", ()=>(0, _msalCommon.AzureCloudInstance));
parcelHelpers.export(exports, "ClientAuthError", ()=>(0, _msalCommon.ClientAuthError));
parcelHelpers.export(exports, "ClientAuthErrorCodes", ()=>(0, _msalCommon.ClientAuthErrorCodes));
parcelHelpers.export(exports, "ClientAuthErrorMessage", ()=>(0, _msalCommon.ClientAuthErrorMessage));
parcelHelpers.export(exports, "ClientConfigurationError", ()=>(0, _msalCommon.ClientConfigurationError));
parcelHelpers.export(exports, "ClientConfigurationErrorCodes", ()=>(0, _msalCommon.ClientConfigurationErrorCodes));
parcelHelpers.export(exports, "ClientConfigurationErrorMessage", ()=>(0, _msalCommon.ClientConfigurationErrorMessage));
parcelHelpers.export(exports, "InteractionRequiredAuthError", ()=>(0, _msalCommon.InteractionRequiredAuthError));
parcelHelpers.export(exports, "InteractionRequiredAuthErrorCodes", ()=>(0, _msalCommon.InteractionRequiredAuthErrorCodes));
parcelHelpers.export(exports, "InteractionRequiredAuthErrorMessage", ()=>(0, _msalCommon.InteractionRequiredAuthErrorMessage));
parcelHelpers.export(exports, "JsonWebTokenTypes", ()=>(0, _msalCommon.JsonWebTokenTypes));
parcelHelpers.export(exports, "LogLevel", ()=>(0, _msalCommon.LogLevel));
parcelHelpers.export(exports, "Logger", ()=>(0, _msalCommon.Logger));
parcelHelpers.export(exports, "OIDC_DEFAULT_SCOPES", ()=>(0, _msalCommon.OIDC_DEFAULT_SCOPES));
parcelHelpers.export(exports, "PerformanceEvents", ()=>(0, _msalCommon.PerformanceEvents));
parcelHelpers.export(exports, "PromptValue", ()=>(0, _msalCommon.PromptValue));
parcelHelpers.export(exports, "ProtocolMode", ()=>(0, _msalCommon.ProtocolMode));
parcelHelpers.export(exports, "ServerError", ()=>(0, _msalCommon.ServerError));
parcelHelpers.export(exports, "ServerResponseType", ()=>(0, _msalCommon.ServerResponseType));
parcelHelpers.export(exports, "StringUtils", ()=>(0, _msalCommon.StringUtils));
parcelHelpers.export(exports, "UrlString", ()=>(0, _msalCommon.UrlString));
parcelHelpers.export(exports, "version", ()=>(0, _packageMetadataMjs.version));
parcelHelpers.export(exports, "BrowserUtils", ()=>_browserUtilsMjs);
parcelHelpers.export(exports, "BrowserAuthErrorCodes", ()=>_browserAuthErrorCodesMjs);
parcelHelpers.export(exports, "BrowserConfigurationAuthErrorCodes", ()=>_browserConfigurationAuthErrorCodesMjs);
var _browserUtilsMjs = require("./utils/BrowserUtils.mjs");
var _publicClientApplicationMjs = require("./app/PublicClientApplication.mjs");
var _publicClientNextMjs = require("./app/PublicClientNext.mjs");
var _configurationMjs = require("./config/Configuration.mjs");
var _browserConstantsMjs = require("./utils/BrowserConstants.mjs");
var _browserAuthErrorMjs = require("./error/BrowserAuthError.mjs");
var _browserConfigurationAuthErrorMjs = require("./error/BrowserConfigurationAuthError.mjs");
var _ipublicClientApplicationMjs = require("./app/IPublicClientApplication.mjs");
var _navigationClientMjs = require("./navigation/NavigationClient.mjs");
var _memoryStorageMjs = require("./cache/MemoryStorage.mjs");
var _browserStorageMjs = require("./cache/BrowserStorage.mjs");
var _eventMessageMjs = require("./event/EventMessage.mjs");
var _eventTypeMjs = require("./event/EventType.mjs");
var _signedHttpRequestMjs = require("./crypto/SignedHttpRequest.mjs");
var _browserPerformanceClientMjs = require("./telemetry/BrowserPerformanceClient.mjs");
var _browserPerformanceMeasurementMjs = require("./telemetry/BrowserPerformanceMeasurement.mjs");
var _msalCommon = require("@azure/msal-common");
var _packageMetadataMjs = require("./packageMetadata.mjs");
var _browserAuthErrorCodesMjs = require("./error/BrowserAuthErrorCodes.mjs");
var _browserConfigurationAuthErrorCodesMjs = require("./error/BrowserConfigurationAuthErrorCodes.mjs");
"use strict";

},{"./utils/BrowserUtils.mjs":false,"./app/PublicClientApplication.mjs":"e3BHu","./app/PublicClientNext.mjs":false,"./config/Configuration.mjs":false,"./utils/BrowserConstants.mjs":false,"./error/BrowserAuthError.mjs":false,"./error/BrowserConfigurationAuthError.mjs":false,"./app/IPublicClientApplication.mjs":false,"./navigation/NavigationClient.mjs":false,"./cache/MemoryStorage.mjs":false,"./cache/BrowserStorage.mjs":false,"./event/EventMessage.mjs":false,"./event/EventType.mjs":false,"./crypto/SignedHttpRequest.mjs":false,"./telemetry/BrowserPerformanceClient.mjs":false,"./telemetry/BrowserPerformanceMeasurement.mjs":false,"@azure/msal-common":false,"./packageMetadata.mjs":false,"./error/BrowserAuthErrorCodes.mjs":false,"./error/BrowserConfigurationAuthErrorCodes.mjs":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ahCa":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "blockAPICallsBeforeInitialize", ()=>blockAPICallsBeforeInitialize);
parcelHelpers.export(exports, "blockAcquireTokenInPopups", ()=>blockAcquireTokenInPopups);
parcelHelpers.export(exports, "blockNonBrowserEnvironment", ()=>blockNonBrowserEnvironment);
parcelHelpers.export(exports, "blockRedirectInIframe", ()=>blockRedirectInIframe);
parcelHelpers.export(exports, "blockReloadInHiddenIframes", ()=>blockReloadInHiddenIframes);
parcelHelpers.export(exports, "clearHash", ()=>clearHash);
parcelHelpers.export(exports, "createGuid", ()=>createGuid);
parcelHelpers.export(exports, "getCurrentUri", ()=>getCurrentUri);
parcelHelpers.export(exports, "getHomepage", ()=>getHomepage);
parcelHelpers.export(exports, "isInIframe", ()=>isInIframe);
parcelHelpers.export(exports, "isInPopup", ()=>isInPopup);
parcelHelpers.export(exports, "preconnect", ()=>preconnect);
parcelHelpers.export(exports, "replaceHash", ()=>replaceHash);
var _msalCommon = require("@azure/msal-common");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _browserConstantsMjs = require("./BrowserConstants.mjs");
var _browserCryptoMjs = require("../crypto/BrowserCrypto.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Clears hash from window url.
 */ function clearHash(contentWindow) {
    // Office.js sets history.replaceState to null
    contentWindow.location.hash = "";
    if (typeof contentWindow.history.replaceState === "function") // Full removes "#" from url
    contentWindow.history.replaceState(null, "", `${contentWindow.location.origin}${contentWindow.location.pathname}${contentWindow.location.search}`);
}
/**
 * Replaces current hash with hash from provided url
 */ function replaceHash(url) {
    const urlParts = url.split("#");
    urlParts.shift(); // Remove part before the hash
    window.location.hash = urlParts.length > 0 ? urlParts.join("#") : "";
}
/**
 * Returns boolean of whether the current window is in an iframe or not.
 */ function isInIframe() {
    return window.parent !== window;
}
/**
 * Returns boolean of whether or not the current window is a popup opened by msal
 */ function isInPopup() {
    return typeof window !== "undefined" && !!window.opener && window.opener !== window && typeof window.name === "string" && window.name.indexOf(`${(0, _browserConstantsMjs.BrowserConstants).POPUP_NAME_PREFIX}.`) === 0;
}
// #endregion
/**
 * Returns current window URL as redirect uri
 */ function getCurrentUri() {
    return window.location.href.split("?")[0].split("#")[0];
}
/**
 * Gets the homepage url for the current window location.
 */ function getHomepage() {
    const currentUrl = new (0, _msalCommon.UrlString)(window.location.href);
    const urlComponents = currentUrl.getUrlComponents();
    return `${urlComponents.Protocol}//${urlComponents.HostNameAndPort}/`;
}
/**
 * Throws error if we have completed an auth and are
 * attempting another auth request inside an iframe.
 */ function blockReloadInHiddenIframes() {
    const isResponseHash = (0, _msalCommon.UrlString).hashContainsKnownProperties(window.location.hash);
    // return an error if called from the hidden iframe created by the msal js silent calls
    if (isResponseHash && isInIframe()) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.blockIframeReload));
}
/**
 * Block redirect operations in iframes unless explicitly allowed
 * @param interactionType Interaction type for the request
 * @param allowRedirectInIframe Config value to allow redirects when app is inside an iframe
 */ function blockRedirectInIframe(interactionType, allowRedirectInIframe) {
    const isIframedApp = isInIframe();
    if (interactionType === (0, _browserConstantsMjs.InteractionType).Redirect && isIframedApp && !allowRedirectInIframe) // If we are not in top frame, we shouldn't redirect. This is also handled by the service.
    throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.redirectInIframe));
}
/**
 * Block redirectUri loaded in popup from calling AcquireToken APIs
 */ function blockAcquireTokenInPopups() {
    // Popups opened by msal popup APIs are given a name that starts with "msal."
    if (isInPopup()) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.blockNestedPopups));
}
/**
 * Throws error if token requests are made in non-browser environment
 * @param isBrowserEnvironment Flag indicating if environment is a browser.
 */ function blockNonBrowserEnvironment(isBrowserEnvironment) {
    if (!isBrowserEnvironment) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.nonBrowserEnvironment));
}
/**
 * Throws error if initialize hasn't been called
 * @param initialized
 */ function blockAPICallsBeforeInitialize(initialized) {
    if (!initialized) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.uninitializedPublicClientApplication));
}
/**
 * Adds a preconnect link element to the header which begins DNS resolution and SSL connection in anticipation of the /token request
 * @param loginDomain Authority domain, including https protocol e.g. https://login.microsoftonline.com
 * @returns
 */ function preconnect(authority) {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = new URL(authority).origin;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
    // The browser will close connection if not used within a few seconds, remove element from the header after 10s
    window.setTimeout(()=>{
        try {
            document.head.removeChild(link);
        } catch  {}
    }, 10000); // 10s Timeout
}
/**
 * Wrapper function that creates a UUID v7 from the current timestamp.
 * @returns {string}
 */ function createGuid() {
    return (0, _browserCryptoMjs.createNewGuid)();
}

},{"@azure/msal-common":"rNWNa","../error/BrowserAuthError.mjs":"hI9Lm","./BrowserConstants.mjs":"izeV4","../crypto/BrowserCrypto.mjs":"foGbR","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"rNWNa":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthorizationCodeClient", ()=>(0, _authorizationCodeClientMjs.AuthorizationCodeClient));
parcelHelpers.export(exports, "RefreshTokenClient", ()=>(0, _refreshTokenClientMjs.RefreshTokenClient));
parcelHelpers.export(exports, "SilentFlowClient", ()=>(0, _silentFlowClientMjs.SilentFlowClient));
parcelHelpers.export(exports, "BaseClient", ()=>(0, _baseClientMjs.BaseClient));
parcelHelpers.export(exports, "DEFAULT_SYSTEM_OPTIONS", ()=>(0, _clientConfigurationMjs.DEFAULT_SYSTEM_OPTIONS));
parcelHelpers.export(exports, "buildTenantProfileFromIdTokenClaims", ()=>(0, _accountInfoMjs.buildTenantProfileFromIdTokenClaims));
parcelHelpers.export(exports, "tenantIdMatchesHomeTenant", ()=>(0, _accountInfoMjs.tenantIdMatchesHomeTenant));
parcelHelpers.export(exports, "updateAccountTenantProfileData", ()=>(0, _accountInfoMjs.updateAccountTenantProfileData));
parcelHelpers.export(exports, "getTenantIdFromIdTokenClaims", ()=>(0, _tokenClaimsMjs.getTenantIdFromIdTokenClaims));
parcelHelpers.export(exports, "CcsCredentialType", ()=>(0, _ccsCredentialMjs.CcsCredentialType));
parcelHelpers.export(exports, "buildClientInfo", ()=>(0, _clientInfoMjs.buildClientInfo));
parcelHelpers.export(exports, "buildClientInfoFromHomeAccountId", ()=>(0, _clientInfoMjs.buildClientInfoFromHomeAccountId));
parcelHelpers.export(exports, "Authority", ()=>(0, _authorityMjs.Authority));
parcelHelpers.export(exports, "buildStaticAuthorityOptions", ()=>(0, _authorityMjs.buildStaticAuthorityOptions));
parcelHelpers.export(exports, "formatAuthorityUri", ()=>(0, _authorityMjs.formatAuthorityUri));
parcelHelpers.export(exports, "AzureCloudInstance", ()=>(0, _authorityOptionsMjs.AzureCloudInstance));
parcelHelpers.export(exports, "AuthorityType", ()=>(0, _authorityTypeMjs.AuthorityType));
parcelHelpers.export(exports, "ProtocolMode", ()=>(0, _protocolModeMjs.ProtocolMode));
parcelHelpers.export(exports, "CacheManager", ()=>(0, _cacheManagerMjs.CacheManager));
parcelHelpers.export(exports, "DefaultStorageClass", ()=>(0, _cacheManagerMjs.DefaultStorageClass));
parcelHelpers.export(exports, "CacheRecord", ()=>(0, _cacheRecordMjs.CacheRecord));
parcelHelpers.export(exports, "AccountEntity", ()=>(0, _accountEntityMjs.AccountEntity));
parcelHelpers.export(exports, "TokenCacheContext", ()=>(0, _tokenCacheContextMjs.TokenCacheContext));
parcelHelpers.export(exports, "StubbedNetworkModule", ()=>(0, _inetworkModuleMjs.StubbedNetworkModule));
parcelHelpers.export(exports, "NetworkManager", ()=>(0, _networkManagerMjs.NetworkManager));
parcelHelpers.export(exports, "ThrottlingUtils", ()=>(0, _throttlingUtilsMjs.ThrottlingUtils));
parcelHelpers.export(exports, "UrlString", ()=>(0, _urlStringMjs.UrlString));
parcelHelpers.export(exports, "DEFAULT_CRYPTO_IMPLEMENTATION", ()=>(0, _icryptoMjs.DEFAULT_CRYPTO_IMPLEMENTATION));
parcelHelpers.export(exports, "JoseHeader", ()=>(0, _joseHeaderMjs.JoseHeader));
parcelHelpers.export(exports, "RequestParameterBuilder", ()=>(0, _requestParameterBuilderMjs.RequestParameterBuilder));
parcelHelpers.export(exports, "ResponseHandler", ()=>(0, _responseHandlerMjs.ResponseHandler));
parcelHelpers.export(exports, "buildAccountToCache", ()=>(0, _responseHandlerMjs.buildAccountToCache));
parcelHelpers.export(exports, "ScopeSet", ()=>(0, _scopeSetMjs.ScopeSet));
parcelHelpers.export(exports, "AuthenticationHeaderParser", ()=>(0, _authenticationHeaderParserMjs.AuthenticationHeaderParser));
parcelHelpers.export(exports, "LogLevel", ()=>(0, _loggerMjs.LogLevel));
parcelHelpers.export(exports, "Logger", ()=>(0, _loggerMjs.Logger));
parcelHelpers.export(exports, "InteractionRequiredAuthError", ()=>(0, _interactionRequiredAuthErrorMjs.InteractionRequiredAuthError));
parcelHelpers.export(exports, "InteractionRequiredAuthErrorMessage", ()=>(0, _interactionRequiredAuthErrorMjs.InteractionRequiredAuthErrorMessage));
parcelHelpers.export(exports, "createInteractionRequiredAuthError", ()=>(0, _interactionRequiredAuthErrorMjs.createInteractionRequiredAuthError));
parcelHelpers.export(exports, "AuthError", ()=>(0, _authErrorMjs.AuthError));
parcelHelpers.export(exports, "AuthErrorMessage", ()=>(0, _authErrorMjs.AuthErrorMessage));
parcelHelpers.export(exports, "createAuthError", ()=>(0, _authErrorMjs.createAuthError));
parcelHelpers.export(exports, "ServerError", ()=>(0, _serverErrorMjs.ServerError));
parcelHelpers.export(exports, "ClientAuthError", ()=>(0, _clientAuthErrorMjs.ClientAuthError));
parcelHelpers.export(exports, "ClientAuthErrorMessage", ()=>(0, _clientAuthErrorMjs.ClientAuthErrorMessage));
parcelHelpers.export(exports, "createClientAuthError", ()=>(0, _clientAuthErrorMjs.createClientAuthError));
parcelHelpers.export(exports, "ClientConfigurationError", ()=>(0, _clientConfigurationErrorMjs.ClientConfigurationError));
parcelHelpers.export(exports, "ClientConfigurationErrorMessage", ()=>(0, _clientConfigurationErrorMjs.ClientConfigurationErrorMessage));
parcelHelpers.export(exports, "createClientConfigurationError", ()=>(0, _clientConfigurationErrorMjs.createClientConfigurationError));
parcelHelpers.export(exports, "AADAuthorityConstants", ()=>(0, _constantsMjs.AADAuthorityConstants));
parcelHelpers.export(exports, "AuthenticationScheme", ()=>(0, _constantsMjs.AuthenticationScheme));
parcelHelpers.export(exports, "CacheAccountType", ()=>(0, _constantsMjs.CacheAccountType));
parcelHelpers.export(exports, "CacheOutcome", ()=>(0, _constantsMjs.CacheOutcome));
parcelHelpers.export(exports, "CacheType", ()=>(0, _constantsMjs.CacheType));
parcelHelpers.export(exports, "ClaimsRequestKeys", ()=>(0, _constantsMjs.ClaimsRequestKeys));
parcelHelpers.export(exports, "CodeChallengeMethodValues", ()=>(0, _constantsMjs.CodeChallengeMethodValues));
parcelHelpers.export(exports, "Constants", ()=>(0, _constantsMjs.Constants));
parcelHelpers.export(exports, "CredentialType", ()=>(0, _constantsMjs.CredentialType));
parcelHelpers.export(exports, "Errors", ()=>(0, _constantsMjs.Errors));
parcelHelpers.export(exports, "GrantType", ()=>(0, _constantsMjs.GrantType));
parcelHelpers.export(exports, "HeaderNames", ()=>(0, _constantsMjs.HeaderNames));
parcelHelpers.export(exports, "HttpStatus", ()=>(0, _constantsMjs.HttpStatus));
parcelHelpers.export(exports, "JsonWebTokenTypes", ()=>(0, _constantsMjs.JsonWebTokenTypes));
parcelHelpers.export(exports, "OIDC_DEFAULT_SCOPES", ()=>(0, _constantsMjs.OIDC_DEFAULT_SCOPES));
parcelHelpers.export(exports, "ONE_DAY_IN_MS", ()=>(0, _constantsMjs.ONE_DAY_IN_MS));
parcelHelpers.export(exports, "PasswordGrantConstants", ()=>(0, _constantsMjs.PasswordGrantConstants));
parcelHelpers.export(exports, "PersistentCacheKeys", ()=>(0, _constantsMjs.PersistentCacheKeys));
parcelHelpers.export(exports, "PromptValue", ()=>(0, _constantsMjs.PromptValue));
parcelHelpers.export(exports, "ResponseMode", ()=>(0, _constantsMjs.ResponseMode));
parcelHelpers.export(exports, "ServerResponseType", ()=>(0, _constantsMjs.ServerResponseType));
parcelHelpers.export(exports, "THE_FAMILY_ID", ()=>(0, _constantsMjs.THE_FAMILY_ID));
parcelHelpers.export(exports, "ThrottlingConstants", ()=>(0, _constantsMjs.ThrottlingConstants));
parcelHelpers.export(exports, "StringUtils", ()=>(0, _stringUtilsMjs.StringUtils));
parcelHelpers.export(exports, "ProtocolUtils", ()=>(0, _protocolUtilsMjs.ProtocolUtils));
parcelHelpers.export(exports, "invoke", ()=>(0, _functionWrappersMjs.invoke));
parcelHelpers.export(exports, "invokeAsync", ()=>(0, _functionWrappersMjs.invokeAsync));
parcelHelpers.export(exports, "ServerTelemetryManager", ()=>(0, _serverTelemetryManagerMjs.ServerTelemetryManager));
parcelHelpers.export(exports, "IntFields", ()=>(0, _performanceEventMjs.IntFields));
parcelHelpers.export(exports, "PerformanceEventStatus", ()=>(0, _performanceEventMjs.PerformanceEventStatus));
parcelHelpers.export(exports, "PerformanceEvents", ()=>(0, _performanceEventMjs.PerformanceEvents));
parcelHelpers.export(exports, "PerformanceClient", ()=>(0, _performanceClientMjs.PerformanceClient));
parcelHelpers.export(exports, "StubPerformanceClient", ()=>(0, _stubPerformanceClientMjs.StubPerformanceClient));
parcelHelpers.export(exports, "PopTokenGenerator", ()=>(0, _popTokenGeneratorMjs.PopTokenGenerator));
parcelHelpers.export(exports, "version", ()=>(0, _packageMetadataMjs.version));
parcelHelpers.export(exports, "AuthToken", ()=>_authTokenMjs);
parcelHelpers.export(exports, "AuthorityFactory", ()=>_authorityFactoryMjs);
parcelHelpers.export(exports, "CacheHelpers", ()=>_cacheHelpersMjs);
parcelHelpers.export(exports, "AADServerParamKeys", ()=>_aadserverParamKeysMjs);
parcelHelpers.export(exports, "TimeUtils", ()=>_timeUtilsMjs);
parcelHelpers.export(exports, "UrlUtils", ()=>_urlUtilsMjs);
parcelHelpers.export(exports, "InteractionRequiredAuthErrorCodes", ()=>_interactionRequiredAuthErrorCodesMjs);
parcelHelpers.export(exports, "AuthErrorCodes", ()=>_authErrorCodesMjs);
parcelHelpers.export(exports, "ClientAuthErrorCodes", ()=>_clientAuthErrorCodesMjs);
parcelHelpers.export(exports, "ClientConfigurationErrorCodes", ()=>_clientConfigurationErrorCodesMjs);
var _authorizationCodeClientMjs = require("./client/AuthorizationCodeClient.mjs");
var _refreshTokenClientMjs = require("./client/RefreshTokenClient.mjs");
var _silentFlowClientMjs = require("./client/SilentFlowClient.mjs");
var _baseClientMjs = require("./client/BaseClient.mjs");
var _clientConfigurationMjs = require("./config/ClientConfiguration.mjs");
var _accountInfoMjs = require("./account/AccountInfo.mjs");
var _authTokenMjs = require("./account/AuthToken.mjs");
var _tokenClaimsMjs = require("./account/TokenClaims.mjs");
var _ccsCredentialMjs = require("./account/CcsCredential.mjs");
var _clientInfoMjs = require("./account/ClientInfo.mjs");
var _authorityMjs = require("./authority/Authority.mjs");
var _authorityOptionsMjs = require("./authority/AuthorityOptions.mjs");
var _authorityFactoryMjs = require("./authority/AuthorityFactory.mjs");
var _authorityTypeMjs = require("./authority/AuthorityType.mjs");
var _protocolModeMjs = require("./authority/ProtocolMode.mjs");
var _cacheManagerMjs = require("./cache/CacheManager.mjs");
var _cacheRecordMjs = require("./cache/entities/CacheRecord.mjs");
var _cacheHelpersMjs = require("./cache/utils/CacheHelpers.mjs");
var _accountEntityMjs = require("./cache/entities/AccountEntity.mjs");
var _tokenCacheContextMjs = require("./cache/persistence/TokenCacheContext.mjs");
var _inetworkModuleMjs = require("./network/INetworkModule.mjs");
var _networkManagerMjs = require("./network/NetworkManager.mjs");
var _throttlingUtilsMjs = require("./network/ThrottlingUtils.mjs");
var _urlStringMjs = require("./url/UrlString.mjs");
var _icryptoMjs = require("./crypto/ICrypto.mjs");
var _joseHeaderMjs = require("./crypto/JoseHeader.mjs");
var _requestParameterBuilderMjs = require("./request/RequestParameterBuilder.mjs");
var _responseHandlerMjs = require("./response/ResponseHandler.mjs");
var _scopeSetMjs = require("./request/ScopeSet.mjs");
var _authenticationHeaderParserMjs = require("./request/AuthenticationHeaderParser.mjs");
var _loggerMjs = require("./logger/Logger.mjs");
var _interactionRequiredAuthErrorMjs = require("./error/InteractionRequiredAuthError.mjs");
var _authErrorMjs = require("./error/AuthError.mjs");
var _serverErrorMjs = require("./error/ServerError.mjs");
var _clientAuthErrorMjs = require("./error/ClientAuthError.mjs");
var _clientConfigurationErrorMjs = require("./error/ClientConfigurationError.mjs");
var _constantsMjs = require("./utils/Constants.mjs");
var _aadserverParamKeysMjs = require("./constants/AADServerParamKeys.mjs");
var _stringUtilsMjs = require("./utils/StringUtils.mjs");
var _protocolUtilsMjs = require("./utils/ProtocolUtils.mjs");
var _timeUtilsMjs = require("./utils/TimeUtils.mjs");
var _urlUtilsMjs = require("./utils/UrlUtils.mjs");
var _functionWrappersMjs = require("./utils/FunctionWrappers.mjs");
var _serverTelemetryManagerMjs = require("./telemetry/server/ServerTelemetryManager.mjs");
var _performanceEventMjs = require("./telemetry/performance/PerformanceEvent.mjs");
var _performanceClientMjs = require("./telemetry/performance/PerformanceClient.mjs");
var _stubPerformanceClientMjs = require("./telemetry/performance/StubPerformanceClient.mjs");
var _popTokenGeneratorMjs = require("./crypto/PopTokenGenerator.mjs");
var _packageMetadataMjs = require("./packageMetadata.mjs");
var _interactionRequiredAuthErrorCodesMjs = require("./error/InteractionRequiredAuthErrorCodes.mjs");
var _authErrorCodesMjs = require("./error/AuthErrorCodes.mjs");
var _clientAuthErrorCodesMjs = require("./error/ClientAuthErrorCodes.mjs");
var _clientConfigurationErrorCodesMjs = require("./error/ClientConfigurationErrorCodes.mjs");
"use strict";

},{"./client/AuthorizationCodeClient.mjs":"bzrjw","./client/RefreshTokenClient.mjs":"hQnJi","./client/SilentFlowClient.mjs":"i7Ceu","./client/BaseClient.mjs":false,"./config/ClientConfiguration.mjs":"a8XVu","./account/AccountInfo.mjs":"cPnzw","./account/AuthToken.mjs":"hZiUx","./account/TokenClaims.mjs":false,"./account/CcsCredential.mjs":"c0gGV","./account/ClientInfo.mjs":false,"./authority/Authority.mjs":"4lJrf","./authority/AuthorityOptions.mjs":"kwzE9","./authority/AuthorityFactory.mjs":"adNgV","./authority/AuthorityType.mjs":"inSt3","./authority/ProtocolMode.mjs":"1Lm0d","./cache/CacheManager.mjs":"hqCRb","./cache/entities/CacheRecord.mjs":"kTXYA","./cache/utils/CacheHelpers.mjs":"GDVlI","./cache/entities/AccountEntity.mjs":"2Pt03","./cache/persistence/TokenCacheContext.mjs":false,"./network/INetworkModule.mjs":"fNZZv","./network/NetworkManager.mjs":false,"./network/ThrottlingUtils.mjs":"beKsV","./url/UrlString.mjs":"km6Sc","./crypto/ICrypto.mjs":"2JOZE","./crypto/JoseHeader.mjs":"kXFP2","./request/RequestParameterBuilder.mjs":"ilhWa","./response/ResponseHandler.mjs":"dJSiC","./request/ScopeSet.mjs":"3j7iu","./request/AuthenticationHeaderParser.mjs":false,"./logger/Logger.mjs":"447zJ","./error/InteractionRequiredAuthError.mjs":"2G6ns","./error/AuthError.mjs":"8tPVA","./error/ServerError.mjs":"l3z3W","./error/ClientAuthError.mjs":"2qWlJ","./error/ClientConfigurationError.mjs":"aV0KO","./utils/Constants.mjs":"lFItn","./constants/AADServerParamKeys.mjs":"9MeBU","./utils/StringUtils.mjs":"4cOPw","./utils/ProtocolUtils.mjs":"8oBjH","./utils/TimeUtils.mjs":"4YRSM","./utils/UrlUtils.mjs":"aCoaU","./utils/FunctionWrappers.mjs":"hcHk8","./telemetry/server/ServerTelemetryManager.mjs":"bVHrD","./telemetry/performance/PerformanceEvent.mjs":"g49Qr","./telemetry/performance/PerformanceClient.mjs":false,"./telemetry/performance/StubPerformanceClient.mjs":"urXAF","./crypto/PopTokenGenerator.mjs":"6H3aG","./packageMetadata.mjs":false,"./error/InteractionRequiredAuthErrorCodes.mjs":"hcVir","./error/AuthErrorCodes.mjs":"deUDm","./error/ClientAuthErrorCodes.mjs":"fhXae","./error/ClientConfigurationErrorCodes.mjs":"1N7Do","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzrjw":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthorizationCodeClient", ()=>AuthorizationCodeClient);
var _baseClientMjs = require("./BaseClient.mjs");
var _requestParameterBuilderMjs = require("../request/RequestParameterBuilder.mjs");
var _constantsMjs = require("../utils/Constants.mjs");
var _aadserverParamKeysMjs = require("../constants/AADServerParamKeys.mjs");
var _clientConfigurationMjs = require("../config/ClientConfiguration.mjs");
var _responseHandlerMjs = require("../response/ResponseHandler.mjs");
var _stringUtilsMjs = require("../utils/StringUtils.mjs");
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _urlStringMjs = require("../url/UrlString.mjs");
var _popTokenGeneratorMjs = require("../crypto/PopTokenGenerator.mjs");
var _timeUtilsMjs = require("../utils/TimeUtils.mjs");
var _clientInfoMjs = require("../account/ClientInfo.mjs");
var _ccsCredentialMjs = require("../account/CcsCredential.mjs");
var _clientConfigurationErrorMjs = require("../error/ClientConfigurationError.mjs");
var _requestValidatorMjs = require("../request/RequestValidator.mjs");
var _performanceEventMjs = require("../telemetry/performance/PerformanceEvent.mjs");
var _functionWrappersMjs = require("../utils/FunctionWrappers.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
var _clientConfigurationErrorCodesMjs = require("../error/ClientConfigurationErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Oauth2.0 Authorization Code client
 * @internal
 */ class AuthorizationCodeClient extends (0, _baseClientMjs.BaseClient) {
    constructor(configuration, performanceClient){
        super(configuration, performanceClient);
        // Flag to indicate if client is for hybrid spa auth code redemption
        this.includeRedirectUri = true;
        this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes;
    }
    /**
     * Creates the URL of the authorization request letting the user input credentials and consent to the
     * application. The URL target the /authorize endpoint of the authority configured in the
     * application object.
     *
     * Once the user inputs their credentials and consents, the authority will send a response to the redirect URI
     * sent in the request and should contain an authorization code, which can then be used to acquire tokens via
     * acquireToken(AuthorizationCodeRequest)
     * @param request
     */ async getAuthCodeUrl(request) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).GetAuthCodeUrl, request.correlationId);
        const queryString = await (0, _functionWrappersMjs.invokeAsync)(this.createAuthCodeUrlQueryString.bind(this), (0, _performanceEventMjs.PerformanceEvents).AuthClientCreateQueryString, this.logger, this.performanceClient, request.correlationId)(request);
        return (0, _urlStringMjs.UrlString).appendQueryString(this.authority.authorizationEndpoint, queryString);
    }
    /**
     * API to acquire a token in exchange of 'authorization_code` acquired by the user in the first leg of the
     * authorization_code_grant
     * @param request
     */ async acquireToken(request, authCodePayload) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).AuthClientAcquireToken, request.correlationId);
        if (!request.code) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.requestCannotBeMade));
        const reqTimestamp = (0, _timeUtilsMjs.nowSeconds)();
        const response = await (0, _functionWrappersMjs.invokeAsync)(this.executeTokenRequest.bind(this), (0, _performanceEventMjs.PerformanceEvents).AuthClientExecuteTokenRequest, this.logger, this.performanceClient, request.correlationId)(this.authority, request);
        // Retrieve requestId from response headers
        const requestId = response.headers?.[(0, _constantsMjs.HeaderNames).X_MS_REQUEST_ID];
        const responseHandler = new (0, _responseHandlerMjs.ResponseHandler)(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
        // Validate response. This function throws a server error if an error is returned by the server.
        responseHandler.validateTokenResponse(response.body);
        return (0, _functionWrappersMjs.invokeAsync)(responseHandler.handleServerTokenResponse.bind(responseHandler), (0, _performanceEventMjs.PerformanceEvents).HandleServerTokenResponse, this.logger, this.performanceClient, request.correlationId)(response.body, this.authority, reqTimestamp, request, authCodePayload, undefined, undefined, undefined, requestId);
    }
    /**
     * Handles the hash fragment response from public client code request. Returns a code response used by
     * the client to exchange for a token in acquireToken.
     * @param hashFragment
     */ handleFragmentResponse(serverParams, cachedState) {
        // Handle responses.
        const responseHandler = new (0, _responseHandlerMjs.ResponseHandler)(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null);
        // Get code response
        responseHandler.validateServerAuthorizationCodeResponse(serverParams, cachedState);
        // throw when there is no auth code in the response
        if (!serverParams.code) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.authorizationCodeMissingFromServerResponse));
        return serverParams;
    }
    /**
     * Used to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param authorityUri
     */ getLogoutUri(logoutRequest) {
        // Throw error if logoutRequest is null/undefined
        if (!logoutRequest) throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.logoutRequestEmpty));
        const queryString = this.createLogoutUrlQueryString(logoutRequest);
        // Construct logout URI
        return (0, _urlStringMjs.UrlString).appendQueryString(this.authority.endSessionEndpoint, queryString);
    }
    /**
     * Executes POST request to token endpoint
     * @param authority
     * @param request
     */ async executeTokenRequest(authority, request) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).AuthClientExecuteTokenRequest, request.correlationId);
        const queryParametersString = this.createTokenQueryParameters(request);
        const endpoint = (0, _urlStringMjs.UrlString).appendQueryString(authority.tokenEndpoint, queryParametersString);
        const requestBody = await (0, _functionWrappersMjs.invokeAsync)(this.createTokenRequestBody.bind(this), (0, _performanceEventMjs.PerformanceEvents).AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, request.correlationId)(request);
        let ccsCredential = undefined;
        if (request.clientInfo) try {
            const clientInfo = (0, _clientInfoMjs.buildClientInfo)(request.clientInfo, this.cryptoUtils.base64Decode);
            ccsCredential = {
                credential: `${clientInfo.uid}${(0, _constantsMjs.Separators).CLIENT_INFO_SEPARATOR}${clientInfo.utid}`,
                type: (0, _ccsCredentialMjs.CcsCredentialType).HOME_ACCOUNT_ID
            };
        } catch (e) {
            this.logger.verbose("Could not parse client info for CCS Header: " + e);
        }
        const headers = this.createTokenRequestHeaders(ccsCredential || request.ccsCredential);
        const thumbprint = {
            clientId: request.tokenBodyParameters?.clientId || this.config.authOptions.clientId,
            authority: authority.canonicalAuthority,
            scopes: request.scopes,
            claims: request.claims,
            authenticationScheme: request.authenticationScheme,
            resourceRequestMethod: request.resourceRequestMethod,
            resourceRequestUri: request.resourceRequestUri,
            shrClaims: request.shrClaims,
            sshKid: request.sshKid
        };
        return (0, _functionWrappersMjs.invokeAsync)(this.executePostToTokenEndpoint.bind(this), (0, _performanceEventMjs.PerformanceEvents).AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, request.correlationId)(endpoint, requestBody, headers, thumbprint, request.correlationId, (0, _performanceEventMjs.PerformanceEvents).AuthorizationCodeClientExecutePostToTokenEndpoint);
    }
    /**
     * Generates a map for all the params to be sent to the service
     * @param request
     */ async createTokenRequestBody(request) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).AuthClientCreateTokenRequestBody, request.correlationId);
        const parameterBuilder = new (0, _requestParameterBuilderMjs.RequestParameterBuilder)();
        parameterBuilder.addClientId(request.tokenBodyParameters?.[0, _aadserverParamKeysMjs.CLIENT_ID] || this.config.authOptions.clientId);
        /*
         * For hybrid spa flow, there will be a code but no verifier
         * In this scenario, don't include redirect uri as auth code will not be bound to redirect URI
         */ if (!this.includeRedirectUri) // Just validate
        (0, _requestValidatorMjs.RequestValidator).validateRedirectUri(request.redirectUri);
        else // Validate and include redirect uri
        parameterBuilder.addRedirectUri(request.redirectUri);
        // Add scope array, parameter builder will add default scopes and dedupe
        parameterBuilder.addScopes(request.scopes, true, this.oidcDefaultScopes);
        // add code: user set, not validated
        parameterBuilder.addAuthorizationCode(request.code);
        // Add library metadata
        parameterBuilder.addLibraryInfo(this.config.libraryInfo);
        parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
        parameterBuilder.addThrottling();
        if (this.serverTelemetryManager && !(0, _clientConfigurationMjs.isOidcProtocolMode)(this.config)) parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
        // add code_verifier if passed
        if (request.codeVerifier) parameterBuilder.addCodeVerifier(request.codeVerifier);
        if (this.config.clientCredentials.clientSecret) parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
        if (this.config.clientCredentials.clientAssertion) {
            const clientAssertion = this.config.clientCredentials.clientAssertion;
            parameterBuilder.addClientAssertion(clientAssertion.assertion);
            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
        }
        parameterBuilder.addGrantType((0, _constantsMjs.GrantType).AUTHORIZATION_CODE_GRANT);
        parameterBuilder.addClientInfo();
        if (request.authenticationScheme === (0, _constantsMjs.AuthenticationScheme).POP) {
            const popTokenGenerator = new (0, _popTokenGeneratorMjs.PopTokenGenerator)(this.cryptoUtils, this.performanceClient);
            const reqCnfData = await (0, _functionWrappersMjs.invokeAsync)(popTokenGenerator.generateCnf.bind(popTokenGenerator), (0, _performanceEventMjs.PerformanceEvents).PopTokenGenerateCnf, this.logger, this.performanceClient, request.correlationId)(request, this.logger);
            // SPA PoP requires full Base64Url encoded req_cnf string (unhashed)
            parameterBuilder.addPopToken(reqCnfData.reqCnfString);
        } else if (request.authenticationScheme === (0, _constantsMjs.AuthenticationScheme).SSH) {
            if (request.sshJwk) parameterBuilder.addSshJwk(request.sshJwk);
            else throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.missingSshJwk));
        }
        const correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        if (!(0, _stringUtilsMjs.StringUtils).isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        let ccsCred = undefined;
        if (request.clientInfo) try {
            const clientInfo = (0, _clientInfoMjs.buildClientInfo)(request.clientInfo, this.cryptoUtils.base64Decode);
            ccsCred = {
                credential: `${clientInfo.uid}${(0, _constantsMjs.Separators).CLIENT_INFO_SEPARATOR}${clientInfo.utid}`,
                type: (0, _ccsCredentialMjs.CcsCredentialType).HOME_ACCOUNT_ID
            };
        } catch (e) {
            this.logger.verbose("Could not parse client info for CCS Header: " + e);
        }
        else ccsCred = request.ccsCredential;
        // Adds these as parameters in the request instead of headers to prevent CORS preflight request
        if (this.config.systemOptions.preventCorsPreflight && ccsCred) switch(ccsCred.type){
            case (0, _ccsCredentialMjs.CcsCredentialType).HOME_ACCOUNT_ID:
                try {
                    const clientInfo = (0, _clientInfoMjs.buildClientInfoFromHomeAccountId)(ccsCred.credential);
                    parameterBuilder.addCcsOid(clientInfo);
                } catch (e) {
                    this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                }
                break;
            case (0, _ccsCredentialMjs.CcsCredentialType).UPN:
                parameterBuilder.addCcsUpn(ccsCred.credential);
                break;
        }
        if (request.tokenBodyParameters) parameterBuilder.addExtraQueryParameters(request.tokenBodyParameters);
        // Add hybrid spa parameters if not already provided
        if (request.enableSpaAuthorizationCode && (!request.tokenBodyParameters || !request.tokenBodyParameters[0, _aadserverParamKeysMjs.RETURN_SPA_CODE])) parameterBuilder.addExtraQueryParameters({
            [(0, _aadserverParamKeysMjs.RETURN_SPA_CODE)]: "1"
        });
        return parameterBuilder.createQueryString();
    }
    /**
     * This API validates the `AuthorizationCodeUrlRequest` and creates a URL
     * @param request
     */ async createAuthCodeUrlQueryString(request) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).AuthClientCreateQueryString, request.correlationId);
        const parameterBuilder = new (0, _requestParameterBuilderMjs.RequestParameterBuilder)();
        parameterBuilder.addClientId(request.extraQueryParameters?.[0, _aadserverParamKeysMjs.CLIENT_ID] || this.config.authOptions.clientId);
        const requestScopes = [
            ...request.scopes || [],
            ...request.extraScopesToConsent || []
        ];
        parameterBuilder.addScopes(requestScopes, true, this.oidcDefaultScopes);
        // validate the redirectUri (to be a non null value)
        parameterBuilder.addRedirectUri(request.redirectUri);
        // generate the correlationId if not set by the user and add
        const correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        // add response_mode. If not passed in it defaults to query.
        parameterBuilder.addResponseMode(request.responseMode);
        // add response_type = code
        parameterBuilder.addResponseTypeCode();
        // add library info parameters
        parameterBuilder.addLibraryInfo(this.config.libraryInfo);
        if (!(0, _clientConfigurationMjs.isOidcProtocolMode)(this.config)) parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
        // add client_info=1
        parameterBuilder.addClientInfo();
        if (request.codeChallenge && request.codeChallengeMethod) parameterBuilder.addCodeChallengeParams(request.codeChallenge, request.codeChallengeMethod);
        if (request.prompt) parameterBuilder.addPrompt(request.prompt);
        if (request.domainHint) parameterBuilder.addDomainHint(request.domainHint);
        // Add sid or loginHint with preference for login_hint claim (in request) -> sid -> loginHint (upn/email) -> username of AccountInfo object
        if (request.prompt !== (0, _constantsMjs.PromptValue).SELECT_ACCOUNT) {
            // AAD will throw if prompt=select_account is passed with an account hint
            if (request.sid && request.prompt === (0, _constantsMjs.PromptValue).NONE) {
                // SessionID is only used in silent calls
                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request");
                parameterBuilder.addSid(request.sid);
            } else if (request.account) {
                const accountSid = this.extractAccountSid(request.account);
                const accountLoginHintClaim = this.extractLoginHint(request.account);
                // If login_hint claim is present, use it over sid/username
                if (accountLoginHintClaim) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account");
                    parameterBuilder.addLoginHint(accountLoginHintClaim);
                    try {
                        const clientInfo = (0, _clientInfoMjs.buildClientInfoFromHomeAccountId)(request.account.homeAccountId);
                        parameterBuilder.addCcsOid(clientInfo);
                    } catch (e) {
                        this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                } else if (accountSid && request.prompt === (0, _constantsMjs.PromptValue).NONE) {
                    /*
                     * If account and loginHint are provided, we will check account first for sid before adding loginHint
                     * SessionId is only used in silent calls
                     */ this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account");
                    parameterBuilder.addSid(accountSid);
                    try {
                        const clientInfo = (0, _clientInfoMjs.buildClientInfoFromHomeAccountId)(request.account.homeAccountId);
                        parameterBuilder.addCcsOid(clientInfo);
                    } catch (e) {
                        this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                } else if (request.loginHint) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request");
                    parameterBuilder.addLoginHint(request.loginHint);
                    parameterBuilder.addCcsUpn(request.loginHint);
                } else if (request.account.username) {
                    // Fallback to account username if provided
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account");
                    parameterBuilder.addLoginHint(request.account.username);
                    try {
                        const clientInfo = (0, _clientInfoMjs.buildClientInfoFromHomeAccountId)(request.account.homeAccountId);
                        parameterBuilder.addCcsOid(clientInfo);
                    } catch (e) {
                        this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                }
            } else if (request.loginHint) {
                this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request");
                parameterBuilder.addLoginHint(request.loginHint);
                parameterBuilder.addCcsUpn(request.loginHint);
            }
        } else this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
        if (request.nonce) parameterBuilder.addNonce(request.nonce);
        if (request.state) parameterBuilder.addState(request.state);
        if (request.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        if (request.extraQueryParameters) parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
        if (request.nativeBroker) {
            // signal ests that this is a WAM call
            parameterBuilder.addNativeBroker();
            // pass the req_cnf for POP
            if (request.authenticationScheme === (0, _constantsMjs.AuthenticationScheme).POP) {
                const popTokenGenerator = new (0, _popTokenGeneratorMjs.PopTokenGenerator)(this.cryptoUtils);
                // to reduce the URL length, it is recommended to send the hash of the req_cnf instead of the whole string
                const reqCnfData = await (0, _functionWrappersMjs.invokeAsync)(popTokenGenerator.generateCnf.bind(popTokenGenerator), (0, _performanceEventMjs.PerformanceEvents).PopTokenGenerateCnf, this.logger, this.performanceClient, request.correlationId)(request, this.logger);
                parameterBuilder.addPopToken(reqCnfData.reqCnfHash);
            }
        }
        return parameterBuilder.createQueryString();
    }
    /**
     * This API validates the `EndSessionRequest` and creates a URL
     * @param request
     */ createLogoutUrlQueryString(request) {
        const parameterBuilder = new (0, _requestParameterBuilderMjs.RequestParameterBuilder)();
        if (request.postLogoutRedirectUri) parameterBuilder.addPostLogoutRedirectUri(request.postLogoutRedirectUri);
        if (request.correlationId) parameterBuilder.addCorrelationId(request.correlationId);
        if (request.idTokenHint) parameterBuilder.addIdTokenHint(request.idTokenHint);
        if (request.state) parameterBuilder.addState(request.state);
        if (request.logoutHint) parameterBuilder.addLogoutHint(request.logoutHint);
        if (request.extraQueryParameters) parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
        return parameterBuilder.createQueryString();
    }
    /**
     * Helper to get sid from account. Returns null if idTokenClaims are not present or sid is not present.
     * @param account
     */ extractAccountSid(account) {
        return account.idTokenClaims?.sid || null;
    }
    extractLoginHint(account) {
        return account.idTokenClaims?.login_hint || null;
    }
}

},{"./BaseClient.mjs":"5xOmc","../request/RequestParameterBuilder.mjs":"ilhWa","../utils/Constants.mjs":"lFItn","../constants/AADServerParamKeys.mjs":"9MeBU","../config/ClientConfiguration.mjs":"a8XVu","../response/ResponseHandler.mjs":"dJSiC","../utils/StringUtils.mjs":"4cOPw","../error/ClientAuthError.mjs":"2qWlJ","../url/UrlString.mjs":"km6Sc","../crypto/PopTokenGenerator.mjs":"6H3aG","../utils/TimeUtils.mjs":"4YRSM","../account/ClientInfo.mjs":"e6eRZ","../account/CcsCredential.mjs":"c0gGV","../error/ClientConfigurationError.mjs":"aV0KO","../request/RequestValidator.mjs":"jAN1x","../telemetry/performance/PerformanceEvent.mjs":"g49Qr","../utils/FunctionWrappers.mjs":"hcHk8","../error/ClientAuthErrorCodes.mjs":"fhXae","../error/ClientConfigurationErrorCodes.mjs":"1N7Do","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5xOmc":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseClient", ()=>BaseClient);
var _clientConfigurationMjs = require("../config/ClientConfiguration.mjs");
var _networkManagerMjs = require("../network/NetworkManager.mjs");
var _loggerMjs = require("../logger/Logger.mjs");
var _constantsMjs = require("../utils/Constants.mjs");
var _packageMetadataMjs = require("../packageMetadata.mjs");
var _ccsCredentialMjs = require("../account/CcsCredential.mjs");
var _clientInfoMjs = require("../account/ClientInfo.mjs");
var _requestParameterBuilderMjs = require("../request/RequestParameterBuilder.mjs");
var _authorityFactoryMjs = require("../authority/AuthorityFactory.mjs");
var _performanceEventMjs = require("../telemetry/performance/PerformanceEvent.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Base application class which will construct requests to send to and handle responses from the Microsoft STS using the authorization code flow.
 * @internal
 */ class BaseClient {
    constructor(configuration, performanceClient){
        // Set the configuration
        this.config = (0, _clientConfigurationMjs.buildClientConfiguration)(configuration);
        // Initialize the logger
        this.logger = new (0, _loggerMjs.Logger)(this.config.loggerOptions, (0, _packageMetadataMjs.name), (0, _packageMetadataMjs.version));
        // Initialize crypto
        this.cryptoUtils = this.config.cryptoInterface;
        // Initialize storage interface
        this.cacheManager = this.config.storageInterface;
        // Set the network interface
        this.networkClient = this.config.networkInterface;
        // Set the NetworkManager
        this.networkManager = new (0, _networkManagerMjs.NetworkManager)(this.networkClient, this.cacheManager);
        // Set TelemetryManager
        this.serverTelemetryManager = this.config.serverTelemetryManager;
        // set Authority
        this.authority = this.config.authOptions.authority;
        // set performance telemetry client
        this.performanceClient = performanceClient;
    }
    /**
     * Creates default headers for requests to token endpoint
     */ createTokenRequestHeaders(ccsCred) {
        const headers = {};
        headers[(0, _constantsMjs.HeaderNames).CONTENT_TYPE] = (0, _constantsMjs.Constants).URL_FORM_CONTENT_TYPE;
        if (!this.config.systemOptions.preventCorsPreflight && ccsCred) switch(ccsCred.type){
            case (0, _ccsCredentialMjs.CcsCredentialType).HOME_ACCOUNT_ID:
                try {
                    const clientInfo = (0, _clientInfoMjs.buildClientInfoFromHomeAccountId)(ccsCred.credential);
                    headers[(0, _constantsMjs.HeaderNames).CCS_HEADER] = `Oid:${clientInfo.uid}@${clientInfo.utid}`;
                } catch (e) {
                    this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                }
                break;
            case (0, _ccsCredentialMjs.CcsCredentialType).UPN:
                headers[(0, _constantsMjs.HeaderNames).CCS_HEADER] = `UPN: ${ccsCred.credential}`;
                break;
        }
        return headers;
    }
    /**
     * Http post to token endpoint
     * @param tokenEndpoint
     * @param queryString
     * @param headers
     * @param thumbprint
     */ async executePostToTokenEndpoint(tokenEndpoint, queryString, headers, thumbprint, correlationId, queuedEvent) {
        if (queuedEvent) this.performanceClient?.addQueueMeasurement(queuedEvent, correlationId);
        const response = await this.networkManager.sendPostRequest(thumbprint, tokenEndpoint, {
            body: queryString,
            headers: headers
        });
        this.performanceClient?.addFields({
            refreshTokenSize: response.body.refresh_token?.length || 0,
            httpVerToken: response.headers?.[(0, _constantsMjs.HeaderNames).X_MS_HTTP_VERSION] || ""
        }, correlationId);
        if (this.config.serverTelemetryManager && response.status < 500 && response.status !== 429) // Telemetry data successfully logged by server, clear Telemetry cache
        this.config.serverTelemetryManager.clearTelemetryCache();
        return response;
    }
    /**
     * Updates the authority object of the client. Endpoint discovery must be completed.
     * @param updatedAuthority
     */ async updateAuthority(cloudInstanceHostname, correlationId) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).UpdateTokenEndpointAuthority, correlationId);
        const cloudInstanceAuthorityUri = `https://${cloudInstanceHostname}/${this.authority.tenant}/`;
        const cloudInstanceAuthority = await (0, _authorityFactoryMjs.createDiscoveredInstance)(cloudInstanceAuthorityUri, this.networkClient, this.cacheManager, this.authority.options, this.logger, correlationId, this.performanceClient);
        this.authority = cloudInstanceAuthority;
    }
    /**
     * Creates query string for the /token request
     * @param request
     */ createTokenQueryParameters(request) {
        const parameterBuilder = new (0, _requestParameterBuilderMjs.RequestParameterBuilder)();
        if (request.tokenQueryParameters) parameterBuilder.addExtraQueryParameters(request.tokenQueryParameters);
        return parameterBuilder.createQueryString();
    }
}

},{"../config/ClientConfiguration.mjs":"a8XVu","../network/NetworkManager.mjs":"j7VQQ","../logger/Logger.mjs":"447zJ","../utils/Constants.mjs":"lFItn","../packageMetadata.mjs":"c03hI","../account/CcsCredential.mjs":"c0gGV","../account/ClientInfo.mjs":"e6eRZ","../request/RequestParameterBuilder.mjs":"ilhWa","../authority/AuthorityFactory.mjs":"adNgV","../telemetry/performance/PerformanceEvent.mjs":"g49Qr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8XVu":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_SYSTEM_OPTIONS", ()=>DEFAULT_SYSTEM_OPTIONS);
parcelHelpers.export(exports, "buildClientConfiguration", ()=>buildClientConfiguration);
parcelHelpers.export(exports, "isOidcProtocolMode", ()=>isOidcProtocolMode);
var _icryptoMjs = require("../crypto/ICrypto.mjs");
var _loggerMjs = require("../logger/Logger.mjs");
var _constantsMjs = require("../utils/Constants.mjs");
var _packageMetadataMjs = require("../packageMetadata.mjs");
var _authorityOptionsMjs = require("../authority/AuthorityOptions.mjs");
var _cacheManagerMjs = require("../cache/CacheManager.mjs");
var _protocolModeMjs = require("../authority/ProtocolMode.mjs");
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ // Token renewal offset default in seconds
const DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;
const DEFAULT_SYSTEM_OPTIONS = {
    tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
    preventCorsPreflight: false
};
const DEFAULT_LOGGER_IMPLEMENTATION = {
    loggerCallback: ()=>{
    // allow users to not set loggerCallback
    },
    piiLoggingEnabled: false,
    logLevel: (0, _loggerMjs.LogLevel).Info,
    correlationId: (0, _constantsMjs.Constants).EMPTY_STRING
};
const DEFAULT_CACHE_OPTIONS = {
    claimsBasedCachingEnabled: false
};
const DEFAULT_NETWORK_IMPLEMENTATION = {
    async sendGetRequestAsync () {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    },
    async sendPostRequestAsync () {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
};
const DEFAULT_LIBRARY_INFO = {
    sku: (0, _constantsMjs.Constants).SKU,
    version: (0, _packageMetadataMjs.version),
    cpu: (0, _constantsMjs.Constants).EMPTY_STRING,
    os: (0, _constantsMjs.Constants).EMPTY_STRING
};
const DEFAULT_CLIENT_CREDENTIALS = {
    clientSecret: (0, _constantsMjs.Constants).EMPTY_STRING,
    clientAssertion: undefined
};
const DEFAULT_AZURE_CLOUD_OPTIONS = {
    azureCloudInstance: (0, _authorityOptionsMjs.AzureCloudInstance).None,
    tenant: `${(0, _constantsMjs.Constants).DEFAULT_COMMON_TENANT}`
};
const DEFAULT_TELEMETRY_OPTIONS = {
    application: {
        appName: "",
        appVersion: ""
    }
};
/**
 * Function that sets the default options when not explicitly configured from app developer
 *
 * @param Configuration
 *
 * @returns Configuration
 */ function buildClientConfiguration({ authOptions: userAuthOptions, systemOptions: userSystemOptions, loggerOptions: userLoggerOption, cacheOptions: userCacheOptions, storageInterface: storageImplementation, networkInterface: networkImplementation, cryptoInterface: cryptoImplementation, clientCredentials: clientCredentials, libraryInfo: libraryInfo, telemetry: telemetry, serverTelemetryManager: serverTelemetryManager, persistencePlugin: persistencePlugin, serializableCache: serializableCache }) {
    const loggerOptions = {
        ...DEFAULT_LOGGER_IMPLEMENTATION,
        ...userLoggerOption
    };
    return {
        authOptions: buildAuthOptions(userAuthOptions),
        systemOptions: {
            ...DEFAULT_SYSTEM_OPTIONS,
            ...userSystemOptions
        },
        loggerOptions: loggerOptions,
        cacheOptions: {
            ...DEFAULT_CACHE_OPTIONS,
            ...userCacheOptions
        },
        storageInterface: storageImplementation || new (0, _cacheManagerMjs.DefaultStorageClass)(userAuthOptions.clientId, (0, _icryptoMjs.DEFAULT_CRYPTO_IMPLEMENTATION), new (0, _loggerMjs.Logger)(loggerOptions)),
        networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
        cryptoInterface: cryptoImplementation || (0, _icryptoMjs.DEFAULT_CRYPTO_IMPLEMENTATION),
        clientCredentials: clientCredentials || DEFAULT_CLIENT_CREDENTIALS,
        libraryInfo: {
            ...DEFAULT_LIBRARY_INFO,
            ...libraryInfo
        },
        telemetry: {
            ...DEFAULT_TELEMETRY_OPTIONS,
            ...telemetry
        },
        serverTelemetryManager: serverTelemetryManager || null,
        persistencePlugin: persistencePlugin || null,
        serializableCache: serializableCache || null
    };
}
/**
 * Construct authoptions from the client and platform passed values
 * @param authOptions
 */ function buildAuthOptions(authOptions) {
    return {
        clientCapabilities: [],
        azureCloudOptions: DEFAULT_AZURE_CLOUD_OPTIONS,
        skipAuthorityMetadataCache: false,
        ...authOptions
    };
}
/**
 * Returns true if config has protocolMode set to ProtocolMode.OIDC, false otherwise
 * @param ClientConfiguration
 */ function isOidcProtocolMode(config) {
    return config.authOptions.authority.options.protocolMode === (0, _protocolModeMjs.ProtocolMode).OIDC;
}

},{"../crypto/ICrypto.mjs":"2JOZE","../logger/Logger.mjs":"447zJ","../utils/Constants.mjs":"lFItn","../packageMetadata.mjs":"c03hI","../authority/AuthorityOptions.mjs":"kwzE9","../cache/CacheManager.mjs":"hqCRb","../authority/ProtocolMode.mjs":"1Lm0d","../error/ClientAuthError.mjs":"2qWlJ","../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2JOZE":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_CRYPTO_IMPLEMENTATION", ()=>DEFAULT_CRYPTO_IMPLEMENTATION);
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const DEFAULT_CRYPTO_IMPLEMENTATION = {
    createNewGuid: ()=>{
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    },
    base64Decode: ()=>{
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    },
    base64Encode: ()=>{
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    },
    async getPublicKeyThumbprint () {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    },
    async removeTokenBindingKey () {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    },
    async clearKeystore () {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    },
    async signJwt () {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    },
    async hashString () {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
};

},{"../error/ClientAuthError.mjs":"2qWlJ","../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qWlJ":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClientAuthErrorCodes", ()=>_clientAuthErrorCodesMjs);
parcelHelpers.export(exports, "ClientAuthError", ()=>ClientAuthError);
parcelHelpers.export(exports, "ClientAuthErrorMessage", ()=>ClientAuthErrorMessage);
parcelHelpers.export(exports, "ClientAuthErrorMessages", ()=>ClientAuthErrorMessages);
parcelHelpers.export(exports, "createClientAuthError", ()=>createClientAuthError);
var _authErrorMjs = require("./AuthError.mjs");
var _clientAuthErrorCodesMjs = require("./ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * ClientAuthErrorMessage class containing string constants used by error codes and messages.
 */ const ClientAuthErrorMessages = {
    [(0, _clientAuthErrorCodesMjs.clientInfoDecodingError)]: "The client info could not be parsed/decoded correctly",
    [(0, _clientAuthErrorCodesMjs.clientInfoEmptyError)]: "The client info was empty",
    [(0, _clientAuthErrorCodesMjs.tokenParsingError)]: "Token cannot be parsed",
    [(0, _clientAuthErrorCodesMjs.nullOrEmptyToken)]: "The token is null or empty",
    [(0, _clientAuthErrorCodesMjs.endpointResolutionError)]: "Endpoints cannot be resolved",
    [(0, _clientAuthErrorCodesMjs.networkError)]: "Network request failed",
    [(0, _clientAuthErrorCodesMjs.openIdConfigError)]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.",
    [(0, _clientAuthErrorCodesMjs.hashNotDeserialized)]: "The hash parameters could not be deserialized",
    [(0, _clientAuthErrorCodesMjs.invalidState)]: "State was not the expected format",
    [(0, _clientAuthErrorCodesMjs.stateMismatch)]: "State mismatch error",
    [(0, _clientAuthErrorCodesMjs.stateNotFound)]: "State not found",
    [(0, _clientAuthErrorCodesMjs.nonceMismatch)]: "Nonce mismatch error",
    [(0, _clientAuthErrorCodesMjs.authTimeNotFound)]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.",
    [(0, _clientAuthErrorCodesMjs.maxAgeTranspired)]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.",
    [(0, _clientAuthErrorCodesMjs.multipleMatchingTokens)]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.",
    [(0, _clientAuthErrorCodesMjs.multipleMatchingAccounts)]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account",
    [(0, _clientAuthErrorCodesMjs.multipleMatchingAppMetadata)]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata",
    [(0, _clientAuthErrorCodesMjs.requestCannotBeMade)]: "Token request cannot be made without authorization code or refresh token.",
    [(0, _clientAuthErrorCodesMjs.cannotRemoveEmptyScope)]: "Cannot remove null or empty scope from ScopeSet",
    [(0, _clientAuthErrorCodesMjs.cannotAppendScopeSet)]: "Cannot append ScopeSet",
    [(0, _clientAuthErrorCodesMjs.emptyInputScopeSet)]: "Empty input ScopeSet cannot be processed",
    [(0, _clientAuthErrorCodesMjs.deviceCodePollingCancelled)]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.",
    [(0, _clientAuthErrorCodesMjs.deviceCodeExpired)]: "Device code is expired.",
    [(0, _clientAuthErrorCodesMjs.deviceCodeUnknownError)]: "Device code stopped polling for unknown reasons.",
    [(0, _clientAuthErrorCodesMjs.noAccountInSilentRequest)]: "Please pass an account object, silent flow is not supported without account information",
    [(0, _clientAuthErrorCodesMjs.invalidCacheRecord)]: "Cache record object was null or undefined.",
    [(0, _clientAuthErrorCodesMjs.invalidCacheEnvironment)]: "Invalid environment when attempting to create cache entry",
    [(0, _clientAuthErrorCodesMjs.noAccountFound)]: "No account found in cache for given key.",
    [(0, _clientAuthErrorCodesMjs.noCryptoObject)]: "No crypto object detected.",
    [(0, _clientAuthErrorCodesMjs.unexpectedCredentialType)]: "Unexpected credential type.",
    [(0, _clientAuthErrorCodesMjs.invalidAssertion)]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515",
    [(0, _clientAuthErrorCodesMjs.invalidClientCredential)]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential",
    [(0, _clientAuthErrorCodesMjs.tokenRefreshRequired)]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.",
    [(0, _clientAuthErrorCodesMjs.userTimeoutReached)]: "User defined timeout for device code polling reached",
    [(0, _clientAuthErrorCodesMjs.tokenClaimsCnfRequiredForSignedJwt)]: "Cannot generate a POP jwt if the token_claims are not populated",
    [(0, _clientAuthErrorCodesMjs.authorizationCodeMissingFromServerResponse)]: "Server response does not contain an authorization code to proceed",
    [(0, _clientAuthErrorCodesMjs.bindingKeyNotRemoved)]: "Could not remove the credential's binding key from storage.",
    [(0, _clientAuthErrorCodesMjs.endSessionEndpointNotSupported)]: "The provided authority does not support logout",
    [(0, _clientAuthErrorCodesMjs.keyIdMissing)]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.",
    [(0, _clientAuthErrorCodesMjs.noNetworkConnectivity)]: "No network connectivity. Check your internet connection.",
    [(0, _clientAuthErrorCodesMjs.userCanceled)]: "User cancelled the flow.",
    [(0, _clientAuthErrorCodesMjs.missingTenantIdError)]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.",
    [(0, _clientAuthErrorCodesMjs.methodNotImplemented)]: "This method has not been implemented",
    [(0, _clientAuthErrorCodesMjs.nestedAppAuthBridgeDisabled)]: "The nested app auth bridge is disabled"
};
/**
 * String constants used by error codes and messages.
 * @deprecated Use ClientAuthErrorCodes instead
 */ const ClientAuthErrorMessage = {
    clientInfoDecodingError: {
        code: (0, _clientAuthErrorCodesMjs.clientInfoDecodingError),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.clientInfoDecodingError]
    },
    clientInfoEmptyError: {
        code: (0, _clientAuthErrorCodesMjs.clientInfoEmptyError),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.clientInfoEmptyError]
    },
    tokenParsingError: {
        code: (0, _clientAuthErrorCodesMjs.tokenParsingError),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.tokenParsingError]
    },
    nullOrEmptyToken: {
        code: (0, _clientAuthErrorCodesMjs.nullOrEmptyToken),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.nullOrEmptyToken]
    },
    endpointResolutionError: {
        code: (0, _clientAuthErrorCodesMjs.endpointResolutionError),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.endpointResolutionError]
    },
    networkError: {
        code: (0, _clientAuthErrorCodesMjs.networkError),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.networkError]
    },
    unableToGetOpenidConfigError: {
        code: (0, _clientAuthErrorCodesMjs.openIdConfigError),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.openIdConfigError]
    },
    hashNotDeserialized: {
        code: (0, _clientAuthErrorCodesMjs.hashNotDeserialized),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.hashNotDeserialized]
    },
    invalidStateError: {
        code: (0, _clientAuthErrorCodesMjs.invalidState),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.invalidState]
    },
    stateMismatchError: {
        code: (0, _clientAuthErrorCodesMjs.stateMismatch),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.stateMismatch]
    },
    stateNotFoundError: {
        code: (0, _clientAuthErrorCodesMjs.stateNotFound),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.stateNotFound]
    },
    nonceMismatchError: {
        code: (0, _clientAuthErrorCodesMjs.nonceMismatch),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.nonceMismatch]
    },
    authTimeNotFoundError: {
        code: (0, _clientAuthErrorCodesMjs.authTimeNotFound),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.authTimeNotFound]
    },
    maxAgeTranspired: {
        code: (0, _clientAuthErrorCodesMjs.maxAgeTranspired),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.maxAgeTranspired]
    },
    multipleMatchingTokens: {
        code: (0, _clientAuthErrorCodesMjs.multipleMatchingTokens),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.multipleMatchingTokens]
    },
    multipleMatchingAccounts: {
        code: (0, _clientAuthErrorCodesMjs.multipleMatchingAccounts),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.multipleMatchingAccounts]
    },
    multipleMatchingAppMetadata: {
        code: (0, _clientAuthErrorCodesMjs.multipleMatchingAppMetadata),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.multipleMatchingAppMetadata]
    },
    tokenRequestCannotBeMade: {
        code: (0, _clientAuthErrorCodesMjs.requestCannotBeMade),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.requestCannotBeMade]
    },
    removeEmptyScopeError: {
        code: (0, _clientAuthErrorCodesMjs.cannotRemoveEmptyScope),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.cannotRemoveEmptyScope]
    },
    appendScopeSetError: {
        code: (0, _clientAuthErrorCodesMjs.cannotAppendScopeSet),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.cannotAppendScopeSet]
    },
    emptyInputScopeSetError: {
        code: (0, _clientAuthErrorCodesMjs.emptyInputScopeSet),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.emptyInputScopeSet]
    },
    DeviceCodePollingCancelled: {
        code: (0, _clientAuthErrorCodesMjs.deviceCodePollingCancelled),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.deviceCodePollingCancelled]
    },
    DeviceCodeExpired: {
        code: (0, _clientAuthErrorCodesMjs.deviceCodeExpired),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.deviceCodeExpired]
    },
    DeviceCodeUnknownError: {
        code: (0, _clientAuthErrorCodesMjs.deviceCodeUnknownError),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.deviceCodeUnknownError]
    },
    NoAccountInSilentRequest: {
        code: (0, _clientAuthErrorCodesMjs.noAccountInSilentRequest),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.noAccountInSilentRequest]
    },
    invalidCacheRecord: {
        code: (0, _clientAuthErrorCodesMjs.invalidCacheRecord),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.invalidCacheRecord]
    },
    invalidCacheEnvironment: {
        code: (0, _clientAuthErrorCodesMjs.invalidCacheEnvironment),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.invalidCacheEnvironment]
    },
    noAccountFound: {
        code: (0, _clientAuthErrorCodesMjs.noAccountFound),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.noAccountFound]
    },
    noCryptoObj: {
        code: (0, _clientAuthErrorCodesMjs.noCryptoObject),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.noCryptoObject]
    },
    unexpectedCredentialType: {
        code: (0, _clientAuthErrorCodesMjs.unexpectedCredentialType),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.unexpectedCredentialType]
    },
    invalidAssertion: {
        code: (0, _clientAuthErrorCodesMjs.invalidAssertion),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.invalidAssertion]
    },
    invalidClientCredential: {
        code: (0, _clientAuthErrorCodesMjs.invalidClientCredential),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.invalidClientCredential]
    },
    tokenRefreshRequired: {
        code: (0, _clientAuthErrorCodesMjs.tokenRefreshRequired),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.tokenRefreshRequired]
    },
    userTimeoutReached: {
        code: (0, _clientAuthErrorCodesMjs.userTimeoutReached),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.userTimeoutReached]
    },
    tokenClaimsRequired: {
        code: (0, _clientAuthErrorCodesMjs.tokenClaimsCnfRequiredForSignedJwt),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.tokenClaimsCnfRequiredForSignedJwt]
    },
    noAuthorizationCodeFromServer: {
        code: (0, _clientAuthErrorCodesMjs.authorizationCodeMissingFromServerResponse),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.authorizationCodeMissingFromServerResponse]
    },
    bindingKeyNotRemovedError: {
        code: (0, _clientAuthErrorCodesMjs.bindingKeyNotRemoved),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.bindingKeyNotRemoved]
    },
    logoutNotSupported: {
        code: (0, _clientAuthErrorCodesMjs.endSessionEndpointNotSupported),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.endSessionEndpointNotSupported]
    },
    keyIdMissing: {
        code: (0, _clientAuthErrorCodesMjs.keyIdMissing),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.keyIdMissing]
    },
    noNetworkConnectivity: {
        code: (0, _clientAuthErrorCodesMjs.noNetworkConnectivity),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.noNetworkConnectivity]
    },
    userCanceledError: {
        code: (0, _clientAuthErrorCodesMjs.userCanceled),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.userCanceled]
    },
    missingTenantIdError: {
        code: (0, _clientAuthErrorCodesMjs.missingTenantIdError),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.missingTenantIdError]
    },
    nestedAppAuthBridgeDisabled: {
        code: (0, _clientAuthErrorCodesMjs.nestedAppAuthBridgeDisabled),
        desc: ClientAuthErrorMessages[0, _clientAuthErrorCodesMjs.nestedAppAuthBridgeDisabled]
    }
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */ class ClientAuthError extends (0, _authErrorMjs.AuthError) {
    constructor(errorCode, additionalMessage){
        super(errorCode, additionalMessage ? `${ClientAuthErrorMessages[errorCode]}: ${additionalMessage}` : ClientAuthErrorMessages[errorCode]);
        this.name = "ClientAuthError";
        Object.setPrototypeOf(this, ClientAuthError.prototype);
    }
}
function createClientAuthError(errorCode, additionalMessage) {
    return new ClientAuthError(errorCode, additionalMessage);
}

},{"./AuthError.mjs":"8tPVA","./ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tPVA":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthErrorCodes", ()=>_authErrorCodesMjs);
parcelHelpers.export(exports, "AuthError", ()=>AuthError);
parcelHelpers.export(exports, "AuthErrorMessage", ()=>AuthErrorMessage);
parcelHelpers.export(exports, "AuthErrorMessages", ()=>AuthErrorMessages);
parcelHelpers.export(exports, "createAuthError", ()=>createAuthError);
var _constantsMjs = require("../utils/Constants.mjs");
var _authErrorCodesMjs = require("./AuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const AuthErrorMessages = {
    [(0, _authErrorCodesMjs.unexpectedError)]: "Unexpected error in authentication.",
    [(0, _authErrorCodesMjs.postRequestFailed)]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
};
/**
 * AuthErrorMessage class containing string constants used by error codes and messages.
 * @deprecated Use AuthErrorCodes instead
 */ const AuthErrorMessage = {
    unexpectedError: {
        code: (0, _authErrorCodesMjs.unexpectedError),
        desc: AuthErrorMessages[0, _authErrorCodesMjs.unexpectedError]
    },
    postRequestFailed: {
        code: (0, _authErrorCodesMjs.postRequestFailed),
        desc: AuthErrorMessages[0, _authErrorCodesMjs.postRequestFailed]
    }
};
/**
 * General error class thrown by the MSAL.js library.
 */ class AuthError extends Error {
    constructor(errorCode, errorMessage, suberror){
        const errorString = errorMessage ? `${errorCode}: ${errorMessage}` : errorCode;
        super(errorString);
        Object.setPrototypeOf(this, AuthError.prototype);
        this.errorCode = errorCode || (0, _constantsMjs.Constants).EMPTY_STRING;
        this.errorMessage = errorMessage || (0, _constantsMjs.Constants).EMPTY_STRING;
        this.subError = suberror || (0, _constantsMjs.Constants).EMPTY_STRING;
        this.name = "AuthError";
    }
    setCorrelationId(correlationId) {
        this.correlationId = correlationId;
    }
}
function createAuthError(code, additionalMessage) {
    return new AuthError(code, additionalMessage ? `${AuthErrorMessages[code]} ${additionalMessage}` : AuthErrorMessages[code]);
}

},{"../utils/Constants.mjs":"lFItn","./AuthErrorCodes.mjs":"deUDm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lFItn":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AADAuthorityConstants", ()=>AADAuthorityConstants);
parcelHelpers.export(exports, "APP_METADATA", ()=>APP_METADATA);
parcelHelpers.export(exports, "AUTHORITY_METADATA_CONSTANTS", ()=>AUTHORITY_METADATA_CONSTANTS);
parcelHelpers.export(exports, "AuthenticationScheme", ()=>AuthenticationScheme);
parcelHelpers.export(exports, "AuthorityMetadataSource", ()=>AuthorityMetadataSource);
parcelHelpers.export(exports, "CLIENT_INFO", ()=>CLIENT_INFO);
parcelHelpers.export(exports, "CacheAccountType", ()=>CacheAccountType);
parcelHelpers.export(exports, "CacheOutcome", ()=>CacheOutcome);
parcelHelpers.export(exports, "CacheType", ()=>CacheType);
parcelHelpers.export(exports, "ClaimsRequestKeys", ()=>ClaimsRequestKeys);
parcelHelpers.export(exports, "CodeChallengeMethodValues", ()=>CodeChallengeMethodValues);
parcelHelpers.export(exports, "Constants", ()=>Constants);
parcelHelpers.export(exports, "CredentialType", ()=>CredentialType);
parcelHelpers.export(exports, "Errors", ()=>Errors);
parcelHelpers.export(exports, "GrantType", ()=>GrantType);
parcelHelpers.export(exports, "HeaderNames", ()=>HeaderNames);
parcelHelpers.export(exports, "HttpStatus", ()=>HttpStatus);
parcelHelpers.export(exports, "JsonWebTokenTypes", ()=>JsonWebTokenTypes);
parcelHelpers.export(exports, "OIDC_DEFAULT_SCOPES", ()=>OIDC_DEFAULT_SCOPES);
parcelHelpers.export(exports, "OIDC_SCOPES", ()=>OIDC_SCOPES);
parcelHelpers.export(exports, "ONE_DAY_IN_MS", ()=>ONE_DAY_IN_MS);
parcelHelpers.export(exports, "PasswordGrantConstants", ()=>PasswordGrantConstants);
parcelHelpers.export(exports, "PersistentCacheKeys", ()=>PersistentCacheKeys);
parcelHelpers.export(exports, "PromptValue", ()=>PromptValue);
parcelHelpers.export(exports, "RegionDiscoveryOutcomes", ()=>RegionDiscoveryOutcomes);
parcelHelpers.export(exports, "RegionDiscoverySources", ()=>RegionDiscoverySources);
parcelHelpers.export(exports, "ResponseCodes", ()=>ResponseCodes);
parcelHelpers.export(exports, "ResponseMode", ()=>ResponseMode);
parcelHelpers.export(exports, "SERVER_TELEM_CONSTANTS", ()=>SERVER_TELEM_CONSTANTS);
parcelHelpers.export(exports, "Separators", ()=>Separators);
parcelHelpers.export(exports, "ServerResponseType", ()=>ServerResponseType);
parcelHelpers.export(exports, "THE_FAMILY_ID", ()=>THE_FAMILY_ID);
parcelHelpers.export(exports, "ThrottlingConstants", ()=>ThrottlingConstants);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const Constants = {
    LIBRARY_NAME: "MSAL.JS",
    SKU: "msal.js.common",
    // Prefix for all library cache entries
    CACHE_PREFIX: "msal",
    // default authority
    DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
    DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
    DEFAULT_COMMON_TENANT: "common",
    // ADFS String
    ADFS: "adfs",
    DSTS: "dstsv2",
    // Default AAD Instance Discovery Endpoint
    AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
    // CIAM URL
    CIAM_AUTH_URL: ".ciamlogin.com",
    AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com",
    // Resource delimiter - used for certain cache entries
    RESOURCE_DELIM: "|",
    // Placeholder for non-existent account ids/objects
    NO_ACCOUNT: "NO_ACCOUNT",
    // Claims
    CLAIMS: "claims",
    // Consumer UTID
    CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
    // Default scopes
    OPENID_SCOPE: "openid",
    PROFILE_SCOPE: "profile",
    OFFLINE_ACCESS_SCOPE: "offline_access",
    EMAIL_SCOPE: "email",
    // Default response type for authorization code flow
    CODE_RESPONSE_TYPE: "code",
    CODE_GRANT_TYPE: "authorization_code",
    RT_GRANT_TYPE: "refresh_token",
    FRAGMENT_RESPONSE_MODE: "fragment",
    S256_CODE_CHALLENGE_METHOD: "S256",
    URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
    AUTHORIZATION_PENDING: "authorization_pending",
    NOT_DEFINED: "not_defined",
    EMPTY_STRING: "",
    NOT_APPLICABLE: "N/A",
    FORWARD_SLASH: "/",
    IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
    IMDS_VERSION: "2020-06-01",
    IMDS_TIMEOUT: 2000,
    AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
    REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
    KNOWN_PUBLIC_CLOUDS: [
        "login.microsoftonline.com",
        "login.windows.net",
        "login.microsoft.com",
        "sts.windows.net"
    ],
    TOKEN_RESPONSE_TYPE: "token",
    ID_TOKEN_RESPONSE_TYPE: "id_token",
    SHR_NONCE_VALIDITY: 240,
    INVALID_INSTANCE: "invalid_instance"
};
const HttpStatus = {
    SUCCESS_RANGE_START: 200,
    SUCCESS_RANGE_END: 299,
    REDIRECT: 302,
    CLIENT_ERROR_RANGE_START: 400,
    CLIENT_ERROR_RANGE_END: 499,
    SERVER_ERROR_RANGE_START: 500,
    SERVER_ERROR_RANGE_END: 599
};
const OIDC_DEFAULT_SCOPES = [
    Constants.OPENID_SCOPE,
    Constants.PROFILE_SCOPE,
    Constants.OFFLINE_ACCESS_SCOPE
];
const OIDC_SCOPES = [
    ...OIDC_DEFAULT_SCOPES,
    Constants.EMAIL_SCOPE
];
/**
 * Request header names
 */ const HeaderNames = {
    CONTENT_TYPE: "Content-Type",
    RETRY_AFTER: "Retry-After",
    CCS_HEADER: "X-AnchorMailbox",
    WWWAuthenticate: "WWW-Authenticate",
    AuthenticationInfo: "Authentication-Info",
    X_MS_REQUEST_ID: "x-ms-request-id",
    X_MS_HTTP_VERSION: "x-ms-httpver"
};
/**
 * Persistent cache keys MSAL which stay while user is logged in.
 */ const PersistentCacheKeys = {
    ID_TOKEN: "idtoken",
    CLIENT_INFO: "client.info",
    ADAL_ID_TOKEN: "adal.idtoken",
    ERROR: "error",
    ERROR_DESC: "error.description",
    ACTIVE_ACCOUNT: "active-account",
    ACTIVE_ACCOUNT_FILTERS: "active-account-filters"
};
/**
 * String constants related to AAD Authority
 */ const AADAuthorityConstants = {
    COMMON: "common",
    ORGANIZATIONS: "organizations",
    CONSUMERS: "consumers"
};
/**
 * Claims request keys
 */ const ClaimsRequestKeys = {
    ACCESS_TOKEN: "access_token",
    XMS_CC: "xms_cc"
};
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 */ const PromptValue = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
    CREATE: "create",
    NO_SESSION: "no_session"
};
/**
 * allowed values for codeVerifier
 */ const CodeChallengeMethodValues = {
    PLAIN: "plain",
    S256: "S256"
};
/**
 * allowed values for server response type
 */ const ServerResponseType = {
    QUERY: "query",
    FRAGMENT: "fragment"
};
/**
 * allowed values for response_mode
 */ const ResponseMode = {
    ...ServerResponseType,
    FORM_POST: "form_post"
};
/**
 * allowed grant_type
 */ const GrantType = {
    IMPLICIT_GRANT: "implicit",
    AUTHORIZATION_CODE_GRANT: "authorization_code",
    CLIENT_CREDENTIALS_GRANT: "client_credentials",
    RESOURCE_OWNER_PASSWORD_GRANT: "password",
    REFRESH_TOKEN_GRANT: "refresh_token",
    DEVICE_CODE_GRANT: "device_code",
    JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer"
};
/**
 * Account types in Cache
 */ const CacheAccountType = {
    MSSTS_ACCOUNT_TYPE: "MSSTS",
    ADFS_ACCOUNT_TYPE: "ADFS",
    MSAV1_ACCOUNT_TYPE: "MSA",
    GENERIC_ACCOUNT_TYPE: "Generic"
};
/**
 * Separators used in cache
 */ const Separators = {
    CACHE_KEY_SEPARATOR: "-",
    CLIENT_INFO_SEPARATOR: "."
};
/**
 * Credential Type stored in the cache
 */ const CredentialType = {
    ID_TOKEN: "IdToken",
    ACCESS_TOKEN: "AccessToken",
    ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme",
    REFRESH_TOKEN: "RefreshToken"
};
/**
 * Combine all cache types
 */ const CacheType = {
    ADFS: 1001,
    MSA: 1002,
    MSSTS: 1003,
    GENERIC: 1004,
    ACCESS_TOKEN: 2001,
    REFRESH_TOKEN: 2002,
    ID_TOKEN: 2003,
    APP_METADATA: 3001,
    UNDEFINED: 9999
};
/**
 * More Cache related constants
 */ const APP_METADATA = "appmetadata";
const CLIENT_INFO = "client_info";
const THE_FAMILY_ID = "1";
const AUTHORITY_METADATA_CONSTANTS = {
    CACHE_KEY: "authority-metadata",
    REFRESH_TIME_SECONDS: 86400
};
const AuthorityMetadataSource = {
    CONFIG: "config",
    CACHE: "cache",
    NETWORK: "network",
    HARDCODED_VALUES: "hardcoded_values"
};
const SERVER_TELEM_CONSTANTS = {
    SCHEMA_VERSION: 5,
    MAX_CUR_HEADER_BYTES: 80,
    MAX_LAST_HEADER_BYTES: 330,
    MAX_CACHED_ERRORS: 50,
    CACHE_KEY: "server-telemetry",
    CATEGORY_SEPARATOR: "|",
    VALUE_SEPARATOR: ",",
    OVERFLOW_TRUE: "1",
    OVERFLOW_FALSE: "0",
    UNKNOWN_ERROR: "unknown_error"
};
/**
 * Type of the authentication request
 */ const AuthenticationScheme = {
    BEARER: "Bearer",
    POP: "pop",
    SSH: "ssh-cert"
};
/**
 * Constants related to throttling
 */ const ThrottlingConstants = {
    // Default time to throttle RequestThumbprint in seconds
    DEFAULT_THROTTLE_TIME_SECONDS: 60,
    // Default maximum time to throttle in seconds, overrides what the server sends back
    DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
    // Prefix for storing throttling entries
    THROTTLING_PREFIX: "throttling",
    // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
    X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
};
const Errors = {
    INVALID_GRANT_ERROR: "invalid_grant",
    CLIENT_MISMATCH_ERROR: "client_mismatch"
};
/**
 * Password grant parameters
 */ const PasswordGrantConstants = {
    username: "username",
    password: "password"
};
/**
 * Response codes
 */ const ResponseCodes = {
    httpSuccess: 200,
    httpBadRequest: 400
};
/**
 * Region Discovery Sources
 */ const RegionDiscoverySources = {
    FAILED_AUTO_DETECTION: "1",
    INTERNAL_CACHE: "2",
    ENVIRONMENT_VARIABLE: "3",
    IMDS: "4"
};
/**
 * Region Discovery Outcomes
 */ const RegionDiscoveryOutcomes = {
    CONFIGURED_MATCHES_DETECTED: "1",
    CONFIGURED_NO_AUTO_DETECTION: "2",
    CONFIGURED_NOT_DETECTED: "3",
    AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4",
    AUTO_DETECTION_REQUESTED_FAILED: "5"
};
/**
 * Specifies the reason for fetching the access token from the identity provider
 */ const CacheOutcome = {
    // When a token is found in the cache or the cache is not supposed to be hit when making the request
    NOT_APPLICABLE: "0",
    // When the token request goes to the identity provider because force_refresh was set to true. Also occurs if claims were requested
    FORCE_REFRESH_OR_CLAIMS: "1",
    // When the token request goes to the identity provider because no cached access token exists
    NO_CACHED_ACCESS_TOKEN: "2",
    // When the token request goes to the identity provider because cached access token expired
    CACHED_ACCESS_TOKEN_EXPIRED: "3",
    // When the token request goes to the identity provider because refresh_in was used and the existing token needs to be refreshed
    PROACTIVELY_REFRESHED: "4"
};
const JsonWebTokenTypes = {
    Jwt: "JWT",
    Jwk: "JWK",
    Pop: "pop"
};
const ONE_DAY_IN_MS = 86400000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"deUDm":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "postRequestFailed", ()=>postRequestFailed);
parcelHelpers.export(exports, "unexpectedError", ()=>unexpectedError);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * AuthErrorMessage class containing string constants used by error codes and messages.
 */ const unexpectedError = "unexpected_error";
const postRequestFailed = "post_request_failed";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fhXae":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "authTimeNotFound", ()=>authTimeNotFound);
parcelHelpers.export(exports, "authorizationCodeMissingFromServerResponse", ()=>authorizationCodeMissingFromServerResponse);
parcelHelpers.export(exports, "bindingKeyNotRemoved", ()=>bindingKeyNotRemoved);
parcelHelpers.export(exports, "cannotAppendScopeSet", ()=>cannotAppendScopeSet);
parcelHelpers.export(exports, "cannotRemoveEmptyScope", ()=>cannotRemoveEmptyScope);
parcelHelpers.export(exports, "clientInfoDecodingError", ()=>clientInfoDecodingError);
parcelHelpers.export(exports, "clientInfoEmptyError", ()=>clientInfoEmptyError);
parcelHelpers.export(exports, "deviceCodeExpired", ()=>deviceCodeExpired);
parcelHelpers.export(exports, "deviceCodePollingCancelled", ()=>deviceCodePollingCancelled);
parcelHelpers.export(exports, "deviceCodeUnknownError", ()=>deviceCodeUnknownError);
parcelHelpers.export(exports, "emptyInputScopeSet", ()=>emptyInputScopeSet);
parcelHelpers.export(exports, "endSessionEndpointNotSupported", ()=>endSessionEndpointNotSupported);
parcelHelpers.export(exports, "endpointResolutionError", ()=>endpointResolutionError);
parcelHelpers.export(exports, "hashNotDeserialized", ()=>hashNotDeserialized);
parcelHelpers.export(exports, "invalidAssertion", ()=>invalidAssertion);
parcelHelpers.export(exports, "invalidCacheEnvironment", ()=>invalidCacheEnvironment);
parcelHelpers.export(exports, "invalidCacheRecord", ()=>invalidCacheRecord);
parcelHelpers.export(exports, "invalidClientCredential", ()=>invalidClientCredential);
parcelHelpers.export(exports, "invalidState", ()=>invalidState);
parcelHelpers.export(exports, "keyIdMissing", ()=>keyIdMissing);
parcelHelpers.export(exports, "maxAgeTranspired", ()=>maxAgeTranspired);
parcelHelpers.export(exports, "methodNotImplemented", ()=>methodNotImplemented);
parcelHelpers.export(exports, "missingTenantIdError", ()=>missingTenantIdError);
parcelHelpers.export(exports, "multipleMatchingAccounts", ()=>multipleMatchingAccounts);
parcelHelpers.export(exports, "multipleMatchingAppMetadata", ()=>multipleMatchingAppMetadata);
parcelHelpers.export(exports, "multipleMatchingTokens", ()=>multipleMatchingTokens);
parcelHelpers.export(exports, "nestedAppAuthBridgeDisabled", ()=>nestedAppAuthBridgeDisabled);
parcelHelpers.export(exports, "networkError", ()=>networkError);
parcelHelpers.export(exports, "noAccountFound", ()=>noAccountFound);
parcelHelpers.export(exports, "noAccountInSilentRequest", ()=>noAccountInSilentRequest);
parcelHelpers.export(exports, "noCryptoObject", ()=>noCryptoObject);
parcelHelpers.export(exports, "noNetworkConnectivity", ()=>noNetworkConnectivity);
parcelHelpers.export(exports, "nonceMismatch", ()=>nonceMismatch);
parcelHelpers.export(exports, "nullOrEmptyToken", ()=>nullOrEmptyToken);
parcelHelpers.export(exports, "openIdConfigError", ()=>openIdConfigError);
parcelHelpers.export(exports, "requestCannotBeMade", ()=>requestCannotBeMade);
parcelHelpers.export(exports, "stateMismatch", ()=>stateMismatch);
parcelHelpers.export(exports, "stateNotFound", ()=>stateNotFound);
parcelHelpers.export(exports, "tokenClaimsCnfRequiredForSignedJwt", ()=>tokenClaimsCnfRequiredForSignedJwt);
parcelHelpers.export(exports, "tokenParsingError", ()=>tokenParsingError);
parcelHelpers.export(exports, "tokenRefreshRequired", ()=>tokenRefreshRequired);
parcelHelpers.export(exports, "unexpectedCredentialType", ()=>unexpectedCredentialType);
parcelHelpers.export(exports, "userCanceled", ()=>userCanceled);
parcelHelpers.export(exports, "userTimeoutReached", ()=>userTimeoutReached);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const clientInfoDecodingError = "client_info_decoding_error";
const clientInfoEmptyError = "client_info_empty_error";
const tokenParsingError = "token_parsing_error";
const nullOrEmptyToken = "null_or_empty_token";
const endpointResolutionError = "endpoints_resolution_error";
const networkError = "network_error";
const openIdConfigError = "openid_config_error";
const hashNotDeserialized = "hash_not_deserialized";
const invalidState = "invalid_state";
const stateMismatch = "state_mismatch";
const stateNotFound = "state_not_found";
const nonceMismatch = "nonce_mismatch";
const authTimeNotFound = "auth_time_not_found";
const maxAgeTranspired = "max_age_transpired";
const multipleMatchingTokens = "multiple_matching_tokens";
const multipleMatchingAccounts = "multiple_matching_accounts";
const multipleMatchingAppMetadata = "multiple_matching_appMetadata";
const requestCannotBeMade = "request_cannot_be_made";
const cannotRemoveEmptyScope = "cannot_remove_empty_scope";
const cannotAppendScopeSet = "cannot_append_scopeset";
const emptyInputScopeSet = "empty_input_scopeset";
const deviceCodePollingCancelled = "device_code_polling_cancelled";
const deviceCodeExpired = "device_code_expired";
const deviceCodeUnknownError = "device_code_unknown_error";
const noAccountInSilentRequest = "no_account_in_silent_request";
const invalidCacheRecord = "invalid_cache_record";
const invalidCacheEnvironment = "invalid_cache_environment";
const noAccountFound = "no_account_found";
const noCryptoObject = "no_crypto_object";
const unexpectedCredentialType = "unexpected_credential_type";
const invalidAssertion = "invalid_assertion";
const invalidClientCredential = "invalid_client_credential";
const tokenRefreshRequired = "token_refresh_required";
const userTimeoutReached = "user_timeout_reached";
const tokenClaimsCnfRequiredForSignedJwt = "token_claims_cnf_required_for_signedjwt";
const authorizationCodeMissingFromServerResponse = "authorization_code_missing_from_server_response";
const bindingKeyNotRemoved = "binding_key_not_removed";
const endSessionEndpointNotSupported = "end_session_endpoint_not_supported";
const keyIdMissing = "key_id_missing";
const noNetworkConnectivity = "no_network_connectivity";
const userCanceled = "user_canceled";
const missingTenantIdError = "missing_tenant_id_error";
const methodNotImplemented = "method_not_implemented";
const nestedAppAuthBridgeDisabled = "nested_app_auth_bridge_disabled";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"447zJ":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogLevel", ()=>LogLevel);
parcelHelpers.export(exports, "Logger", ()=>Logger);
var _constantsMjs = require("../utils/Constants.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Log message level.
 */ var LogLevel;
(function(LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
    LogLevel[LogLevel["Trace"] = 4] = "Trace";
})(LogLevel || (LogLevel = {}));
/**
 * Class which facilitates logging of messages to a specific place.
 */ class Logger {
    constructor(loggerOptions, packageName, packageVersion){
        // Current log level, defaults to info.
        this.level = LogLevel.Info;
        const defaultLoggerCallback = ()=>{
            return;
        };
        const setLoggerOptions = loggerOptions || Logger.createDefaultLoggerOptions();
        this.localCallback = setLoggerOptions.loggerCallback || defaultLoggerCallback;
        this.piiLoggingEnabled = setLoggerOptions.piiLoggingEnabled || false;
        this.level = typeof setLoggerOptions.logLevel === "number" ? setLoggerOptions.logLevel : LogLevel.Info;
        this.correlationId = setLoggerOptions.correlationId || (0, _constantsMjs.Constants).EMPTY_STRING;
        this.packageName = packageName || (0, _constantsMjs.Constants).EMPTY_STRING;
        this.packageVersion = packageVersion || (0, _constantsMjs.Constants).EMPTY_STRING;
    }
    static createDefaultLoggerOptions() {
        return {
            loggerCallback: ()=>{
            // allow users to not set loggerCallback
            },
            piiLoggingEnabled: false,
            logLevel: LogLevel.Info
        };
    }
    /**
     * Create new Logger with existing configurations.
     */ clone(packageName, packageVersion, correlationId) {
        return new Logger({
            loggerCallback: this.localCallback,
            piiLoggingEnabled: this.piiLoggingEnabled,
            logLevel: this.level,
            correlationId: correlationId || this.correlationId
        }, packageName, packageVersion);
    }
    /**
     * Log message with required options.
     */ logMessage(logMessage, options) {
        if (options.logLevel > this.level || !this.piiLoggingEnabled && options.containsPii) return;
        const timestamp = new Date().toUTCString();
        // Add correlationId to logs if set, correlationId provided on log messages take precedence
        const logHeader = `[${timestamp}] : [${options.correlationId || this.correlationId || ""}]`;
        const log = `${logHeader} : ${this.packageName}@${this.packageVersion} : ${LogLevel[options.logLevel]} - ${logMessage}`;
        // debug(`msal:${LogLevel[options.logLevel]}${options.containsPii ? "-Pii": Constants.EMPTY_STRING}${options.context ? `:${options.context}` : Constants.EMPTY_STRING}`)(logMessage);
        this.executeCallback(options.logLevel, log, options.containsPii || false);
    }
    /**
     * Execute callback with message.
     */ executeCallback(level, message, containsPii) {
        if (this.localCallback) this.localCallback(level, message, containsPii);
    }
    /**
     * Logs error messages.
     */ error(message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Error,
            containsPii: false,
            correlationId: correlationId || (0, _constantsMjs.Constants).EMPTY_STRING
        });
    }
    /**
     * Logs error messages with PII.
     */ errorPii(message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Error,
            containsPii: true,
            correlationId: correlationId || (0, _constantsMjs.Constants).EMPTY_STRING
        });
    }
    /**
     * Logs warning messages.
     */ warning(message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Warning,
            containsPii: false,
            correlationId: correlationId || (0, _constantsMjs.Constants).EMPTY_STRING
        });
    }
    /**
     * Logs warning messages with PII.
     */ warningPii(message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Warning,
            containsPii: true,
            correlationId: correlationId || (0, _constantsMjs.Constants).EMPTY_STRING
        });
    }
    /**
     * Logs info messages.
     */ info(message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Info,
            containsPii: false,
            correlationId: correlationId || (0, _constantsMjs.Constants).EMPTY_STRING
        });
    }
    /**
     * Logs info messages with PII.
     */ infoPii(message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Info,
            containsPii: true,
            correlationId: correlationId || (0, _constantsMjs.Constants).EMPTY_STRING
        });
    }
    /**
     * Logs verbose messages.
     */ verbose(message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Verbose,
            containsPii: false,
            correlationId: correlationId || (0, _constantsMjs.Constants).EMPTY_STRING
        });
    }
    /**
     * Logs verbose messages with PII.
     */ verbosePii(message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Verbose,
            containsPii: true,
            correlationId: correlationId || (0, _constantsMjs.Constants).EMPTY_STRING
        });
    }
    /**
     * Logs trace messages.
     */ trace(message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Trace,
            containsPii: false,
            correlationId: correlationId || (0, _constantsMjs.Constants).EMPTY_STRING
        });
    }
    /**
     * Logs trace messages with PII.
     */ tracePii(message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Trace,
            containsPii: true,
            correlationId: correlationId || (0, _constantsMjs.Constants).EMPTY_STRING
        });
    }
    /**
     * Returns whether PII Logging is enabled or not.
     */ isPiiLoggingEnabled() {
        return this.piiLoggingEnabled || false;
    }
}

},{"../utils/Constants.mjs":"lFItn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c03hI":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "name", ()=>name);
parcelHelpers.export(exports, "version", ()=>version);
"use strict";
/* eslint-disable header/header */ const name = "@azure/msal-common";
const version = "14.7.1";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwzE9":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AzureCloudInstance", ()=>AzureCloudInstance);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const AzureCloudInstance = {
    // AzureCloudInstance is not specified.
    None: "none",
    // Microsoft Azure public cloud
    AzurePublic: "https://login.microsoftonline.com",
    // Microsoft PPE
    AzurePpe: "https://login.windows-ppe.net",
    // Microsoft Chinese national/regional cloud
    AzureChina: "https://login.chinacloudapi.cn",
    // Microsoft German national/regional cloud ("Black Forest")
    AzureGermany: "https://login.microsoftonline.de",
    // US Government cloud
    AzureUsGovernment: "https://login.microsoftonline.us"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hqCRb":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CacheManager", ()=>CacheManager);
parcelHelpers.export(exports, "DefaultStorageClass", ()=>DefaultStorageClass);
var _constantsMjs = require("../utils/Constants.mjs");
var _cacheHelpersMjs = require("./utils/CacheHelpers.mjs");
var _scopeSetMjs = require("../request/ScopeSet.mjs");
var _accountEntityMjs = require("./entities/AccountEntity.mjs");
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _accountInfoMjs = require("../account/AccountInfo.mjs");
var _authTokenMjs = require("../account/AuthToken.mjs");
var _packageMetadataMjs = require("../packageMetadata.mjs");
var _authorityMetadataMjs = require("../authority/AuthorityMetadata.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Interface class which implement cache storage functions used by MSAL to perform validity checks, and store tokens.
 * @internal
 */ class CacheManager {
    constructor(clientId, cryptoImpl, logger, staticAuthorityOptions){
        this.clientId = clientId;
        this.cryptoImpl = cryptoImpl;
        this.commonLogger = logger.clone((0, _packageMetadataMjs.name), (0, _packageMetadataMjs.version));
        this.staticAuthorityOptions = staticAuthorityOptions;
    }
    /**
     * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
     * @param accountFilter - (Optional) filter to narrow down the accounts returned
     * @returns Array of AccountInfo objects in cache
     */ getAllAccounts(accountFilter) {
        return this.buildTenantProfiles(this.getAccountsFilteredBy(accountFilter || {}), accountFilter);
    }
    /**
     * Gets first tenanted AccountInfo object found based on provided filters
     */ getAccountInfoFilteredBy(accountFilter) {
        const allAccounts = this.getAllAccounts(accountFilter);
        if (allAccounts.length > 1) {
            // If one or more accounts are found, prioritize accounts that have an ID token
            const sortedAccounts = allAccounts.sort((account)=>{
                return account.idTokenClaims ? -1 : 1;
            });
            return sortedAccounts[0];
        } else if (allAccounts.length === 1) // If only one account is found, return it regardless of whether a matching ID token was found
        return allAccounts[0];
        else return null;
    }
    /**
     * Returns a single matching
     * @param accountFilter
     * @returns
     */ getBaseAccountInfo(accountFilter) {
        const accountEntities = this.getAccountsFilteredBy(accountFilter);
        if (accountEntities.length > 0) return accountEntities[0].getAccountInfo();
        else return null;
    }
    /**
     * Matches filtered account entities with cached ID tokens that match the tenant profile-specific account filters
     * and builds the account info objects from the matching ID token's claims
     * @param cachedAccounts
     * @param accountFilter
     * @returns Array of AccountInfo objects that match account and tenant profile filters
     */ buildTenantProfiles(cachedAccounts, accountFilter) {
        return cachedAccounts.flatMap((accountEntity)=>{
            return this.getAccountInfoForTenantProfiles(accountEntity, accountFilter);
        });
    }
    getAccountInfoForTenantProfiles(accountEntity, accountFilter) {
        return this.getTenantProfilesFromAccountEntity(accountEntity, accountFilter?.tenantId, accountFilter);
    }
    getTenantedAccountInfoByFilter(accountInfo, tokenKeys, tenantProfile, tenantProfileFilter) {
        let tenantedAccountInfo = null;
        let idTokenClaims;
        if (tenantProfileFilter) {
            if (!this.tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter)) return null;
        }
        const idToken = this.getIdToken(accountInfo, tokenKeys, tenantProfile.tenantId);
        if (idToken) {
            idTokenClaims = (0, _authTokenMjs.extractTokenClaims)(idToken.secret, this.cryptoImpl.base64Decode);
            if (!this.idTokenClaimsMatchTenantProfileFilter(idTokenClaims, tenantProfileFilter)) // ID token sourced claims don't match so this tenant profile is not a match
            return null;
        }
        // Expand tenant profile into account info based on matching tenant profile and if available matching ID token claims
        tenantedAccountInfo = (0, _accountInfoMjs.updateAccountTenantProfileData)(accountInfo, tenantProfile, idTokenClaims, idToken?.secret);
        return tenantedAccountInfo;
    }
    getTenantProfilesFromAccountEntity(accountEntity, targetTenantId, tenantProfileFilter) {
        const accountInfo = accountEntity.getAccountInfo();
        let searchTenantProfiles = accountInfo.tenantProfiles || new Map();
        const tokenKeys = this.getTokenKeys();
        // If a tenant ID was provided, only return the tenant profile for that tenant ID if it exists
        if (targetTenantId) {
            const tenantProfile = searchTenantProfiles.get(targetTenantId);
            if (tenantProfile) // Reduce search field to just this tenant profile
            searchTenantProfiles = new Map([
                [
                    targetTenantId,
                    tenantProfile
                ]
            ]);
            else // No tenant profile for search tenant ID, return empty array
            return [];
        }
        const matchingTenantProfiles = [];
        searchTenantProfiles.forEach((tenantProfile)=>{
            const tenantedAccountInfo = this.getTenantedAccountInfoByFilter(accountInfo, tokenKeys, tenantProfile, tenantProfileFilter);
            if (tenantedAccountInfo) matchingTenantProfiles.push(tenantedAccountInfo);
        });
        return matchingTenantProfiles;
    }
    tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter) {
        if (!!tenantProfileFilter.localAccountId && !this.matchLocalAccountIdFromTenantProfile(tenantProfile, tenantProfileFilter.localAccountId)) return false;
        if (!!tenantProfileFilter.name && !(tenantProfile.name === tenantProfileFilter.name)) return false;
        if (tenantProfileFilter.isHomeTenant !== undefined && !(tenantProfile.isHomeTenant === tenantProfileFilter.isHomeTenant)) return false;
        return true;
    }
    idTokenClaimsMatchTenantProfileFilter(idTokenClaims, tenantProfileFilter) {
        // Tenant Profile filtering
        if (tenantProfileFilter) {
            if (!!tenantProfileFilter.localAccountId && !this.matchLocalAccountIdFromTokenClaims(idTokenClaims, tenantProfileFilter.localAccountId)) return false;
            if (!!tenantProfileFilter.loginHint && !this.matchLoginHintFromTokenClaims(idTokenClaims, tenantProfileFilter.loginHint)) return false;
            if (!!tenantProfileFilter.username && !this.matchUsername(idTokenClaims.preferred_username, tenantProfileFilter.username)) return false;
            if (!!tenantProfileFilter.name && !this.matchName(idTokenClaims, tenantProfileFilter.name)) return false;
            if (!!tenantProfileFilter.sid && !this.matchSid(idTokenClaims, tenantProfileFilter.sid)) return false;
        }
        return true;
    }
    /**
     * saves a cache record
     * @param cacheRecord
     */ async saveCacheRecord(cacheRecord, storeInCache) {
        if (!cacheRecord) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.invalidCacheRecord));
        if (!!cacheRecord.account) this.setAccount(cacheRecord.account);
        if (!!cacheRecord.idToken && storeInCache?.idToken !== false) this.setIdTokenCredential(cacheRecord.idToken);
        if (!!cacheRecord.accessToken && storeInCache?.accessToken !== false) await this.saveAccessToken(cacheRecord.accessToken);
        if (!!cacheRecord.refreshToken && storeInCache?.refreshToken !== false) this.setRefreshTokenCredential(cacheRecord.refreshToken);
        if (!!cacheRecord.appMetadata) this.setAppMetadata(cacheRecord.appMetadata);
    }
    /**
     * saves access token credential
     * @param credential
     */ async saveAccessToken(credential) {
        const accessTokenFilter = {
            clientId: credential.clientId,
            credentialType: credential.credentialType,
            environment: credential.environment,
            homeAccountId: credential.homeAccountId,
            realm: credential.realm,
            tokenType: credential.tokenType,
            requestedClaimsHash: credential.requestedClaimsHash
        };
        const tokenKeys = this.getTokenKeys();
        const currentScopes = (0, _scopeSetMjs.ScopeSet).fromString(credential.target);
        const removedAccessTokens = [];
        tokenKeys.accessToken.forEach((key)=>{
            if (!this.accessTokenKeyMatchesFilter(key, accessTokenFilter, false)) return;
            const tokenEntity = this.getAccessTokenCredential(key);
            if (tokenEntity && this.credentialMatchesFilter(tokenEntity, accessTokenFilter)) {
                const tokenScopeSet = (0, _scopeSetMjs.ScopeSet).fromString(tokenEntity.target);
                if (tokenScopeSet.intersectingScopeSets(currentScopes)) removedAccessTokens.push(this.removeAccessToken(key));
            }
        });
        await Promise.all(removedAccessTokens);
        this.setAccessTokenCredential(credential);
    }
    /**
     * Retrieve account entities matching all provided tenant-agnostic filters; if no filter is set, get all account entities in the cache
     * Not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
     * @param accountFilter - An object containing Account properties to filter by
     */ getAccountsFilteredBy(accountFilter) {
        const allAccountKeys = this.getAccountKeys();
        const matchingAccounts = [];
        allAccountKeys.forEach((cacheKey)=>{
            if (!this.isAccountKey(cacheKey, accountFilter.homeAccountId)) // Don't parse value if the key doesn't match the account filters
            return;
            const entity = this.getAccount(cacheKey, this.commonLogger);
            // Match base account fields
            if (!entity) return;
            if (!!accountFilter.homeAccountId && !this.matchHomeAccountId(entity, accountFilter.homeAccountId)) return;
            if (!!accountFilter.username && !this.matchUsername(entity.username, accountFilter.username)) return;
            if (!!accountFilter.environment && !this.matchEnvironment(entity, accountFilter.environment)) return;
            if (!!accountFilter.realm && !this.matchRealm(entity, accountFilter.realm)) return;
            if (!!accountFilter.nativeAccountId && !this.matchNativeAccountId(entity, accountFilter.nativeAccountId)) return;
            if (!!accountFilter.authorityType && !this.matchAuthorityType(entity, accountFilter.authorityType)) return;
            // If at least one tenant profile matches the tenant profile filter, add the account to the list of matching accounts
            const tenantProfileFilter = {
                localAccountId: accountFilter?.localAccountId,
                name: accountFilter?.name
            };
            const matchingTenantProfiles = entity.tenantProfiles?.filter((tenantProfile)=>{
                return this.tenantProfileMatchesFilter(tenantProfile, tenantProfileFilter);
            });
            if (matchingTenantProfiles && matchingTenantProfiles.length === 0) // No tenant profile for this account matches filter, don't add to list of matching accounts
            return;
            matchingAccounts.push(entity);
        });
        return matchingAccounts;
    }
    /**
     * Returns true if the given key matches our account key schema. Also matches homeAccountId and/or tenantId if provided
     * @param key
     * @param homeAccountId
     * @param tenantId
     * @returns
     */ isAccountKey(key, homeAccountId, tenantId) {
        if (key.split((0, _constantsMjs.Separators).CACHE_KEY_SEPARATOR).length < 3) // Account cache keys contain 3 items separated by '-' (each item may also contain '-')
        return false;
        if (homeAccountId && !key.toLowerCase().includes(homeAccountId.toLowerCase())) return false;
        if (tenantId && !key.toLowerCase().includes(tenantId.toLowerCase())) return false;
        // Do not check environment as aliasing can cause false negatives
        return true;
    }
    /**
     * Returns true if the given key matches our credential key schema.
     * @param key
     */ isCredentialKey(key) {
        if (key.split((0, _constantsMjs.Separators).CACHE_KEY_SEPARATOR).length < 6) // Credential cache keys contain 6 items separated by '-' (each item may also contain '-')
        return false;
        const lowerCaseKey = key.toLowerCase();
        // Credential keys must indicate what credential type they represent
        if (lowerCaseKey.indexOf((0, _constantsMjs.CredentialType).ID_TOKEN.toLowerCase()) === -1 && lowerCaseKey.indexOf((0, _constantsMjs.CredentialType).ACCESS_TOKEN.toLowerCase()) === -1 && lowerCaseKey.indexOf((0, _constantsMjs.CredentialType).ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 && lowerCaseKey.indexOf((0, _constantsMjs.CredentialType).REFRESH_TOKEN.toLowerCase()) === -1) return false;
        if (lowerCaseKey.indexOf((0, _constantsMjs.CredentialType).REFRESH_TOKEN.toLowerCase()) > -1) {
            // Refresh tokens must contain the client id or family id
            const clientIdValidation = `${(0, _constantsMjs.CredentialType).REFRESH_TOKEN}${(0, _constantsMjs.Separators).CACHE_KEY_SEPARATOR}${this.clientId}${(0, _constantsMjs.Separators).CACHE_KEY_SEPARATOR}`;
            const familyIdValidation = `${(0, _constantsMjs.CredentialType).REFRESH_TOKEN}${(0, _constantsMjs.Separators).CACHE_KEY_SEPARATOR}${(0, _constantsMjs.THE_FAMILY_ID)}${(0, _constantsMjs.Separators).CACHE_KEY_SEPARATOR}`;
            if (lowerCaseKey.indexOf(clientIdValidation.toLowerCase()) === -1 && lowerCaseKey.indexOf(familyIdValidation.toLowerCase()) === -1) return false;
        } else if (lowerCaseKey.indexOf(this.clientId.toLowerCase()) === -1) // Tokens must contain the clientId
        return false;
        return true;
    }
    /**
     * Returns whether or not the given credential entity matches the filter
     * @param entity
     * @param filter
     * @returns
     */ credentialMatchesFilter(entity, filter) {
        if (!!filter.clientId && !this.matchClientId(entity, filter.clientId)) return false;
        if (!!filter.userAssertionHash && !this.matchUserAssertionHash(entity, filter.userAssertionHash)) return false;
        /*
         * homeAccountId can be undefined, and we want to filter out cached items that have a homeAccountId of ""
         * because we don't want a client_credential request to return a cached token that has a homeAccountId
         */ if (typeof filter.homeAccountId === "string" && !this.matchHomeAccountId(entity, filter.homeAccountId)) return false;
        if (!!filter.environment && !this.matchEnvironment(entity, filter.environment)) return false;
        if (!!filter.realm && !this.matchRealm(entity, filter.realm)) return false;
        if (!!filter.credentialType && !this.matchCredentialType(entity, filter.credentialType)) return false;
        if (!!filter.familyId && !this.matchFamilyId(entity, filter.familyId)) return false;
        /*
         * idTokens do not have "target", target specific refreshTokens do exist for some types of authentication
         * Resource specific refresh tokens case will be added when the support is deemed necessary
         */ if (!!filter.target && !this.matchTarget(entity, filter.target)) return false;
        // If request OR cached entity has requested Claims Hash, check if they match
        if (filter.requestedClaimsHash || entity.requestedClaimsHash) {
            // Don't match if either is undefined or they are different
            if (entity.requestedClaimsHash !== filter.requestedClaimsHash) return false;
        }
        // Access Token with Auth Scheme specific matching
        if (entity.credentialType === (0, _constantsMjs.CredentialType).ACCESS_TOKEN_WITH_AUTH_SCHEME) {
            if (!!filter.tokenType && !this.matchTokenType(entity, filter.tokenType)) return false;
            // KeyId (sshKid) in request must match cached SSH certificate keyId because SSH cert is bound to a specific key
            if (filter.tokenType === (0, _constantsMjs.AuthenticationScheme).SSH) {
                if (filter.keyId && !this.matchKeyId(entity, filter.keyId)) return false;
            }
        }
        return true;
    }
    /**
     * retrieve appMetadata matching all provided filters; if no filter is set, get all appMetadata
     * @param filter
     */ getAppMetadataFilteredBy(filter) {
        return this.getAppMetadataFilteredByInternal(filter.environment, filter.clientId);
    }
    /**
     * Support function to help match appMetadata
     * @param environment
     * @param clientId
     */ getAppMetadataFilteredByInternal(environment, clientId) {
        const allCacheKeys = this.getKeys();
        const matchingAppMetadata = {};
        allCacheKeys.forEach((cacheKey)=>{
            // don't parse any non-appMetadata type cache entities
            if (!this.isAppMetadata(cacheKey)) return;
            // Attempt retrieval
            const entity = this.getAppMetadata(cacheKey);
            if (!entity) return;
            if (!!environment && !this.matchEnvironment(entity, environment)) return;
            if (!!clientId && !this.matchClientId(entity, clientId)) return;
            matchingAppMetadata[cacheKey] = entity;
        });
        return matchingAppMetadata;
    }
    /**
     * retrieve authorityMetadata that contains a matching alias
     * @param filter
     */ getAuthorityMetadataByAlias(host) {
        const allCacheKeys = this.getAuthorityMetadataKeys();
        let matchedEntity = null;
        allCacheKeys.forEach((cacheKey)=>{
            // don't parse any non-authorityMetadata type cache entities
            if (!this.isAuthorityMetadata(cacheKey) || cacheKey.indexOf(this.clientId) === -1) return;
            // Attempt retrieval
            const entity = this.getAuthorityMetadata(cacheKey);
            if (!entity) return;
            if (entity.aliases.indexOf(host) === -1) return;
            matchedEntity = entity;
        });
        return matchedEntity;
    }
    /**
     * Removes all accounts and related tokens from cache.
     */ async removeAllAccounts() {
        const allAccountKeys = this.getAccountKeys();
        const removedAccounts = [];
        allAccountKeys.forEach((cacheKey)=>{
            removedAccounts.push(this.removeAccount(cacheKey));
        });
        await Promise.all(removedAccounts);
    }
    /**
     * Removes the account and related tokens for a given account key
     * @param account
     */ async removeAccount(accountKey) {
        const account = this.getAccount(accountKey, this.commonLogger);
        if (!account) return;
        await this.removeAccountContext(account);
        this.removeItem(accountKey);
    }
    /**
     * Removes credentials associated with the provided account
     * @param account
     */ async removeAccountContext(account) {
        const allTokenKeys = this.getTokenKeys();
        const accountId = account.generateAccountId();
        const removedCredentials = [];
        allTokenKeys.idToken.forEach((key)=>{
            if (key.indexOf(accountId) === 0) this.removeIdToken(key);
        });
        allTokenKeys.accessToken.forEach((key)=>{
            if (key.indexOf(accountId) === 0) removedCredentials.push(this.removeAccessToken(key));
        });
        allTokenKeys.refreshToken.forEach((key)=>{
            if (key.indexOf(accountId) === 0) this.removeRefreshToken(key);
        });
        await Promise.all(removedCredentials);
    }
    /**
     * Migrates a single-tenant account and all it's associated alternate cross-tenant account objects in the
     * cache into a condensed multi-tenant account object with tenant profiles.
     * @param accountKey
     * @param accountEntity
     * @param logger
     * @returns
     */ updateOutdatedCachedAccount(accountKey, accountEntity, logger) {
        // Only update if account entity is defined and has no tenantProfiles object (is outdated)
        if (accountEntity && accountEntity.isSingleTenant()) {
            this.commonLogger?.verbose("updateOutdatedCachedAccount: Found a single-tenant (outdated) account entity in the cache, migrating to multi-tenant account entity");
            // Get keys of all accounts belonging to user
            const matchingAccountKeys = this.getAccountKeys().filter((key)=>{
                return key.startsWith(accountEntity.homeAccountId);
            });
            // Get all account entities belonging to user
            const accountsToMerge = [];
            matchingAccountKeys.forEach((key)=>{
                const account = this.getCachedAccountEntity(key);
                if (account) accountsToMerge.push(account);
            });
            // Set base account to home account if available, any account if not
            const baseAccount = accountsToMerge.find((account)=>{
                return (0, _accountInfoMjs.tenantIdMatchesHomeTenant)(account.realm, account.homeAccountId);
            }) || accountsToMerge[0];
            // Populate tenant profiles built from each account entity belonging to the user
            baseAccount.tenantProfiles = accountsToMerge.map((account)=>{
                return {
                    tenantId: account.realm,
                    localAccountId: account.localAccountId,
                    name: account.name,
                    isHomeTenant: (0, _accountInfoMjs.tenantIdMatchesHomeTenant)(account.realm, account.homeAccountId)
                };
            });
            const updatedAccount = CacheManager.toObject(new (0, _accountEntityMjs.AccountEntity)(), {
                ...baseAccount
            });
            const newAccountKey = updatedAccount.generateAccountKey();
            // Clear cache of legacy account objects that have been collpsed into tenant profiles
            matchingAccountKeys.forEach((key)=>{
                if (key !== newAccountKey) this.removeOutdatedAccount(accountKey);
            });
            // Cache updated account object
            this.setAccount(updatedAccount);
            logger?.verbose("Updated an outdated account entity in the cache");
            return updatedAccount;
        }
        // No update is necessary
        return accountEntity;
    }
    /**
     * returns a boolean if the given credential is removed
     * @param credential
     */ async removeAccessToken(key) {
        const credential = this.getAccessTokenCredential(key);
        if (!credential) return;
        // Remove Token Binding Key from key store for PoP Tokens Credentials
        if (credential.credentialType.toLowerCase() === (0, _constantsMjs.CredentialType).ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) {
            if (credential.tokenType === (0, _constantsMjs.AuthenticationScheme).POP) {
                const accessTokenWithAuthSchemeEntity = credential;
                const kid = accessTokenWithAuthSchemeEntity.keyId;
                if (kid) try {
                    await this.cryptoImpl.removeTokenBindingKey(kid);
                } catch (error) {
                    throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.bindingKeyNotRemoved));
                }
            }
        }
        return this.removeItem(key);
    }
    /**
     * Removes all app metadata objects from cache.
     */ removeAppMetadata() {
        const allCacheKeys = this.getKeys();
        allCacheKeys.forEach((cacheKey)=>{
            if (this.isAppMetadata(cacheKey)) this.removeItem(cacheKey);
        });
        return true;
    }
    /**
     * Retrieve AccountEntity from cache
     * @param account
     */ readAccountFromCache(account) {
        const accountKey = (0, _accountEntityMjs.AccountEntity).generateAccountCacheKey(account);
        return this.getAccount(accountKey, this.commonLogger);
    }
    /**
     * Retrieve IdTokenEntity from cache
     * @param account {AccountInfo}
     * @param tokenKeys {?TokenKeys}
     * @param targetRealm {?string}
     * @param performanceClient {?IPerformanceClient}
     * @param correlationId {?string}
     */ getIdToken(account, tokenKeys, targetRealm, performanceClient, correlationId) {
        this.commonLogger.trace("CacheManager - getIdToken called");
        const idTokenFilter = {
            homeAccountId: account.homeAccountId,
            environment: account.environment,
            credentialType: (0, _constantsMjs.CredentialType).ID_TOKEN,
            clientId: this.clientId,
            realm: targetRealm
        };
        const idTokenMap = this.getIdTokensByFilter(idTokenFilter, tokenKeys);
        const numIdTokens = idTokenMap.size;
        if (numIdTokens < 1) {
            this.commonLogger.info("CacheManager:getIdToken - No token found");
            return null;
        } else if (numIdTokens > 1) {
            let tokensToBeRemoved = idTokenMap;
            // Multiple tenant profiles and no tenant specified, pick home account
            if (!targetRealm) {
                const homeIdTokenMap = new Map();
                idTokenMap.forEach((idToken, key)=>{
                    if (idToken.realm === account.tenantId) homeIdTokenMap.set(key, idToken);
                });
                const numHomeIdTokens = homeIdTokenMap.size;
                if (numHomeIdTokens < 1) {
                    this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result");
                    return idTokenMap.values().next().value;
                } else if (numHomeIdTokens === 1) {
                    this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile");
                    return homeIdTokenMap.values().next().value;
                } else // Multiple ID tokens for home tenant profile, remove all and return null
                tokensToBeRemoved = homeIdTokenMap;
            }
            // Multiple tokens for a single tenant profile, remove all and return null
            this.commonLogger.info("CacheManager:getIdToken - Multiple matching ID tokens found, clearing them");
            tokensToBeRemoved.forEach((idToken, key)=>{
                this.removeIdToken(key);
            });
            if (performanceClient && correlationId) performanceClient.addFields({
                multiMatchedID: idTokenMap.size
            }, correlationId);
            return null;
        }
        this.commonLogger.info("CacheManager:getIdToken - Returning ID token");
        return idTokenMap.values().next().value;
    }
    /**
     * Gets all idTokens matching the given filter
     * @param filter
     * @returns
     */ getIdTokensByFilter(filter, tokenKeys) {
        const idTokenKeys = tokenKeys && tokenKeys.idToken || this.getTokenKeys().idToken;
        const idTokens = new Map();
        idTokenKeys.forEach((key)=>{
            if (!this.idTokenKeyMatchesFilter(key, {
                clientId: this.clientId,
                ...filter
            })) return;
            const idToken = this.getIdTokenCredential(key);
            if (idToken && this.credentialMatchesFilter(idToken, filter)) idTokens.set(key, idToken);
        });
        return idTokens;
    }
    /**
     * Validate the cache key against filter before retrieving and parsing cache value
     * @param key
     * @param filter
     * @returns
     */ idTokenKeyMatchesFilter(inputKey, filter) {
        const key = inputKey.toLowerCase();
        if (filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) return false;
        if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) return false;
        return true;
    }
    /**
     * Removes idToken from the cache
     * @param key
     */ removeIdToken(key) {
        this.removeItem(key);
    }
    /**
     * Removes refresh token from the cache
     * @param key
     */ removeRefreshToken(key) {
        this.removeItem(key);
    }
    /**
     * Retrieve AccessTokenEntity from cache
     * @param account {AccountInfo}
     * @param request {BaseAuthRequest}
     * @param tokenKeys {?TokenKeys}
     * @param performanceClient {?IPerformanceClient}
     * @param correlationId {?string}
     */ getAccessToken(account, request, tokenKeys, targetRealm, performanceClient, correlationId) {
        this.commonLogger.trace("CacheManager - getAccessToken called");
        const scopes = (0, _scopeSetMjs.ScopeSet).createSearchScopes(request.scopes);
        const authScheme = request.authenticationScheme || (0, _constantsMjs.AuthenticationScheme).BEARER;
        /*
         * Distinguish between Bearer and PoP/SSH token cache types
         * Cast to lowercase to handle "bearer" from ADFS
         */ const credentialType = authScheme && authScheme.toLowerCase() !== (0, _constantsMjs.AuthenticationScheme).BEARER.toLowerCase() ? (0, _constantsMjs.CredentialType).ACCESS_TOKEN_WITH_AUTH_SCHEME : (0, _constantsMjs.CredentialType).ACCESS_TOKEN;
        const accessTokenFilter = {
            homeAccountId: account.homeAccountId,
            environment: account.environment,
            credentialType: credentialType,
            clientId: this.clientId,
            realm: targetRealm || account.tenantId,
            target: scopes,
            tokenType: authScheme,
            keyId: request.sshKid,
            requestedClaimsHash: request.requestedClaimsHash
        };
        const accessTokenKeys = tokenKeys && tokenKeys.accessToken || this.getTokenKeys().accessToken;
        const accessTokens = [];
        accessTokenKeys.forEach((key)=>{
            // Validate key
            if (this.accessTokenKeyMatchesFilter(key, accessTokenFilter, true)) {
                const accessToken = this.getAccessTokenCredential(key);
                // Validate value
                if (accessToken && this.credentialMatchesFilter(accessToken, accessTokenFilter)) accessTokens.push(accessToken);
            }
        });
        const numAccessTokens = accessTokens.length;
        if (numAccessTokens < 1) {
            this.commonLogger.info("CacheManager:getAccessToken - No token found");
            return null;
        } else if (numAccessTokens > 1) {
            this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them");
            accessTokens.forEach((accessToken)=>{
                this.removeAccessToken((0, _cacheHelpersMjs.generateCredentialKey)(accessToken));
            });
            if (performanceClient && correlationId) performanceClient.addFields({
                multiMatchedAT: accessTokens.length
            }, correlationId);
            return null;
        }
        this.commonLogger.info("CacheManager:getAccessToken - Returning access token");
        return accessTokens[0];
    }
    /**
     * Validate the cache key against filter before retrieving and parsing cache value
     * @param key
     * @param filter
     * @param keyMustContainAllScopes
     * @returns
     */ accessTokenKeyMatchesFilter(inputKey, filter, keyMustContainAllScopes) {
        const key = inputKey.toLowerCase();
        if (filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) return false;
        if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) return false;
        if (filter.realm && key.indexOf(filter.realm.toLowerCase()) === -1) return false;
        if (filter.requestedClaimsHash && key.indexOf(filter.requestedClaimsHash.toLowerCase()) === -1) return false;
        if (filter.target) {
            const scopes = filter.target.asArray();
            for(let i = 0; i < scopes.length; i++){
                if (keyMustContainAllScopes && !key.includes(scopes[i].toLowerCase())) // When performing a cache lookup a missing scope would be a cache miss
                return false;
                else if (!keyMustContainAllScopes && key.includes(scopes[i].toLowerCase())) // When performing a cache write, any token with a subset of requested scopes should be replaced
                return true;
            }
        }
        return true;
    }
    /**
     * Gets all access tokens matching the filter
     * @param filter
     * @returns
     */ getAccessTokensByFilter(filter) {
        const tokenKeys = this.getTokenKeys();
        const accessTokens = [];
        tokenKeys.accessToken.forEach((key)=>{
            if (!this.accessTokenKeyMatchesFilter(key, filter, true)) return;
            const accessToken = this.getAccessTokenCredential(key);
            if (accessToken && this.credentialMatchesFilter(accessToken, filter)) accessTokens.push(accessToken);
        });
        return accessTokens;
    }
    /**
     * Helper to retrieve the appropriate refresh token from cache
     * @param account {AccountInfo}
     * @param familyRT {boolean}
     * @param tokenKeys {?TokenKeys}
     * @param performanceClient {?IPerformanceClient}
     * @param correlationId {?string}
     */ getRefreshToken(account, familyRT, tokenKeys, performanceClient, correlationId) {
        this.commonLogger.trace("CacheManager - getRefreshToken called");
        const id = familyRT ? (0, _constantsMjs.THE_FAMILY_ID) : undefined;
        const refreshTokenFilter = {
            homeAccountId: account.homeAccountId,
            environment: account.environment,
            credentialType: (0, _constantsMjs.CredentialType).REFRESH_TOKEN,
            clientId: this.clientId,
            familyId: id
        };
        const refreshTokenKeys = tokenKeys && tokenKeys.refreshToken || this.getTokenKeys().refreshToken;
        const refreshTokens = [];
        refreshTokenKeys.forEach((key)=>{
            // Validate key
            if (this.refreshTokenKeyMatchesFilter(key, refreshTokenFilter)) {
                const refreshToken = this.getRefreshTokenCredential(key);
                // Validate value
                if (refreshToken && this.credentialMatchesFilter(refreshToken, refreshTokenFilter)) refreshTokens.push(refreshToken);
            }
        });
        const numRefreshTokens = refreshTokens.length;
        if (numRefreshTokens < 1) {
            this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found.");
            return null;
        }
        // address the else case after remove functions address environment aliases
        if (numRefreshTokens > 1 && performanceClient && correlationId) performanceClient.addFields({
            multiMatchedRT: numRefreshTokens
        }, correlationId);
        this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token");
        return refreshTokens[0];
    }
    /**
     * Validate the cache key against filter before retrieving and parsing cache value
     * @param key
     * @param filter
     */ refreshTokenKeyMatchesFilter(inputKey, filter) {
        const key = inputKey.toLowerCase();
        if (filter.familyId && key.indexOf(filter.familyId.toLowerCase()) === -1) return false;
        // If familyId is used, clientId is not in the key
        if (!filter.familyId && filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) return false;
        if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) return false;
        return true;
    }
    /**
     * Retrieve AppMetadataEntity from cache
     */ readAppMetadataFromCache(environment) {
        const appMetadataFilter = {
            environment,
            clientId: this.clientId
        };
        const appMetadata = this.getAppMetadataFilteredBy(appMetadataFilter);
        const appMetadataEntries = Object.keys(appMetadata).map((key)=>appMetadata[key]);
        const numAppMetadata = appMetadataEntries.length;
        if (numAppMetadata < 1) return null;
        else if (numAppMetadata > 1) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.multipleMatchingAppMetadata));
        return appMetadataEntries[0];
    }
    /**
     * Return the family_id value associated  with FOCI
     * @param environment
     * @param clientId
     */ isAppMetadataFOCI(environment) {
        const appMetadata = this.readAppMetadataFromCache(environment);
        return !!(appMetadata && appMetadata.familyId === (0, _constantsMjs.THE_FAMILY_ID));
    }
    /**
     * helper to match account ids
     * @param value
     * @param homeAccountId
     */ matchHomeAccountId(entity, homeAccountId) {
        return !!(typeof entity.homeAccountId === "string" && homeAccountId === entity.homeAccountId);
    }
    /**
     * helper to match account ids
     * @param entity
     * @param localAccountId
     * @returns
     */ matchLocalAccountIdFromTokenClaims(tokenClaims, localAccountId) {
        const idTokenLocalAccountId = tokenClaims.oid || tokenClaims.sub;
        return localAccountId === idTokenLocalAccountId;
    }
    matchLocalAccountIdFromTenantProfile(tenantProfile, localAccountId) {
        return tenantProfile.localAccountId === localAccountId;
    }
    /**
     * helper to match names
     * @param entity
     * @param name
     * @returns true if the downcased name properties are present and match in the filter and the entity
     */ matchName(claims, name) {
        return !!(name.toLowerCase() === claims.name?.toLowerCase());
    }
    /**
     * helper to match usernames
     * @param entity
     * @param username
     * @returns
     */ matchUsername(cachedUsername, filterUsername) {
        return !!(cachedUsername && typeof cachedUsername === "string" && filterUsername?.toLowerCase() === cachedUsername.toLowerCase());
    }
    /**
     * helper to match assertion
     * @param value
     * @param oboAssertion
     */ matchUserAssertionHash(entity, userAssertionHash) {
        return !!(entity.userAssertionHash && userAssertionHash === entity.userAssertionHash);
    }
    /**
     * helper to match environment
     * @param value
     * @param environment
     */ matchEnvironment(entity, environment) {
        // Check static authority options first for cases where authority metadata has not been resolved and cached yet
        if (this.staticAuthorityOptions) {
            const staticAliases = (0, _authorityMetadataMjs.getAliasesFromStaticSources)(this.staticAuthorityOptions, this.commonLogger);
            if (staticAliases.includes(environment) && staticAliases.includes(entity.environment)) return true;
        }
        // Query metadata cache if no static authority configuration has aliases that match enviroment
        const cloudMetadata = this.getAuthorityMetadataByAlias(environment);
        if (cloudMetadata && cloudMetadata.aliases.indexOf(entity.environment) > -1) return true;
        return false;
    }
    /**
     * helper to match credential type
     * @param entity
     * @param credentialType
     */ matchCredentialType(entity, credentialType) {
        return entity.credentialType && credentialType.toLowerCase() === entity.credentialType.toLowerCase();
    }
    /**
     * helper to match client ids
     * @param entity
     * @param clientId
     */ matchClientId(entity, clientId) {
        return !!(entity.clientId && clientId === entity.clientId);
    }
    /**
     * helper to match family ids
     * @param entity
     * @param familyId
     */ matchFamilyId(entity, familyId) {
        return !!(entity.familyId && familyId === entity.familyId);
    }
    /**
     * helper to match realm
     * @param entity
     * @param realm
     */ matchRealm(entity, realm) {
        return !!(entity.realm?.toLowerCase() === realm.toLowerCase());
    }
    /**
     * helper to match nativeAccountId
     * @param entity
     * @param nativeAccountId
     * @returns boolean indicating the match result
     */ matchNativeAccountId(entity, nativeAccountId) {
        return !!(entity.nativeAccountId && nativeAccountId === entity.nativeAccountId);
    }
    /**
     * helper to match loginHint which can be either:
     * 1. login_hint ID token claim
     * 2. username in cached account object
     * 3. upn in ID token claims
     * @param entity
     * @param loginHint
     * @returns
     */ matchLoginHintFromTokenClaims(tokenClaims, loginHint) {
        if (tokenClaims.login_hint === loginHint) return true;
        if (tokenClaims.preferred_username === loginHint) return true;
        if (tokenClaims.upn === loginHint) return true;
        return false;
    }
    /**
     * Helper to match sid
     * @param entity
     * @param sid
     * @returns true if the sid claim is present and matches the filter
     */ matchSid(idTokenClaims, sid) {
        return idTokenClaims.sid === sid;
    }
    matchAuthorityType(entity, authorityType) {
        return !!(entity.authorityType && authorityType.toLowerCase() === entity.authorityType.toLowerCase());
    }
    /**
     * Returns true if the target scopes are a subset of the current entity's scopes, false otherwise.
     * @param entity
     * @param target
     */ matchTarget(entity, target) {
        const isNotAccessTokenCredential = entity.credentialType !== (0, _constantsMjs.CredentialType).ACCESS_TOKEN && entity.credentialType !== (0, _constantsMjs.CredentialType).ACCESS_TOKEN_WITH_AUTH_SCHEME;
        if (isNotAccessTokenCredential || !entity.target) return false;
        const entityScopeSet = (0, _scopeSetMjs.ScopeSet).fromString(entity.target);
        return entityScopeSet.containsScopeSet(target);
    }
    /**
     * Returns true if the credential's tokenType or Authentication Scheme matches the one in the request, false otherwise
     * @param entity
     * @param tokenType
     */ matchTokenType(entity, tokenType) {
        return !!(entity.tokenType && entity.tokenType === tokenType);
    }
    /**
     * Returns true if the credential's keyId matches the one in the request, false otherwise
     * @param entity
     * @param tokenType
     */ matchKeyId(entity, keyId) {
        return !!(entity.keyId && entity.keyId === keyId);
    }
    /**
     * returns if a given cache entity is of the type appmetadata
     * @param key
     */ isAppMetadata(key) {
        return key.indexOf((0, _constantsMjs.APP_METADATA)) !== -1;
    }
    /**
     * returns if a given cache entity is of the type authoritymetadata
     * @param key
     */ isAuthorityMetadata(key) {
        return key.indexOf((0, _constantsMjs.AUTHORITY_METADATA_CONSTANTS).CACHE_KEY) !== -1;
    }
    /**
     * returns cache key used for cloud instance metadata
     */ generateAuthorityMetadataCacheKey(authority) {
        return `${(0, _constantsMjs.AUTHORITY_METADATA_CONSTANTS).CACHE_KEY}-${this.clientId}-${authority}`;
    }
    /**
     * Helper to convert serialized data to object
     * @param obj
     * @param json
     */ static toObject(obj, json) {
        for(const propertyName in json)obj[propertyName] = json[propertyName];
        return obj;
    }
}
/** @internal */ class DefaultStorageClass extends CacheManager {
    setAccount() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    getAccount() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    getCachedAccountEntity() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    setIdTokenCredential() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    getIdTokenCredential() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    setAccessTokenCredential() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    getAccessTokenCredential() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    setRefreshTokenCredential() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    getRefreshTokenCredential() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    setAppMetadata() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    getAppMetadata() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    setServerTelemetry() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    getServerTelemetry() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    setAuthorityMetadata() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    getAuthorityMetadata() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    getAuthorityMetadataKeys() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    setThrottlingCache() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    getThrottlingCache() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    removeItem() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    containsKey() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    getKeys() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    getAccountKeys() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    getTokenKeys() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    async clear() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    updateCredentialCacheKey() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
    removeOutdatedAccount() {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented));
    }
}

},{"../utils/Constants.mjs":"lFItn","./utils/CacheHelpers.mjs":"GDVlI","../request/ScopeSet.mjs":"3j7iu","./entities/AccountEntity.mjs":"2Pt03","../error/ClientAuthError.mjs":"2qWlJ","../account/AccountInfo.mjs":"cPnzw","../account/AuthToken.mjs":"hZiUx","../packageMetadata.mjs":"c03hI","../authority/AuthorityMetadata.mjs":"fODH9","../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"GDVlI":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAccessTokenEntity", ()=>createAccessTokenEntity);
parcelHelpers.export(exports, "createIdTokenEntity", ()=>createIdTokenEntity);
parcelHelpers.export(exports, "createRefreshTokenEntity", ()=>createRefreshTokenEntity);
parcelHelpers.export(exports, "generateAppMetadataKey", ()=>generateAppMetadataKey);
parcelHelpers.export(exports, "generateAuthorityMetadataExpiresAt", ()=>generateAuthorityMetadataExpiresAt);
parcelHelpers.export(exports, "generateCredentialKey", ()=>generateCredentialKey);
parcelHelpers.export(exports, "isAccessTokenEntity", ()=>isAccessTokenEntity);
parcelHelpers.export(exports, "isAppMetadataEntity", ()=>isAppMetadataEntity);
parcelHelpers.export(exports, "isAuthorityMetadataEntity", ()=>isAuthorityMetadataEntity);
parcelHelpers.export(exports, "isAuthorityMetadataExpired", ()=>isAuthorityMetadataExpired);
parcelHelpers.export(exports, "isCredentialEntity", ()=>isCredentialEntity);
parcelHelpers.export(exports, "isIdTokenEntity", ()=>isIdTokenEntity);
parcelHelpers.export(exports, "isRefreshTokenEntity", ()=>isRefreshTokenEntity);
parcelHelpers.export(exports, "isServerTelemetryEntity", ()=>isServerTelemetryEntity);
parcelHelpers.export(exports, "isThrottlingEntity", ()=>isThrottlingEntity);
parcelHelpers.export(exports, "updateAuthorityEndpointMetadata", ()=>updateAuthorityEndpointMetadata);
parcelHelpers.export(exports, "updateCloudDiscoveryMetadata", ()=>updateCloudDiscoveryMetadata);
var _authTokenMjs = require("../../account/AuthToken.mjs");
var _clientAuthErrorMjs = require("../../error/ClientAuthError.mjs");
var _constantsMjs = require("../../utils/Constants.mjs");
var _timeUtilsMjs = require("../../utils/TimeUtils.mjs");
var _clientAuthErrorCodesMjs = require("../../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Cache Key: <home_account_id>-<environment>-<credential_type>-<client_id or familyId>-<realm>-<scopes>-<claims hash>-<scheme>
 * IdToken Example: uid.utid-login.microsoftonline.com-idtoken-app_client_id-contoso.com
 * AccessToken Example: uid.utid-login.microsoftonline.com-accesstoken-app_client_id-contoso.com-scope1 scope2--pop
 * RefreshToken Example: uid.utid-login.microsoftonline.com-refreshtoken-1-contoso.com
 * @param credentialEntity
 * @returns
 */ function generateCredentialKey(credentialEntity) {
    const credentialKey = [
        generateAccountId(credentialEntity),
        generateCredentialId(credentialEntity),
        generateTarget(credentialEntity),
        generateClaimsHash(credentialEntity),
        generateScheme(credentialEntity)
    ];
    return credentialKey.join((0, _constantsMjs.Separators).CACHE_KEY_SEPARATOR).toLowerCase();
}
/**
 * Create IdTokenEntity
 * @param homeAccountId
 * @param authenticationResult
 * @param clientId
 * @param authority
 */ function createIdTokenEntity(homeAccountId, environment, idToken, clientId, tenantId) {
    const idTokenEntity = {
        credentialType: (0, _constantsMjs.CredentialType).ID_TOKEN,
        homeAccountId: homeAccountId,
        environment: environment,
        clientId: clientId,
        secret: idToken,
        realm: tenantId
    };
    return idTokenEntity;
}
/**
 * Create AccessTokenEntity
 * @param homeAccountId
 * @param environment
 * @param accessToken
 * @param clientId
 * @param tenantId
 * @param scopes
 * @param expiresOn
 * @param extExpiresOn
 */ function createAccessTokenEntity(homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn, base64Decode, refreshOn, tokenType, userAssertionHash, keyId, requestedClaims, requestedClaimsHash) {
    const atEntity = {
        homeAccountId: homeAccountId,
        credentialType: (0, _constantsMjs.CredentialType).ACCESS_TOKEN,
        secret: accessToken,
        cachedAt: (0, _timeUtilsMjs.nowSeconds)().toString(),
        expiresOn: expiresOn.toString(),
        extendedExpiresOn: extExpiresOn.toString(),
        environment: environment,
        clientId: clientId,
        realm: tenantId,
        target: scopes,
        tokenType: tokenType || (0, _constantsMjs.AuthenticationScheme).BEARER
    };
    if (userAssertionHash) atEntity.userAssertionHash = userAssertionHash;
    if (refreshOn) atEntity.refreshOn = refreshOn.toString();
    if (requestedClaims) {
        atEntity.requestedClaims = requestedClaims;
        atEntity.requestedClaimsHash = requestedClaimsHash;
    }
    /*
     * Create Access Token With Auth Scheme instead of regular access token
     * Cast to lower to handle "bearer" from ADFS
     */ if (atEntity.tokenType?.toLowerCase() !== (0, _constantsMjs.AuthenticationScheme).BEARER.toLowerCase()) {
        atEntity.credentialType = (0, _constantsMjs.CredentialType).ACCESS_TOKEN_WITH_AUTH_SCHEME;
        switch(atEntity.tokenType){
            case (0, _constantsMjs.AuthenticationScheme).POP:
                // Make sure keyId is present and add it to credential
                const tokenClaims = (0, _authTokenMjs.extractTokenClaims)(accessToken, base64Decode);
                if (!tokenClaims?.cnf?.kid) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.tokenClaimsCnfRequiredForSignedJwt));
                atEntity.keyId = tokenClaims.cnf.kid;
                break;
            case (0, _constantsMjs.AuthenticationScheme).SSH:
                atEntity.keyId = keyId;
        }
    }
    return atEntity;
}
/**
 * Create RefreshTokenEntity
 * @param homeAccountId
 * @param authenticationResult
 * @param clientId
 * @param authority
 */ function createRefreshTokenEntity(homeAccountId, environment, refreshToken, clientId, familyId, userAssertionHash, expiresOn) {
    const rtEntity = {
        credentialType: (0, _constantsMjs.CredentialType).REFRESH_TOKEN,
        homeAccountId: homeAccountId,
        environment: environment,
        clientId: clientId,
        secret: refreshToken
    };
    if (userAssertionHash) rtEntity.userAssertionHash = userAssertionHash;
    if (familyId) rtEntity.familyId = familyId;
    if (expiresOn) rtEntity.expiresOn = expiresOn.toString();
    return rtEntity;
}
function isCredentialEntity(entity) {
    return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("credentialType") && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("secret");
}
/**
 * Validates an entity: checks for all expected params
 * @param entity
 */ function isAccessTokenEntity(entity) {
    if (!entity) return false;
    return isCredentialEntity(entity) && entity.hasOwnProperty("realm") && entity.hasOwnProperty("target") && (entity["credentialType"] === (0, _constantsMjs.CredentialType).ACCESS_TOKEN || entity["credentialType"] === (0, _constantsMjs.CredentialType).ACCESS_TOKEN_WITH_AUTH_SCHEME);
}
/**
 * Validates an entity: checks for all expected params
 * @param entity
 */ function isIdTokenEntity(entity) {
    if (!entity) return false;
    return isCredentialEntity(entity) && entity.hasOwnProperty("realm") && entity["credentialType"] === (0, _constantsMjs.CredentialType).ID_TOKEN;
}
/**
 * Validates an entity: checks for all expected params
 * @param entity
 */ function isRefreshTokenEntity(entity) {
    if (!entity) return false;
    return isCredentialEntity(entity) && entity["credentialType"] === (0, _constantsMjs.CredentialType).REFRESH_TOKEN;
}
/**
 * Generate Account Id key component as per the schema: <home_account_id>-<environment>
 */ function generateAccountId(credentialEntity) {
    const accountId = [
        credentialEntity.homeAccountId,
        credentialEntity.environment
    ];
    return accountId.join((0, _constantsMjs.Separators).CACHE_KEY_SEPARATOR).toLowerCase();
}
/**
 * Generate Credential Id key component as per the schema: <credential_type>-<client_id>-<realm>
 */ function generateCredentialId(credentialEntity) {
    const clientOrFamilyId = credentialEntity.credentialType === (0, _constantsMjs.CredentialType).REFRESH_TOKEN ? credentialEntity.familyId || credentialEntity.clientId : credentialEntity.clientId;
    const credentialId = [
        credentialEntity.credentialType,
        clientOrFamilyId,
        credentialEntity.realm || ""
    ];
    return credentialId.join((0, _constantsMjs.Separators).CACHE_KEY_SEPARATOR).toLowerCase();
}
/**
 * Generate target key component as per schema: <target>
 */ function generateTarget(credentialEntity) {
    return (credentialEntity.target || "").toLowerCase();
}
/**
 * Generate requested claims key component as per schema: <requestedClaims>
 */ function generateClaimsHash(credentialEntity) {
    return (credentialEntity.requestedClaimsHash || "").toLowerCase();
}
/**
 * Generate scheme key componenet as per schema: <scheme>
 */ function generateScheme(credentialEntity) {
    /*
     * PoP Tokens and SSH certs include scheme in cache key
     * Cast to lowercase to handle "bearer" from ADFS
     */ return credentialEntity.tokenType && credentialEntity.tokenType.toLowerCase() !== (0, _constantsMjs.AuthenticationScheme).BEARER.toLowerCase() ? credentialEntity.tokenType.toLowerCase() : "";
}
/**
 * validates if a given cache entry is "Telemetry", parses <key,value>
 * @param key
 * @param entity
 */ function isServerTelemetryEntity(key, entity) {
    const validateKey = key.indexOf((0, _constantsMjs.SERVER_TELEM_CONSTANTS).CACHE_KEY) === 0;
    let validateEntity = true;
    if (entity) validateEntity = entity.hasOwnProperty("failedRequests") && entity.hasOwnProperty("errors") && entity.hasOwnProperty("cacheHits");
    return validateKey && validateEntity;
}
/**
 * validates if a given cache entry is "Throttling", parses <key,value>
 * @param key
 * @param entity
 */ function isThrottlingEntity(key, entity) {
    let validateKey = false;
    if (key) validateKey = key.indexOf((0, _constantsMjs.ThrottlingConstants).THROTTLING_PREFIX) === 0;
    let validateEntity = true;
    if (entity) validateEntity = entity.hasOwnProperty("throttleTime");
    return validateKey && validateEntity;
}
/**
 * Generate AppMetadata Cache Key as per the schema: appmetadata-<environment>-<client_id>
 */ function generateAppMetadataKey({ environment, clientId }) {
    const appMetaDataKeyArray = [
        (0, _constantsMjs.APP_METADATA),
        environment,
        clientId
    ];
    return appMetaDataKeyArray.join((0, _constantsMjs.Separators).CACHE_KEY_SEPARATOR).toLowerCase();
}
/*
 * Validates an entity: checks for all expected params
 * @param entity
 */ function isAppMetadataEntity(key, entity) {
    if (!entity) return false;
    return key.indexOf((0, _constantsMjs.APP_METADATA)) === 0 && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("environment");
}
/**
 * Validates an entity: checks for all expected params
 * @param entity
 */ function isAuthorityMetadataEntity(key, entity) {
    if (!entity) return false;
    return key.indexOf((0, _constantsMjs.AUTHORITY_METADATA_CONSTANTS).CACHE_KEY) === 0 && entity.hasOwnProperty("aliases") && entity.hasOwnProperty("preferred_cache") && entity.hasOwnProperty("preferred_network") && entity.hasOwnProperty("canonical_authority") && entity.hasOwnProperty("authorization_endpoint") && entity.hasOwnProperty("token_endpoint") && entity.hasOwnProperty("issuer") && entity.hasOwnProperty("aliasesFromNetwork") && entity.hasOwnProperty("endpointsFromNetwork") && entity.hasOwnProperty("expiresAt") && entity.hasOwnProperty("jwks_uri");
}
/**
 * Reset the exiresAt value
 */ function generateAuthorityMetadataExpiresAt() {
    return (0, _timeUtilsMjs.nowSeconds)() + (0, _constantsMjs.AUTHORITY_METADATA_CONSTANTS).REFRESH_TIME_SECONDS;
}
function updateAuthorityEndpointMetadata(authorityMetadata, updatedValues, fromNetwork) {
    authorityMetadata.authorization_endpoint = updatedValues.authorization_endpoint;
    authorityMetadata.token_endpoint = updatedValues.token_endpoint;
    authorityMetadata.end_session_endpoint = updatedValues.end_session_endpoint;
    authorityMetadata.issuer = updatedValues.issuer;
    authorityMetadata.endpointsFromNetwork = fromNetwork;
    authorityMetadata.jwks_uri = updatedValues.jwks_uri;
}
function updateCloudDiscoveryMetadata(authorityMetadata, updatedValues, fromNetwork) {
    authorityMetadata.aliases = updatedValues.aliases;
    authorityMetadata.preferred_cache = updatedValues.preferred_cache;
    authorityMetadata.preferred_network = updatedValues.preferred_network;
    authorityMetadata.aliasesFromNetwork = fromNetwork;
}
/**
 * Returns whether or not the data needs to be refreshed
 */ function isAuthorityMetadataExpired(metadata) {
    return metadata.expiresAt <= (0, _timeUtilsMjs.nowSeconds)();
}

},{"../../account/AuthToken.mjs":"hZiUx","../../error/ClientAuthError.mjs":"2qWlJ","../../utils/Constants.mjs":"lFItn","../../utils/TimeUtils.mjs":"4YRSM","../../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hZiUx":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkMaxAge", ()=>checkMaxAge);
parcelHelpers.export(exports, "extractTokenClaims", ()=>extractTokenClaims);
parcelHelpers.export(exports, "getJWSPayload", ()=>getJWSPayload);
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Extract token by decoding the rawToken
 *
 * @param encodedToken
 */ function extractTokenClaims(encodedToken, base64Decode) {
    const jswPayload = getJWSPayload(encodedToken);
    // token will be decoded to get the username
    try {
        // base64Decode() should throw an error if there is an issue
        const base64Decoded = base64Decode(jswPayload);
        return JSON.parse(base64Decoded);
    } catch (err) {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.tokenParsingError));
    }
}
/**
 * decode a JWT
 *
 * @param authToken
 */ function getJWSPayload(authToken) {
    if (!authToken) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.nullOrEmptyToken));
    const tokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
    const matches = tokenPartsRegex.exec(authToken);
    if (!matches || matches.length < 4) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.tokenParsingError));
    /**
     * const crackedToken = {
     *  header: matches[1],
     *  JWSPayload: matches[2],
     *  JWSSig: matches[3],
     * };
     */ return matches[2];
}
/**
 * Determine if the token's max_age has transpired
 */ function checkMaxAge(authTime, maxAge) {
    /*
     * per https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest
     * To force an immediate re-authentication: If an app requires that a user re-authenticate prior to access,
     * provide a value of 0 for the max_age parameter and the AS will force a fresh login.
     */ const fiveMinuteSkew = 300000; // five minutes in milliseconds
    if (maxAge === 0 || Date.now() - fiveMinuteSkew > authTime + maxAge) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.maxAgeTranspired));
}

},{"../error/ClientAuthError.mjs":"2qWlJ","../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4YRSM":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delay", ()=>delay);
parcelHelpers.export(exports, "isTokenExpired", ()=>isTokenExpired);
parcelHelpers.export(exports, "nowSeconds", ()=>nowSeconds);
parcelHelpers.export(exports, "wasClockTurnedBack", ()=>wasClockTurnedBack);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Utility functions for managing date and time operations.
 */ /**
 * return the current time in Unix time (seconds).
 */ function nowSeconds() {
    // Date.getTime() returns in milliseconds.
    return Math.round(new Date().getTime() / 1000.0);
}
/**
 * check if a token is expired based on given UTC time in seconds.
 * @param expiresOn
 */ function isTokenExpired(expiresOn, offset) {
    // check for access token expiry
    const expirationSec = Number(expiresOn) || 0;
    const offsetCurrentTimeSec = nowSeconds() + offset;
    // If current time + offset is greater than token expiration time, then token is expired.
    return offsetCurrentTimeSec > expirationSec;
}
/**
 * If the current time is earlier than the time that a token was cached at, we must discard the token
 * i.e. The system clock was turned back after acquiring the cached token
 * @param cachedAt
 * @param offset
 */ function wasClockTurnedBack(cachedAt) {
    const cachedAtSec = Number(cachedAt);
    return cachedAtSec > nowSeconds();
}
/**
 * Waits for t number of milliseconds
 * @param t number
 * @param value T
 */ function delay(t, value) {
    return new Promise((resolve)=>setTimeout(()=>resolve(value), t));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3j7iu":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScopeSet", ()=>ScopeSet);
var _clientConfigurationErrorMjs = require("../error/ClientConfigurationError.mjs");
var _stringUtilsMjs = require("../utils/StringUtils.mjs");
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _constantsMjs = require("../utils/Constants.mjs");
var _clientConfigurationErrorCodesMjs = require("../error/ClientConfigurationErrorCodes.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * The ScopeSet class creates a set of scopes. Scopes are case-insensitive, unique values, so the Set object in JS makes
 * the most sense to implement for this class. All scopes are trimmed and converted to lower case strings in intersection and union functions
 * to ensure uniqueness of strings.
 */ class ScopeSet {
    constructor(inputScopes){
        // Filter empty string and null/undefined array items
        const scopeArr = inputScopes ? (0, _stringUtilsMjs.StringUtils).trimArrayEntries([
            ...inputScopes
        ]) : [];
        const filteredInput = scopeArr ? (0, _stringUtilsMjs.StringUtils).removeEmptyStringsFromArray(scopeArr) : [];
        // Validate and filter scopes (validate function throws if validation fails)
        this.validateInputScopes(filteredInput);
        this.scopes = new Set(); // Iterator in constructor not supported by IE11
        filteredInput.forEach((scope)=>this.scopes.add(scope));
    }
    /**
     * Factory method to create ScopeSet from space-delimited string
     * @param inputScopeString
     * @param appClientId
     * @param scopesRequired
     */ static fromString(inputScopeString) {
        const scopeString = inputScopeString || (0, _constantsMjs.Constants).EMPTY_STRING;
        const inputScopes = scopeString.split(" ");
        return new ScopeSet(inputScopes);
    }
    /**
     * Creates the set of scopes to search for in cache lookups
     * @param inputScopeString
     * @returns
     */ static createSearchScopes(inputScopeString) {
        const scopeSet = new ScopeSet(inputScopeString);
        if (!scopeSet.containsOnlyOIDCScopes()) scopeSet.removeOIDCScopes();
        else scopeSet.removeScope((0, _constantsMjs.Constants).OFFLINE_ACCESS_SCOPE);
        return scopeSet;
    }
    /**
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} inputScopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
     */ validateInputScopes(inputScopes) {
        // Check if scopes are required but not given or is an empty array
        if (!inputScopes || inputScopes.length < 1) throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.emptyInputScopesError));
    }
    /**
     * Check if a given scope is present in this set of scopes.
     * @param scope
     */ containsScope(scope) {
        const lowerCaseScopes = this.printScopesLowerCase().split(" ");
        const lowerCaseScopesSet = new ScopeSet(lowerCaseScopes);
        // compare lowercase scopes
        return scope ? lowerCaseScopesSet.scopes.has(scope.toLowerCase()) : false;
    }
    /**
     * Check if a set of scopes is present in this set of scopes.
     * @param scopeSet
     */ containsScopeSet(scopeSet) {
        if (!scopeSet || scopeSet.scopes.size <= 0) return false;
        return this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every((scope)=>this.containsScope(scope));
    }
    /**
     * Check if set of scopes contains only the defaults
     */ containsOnlyOIDCScopes() {
        let defaultScopeCount = 0;
        (0, _constantsMjs.OIDC_SCOPES).forEach((defaultScope)=>{
            if (this.containsScope(defaultScope)) defaultScopeCount += 1;
        });
        return this.scopes.size === defaultScopeCount;
    }
    /**
     * Appends single scope if passed
     * @param newScope
     */ appendScope(newScope) {
        if (newScope) this.scopes.add(newScope.trim());
    }
    /**
     * Appends multiple scopes if passed
     * @param newScopes
     */ appendScopes(newScopes) {
        try {
            newScopes.forEach((newScope)=>this.appendScope(newScope));
        } catch (e) {
            throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.cannotAppendScopeSet));
        }
    }
    /**
     * Removes element from set of scopes.
     * @param scope
     */ removeScope(scope) {
        if (!scope) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.cannotRemoveEmptyScope));
        this.scopes.delete(scope.trim());
    }
    /**
     * Removes default scopes from set of scopes
     * Primarily used to prevent cache misses if the default scopes are not returned from the server
     */ removeOIDCScopes() {
        (0, _constantsMjs.OIDC_SCOPES).forEach((defaultScope)=>{
            this.scopes.delete(defaultScope);
        });
    }
    /**
     * Combines an array of scopes with the current set of scopes.
     * @param otherScopes
     */ unionScopeSets(otherScopes) {
        if (!otherScopes) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.emptyInputScopeSet));
        const unionScopes = new Set(); // Iterator in constructor not supported in IE11
        otherScopes.scopes.forEach((scope)=>unionScopes.add(scope.toLowerCase()));
        this.scopes.forEach((scope)=>unionScopes.add(scope.toLowerCase()));
        return unionScopes;
    }
    /**
     * Check if scopes intersect between this set and another.
     * @param otherScopes
     */ intersectingScopeSets(otherScopes) {
        if (!otherScopes) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.emptyInputScopeSet));
        // Do not allow OIDC scopes to be the only intersecting scopes
        if (!otherScopes.containsOnlyOIDCScopes()) otherScopes.removeOIDCScopes();
        const unionScopes = this.unionScopeSets(otherScopes);
        const sizeOtherScopes = otherScopes.getScopeCount();
        const sizeThisScopes = this.getScopeCount();
        const sizeUnionScopes = unionScopes.size;
        return sizeUnionScopes < sizeThisScopes + sizeOtherScopes;
    }
    /**
     * Returns size of set of scopes.
     */ getScopeCount() {
        return this.scopes.size;
    }
    /**
     * Returns the scopes as an array of string values
     */ asArray() {
        const array = [];
        this.scopes.forEach((val)=>array.push(val));
        return array;
    }
    /**
     * Prints scopes into a space-delimited string
     */ printScopes() {
        if (this.scopes) {
            const scopeArr = this.asArray();
            return scopeArr.join(" ");
        }
        return (0, _constantsMjs.Constants).EMPTY_STRING;
    }
    /**
     * Prints scopes into a space-delimited lower-case string (used for caching)
     */ printScopesLowerCase() {
        return this.printScopes().toLowerCase();
    }
}

},{"../error/ClientConfigurationError.mjs":"aV0KO","../utils/StringUtils.mjs":"4cOPw","../error/ClientAuthError.mjs":"2qWlJ","../utils/Constants.mjs":"lFItn","../error/ClientConfigurationErrorCodes.mjs":"1N7Do","../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aV0KO":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClientConfigurationErrorCodes", ()=>_clientConfigurationErrorCodesMjs);
parcelHelpers.export(exports, "ClientConfigurationError", ()=>ClientConfigurationError);
parcelHelpers.export(exports, "ClientConfigurationErrorMessage", ()=>ClientConfigurationErrorMessage);
parcelHelpers.export(exports, "ClientConfigurationErrorMessages", ()=>ClientConfigurationErrorMessages);
parcelHelpers.export(exports, "createClientConfigurationError", ()=>createClientConfigurationError);
var _authErrorMjs = require("./AuthError.mjs");
var _clientConfigurationErrorCodesMjs = require("./ClientConfigurationErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const ClientConfigurationErrorMessages = {
    [(0, _clientConfigurationErrorCodesMjs.redirectUriEmpty)]: "A redirect URI is required for all calls, and none has been set.",
    [(0, _clientConfigurationErrorCodesMjs.claimsRequestParsingError)]: "Could not parse the given claims request object.",
    [(0, _clientConfigurationErrorCodesMjs.authorityUriInsecure)]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
    [(0, _clientConfigurationErrorCodesMjs.urlParseError)]: "URL could not be parsed into appropriate segments.",
    [(0, _clientConfigurationErrorCodesMjs.urlEmptyError)]: "URL was empty or null.",
    [(0, _clientConfigurationErrorCodesMjs.emptyInputScopesError)]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.",
    [(0, _clientConfigurationErrorCodesMjs.invalidPromptValue)]: "Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest",
    [(0, _clientConfigurationErrorCodesMjs.invalidClaims)]: "Given claims parameter must be a stringified JSON object.",
    [(0, _clientConfigurationErrorCodesMjs.tokenRequestEmpty)]: "Token request was empty and not found in cache.",
    [(0, _clientConfigurationErrorCodesMjs.logoutRequestEmpty)]: "The logout request was null or undefined.",
    [(0, _clientConfigurationErrorCodesMjs.invalidCodeChallengeMethod)]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
    [(0, _clientConfigurationErrorCodesMjs.pkceParamsMissing)]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request",
    [(0, _clientConfigurationErrorCodesMjs.invalidCloudDiscoveryMetadata)]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields",
    [(0, _clientConfigurationErrorCodesMjs.invalidAuthorityMetadata)]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.",
    [(0, _clientConfigurationErrorCodesMjs.untrustedAuthority)]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.",
    [(0, _clientConfigurationErrorCodesMjs.missingSshJwk)]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.",
    [(0, _clientConfigurationErrorCodesMjs.missingSshKid)]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.",
    [(0, _clientConfigurationErrorCodesMjs.missingNonceAuthenticationHeader)]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.",
    [(0, _clientConfigurationErrorCodesMjs.invalidAuthenticationHeader)]: "Invalid authentication header provided",
    [(0, _clientConfigurationErrorCodesMjs.cannotSetOIDCOptions)]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.",
    [(0, _clientConfigurationErrorCodesMjs.cannotAllowNativeBroker)]: "Cannot set allowNativeBroker parameter to true when not in AAD protocol mode.",
    [(0, _clientConfigurationErrorCodesMjs.authorityMismatch)]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority."
};
/**
 * ClientConfigurationErrorMessage class containing string constants used by error codes and messages.
 * @deprecated Use ClientConfigurationErrorCodes instead
 */ const ClientConfigurationErrorMessage = {
    redirectUriNotSet: {
        code: (0, _clientConfigurationErrorCodesMjs.redirectUriEmpty),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.redirectUriEmpty]
    },
    claimsRequestParsingError: {
        code: (0, _clientConfigurationErrorCodesMjs.claimsRequestParsingError),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.claimsRequestParsingError]
    },
    authorityUriInsecure: {
        code: (0, _clientConfigurationErrorCodesMjs.authorityUriInsecure),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.authorityUriInsecure]
    },
    urlParseError: {
        code: (0, _clientConfigurationErrorCodesMjs.urlParseError),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.urlParseError]
    },
    urlEmptyError: {
        code: (0, _clientConfigurationErrorCodesMjs.urlEmptyError),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.urlEmptyError]
    },
    emptyScopesError: {
        code: (0, _clientConfigurationErrorCodesMjs.emptyInputScopesError),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.emptyInputScopesError]
    },
    invalidPrompt: {
        code: (0, _clientConfigurationErrorCodesMjs.invalidPromptValue),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.invalidPromptValue]
    },
    invalidClaimsRequest: {
        code: (0, _clientConfigurationErrorCodesMjs.invalidClaims),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.invalidClaims]
    },
    tokenRequestEmptyError: {
        code: (0, _clientConfigurationErrorCodesMjs.tokenRequestEmpty),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.tokenRequestEmpty]
    },
    logoutRequestEmptyError: {
        code: (0, _clientConfigurationErrorCodesMjs.logoutRequestEmpty),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.logoutRequestEmpty]
    },
    invalidCodeChallengeMethod: {
        code: (0, _clientConfigurationErrorCodesMjs.invalidCodeChallengeMethod),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.invalidCodeChallengeMethod]
    },
    invalidCodeChallengeParams: {
        code: (0, _clientConfigurationErrorCodesMjs.pkceParamsMissing),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.pkceParamsMissing]
    },
    invalidCloudDiscoveryMetadata: {
        code: (0, _clientConfigurationErrorCodesMjs.invalidCloudDiscoveryMetadata),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.invalidCloudDiscoveryMetadata]
    },
    invalidAuthorityMetadata: {
        code: (0, _clientConfigurationErrorCodesMjs.invalidAuthorityMetadata),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.invalidAuthorityMetadata]
    },
    untrustedAuthority: {
        code: (0, _clientConfigurationErrorCodesMjs.untrustedAuthority),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.untrustedAuthority]
    },
    missingSshJwk: {
        code: (0, _clientConfigurationErrorCodesMjs.missingSshJwk),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.missingSshJwk]
    },
    missingSshKid: {
        code: (0, _clientConfigurationErrorCodesMjs.missingSshKid),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.missingSshKid]
    },
    missingNonceAuthenticationHeader: {
        code: (0, _clientConfigurationErrorCodesMjs.missingNonceAuthenticationHeader),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.missingNonceAuthenticationHeader]
    },
    invalidAuthenticationHeader: {
        code: (0, _clientConfigurationErrorCodesMjs.invalidAuthenticationHeader),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.invalidAuthenticationHeader]
    },
    cannotSetOIDCOptions: {
        code: (0, _clientConfigurationErrorCodesMjs.cannotSetOIDCOptions),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.cannotSetOIDCOptions]
    },
    cannotAllowNativeBroker: {
        code: (0, _clientConfigurationErrorCodesMjs.cannotAllowNativeBroker),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.cannotAllowNativeBroker]
    },
    authorityMismatch: {
        code: (0, _clientConfigurationErrorCodesMjs.authorityMismatch),
        desc: ClientConfigurationErrorMessages[0, _clientConfigurationErrorCodesMjs.authorityMismatch]
    }
};
/**
 * Error thrown when there is an error in configuration of the MSAL.js library.
 */ class ClientConfigurationError extends (0, _authErrorMjs.AuthError) {
    constructor(errorCode){
        super(errorCode, ClientConfigurationErrorMessages[errorCode]);
        this.name = "ClientConfigurationError";
        Object.setPrototypeOf(this, ClientConfigurationError.prototype);
    }
}
function createClientConfigurationError(errorCode) {
    return new ClientConfigurationError(errorCode);
}

},{"./AuthError.mjs":"8tPVA","./ClientConfigurationErrorCodes.mjs":"1N7Do","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1N7Do":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "authorityMismatch", ()=>authorityMismatch);
parcelHelpers.export(exports, "authorityUriInsecure", ()=>authorityUriInsecure);
parcelHelpers.export(exports, "cannotAllowNativeBroker", ()=>cannotAllowNativeBroker);
parcelHelpers.export(exports, "cannotSetOIDCOptions", ()=>cannotSetOIDCOptions);
parcelHelpers.export(exports, "claimsRequestParsingError", ()=>claimsRequestParsingError);
parcelHelpers.export(exports, "emptyInputScopesError", ()=>emptyInputScopesError);
parcelHelpers.export(exports, "invalidAuthenticationHeader", ()=>invalidAuthenticationHeader);
parcelHelpers.export(exports, "invalidAuthorityMetadata", ()=>invalidAuthorityMetadata);
parcelHelpers.export(exports, "invalidClaims", ()=>invalidClaims);
parcelHelpers.export(exports, "invalidCloudDiscoveryMetadata", ()=>invalidCloudDiscoveryMetadata);
parcelHelpers.export(exports, "invalidCodeChallengeMethod", ()=>invalidCodeChallengeMethod);
parcelHelpers.export(exports, "invalidPromptValue", ()=>invalidPromptValue);
parcelHelpers.export(exports, "logoutRequestEmpty", ()=>logoutRequestEmpty);
parcelHelpers.export(exports, "missingNonceAuthenticationHeader", ()=>missingNonceAuthenticationHeader);
parcelHelpers.export(exports, "missingSshJwk", ()=>missingSshJwk);
parcelHelpers.export(exports, "missingSshKid", ()=>missingSshKid);
parcelHelpers.export(exports, "pkceParamsMissing", ()=>pkceParamsMissing);
parcelHelpers.export(exports, "redirectUriEmpty", ()=>redirectUriEmpty);
parcelHelpers.export(exports, "tokenRequestEmpty", ()=>tokenRequestEmpty);
parcelHelpers.export(exports, "untrustedAuthority", ()=>untrustedAuthority);
parcelHelpers.export(exports, "urlEmptyError", ()=>urlEmptyError);
parcelHelpers.export(exports, "urlParseError", ()=>urlParseError);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const redirectUriEmpty = "redirect_uri_empty";
const claimsRequestParsingError = "claims_request_parsing_error";
const authorityUriInsecure = "authority_uri_insecure";
const urlParseError = "url_parse_error";
const urlEmptyError = "empty_url_error";
const emptyInputScopesError = "empty_input_scopes_error";
const invalidPromptValue = "invalid_prompt_value";
const invalidClaims = "invalid_claims";
const tokenRequestEmpty = "token_request_empty";
const logoutRequestEmpty = "logout_request_empty";
const invalidCodeChallengeMethod = "invalid_code_challenge_method";
const pkceParamsMissing = "pkce_params_missing";
const invalidCloudDiscoveryMetadata = "invalid_cloud_discovery_metadata";
const invalidAuthorityMetadata = "invalid_authority_metadata";
const untrustedAuthority = "untrusted_authority";
const missingSshJwk = "missing_ssh_jwk";
const missingSshKid = "missing_ssh_kid";
const missingNonceAuthenticationHeader = "missing_nonce_authentication_header";
const invalidAuthenticationHeader = "invalid_authentication_header";
const cannotSetOIDCOptions = "cannot_set_OIDCOptions";
const cannotAllowNativeBroker = "cannot_allow_native_broker";
const authorityMismatch = "authority_mismatch";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4cOPw":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StringUtils", ()=>StringUtils);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * @hidden
 */ class StringUtils {
    /**
     * Check if stringified object is empty
     * @param strObj
     */ static isEmptyObj(strObj) {
        if (strObj) try {
            const obj = JSON.parse(strObj);
            return Object.keys(obj).length === 0;
        } catch (e) {}
        return true;
    }
    static startsWith(str, search) {
        return str.indexOf(search) === 0;
    }
    static endsWith(str, search) {
        return str.length >= search.length && str.lastIndexOf(search) === str.length - search.length;
    }
    /**
     * Parses string into an object.
     *
     * @param query
     */ static queryStringToObject(query) {
        const obj = {};
        const params = query.split("&");
        const decode = (s)=>decodeURIComponent(s.replace(/\+/g, " "));
        params.forEach((pair)=>{
            if (pair.trim()) {
                const [key, value] = pair.split(/=(.+)/g, 2); // Split on the first occurence of the '=' character
                if (key && value) obj[decode(key)] = decode(value);
            }
        });
        return obj;
    }
    /**
     * Trims entries in an array.
     *
     * @param arr
     */ static trimArrayEntries(arr) {
        return arr.map((entry)=>entry.trim());
    }
    /**
     * Removes empty strings from array
     * @param arr
     */ static removeEmptyStringsFromArray(arr) {
        return arr.filter((entry)=>{
            return !!entry;
        });
    }
    /**
     * Attempts to parse a string into JSON
     * @param str
     */ static jsonParseHelper(str) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return null;
        }
    }
    /**
     * Tests if a given string matches a given pattern, with support for wildcards and queries.
     * @param pattern Wildcard pattern to string match. Supports "*" for wildcards and "?" for queries
     * @param input String to match against
     */ static matchPattern(pattern, input) {
        /**
         * Wildcard support: https://stackoverflow.com/a/3117248/4888559
         * Queries: replaces "?" in string with escaped "\?" for regex test
         */ // eslint-disable-next-line security/detect-non-literal-regexp
        const regex = new RegExp(pattern.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?"));
        return regex.test(input);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Pt03":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AccountEntity", ()=>AccountEntity);
var _constantsMjs = require("../../utils/Constants.mjs");
var _clientInfoMjs = require("../../account/ClientInfo.mjs");
var _accountInfoMjs = require("../../account/AccountInfo.mjs");
var _clientAuthErrorMjs = require("../../error/ClientAuthError.mjs");
var _authorityTypeMjs = require("../../authority/AuthorityType.mjs");
var _tokenClaimsMjs = require("../../account/TokenClaims.mjs");
var _protocolModeMjs = require("../../authority/ProtocolMode.mjs");
var _clientAuthErrorCodesMjs = require("../../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Type that defines required and optional parameters for an Account field (based on universal cache schema implemented by all MSALs).
 *
 * Key : Value Schema
 *
 * Key: <home_account_id>-<environment>-<realm*>
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      localAccountId: Original tenant-specific accountID, usually used for legacy cases
 *      username: primary username that represents the user, usually corresponds to preferred_username in the v2 endpt
 *      authorityType: Accounts authority type as a string
 *      name: Full name for the account, including given name and family name,
 *      lastModificationTime: last time this entity was modified in the cache
 *      lastModificationApp:
 *      nativeAccountId: Account identifier on the native device
 *      tenantProfiles: Array of tenant profile objects for each tenant that the account has authenticated with in the browser
 * }
 * @internal
 */ class AccountEntity {
    /**
     * Generate Account Id key component as per the schema: <home_account_id>-<environment>
     */ generateAccountId() {
        const accountId = [
            this.homeAccountId,
            this.environment
        ];
        return accountId.join((0, _constantsMjs.Separators).CACHE_KEY_SEPARATOR).toLowerCase();
    }
    /**
     * Generate Account Cache Key as per the schema: <home_account_id>-<environment>-<realm*>
     */ generateAccountKey() {
        return AccountEntity.generateAccountCacheKey({
            homeAccountId: this.homeAccountId,
            environment: this.environment,
            tenantId: this.realm,
            username: this.username,
            localAccountId: this.localAccountId
        });
    }
    /**
     * Returns the AccountInfo interface for this account.
     */ getAccountInfo() {
        return {
            homeAccountId: this.homeAccountId,
            environment: this.environment,
            tenantId: this.realm,
            username: this.username,
            localAccountId: this.localAccountId,
            name: this.name,
            nativeAccountId: this.nativeAccountId,
            authorityType: this.authorityType,
            // Deserialize tenant profiles array into a Map
            tenantProfiles: new Map((this.tenantProfiles || []).map((tenantProfile)=>{
                return [
                    tenantProfile.tenantId,
                    tenantProfile
                ];
            }))
        };
    }
    /**
     * Returns true if the account entity is in single tenant format (outdated), false otherwise
     */ isSingleTenant() {
        return !this.tenantProfiles;
    }
    /**
     * Generates account key from interface
     * @param accountInterface
     */ static generateAccountCacheKey(accountInterface) {
        const homeTenantId = accountInterface.homeAccountId.split(".")[1];
        const accountKey = [
            accountInterface.homeAccountId,
            accountInterface.environment || "",
            homeTenantId || accountInterface.tenantId || ""
        ];
        return accountKey.join((0, _constantsMjs.Separators).CACHE_KEY_SEPARATOR).toLowerCase();
    }
    /**
     * Build Account cache from IdToken, clientInfo and authority/policy. Associated with AAD.
     * @param accountDetails
     */ static createAccount(accountDetails, authority, base64Decode) {
        const account = new AccountEntity();
        if (authority.authorityType === (0, _authorityTypeMjs.AuthorityType).Adfs) account.authorityType = (0, _constantsMjs.CacheAccountType).ADFS_ACCOUNT_TYPE;
        else if (authority.protocolMode === (0, _protocolModeMjs.ProtocolMode).AAD) account.authorityType = (0, _constantsMjs.CacheAccountType).MSSTS_ACCOUNT_TYPE;
        else account.authorityType = (0, _constantsMjs.CacheAccountType).GENERIC_ACCOUNT_TYPE;
        let clientInfo;
        if (accountDetails.clientInfo && base64Decode) clientInfo = (0, _clientInfoMjs.buildClientInfo)(accountDetails.clientInfo, base64Decode);
        account.clientInfo = accountDetails.clientInfo;
        account.homeAccountId = accountDetails.homeAccountId;
        account.nativeAccountId = accountDetails.nativeAccountId;
        const env = accountDetails.environment || authority && authority.getPreferredCache();
        if (!env) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.invalidCacheEnvironment));
        account.environment = env;
        // non AAD scenarios can have empty realm
        account.realm = clientInfo?.utid || (0, _tokenClaimsMjs.getTenantIdFromIdTokenClaims)(accountDetails.idTokenClaims) || "";
        // How do you account for MSA CID here?
        account.localAccountId = clientInfo?.uid || accountDetails.idTokenClaims.oid || accountDetails.idTokenClaims.sub || "";
        /*
         * In B2C scenarios the emails claim is used instead of preferred_username and it is an array.
         * In most cases it will contain a single email. This field should not be relied upon if a custom
         * policy is configured to return more than 1 email.
         */ const preferredUsername = accountDetails.idTokenClaims.preferred_username || accountDetails.idTokenClaims.upn;
        const email = accountDetails.idTokenClaims.emails ? accountDetails.idTokenClaims.emails[0] : null;
        account.username = preferredUsername || email || "";
        account.name = accountDetails.idTokenClaims.name;
        account.cloudGraphHostName = accountDetails.cloudGraphHostName;
        account.msGraphHost = accountDetails.msGraphHost;
        if (accountDetails.tenantProfiles) account.tenantProfiles = accountDetails.tenantProfiles;
        else {
            const tenantProfiles = [];
            if (accountDetails.idTokenClaims) {
                const tenantProfile = (0, _accountInfoMjs.buildTenantProfileFromIdTokenClaims)(accountDetails.homeAccountId, accountDetails.idTokenClaims);
                tenantProfiles.push(tenantProfile);
            }
            account.tenantProfiles = tenantProfiles;
        }
        return account;
    }
    /**
     * Creates an AccountEntity object from AccountInfo
     * @param accountInfo
     * @param cloudGraphHostName
     * @param msGraphHost
     * @returns
     */ static createFromAccountInfo(accountInfo, cloudGraphHostName, msGraphHost) {
        const account = new AccountEntity();
        account.authorityType = accountInfo.authorityType || (0, _constantsMjs.CacheAccountType).GENERIC_ACCOUNT_TYPE;
        account.homeAccountId = accountInfo.homeAccountId;
        account.localAccountId = accountInfo.localAccountId;
        account.nativeAccountId = accountInfo.nativeAccountId;
        account.realm = accountInfo.tenantId;
        account.environment = accountInfo.environment;
        account.username = accountInfo.username;
        account.name = accountInfo.name;
        account.cloudGraphHostName = cloudGraphHostName;
        account.msGraphHost = msGraphHost;
        // Serialize tenant profiles map into an array
        account.tenantProfiles = Array.from(accountInfo.tenantProfiles?.values() || []);
        return account;
    }
    /**
     * Generate HomeAccountId from server response
     * @param serverClientInfo
     * @param authType
     */ static generateHomeAccountId(serverClientInfo, authType, logger, cryptoObj, idTokenClaims) {
        // since ADFS/DSTS do not have tid and does not set client_info
        if (!(authType === (0, _authorityTypeMjs.AuthorityType).Adfs || authType === (0, _authorityTypeMjs.AuthorityType).Dsts)) {
            // for cases where there is clientInfo
            if (serverClientInfo) try {
                const clientInfo = (0, _clientInfoMjs.buildClientInfo)(serverClientInfo, cryptoObj.base64Decode);
                if (clientInfo.uid && clientInfo.utid) return `${clientInfo.uid}.${clientInfo.utid}`;
            } catch (e) {}
            logger.warning("No client info in response");
        }
        // default to "sub" claim
        return idTokenClaims?.sub || "";
    }
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */ static isAccountEntity(entity) {
        if (!entity) return false;
        return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("realm") && entity.hasOwnProperty("localAccountId") && entity.hasOwnProperty("username") && entity.hasOwnProperty("authorityType");
    }
    /**
     * Helper function to determine whether 2 accountInfo objects represent the same account
     * @param accountA
     * @param accountB
     * @param compareClaims - If set to true idTokenClaims will also be compared to determine account equality
     */ static accountInfoIsEqual(accountA, accountB, compareClaims) {
        if (!accountA || !accountB) return false;
        let claimsMatch = true; // default to true so as to not fail comparison below if compareClaims: false
        if (compareClaims) {
            const accountAClaims = accountA.idTokenClaims || {};
            const accountBClaims = accountB.idTokenClaims || {};
            // issued at timestamp and nonce are expected to change each time a new id token is acquired
            claimsMatch = accountAClaims.iat === accountBClaims.iat && accountAClaims.nonce === accountBClaims.nonce;
        }
        return accountA.homeAccountId === accountB.homeAccountId && accountA.localAccountId === accountB.localAccountId && accountA.username === accountB.username && accountA.tenantId === accountB.tenantId && accountA.environment === accountB.environment && accountA.nativeAccountId === accountB.nativeAccountId && claimsMatch;
    }
}

},{"../../utils/Constants.mjs":"lFItn","../../account/ClientInfo.mjs":"e6eRZ","../../account/AccountInfo.mjs":"cPnzw","../../error/ClientAuthError.mjs":"2qWlJ","../../authority/AuthorityType.mjs":"inSt3","../../account/TokenClaims.mjs":"lb7hc","../../authority/ProtocolMode.mjs":"1Lm0d","../../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e6eRZ":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildClientInfo", ()=>buildClientInfo);
parcelHelpers.export(exports, "buildClientInfoFromHomeAccountId", ()=>buildClientInfoFromHomeAccountId);
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _constantsMjs = require("../utils/Constants.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Function to build a client info object from server clientInfo string
 * @param rawClientInfo
 * @param crypto
 */ function buildClientInfo(rawClientInfo, base64Decode) {
    if (!rawClientInfo) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.clientInfoEmptyError));
    try {
        const decodedClientInfo = base64Decode(rawClientInfo);
        return JSON.parse(decodedClientInfo);
    } catch (e) {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.clientInfoDecodingError));
    }
}
/**
 * Function to build a client info object from cached homeAccountId string
 * @param homeAccountId
 */ function buildClientInfoFromHomeAccountId(homeAccountId) {
    if (!homeAccountId) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.clientInfoDecodingError));
    const clientInfoParts = homeAccountId.split((0, _constantsMjs.Separators).CLIENT_INFO_SEPARATOR, 2);
    return {
        uid: clientInfoParts[0],
        utid: clientInfoParts.length < 2 ? (0, _constantsMjs.Constants).EMPTY_STRING : clientInfoParts[1]
    };
}

},{"../error/ClientAuthError.mjs":"2qWlJ","../utils/Constants.mjs":"lFItn","../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cPnzw":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildTenantProfileFromIdTokenClaims", ()=>buildTenantProfileFromIdTokenClaims);
parcelHelpers.export(exports, "tenantIdMatchesHomeTenant", ()=>tenantIdMatchesHomeTenant);
parcelHelpers.export(exports, "updateAccountTenantProfileData", ()=>updateAccountTenantProfileData);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Returns true if tenantId matches the utid portion of homeAccountId
 * @param tenantId
 * @param homeAccountId
 * @returns
 */ function tenantIdMatchesHomeTenant(tenantId, homeAccountId) {
    return !!tenantId && !!homeAccountId && tenantId === homeAccountId.split(".")[1];
}
function buildTenantProfileFromIdTokenClaims(homeAccountId, idTokenClaims) {
    const { oid, sub, tid, name, tfp, acr } = idTokenClaims;
    /**
     * Since there is no way to determine if the authority is AAD or B2C, we exhaust all the possible claims that can serve as tenant ID with the following precedence:
     * tid - TenantID claim that identifies the tenant that issued the token in AAD. Expected in all AAD ID tokens, not present in B2C ID Tokens.
     * tfp - Trust Framework Policy claim that identifies the policy that was used to authenticate the user. Functions as tenant for B2C scenarios.
     * acr - Authentication Context Class Reference claim used only with older B2C policies. Fallback in case tfp is not present, but likely won't be present anyway.
     */ const tenantId = tid || tfp || acr || "";
    return {
        tenantId: tenantId,
        localAccountId: oid || sub || "",
        name: name,
        isHomeTenant: tenantIdMatchesHomeTenant(tenantId, homeAccountId)
    };
}
/**
 * Replaces account info that varies by tenant profile sourced from the ID token claims passed in with the tenant-specific account info
 * @param baseAccountInfo
 * @param idTokenClaims
 * @returns
 */ function updateAccountTenantProfileData(baseAccountInfo, tenantProfile, idTokenClaims, idTokenSecret) {
    let updatedAccountInfo = baseAccountInfo;
    // Tenant Profile overrides passed in account info
    if (tenantProfile) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { isHomeTenant, ...tenantProfileOverride } = tenantProfile;
        updatedAccountInfo = {
            ...baseAccountInfo,
            ...tenantProfileOverride
        };
    }
    // ID token claims override passed in account info and tenant profile
    if (idTokenClaims) {
        // Ignore isHomeTenant, loginHint, and sid which are part of tenant profile but not base account info
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { isHomeTenant, ...claimsSourcedTenantProfile } = buildTenantProfileFromIdTokenClaims(baseAccountInfo.homeAccountId, idTokenClaims);
        updatedAccountInfo = {
            ...updatedAccountInfo,
            ...claimsSourcedTenantProfile,
            idTokenClaims: idTokenClaims,
            idToken: idTokenSecret
        };
        return updatedAccountInfo;
    }
    return updatedAccountInfo;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"inSt3":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthorityType", ()=>AuthorityType);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Authority types supported by MSAL.
 */ const AuthorityType = {
    Default: 0,
    Adfs: 1,
    Dsts: 2,
    Ciam: 3
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lb7hc":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTenantIdFromIdTokenClaims", ()=>getTenantIdFromIdTokenClaims);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Gets tenantId from available ID token claims to set as credential realm with the following precedence:
 * 1. tid - if the token is acquired from an Azure AD tenant tid will be present
 * 2. tfp - if the token is acquired from a modern B2C tenant tfp should be present
 * 3. acr - if the token is acquired from a legacy B2C tenant acr should be present
 * Downcased to match the realm case-insensitive comparison requirements
 * @param idTokenClaims
 * @returns
 */ function getTenantIdFromIdTokenClaims(idTokenClaims) {
    if (idTokenClaims) {
        const tenantId = idTokenClaims.tid || idTokenClaims.tfp || idTokenClaims.acr;
        return tenantId || null;
    }
    return null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Lm0d":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProtocolMode", ()=>ProtocolMode);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Protocol modes supported by MSAL.
 */ const ProtocolMode = {
    AAD: "AAD",
    OIDC: "OIDC"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fODH9":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EndpointMetadata", ()=>EndpointMetadata);
parcelHelpers.export(exports, "InstanceDiscoveryMetadata", ()=>InstanceDiscoveryMetadata);
parcelHelpers.export(exports, "InstanceDiscoveryMetadataAliases", ()=>InstanceDiscoveryMetadataAliases);
parcelHelpers.export(exports, "getAliasesFromMetadata", ()=>getAliasesFromMetadata);
parcelHelpers.export(exports, "getAliasesFromStaticSources", ()=>getAliasesFromStaticSources);
parcelHelpers.export(exports, "getCloudDiscoveryMetadataFromHardcodedValues", ()=>getCloudDiscoveryMetadataFromHardcodedValues);
parcelHelpers.export(exports, "getCloudDiscoveryMetadataFromNetworkResponse", ()=>getCloudDiscoveryMetadataFromNetworkResponse);
parcelHelpers.export(exports, "rawMetdataJSON", ()=>rawMetdataJSON);
var _urlStringMjs = require("../url/UrlString.mjs");
var _constantsMjs = require("../utils/Constants.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const rawMetdataJSON = {
    endpointMetadata: {
        "login.microsoftonline.com": {
            token_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/token",
            jwks_uri: "https://login.microsoftonline.com/{tenantid}/discovery/v2.0/keys",
            issuer: "https://login.microsoftonline.com/{tenantid}/v2.0",
            authorization_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize",
            end_session_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/logout"
        },
        "login.chinacloudapi.cn": {
            token_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/token",
            jwks_uri: "https://login.chinacloudapi.cn/{tenantid}/discovery/v2.0/keys",
            issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0",
            authorization_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/authorize",
            end_session_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/logout"
        },
        "login.microsoftonline.us": {
            token_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/token",
            jwks_uri: "https://login.microsoftonline.us/{tenantid}/discovery/v2.0/keys",
            issuer: "https://login.microsoftonline.us/{tenantid}/v2.0",
            authorization_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/authorize",
            end_session_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/logout"
        }
    },
    instanceDiscoveryMetadata: {
        tenant_discovery_endpoint: "https://{canonicalAuthority}/v2.0/.well-known/openid-configuration",
        metadata: [
            {
                preferred_network: "login.microsoftonline.com",
                preferred_cache: "login.windows.net",
                aliases: [
                    "login.microsoftonline.com",
                    "login.windows.net",
                    "login.microsoft.com",
                    "sts.windows.net"
                ]
            },
            {
                preferred_network: "login.partner.microsoftonline.cn",
                preferred_cache: "login.partner.microsoftonline.cn",
                aliases: [
                    "login.partner.microsoftonline.cn",
                    "login.chinacloudapi.cn"
                ]
            },
            {
                preferred_network: "login.microsoftonline.de",
                preferred_cache: "login.microsoftonline.de",
                aliases: [
                    "login.microsoftonline.de"
                ]
            },
            {
                preferred_network: "login.microsoftonline.us",
                preferred_cache: "login.microsoftonline.us",
                aliases: [
                    "login.microsoftonline.us",
                    "login.usgovcloudapi.net"
                ]
            },
            {
                preferred_network: "login-us.microsoftonline.com",
                preferred_cache: "login-us.microsoftonline.com",
                aliases: [
                    "login-us.microsoftonline.com"
                ]
            }
        ]
    }
};
const EndpointMetadata = rawMetdataJSON.endpointMetadata;
const InstanceDiscoveryMetadata = rawMetdataJSON.instanceDiscoveryMetadata;
const InstanceDiscoveryMetadataAliases = new Set();
InstanceDiscoveryMetadata.metadata.forEach((metadataEntry)=>{
    metadataEntry.aliases.forEach((alias)=>{
        InstanceDiscoveryMetadataAliases.add(alias);
    });
});
/**
 * Attempts to get an aliases array from the static authority metadata sources based on the canonical authority host
 * @param staticAuthorityOptions
 * @param logger
 * @returns
 */ function getAliasesFromStaticSources(staticAuthorityOptions, logger) {
    let staticAliases;
    const canonicalAuthority = staticAuthorityOptions.canonicalAuthority;
    if (canonicalAuthority) {
        const authorityHost = new (0, _urlStringMjs.UrlString)(canonicalAuthority).getUrlComponents().HostNameAndPort;
        staticAliases = getAliasesFromMetadata(authorityHost, staticAuthorityOptions.cloudDiscoveryMetadata?.metadata, (0, _constantsMjs.AuthorityMetadataSource).CONFIG, logger) || getAliasesFromMetadata(authorityHost, InstanceDiscoveryMetadata.metadata, (0, _constantsMjs.AuthorityMetadataSource).HARDCODED_VALUES, logger) || staticAuthorityOptions.knownAuthorities;
    }
    return staticAliases || [];
}
/**
 * Returns aliases for from the raw cloud discovery metadata passed in
 * @param authorityHost
 * @param rawCloudDiscoveryMetadata
 * @returns
 */ function getAliasesFromMetadata(authorityHost, cloudDiscoveryMetadata, source, logger) {
    logger?.trace(`getAliasesFromMetadata called with source: ${source}`);
    if (authorityHost && cloudDiscoveryMetadata) {
        const metadata = getCloudDiscoveryMetadataFromNetworkResponse(cloudDiscoveryMetadata, authorityHost);
        if (metadata) {
            logger?.trace(`getAliasesFromMetadata: found cloud discovery metadata in ${source}, returning aliases`);
            return metadata.aliases;
        } else logger?.trace(`getAliasesFromMetadata: did not find cloud discovery metadata in ${source}`);
    }
    return null;
}
/**
 * Get cloud discovery metadata for common authorities
 */ function getCloudDiscoveryMetadataFromHardcodedValues(authorityHost) {
    const metadata = getCloudDiscoveryMetadataFromNetworkResponse(InstanceDiscoveryMetadata.metadata, authorityHost);
    return metadata;
}
/**
 * Searches instance discovery network response for the entry that contains the host in the aliases list
 * @param response
 * @param authority
 */ function getCloudDiscoveryMetadataFromNetworkResponse(response, authorityHost) {
    for(let i = 0; i < response.length; i++){
        const metadata = response[i];
        if (metadata.aliases.includes(authorityHost)) return metadata;
    }
    return null;
}

},{"../url/UrlString.mjs":"km6Sc","../utils/Constants.mjs":"lFItn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"km6Sc":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UrlString", ()=>UrlString);
var _clientConfigurationErrorMjs = require("../error/ClientConfigurationError.mjs");
var _stringUtilsMjs = require("../utils/StringUtils.mjs");
var _constantsMjs = require("../utils/Constants.mjs");
var _urlUtilsMjs = require("../utils/UrlUtils.mjs");
var _clientConfigurationErrorCodesMjs = require("../error/ClientConfigurationErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Url object class which can perform various transformations on url strings.
 */ class UrlString {
    get urlString() {
        return this._urlString;
    }
    constructor(url){
        this._urlString = url;
        if (!this._urlString) // Throws error if url is empty
        throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.urlEmptyError));
        if (!url.includes("#")) this._urlString = UrlString.canonicalizeUri(url);
    }
    /**
     * Ensure urls are lower case and end with a / character.
     * @param url
     */ static canonicalizeUri(url) {
        if (url) {
            let lowerCaseUrl = url.toLowerCase();
            if ((0, _stringUtilsMjs.StringUtils).endsWith(lowerCaseUrl, "?")) lowerCaseUrl = lowerCaseUrl.slice(0, -1);
            else if ((0, _stringUtilsMjs.StringUtils).endsWith(lowerCaseUrl, "?/")) lowerCaseUrl = lowerCaseUrl.slice(0, -2);
            if (!(0, _stringUtilsMjs.StringUtils).endsWith(lowerCaseUrl, "/")) lowerCaseUrl += "/";
            return lowerCaseUrl;
        }
        return url;
    }
    /**
     * Throws if urlString passed is not a valid authority URI string.
     */ validateAsUri() {
        // Attempts to parse url for uri components
        let components;
        try {
            components = this.getUrlComponents();
        } catch (e) {
            throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.urlParseError));
        }
        // Throw error if URI or path segments are not parseable.
        if (!components.HostNameAndPort || !components.PathSegments) throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.urlParseError));
        // Throw error if uri is insecure.
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.authorityUriInsecure));
    }
    /**
     * Given a url and a query string return the url with provided query string appended
     * @param url
     * @param queryString
     */ static appendQueryString(url, queryString) {
        if (!queryString) return url;
        return url.indexOf("?") < 0 ? `${url}?${queryString}` : `${url}&${queryString}`;
    }
    /**
     * Returns a url with the hash removed
     * @param url
     */ static removeHashFromUrl(url) {
        return UrlString.canonicalizeUri(url.split("#")[0]);
    }
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */ replaceTenantPath(tenantId) {
        const urlObject = this.getUrlComponents();
        const pathArray = urlObject.PathSegments;
        if (tenantId && pathArray.length !== 0 && (pathArray[0] === (0, _constantsMjs.AADAuthorityConstants).COMMON || pathArray[0] === (0, _constantsMjs.AADAuthorityConstants).ORGANIZATIONS)) pathArray[0] = tenantId;
        return UrlString.constructAuthorityUriFromObject(urlObject);
    }
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */ getUrlComponents() {
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        const regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        // If url string does not match regEx, we throw an error
        const match = this.urlString.match(regEx);
        if (!match) throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.urlParseError));
        // Url component object
        const urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5],
            QueryString: match[7]
        };
        let pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter((val)=>val && val.length > 0); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        if (urlComponents.QueryString && urlComponents.QueryString.endsWith("/")) urlComponents.QueryString = urlComponents.QueryString.substring(0, urlComponents.QueryString.length - 1);
        return urlComponents;
    }
    static getDomainFromUrl(url) {
        const regEx = RegExp("^([^:/?#]+://)?([^/?#]*)");
        const match = url.match(regEx);
        if (!match) throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.urlParseError));
        return match[2];
    }
    static getAbsoluteUrl(relativeUrl, baseUrl) {
        if (relativeUrl[0] === (0, _constantsMjs.Constants).FORWARD_SLASH) {
            const url = new UrlString(baseUrl);
            const baseComponents = url.getUrlComponents();
            return baseComponents.Protocol + "//" + baseComponents.HostNameAndPort + relativeUrl;
        }
        return relativeUrl;
    }
    static constructAuthorityUriFromObject(urlObject) {
        return new UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
    }
    /**
     * Check if the hash of the URL string contains known properties
     * @deprecated This API will be removed in a future version
     */ static hashContainsKnownProperties(response) {
        return !!(0, _urlUtilsMjs.getDeserializedResponse)(response);
    }
}

},{"../error/ClientConfigurationError.mjs":"aV0KO","../utils/StringUtils.mjs":"4cOPw","../utils/Constants.mjs":"lFItn","../utils/UrlUtils.mjs":"aCoaU","../error/ClientConfigurationErrorCodes.mjs":"1N7Do","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aCoaU":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDeserializedResponse", ()=>getDeserializedResponse);
parcelHelpers.export(exports, "stripLeadingHashOrQuery", ()=>stripLeadingHashOrQuery);
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Parses hash string from given string. Returns empty string if no hash symbol is found.
 * @param hashString
 */ function stripLeadingHashOrQuery(responseString) {
    if (responseString.startsWith("#/")) return responseString.substring(2);
    else if (responseString.startsWith("#") || responseString.startsWith("?")) return responseString.substring(1);
    return responseString;
}
/**
 * Returns URL hash as server auth code response object.
 */ function getDeserializedResponse(responseString) {
    // Check if given hash is empty
    if (!responseString || responseString.indexOf("=") < 0) return null;
    try {
        // Strip the # or ? symbol if present
        const normalizedResponse = stripLeadingHashOrQuery(responseString);
        // If # symbol was not present, above will return empty string, so give original hash value
        const deserializedHash = Object.fromEntries(new URLSearchParams(normalizedResponse));
        // Check for known response properties
        if (deserializedHash.code || deserializedHash.error || deserializedHash.error_description || deserializedHash.state) return deserializedHash;
    } catch (e) {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.hashNotDeserialized));
    }
    return null;
}

},{"../error/ClientAuthError.mjs":"2qWlJ","../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j7VQQ":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NetworkManager", ()=>NetworkManager);
var _throttlingUtilsMjs = require("./ThrottlingUtils.mjs");
var _authErrorMjs = require("../error/AuthError.mjs");
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /** @internal */ class NetworkManager {
    constructor(networkClient, cacheManager){
        this.networkClient = networkClient;
        this.cacheManager = cacheManager;
    }
    /**
     * Wraps sendPostRequestAsync with necessary preflight and postflight logic
     * @param thumbprint
     * @param tokenEndpoint
     * @param options
     */ async sendPostRequest(thumbprint, tokenEndpoint, options) {
        (0, _throttlingUtilsMjs.ThrottlingUtils).preProcess(this.cacheManager, thumbprint);
        let response;
        try {
            response = await this.networkClient.sendPostRequestAsync(tokenEndpoint, options);
        } catch (e) {
            if (e instanceof (0, _authErrorMjs.AuthError)) throw e;
            else throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.networkError));
        }
        (0, _throttlingUtilsMjs.ThrottlingUtils).postProcess(this.cacheManager, thumbprint, response);
        return response;
    }
}

},{"./ThrottlingUtils.mjs":"beKsV","../error/AuthError.mjs":"8tPVA","../error/ClientAuthError.mjs":"2qWlJ","../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"beKsV":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ThrottlingUtils", ()=>ThrottlingUtils);
var _constantsMjs = require("../utils/Constants.mjs");
var _serverErrorMjs = require("../error/ServerError.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /** @internal */ class ThrottlingUtils {
    /**
     * Prepares a RequestThumbprint to be stored as a key.
     * @param thumbprint
     */ static generateThrottlingStorageKey(thumbprint) {
        return `${(0, _constantsMjs.ThrottlingConstants).THROTTLING_PREFIX}.${JSON.stringify(thumbprint)}`;
    }
    /**
     * Performs necessary throttling checks before a network request.
     * @param cacheManager
     * @param thumbprint
     */ static preProcess(cacheManager, thumbprint) {
        const key = ThrottlingUtils.generateThrottlingStorageKey(thumbprint);
        const value = cacheManager.getThrottlingCache(key);
        if (value) {
            if (value.throttleTime < Date.now()) {
                cacheManager.removeItem(key);
                return;
            }
            throw new (0, _serverErrorMjs.ServerError)(value.errorCodes?.join(" ") || (0, _constantsMjs.Constants).EMPTY_STRING, value.errorMessage, value.subError);
        }
    }
    /**
     * Performs necessary throttling checks after a network request.
     * @param cacheManager
     * @param thumbprint
     * @param response
     */ static postProcess(cacheManager, thumbprint, response) {
        if (ThrottlingUtils.checkResponseStatus(response) || ThrottlingUtils.checkResponseForRetryAfter(response)) {
            const thumbprintValue = {
                throttleTime: ThrottlingUtils.calculateThrottleTime(parseInt(response.headers[(0, _constantsMjs.HeaderNames).RETRY_AFTER])),
                error: response.body.error,
                errorCodes: response.body.error_codes,
                errorMessage: response.body.error_description,
                subError: response.body.suberror
            };
            cacheManager.setThrottlingCache(ThrottlingUtils.generateThrottlingStorageKey(thumbprint), thumbprintValue);
        }
    }
    /**
     * Checks a NetworkResponse object's status codes against 429 or 5xx
     * @param response
     */ static checkResponseStatus(response) {
        return response.status === 429 || response.status >= 500 && response.status < 600;
    }
    /**
     * Checks a NetworkResponse object's RetryAfter header
     * @param response
     */ static checkResponseForRetryAfter(response) {
        if (response.headers) return response.headers.hasOwnProperty((0, _constantsMjs.HeaderNames).RETRY_AFTER) && (response.status < 200 || response.status >= 300);
        return false;
    }
    /**
     * Calculates the Unix-time value for a throttle to expire given throttleTime in seconds.
     * @param throttleTime
     */ static calculateThrottleTime(throttleTime) {
        const time = throttleTime <= 0 ? 0 : throttleTime;
        const currentSeconds = Date.now() / 1000;
        return Math.floor(Math.min(currentSeconds + (time || (0, _constantsMjs.ThrottlingConstants).DEFAULT_THROTTLE_TIME_SECONDS), currentSeconds + (0, _constantsMjs.ThrottlingConstants).DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1000);
    }
    static removeThrottle(cacheManager, clientId, request, homeAccountIdentifier) {
        const thumbprint = {
            clientId: clientId,
            authority: request.authority,
            scopes: request.scopes,
            homeAccountIdentifier: homeAccountIdentifier,
            claims: request.claims,
            authenticationScheme: request.authenticationScheme,
            resourceRequestMethod: request.resourceRequestMethod,
            resourceRequestUri: request.resourceRequestUri,
            shrClaims: request.shrClaims,
            sshKid: request.sshKid
        };
        const key = this.generateThrottlingStorageKey(thumbprint);
        cacheManager.removeItem(key);
    }
}

},{"../utils/Constants.mjs":"lFItn","../error/ServerError.mjs":"l3z3W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l3z3W":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ServerError", ()=>ServerError);
var _authErrorMjs = require("./AuthError.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */ class ServerError extends (0, _authErrorMjs.AuthError) {
    constructor(errorCode, errorMessage, subError){
        super(errorCode, errorMessage, subError);
        this.name = "ServerError";
        Object.setPrototypeOf(this, ServerError.prototype);
    }
}

},{"./AuthError.mjs":"8tPVA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c0gGV":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CcsCredentialType", ()=>CcsCredentialType);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const CcsCredentialType = {
    HOME_ACCOUNT_ID: "home_account_id",
    UPN: "UPN"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ilhWa":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RequestParameterBuilder", ()=>RequestParameterBuilder);
var _constantsMjs = require("../utils/Constants.mjs");
var _aadserverParamKeysMjs = require("../constants/AADServerParamKeys.mjs");
var _scopeSetMjs = require("./ScopeSet.mjs");
var _clientConfigurationErrorMjs = require("../error/ClientConfigurationError.mjs");
var _requestValidatorMjs = require("./RequestValidator.mjs");
var _clientConfigurationErrorCodesMjs = require("../error/ClientConfigurationErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /** @internal */ class RequestParameterBuilder {
    constructor(){
        this.parameters = new Map();
    }
    /**
     * add response_type = code
     */ addResponseTypeCode() {
        this.parameters.set((0, _aadserverParamKeysMjs.RESPONSE_TYPE), encodeURIComponent((0, _constantsMjs.Constants).CODE_RESPONSE_TYPE));
    }
    /**
     * add response_type = token id_token
     */ addResponseTypeForTokenAndIdToken() {
        this.parameters.set((0, _aadserverParamKeysMjs.RESPONSE_TYPE), encodeURIComponent(`${(0, _constantsMjs.Constants).TOKEN_RESPONSE_TYPE} ${(0, _constantsMjs.Constants).ID_TOKEN_RESPONSE_TYPE}`));
    }
    /**
     * add response_mode. defaults to query.
     * @param responseMode
     */ addResponseMode(responseMode) {
        this.parameters.set((0, _aadserverParamKeysMjs.RESPONSE_MODE), encodeURIComponent(responseMode ? responseMode : (0, _constantsMjs.ResponseMode).QUERY));
    }
    /**
     * Add flag to indicate STS should attempt to use WAM if available
     */ addNativeBroker() {
        this.parameters.set((0, _aadserverParamKeysMjs.NATIVE_BROKER), encodeURIComponent("1"));
    }
    /**
     * add scopes. set addOidcScopes to false to prevent default scopes in non-user scenarios
     * @param scopeSet
     * @param addOidcScopes
     */ addScopes(scopes, addOidcScopes = true, defaultScopes = (0, _constantsMjs.OIDC_DEFAULT_SCOPES)) {
        // Always add openid to the scopes when adding OIDC scopes
        if (addOidcScopes && !defaultScopes.includes("openid") && !scopes.includes("openid")) defaultScopes.push("openid");
        const requestScopes = addOidcScopes ? [
            ...scopes || [],
            ...defaultScopes
        ] : scopes || [];
        const scopeSet = new (0, _scopeSetMjs.ScopeSet)(requestScopes);
        this.parameters.set((0, _aadserverParamKeysMjs.SCOPE), encodeURIComponent(scopeSet.printScopes()));
    }
    /**
     * add clientId
     * @param clientId
     */ addClientId(clientId) {
        this.parameters.set((0, _aadserverParamKeysMjs.CLIENT_ID), encodeURIComponent(clientId));
    }
    /**
     * add redirect_uri
     * @param redirectUri
     */ addRedirectUri(redirectUri) {
        (0, _requestValidatorMjs.RequestValidator).validateRedirectUri(redirectUri);
        this.parameters.set((0, _aadserverParamKeysMjs.REDIRECT_URI), encodeURIComponent(redirectUri));
    }
    /**
     * add post logout redirectUri
     * @param redirectUri
     */ addPostLogoutRedirectUri(redirectUri) {
        (0, _requestValidatorMjs.RequestValidator).validateRedirectUri(redirectUri);
        this.parameters.set((0, _aadserverParamKeysMjs.POST_LOGOUT_URI), encodeURIComponent(redirectUri));
    }
    /**
     * add id_token_hint to logout request
     * @param idTokenHint
     */ addIdTokenHint(idTokenHint) {
        this.parameters.set((0, _aadserverParamKeysMjs.ID_TOKEN_HINT), encodeURIComponent(idTokenHint));
    }
    /**
     * add domain_hint
     * @param domainHint
     */ addDomainHint(domainHint) {
        this.parameters.set((0, _aadserverParamKeysMjs.DOMAIN_HINT), encodeURIComponent(domainHint));
    }
    /**
     * add login_hint
     * @param loginHint
     */ addLoginHint(loginHint) {
        this.parameters.set((0, _aadserverParamKeysMjs.LOGIN_HINT), encodeURIComponent(loginHint));
    }
    /**
     * Adds the CCS (Cache Credential Service) query parameter for login_hint
     * @param loginHint
     */ addCcsUpn(loginHint) {
        this.parameters.set((0, _constantsMjs.HeaderNames).CCS_HEADER, encodeURIComponent(`UPN:${loginHint}`));
    }
    /**
     * Adds the CCS (Cache Credential Service) query parameter for account object
     * @param loginHint
     */ addCcsOid(clientInfo) {
        this.parameters.set((0, _constantsMjs.HeaderNames).CCS_HEADER, encodeURIComponent(`Oid:${clientInfo.uid}@${clientInfo.utid}`));
    }
    /**
     * add sid
     * @param sid
     */ addSid(sid) {
        this.parameters.set((0, _aadserverParamKeysMjs.SID), encodeURIComponent(sid));
    }
    /**
     * add claims
     * @param claims
     */ addClaims(claims, clientCapabilities) {
        const mergedClaims = this.addClientCapabilitiesToClaims(claims, clientCapabilities);
        (0, _requestValidatorMjs.RequestValidator).validateClaims(mergedClaims);
        this.parameters.set((0, _aadserverParamKeysMjs.CLAIMS), encodeURIComponent(mergedClaims));
    }
    /**
     * add correlationId
     * @param correlationId
     */ addCorrelationId(correlationId) {
        this.parameters.set((0, _aadserverParamKeysMjs.CLIENT_REQUEST_ID), encodeURIComponent(correlationId));
    }
    /**
     * add library info query params
     * @param libraryInfo
     */ addLibraryInfo(libraryInfo) {
        // Telemetry Info
        this.parameters.set((0, _aadserverParamKeysMjs.X_CLIENT_SKU), libraryInfo.sku);
        this.parameters.set((0, _aadserverParamKeysMjs.X_CLIENT_VER), libraryInfo.version);
        if (libraryInfo.os) this.parameters.set((0, _aadserverParamKeysMjs.X_CLIENT_OS), libraryInfo.os);
        if (libraryInfo.cpu) this.parameters.set((0, _aadserverParamKeysMjs.X_CLIENT_CPU), libraryInfo.cpu);
    }
    /**
     * Add client telemetry parameters
     * @param appTelemetry
     */ addApplicationTelemetry(appTelemetry) {
        if (appTelemetry?.appName) this.parameters.set((0, _aadserverParamKeysMjs.X_APP_NAME), appTelemetry.appName);
        if (appTelemetry?.appVersion) this.parameters.set((0, _aadserverParamKeysMjs.X_APP_VER), appTelemetry.appVersion);
    }
    /**
     * add prompt
     * @param prompt
     */ addPrompt(prompt) {
        (0, _requestValidatorMjs.RequestValidator).validatePrompt(prompt);
        this.parameters.set(`${(0, _aadserverParamKeysMjs.PROMPT)}`, encodeURIComponent(prompt));
    }
    /**
     * add state
     * @param state
     */ addState(state) {
        if (state) this.parameters.set((0, _aadserverParamKeysMjs.STATE), encodeURIComponent(state));
    }
    /**
     * add nonce
     * @param nonce
     */ addNonce(nonce) {
        this.parameters.set((0, _aadserverParamKeysMjs.NONCE), encodeURIComponent(nonce));
    }
    /**
     * add code_challenge and code_challenge_method
     * - throw if either of them are not passed
     * @param codeChallenge
     * @param codeChallengeMethod
     */ addCodeChallengeParams(codeChallenge, codeChallengeMethod) {
        (0, _requestValidatorMjs.RequestValidator).validateCodeChallengeParams(codeChallenge, codeChallengeMethod);
        if (codeChallenge && codeChallengeMethod) {
            this.parameters.set((0, _aadserverParamKeysMjs.CODE_CHALLENGE), encodeURIComponent(codeChallenge));
            this.parameters.set((0, _aadserverParamKeysMjs.CODE_CHALLENGE_METHOD), encodeURIComponent(codeChallengeMethod));
        } else throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.pkceParamsMissing));
    }
    /**
     * add the `authorization_code` passed by the user to exchange for a token
     * @param code
     */ addAuthorizationCode(code) {
        this.parameters.set((0, _aadserverParamKeysMjs.CODE), encodeURIComponent(code));
    }
    /**
     * add the `authorization_code` passed by the user to exchange for a token
     * @param code
     */ addDeviceCode(code) {
        this.parameters.set((0, _aadserverParamKeysMjs.DEVICE_CODE), encodeURIComponent(code));
    }
    /**
     * add the `refreshToken` passed by the user
     * @param refreshToken
     */ addRefreshToken(refreshToken) {
        this.parameters.set((0, _aadserverParamKeysMjs.REFRESH_TOKEN), encodeURIComponent(refreshToken));
    }
    /**
     * add the `code_verifier` passed by the user to exchange for a token
     * @param codeVerifier
     */ addCodeVerifier(codeVerifier) {
        this.parameters.set((0, _aadserverParamKeysMjs.CODE_VERIFIER), encodeURIComponent(codeVerifier));
    }
    /**
     * add client_secret
     * @param clientSecret
     */ addClientSecret(clientSecret) {
        this.parameters.set((0, _aadserverParamKeysMjs.CLIENT_SECRET), encodeURIComponent(clientSecret));
    }
    /**
     * add clientAssertion for confidential client flows
     * @param clientAssertion
     */ addClientAssertion(clientAssertion) {
        if (clientAssertion) this.parameters.set((0, _aadserverParamKeysMjs.CLIENT_ASSERTION), encodeURIComponent(clientAssertion));
    }
    /**
     * add clientAssertionType for confidential client flows
     * @param clientAssertionType
     */ addClientAssertionType(clientAssertionType) {
        if (clientAssertionType) this.parameters.set((0, _aadserverParamKeysMjs.CLIENT_ASSERTION_TYPE), encodeURIComponent(clientAssertionType));
    }
    /**
     * add OBO assertion for confidential client flows
     * @param clientAssertion
     */ addOboAssertion(oboAssertion) {
        this.parameters.set((0, _aadserverParamKeysMjs.OBO_ASSERTION), encodeURIComponent(oboAssertion));
    }
    /**
     * add grant type
     * @param grantType
     */ addRequestTokenUse(tokenUse) {
        this.parameters.set((0, _aadserverParamKeysMjs.REQUESTED_TOKEN_USE), encodeURIComponent(tokenUse));
    }
    /**
     * add grant type
     * @param grantType
     */ addGrantType(grantType) {
        this.parameters.set((0, _aadserverParamKeysMjs.GRANT_TYPE), encodeURIComponent(grantType));
    }
    /**
     * add client info
     *
     */ addClientInfo() {
        this.parameters.set((0, _constantsMjs.CLIENT_INFO), "1");
    }
    /**
     * add extraQueryParams
     * @param eQParams
     */ addExtraQueryParameters(eQParams) {
        const sanitizedEQParams = (0, _requestValidatorMjs.RequestValidator).sanitizeEQParams(eQParams, this.parameters);
        Object.keys(sanitizedEQParams).forEach((key)=>{
            this.parameters.set(key, eQParams[key]);
        });
    }
    addClientCapabilitiesToClaims(claims, clientCapabilities) {
        let mergedClaims;
        // Parse provided claims into JSON object or initialize empty object
        if (!claims) mergedClaims = {};
        else try {
            mergedClaims = JSON.parse(claims);
        } catch (e) {
            throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.invalidClaims));
        }
        if (clientCapabilities && clientCapabilities.length > 0) {
            if (!mergedClaims.hasOwnProperty((0, _constantsMjs.ClaimsRequestKeys).ACCESS_TOKEN)) // Add access_token key to claims object
            mergedClaims[(0, _constantsMjs.ClaimsRequestKeys).ACCESS_TOKEN] = {};
            // Add xms_cc claim with provided clientCapabilities to access_token key
            mergedClaims[(0, _constantsMjs.ClaimsRequestKeys).ACCESS_TOKEN][(0, _constantsMjs.ClaimsRequestKeys).XMS_CC] = {
                values: clientCapabilities
            };
        }
        return JSON.stringify(mergedClaims);
    }
    /**
     * adds `username` for Password Grant flow
     * @param username
     */ addUsername(username) {
        this.parameters.set((0, _constantsMjs.PasswordGrantConstants).username, encodeURIComponent(username));
    }
    /**
     * adds `password` for Password Grant flow
     * @param password
     */ addPassword(password) {
        this.parameters.set((0, _constantsMjs.PasswordGrantConstants).password, encodeURIComponent(password));
    }
    /**
     * add pop_jwk to query params
     * @param cnfString
     */ addPopToken(cnfString) {
        if (cnfString) {
            this.parameters.set((0, _aadserverParamKeysMjs.TOKEN_TYPE), (0, _constantsMjs.AuthenticationScheme).POP);
            this.parameters.set((0, _aadserverParamKeysMjs.REQ_CNF), encodeURIComponent(cnfString));
        }
    }
    /**
     * add SSH JWK and key ID to query params
     */ addSshJwk(sshJwkString) {
        if (sshJwkString) {
            this.parameters.set((0, _aadserverParamKeysMjs.TOKEN_TYPE), (0, _constantsMjs.AuthenticationScheme).SSH);
            this.parameters.set((0, _aadserverParamKeysMjs.REQ_CNF), encodeURIComponent(sshJwkString));
        }
    }
    /**
     * add server telemetry fields
     * @param serverTelemetryManager
     */ addServerTelemetry(serverTelemetryManager) {
        this.parameters.set((0, _aadserverParamKeysMjs.X_CLIENT_CURR_TELEM), serverTelemetryManager.generateCurrentRequestHeaderValue());
        this.parameters.set((0, _aadserverParamKeysMjs.X_CLIENT_LAST_TELEM), serverTelemetryManager.generateLastRequestHeaderValue());
    }
    /**
     * Adds parameter that indicates to the server that throttling is supported
     */ addThrottling() {
        this.parameters.set((0, _aadserverParamKeysMjs.X_MS_LIB_CAPABILITY), (0, _constantsMjs.ThrottlingConstants).X_MS_LIB_CAPABILITY_VALUE);
    }
    /**
     * Adds logout_hint parameter for "silent" logout which prevent server account picker
     */ addLogoutHint(logoutHint) {
        this.parameters.set((0, _aadserverParamKeysMjs.LOGOUT_HINT), encodeURIComponent(logoutHint));
    }
    /**
     * Utility to create a URL from the params map
     */ createQueryString() {
        const queryParameterArray = new Array();
        this.parameters.forEach((value, key)=>{
            queryParameterArray.push(`${key}=${value}`);
        });
        return queryParameterArray.join("&");
    }
}

},{"../utils/Constants.mjs":"lFItn","../constants/AADServerParamKeys.mjs":"9MeBU","./ScopeSet.mjs":"3j7iu","../error/ClientConfigurationError.mjs":"aV0KO","./RequestValidator.mjs":"jAN1x","../error/ClientConfigurationErrorCodes.mjs":"1N7Do","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9MeBU":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ACCESS_TOKEN", ()=>ACCESS_TOKEN);
parcelHelpers.export(exports, "CCS_HEADER", ()=>CCS_HEADER);
parcelHelpers.export(exports, "CLAIMS", ()=>CLAIMS);
parcelHelpers.export(exports, "CLIENT_ASSERTION", ()=>CLIENT_ASSERTION);
parcelHelpers.export(exports, "CLIENT_ASSERTION_TYPE", ()=>CLIENT_ASSERTION_TYPE);
parcelHelpers.export(exports, "CLIENT_ID", ()=>CLIENT_ID);
parcelHelpers.export(exports, "CLIENT_INFO", ()=>CLIENT_INFO);
parcelHelpers.export(exports, "CLIENT_REQUEST_ID", ()=>CLIENT_REQUEST_ID);
parcelHelpers.export(exports, "CLIENT_SECRET", ()=>CLIENT_SECRET);
parcelHelpers.export(exports, "CODE", ()=>CODE);
parcelHelpers.export(exports, "CODE_CHALLENGE", ()=>CODE_CHALLENGE);
parcelHelpers.export(exports, "CODE_CHALLENGE_METHOD", ()=>CODE_CHALLENGE_METHOD);
parcelHelpers.export(exports, "CODE_VERIFIER", ()=>CODE_VERIFIER);
parcelHelpers.export(exports, "DEVICE_CODE", ()=>DEVICE_CODE);
parcelHelpers.export(exports, "DOMAIN_HINT", ()=>DOMAIN_HINT);
parcelHelpers.export(exports, "ERROR", ()=>ERROR);
parcelHelpers.export(exports, "ERROR_DESCRIPTION", ()=>ERROR_DESCRIPTION);
parcelHelpers.export(exports, "EXPIRES_IN", ()=>EXPIRES_IN);
parcelHelpers.export(exports, "FOCI", ()=>FOCI);
parcelHelpers.export(exports, "GRANT_TYPE", ()=>GRANT_TYPE);
parcelHelpers.export(exports, "ID_TOKEN", ()=>ID_TOKEN);
parcelHelpers.export(exports, "ID_TOKEN_HINT", ()=>ID_TOKEN_HINT);
parcelHelpers.export(exports, "LOGIN_HINT", ()=>LOGIN_HINT);
parcelHelpers.export(exports, "LOGOUT_HINT", ()=>LOGOUT_HINT);
parcelHelpers.export(exports, "NATIVE_BROKER", ()=>NATIVE_BROKER);
parcelHelpers.export(exports, "NONCE", ()=>NONCE);
parcelHelpers.export(exports, "OBO_ASSERTION", ()=>OBO_ASSERTION);
parcelHelpers.export(exports, "ON_BEHALF_OF", ()=>ON_BEHALF_OF);
parcelHelpers.export(exports, "POST_LOGOUT_URI", ()=>POST_LOGOUT_URI);
parcelHelpers.export(exports, "PROMPT", ()=>PROMPT);
parcelHelpers.export(exports, "REDIRECT_URI", ()=>REDIRECT_URI);
parcelHelpers.export(exports, "REFRESH_TOKEN", ()=>REFRESH_TOKEN);
parcelHelpers.export(exports, "REFRESH_TOKEN_EXPIRES_IN", ()=>REFRESH_TOKEN_EXPIRES_IN);
parcelHelpers.export(exports, "REQUESTED_TOKEN_USE", ()=>REQUESTED_TOKEN_USE);
parcelHelpers.export(exports, "REQ_CNF", ()=>REQ_CNF);
parcelHelpers.export(exports, "RESPONSE_MODE", ()=>RESPONSE_MODE);
parcelHelpers.export(exports, "RESPONSE_TYPE", ()=>RESPONSE_TYPE);
parcelHelpers.export(exports, "RETURN_SPA_CODE", ()=>RETURN_SPA_CODE);
parcelHelpers.export(exports, "SCOPE", ()=>SCOPE);
parcelHelpers.export(exports, "SESSION_STATE", ()=>SESSION_STATE);
parcelHelpers.export(exports, "SID", ()=>SID);
parcelHelpers.export(exports, "STATE", ()=>STATE);
parcelHelpers.export(exports, "TOKEN_TYPE", ()=>TOKEN_TYPE);
parcelHelpers.export(exports, "X_APP_NAME", ()=>X_APP_NAME);
parcelHelpers.export(exports, "X_APP_VER", ()=>X_APP_VER);
parcelHelpers.export(exports, "X_CLIENT_CPU", ()=>X_CLIENT_CPU);
parcelHelpers.export(exports, "X_CLIENT_CURR_TELEM", ()=>X_CLIENT_CURR_TELEM);
parcelHelpers.export(exports, "X_CLIENT_LAST_TELEM", ()=>X_CLIENT_LAST_TELEM);
parcelHelpers.export(exports, "X_CLIENT_OS", ()=>X_CLIENT_OS);
parcelHelpers.export(exports, "X_CLIENT_SKU", ()=>X_CLIENT_SKU);
parcelHelpers.export(exports, "X_CLIENT_VER", ()=>X_CLIENT_VER);
parcelHelpers.export(exports, "X_MS_LIB_CAPABILITY", ()=>X_MS_LIB_CAPABILITY);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const CLIENT_ID = "client_id";
const REDIRECT_URI = "redirect_uri";
const RESPONSE_TYPE = "response_type";
const RESPONSE_MODE = "response_mode";
const GRANT_TYPE = "grant_type";
const CLAIMS = "claims";
const SCOPE = "scope";
const ERROR = "error";
const ERROR_DESCRIPTION = "error_description";
const ACCESS_TOKEN = "access_token";
const ID_TOKEN = "id_token";
const REFRESH_TOKEN = "refresh_token";
const EXPIRES_IN = "expires_in";
const REFRESH_TOKEN_EXPIRES_IN = "refresh_token_expires_in";
const STATE = "state";
const NONCE = "nonce";
const PROMPT = "prompt";
const SESSION_STATE = "session_state";
const CLIENT_INFO = "client_info";
const CODE = "code";
const CODE_CHALLENGE = "code_challenge";
const CODE_CHALLENGE_METHOD = "code_challenge_method";
const CODE_VERIFIER = "code_verifier";
const CLIENT_REQUEST_ID = "client-request-id";
const X_CLIENT_SKU = "x-client-SKU";
const X_CLIENT_VER = "x-client-VER";
const X_CLIENT_OS = "x-client-OS";
const X_CLIENT_CPU = "x-client-CPU";
const X_CLIENT_CURR_TELEM = "x-client-current-telemetry";
const X_CLIENT_LAST_TELEM = "x-client-last-telemetry";
const X_MS_LIB_CAPABILITY = "x-ms-lib-capability";
const X_APP_NAME = "x-app-name";
const X_APP_VER = "x-app-ver";
const POST_LOGOUT_URI = "post_logout_redirect_uri";
const ID_TOKEN_HINT = "id_token_hint";
const DEVICE_CODE = "device_code";
const CLIENT_SECRET = "client_secret";
const CLIENT_ASSERTION = "client_assertion";
const CLIENT_ASSERTION_TYPE = "client_assertion_type";
const TOKEN_TYPE = "token_type";
const REQ_CNF = "req_cnf";
const OBO_ASSERTION = "assertion";
const REQUESTED_TOKEN_USE = "requested_token_use";
const ON_BEHALF_OF = "on_behalf_of";
const FOCI = "foci";
const CCS_HEADER = "X-AnchorMailbox";
const RETURN_SPA_CODE = "return_spa_code";
const NATIVE_BROKER = "nativebroker";
const LOGOUT_HINT = "logout_hint";
const SID = "sid";
const LOGIN_HINT = "login_hint";
const DOMAIN_HINT = "domain_hint";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jAN1x":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RequestValidator", ()=>RequestValidator);
var _clientConfigurationErrorMjs = require("../error/ClientConfigurationError.mjs");
var _constantsMjs = require("../utils/Constants.mjs");
var _clientConfigurationErrorCodesMjs = require("../error/ClientConfigurationErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Validates server consumable params from the "request" objects
 */ class RequestValidator {
    /**
     * Utility to check if the `redirectUri` in the request is a non-null value
     * @param redirectUri
     */ static validateRedirectUri(redirectUri) {
        if (!redirectUri) throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.redirectUriEmpty));
    }
    /**
     * Utility to validate prompt sent by the user in the request
     * @param prompt
     */ static validatePrompt(prompt) {
        const promptValues = [];
        for(const value in 0, _constantsMjs.PromptValue)promptValues.push((0, _constantsMjs.PromptValue)[value]);
        if (promptValues.indexOf(prompt) < 0) throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.invalidPromptValue));
    }
    static validateClaims(claims) {
        try {
            JSON.parse(claims);
        } catch (e) {
            throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.invalidClaims));
        }
    }
    /**
     * Utility to validate code_challenge and code_challenge_method
     * @param codeChallenge
     * @param codeChallengeMethod
     */ static validateCodeChallengeParams(codeChallenge, codeChallengeMethod) {
        if (!codeChallenge || !codeChallengeMethod) throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.pkceParamsMissing));
        else this.validateCodeChallengeMethod(codeChallengeMethod);
    }
    /**
     * Utility to validate code_challenge_method
     * @param codeChallengeMethod
     */ static validateCodeChallengeMethod(codeChallengeMethod) {
        if ([
            (0, _constantsMjs.CodeChallengeMethodValues).PLAIN,
            (0, _constantsMjs.CodeChallengeMethodValues).S256
        ].indexOf(codeChallengeMethod) < 0) throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.invalidCodeChallengeMethod));
    }
    /**
     * Removes unnecessary, duplicate, and empty string query parameters from extraQueryParameters
     * @param request
     */ static sanitizeEQParams(eQParams, queryParams) {
        if (!eQParams) return {};
        // Remove any query parameters already included in SSO params
        queryParams.forEach((_value, key)=>{
            if (eQParams[key]) delete eQParams[key];
        });
        // remove empty string parameters
        return Object.fromEntries(Object.entries(eQParams).filter((kv)=>kv[1] !== ""));
    }
}

},{"../error/ClientConfigurationError.mjs":"aV0KO","../utils/Constants.mjs":"lFItn","../error/ClientConfigurationErrorCodes.mjs":"1N7Do","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adNgV":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDiscoveredInstance", ()=>createDiscoveredInstance);
var _authorityMjs = require("./Authority.mjs");
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _performanceEventMjs = require("../telemetry/performance/PerformanceEvent.mjs");
var _functionWrappersMjs = require("../utils/FunctionWrappers.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Create an authority object of the correct type based on the url
 * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
 *
 * Also performs endpoint discovery.
 *
 * @param authorityUri
 * @param networkClient
 * @param protocolMode
 * @internal
 */ async function createDiscoveredInstance(authorityUri, networkClient, cacheManager, authorityOptions, logger, correlationId, performanceClient) {
    performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).AuthorityFactoryCreateDiscoveredInstance, correlationId);
    const authorityUriFinal = (0, _authorityMjs.Authority).transformCIAMAuthority((0, _authorityMjs.formatAuthorityUri)(authorityUri));
    // Initialize authority and perform discovery endpoint check.
    const acquireTokenAuthority = new (0, _authorityMjs.Authority)(authorityUriFinal, networkClient, cacheManager, authorityOptions, logger, correlationId, performanceClient);
    try {
        await (0, _functionWrappersMjs.invokeAsync)(acquireTokenAuthority.resolveEndpointsAsync.bind(acquireTokenAuthority), (0, _performanceEventMjs.PerformanceEvents).AuthorityResolveEndpointsAsync, logger, performanceClient, correlationId)();
        return acquireTokenAuthority;
    } catch (e) {
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.endpointResolutionError));
    }
}

},{"./Authority.mjs":"4lJrf","../error/ClientAuthError.mjs":"2qWlJ","../telemetry/performance/PerformanceEvent.mjs":"g49Qr","../utils/FunctionWrappers.mjs":"hcHk8","../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4lJrf":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Authority", ()=>Authority);
parcelHelpers.export(exports, "buildStaticAuthorityOptions", ()=>buildStaticAuthorityOptions);
parcelHelpers.export(exports, "formatAuthorityUri", ()=>formatAuthorityUri);
parcelHelpers.export(exports, "getTenantFromAuthorityString", ()=>getTenantFromAuthorityString);
var _authorityTypeMjs = require("./AuthorityType.mjs");
var _openIdConfigResponseMjs = require("./OpenIdConfigResponse.mjs");
var _urlStringMjs = require("../url/UrlString.mjs");
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _constantsMjs = require("../utils/Constants.mjs");
var _authorityMetadataMjs = require("./AuthorityMetadata.mjs");
var _clientConfigurationErrorMjs = require("../error/ClientConfigurationError.mjs");
var _protocolModeMjs = require("./ProtocolMode.mjs");
var _authorityOptionsMjs = require("./AuthorityOptions.mjs");
var _cloudInstanceDiscoveryResponseMjs = require("./CloudInstanceDiscoveryResponse.mjs");
var _cloudInstanceDiscoveryErrorResponseMjs = require("./CloudInstanceDiscoveryErrorResponse.mjs");
var _regionDiscoveryMjs = require("./RegionDiscovery.mjs");
var _authErrorMjs = require("../error/AuthError.mjs");
var _performanceEventMjs = require("../telemetry/performance/PerformanceEvent.mjs");
var _functionWrappersMjs = require("../utils/FunctionWrappers.mjs");
var _cacheHelpersMjs = require("../cache/utils/CacheHelpers.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
var _clientConfigurationErrorCodesMjs = require("../error/ClientConfigurationErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * The authority class validates the authority URIs used by the user, and retrieves the OpenID Configuration Data from the
 * endpoint. It will store the pertinent config data in this object for use during token calls.
 * @internal
 */ class Authority {
    constructor(authority, networkInterface, cacheManager, authorityOptions, logger, correlationId, performanceClient){
        this.canonicalAuthority = authority;
        this._canonicalAuthority.validateAsUri();
        this.networkInterface = networkInterface;
        this.cacheManager = cacheManager;
        this.authorityOptions = authorityOptions;
        this.regionDiscoveryMetadata = {
            region_used: undefined,
            region_source: undefined,
            region_outcome: undefined
        };
        this.logger = logger;
        this.performanceClient = performanceClient;
        this.correlationId = correlationId;
        this.regionDiscovery = new (0, _regionDiscoveryMjs.RegionDiscovery)(networkInterface, this.logger, this.performanceClient, this.correlationId);
    }
    /**
     * Get {@link AuthorityType}
     * @param authorityUri {@link IUri}
     * @private
     */ getAuthorityType(authorityUri) {
        // CIAM auth url pattern is being standardized as: <tenant>.ciamlogin.com
        if (authorityUri.HostNameAndPort.endsWith((0, _constantsMjs.Constants).CIAM_AUTH_URL)) return (0, _authorityTypeMjs.AuthorityType).Ciam;
        const pathSegments = authorityUri.PathSegments;
        if (pathSegments.length) switch(pathSegments[0].toLowerCase()){
            case (0, _constantsMjs.Constants).ADFS:
                return (0, _authorityTypeMjs.AuthorityType).Adfs;
            case (0, _constantsMjs.Constants).DSTS:
                return (0, _authorityTypeMjs.AuthorityType).Dsts;
        }
        return (0, _authorityTypeMjs.AuthorityType).Default;
    }
    // See above for AuthorityType
    get authorityType() {
        return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
    }
    /**
     * ProtocolMode enum representing the way endpoints are constructed.
     */ get protocolMode() {
        return this.authorityOptions.protocolMode;
    }
    /**
     * Returns authorityOptions which can be used to reinstantiate a new authority instance
     */ get options() {
        return this.authorityOptions;
    }
    /**
     * A URL that is the authority set by the developer
     */ get canonicalAuthority() {
        return this._canonicalAuthority.urlString;
    }
    /**
     * Sets canonical authority.
     */ set canonicalAuthority(url) {
        this._canonicalAuthority = new (0, _urlStringMjs.UrlString)(url);
        this._canonicalAuthority.validateAsUri();
        this._canonicalAuthorityUrlComponents = null;
    }
    /**
     * Get authority components.
     */ get canonicalAuthorityUrlComponents() {
        if (!this._canonicalAuthorityUrlComponents) this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
        return this._canonicalAuthorityUrlComponents;
    }
    /**
     * Get hostname and port i.e. login.microsoftonline.com
     */ get hostnameAndPort() {
        return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
    }
    /**
     * Get tenant for authority.
     */ get tenant() {
        return this.canonicalAuthorityUrlComponents.PathSegments[0];
    }
    /**
     * OAuth /authorize endpoint for requests
     */ get authorizationEndpoint() {
        if (this.discoveryComplete()) return this.replacePath(this.metadata.authorization_endpoint);
        else throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.endpointResolutionError));
    }
    /**
     * OAuth /token endpoint for requests
     */ get tokenEndpoint() {
        if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint);
        else throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.endpointResolutionError));
    }
    get deviceCodeEndpoint() {
        if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        else throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.endpointResolutionError));
    }
    /**
     * OAuth logout endpoint for requests
     */ get endSessionEndpoint() {
        if (this.discoveryComplete()) {
            // ROPC policies may not have end_session_endpoint set
            if (!this.metadata.end_session_endpoint) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.endSessionEndpointNotSupported));
            return this.replacePath(this.metadata.end_session_endpoint);
        } else throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.endpointResolutionError));
    }
    /**
     * OAuth issuer for requests
     */ get selfSignedJwtAudience() {
        if (this.discoveryComplete()) return this.replacePath(this.metadata.issuer);
        else throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.endpointResolutionError));
    }
    /**
     * Jwks_uri for token signing keys
     */ get jwksUri() {
        if (this.discoveryComplete()) return this.replacePath(this.metadata.jwks_uri);
        else throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.endpointResolutionError));
    }
    /**
     * Returns a flag indicating that tenant name can be replaced in authority {@link IUri}
     * @param authorityUri {@link IUri}
     * @private
     */ canReplaceTenant(authorityUri) {
        return authorityUri.PathSegments.length === 1 && !Authority.reservedTenantDomains.has(authorityUri.PathSegments[0]) && this.getAuthorityType(authorityUri) === (0, _authorityTypeMjs.AuthorityType).Default && this.protocolMode === (0, _protocolModeMjs.ProtocolMode).AAD;
    }
    /**
     * Replaces tenant in url path with current tenant. Defaults to common.
     * @param urlString
     */ replaceTenant(urlString) {
        return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
    }
    /**
     * Replaces path such as tenant or policy with the current tenant or policy.
     * @param urlString
     */ replacePath(urlString) {
        let endpoint = urlString;
        const cachedAuthorityUrl = new (0, _urlStringMjs.UrlString)(this.metadata.canonical_authority);
        const cachedAuthorityUrlComponents = cachedAuthorityUrl.getUrlComponents();
        const cachedAuthorityParts = cachedAuthorityUrlComponents.PathSegments;
        const currentAuthorityParts = this.canonicalAuthorityUrlComponents.PathSegments;
        currentAuthorityParts.forEach((currentPart, index)=>{
            let cachedPart = cachedAuthorityParts[index];
            if (index === 0 && this.canReplaceTenant(cachedAuthorityUrlComponents)) {
                const tenantId = new (0, _urlStringMjs.UrlString)(this.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
                /**
                 * Check if AAD canonical authority contains tenant domain name, for example "testdomain.onmicrosoft.com",
                 * by comparing its first path segment to the corresponding authorization endpoint path segment, which is
                 * always resolved with tenant id by OIDC.
                 */ if (cachedPart !== tenantId) {
                    this.logger.verbose(`Replacing tenant domain name ${cachedPart} with id ${tenantId}`);
                    cachedPart = tenantId;
                }
            }
            if (currentPart !== cachedPart) endpoint = endpoint.replace(`/${cachedPart}/`, `/${currentPart}/`);
        });
        return this.replaceTenant(endpoint);
    }
    /**
     * The default open id configuration endpoint for any canonical authority.
     */ get defaultOpenIdConfigurationEndpoint() {
        const canonicalAuthorityHost = this.hostnameAndPort;
        if (this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === (0, _authorityTypeMjs.AuthorityType).Adfs || this.protocolMode !== (0, _protocolModeMjs.ProtocolMode).AAD && !this.isAliasOfKnownMicrosoftAuthority(canonicalAuthorityHost)) return `${this.canonicalAuthority}.well-known/openid-configuration`;
        return `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`;
    }
    /**
     * Boolean that returns whethr or not tenant discovery has been completed.
     */ discoveryComplete() {
        return !!this.metadata;
    }
    /**
     * Perform endpoint discovery to discover aliases, preferred_cache, preferred_network
     * and the /authorize, /token and logout endpoints.
     */ async resolveEndpointsAsync() {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).AuthorityResolveEndpointsAsync, this.correlationId);
        const metadataEntity = this.getCurrentMetadataEntity();
        const cloudDiscoverySource = await (0, _functionWrappersMjs.invokeAsync)(this.updateCloudDiscoveryMetadata.bind(this), (0, _performanceEventMjs.PerformanceEvents).AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(metadataEntity);
        this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, metadataEntity.preferred_network);
        const endpointSource = await (0, _functionWrappersMjs.invokeAsync)(this.updateEndpointMetadata.bind(this), (0, _performanceEventMjs.PerformanceEvents).AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(metadataEntity);
        this.updateCachedMetadata(metadataEntity, cloudDiscoverySource, {
            source: endpointSource
        });
        this.performanceClient?.addFields({
            cloudDiscoverySource: cloudDiscoverySource,
            authorityEndpointSource: endpointSource
        }, this.correlationId);
    }
    /**
     * Returns metadata entity from cache if it exists, otherwiser returns a new metadata entity built
     * from the configured canonical authority
     * @returns
     */ getCurrentMetadataEntity() {
        let metadataEntity = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
        if (!metadataEntity) metadataEntity = {
            aliases: [],
            preferred_cache: this.hostnameAndPort,
            preferred_network: this.hostnameAndPort,
            canonical_authority: this.canonicalAuthority,
            authorization_endpoint: "",
            token_endpoint: "",
            end_session_endpoint: "",
            issuer: "",
            aliasesFromNetwork: false,
            endpointsFromNetwork: false,
            expiresAt: (0, _cacheHelpersMjs.generateAuthorityMetadataExpiresAt)(),
            jwks_uri: ""
        };
        return metadataEntity;
    }
    /**
     * Updates cached metadata based on metadata source and sets the instance's metadata
     * property to the same value
     * @param metadataEntity
     * @param cloudDiscoverySource
     * @param endpointMetadataResult
     */ updateCachedMetadata(metadataEntity, cloudDiscoverySource, endpointMetadataResult) {
        if (cloudDiscoverySource !== (0, _constantsMjs.AuthorityMetadataSource).CACHE && endpointMetadataResult?.source !== (0, _constantsMjs.AuthorityMetadataSource).CACHE) {
            // Reset the expiration time unless both values came from a successful cache lookup
            metadataEntity.expiresAt = (0, _cacheHelpersMjs.generateAuthorityMetadataExpiresAt)();
            metadataEntity.canonical_authority = this.canonicalAuthority;
        }
        const cacheKey = this.cacheManager.generateAuthorityMetadataCacheKey(metadataEntity.preferred_cache);
        this.cacheManager.setAuthorityMetadata(cacheKey, metadataEntity);
        this.metadata = metadataEntity;
    }
    /**
     * Update AuthorityMetadataEntity with new endpoints and return where the information came from
     * @param metadataEntity
     */ async updateEndpointMetadata(metadataEntity) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).AuthorityUpdateEndpointMetadata, this.correlationId);
        const localMetadata = this.updateEndpointMetadataFromLocalSources(metadataEntity);
        // Further update may be required for hardcoded metadata if regional metadata is preferred
        if (localMetadata) {
            if (localMetadata.source === (0, _constantsMjs.AuthorityMetadataSource).HARDCODED_VALUES) {
                // If the user prefers to use an azure region replace the global endpoints with regional information.
                if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
                    if (localMetadata.metadata) {
                        const hardcodedMetadata = await (0, _functionWrappersMjs.invokeAsync)(this.updateMetadataWithRegionalInformation.bind(this), (0, _performanceEventMjs.PerformanceEvents).AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(localMetadata.metadata);
                        (0, _cacheHelpersMjs.updateAuthorityEndpointMetadata)(metadataEntity, hardcodedMetadata, false);
                        metadataEntity.canonical_authority = this.canonicalAuthority;
                    }
                }
            }
            return localMetadata.source;
        }
        // Get metadata from network if local sources aren't available
        let metadata = await (0, _functionWrappersMjs.invokeAsync)(this.getEndpointMetadataFromNetwork.bind(this), (0, _performanceEventMjs.PerformanceEvents).AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
        if (metadata) {
            // If the user prefers to use an azure region replace the global endpoints with regional information.
            if (this.authorityOptions.azureRegionConfiguration?.azureRegion) metadata = await (0, _functionWrappersMjs.invokeAsync)(this.updateMetadataWithRegionalInformation.bind(this), (0, _performanceEventMjs.PerformanceEvents).AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(metadata);
            (0, _cacheHelpersMjs.updateAuthorityEndpointMetadata)(metadataEntity, metadata, true);
            return (0, _constantsMjs.AuthorityMetadataSource).NETWORK;
        } else // Metadata could not be obtained from the config, cache, network or hardcoded values
        throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.openIdConfigError), this.defaultOpenIdConfigurationEndpoint);
    }
    /**
     * Updates endpoint metadata from local sources and returns where the information was retrieved from and the metadata config
     * response if the source is hardcoded metadata
     * @param metadataEntity
     * @returns
     */ updateEndpointMetadataFromLocalSources(metadataEntity) {
        this.logger.verbose("Attempting to get endpoint metadata from authority configuration");
        const configMetadata = this.getEndpointMetadataFromConfig();
        if (configMetadata) {
            this.logger.verbose("Found endpoint metadata in authority configuration");
            (0, _cacheHelpersMjs.updateAuthorityEndpointMetadata)(metadataEntity, configMetadata, false);
            return {
                source: (0, _constantsMjs.AuthorityMetadataSource).CONFIG
            };
        }
        this.logger.verbose("Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values.");
        // skipAuthorityMetadataCache is used to bypass hardcoded authority metadata and force a network metadata cache lookup and network metadata request if no cached response is available.
        if (this.authorityOptions.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get endpoint metadata from the network metadata cache.");
        else {
            const hardcodedMetadata = this.getEndpointMetadataFromHardcodedValues();
            if (hardcodedMetadata) {
                (0, _cacheHelpersMjs.updateAuthorityEndpointMetadata)(metadataEntity, hardcodedMetadata, false);
                return {
                    source: (0, _constantsMjs.AuthorityMetadataSource).HARDCODED_VALUES,
                    metadata: hardcodedMetadata
                };
            } else this.logger.verbose("Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache.");
        }
        // Check cached metadata entity expiration status
        const metadataEntityExpired = (0, _cacheHelpersMjs.isAuthorityMetadataExpired)(metadataEntity);
        if (this.isAuthoritySameType(metadataEntity) && metadataEntity.endpointsFromNetwork && !metadataEntityExpired) {
            // No need to update
            this.logger.verbose("Found endpoint metadata in the cache.");
            return {
                source: (0, _constantsMjs.AuthorityMetadataSource).CACHE
            };
        } else if (metadataEntityExpired) this.logger.verbose("The metadata entity is expired.");
        return null;
    }
    /**
     * Compares the number of url components after the domain to determine if the cached
     * authority metadata can be used for the requested authority. Protects against same domain different
     * authority such as login.microsoftonline.com/tenant and login.microsoftonline.com/tfp/tenant/policy
     * @param metadataEntity
     */ isAuthoritySameType(metadataEntity) {
        const cachedAuthorityUrl = new (0, _urlStringMjs.UrlString)(metadataEntity.canonical_authority);
        const cachedParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
        return cachedParts.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
    }
    /**
     * Parse authorityMetadata config option
     */ getEndpointMetadataFromConfig() {
        if (this.authorityOptions.authorityMetadata) try {
            return JSON.parse(this.authorityOptions.authorityMetadata);
        } catch (e) {
            throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.invalidAuthorityMetadata));
        }
        return null;
    }
    /**
     * Gets OAuth endpoints from the given OpenID configuration endpoint.
     *
     * @param hasHardcodedMetadata boolean
     */ async getEndpointMetadataFromNetwork() {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
        const options = {};
        /*
         * TODO: Add a timeout if the authority exists in our library's
         * hardcoded list of metadata
         */ const openIdConfigurationEndpoint = this.defaultOpenIdConfigurationEndpoint;
        this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from ${openIdConfigurationEndpoint}`);
        try {
            const response = await this.networkInterface.sendGetRequestAsync(openIdConfigurationEndpoint, options);
            const isValidResponse = (0, _openIdConfigResponseMjs.isOpenIdConfigResponse)(response.body);
            if (isValidResponse) return response.body;
            else {
                this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration`);
                return null;
            }
        } catch (e) {
            this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: ${e}`);
            return null;
        }
    }
    /**
     * Get OAuth endpoints for common authorities.
     */ getEndpointMetadataFromHardcodedValues() {
        if (this.hostnameAndPort in (0, _authorityMetadataMjs.EndpointMetadata)) return (0, _authorityMetadataMjs.EndpointMetadata)[this.hostnameAndPort];
        return null;
    }
    /**
     * Update the retrieved metadata with regional information.
     * User selected Azure region will be used if configured.
     */ async updateMetadataWithRegionalInformation(metadata) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
        const userConfiguredAzureRegion = this.authorityOptions.azureRegionConfiguration?.azureRegion;
        if (userConfiguredAzureRegion) {
            if (userConfiguredAzureRegion !== (0, _constantsMjs.Constants).AZURE_REGION_AUTO_DISCOVER_FLAG) {
                this.regionDiscoveryMetadata.region_outcome = (0, _constantsMjs.RegionDiscoveryOutcomes).CONFIGURED_NO_AUTO_DETECTION;
                this.regionDiscoveryMetadata.region_used = userConfiguredAzureRegion;
                return Authority.replaceWithRegionalInformation(metadata, userConfiguredAzureRegion);
            }
            const autodetectedRegionName = await (0, _functionWrappersMjs.invokeAsync)(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), (0, _performanceEventMjs.PerformanceEvents).RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration?.environmentRegion, this.regionDiscoveryMetadata);
            if (autodetectedRegionName) {
                this.regionDiscoveryMetadata.region_outcome = (0, _constantsMjs.RegionDiscoveryOutcomes).AUTO_DETECTION_REQUESTED_SUCCESSFUL;
                this.regionDiscoveryMetadata.region_used = autodetectedRegionName;
                return Authority.replaceWithRegionalInformation(metadata, autodetectedRegionName);
            }
            this.regionDiscoveryMetadata.region_outcome = (0, _constantsMjs.RegionDiscoveryOutcomes).AUTO_DETECTION_REQUESTED_FAILED;
        }
        return metadata;
    }
    /**
     * Updates the AuthorityMetadataEntity with new aliases, preferred_network and preferred_cache
     * and returns where the information was retrieved from
     * @param metadataEntity
     * @returns AuthorityMetadataSource
     */ async updateCloudDiscoveryMetadata(metadataEntity) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).AuthorityUpdateCloudDiscoveryMetadata, this.correlationId);
        const localMetadataSource = this.updateCloudDiscoveryMetadataFromLocalSources(metadataEntity);
        if (localMetadataSource) return localMetadataSource;
        // Fallback to network as metadata source
        const metadata = await (0, _functionWrappersMjs.invokeAsync)(this.getCloudDiscoveryMetadataFromNetwork.bind(this), (0, _performanceEventMjs.PerformanceEvents).AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
        if (metadata) {
            (0, _cacheHelpersMjs.updateCloudDiscoveryMetadata)(metadataEntity, metadata, true);
            return (0, _constantsMjs.AuthorityMetadataSource).NETWORK;
        }
        // Metadata could not be obtained from the config, cache, network or hardcoded values
        throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.untrustedAuthority));
    }
    updateCloudDiscoveryMetadataFromLocalSources(metadataEntity) {
        this.logger.verbose("Attempting to get cloud discovery metadata  from authority configuration");
        this.logger.verbosePii(`Known Authorities: ${this.authorityOptions.knownAuthorities || (0, _constantsMjs.Constants).NOT_APPLICABLE}`);
        this.logger.verbosePii(`Authority Metadata: ${this.authorityOptions.authorityMetadata || (0, _constantsMjs.Constants).NOT_APPLICABLE}`);
        this.logger.verbosePii(`Canonical Authority: ${metadataEntity.canonical_authority || (0, _constantsMjs.Constants).NOT_APPLICABLE}`);
        const metadata = this.getCloudDiscoveryMetadataFromConfig();
        if (metadata) {
            this.logger.verbose("Found cloud discovery metadata in authority configuration");
            (0, _cacheHelpersMjs.updateCloudDiscoveryMetadata)(metadataEntity, metadata, false);
            return (0, _constantsMjs.AuthorityMetadataSource).CONFIG;
        }
        // If the cached metadata came from config but that config was not passed to this instance, we must go to hardcoded values
        this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values.");
        if (this.options.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded cloud discovery metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get cloud discovery metadata from the network metadata cache.");
        else {
            const hardcodedMetadata = (0, _authorityMetadataMjs.getCloudDiscoveryMetadataFromHardcodedValues)(this.hostnameAndPort);
            if (hardcodedMetadata) {
                this.logger.verbose("Found cloud discovery metadata from hardcoded values.");
                (0, _cacheHelpersMjs.updateCloudDiscoveryMetadata)(metadataEntity, hardcodedMetadata, false);
                return (0, _constantsMjs.AuthorityMetadataSource).HARDCODED_VALUES;
            }
            this.logger.verbose("Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache.");
        }
        const metadataEntityExpired = (0, _cacheHelpersMjs.isAuthorityMetadataExpired)(metadataEntity);
        if (this.isAuthoritySameType(metadataEntity) && metadataEntity.aliasesFromNetwork && !metadataEntityExpired) {
            this.logger.verbose("Found cloud discovery metadata in the cache.");
            // No need to update
            return (0, _constantsMjs.AuthorityMetadataSource).CACHE;
        } else if (metadataEntityExpired) this.logger.verbose("The metadata entity is expired.");
        return null;
    }
    /**
     * Parse cloudDiscoveryMetadata config or check knownAuthorities
     */ getCloudDiscoveryMetadataFromConfig() {
        // CIAM does not support cloud discovery metadata
        if (this.authorityType === (0, _authorityTypeMjs.AuthorityType).Ciam) {
            this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host.");
            return Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
        }
        // Check if network response was provided in config
        if (this.authorityOptions.cloudDiscoveryMetadata) {
            this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
            try {
                this.logger.verbose("Attempting to parse the cloud discovery metadata.");
                const parsedResponse = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata);
                const metadata = (0, _authorityMetadataMjs.getCloudDiscoveryMetadataFromNetworkResponse)(parsedResponse.metadata, this.hostnameAndPort);
                this.logger.verbose("Parsed the cloud discovery metadata.");
                if (metadata) {
                    this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata.");
                    return metadata;
                } else this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
            } catch (e) {
                this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error.");
                throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.invalidCloudDiscoveryMetadata));
            }
        }
        // If cloudDiscoveryMetadata is empty or does not contain the host, check knownAuthorities
        if (this.isInKnownAuthorities()) {
            this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host.");
            return Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
        }
        return null;
    }
    /**
     * Called to get metadata from network if CloudDiscoveryMetadata was not populated by config
     *
     * @param hasHardcodedMetadata boolean
     */ async getCloudDiscoveryMetadataFromNetwork() {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
        const instanceDiscoveryEndpoint = `${(0, _constantsMjs.Constants).AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`;
        const options = {};
        /*
         * TODO: Add a timeout if the authority exists in our library's
         * hardcoded list of metadata
         */ let match = null;
        try {
            const response = await this.networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint, options);
            let typedResponseBody;
            let metadata;
            if ((0, _cloudInstanceDiscoveryResponseMjs.isCloudInstanceDiscoveryResponse)(response.body)) {
                typedResponseBody = response.body;
                metadata = typedResponseBody.metadata;
                this.logger.verbosePii(`tenant_discovery_endpoint is: ${typedResponseBody.tenant_discovery_endpoint}`);
            } else if ((0, _cloudInstanceDiscoveryErrorResponseMjs.isCloudInstanceDiscoveryErrorResponse)(response.body)) {
                this.logger.warning(`A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: ${response.status}`);
                typedResponseBody = response.body;
                if (typedResponseBody.error === (0, _constantsMjs.Constants).INVALID_INSTANCE) {
                    this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance.");
                    return null;
                }
                this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error is ${typedResponseBody.error}`);
                this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error description is ${typedResponseBody.error_description}`);
                this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []");
                metadata = [];
            } else {
                this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse");
                return null;
            }
            this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request.");
            match = (0, _authorityMetadataMjs.getCloudDiscoveryMetadataFromNetworkResponse)(metadata, this.hostnameAndPort);
        } catch (error) {
            if (error instanceof (0, _authErrorMjs.AuthError)) this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.\nError: ${error.errorCode}\nError Description: ${error.errorMessage}`);
            else {
                const typedError = error;
                this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.\nError: ${typedError.name}\nError Description: ${typedError.message}`);
            }
            return null;
        }
        // Custom Domain scenario, host is trusted because Instance Discovery call succeeded
        if (!match) {
            this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request.");
            this.logger.verbose("Creating custom Authority for custom domain scenario.");
            match = Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
        }
        return match;
    }
    /**
     * Helper function to determine if this host is included in the knownAuthorities config option
     */ isInKnownAuthorities() {
        const matches = this.authorityOptions.knownAuthorities.filter((authority)=>{
            return authority && (0, _urlStringMjs.UrlString).getDomainFromUrl(authority).toLowerCase() === this.hostnameAndPort;
        });
        return matches.length > 0;
    }
    /**
     * helper function to populate the authority based on azureCloudOptions
     * @param authorityString
     * @param azureCloudOptions
     */ static generateAuthority(authorityString, azureCloudOptions) {
        let authorityAzureCloudInstance;
        if (azureCloudOptions && azureCloudOptions.azureCloudInstance !== (0, _authorityOptionsMjs.AzureCloudInstance).None) {
            const tenant = azureCloudOptions.tenant ? azureCloudOptions.tenant : (0, _constantsMjs.Constants).DEFAULT_COMMON_TENANT;
            authorityAzureCloudInstance = `${azureCloudOptions.azureCloudInstance}/${tenant}/`;
        }
        return authorityAzureCloudInstance ? authorityAzureCloudInstance : authorityString;
    }
    /**
     * Creates cloud discovery metadata object from a given host
     * @param host
     */ static createCloudDiscoveryMetadataFromHost(host) {
        return {
            preferred_network: host,
            preferred_cache: host,
            aliases: [
                host
            ]
        };
    }
    /**
     * helper function to generate environment from authority object
     */ getPreferredCache() {
        if (this.discoveryComplete()) return this.metadata.preferred_cache;
        else throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.endpointResolutionError));
    }
    /**
     * Returns whether or not the provided host is an alias of this authority instance
     * @param host
     */ isAlias(host) {
        return this.metadata.aliases.indexOf(host) > -1;
    }
    /**
     * Returns whether or not the provided host is an alias of a known Microsoft authority for purposes of endpoint discovery
     * @param host
     */ isAliasOfKnownMicrosoftAuthority(host) {
        return (0, _authorityMetadataMjs.InstanceDiscoveryMetadataAliases).has(host);
    }
    /**
     * Checks whether the provided host is that of a public cloud authority
     *
     * @param authority string
     * @returns bool
     */ static isPublicCloudAuthority(host) {
        return (0, _constantsMjs.Constants).KNOWN_PUBLIC_CLOUDS.indexOf(host) >= 0;
    }
    /**
     * Rebuild the authority string with the region
     *
     * @param host string
     * @param region string
     */ static buildRegionalAuthorityString(host, region, queryString) {
        // Create and validate a Url string object with the initial authority string
        const authorityUrlInstance = new (0, _urlStringMjs.UrlString)(host);
        authorityUrlInstance.validateAsUri();
        const authorityUrlParts = authorityUrlInstance.getUrlComponents();
        let hostNameAndPort = `${region}.${authorityUrlParts.HostNameAndPort}`;
        if (this.isPublicCloudAuthority(authorityUrlParts.HostNameAndPort)) hostNameAndPort = `${region}.${(0, _constantsMjs.Constants).REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`;
        // Include the query string portion of the url
        const url = (0, _urlStringMjs.UrlString).constructAuthorityUriFromObject({
            ...authorityUrlInstance.getUrlComponents(),
            HostNameAndPort: hostNameAndPort
        }).urlString;
        // Add the query string if a query string was provided
        if (queryString) return `${url}?${queryString}`;
        return url;
    }
    /**
     * Replace the endpoints in the metadata object with their regional equivalents.
     *
     * @param metadata OpenIdConfigResponse
     * @param azureRegion string
     */ static replaceWithRegionalInformation(metadata, azureRegion) {
        const regionalMetadata = {
            ...metadata
        };
        regionalMetadata.authorization_endpoint = Authority.buildRegionalAuthorityString(regionalMetadata.authorization_endpoint, azureRegion);
        regionalMetadata.token_endpoint = Authority.buildRegionalAuthorityString(regionalMetadata.token_endpoint, azureRegion);
        if (regionalMetadata.end_session_endpoint) regionalMetadata.end_session_endpoint = Authority.buildRegionalAuthorityString(regionalMetadata.end_session_endpoint, azureRegion);
        return regionalMetadata;
    }
    /**
     * Transform CIAM_AUTHORIY as per the below rules:
     * If no path segments found and it is a CIAM authority (hostname ends with .ciamlogin.com), then transform it
     *
     * NOTE: The transformation path should go away once STS supports CIAM with the format: `tenantIdorDomain.ciamlogin.com`
     * `ciamlogin.com` can also change in the future and we should accommodate the same
     *
     * @param authority
     */ static transformCIAMAuthority(authority) {
        let ciamAuthority = authority;
        const authorityUrl = new (0, _urlStringMjs.UrlString)(authority);
        const authorityUrlComponents = authorityUrl.getUrlComponents();
        // check if transformation is needed
        if (authorityUrlComponents.PathSegments.length === 0 && authorityUrlComponents.HostNameAndPort.endsWith((0, _constantsMjs.Constants).CIAM_AUTH_URL)) {
            const tenantIdOrDomain = authorityUrlComponents.HostNameAndPort.split(".")[0];
            ciamAuthority = `${ciamAuthority}${tenantIdOrDomain}${(0, _constantsMjs.Constants).AAD_TENANT_DOMAIN_SUFFIX}`;
        }
        return ciamAuthority;
    }
}
// Reserved tenant domain names that will not be replaced with tenant id
Authority.reservedTenantDomains = new Set([
    "{tenant}",
    "{tenantid}",
    (0, _constantsMjs.AADAuthorityConstants).COMMON,
    (0, _constantsMjs.AADAuthorityConstants).CONSUMERS,
    (0, _constantsMjs.AADAuthorityConstants).ORGANIZATIONS
]);
/**
 * Extract tenantId from authority
 */ function getTenantFromAuthorityString(authority) {
    const authorityUrl = new (0, _urlStringMjs.UrlString)(authority);
    const authorityUrlComponents = authorityUrl.getUrlComponents();
    /**
     * For credential matching purposes, tenantId is the last path segment of the authority URL:
     *  AAD Authority - domain/tenantId -> Credentials are cached with realm = tenantId
     *  B2C Authority - domain/{tenantId}?/.../policy -> Credentials are cached with realm = policy
     *  tenantId is downcased because B2C policies can have mixed case but tfp claim is downcased
     *
     * Note that we may not have any path segments in certain OIDC scenarios.
     */ const tenantId = authorityUrlComponents.PathSegments.slice(-1)[0]?.toLowerCase();
    switch(tenantId){
        case (0, _constantsMjs.AADAuthorityConstants).COMMON:
        case (0, _constantsMjs.AADAuthorityConstants).ORGANIZATIONS:
        case (0, _constantsMjs.AADAuthorityConstants).CONSUMERS:
            return undefined;
        default:
            return tenantId;
    }
}
function formatAuthorityUri(authorityUri) {
    return authorityUri.endsWith((0, _constantsMjs.Constants).FORWARD_SLASH) ? authorityUri : `${authorityUri}${(0, _constantsMjs.Constants).FORWARD_SLASH}`;
}
function buildStaticAuthorityOptions(authOptions) {
    const rawCloudDiscoveryMetadata = authOptions.cloudDiscoveryMetadata;
    let cloudDiscoveryMetadata = undefined;
    if (rawCloudDiscoveryMetadata) try {
        cloudDiscoveryMetadata = JSON.parse(rawCloudDiscoveryMetadata);
    } catch (e) {
        throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.invalidCloudDiscoveryMetadata));
    }
    return {
        canonicalAuthority: authOptions.authority ? formatAuthorityUri(authOptions.authority) : undefined,
        knownAuthorities: authOptions.knownAuthorities,
        cloudDiscoveryMetadata: cloudDiscoveryMetadata
    };
}

},{"./AuthorityType.mjs":"inSt3","./OpenIdConfigResponse.mjs":"dJALP","../url/UrlString.mjs":"km6Sc","../error/ClientAuthError.mjs":"2qWlJ","../utils/Constants.mjs":"lFItn","./AuthorityMetadata.mjs":"fODH9","../error/ClientConfigurationError.mjs":"aV0KO","./ProtocolMode.mjs":"1Lm0d","./AuthorityOptions.mjs":"kwzE9","./CloudInstanceDiscoveryResponse.mjs":"iV4sP","./CloudInstanceDiscoveryErrorResponse.mjs":"juZdg","./RegionDiscovery.mjs":"4z25j","../error/AuthError.mjs":"8tPVA","../telemetry/performance/PerformanceEvent.mjs":"g49Qr","../utils/FunctionWrappers.mjs":"hcHk8","../cache/utils/CacheHelpers.mjs":"GDVlI","../error/ClientAuthErrorCodes.mjs":"fhXae","../error/ClientConfigurationErrorCodes.mjs":"1N7Do","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dJALP":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isOpenIdConfigResponse", ()=>isOpenIdConfigResponse);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ function isOpenIdConfigResponse(response) {
    return response.hasOwnProperty("authorization_endpoint") && response.hasOwnProperty("token_endpoint") && response.hasOwnProperty("issuer") && response.hasOwnProperty("jwks_uri");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iV4sP":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCloudInstanceDiscoveryResponse", ()=>isCloudInstanceDiscoveryResponse);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ function isCloudInstanceDiscoveryResponse(response) {
    return response.hasOwnProperty("tenant_discovery_endpoint") && response.hasOwnProperty("metadata");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"juZdg":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCloudInstanceDiscoveryErrorResponse", ()=>isCloudInstanceDiscoveryErrorResponse);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ function isCloudInstanceDiscoveryErrorResponse(response) {
    return response.hasOwnProperty("error") && response.hasOwnProperty("error_description");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4z25j":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RegionDiscovery", ()=>RegionDiscovery);
var _constantsMjs = require("../utils/Constants.mjs");
var _performanceEventMjs = require("../telemetry/performance/PerformanceEvent.mjs");
var _functionWrappersMjs = require("../utils/FunctionWrappers.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class RegionDiscovery {
    constructor(networkInterface, logger, performanceClient, correlationId){
        this.networkInterface = networkInterface;
        this.logger = logger;
        this.performanceClient = performanceClient;
        this.correlationId = correlationId;
    }
    /**
     * Detect the region from the application's environment.
     *
     * @returns Promise<string | null>
     */ async detectRegion(environmentRegion, regionDiscoveryMetadata) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).RegionDiscoveryDetectRegion, this.correlationId);
        // Initialize auto detected region with the region from the envrionment
        let autodetectedRegionName = environmentRegion;
        // Check if a region was detected from the environment, if not, attempt to get the region from IMDS
        if (!autodetectedRegionName) {
            const options = RegionDiscovery.IMDS_OPTIONS;
            try {
                const localIMDSVersionResponse = await (0, _functionWrappersMjs.invokeAsync)(this.getRegionFromIMDS.bind(this), (0, _performanceEventMjs.PerformanceEvents).RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)((0, _constantsMjs.Constants).IMDS_VERSION, options);
                if (localIMDSVersionResponse.status === (0, _constantsMjs.ResponseCodes).httpSuccess) {
                    autodetectedRegionName = localIMDSVersionResponse.body;
                    regionDiscoveryMetadata.region_source = (0, _constantsMjs.RegionDiscoverySources).IMDS;
                }
                // If the response using the local IMDS version failed, try to fetch the current version of IMDS and retry.
                if (localIMDSVersionResponse.status === (0, _constantsMjs.ResponseCodes).httpBadRequest) {
                    const currentIMDSVersion = await (0, _functionWrappersMjs.invokeAsync)(this.getCurrentVersion.bind(this), (0, _performanceEventMjs.PerformanceEvents).RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(options);
                    if (!currentIMDSVersion) {
                        regionDiscoveryMetadata.region_source = (0, _constantsMjs.RegionDiscoverySources).FAILED_AUTO_DETECTION;
                        return null;
                    }
                    const currentIMDSVersionResponse = await (0, _functionWrappersMjs.invokeAsync)(this.getRegionFromIMDS.bind(this), (0, _performanceEventMjs.PerformanceEvents).RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(currentIMDSVersion, options);
                    if (currentIMDSVersionResponse.status === (0, _constantsMjs.ResponseCodes).httpSuccess) {
                        autodetectedRegionName = currentIMDSVersionResponse.body;
                        regionDiscoveryMetadata.region_source = (0, _constantsMjs.RegionDiscoverySources).IMDS;
                    }
                }
            } catch (e) {
                regionDiscoveryMetadata.region_source = (0, _constantsMjs.RegionDiscoverySources).FAILED_AUTO_DETECTION;
                return null;
            }
        } else regionDiscoveryMetadata.region_source = (0, _constantsMjs.RegionDiscoverySources).ENVIRONMENT_VARIABLE;
        // If no region was auto detected from the environment or from the IMDS endpoint, mark the attempt as a FAILED_AUTO_DETECTION
        if (!autodetectedRegionName) regionDiscoveryMetadata.region_source = (0, _constantsMjs.RegionDiscoverySources).FAILED_AUTO_DETECTION;
        return autodetectedRegionName || null;
    }
    /**
     * Make the call to the IMDS endpoint
     *
     * @param imdsEndpointUrl
     * @returns Promise<NetworkResponse<string>>
     */ async getRegionFromIMDS(version, options) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).RegionDiscoveryGetRegionFromIMDS, this.correlationId);
        return this.networkInterface.sendGetRequestAsync(`${(0, _constantsMjs.Constants).IMDS_ENDPOINT}?api-version=${version}&format=text`, options, (0, _constantsMjs.Constants).IMDS_TIMEOUT);
    }
    /**
     * Get the most recent version of the IMDS endpoint available
     *
     * @returns Promise<string | null>
     */ async getCurrentVersion(options) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).RegionDiscoveryGetCurrentVersion, this.correlationId);
        try {
            const response = await this.networkInterface.sendGetRequestAsync(`${(0, _constantsMjs.Constants).IMDS_ENDPOINT}?format=json`, options);
            // When IMDS endpoint is called without the api version query param, bad request response comes back with latest version.
            if (response.status === (0, _constantsMjs.ResponseCodes).httpBadRequest && response.body && response.body["newest-versions"] && response.body["newest-versions"].length > 0) return response.body["newest-versions"][0];
            return null;
        } catch (e) {
            return null;
        }
    }
}
// Options for the IMDS endpoint request
RegionDiscovery.IMDS_OPTIONS = {
    headers: {
        Metadata: "true"
    }
};

},{"../utils/Constants.mjs":"lFItn","../telemetry/performance/PerformanceEvent.mjs":"g49Qr","../utils/FunctionWrappers.mjs":"hcHk8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g49Qr":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IntFields", ()=>IntFields);
parcelHelpers.export(exports, "PerformanceEventStatus", ()=>PerformanceEventStatus);
parcelHelpers.export(exports, "PerformanceEvents", ()=>PerformanceEvents);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Enumeration of operations that are instrumented by have their performance measured by the PerformanceClient.
 *
 * @export
 * @enum {number}
 */ const PerformanceEvents = {
    /**
     * acquireTokenByCode API (msal-browser and msal-node).
     * Used to acquire tokens by trading an authorization code against the token endpoint.
     */ AcquireTokenByCode: "acquireTokenByCode",
    /**
     * acquireTokenByRefreshToken API (msal-browser and msal-node).
     * Used to renew an access token using a refresh token against the token endpoint.
     */ AcquireTokenByRefreshToken: "acquireTokenByRefreshToken",
    /**
     * acquireTokenSilent API (msal-browser and msal-node).
     * Used to silently acquire a new access token (from the cache or the network).
     */ AcquireTokenSilent: "acquireTokenSilent",
    /**
     * acquireTokenSilentAsync (msal-browser).
     * Internal API for acquireTokenSilent.
     */ AcquireTokenSilentAsync: "acquireTokenSilentAsync",
    /**
     * acquireTokenPopup (msal-browser).
     * Used to acquire a new access token interactively through pop ups
     */ AcquireTokenPopup: "acquireTokenPopup",
    /**
     * acquireTokenRedirect (msal-browser).
     * Used to acquire a new access token interactively through redirects
     */ AcquireTokenRedirect: "acquireTokenRedirect",
    /**
     * getPublicKeyThumbprint API in CryptoOpts class (msal-browser).
     * Used to generate a public/private keypair and generate a public key thumbprint for pop requests.
     */ CryptoOptsGetPublicKeyThumbprint: "cryptoOptsGetPublicKeyThumbprint",
    /**
     * signJwt API in CryptoOpts class (msal-browser).
     * Used to signed a pop token.
     */ CryptoOptsSignJwt: "cryptoOptsSignJwt",
    /**
     * acquireToken API in the SilentCacheClient class (msal-browser).
     * Used to read access tokens from the cache.
     */ SilentCacheClientAcquireToken: "silentCacheClientAcquireToken",
    /**
     * acquireToken API in the SilentIframeClient class (msal-browser).
     * Used to acquire a new set of tokens from the authorize endpoint in a hidden iframe.
     */ SilentIframeClientAcquireToken: "silentIframeClientAcquireToken",
    /**
     * acquireToken API in SilentRereshClient (msal-browser).
     * Used to acquire a new set of tokens from the token endpoint using a refresh token.
     */ SilentRefreshClientAcquireToken: "silentRefreshClientAcquireToken",
    /**
     * ssoSilent API (msal-browser).
     * Used to silently acquire an authorization code and set of tokens using a hidden iframe.
     */ SsoSilent: "ssoSilent",
    /**
     * getDiscoveredAuthority API in StandardInteractionClient class (msal-browser).
     * Used to load authority metadata for a request.
     */ StandardInteractionClientGetDiscoveredAuthority: "standardInteractionClientGetDiscoveredAuthority",
    /**
     * acquireToken APIs in msal-browser.
     * Used to make an /authorize endpoint call with native brokering enabled.
     */ FetchAccountIdWithNativeBroker: "fetchAccountIdWithNativeBroker",
    /**
     * acquireToken API in NativeInteractionClient class (msal-browser).
     * Used to acquire a token from Native component when native brokering is enabled.
     */ NativeInteractionClientAcquireToken: "nativeInteractionClientAcquireToken",
    /**
     * Time spent creating default headers for requests to token endpoint
     */ BaseClientCreateTokenRequestHeaders: "baseClientCreateTokenRequestHeaders",
    /**
     * Time spent sending/waiting for the response of a request to the token endpoint
     */ RefreshTokenClientExecutePostToTokenEndpoint: "refreshTokenClientExecutePostToTokenEndpoint",
    AuthorizationCodeClientExecutePostToTokenEndpoint: "authorizationCodeClientExecutePostToTokenEndpoint",
    /**
     * Used to measure the time taken for completing embedded-broker handshake (PW-Broker).
     */ BrokerHandhshake: "brokerHandshake",
    /**
     * acquireTokenByRefreshToken API in BrokerClientApplication (PW-Broker) .
     */ AcquireTokenByRefreshTokenInBroker: "acquireTokenByRefreshTokenInBroker",
    /**
     * Time taken for token acquisition by broker
     */ AcquireTokenByBroker: "acquireTokenByBroker",
    /**
     * Time spent on the network for refresh token acquisition
     */ RefreshTokenClientExecuteTokenRequest: "refreshTokenClientExecuteTokenRequest",
    /**
     * Time taken for acquiring refresh token , records RT size
     */ RefreshTokenClientAcquireToken: "refreshTokenClientAcquireToken",
    /**
     * Time taken for acquiring cached refresh token
     */ RefreshTokenClientAcquireTokenWithCachedRefreshToken: "refreshTokenClientAcquireTokenWithCachedRefreshToken",
    /**
     * acquireTokenByRefreshToken API in RefreshTokenClient (msal-common).
     */ RefreshTokenClientAcquireTokenByRefreshToken: "refreshTokenClientAcquireTokenByRefreshToken",
    /**
     * Helper function to create token request body in RefreshTokenClient (msal-common).
     */ RefreshTokenClientCreateTokenRequestBody: "refreshTokenClientCreateTokenRequestBody",
    /**
     * acquireTokenFromCache (msal-browser).
     * Internal API for acquiring token from cache
     */ AcquireTokenFromCache: "acquireTokenFromCache",
    SilentFlowClientAcquireCachedToken: "silentFlowClientAcquireCachedToken",
    SilentFlowClientGenerateResultFromCacheRecord: "silentFlowClientGenerateResultFromCacheRecord",
    /**
     * acquireTokenBySilentIframe (msal-browser).
     * Internal API for acquiring token by silent Iframe
     */ AcquireTokenBySilentIframe: "acquireTokenBySilentIframe",
    /**
     * Internal API for initializing base request in BaseInteractionClient (msal-browser)
     */ InitializeBaseRequest: "initializeBaseRequest",
    /**
     * Internal API for initializing silent request in SilentCacheClient (msal-browser)
     */ InitializeSilentRequest: "initializeSilentRequest",
    InitializeClientApplication: "initializeClientApplication",
    /**
     * Helper function in SilentIframeClient class (msal-browser).
     */ SilentIframeClientTokenHelper: "silentIframeClientTokenHelper",
    /**
     * SilentHandler
     */ SilentHandlerInitiateAuthRequest: "silentHandlerInitiateAuthRequest",
    SilentHandlerMonitorIframeForHash: "silentHandlerMonitorIframeForHash",
    SilentHandlerLoadFrame: "silentHandlerLoadFrame",
    SilentHandlerLoadFrameSync: "silentHandlerLoadFrameSync",
    /**
     * Helper functions in StandardInteractionClient class (msal-browser)
     */ StandardInteractionClientCreateAuthCodeClient: "standardInteractionClientCreateAuthCodeClient",
    StandardInteractionClientGetClientConfiguration: "standardInteractionClientGetClientConfiguration",
    StandardInteractionClientInitializeAuthorizationRequest: "standardInteractionClientInitializeAuthorizationRequest",
    StandardInteractionClientInitializeAuthorizationCodeRequest: "standardInteractionClientInitializeAuthorizationCodeRequest",
    /**
     * getAuthCodeUrl API (msal-browser and msal-node).
     */ GetAuthCodeUrl: "getAuthCodeUrl",
    /**
     * Functions from InteractionHandler (msal-browser)
     */ HandleCodeResponseFromServer: "handleCodeResponseFromServer",
    HandleCodeResponse: "handleCodeResponse",
    UpdateTokenEndpointAuthority: "updateTokenEndpointAuthority",
    /**
     * APIs in Authorization Code Client (msal-common)
     */ AuthClientAcquireToken: "authClientAcquireToken",
    AuthClientExecuteTokenRequest: "authClientExecuteTokenRequest",
    AuthClientCreateTokenRequestBody: "authClientCreateTokenRequestBody",
    AuthClientCreateQueryString: "authClientCreateQueryString",
    /**
     * Generate functions in PopTokenGenerator (msal-common)
     */ PopTokenGenerateCnf: "popTokenGenerateCnf",
    PopTokenGenerateKid: "popTokenGenerateKid",
    /**
     * handleServerTokenResponse API in ResponseHandler (msal-common)
     */ HandleServerTokenResponse: "handleServerTokenResponse",
    DeserializeResponse: "deserializeResponse",
    /**
     * Authority functions
     */ AuthorityFactoryCreateDiscoveredInstance: "authorityFactoryCreateDiscoveredInstance",
    AuthorityResolveEndpointsAsync: "authorityResolveEndpointsAsync",
    AuthorityResolveEndpointsFromLocalSources: "authorityResolveEndpointsFromLocalSources",
    AuthorityGetCloudDiscoveryMetadataFromNetwork: "authorityGetCloudDiscoveryMetadataFromNetwork",
    AuthorityUpdateCloudDiscoveryMetadata: "authorityUpdateCloudDiscoveryMetadata",
    AuthorityGetEndpointMetadataFromNetwork: "authorityGetEndpointMetadataFromNetwork",
    AuthorityUpdateEndpointMetadata: "authorityUpdateEndpointMetadata",
    AuthorityUpdateMetadataWithRegionalInformation: "authorityUpdateMetadataWithRegionalInformation",
    /**
     * Region Discovery functions
     */ RegionDiscoveryDetectRegion: "regionDiscoveryDetectRegion",
    RegionDiscoveryGetRegionFromIMDS: "regionDiscoveryGetRegionFromIMDS",
    RegionDiscoveryGetCurrentVersion: "regionDiscoveryGetCurrentVersion",
    AcquireTokenByCodeAsync: "acquireTokenByCodeAsync",
    GetEndpointMetadataFromNetwork: "getEndpointMetadataFromNetwork",
    GetCloudDiscoveryMetadataFromNetworkMeasurement: "getCloudDiscoveryMetadataFromNetworkMeasurement",
    HandleRedirectPromiseMeasurement: "handleRedirectPromise",
    HandleNativeRedirectPromiseMeasurement: "handleNativeRedirectPromise",
    UpdateCloudDiscoveryMetadataMeasurement: "updateCloudDiscoveryMetadataMeasurement",
    UsernamePasswordClientAcquireToken: "usernamePasswordClientAcquireToken",
    NativeMessageHandlerHandshake: "nativeMessageHandlerHandshake",
    NativeGenerateAuthResult: "nativeGenerateAuthResult",
    RemoveHiddenIframe: "removeHiddenIframe",
    /**
     * Cache operations
     */ ClearTokensAndKeysWithClaims: "clearTokensAndKeysWithClaims",
    CacheManagerGetRefreshToken: "cacheManagerGetRefreshToken",
    /**
     * Crypto Operations
     */ GeneratePkceCodes: "generatePkceCodes",
    GenerateCodeVerifier: "generateCodeVerifier",
    GenerateCodeChallengeFromVerifier: "generateCodeChallengeFromVerifier",
    Sha256Digest: "sha256Digest",
    GetRandomValues: "getRandomValues"
};
/**
 * State of the performance event.
 *
 * @export
 * @enum {number}
 */ const PerformanceEventStatus = {
    NotStarted: 0,
    InProgress: 1,
    Completed: 2
};
const IntFields = new Set([
    "accessTokenSize",
    "durationMs",
    "idTokenSize",
    "matsSilentStatus",
    "matsHttpStatus",
    "refreshTokenSize",
    "queuedTimeMs",
    "startTimeMs",
    "status",
    "multiMatchedAT",
    "multiMatchedID",
    "multiMatchedRT"
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hcHk8":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invoke", ()=>invoke);
parcelHelpers.export(exports, "invokeAsync", ()=>invokeAsync);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Wraps a function with a performance measurement.
 * Usage: invoke(functionToCall, performanceClient, "EventName", "correlationId")(...argsToPassToFunction)
 * @param callback
 * @param eventName
 * @param logger
 * @param telemetryClient
 * @param correlationId
 * @returns
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
const invoke = (callback, eventName, logger, telemetryClient, correlationId)=>{
    return (...args)=>{
        logger.trace(`Executing function ${eventName}`);
        const inProgressEvent = telemetryClient?.startMeasurement(eventName, correlationId);
        if (correlationId) {
            // Track number of times this API is called in a single request
            const eventCount = eventName + "CallCount";
            telemetryClient?.incrementFields({
                [eventCount]: 1
            }, correlationId);
        }
        try {
            const result = callback(...args);
            inProgressEvent?.end({
                success: true
            });
            logger.trace(`Returning result from ${eventName}`);
            return result;
        } catch (e) {
            logger.trace(`Error occurred in ${eventName}`);
            try {
                logger.trace(JSON.stringify(e));
            } catch (e) {
                logger.trace("Unable to print error message.");
            }
            inProgressEvent?.end({
                success: false
            });
            throw e;
        }
    };
};
/**
 * Wraps an async function with a performance measurement.
 * Usage: invokeAsync(functionToCall, performanceClient, "EventName", "correlationId")(...argsToPassToFunction)
 * @param callback
 * @param eventName
 * @param logger
 * @param telemetryClient
 * @param correlationId
 * @returns
 * @internal
 *
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
const invokeAsync = (callback, eventName, logger, telemetryClient, correlationId)=>{
    return (...args)=>{
        logger.trace(`Executing function ${eventName}`);
        const inProgressEvent = telemetryClient?.startMeasurement(eventName, correlationId);
        if (correlationId) {
            // Track number of times this API is called in a single request
            const eventCount = eventName + "CallCount";
            telemetryClient?.incrementFields({
                [eventCount]: 1
            }, correlationId);
        }
        telemetryClient?.setPreQueueTime(eventName, correlationId);
        return callback(...args).then((response)=>{
            logger.trace(`Returning result from ${eventName}`);
            inProgressEvent?.end({
                success: true
            });
            return response;
        }).catch((e)=>{
            logger.trace(`Error occurred in ${eventName}`);
            try {
                logger.trace(JSON.stringify(e));
            } catch (e) {
                logger.trace("Unable to print error message.");
            }
            inProgressEvent?.end({
                success: false
            });
            throw e;
        });
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dJSiC":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResponseHandler", ()=>ResponseHandler);
parcelHelpers.export(exports, "buildAccountToCache", ()=>buildAccountToCache);
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _serverErrorMjs = require("../error/ServerError.mjs");
var _scopeSetMjs = require("../request/ScopeSet.mjs");
var _accountEntityMjs = require("../cache/entities/AccountEntity.mjs");
var _interactionRequiredAuthErrorMjs = require("../error/InteractionRequiredAuthError.mjs");
var _cacheRecordMjs = require("../cache/entities/CacheRecord.mjs");
var _protocolUtilsMjs = require("../utils/ProtocolUtils.mjs");
var _constantsMjs = require("../utils/Constants.mjs");
var _popTokenGeneratorMjs = require("../crypto/PopTokenGenerator.mjs");
var _tokenCacheContextMjs = require("../cache/persistence/TokenCacheContext.mjs");
var _performanceEventMjs = require("../telemetry/performance/PerformanceEvent.mjs");
var _authTokenMjs = require("../account/AuthToken.mjs");
var _tokenClaimsMjs = require("../account/TokenClaims.mjs");
var _accountInfoMjs = require("../account/AccountInfo.mjs");
var _cacheHelpersMjs = require("../cache/utils/CacheHelpers.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Class that handles response parsing.
 * @internal
 */ class ResponseHandler {
    constructor(clientId, cacheStorage, cryptoObj, logger, serializableCache, persistencePlugin, performanceClient){
        this.clientId = clientId;
        this.cacheStorage = cacheStorage;
        this.cryptoObj = cryptoObj;
        this.logger = logger;
        this.serializableCache = serializableCache;
        this.persistencePlugin = persistencePlugin;
        this.performanceClient = performanceClient;
    }
    /**
     * Function which validates server authorization code response.
     * @param serverResponseHash
     * @param requestState
     * @param cryptoObj
     */ validateServerAuthorizationCodeResponse(serverResponse, requestState) {
        if (!serverResponse.state || !requestState) throw serverResponse.state ? (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.stateNotFound), "Cached State") : (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.stateNotFound), "Server State");
        let decodedServerResponseState;
        let decodedRequestState;
        try {
            decodedServerResponseState = decodeURIComponent(serverResponse.state);
        } catch (e) {
            throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.invalidState), serverResponse.state);
        }
        try {
            decodedRequestState = decodeURIComponent(requestState);
        } catch (e) {
            throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.invalidState), serverResponse.state);
        }
        if (decodedServerResponseState !== decodedRequestState) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.stateMismatch));
        // Check for error
        if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
            if ((0, _interactionRequiredAuthErrorMjs.isInteractionRequiredError)(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) throw new (0, _interactionRequiredAuthErrorMjs.InteractionRequiredAuthError)(serverResponse.error || "", serverResponse.error_description, serverResponse.suberror, serverResponse.timestamp || "", serverResponse.trace_id || "", serverResponse.correlation_id || "", serverResponse.claims || "");
            throw new (0, _serverErrorMjs.ServerError)(serverResponse.error || "", serverResponse.error_description, serverResponse.suberror);
        }
    }
    /**
     * Function which validates server authorization token response.
     * @param serverResponse
     * @param refreshAccessToken
     */ validateTokenResponse(serverResponse, refreshAccessToken) {
        // Check for error
        if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
            const errString = `${serverResponse.error_codes} - [${serverResponse.timestamp}]: ${serverResponse.error_description} - Correlation ID: ${serverResponse.correlation_id} - Trace ID: ${serverResponse.trace_id}`;
            const serverError = new (0, _serverErrorMjs.ServerError)(serverResponse.error, errString, serverResponse.suberror);
            // check if 500 error
            if (refreshAccessToken && serverResponse.status && serverResponse.status >= (0, _constantsMjs.HttpStatus).SERVER_ERROR_RANGE_START && serverResponse.status <= (0, _constantsMjs.HttpStatus).SERVER_ERROR_RANGE_END) {
                this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.\n${serverError}`);
                // don't throw an exception, but alert the user via a log that the token was unable to be refreshed
                return;
            // check if 400 error
            } else if (refreshAccessToken && serverResponse.status && serverResponse.status >= (0, _constantsMjs.HttpStatus).CLIENT_ERROR_RANGE_START && serverResponse.status <= (0, _constantsMjs.HttpStatus).CLIENT_ERROR_RANGE_END) {
                this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.\n${serverError}`);
                // don't throw an exception, but alert the user via a log that the token was unable to be refreshed
                return;
            }
            if ((0, _interactionRequiredAuthErrorMjs.isInteractionRequiredError)(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) throw new (0, _interactionRequiredAuthErrorMjs.InteractionRequiredAuthError)(serverResponse.error, serverResponse.error_description, serverResponse.suberror, serverResponse.timestamp || (0, _constantsMjs.Constants).EMPTY_STRING, serverResponse.trace_id || (0, _constantsMjs.Constants).EMPTY_STRING, serverResponse.correlation_id || (0, _constantsMjs.Constants).EMPTY_STRING, serverResponse.claims || (0, _constantsMjs.Constants).EMPTY_STRING);
            throw serverError;
        }
    }
    /**
     * Returns a constructed token response based on given string. Also manages the cache updates and cleanups.
     * @param serverTokenResponse
     * @param authority
     */ async handleServerTokenResponse(serverTokenResponse, authority, reqTimestamp, request, authCodePayload, userAssertionHash, handlingRefreshTokenResponse, forceCacheRefreshTokenResponse, serverRequestId) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).HandleServerTokenResponse, serverTokenResponse.correlation_id);
        // create an idToken object (not entity)
        let idTokenClaims;
        if (serverTokenResponse.id_token) {
            idTokenClaims = (0, _authTokenMjs.extractTokenClaims)(serverTokenResponse.id_token || (0, _constantsMjs.Constants).EMPTY_STRING, this.cryptoObj.base64Decode);
            // token nonce check (TODO: Add a warning if no nonce is given?)
            if (authCodePayload && authCodePayload.nonce) {
                if (idTokenClaims.nonce !== authCodePayload.nonce) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.nonceMismatch));
            }
            // token max_age check
            if (request.maxAge || request.maxAge === 0) {
                const authTime = idTokenClaims.auth_time;
                if (!authTime) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.authTimeNotFound));
                (0, _authTokenMjs.checkMaxAge)(authTime, request.maxAge);
            }
        }
        // generate homeAccountId
        this.homeAccountIdentifier = (0, _accountEntityMjs.AccountEntity).generateHomeAccountId(serverTokenResponse.client_info || (0, _constantsMjs.Constants).EMPTY_STRING, authority.authorityType, this.logger, this.cryptoObj, idTokenClaims);
        // save the response tokens
        let requestStateObj;
        if (!!authCodePayload && !!authCodePayload.state) requestStateObj = (0, _protocolUtilsMjs.ProtocolUtils).parseRequestState(this.cryptoObj, authCodePayload.state);
        // Add keyId from request to serverTokenResponse if defined
        serverTokenResponse.key_id = serverTokenResponse.key_id || request.sshKid || undefined;
        const cacheRecord = this.generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenClaims, userAssertionHash, authCodePayload);
        let cacheContext;
        try {
            if (this.persistencePlugin && this.serializableCache) {
                this.logger.verbose("Persistence enabled, calling beforeCacheAccess");
                cacheContext = new (0, _tokenCacheContextMjs.TokenCacheContext)(this.serializableCache, true);
                await this.persistencePlugin.beforeCacheAccess(cacheContext);
            }
            /*
             * When saving a refreshed tokens to the cache, it is expected that the account that was used is present in the cache.
             * If not present, we should return null, as it's the case that another application called removeAccount in between
             * the calls to getAllAccounts and acquireTokenSilent. We should not overwrite that removal, unless explicitly flagged by
             * the developer, as in the case of refresh token flow used in ADAL Node to MSAL Node migration.
             */ if (handlingRefreshTokenResponse && !forceCacheRefreshTokenResponse && cacheRecord.account) {
                const key = cacheRecord.account.generateAccountKey();
                const account = this.cacheStorage.getAccount(key, this.logger);
                if (!account) {
                    this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache");
                    return await ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenClaims, requestStateObj, undefined, serverRequestId);
                }
            }
            await this.cacheStorage.saveCacheRecord(cacheRecord, request.storeInCache);
        } finally{
            if (this.persistencePlugin && this.serializableCache && cacheContext) {
                this.logger.verbose("Persistence enabled, calling afterCacheAccess");
                await this.persistencePlugin.afterCacheAccess(cacheContext);
            }
        }
        return ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenClaims, requestStateObj, serverTokenResponse, serverRequestId);
    }
    /**
     * Generates CacheRecord
     * @param serverTokenResponse
     * @param idTokenObj
     * @param authority
     */ generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenClaims, userAssertionHash, authCodePayload) {
        const env = authority.getPreferredCache();
        if (!env) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.invalidCacheEnvironment));
        const claimsTenantId = (0, _tokenClaimsMjs.getTenantIdFromIdTokenClaims)(idTokenClaims);
        // IdToken: non AAD scenarios can have empty realm
        let cachedIdToken;
        let cachedAccount;
        if (serverTokenResponse.id_token && !!idTokenClaims) {
            cachedIdToken = (0, _cacheHelpersMjs.createIdTokenEntity)(this.homeAccountIdentifier, env, serverTokenResponse.id_token, this.clientId, claimsTenantId || "");
            cachedAccount = buildAccountToCache(this.cacheStorage, authority, this.homeAccountIdentifier, idTokenClaims, this.cryptoObj.base64Decode, serverTokenResponse.client_info, env, claimsTenantId, authCodePayload, undefined, this.logger);
        }
        // AccessToken
        let cachedAccessToken = null;
        if (serverTokenResponse.access_token) {
            // If scopes not returned in server response, use request scopes
            const responseScopes = serverTokenResponse.scope ? (0, _scopeSetMjs.ScopeSet).fromString(serverTokenResponse.scope) : new (0, _scopeSetMjs.ScopeSet)(request.scopes || []);
            /*
             * Use timestamp calculated before request
             * Server may return timestamps as strings, parse to numbers if so.
             */ const expiresIn = (typeof serverTokenResponse.expires_in === "string" ? parseInt(serverTokenResponse.expires_in, 10) : serverTokenResponse.expires_in) || 0;
            const extExpiresIn = (typeof serverTokenResponse.ext_expires_in === "string" ? parseInt(serverTokenResponse.ext_expires_in, 10) : serverTokenResponse.ext_expires_in) || 0;
            const refreshIn = (typeof serverTokenResponse.refresh_in === "string" ? parseInt(serverTokenResponse.refresh_in, 10) : serverTokenResponse.refresh_in) || undefined;
            const tokenExpirationSeconds = reqTimestamp + expiresIn;
            const extendedTokenExpirationSeconds = tokenExpirationSeconds + extExpiresIn;
            const refreshOnSeconds = refreshIn && refreshIn > 0 ? reqTimestamp + refreshIn : undefined;
            // non AAD scenarios can have empty realm
            cachedAccessToken = (0, _cacheHelpersMjs.createAccessTokenEntity)(this.homeAccountIdentifier, env, serverTokenResponse.access_token, this.clientId, claimsTenantId || authority.tenant || "", responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds, this.cryptoObj.base64Decode, refreshOnSeconds, serverTokenResponse.token_type, userAssertionHash, serverTokenResponse.key_id, request.claims, request.requestedClaimsHash);
        }
        // refreshToken
        let cachedRefreshToken = null;
        if (serverTokenResponse.refresh_token) {
            let rtExpiresOn;
            if (serverTokenResponse.refresh_token_expires_in) {
                const rtExpiresIn = typeof serverTokenResponse.refresh_token_expires_in === "string" ? parseInt(serverTokenResponse.refresh_token_expires_in, 10) : serverTokenResponse.refresh_token_expires_in;
                rtExpiresOn = reqTimestamp + rtExpiresIn;
            }
            cachedRefreshToken = (0, _cacheHelpersMjs.createRefreshTokenEntity)(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token, this.clientId, serverTokenResponse.foci, userAssertionHash, rtExpiresOn);
        }
        // appMetadata
        let cachedAppMetadata = null;
        if (serverTokenResponse.foci) cachedAppMetadata = {
            clientId: this.clientId,
            environment: env,
            familyId: serverTokenResponse.foci
        };
        return new (0, _cacheRecordMjs.CacheRecord)(cachedAccount, cachedIdToken, cachedAccessToken, cachedRefreshToken, cachedAppMetadata);
    }
    /**
     * Creates an @AuthenticationResult from @CacheRecord , @IdToken , and a boolean that states whether or not the result is from cache.
     *
     * Optionally takes a state string that is set as-is in the response.
     *
     * @param cacheRecord
     * @param idTokenObj
     * @param fromTokenCache
     * @param stateString
     */ static async generateAuthenticationResult(cryptoObj, authority, cacheRecord, fromTokenCache, request, idTokenClaims, requestState, serverTokenResponse, requestId) {
        let accessToken = (0, _constantsMjs.Constants).EMPTY_STRING;
        let responseScopes = [];
        let expiresOn = null;
        let extExpiresOn;
        let refreshOn;
        let familyId = (0, _constantsMjs.Constants).EMPTY_STRING;
        if (cacheRecord.accessToken) {
            if (cacheRecord.accessToken.tokenType === (0, _constantsMjs.AuthenticationScheme).POP) {
                const popTokenGenerator = new (0, _popTokenGeneratorMjs.PopTokenGenerator)(cryptoObj);
                const { secret, keyId } = cacheRecord.accessToken;
                if (!keyId) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.keyIdMissing));
                accessToken = await popTokenGenerator.signPopToken(secret, keyId, request);
            } else accessToken = cacheRecord.accessToken.secret;
            responseScopes = (0, _scopeSetMjs.ScopeSet).fromString(cacheRecord.accessToken.target).asArray();
            expiresOn = new Date(Number(cacheRecord.accessToken.expiresOn) * 1000);
            extExpiresOn = new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1000);
            if (cacheRecord.accessToken.refreshOn) refreshOn = new Date(Number(cacheRecord.accessToken.refreshOn) * 1000);
        }
        if (cacheRecord.appMetadata) familyId = cacheRecord.appMetadata.familyId === (0, _constantsMjs.THE_FAMILY_ID) ? (0, _constantsMjs.THE_FAMILY_ID) : "";
        const uid = idTokenClaims?.oid || idTokenClaims?.sub || "";
        const tid = idTokenClaims?.tid || "";
        // for hybrid + native bridge enablement, send back the native account Id
        if (serverTokenResponse?.spa_accountid && !!cacheRecord.account) cacheRecord.account.nativeAccountId = serverTokenResponse?.spa_accountid;
        const accountInfo = cacheRecord.account ? (0, _accountInfoMjs.updateAccountTenantProfileData)(cacheRecord.account.getAccountInfo(), undefined, idTokenClaims, cacheRecord.idToken?.secret) : null;
        return {
            authority: authority.canonicalAuthority,
            uniqueId: uid,
            tenantId: tid,
            scopes: responseScopes,
            account: accountInfo,
            idToken: cacheRecord?.idToken?.secret || "",
            idTokenClaims: idTokenClaims || {},
            accessToken: accessToken,
            fromCache: fromTokenCache,
            expiresOn: expiresOn,
            extExpiresOn: extExpiresOn,
            refreshOn: refreshOn,
            correlationId: request.correlationId,
            requestId: requestId || (0, _constantsMjs.Constants).EMPTY_STRING,
            familyId: familyId,
            tokenType: cacheRecord.accessToken?.tokenType || (0, _constantsMjs.Constants).EMPTY_STRING,
            state: requestState ? requestState.userRequestState : (0, _constantsMjs.Constants).EMPTY_STRING,
            cloudGraphHostName: cacheRecord.account?.cloudGraphHostName || (0, _constantsMjs.Constants).EMPTY_STRING,
            msGraphHost: cacheRecord.account?.msGraphHost || (0, _constantsMjs.Constants).EMPTY_STRING,
            code: serverTokenResponse?.spa_code,
            fromNativeBroker: false
        };
    }
}
function buildAccountToCache(cacheStorage, authority, homeAccountId, idTokenClaims, base64Decode, clientInfo, environment, claimsTenantId, authCodePayload, nativeAccountId, logger) {
    logger?.verbose("setCachedAccount called");
    // Check if base account is already cached
    const accountKeys = cacheStorage.getAccountKeys();
    const baseAccountKey = accountKeys.find((accountKey)=>{
        return accountKey.startsWith(homeAccountId);
    });
    let cachedAccount = null;
    if (baseAccountKey) cachedAccount = cacheStorage.getAccount(baseAccountKey, logger);
    const baseAccount = cachedAccount || (0, _accountEntityMjs.AccountEntity).createAccount({
        homeAccountId,
        idTokenClaims,
        clientInfo,
        environment,
        cloudGraphHostName: authCodePayload?.cloud_graph_host_name,
        msGraphHost: authCodePayload?.msgraph_host,
        nativeAccountId: nativeAccountId
    }, authority, base64Decode);
    const tenantProfiles = baseAccount.tenantProfiles || [];
    if (claimsTenantId && !tenantProfiles.find((tenantProfile)=>{
        return tenantProfile.tenantId === claimsTenantId;
    })) {
        const newTenantProfile = (0, _accountInfoMjs.buildTenantProfileFromIdTokenClaims)(homeAccountId, idTokenClaims);
        tenantProfiles.push(newTenantProfile);
    }
    baseAccount.tenantProfiles = tenantProfiles;
    return baseAccount;
}

},{"../error/ClientAuthError.mjs":"2qWlJ","../error/ServerError.mjs":"l3z3W","../request/ScopeSet.mjs":"3j7iu","../cache/entities/AccountEntity.mjs":"2Pt03","../error/InteractionRequiredAuthError.mjs":"2G6ns","../cache/entities/CacheRecord.mjs":"kTXYA","../utils/ProtocolUtils.mjs":"8oBjH","../utils/Constants.mjs":"lFItn","../crypto/PopTokenGenerator.mjs":"6H3aG","../cache/persistence/TokenCacheContext.mjs":"2MHhv","../telemetry/performance/PerformanceEvent.mjs":"g49Qr","../account/AuthToken.mjs":"hZiUx","../account/TokenClaims.mjs":"lb7hc","../account/AccountInfo.mjs":"cPnzw","../cache/utils/CacheHelpers.mjs":"GDVlI","../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2G6ns":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InteractionRequiredAuthErrorCodes", ()=>_interactionRequiredAuthErrorCodesMjs);
parcelHelpers.export(exports, "InteractionRequiredAuthError", ()=>InteractionRequiredAuthError);
parcelHelpers.export(exports, "InteractionRequiredAuthErrorMessage", ()=>InteractionRequiredAuthErrorMessage);
parcelHelpers.export(exports, "InteractionRequiredAuthSubErrorMessage", ()=>InteractionRequiredAuthSubErrorMessage);
parcelHelpers.export(exports, "InteractionRequiredServerErrorMessage", ()=>InteractionRequiredServerErrorMessage);
parcelHelpers.export(exports, "createInteractionRequiredAuthError", ()=>createInteractionRequiredAuthError);
parcelHelpers.export(exports, "isInteractionRequiredError", ()=>isInteractionRequiredError);
var _constantsMjs = require("../utils/Constants.mjs");
var _authErrorMjs = require("./AuthError.mjs");
var _interactionRequiredAuthErrorCodesMjs = require("./InteractionRequiredAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * InteractionRequiredServerErrorMessage contains string constants used by error codes and messages returned by the server indicating interaction is required
 */ const InteractionRequiredServerErrorMessage = [
    (0, _interactionRequiredAuthErrorCodesMjs.interactionRequired),
    (0, _interactionRequiredAuthErrorCodesMjs.consentRequired),
    (0, _interactionRequiredAuthErrorCodesMjs.loginRequired),
    (0, _interactionRequiredAuthErrorCodesMjs.badToken)
];
const InteractionRequiredAuthSubErrorMessage = [
    "message_only",
    "additional_action",
    "basic_action",
    "user_password_expired",
    "consent_required",
    "bad_token"
];
const InteractionRequiredAuthErrorMessages = {
    [(0, _interactionRequiredAuthErrorCodesMjs.noTokensFound)]: "No refresh token found in the cache. Please sign-in.",
    [(0, _interactionRequiredAuthErrorCodesMjs.nativeAccountUnavailable)]: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.",
    [(0, _interactionRequiredAuthErrorCodesMjs.refreshTokenExpired)]: "Refresh token has expired.",
    [(0, _interactionRequiredAuthErrorCodesMjs.badToken)]: "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve."
};
/**
 * Interaction required errors defined by the SDK
 * @deprecated Use InteractionRequiredAuthErrorCodes instead
 */ const InteractionRequiredAuthErrorMessage = {
    noTokensFoundError: {
        code: (0, _interactionRequiredAuthErrorCodesMjs.noTokensFound),
        desc: InteractionRequiredAuthErrorMessages[0, _interactionRequiredAuthErrorCodesMjs.noTokensFound]
    },
    native_account_unavailable: {
        code: (0, _interactionRequiredAuthErrorCodesMjs.nativeAccountUnavailable),
        desc: InteractionRequiredAuthErrorMessages[0, _interactionRequiredAuthErrorCodesMjs.nativeAccountUnavailable]
    },
    bad_token: {
        code: (0, _interactionRequiredAuthErrorCodesMjs.badToken),
        desc: InteractionRequiredAuthErrorMessages[0, _interactionRequiredAuthErrorCodesMjs.badToken]
    }
};
/**
 * Error thrown when user interaction is required.
 */ class InteractionRequiredAuthError extends (0, _authErrorMjs.AuthError) {
    constructor(errorCode, errorMessage, subError, timestamp, traceId, correlationId, claims){
        super(errorCode, errorMessage, subError);
        Object.setPrototypeOf(this, InteractionRequiredAuthError.prototype);
        this.timestamp = timestamp || (0, _constantsMjs.Constants).EMPTY_STRING;
        this.traceId = traceId || (0, _constantsMjs.Constants).EMPTY_STRING;
        this.correlationId = correlationId || (0, _constantsMjs.Constants).EMPTY_STRING;
        this.claims = claims || (0, _constantsMjs.Constants).EMPTY_STRING;
        this.name = "InteractionRequiredAuthError";
    }
}
/**
 * Helper function used to determine if an error thrown by the server requires interaction to resolve
 * @param errorCode
 * @param errorString
 * @param subError
 */ function isInteractionRequiredError(errorCode, errorString, subError) {
    const isInteractionRequiredErrorCode = !!errorCode && InteractionRequiredServerErrorMessage.indexOf(errorCode) > -1;
    const isInteractionRequiredSubError = !!subError && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
    const isInteractionRequiredErrorDesc = !!errorString && InteractionRequiredServerErrorMessage.some((irErrorCode)=>{
        return errorString.indexOf(irErrorCode) > -1;
    });
    return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
}
/**
 * Creates an InteractionRequiredAuthError
 */ function createInteractionRequiredAuthError(errorCode) {
    return new InteractionRequiredAuthError(errorCode, InteractionRequiredAuthErrorMessages[errorCode]);
}

},{"../utils/Constants.mjs":"lFItn","./AuthError.mjs":"8tPVA","./InteractionRequiredAuthErrorCodes.mjs":"hcVir","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hcVir":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "badToken", ()=>badToken);
parcelHelpers.export(exports, "consentRequired", ()=>consentRequired);
parcelHelpers.export(exports, "interactionRequired", ()=>interactionRequired);
parcelHelpers.export(exports, "loginRequired", ()=>loginRequired);
parcelHelpers.export(exports, "nativeAccountUnavailable", ()=>nativeAccountUnavailable);
parcelHelpers.export(exports, "noTokensFound", ()=>noTokensFound);
parcelHelpers.export(exports, "refreshTokenExpired", ()=>refreshTokenExpired);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ // Codes defined by MSAL
const noTokensFound = "no_tokens_found";
const nativeAccountUnavailable = "native_account_unavailable";
const refreshTokenExpired = "refresh_token_expired";
// Codes potentially returned by server
const interactionRequired = "interaction_required";
const consentRequired = "consent_required";
const loginRequired = "login_required";
const badToken = "bad_token";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kTXYA":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CacheRecord", ()=>CacheRecord);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /** @internal */ class CacheRecord {
    constructor(accountEntity, idTokenEntity, accessTokenEntity, refreshTokenEntity, appMetadataEntity){
        this.account = accountEntity || null;
        this.idToken = idTokenEntity || null;
        this.accessToken = accessTokenEntity || null;
        this.refreshToken = refreshTokenEntity || null;
        this.appMetadata = appMetadataEntity || null;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8oBjH":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProtocolUtils", ()=>ProtocolUtils);
var _constantsMjs = require("./Constants.mjs");
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Class which provides helpers for OAuth 2.0 protocol specific values
 */ class ProtocolUtils {
    /**
     * Appends user state with random guid, or returns random guid.
     * @param userState
     * @param randomGuid
     */ static setRequestState(cryptoObj, userState, meta) {
        const libraryState = ProtocolUtils.generateLibraryState(cryptoObj, meta);
        return userState ? `${libraryState}${(0, _constantsMjs.Constants).RESOURCE_DELIM}${userState}` : libraryState;
    }
    /**
     * Generates the state value used by the common library.
     * @param randomGuid
     * @param cryptoObj
     */ static generateLibraryState(cryptoObj, meta) {
        if (!cryptoObj) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.noCryptoObject));
        // Create a state object containing a unique id and the timestamp of the request creation
        const stateObj = {
            id: cryptoObj.createNewGuid()
        };
        if (meta) stateObj.meta = meta;
        const stateString = JSON.stringify(stateObj);
        return cryptoObj.base64Encode(stateString);
    }
    /**
     * Parses the state into the RequestStateObject, which contains the LibraryState info and the state passed by the user.
     * @param state
     * @param cryptoObj
     */ static parseRequestState(cryptoObj, state) {
        if (!cryptoObj) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.noCryptoObject));
        if (!state) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.invalidState));
        try {
            // Split the state between library state and user passed state and decode them separately
            const splitState = state.split((0, _constantsMjs.Constants).RESOURCE_DELIM);
            const libraryState = splitState[0];
            const userState = splitState.length > 1 ? splitState.slice(1).join((0, _constantsMjs.Constants).RESOURCE_DELIM) : (0, _constantsMjs.Constants).EMPTY_STRING;
            const libraryStateString = cryptoObj.base64Decode(libraryState);
            const libraryStateObj = JSON.parse(libraryStateString);
            return {
                userRequestState: userState || (0, _constantsMjs.Constants).EMPTY_STRING,
                libraryState: libraryStateObj
            };
        } catch (e) {
            throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.invalidState));
        }
    }
}

},{"./Constants.mjs":"lFItn","../error/ClientAuthError.mjs":"2qWlJ","../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6H3aG":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PopTokenGenerator", ()=>PopTokenGenerator);
var _timeUtilsMjs = require("../utils/TimeUtils.mjs");
var _urlStringMjs = require("../url/UrlString.mjs");
var _performanceEventMjs = require("../telemetry/performance/PerformanceEvent.mjs");
var _functionWrappersMjs = require("../utils/FunctionWrappers.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const KeyLocation = {
    SW: "sw",
    UHW: "uhw"
};
/** @internal */ class PopTokenGenerator {
    constructor(cryptoUtils, performanceClient){
        this.cryptoUtils = cryptoUtils;
        this.performanceClient = performanceClient;
    }
    /**
     * Generates the req_cnf validated at the RP in the POP protocol for SHR parameters
     * and returns an object containing the keyid, the full req_cnf string and the req_cnf string hash
     * @param request
     * @returns
     */ async generateCnf(request, logger) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).PopTokenGenerateCnf, request.correlationId);
        const reqCnf = await (0, _functionWrappersMjs.invokeAsync)(this.generateKid.bind(this), (0, _performanceEventMjs.PerformanceEvents).PopTokenGenerateCnf, logger, this.performanceClient, request.correlationId)(request);
        const reqCnfString = this.cryptoUtils.base64Encode(JSON.stringify(reqCnf));
        return {
            kid: reqCnf.kid,
            reqCnfString,
            reqCnfHash: await this.cryptoUtils.hashString(reqCnfString)
        };
    }
    /**
     * Generates key_id for a SHR token request
     * @param request
     * @returns
     */ async generateKid(request) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).PopTokenGenerateKid, request.correlationId);
        const kidThumbprint = await this.cryptoUtils.getPublicKeyThumbprint(request);
        return {
            kid: kidThumbprint,
            xms_ksl: KeyLocation.SW
        };
    }
    /**
     * Signs the POP access_token with the local generated key-pair
     * @param accessToken
     * @param request
     * @returns
     */ async signPopToken(accessToken, keyId, request) {
        return this.signPayload(accessToken, keyId, request);
    }
    /**
     * Utility function to generate the signed JWT for an access_token
     * @param payload
     * @param kid
     * @param request
     * @param claims
     * @returns
     */ async signPayload(payload, keyId, request, claims) {
        // Deconstruct request to extract SHR parameters
        const { resourceRequestMethod, resourceRequestUri, shrClaims, shrNonce, shrOptions } = request;
        const resourceUrlString = resourceRequestUri ? new (0, _urlStringMjs.UrlString)(resourceRequestUri) : undefined;
        const resourceUrlComponents = resourceUrlString?.getUrlComponents();
        return this.cryptoUtils.signJwt({
            at: payload,
            ts: (0, _timeUtilsMjs.nowSeconds)(),
            m: resourceRequestMethod?.toUpperCase(),
            u: resourceUrlComponents?.HostNameAndPort,
            nonce: shrNonce || this.cryptoUtils.createNewGuid(),
            p: resourceUrlComponents?.AbsolutePath,
            q: resourceUrlComponents?.QueryString ? [
                [],
                resourceUrlComponents.QueryString
            ] : undefined,
            client_claims: shrClaims || undefined,
            ...claims
        }, keyId, shrOptions, request.correlationId);
    }
}

},{"../utils/TimeUtils.mjs":"4YRSM","../url/UrlString.mjs":"km6Sc","../telemetry/performance/PerformanceEvent.mjs":"g49Qr","../utils/FunctionWrappers.mjs":"hcHk8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2MHhv":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TokenCacheContext", ()=>TokenCacheContext);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * This class instance helps track the memory changes facilitating
 * decisions to read from and write to the persistent cache
 */ class TokenCacheContext {
    constructor(tokenCache, hasChanged){
        this.cache = tokenCache;
        this.hasChanged = hasChanged;
    }
    /**
     * boolean which indicates the changes in cache
     */ get cacheHasChanged() {
        return this.hasChanged;
    }
    /**
     * function to retrieve the token cache
     */ get tokenCache() {
        return this.cache;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hQnJi":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RefreshTokenClient", ()=>RefreshTokenClient);
var _clientConfigurationMjs = require("../config/ClientConfiguration.mjs");
var _baseClientMjs = require("./BaseClient.mjs");
var _requestParameterBuilderMjs = require("../request/RequestParameterBuilder.mjs");
var _constantsMjs = require("../utils/Constants.mjs");
var _aadserverParamKeysMjs = require("../constants/AADServerParamKeys.mjs");
var _responseHandlerMjs = require("../response/ResponseHandler.mjs");
var _popTokenGeneratorMjs = require("../crypto/PopTokenGenerator.mjs");
var _stringUtilsMjs = require("../utils/StringUtils.mjs");
var _clientConfigurationErrorMjs = require("../error/ClientConfigurationError.mjs");
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _serverErrorMjs = require("../error/ServerError.mjs");
var _timeUtilsMjs = require("../utils/TimeUtils.mjs");
var _urlStringMjs = require("../url/UrlString.mjs");
var _ccsCredentialMjs = require("../account/CcsCredential.mjs");
var _clientInfoMjs = require("../account/ClientInfo.mjs");
var _interactionRequiredAuthErrorMjs = require("../error/InteractionRequiredAuthError.mjs");
var _performanceEventMjs = require("../telemetry/performance/PerformanceEvent.mjs");
var _functionWrappersMjs = require("../utils/FunctionWrappers.mjs");
var _cacheHelpersMjs = require("../cache/utils/CacheHelpers.mjs");
var _clientConfigurationErrorCodesMjs = require("../error/ClientConfigurationErrorCodes.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
var _interactionRequiredAuthErrorCodesMjs = require("../error/InteractionRequiredAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const DEFAULT_REFRESH_TOKEN_EXPIRATION_OFFSET_SECONDS = 300; // 5 Minutes
/**
 * OAuth2.0 refresh token client
 * @internal
 */ class RefreshTokenClient extends (0, _baseClientMjs.BaseClient) {
    constructor(configuration, performanceClient){
        super(configuration, performanceClient);
    }
    async acquireToken(request) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).RefreshTokenClientAcquireToken, request.correlationId);
        const reqTimestamp = (0, _timeUtilsMjs.nowSeconds)();
        const response = await (0, _functionWrappersMjs.invokeAsync)(this.executeTokenRequest.bind(this), (0, _performanceEventMjs.PerformanceEvents).RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, request.correlationId)(request, this.authority);
        // Retrieve requestId from response headers
        const requestId = response.headers?.[(0, _constantsMjs.HeaderNames).X_MS_REQUEST_ID];
        const responseHandler = new (0, _responseHandlerMjs.ResponseHandler)(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
        responseHandler.validateTokenResponse(response.body);
        return (0, _functionWrappersMjs.invokeAsync)(responseHandler.handleServerTokenResponse.bind(responseHandler), (0, _performanceEventMjs.PerformanceEvents).HandleServerTokenResponse, this.logger, this.performanceClient, request.correlationId)(response.body, this.authority, reqTimestamp, request, undefined, undefined, true, request.forceCache, requestId);
    }
    /**
     * Gets cached refresh token and attaches to request, then calls acquireToken API
     * @param request
     */ async acquireTokenByRefreshToken(request) {
        // Cannot renew token if no request object is given.
        if (!request) throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.tokenRequestEmpty));
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).RefreshTokenClientAcquireTokenByRefreshToken, request.correlationId);
        // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
        if (!request.account) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.noAccountInSilentRequest));
        // try checking if FOCI is enabled for the given application
        const isFOCI = this.cacheManager.isAppMetadataFOCI(request.account.environment);
        // if the app is part of the family, retrive a Family refresh token if present and make a refreshTokenRequest
        if (isFOCI) try {
            return await (0, _functionWrappersMjs.invokeAsync)(this.acquireTokenWithCachedRefreshToken.bind(this), (0, _performanceEventMjs.PerformanceEvents).RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, true);
        } catch (e) {
            const noFamilyRTInCache = e instanceof (0, _interactionRequiredAuthErrorMjs.InteractionRequiredAuthError) && e.errorCode === (0, _interactionRequiredAuthErrorCodesMjs.noTokensFound);
            const clientMismatchErrorWithFamilyRT = e instanceof (0, _serverErrorMjs.ServerError) && e.errorCode === (0, _constantsMjs.Errors).INVALID_GRANT_ERROR && e.subError === (0, _constantsMjs.Errors).CLIENT_MISMATCH_ERROR;
            // if family Refresh Token (FRT) cache acquisition fails or if client_mismatch error is seen with FRT, reattempt with application Refresh Token (ART)
            if (noFamilyRTInCache || clientMismatchErrorWithFamilyRT) return (0, _functionWrappersMjs.invokeAsync)(this.acquireTokenWithCachedRefreshToken.bind(this), (0, _performanceEventMjs.PerformanceEvents).RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, false);
            else throw e;
        }
        // fall back to application refresh token acquisition
        return (0, _functionWrappersMjs.invokeAsync)(this.acquireTokenWithCachedRefreshToken.bind(this), (0, _performanceEventMjs.PerformanceEvents).RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, request.correlationId)(request, false);
    }
    /**
     * makes a network call to acquire tokens by exchanging RefreshToken available in userCache; throws if refresh token is not cached
     * @param request
     */ async acquireTokenWithCachedRefreshToken(request, foci) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).RefreshTokenClientAcquireTokenWithCachedRefreshToken, request.correlationId);
        // fetches family RT or application RT based on FOCI value
        const refreshToken = (0, _functionWrappersMjs.invoke)(this.cacheManager.getRefreshToken.bind(this.cacheManager), (0, _performanceEventMjs.PerformanceEvents).CacheManagerGetRefreshToken, this.logger, this.performanceClient, request.correlationId)(request.account, foci, undefined, this.performanceClient, request.correlationId);
        if (!refreshToken) throw (0, _interactionRequiredAuthErrorMjs.createInteractionRequiredAuthError)((0, _interactionRequiredAuthErrorCodesMjs.noTokensFound));
        if (refreshToken.expiresOn && (0, _timeUtilsMjs.isTokenExpired)(refreshToken.expiresOn, request.refreshTokenExpirationOffsetSeconds || DEFAULT_REFRESH_TOKEN_EXPIRATION_OFFSET_SECONDS)) throw (0, _interactionRequiredAuthErrorMjs.createInteractionRequiredAuthError)((0, _interactionRequiredAuthErrorCodesMjs.refreshTokenExpired));
        // attach cached RT size to the current measurement
        const refreshTokenRequest = {
            ...request,
            refreshToken: refreshToken.secret,
            authenticationScheme: request.authenticationScheme || (0, _constantsMjs.AuthenticationScheme).BEARER,
            ccsCredential: {
                credential: request.account.homeAccountId,
                type: (0, _ccsCredentialMjs.CcsCredentialType).HOME_ACCOUNT_ID
            }
        };
        try {
            return await (0, _functionWrappersMjs.invokeAsync)(this.acquireToken.bind(this), (0, _performanceEventMjs.PerformanceEvents).RefreshTokenClientAcquireToken, this.logger, this.performanceClient, request.correlationId)(refreshTokenRequest);
        } catch (e) {
            if (e instanceof (0, _interactionRequiredAuthErrorMjs.InteractionRequiredAuthError) && e.subError === (0, _interactionRequiredAuthErrorCodesMjs.badToken)) {
                // Remove bad refresh token from cache
                this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache");
                const badRefreshTokenKey = (0, _cacheHelpersMjs.generateCredentialKey)(refreshToken);
                this.cacheManager.removeRefreshToken(badRefreshTokenKey);
            }
            throw e;
        }
    }
    /**
     * Constructs the network message and makes a NW call to the underlying secure token service
     * @param request
     * @param authority
     */ async executeTokenRequest(request, authority) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).RefreshTokenClientExecuteTokenRequest, request.correlationId);
        const queryParametersString = this.createTokenQueryParameters(request);
        const endpoint = (0, _urlStringMjs.UrlString).appendQueryString(authority.tokenEndpoint, queryParametersString);
        const requestBody = await (0, _functionWrappersMjs.invokeAsync)(this.createTokenRequestBody.bind(this), (0, _performanceEventMjs.PerformanceEvents).RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, request.correlationId)(request);
        const headers = this.createTokenRequestHeaders(request.ccsCredential);
        const thumbprint = {
            clientId: request.tokenBodyParameters?.clientId || this.config.authOptions.clientId,
            authority: authority.canonicalAuthority,
            scopes: request.scopes,
            claims: request.claims,
            authenticationScheme: request.authenticationScheme,
            resourceRequestMethod: request.resourceRequestMethod,
            resourceRequestUri: request.resourceRequestUri,
            shrClaims: request.shrClaims,
            sshKid: request.sshKid
        };
        return (0, _functionWrappersMjs.invokeAsync)(this.executePostToTokenEndpoint.bind(this), (0, _performanceEventMjs.PerformanceEvents).RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, request.correlationId)(endpoint, requestBody, headers, thumbprint, request.correlationId, (0, _performanceEventMjs.PerformanceEvents).RefreshTokenClientExecutePostToTokenEndpoint);
    }
    /**
     * Helper function to create the token request body
     * @param request
     */ async createTokenRequestBody(request) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).RefreshTokenClientCreateTokenRequestBody, request.correlationId);
        const correlationId = request.correlationId;
        const parameterBuilder = new (0, _requestParameterBuilderMjs.RequestParameterBuilder)();
        parameterBuilder.addClientId(request.tokenBodyParameters?.[0, _aadserverParamKeysMjs.CLIENT_ID] || this.config.authOptions.clientId);
        if (request.redirectUri) parameterBuilder.addRedirectUri(request.redirectUri);
        parameterBuilder.addScopes(request.scopes, true, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes);
        parameterBuilder.addGrantType((0, _constantsMjs.GrantType).REFRESH_TOKEN_GRANT);
        parameterBuilder.addClientInfo();
        parameterBuilder.addLibraryInfo(this.config.libraryInfo);
        parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
        parameterBuilder.addThrottling();
        if (this.serverTelemetryManager && !(0, _clientConfigurationMjs.isOidcProtocolMode)(this.config)) parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
        parameterBuilder.addCorrelationId(correlationId);
        parameterBuilder.addRefreshToken(request.refreshToken);
        if (this.config.clientCredentials.clientSecret) parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
        if (this.config.clientCredentials.clientAssertion) {
            const clientAssertion = this.config.clientCredentials.clientAssertion;
            parameterBuilder.addClientAssertion(clientAssertion.assertion);
            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
        }
        if (request.authenticationScheme === (0, _constantsMjs.AuthenticationScheme).POP) {
            const popTokenGenerator = new (0, _popTokenGeneratorMjs.PopTokenGenerator)(this.cryptoUtils, this.performanceClient);
            const reqCnfData = await (0, _functionWrappersMjs.invokeAsync)(popTokenGenerator.generateCnf.bind(popTokenGenerator), (0, _performanceEventMjs.PerformanceEvents).PopTokenGenerateCnf, this.logger, this.performanceClient, request.correlationId)(request, this.logger);
            // SPA PoP requires full Base64Url encoded req_cnf string (unhashed)
            parameterBuilder.addPopToken(reqCnfData.reqCnfString);
        } else if (request.authenticationScheme === (0, _constantsMjs.AuthenticationScheme).SSH) {
            if (request.sshJwk) parameterBuilder.addSshJwk(request.sshJwk);
            else throw (0, _clientConfigurationErrorMjs.createClientConfigurationError)((0, _clientConfigurationErrorCodesMjs.missingSshJwk));
        }
        if (!(0, _stringUtilsMjs.StringUtils).isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        if (this.config.systemOptions.preventCorsPreflight && request.ccsCredential) switch(request.ccsCredential.type){
            case (0, _ccsCredentialMjs.CcsCredentialType).HOME_ACCOUNT_ID:
                try {
                    const clientInfo = (0, _clientInfoMjs.buildClientInfoFromHomeAccountId)(request.ccsCredential.credential);
                    parameterBuilder.addCcsOid(clientInfo);
                } catch (e) {
                    this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                }
                break;
            case (0, _ccsCredentialMjs.CcsCredentialType).UPN:
                parameterBuilder.addCcsUpn(request.ccsCredential.credential);
                break;
        }
        if (request.tokenBodyParameters) parameterBuilder.addExtraQueryParameters(request.tokenBodyParameters);
        return parameterBuilder.createQueryString();
    }
}

},{"../config/ClientConfiguration.mjs":"a8XVu","./BaseClient.mjs":"5xOmc","../request/RequestParameterBuilder.mjs":"ilhWa","../utils/Constants.mjs":"lFItn","../constants/AADServerParamKeys.mjs":"9MeBU","../response/ResponseHandler.mjs":"dJSiC","../crypto/PopTokenGenerator.mjs":"6H3aG","../utils/StringUtils.mjs":"4cOPw","../error/ClientConfigurationError.mjs":"aV0KO","../error/ClientAuthError.mjs":"2qWlJ","../error/ServerError.mjs":"l3z3W","../utils/TimeUtils.mjs":"4YRSM","../url/UrlString.mjs":"km6Sc","../account/CcsCredential.mjs":"c0gGV","../account/ClientInfo.mjs":"e6eRZ","../error/InteractionRequiredAuthError.mjs":"2G6ns","../telemetry/performance/PerformanceEvent.mjs":"g49Qr","../utils/FunctionWrappers.mjs":"hcHk8","../cache/utils/CacheHelpers.mjs":"GDVlI","../error/ClientConfigurationErrorCodes.mjs":"1N7Do","../error/ClientAuthErrorCodes.mjs":"fhXae","../error/InteractionRequiredAuthErrorCodes.mjs":"hcVir","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7Ceu":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SilentFlowClient", ()=>SilentFlowClient);
var _baseClientMjs = require("./BaseClient.mjs");
var _timeUtilsMjs = require("../utils/TimeUtils.mjs");
var _refreshTokenClientMjs = require("./RefreshTokenClient.mjs");
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _responseHandlerMjs = require("../response/ResponseHandler.mjs");
var _constantsMjs = require("../utils/Constants.mjs");
var _stringUtilsMjs = require("../utils/StringUtils.mjs");
var _authTokenMjs = require("../account/AuthToken.mjs");
var _performanceEventMjs = require("../telemetry/performance/PerformanceEvent.mjs");
var _functionWrappersMjs = require("../utils/FunctionWrappers.mjs");
var _authorityMjs = require("../authority/Authority.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /** @internal */ class SilentFlowClient extends (0, _baseClientMjs.BaseClient) {
    constructor(configuration, performanceClient){
        super(configuration, performanceClient);
    }
    /**
     * Retrieves a token from cache if it is still valid, or uses the cached refresh token to renew
     * the given token and returns the renewed token
     * @param request
     */ async acquireToken(request) {
        try {
            const [authResponse, cacheOutcome] = await this.acquireCachedToken(request);
            // if the token is not expired but must be refreshed; get a new one in the background
            if (cacheOutcome === (0, _constantsMjs.CacheOutcome).PROACTIVELY_REFRESHED) {
                this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
                // refresh the access token in the background
                const refreshTokenClient = new (0, _refreshTokenClientMjs.RefreshTokenClient)(this.config, this.performanceClient);
                refreshTokenClient.acquireTokenByRefreshToken(request).catch(()=>{
                // do nothing, this is running in the background and no action is to be taken upon success or failure
                });
            }
            // return the cached token
            return authResponse;
        } catch (e) {
            if (e instanceof (0, _clientAuthErrorMjs.ClientAuthError) && e.errorCode === (0, _clientAuthErrorCodesMjs.tokenRefreshRequired)) {
                const refreshTokenClient = new (0, _refreshTokenClientMjs.RefreshTokenClient)(this.config, this.performanceClient);
                return refreshTokenClient.acquireTokenByRefreshToken(request);
            } else throw e;
        }
    }
    /**
     * Retrieves token from cache or throws an error if it must be refreshed.
     * @param request
     */ async acquireCachedToken(request) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).SilentFlowClientAcquireCachedToken, request.correlationId);
        let lastCacheOutcome = (0, _constantsMjs.CacheOutcome).NOT_APPLICABLE;
        if (request.forceRefresh || !this.config.cacheOptions.claimsBasedCachingEnabled && !(0, _stringUtilsMjs.StringUtils).isEmptyObj(request.claims)) {
            // Must refresh due to present force_refresh flag.
            this.setCacheOutcome((0, _constantsMjs.CacheOutcome).FORCE_REFRESH_OR_CLAIMS, request.correlationId);
            throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.tokenRefreshRequired));
        }
        // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
        if (!request.account) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.noAccountInSilentRequest));
        const requestTenantId = request.account.tenantId || (0, _authorityMjs.getTenantFromAuthorityString)(request.authority);
        const tokenKeys = this.cacheManager.getTokenKeys();
        const cachedAccessToken = this.cacheManager.getAccessToken(request.account, request, tokenKeys, requestTenantId, this.performanceClient, request.correlationId);
        if (!cachedAccessToken) {
            // must refresh due to non-existent access_token
            this.setCacheOutcome((0, _constantsMjs.CacheOutcome).NO_CACHED_ACCESS_TOKEN, request.correlationId);
            throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.tokenRefreshRequired));
        } else if ((0, _timeUtilsMjs.wasClockTurnedBack)(cachedAccessToken.cachedAt) || (0, _timeUtilsMjs.isTokenExpired)(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
            // must refresh due to the expires_in value
            this.setCacheOutcome((0, _constantsMjs.CacheOutcome).CACHED_ACCESS_TOKEN_EXPIRED, request.correlationId);
            throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.tokenRefreshRequired));
        } else if (cachedAccessToken.refreshOn && (0, _timeUtilsMjs.isTokenExpired)(cachedAccessToken.refreshOn, 0)) // must refresh (in the background) due to the refresh_in value
        lastCacheOutcome = (0, _constantsMjs.CacheOutcome).PROACTIVELY_REFRESHED;
        const environment = request.authority || this.authority.getPreferredCache();
        const cacheRecord = {
            account: this.cacheManager.readAccountFromCache(request.account),
            accessToken: cachedAccessToken,
            idToken: this.cacheManager.getIdToken(request.account, tokenKeys, requestTenantId, this.performanceClient, request.correlationId),
            refreshToken: null,
            appMetadata: this.cacheManager.readAppMetadataFromCache(environment)
        };
        this.setCacheOutcome(lastCacheOutcome, request.correlationId);
        if (this.config.serverTelemetryManager) this.config.serverTelemetryManager.incrementCacheHits();
        return [
            await (0, _functionWrappersMjs.invokeAsync)(this.generateResultFromCacheRecord.bind(this), (0, _performanceEventMjs.PerformanceEvents).SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, request.correlationId)(cacheRecord, request),
            lastCacheOutcome
        ];
    }
    setCacheOutcome(cacheOutcome, correlationId) {
        this.serverTelemetryManager?.setCacheOutcome(cacheOutcome);
        this.performanceClient?.addFields({
            cacheOutcome: cacheOutcome
        }, correlationId);
        if (cacheOutcome !== (0, _constantsMjs.CacheOutcome).NOT_APPLICABLE) this.logger.info(`Token refresh is required due to cache outcome: ${cacheOutcome}`);
    }
    /**
     * Helper function to build response object from the CacheRecord
     * @param cacheRecord
     */ async generateResultFromCacheRecord(cacheRecord, request) {
        this.performanceClient?.addQueueMeasurement((0, _performanceEventMjs.PerformanceEvents).SilentFlowClientGenerateResultFromCacheRecord, request.correlationId);
        let idTokenClaims;
        if (cacheRecord.idToken) idTokenClaims = (0, _authTokenMjs.extractTokenClaims)(cacheRecord.idToken.secret, this.config.cryptoInterface.base64Decode);
        // token max_age check
        if (request.maxAge || request.maxAge === 0) {
            const authTime = idTokenClaims?.auth_time;
            if (!authTime) throw (0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.authTimeNotFound));
            (0, _authTokenMjs.checkMaxAge)(authTime, request.maxAge);
        }
        return (0, _responseHandlerMjs.ResponseHandler).generateAuthenticationResult(this.cryptoUtils, this.authority, cacheRecord, true, request, idTokenClaims);
    }
}

},{"./BaseClient.mjs":"5xOmc","../utils/TimeUtils.mjs":"4YRSM","./RefreshTokenClient.mjs":"hQnJi","../error/ClientAuthError.mjs":"2qWlJ","../response/ResponseHandler.mjs":"dJSiC","../utils/Constants.mjs":"lFItn","../utils/StringUtils.mjs":"4cOPw","../account/AuthToken.mjs":"hZiUx","../telemetry/performance/PerformanceEvent.mjs":"g49Qr","../utils/FunctionWrappers.mjs":"hcHk8","../authority/Authority.mjs":"4lJrf","../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNZZv":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StubbedNetworkModule", ()=>StubbedNetworkModule);
var _clientAuthErrorMjs = require("../error/ClientAuthError.mjs");
var _clientAuthErrorCodesMjs = require("../error/ClientAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const StubbedNetworkModule = {
    sendGetRequestAsync: ()=>{
        return Promise.reject((0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented)));
    },
    sendPostRequestAsync: ()=>{
        return Promise.reject((0, _clientAuthErrorMjs.createClientAuthError)((0, _clientAuthErrorCodesMjs.methodNotImplemented)));
    }
};

},{"../error/ClientAuthError.mjs":"2qWlJ","../error/ClientAuthErrorCodes.mjs":"fhXae","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kXFP2":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "JoseHeader", ()=>JoseHeader);
var _joseHeaderErrorMjs = require("../error/JoseHeaderError.mjs");
var _constantsMjs = require("../utils/Constants.mjs");
var _joseHeaderErrorCodesMjs = require("../error/JoseHeaderErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /** @internal */ class JoseHeader {
    constructor(options){
        this.typ = options.typ;
        this.alg = options.alg;
        this.kid = options.kid;
    }
    /**
     * Builds SignedHttpRequest formatted JOSE Header from the
     * JOSE Header options provided or previously set on the object and returns
     * the stringified header object.
     * Throws if keyId or algorithm aren't provided since they are required for Access Token Binding.
     * @param shrHeaderOptions
     * @returns
     */ static getShrHeaderString(shrHeaderOptions) {
        // KeyID is required on the SHR header
        if (!shrHeaderOptions.kid) throw (0, _joseHeaderErrorMjs.createJoseHeaderError)((0, _joseHeaderErrorCodesMjs.missingKidError));
        // Alg is required on the SHR header
        if (!shrHeaderOptions.alg) throw (0, _joseHeaderErrorMjs.createJoseHeaderError)((0, _joseHeaderErrorCodesMjs.missingAlgError));
        const shrHeader = new JoseHeader({
            // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
            typ: shrHeaderOptions.typ || (0, _constantsMjs.JsonWebTokenTypes).Pop,
            kid: shrHeaderOptions.kid,
            alg: shrHeaderOptions.alg
        });
        return JSON.stringify(shrHeader);
    }
}

},{"../error/JoseHeaderError.mjs":"4VWtl","../utils/Constants.mjs":"lFItn","../error/JoseHeaderErrorCodes.mjs":"3qzAo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4VWtl":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "JoseHeaderError", ()=>JoseHeaderError);
parcelHelpers.export(exports, "JoseHeaderErrorMessages", ()=>JoseHeaderErrorMessages);
parcelHelpers.export(exports, "createJoseHeaderError", ()=>createJoseHeaderError);
var _authErrorMjs = require("./AuthError.mjs");
var _joseHeaderErrorCodesMjs = require("./JoseHeaderErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const JoseHeaderErrorMessages = {
    [(0, _joseHeaderErrorCodesMjs.missingKidError)]: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided.",
    [(0, _joseHeaderErrorCodesMjs.missingAlgError)]: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */ class JoseHeaderError extends (0, _authErrorMjs.AuthError) {
    constructor(errorCode, errorMessage){
        super(errorCode, errorMessage);
        this.name = "JoseHeaderError";
        Object.setPrototypeOf(this, JoseHeaderError.prototype);
    }
}
/** Returns JoseHeaderError object */ function createJoseHeaderError(code) {
    return new JoseHeaderError(code, JoseHeaderErrorMessages[code]);
}

},{"./AuthError.mjs":"8tPVA","./JoseHeaderErrorCodes.mjs":"3qzAo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3qzAo":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "missingAlgError", ()=>missingAlgError);
parcelHelpers.export(exports, "missingKidError", ()=>missingKidError);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const missingKidError = "missing_kid_error";
const missingAlgError = "missing_alg_error";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bVHrD":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ServerTelemetryManager", ()=>ServerTelemetryManager);
var _constantsMjs = require("../../utils/Constants.mjs");
var _authErrorMjs = require("../../error/AuthError.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /** @internal */ class ServerTelemetryManager {
    constructor(telemetryRequest, cacheManager){
        this.cacheOutcome = (0, _constantsMjs.CacheOutcome).NOT_APPLICABLE;
        this.cacheManager = cacheManager;
        this.apiId = telemetryRequest.apiId;
        this.correlationId = telemetryRequest.correlationId;
        this.wrapperSKU = telemetryRequest.wrapperSKU || (0, _constantsMjs.Constants).EMPTY_STRING;
        this.wrapperVer = telemetryRequest.wrapperVer || (0, _constantsMjs.Constants).EMPTY_STRING;
        this.telemetryCacheKey = (0, _constantsMjs.SERVER_TELEM_CONSTANTS).CACHE_KEY + (0, _constantsMjs.Separators).CACHE_KEY_SEPARATOR + telemetryRequest.clientId;
    }
    /**
     * API to add MSER Telemetry to request
     */ generateCurrentRequestHeaderValue() {
        const request = `${this.apiId}${(0, _constantsMjs.SERVER_TELEM_CONSTANTS).VALUE_SEPARATOR}${this.cacheOutcome}`;
        const platformFields = [
            this.wrapperSKU,
            this.wrapperVer
        ].join((0, _constantsMjs.SERVER_TELEM_CONSTANTS).VALUE_SEPARATOR);
        const regionDiscoveryFields = this.getRegionDiscoveryFields();
        const requestWithRegionDiscoveryFields = [
            request,
            regionDiscoveryFields
        ].join((0, _constantsMjs.SERVER_TELEM_CONSTANTS).VALUE_SEPARATOR);
        return [
            (0, _constantsMjs.SERVER_TELEM_CONSTANTS).SCHEMA_VERSION,
            requestWithRegionDiscoveryFields,
            platformFields
        ].join((0, _constantsMjs.SERVER_TELEM_CONSTANTS).CATEGORY_SEPARATOR);
    }
    /**
     * API to add MSER Telemetry for the last failed request
     */ generateLastRequestHeaderValue() {
        const lastRequests = this.getLastRequests();
        const maxErrors = ServerTelemetryManager.maxErrorsToSend(lastRequests);
        const failedRequests = lastRequests.failedRequests.slice(0, 2 * maxErrors).join((0, _constantsMjs.SERVER_TELEM_CONSTANTS).VALUE_SEPARATOR);
        const errors = lastRequests.errors.slice(0, maxErrors).join((0, _constantsMjs.SERVER_TELEM_CONSTANTS).VALUE_SEPARATOR);
        const errorCount = lastRequests.errors.length;
        // Indicate whether this header contains all data or partial data
        const overflow = maxErrors < errorCount ? (0, _constantsMjs.SERVER_TELEM_CONSTANTS).OVERFLOW_TRUE : (0, _constantsMjs.SERVER_TELEM_CONSTANTS).OVERFLOW_FALSE;
        const platformFields = [
            errorCount,
            overflow
        ].join((0, _constantsMjs.SERVER_TELEM_CONSTANTS).VALUE_SEPARATOR);
        return [
            (0, _constantsMjs.SERVER_TELEM_CONSTANTS).SCHEMA_VERSION,
            lastRequests.cacheHits,
            failedRequests,
            errors,
            platformFields
        ].join((0, _constantsMjs.SERVER_TELEM_CONSTANTS).CATEGORY_SEPARATOR);
    }
    /**
     * API to cache token failures for MSER data capture
     * @param error
     */ cacheFailedRequest(error) {
        const lastRequests = this.getLastRequests();
        if (lastRequests.errors.length >= (0, _constantsMjs.SERVER_TELEM_CONSTANTS).MAX_CACHED_ERRORS) {
            // Remove a cached error to make room, first in first out
            lastRequests.failedRequests.shift(); // apiId
            lastRequests.failedRequests.shift(); // correlationId
            lastRequests.errors.shift();
        }
        lastRequests.failedRequests.push(this.apiId, this.correlationId);
        if (error instanceof Error && !!error && error.toString()) {
            if (error instanceof (0, _authErrorMjs.AuthError)) {
                if (error.subError) lastRequests.errors.push(error.subError);
                else if (error.errorCode) lastRequests.errors.push(error.errorCode);
                else lastRequests.errors.push(error.toString());
            } else lastRequests.errors.push(error.toString());
        } else lastRequests.errors.push((0, _constantsMjs.SERVER_TELEM_CONSTANTS).UNKNOWN_ERROR);
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
        return;
    }
    /**
     * Update server telemetry cache entry by incrementing cache hit counter
     */ incrementCacheHits() {
        const lastRequests = this.getLastRequests();
        lastRequests.cacheHits += 1;
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
        return lastRequests.cacheHits;
    }
    /**
     * Get the server telemetry entity from cache or initialize a new one
     */ getLastRequests() {
        const initialValue = {
            failedRequests: [],
            errors: [],
            cacheHits: 0
        };
        const lastRequests = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
        return lastRequests || initialValue;
    }
    /**
     * Remove server telemetry cache entry
     */ clearTelemetryCache() {
        const lastRequests = this.getLastRequests();
        const numErrorsFlushed = ServerTelemetryManager.maxErrorsToSend(lastRequests);
        const errorCount = lastRequests.errors.length;
        if (numErrorsFlushed === errorCount) // All errors were sent on last request, clear Telemetry cache
        this.cacheManager.removeItem(this.telemetryCacheKey);
        else {
            // Partial data was flushed to server, construct a new telemetry cache item with errors that were not flushed
            const serverTelemEntity = {
                failedRequests: lastRequests.failedRequests.slice(numErrorsFlushed * 2),
                errors: lastRequests.errors.slice(numErrorsFlushed),
                cacheHits: 0
            };
            this.cacheManager.setServerTelemetry(this.telemetryCacheKey, serverTelemEntity);
        }
    }
    /**
     * Returns the maximum number of errors that can be flushed to the server in the next network request
     * @param serverTelemetryEntity
     */ static maxErrorsToSend(serverTelemetryEntity) {
        let i;
        let maxErrors = 0;
        let dataSize = 0;
        const errorCount = serverTelemetryEntity.errors.length;
        for(i = 0; i < errorCount; i++){
            // failedRequests parameter contains pairs of apiId and correlationId, multiply index by 2 to preserve pairs
            const apiId = serverTelemetryEntity.failedRequests[2 * i] || (0, _constantsMjs.Constants).EMPTY_STRING;
            const correlationId = serverTelemetryEntity.failedRequests[2 * i + 1] || (0, _constantsMjs.Constants).EMPTY_STRING;
            const errorCode = serverTelemetryEntity.errors[i] || (0, _constantsMjs.Constants).EMPTY_STRING;
            // Count number of characters that would be added to header, each character is 1 byte. Add 3 at the end to account for separators
            dataSize += apiId.toString().length + correlationId.toString().length + errorCode.length + 3;
            if (dataSize < (0, _constantsMjs.SERVER_TELEM_CONSTANTS).MAX_LAST_HEADER_BYTES) // Adding this entry to the header would still keep header size below the limit
            maxErrors += 1;
            else break;
        }
        return maxErrors;
    }
    /**
     * Get the region discovery fields
     *
     * @returns string
     */ getRegionDiscoveryFields() {
        const regionDiscoveryFields = [];
        regionDiscoveryFields.push(this.regionUsed || (0, _constantsMjs.Constants).EMPTY_STRING);
        regionDiscoveryFields.push(this.regionSource || (0, _constantsMjs.Constants).EMPTY_STRING);
        regionDiscoveryFields.push(this.regionOutcome || (0, _constantsMjs.Constants).EMPTY_STRING);
        return regionDiscoveryFields.join(",");
    }
    /**
     * Update the region discovery metadata
     *
     * @param regionDiscoveryMetadata
     * @returns void
     */ updateRegionDiscoveryMetadata(regionDiscoveryMetadata) {
        this.regionUsed = regionDiscoveryMetadata.region_used;
        this.regionSource = regionDiscoveryMetadata.region_source;
        this.regionOutcome = regionDiscoveryMetadata.region_outcome;
    }
    /**
     * Set cache outcome
     */ setCacheOutcome(cacheOutcome) {
        this.cacheOutcome = cacheOutcome;
    }
}

},{"../../utils/Constants.mjs":"lFItn","../../error/AuthError.mjs":"8tPVA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"urXAF":[function(require,module,exports) {
/*! @azure/msal-common v14.7.1 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StubPerformanceClient", ()=>StubPerformanceClient);
parcelHelpers.export(exports, "StubPerformanceMeasurement", ()=>StubPerformanceMeasurement);
var _performanceEventMjs = require("./PerformanceEvent.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class StubPerformanceMeasurement {
    startMeasurement() {
        return;
    }
    endMeasurement() {
        return;
    }
    flushMeasurement() {
        return null;
    }
}
class StubPerformanceClient {
    generateId() {
        return "callback-id";
    }
    startMeasurement(measureName, correlationId) {
        return {
            end: ()=>null,
            discard: ()=>{},
            add: ()=>{},
            increment: ()=>{},
            event: {
                eventId: this.generateId(),
                status: (0, _performanceEventMjs.PerformanceEventStatus).InProgress,
                authority: "",
                libraryName: "",
                libraryVersion: "",
                clientId: "",
                name: measureName,
                startTimeMs: Date.now(),
                correlationId: correlationId || ""
            },
            measurement: new StubPerformanceMeasurement()
        };
    }
    startPerformanceMeasurement() {
        return new StubPerformanceMeasurement();
    }
    calculateQueuedTime() {
        return 0;
    }
    addQueueMeasurement() {
        return;
    }
    setPreQueueTime() {
        return;
    }
    endMeasurement() {
        return null;
    }
    discardMeasurements() {
        return;
    }
    removePerformanceCallback() {
        return true;
    }
    addPerformanceCallback() {
        return "";
    }
    emitEvents() {
        return;
    }
    addFields() {
        return;
    }
    incrementFields() {
        return;
    }
    cacheEventByCorrelationId() {
        return;
    }
}

},{"./PerformanceEvent.mjs":"g49Qr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hI9Lm":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BrowserAuthErrorCodes", ()=>_browserAuthErrorCodesMjs);
parcelHelpers.export(exports, "BrowserAuthError", ()=>BrowserAuthError);
parcelHelpers.export(exports, "BrowserAuthErrorMessage", ()=>BrowserAuthErrorMessage);
parcelHelpers.export(exports, "BrowserAuthErrorMessages", ()=>BrowserAuthErrorMessages);
parcelHelpers.export(exports, "createBrowserAuthError", ()=>createBrowserAuthError);
var _msalCommon = require("@azure/msal-common");
var _browserAuthErrorCodesMjs = require("./BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const ErrorLink = "For more visit: aka.ms/msaljs/browser-errors";
/**
 * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
 */ const BrowserAuthErrorMessages = {
    [(0, _browserAuthErrorCodesMjs.pkceNotCreated)]: "The PKCE code challenge and verifier could not be generated.",
    [(0, _browserAuthErrorCodesMjs.cryptoNonExistent)]: "The crypto object or function is not available.",
    [(0, _browserAuthErrorCodesMjs.emptyNavigateUri)]: "Navigation URI is empty. Please check stack trace for more info.",
    [(0, _browserAuthErrorCodesMjs.hashEmptyError)]: `Hash value cannot be processed because it is empty. Please verify that your redirectUri is not clearing the hash. ${ErrorLink}`,
    [(0, _browserAuthErrorCodesMjs.noStateInHash)]: "Hash does not contain state. Please verify that the request originated from msal.",
    [(0, _browserAuthErrorCodesMjs.hashDoesNotContainKnownProperties)]: `Hash does not contain known properites. Please verify that your redirectUri is not changing the hash.  ${ErrorLink}`,
    [(0, _browserAuthErrorCodesMjs.unableToParseState)]: "Unable to parse state. Please verify that the request originated from msal.",
    [(0, _browserAuthErrorCodesMjs.stateInteractionTypeMismatch)]: "Hash contains state but the interaction type does not match the caller.",
    [(0, _browserAuthErrorCodesMjs.interactionInProgress)]: `Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.   ${ErrorLink}`,
    [(0, _browserAuthErrorCodesMjs.popupWindowError)]: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser.",
    [(0, _browserAuthErrorCodesMjs.emptyWindowError)]: "window.open returned null or undefined window object.",
    [(0, _browserAuthErrorCodesMjs.userCancelled)]: "User cancelled the flow.",
    [(0, _browserAuthErrorCodesMjs.monitorPopupTimeout)]: `Token acquisition in popup failed due to timeout.  ${ErrorLink}`,
    [(0, _browserAuthErrorCodesMjs.monitorWindowTimeout)]: `Token acquisition in iframe failed due to timeout.  ${ErrorLink}`,
    [(0, _browserAuthErrorCodesMjs.redirectInIframe)]: "Redirects are not supported for iframed or brokered applications. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs.",
    [(0, _browserAuthErrorCodesMjs.blockIframeReload)]: `Request was blocked inside an iframe because MSAL detected an authentication response.  ${ErrorLink}`,
    [(0, _browserAuthErrorCodesMjs.blockNestedPopups)]: "Request was blocked inside a popup because MSAL detected it was running in a popup.",
    [(0, _browserAuthErrorCodesMjs.iframeClosedPrematurely)]: "The iframe being monitored was closed prematurely.",
    [(0, _browserAuthErrorCodesMjs.silentLogoutUnsupported)]: "Silent logout not supported. Please call logoutRedirect or logoutPopup instead.",
    [(0, _browserAuthErrorCodesMjs.noAccountError)]: "No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request.",
    [(0, _browserAuthErrorCodesMjs.silentPromptValueError)]: "The value given for the prompt value is not valid for silent requests - must be set to 'none' or 'no_session'.",
    [(0, _browserAuthErrorCodesMjs.noTokenRequestCacheError)]: "No token request found in cache.",
    [(0, _browserAuthErrorCodesMjs.unableToParseTokenRequestCacheError)]: "The cached token request could not be parsed.",
    [(0, _browserAuthErrorCodesMjs.noCachedAuthorityError)]: "No cached authority found.",
    [(0, _browserAuthErrorCodesMjs.authRequestNotSetError)]: "Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler",
    [(0, _browserAuthErrorCodesMjs.invalidCacheType)]: "Invalid cache type",
    [(0, _browserAuthErrorCodesMjs.nonBrowserEnvironment)]: "Login and token requests are not supported in non-browser environments.",
    [(0, _browserAuthErrorCodesMjs.databaseNotOpen)]: "Database is not open!",
    [(0, _browserAuthErrorCodesMjs.noNetworkConnectivity)]: "No network connectivity. Check your internet connection.",
    [(0, _browserAuthErrorCodesMjs.postRequestFailed)]: "Network request failed: If the browser threw a CORS error, check that the redirectUri is registered in the Azure App Portal as type 'SPA'",
    [(0, _browserAuthErrorCodesMjs.getRequestFailed)]: "Network request failed. Please check the network trace to determine root cause.",
    [(0, _browserAuthErrorCodesMjs.failedToParseResponse)]: "Failed to parse network response. Check network trace.",
    [(0, _browserAuthErrorCodesMjs.unableToLoadToken)]: "Error loading token to cache.",
    [(0, _browserAuthErrorCodesMjs.cryptoKeyNotFound)]: "Cryptographic Key or Keypair not found in browser storage.",
    [(0, _browserAuthErrorCodesMjs.authCodeRequired)]: "An authorization code must be provided (as the `code` property on the request) to this flow.",
    [(0, _browserAuthErrorCodesMjs.authCodeOrNativeAccountIdRequired)]: "An authorization code or nativeAccountId must be provided to this flow.",
    [(0, _browserAuthErrorCodesMjs.spaCodeAndNativeAccountIdPresent)]: "Request cannot contain both spa code and native account id.",
    [(0, _browserAuthErrorCodesMjs.databaseUnavailable)]: "IndexedDB, which is required for persistent cryptographic key storage, is unavailable. This may be caused by browser privacy features which block persistent storage in third-party contexts.",
    [(0, _browserAuthErrorCodesMjs.unableToAcquireTokenFromNativePlatform)]: `Unable to acquire token from native platform.  ${ErrorLink}`,
    [(0, _browserAuthErrorCodesMjs.nativeHandshakeTimeout)]: "Timed out while attempting to establish connection to browser extension",
    [(0, _browserAuthErrorCodesMjs.nativeExtensionNotInstalled)]: "Native extension is not installed. If you think this is a mistake call the initialize function.",
    [(0, _browserAuthErrorCodesMjs.nativeConnectionNotEstablished)]: `Connection to native platform has not been established. Please install a compatible browser extension and run initialize().  ${ErrorLink}`,
    [(0, _browserAuthErrorCodesMjs.uninitializedPublicClientApplication)]: `You must call and await the initialize function before attempting to call any other MSAL API.  ${ErrorLink}`,
    [(0, _browserAuthErrorCodesMjs.nativePromptNotSupported)]: "The provided prompt is not supported by the native platform. This request should be routed to the web based flow.",
    [(0, _browserAuthErrorCodesMjs.invalidBase64String)]: "Invalid base64 encoded string."
};
/**
 * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
 * @deprecated Use exported BrowserAuthErrorCodes instead.
 * In your app you can do :
 * ```
 * import { BrowserAuthErrorCodes } from "@azure/msal-browser";
 * ```
 */ const BrowserAuthErrorMessage = {
    pkceNotGenerated: {
        code: (0, _browserAuthErrorCodesMjs.pkceNotCreated),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.pkceNotCreated]
    },
    cryptoDoesNotExist: {
        code: (0, _browserAuthErrorCodesMjs.cryptoNonExistent),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.cryptoNonExistent]
    },
    emptyNavigateUriError: {
        code: (0, _browserAuthErrorCodesMjs.emptyNavigateUri),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.emptyNavigateUri]
    },
    hashEmptyError: {
        code: (0, _browserAuthErrorCodesMjs.hashEmptyError),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.hashEmptyError]
    },
    hashDoesNotContainStateError: {
        code: (0, _browserAuthErrorCodesMjs.noStateInHash),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.noStateInHash]
    },
    hashDoesNotContainKnownPropertiesError: {
        code: (0, _browserAuthErrorCodesMjs.hashDoesNotContainKnownProperties),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.hashDoesNotContainKnownProperties]
    },
    unableToParseStateError: {
        code: (0, _browserAuthErrorCodesMjs.unableToParseState),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.unableToParseState]
    },
    stateInteractionTypeMismatchError: {
        code: (0, _browserAuthErrorCodesMjs.stateInteractionTypeMismatch),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.stateInteractionTypeMismatch]
    },
    interactionInProgress: {
        code: (0, _browserAuthErrorCodesMjs.interactionInProgress),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.interactionInProgress]
    },
    popupWindowError: {
        code: (0, _browserAuthErrorCodesMjs.popupWindowError),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.popupWindowError]
    },
    emptyWindowError: {
        code: (0, _browserAuthErrorCodesMjs.emptyWindowError),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.emptyWindowError]
    },
    userCancelledError: {
        code: (0, _browserAuthErrorCodesMjs.userCancelled),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.userCancelled]
    },
    monitorPopupTimeoutError: {
        code: (0, _browserAuthErrorCodesMjs.monitorPopupTimeout),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.monitorPopupTimeout]
    },
    monitorIframeTimeoutError: {
        code: (0, _browserAuthErrorCodesMjs.monitorWindowTimeout),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.monitorWindowTimeout]
    },
    redirectInIframeError: {
        code: (0, _browserAuthErrorCodesMjs.redirectInIframe),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.redirectInIframe]
    },
    blockTokenRequestsInHiddenIframeError: {
        code: (0, _browserAuthErrorCodesMjs.blockIframeReload),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.blockIframeReload]
    },
    blockAcquireTokenInPopupsError: {
        code: (0, _browserAuthErrorCodesMjs.blockNestedPopups),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.blockNestedPopups]
    },
    iframeClosedPrematurelyError: {
        code: (0, _browserAuthErrorCodesMjs.iframeClosedPrematurely),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.iframeClosedPrematurely]
    },
    silentLogoutUnsupportedError: {
        code: (0, _browserAuthErrorCodesMjs.silentLogoutUnsupported),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.silentLogoutUnsupported]
    },
    noAccountError: {
        code: (0, _browserAuthErrorCodesMjs.noAccountError),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.noAccountError]
    },
    silentPromptValueError: {
        code: (0, _browserAuthErrorCodesMjs.silentPromptValueError),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.silentPromptValueError]
    },
    noTokenRequestCacheError: {
        code: (0, _browserAuthErrorCodesMjs.noTokenRequestCacheError),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.noTokenRequestCacheError]
    },
    unableToParseTokenRequestCacheError: {
        code: (0, _browserAuthErrorCodesMjs.unableToParseTokenRequestCacheError),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.unableToParseTokenRequestCacheError]
    },
    noCachedAuthorityError: {
        code: (0, _browserAuthErrorCodesMjs.noCachedAuthorityError),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.noCachedAuthorityError]
    },
    authRequestNotSet: {
        code: (0, _browserAuthErrorCodesMjs.authRequestNotSetError),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.authRequestNotSetError]
    },
    invalidCacheType: {
        code: (0, _browserAuthErrorCodesMjs.invalidCacheType),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.invalidCacheType]
    },
    notInBrowserEnvironment: {
        code: (0, _browserAuthErrorCodesMjs.nonBrowserEnvironment),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.nonBrowserEnvironment]
    },
    databaseNotOpen: {
        code: (0, _browserAuthErrorCodesMjs.databaseNotOpen),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.databaseNotOpen]
    },
    noNetworkConnectivity: {
        code: (0, _browserAuthErrorCodesMjs.noNetworkConnectivity),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.noNetworkConnectivity]
    },
    postRequestFailed: {
        code: (0, _browserAuthErrorCodesMjs.postRequestFailed),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.postRequestFailed]
    },
    getRequestFailed: {
        code: (0, _browserAuthErrorCodesMjs.getRequestFailed),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.getRequestFailed]
    },
    failedToParseNetworkResponse: {
        code: (0, _browserAuthErrorCodesMjs.failedToParseResponse),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.failedToParseResponse]
    },
    unableToLoadTokenError: {
        code: (0, _browserAuthErrorCodesMjs.unableToLoadToken),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.unableToLoadToken]
    },
    signingKeyNotFoundInStorage: {
        code: (0, _browserAuthErrorCodesMjs.cryptoKeyNotFound),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.cryptoKeyNotFound]
    },
    authCodeRequired: {
        code: (0, _browserAuthErrorCodesMjs.authCodeRequired),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.authCodeRequired]
    },
    authCodeOrNativeAccountRequired: {
        code: (0, _browserAuthErrorCodesMjs.authCodeOrNativeAccountIdRequired),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.authCodeOrNativeAccountIdRequired]
    },
    spaCodeAndNativeAccountPresent: {
        code: (0, _browserAuthErrorCodesMjs.spaCodeAndNativeAccountIdPresent),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.spaCodeAndNativeAccountIdPresent]
    },
    databaseUnavailable: {
        code: (0, _browserAuthErrorCodesMjs.databaseUnavailable),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.databaseUnavailable]
    },
    unableToAcquireTokenFromNativePlatform: {
        code: (0, _browserAuthErrorCodesMjs.unableToAcquireTokenFromNativePlatform),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.unableToAcquireTokenFromNativePlatform]
    },
    nativeHandshakeTimeout: {
        code: (0, _browserAuthErrorCodesMjs.nativeHandshakeTimeout),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.nativeHandshakeTimeout]
    },
    nativeExtensionNotInstalled: {
        code: (0, _browserAuthErrorCodesMjs.nativeExtensionNotInstalled),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.nativeExtensionNotInstalled]
    },
    nativeConnectionNotEstablished: {
        code: (0, _browserAuthErrorCodesMjs.nativeConnectionNotEstablished),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.nativeConnectionNotEstablished]
    },
    uninitializedPublicClientApplication: {
        code: (0, _browserAuthErrorCodesMjs.uninitializedPublicClientApplication),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.uninitializedPublicClientApplication]
    },
    nativePromptNotSupported: {
        code: (0, _browserAuthErrorCodesMjs.nativePromptNotSupported),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.nativePromptNotSupported]
    },
    invalidBase64StringError: {
        code: (0, _browserAuthErrorCodesMjs.invalidBase64String),
        desc: BrowserAuthErrorMessages[0, _browserAuthErrorCodesMjs.invalidBase64String]
    }
};
/**
 * Browser library error class thrown by the MSAL.js library for SPAs
 */ class BrowserAuthError extends (0, _msalCommon.AuthError) {
    constructor(errorCode){
        super(errorCode, BrowserAuthErrorMessages[errorCode]);
        Object.setPrototypeOf(this, BrowserAuthError.prototype);
        this.name = "BrowserAuthError";
    }
}
function createBrowserAuthError(errorCode) {
    return new BrowserAuthError(errorCode);
}

},{"@azure/msal-common":"rNWNa","./BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Rg8e":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "authCodeOrNativeAccountIdRequired", ()=>authCodeOrNativeAccountIdRequired);
parcelHelpers.export(exports, "authCodeRequired", ()=>authCodeRequired);
parcelHelpers.export(exports, "authRequestNotSetError", ()=>authRequestNotSetError);
parcelHelpers.export(exports, "blockIframeReload", ()=>blockIframeReload);
parcelHelpers.export(exports, "blockNestedPopups", ()=>blockNestedPopups);
parcelHelpers.export(exports, "cryptoKeyNotFound", ()=>cryptoKeyNotFound);
parcelHelpers.export(exports, "cryptoNonExistent", ()=>cryptoNonExistent);
parcelHelpers.export(exports, "databaseNotOpen", ()=>databaseNotOpen);
parcelHelpers.export(exports, "databaseUnavailable", ()=>databaseUnavailable);
parcelHelpers.export(exports, "emptyNavigateUri", ()=>emptyNavigateUri);
parcelHelpers.export(exports, "emptyWindowError", ()=>emptyWindowError);
parcelHelpers.export(exports, "failedToParseResponse", ()=>failedToParseResponse);
parcelHelpers.export(exports, "getRequestFailed", ()=>getRequestFailed);
parcelHelpers.export(exports, "hashDoesNotContainKnownProperties", ()=>hashDoesNotContainKnownProperties);
parcelHelpers.export(exports, "hashEmptyError", ()=>hashEmptyError);
parcelHelpers.export(exports, "iframeClosedPrematurely", ()=>iframeClosedPrematurely);
parcelHelpers.export(exports, "interactionInProgress", ()=>interactionInProgress);
parcelHelpers.export(exports, "invalidBase64String", ()=>invalidBase64String);
parcelHelpers.export(exports, "invalidCacheType", ()=>invalidCacheType);
parcelHelpers.export(exports, "monitorPopupTimeout", ()=>monitorPopupTimeout);
parcelHelpers.export(exports, "monitorWindowTimeout", ()=>monitorWindowTimeout);
parcelHelpers.export(exports, "nativeConnectionNotEstablished", ()=>nativeConnectionNotEstablished);
parcelHelpers.export(exports, "nativeExtensionNotInstalled", ()=>nativeExtensionNotInstalled);
parcelHelpers.export(exports, "nativeHandshakeTimeout", ()=>nativeHandshakeTimeout);
parcelHelpers.export(exports, "nativePromptNotSupported", ()=>nativePromptNotSupported);
parcelHelpers.export(exports, "noAccountError", ()=>noAccountError);
parcelHelpers.export(exports, "noCachedAuthorityError", ()=>noCachedAuthorityError);
parcelHelpers.export(exports, "noNetworkConnectivity", ()=>noNetworkConnectivity);
parcelHelpers.export(exports, "noStateInHash", ()=>noStateInHash);
parcelHelpers.export(exports, "noTokenRequestCacheError", ()=>noTokenRequestCacheError);
parcelHelpers.export(exports, "nonBrowserEnvironment", ()=>nonBrowserEnvironment);
parcelHelpers.export(exports, "pkceNotCreated", ()=>pkceNotCreated);
parcelHelpers.export(exports, "popupWindowError", ()=>popupWindowError);
parcelHelpers.export(exports, "postRequestFailed", ()=>postRequestFailed);
parcelHelpers.export(exports, "redirectInIframe", ()=>redirectInIframe);
parcelHelpers.export(exports, "silentLogoutUnsupported", ()=>silentLogoutUnsupported);
parcelHelpers.export(exports, "silentPromptValueError", ()=>silentPromptValueError);
parcelHelpers.export(exports, "spaCodeAndNativeAccountIdPresent", ()=>spaCodeAndNativeAccountIdPresent);
parcelHelpers.export(exports, "stateInteractionTypeMismatch", ()=>stateInteractionTypeMismatch);
parcelHelpers.export(exports, "unableToAcquireTokenFromNativePlatform", ()=>unableToAcquireTokenFromNativePlatform);
parcelHelpers.export(exports, "unableToLoadToken", ()=>unableToLoadToken);
parcelHelpers.export(exports, "unableToParseState", ()=>unableToParseState);
parcelHelpers.export(exports, "unableToParseTokenRequestCacheError", ()=>unableToParseTokenRequestCacheError);
parcelHelpers.export(exports, "uninitializedPublicClientApplication", ()=>uninitializedPublicClientApplication);
parcelHelpers.export(exports, "userCancelled", ()=>userCancelled);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const pkceNotCreated = "pkce_not_created";
const cryptoNonExistent = "crypto_nonexistent";
const emptyNavigateUri = "empty_navigate_uri";
const hashEmptyError = "hash_empty_error";
const noStateInHash = "no_state_in_hash";
const hashDoesNotContainKnownProperties = "hash_does_not_contain_known_properties";
const unableToParseState = "unable_to_parse_state";
const stateInteractionTypeMismatch = "state_interaction_type_mismatch";
const interactionInProgress = "interaction_in_progress";
const popupWindowError = "popup_window_error";
const emptyWindowError = "empty_window_error";
const userCancelled = "user_cancelled";
const monitorPopupTimeout = "monitor_popup_timeout";
const monitorWindowTimeout = "monitor_window_timeout";
const redirectInIframe = "redirect_in_iframe";
const blockIframeReload = "block_iframe_reload";
const blockNestedPopups = "block_nested_popups";
const iframeClosedPrematurely = "iframe_closed_prematurely";
const silentLogoutUnsupported = "silent_logout_unsupported";
const noAccountError = "no_account_error";
const silentPromptValueError = "silent_prompt_value_error";
const noTokenRequestCacheError = "no_token_request_cache_error";
const unableToParseTokenRequestCacheError = "unable_to_parse_token_request_cache_error";
const noCachedAuthorityError = "no_cached_authority_error";
const authRequestNotSetError = "auth_request_not_set_error";
const invalidCacheType = "invalid_cache_type";
const nonBrowserEnvironment = "non_browser_environment";
const databaseNotOpen = "database_not_open";
const noNetworkConnectivity = "no_network_connectivity";
const postRequestFailed = "post_request_failed";
const getRequestFailed = "get_request_failed";
const failedToParseResponse = "failed_to_parse_response";
const unableToLoadToken = "unable_to_load_token";
const cryptoKeyNotFound = "crypto_key_not_found";
const authCodeRequired = "auth_code_required";
const authCodeOrNativeAccountIdRequired = "auth_code_or_nativeAccountId_required";
const spaCodeAndNativeAccountIdPresent = "spa_code_and_nativeAccountId_present";
const databaseUnavailable = "database_unavailable";
const unableToAcquireTokenFromNativePlatform = "unable_to_acquire_token_from_native_platform";
const nativeHandshakeTimeout = "native_handshake_timeout";
const nativeExtensionNotInstalled = "native_extension_not_installed";
const nativeConnectionNotEstablished = "native_connection_not_established";
const uninitializedPublicClientApplication = "uninitialized_public_client_application";
const nativePromptNotSupported = "native_prompt_not_supported";
const invalidBase64String = "invalid_base64_string";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"izeV4":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApiId", ()=>ApiId);
parcelHelpers.export(exports, "BROWSER_PERF_ENABLED_KEY", ()=>BROWSER_PERF_ENABLED_KEY);
parcelHelpers.export(exports, "BrowserCacheLocation", ()=>BrowserCacheLocation);
parcelHelpers.export(exports, "BrowserConstants", ()=>BrowserConstants);
parcelHelpers.export(exports, "CacheLookupPolicy", ()=>CacheLookupPolicy);
parcelHelpers.export(exports, "DB_NAME", ()=>DB_NAME);
parcelHelpers.export(exports, "DB_TABLE_NAME", ()=>DB_TABLE_NAME);
parcelHelpers.export(exports, "DB_VERSION", ()=>DB_VERSION);
parcelHelpers.export(exports, "DEFAULT_REQUEST", ()=>DEFAULT_REQUEST);
parcelHelpers.export(exports, "HTTP_REQUEST_TYPE", ()=>HTTP_REQUEST_TYPE);
parcelHelpers.export(exports, "InMemoryCacheKeys", ()=>InMemoryCacheKeys);
parcelHelpers.export(exports, "InteractionStatus", ()=>InteractionStatus);
parcelHelpers.export(exports, "InteractionType", ()=>InteractionType);
parcelHelpers.export(exports, "KEY_FORMAT_JWK", ()=>KEY_FORMAT_JWK);
parcelHelpers.export(exports, "LOG_LEVEL_CACHE_KEY", ()=>LOG_LEVEL_CACHE_KEY);
parcelHelpers.export(exports, "LOG_PII_CACHE_KEY", ()=>LOG_PII_CACHE_KEY);
parcelHelpers.export(exports, "NativeConstants", ()=>NativeConstants);
parcelHelpers.export(exports, "NativeExtensionMethod", ()=>NativeExtensionMethod);
parcelHelpers.export(exports, "StaticCacheKeys", ()=>StaticCacheKeys);
parcelHelpers.export(exports, "TemporaryCacheKeys", ()=>TemporaryCacheKeys);
parcelHelpers.export(exports, "WrapperSKU", ()=>WrapperSKU);
parcelHelpers.export(exports, "iFrameRenewalPolicies", ()=>iFrameRenewalPolicies);
var _msalCommon = require("@azure/msal-common");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Constants
 */ const BrowserConstants = {
    /**
     * Interaction in progress cache value
     */ INTERACTION_IN_PROGRESS_VALUE: "interaction_in_progress",
    /**
     * Invalid grant error code
     */ INVALID_GRANT_ERROR: "invalid_grant",
    /**
     * Default popup window width
     */ POPUP_WIDTH: 483,
    /**
     * Default popup window height
     */ POPUP_HEIGHT: 600,
    /**
     * Name of the popup window starts with
     */ POPUP_NAME_PREFIX: "msal",
    /**
     * Default popup monitor poll interval in milliseconds
     */ DEFAULT_POLL_INTERVAL_MS: 30,
    /**
     * Msal-browser SKU
     */ MSAL_SKU: "msal.js.browser"
};
const NativeConstants = {
    CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
    PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
    MATS_TELEMETRY: "MATS"
};
const NativeExtensionMethod = {
    HandshakeRequest: "Handshake",
    HandshakeResponse: "HandshakeResponse",
    GetToken: "GetToken",
    Response: "Response"
};
const BrowserCacheLocation = {
    LocalStorage: "localStorage",
    SessionStorage: "sessionStorage",
    MemoryStorage: "memoryStorage"
};
/**
 * HTTP Request types supported by MSAL.
 */ const HTTP_REQUEST_TYPE = {
    GET: "GET",
    POST: "POST"
};
/**
 * Temporary cache keys for MSAL, deleted after any request.
 */ const TemporaryCacheKeys = {
    AUTHORITY: "authority",
    ACQUIRE_TOKEN_ACCOUNT: "acquireToken.account",
    SESSION_STATE: "session.state",
    REQUEST_STATE: "request.state",
    NONCE_IDTOKEN: "nonce.id_token",
    ORIGIN_URI: "request.origin",
    RENEW_STATUS: "token.renew.status",
    URL_HASH: "urlHash",
    REQUEST_PARAMS: "request.params",
    SCOPES: "scopes",
    INTERACTION_STATUS_KEY: "interaction.status",
    CCS_CREDENTIAL: "ccs.credential",
    CORRELATION_ID: "request.correlationId",
    NATIVE_REQUEST: "request.native",
    REDIRECT_CONTEXT: "request.redirect.context"
};
const StaticCacheKeys = {
    ACCOUNT_KEYS: "msal.account.keys",
    TOKEN_KEYS: "msal.token.keys"
};
/**
 * Cache keys stored in-memory
 */ const InMemoryCacheKeys = {
    WRAPPER_SKU: "wrapper.sku",
    WRAPPER_VER: "wrapper.version"
};
/**
 * API Codes for Telemetry purposes.
 * Before adding a new code you must claim it in the MSAL Telemetry tracker as these number spaces are shared across all MSALs
 * 0-99 Silent Flow
 * 800-899 Auth Code Flow
 */ const ApiId = {
    acquireTokenRedirect: 861,
    acquireTokenPopup: 862,
    ssoSilent: 863,
    acquireTokenSilent_authCode: 864,
    handleRedirectPromise: 865,
    acquireTokenByCode: 866,
    acquireTokenSilent_silentFlow: 61,
    logout: 961,
    logoutPopup: 962
};
/*
 * Interaction type of the API - used for state and telemetry
 */ var InteractionType;
(function(InteractionType) {
    InteractionType["Redirect"] = "redirect";
    InteractionType["Popup"] = "popup";
    InteractionType["Silent"] = "silent";
    InteractionType["None"] = "none";
})(InteractionType || (InteractionType = {}));
/**
 * Types of interaction currently in progress.
 * Used in events in wrapper libraries to invoke functions when certain interaction is in progress or all interactions are complete.
 */ const InteractionStatus = {
    /**
     * Initial status before interaction occurs
     */ Startup: "startup",
    /**
     * Status set when all login calls occuring
     */ Login: "login",
    /**
     * Status set when logout call occuring
     */ Logout: "logout",
    /**
     * Status set for acquireToken calls
     */ AcquireToken: "acquireToken",
    /**
     * Status set for ssoSilent calls
     */ SsoSilent: "ssoSilent",
    /**
     * Status set when handleRedirect in progress
     */ HandleRedirect: "handleRedirect",
    /**
     * Status set when interaction is complete
     */ None: "none"
};
const DEFAULT_REQUEST = {
    scopes: (0, _msalCommon.OIDC_DEFAULT_SCOPES)
};
/**
 * JWK Key Format string (Type MUST be defined for window crypto APIs)
 */ const KEY_FORMAT_JWK = "jwk";
// Supported wrapper SKUs
const WrapperSKU = {
    React: "@azure/msal-react",
    Angular: "@azure/msal-angular"
};
// DatabaseStorage Constants
const DB_NAME = "msal.db";
const DB_VERSION = 1;
const DB_TABLE_NAME = `${DB_NAME}.keys`;
const CacheLookupPolicy = {
    /*
     * acquireTokenSilent will attempt to retrieve an access token from the cache. If the access token is expired
     * or cannot be found the refresh token will be used to acquire a new one. Finally, if the refresh token
     * is expired acquireTokenSilent will attempt to acquire new access and refresh tokens.
     */ Default: 0,
    /*
     * acquireTokenSilent will only look for access tokens in the cache. It will not attempt to renew access or
     * refresh tokens.
     */ AccessToken: 1,
    /*
     * acquireTokenSilent will attempt to retrieve an access token from the cache. If the access token is expired or
     * cannot be found, the refresh token will be used to acquire a new one. If the refresh token is expired, it
     * will not be renewed and acquireTokenSilent will fail.
     */ AccessTokenAndRefreshToken: 2,
    /*
     * acquireTokenSilent will not attempt to retrieve access tokens from the cache and will instead attempt to
     * exchange the cached refresh token for a new access token. If the refresh token is expired, it will not be
     * renewed and acquireTokenSilent will fail.
     */ RefreshToken: 3,
    /*
     * acquireTokenSilent will not look in the cache for the access token. It will go directly to network with the
     * cached refresh token. If the refresh token is expired an attempt will be made to renew it. This is equivalent to
     * setting "forceRefresh: true".
     */ RefreshTokenAndNetwork: 4,
    /*
     * acquireTokenSilent will attempt to renew both access and refresh tokens. It will not look in the cache. This will
     * always fail if 3rd party cookies are blocked by the browser.
     */ Skip: 5
};
const iFrameRenewalPolicies = [
    CacheLookupPolicy.Default,
    CacheLookupPolicy.Skip,
    CacheLookupPolicy.RefreshTokenAndNetwork
];
const LOG_LEVEL_CACHE_KEY = "msal.browser.log.level";
const LOG_PII_CACHE_KEY = "msal.browser.log.pii";
const BROWSER_PERF_ENABLED_KEY = "msal.browser.performance.enabled";

},{"@azure/msal-common":"rNWNa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"foGbR":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNewGuid", ()=>createNewGuid);
parcelHelpers.export(exports, "exportJwk", ()=>exportJwk);
parcelHelpers.export(exports, "generateKeyPair", ()=>generateKeyPair);
parcelHelpers.export(exports, "getRandomValues", ()=>getRandomValues);
parcelHelpers.export(exports, "importJwk", ()=>importJwk);
parcelHelpers.export(exports, "sha256Digest", ()=>sha256Digest);
parcelHelpers.export(exports, "sign", ()=>sign);
parcelHelpers.export(exports, "validateCryptoAvailable", ()=>validateCryptoAvailable);
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _msalCommon = require("@azure/msal-common");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * This file defines functions used by the browser library to perform cryptography operations such as
 * hashing and encoding. It also has helper functions to validate the availability of specific APIs.
 */ /**
 * See here for more info on RsaHashedKeyGenParams: https://developer.mozilla.org/en-US/docs/Web/API/RsaHashedKeyGenParams
 */ // RSA KeyGen Algorithm
const PKCS1_V15_KEYGEN_ALG = "RSASSA-PKCS1-v1_5";
// SHA-256 hashing algorithm
const S256_HASH_ALG = "SHA-256";
// MOD length for PoP tokens
const MODULUS_LENGTH = 2048;
// Public Exponent
const PUBLIC_EXPONENT = new Uint8Array([
    0x01,
    0x00,
    0x01
]);
// UUID hex digits
const UUID_CHARS = "0123456789abcdef";
// Array to store UINT32 random value
const UINT32_ARR = new Uint32Array(1);
const keygenAlgorithmOptions = {
    name: PKCS1_V15_KEYGEN_ALG,
    hash: S256_HASH_ALG,
    modulusLength: MODULUS_LENGTH,
    publicExponent: PUBLIC_EXPONENT
};
/**
 * Check whether browser crypto is available.
 */ function validateCryptoAvailable(logger) {
    if ("crypto" in window) logger.verbose("BrowserCrypto: modern crypto interface available");
    else {
        logger.error("BrowserCrypto: crypto interface is unavailable");
        throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.cryptoNonExistent));
    }
}
/**
 * Returns a sha-256 hash of the given dataString as an ArrayBuffer.
 * @param dataString {string} data string
 * @param performanceClient {?IPerformanceClient}
 * @param correlationId {?string} correlation id
 */ async function sha256Digest(dataString, performanceClient, correlationId) {
    performanceClient?.addQueueMeasurement((0, _msalCommon.PerformanceEvents).Sha256Digest, correlationId);
    const encoder = new TextEncoder();
    const data = encoder.encode(dataString);
    return window.crypto.subtle.digest(S256_HASH_ALG, data);
}
/**
 * Populates buffer with cryptographically random values.
 * @param dataBuffer
 */ function getRandomValues(dataBuffer) {
    return window.crypto.getRandomValues(dataBuffer);
}
/**
 * Returns random Uint32 value.
 * @returns {number}
 */ function getRandomUint32() {
    window.crypto.getRandomValues(UINT32_ARR);
    return UINT32_ARR[0];
}
/**
 * Creates a UUID v7 from the current timestamp.
 * Implementation relies on the system clock to guarantee increasing order of generated identifiers.
 * @returns {number}
 */ function createNewGuid() {
    const currentTimestamp = Date.now();
    const baseRand = getRandomUint32() * 0x400 + (getRandomUint32() & 0x3ff);
    // Result byte array
    const bytes = new Uint8Array(16);
    // A 12-bit `rand_a` field value
    const randA = Math.trunc(baseRand / 2 ** 30);
    // The higher 30 bits of 62-bit `rand_b` field value
    const randBHi = baseRand & 2 ** 30 - 1;
    // The lower 32 bits of 62-bit `rand_b` field value
    const randBLo = getRandomUint32();
    bytes[0] = currentTimestamp / 2 ** 40;
    bytes[1] = currentTimestamp / 2 ** 32;
    bytes[2] = currentTimestamp / 2 ** 24;
    bytes[3] = currentTimestamp / 2 ** 16;
    bytes[4] = currentTimestamp / 256;
    bytes[5] = currentTimestamp;
    bytes[6] = 0x70 | randA >>> 8;
    bytes[7] = randA;
    bytes[8] = 0x80 | randBHi >>> 24;
    bytes[9] = randBHi >>> 16;
    bytes[10] = randBHi >>> 8;
    bytes[11] = randBHi;
    bytes[12] = randBLo >>> 24;
    bytes[13] = randBLo >>> 16;
    bytes[14] = randBLo >>> 8;
    bytes[15] = randBLo;
    let text = "";
    for(let i = 0; i < bytes.length; i++){
        text += UUID_CHARS.charAt(bytes[i] >>> 4);
        text += UUID_CHARS.charAt(bytes[i] & 0xf);
        if (i === 3 || i === 5 || i === 7 || i === 9) text += "-";
    }
    return text;
}
/**
 * Generates a keypair based on current keygen algorithm config.
 * @param extractable
 * @param usages
 */ async function generateKeyPair(extractable, usages) {
    return window.crypto.subtle.generateKey(keygenAlgorithmOptions, extractable, usages);
}
/**
 * Export key as Json Web Key (JWK)
 * @param key
 */ async function exportJwk(key) {
    return window.crypto.subtle.exportKey((0, _browserConstantsMjs.KEY_FORMAT_JWK), key);
}
/**
 * Imports key as Json Web Key (JWK), can set extractable and usages.
 * @param key
 * @param extractable
 * @param usages
 */ async function importJwk(key, extractable, usages) {
    return window.crypto.subtle.importKey((0, _browserConstantsMjs.KEY_FORMAT_JWK), key, keygenAlgorithmOptions, extractable, usages);
}
/**
 * Signs given data with given key
 * @param key
 * @param data
 */ async function sign(key, data) {
    return window.crypto.subtle.sign(keygenAlgorithmOptions, key, data);
}

},{"../error/BrowserAuthError.mjs":"hI9Lm","@azure/msal-common":"rNWNa","../utils/BrowserConstants.mjs":"izeV4","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e3BHu":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PublicClientApplication", ()=>PublicClientApplication);
var _controllerFactoryMjs = require("../controllers/ControllerFactory.mjs");
var _standardControllerMjs = require("../controllers/StandardController.mjs");
var _standardOperatingContextMjs = require("../operatingcontext/StandardOperatingContext.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * The PublicClientApplication class is the object exposed by the library to perform authentication and authorization functions in Single Page Applications
 * to obtain JWT tokens as described in the OAuth 2.0 Authorization Code Flow with PKCE specification.
 */ class PublicClientApplication {
    static async createPublicClientApplication(configuration) {
        const controller = await (0, _controllerFactoryMjs.createV3Controller)(configuration);
        const pca = new PublicClientApplication(configuration, controller);
        return pca;
    }
    /**
     * @constructor
     * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     * - redirect_uri: the uri of your application registered in the portal.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
     * Full B2C functionality will be available in this library in future versions.
     *
     * @param configuration Object for the MSAL PublicClientApplication instance
     * @param IController Optional parameter to explictly set the controller. (Will be removed when we remove public constructor)
     */ constructor(configuration, controller){
        if (controller) this.controller = controller;
        else {
            const standardOperatingContext = new (0, _standardOperatingContextMjs.StandardOperatingContext)(configuration);
            this.controller = new (0, _standardControllerMjs.StandardController)(standardOperatingContext);
        }
    }
    /**
     * Initializer function to perform async startup tasks such as connecting to WAM extension
     */ async initialize() {
        return this.controller.initialize();
    }
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     *
     * @param request
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */ async acquireTokenPopup(request) {
        return this.controller.acquireTokenPopup(request);
    }
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
     * the page, so any code that follows this function will not execute.
     *
     * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
     * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
     *
     * @param request
     */ acquireTokenRedirect(request) {
        return this.controller.acquireTokenRedirect(request);
    }
    /**
     * Silently acquire an access token for a given set of scopes. Returns currently processing promise if parallel requests are made.
     *
     * @param {@link (SilentRequest:type)}
     * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthenticationResult} object
     */ acquireTokenSilent(silentRequest) {
        return this.controller.acquireTokenSilent(silentRequest);
    }
    /**
     * This function redeems an authorization code (passed as code) from the eSTS token endpoint.
     * This authorization code should be acquired server-side using a confidential client to acquire a spa_code.
     * This API is not indended for normal authorization code acquisition and redemption.
     *
     * Redemption of this authorization code will not require PKCE, as it was acquired by a confidential client.
     *
     * @param request {@link AuthorizationCodeRequest}
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */ acquireTokenByCode(request) {
        return this.controller.acquireTokenByCode(request);
    }
    /**
     * Adds event callbacks to array
     * @param callback
     */ addEventCallback(callback) {
        return this.controller.addEventCallback(callback);
    }
    /**
     * Removes callback with provided id from callback array
     * @param callbackId
     */ removeEventCallback(callbackId) {
        return this.controller.removeEventCallback(callbackId);
    }
    /**
     * Registers a callback to receive performance events.
     *
     * @param {PerformanceCallbackFunction} callback
     * @returns {string}
     */ addPerformanceCallback(callback) {
        return this.controller.addPerformanceCallback(callback);
    }
    /**
     * Removes a callback registered with addPerformanceCallback.
     *
     * @param {string} callbackId
     * @returns {boolean}
     */ removePerformanceCallback(callbackId) {
        return this.controller.removePerformanceCallback(callbackId);
    }
    /**
     * Adds event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
     */ enableAccountStorageEvents() {
        this.controller.enableAccountStorageEvents();
    }
    /**
     * Removes event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
     */ disableAccountStorageEvents() {
        this.controller.disableAccountStorageEvents();
    }
    /**
     * Returns the first account found in the cache that matches the account filter passed in.
     * @param accountFilter
     * @returns The first account found in the cache matching the provided filter or null if no account could be found.
     */ getAccount(accountFilter) {
        return this.controller.getAccount(accountFilter);
    }
    /**
     * Returns the signed in account matching homeAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @param homeAccountId
     * @returns The account object stored in MSAL
     * @deprecated - Use getAccount instead
     */ getAccountByHomeId(homeAccountId) {
        return this.controller.getAccountByHomeId(homeAccountId);
    }
    /**
     * Returns the signed in account matching localAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @param localAccountId
     * @returns The account object stored in MSAL
     * @deprecated - Use getAccount instead
     */ getAccountByLocalId(localId) {
        return this.controller.getAccountByLocalId(localId);
    }
    /**
     * Returns the signed in account matching username.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found.
     * This API is provided for convenience but getAccountById should be used for best reliability
     * @param userName
     * @returns The account object stored in MSAL
     * @deprecated - Use getAccount instead
     */ getAccountByUsername(userName) {
        return this.controller.getAccountByUsername(userName);
    }
    /**
     * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
     * @param accountFilter - (Optional) filter to narrow down the accounts returned
     * @returns Array of AccountInfo objects in cache
     */ getAllAccounts(accountFilter) {
        return this.controller.getAllAccounts(accountFilter);
    }
    /**
     * Event handler function which allows users to fire events after the PublicClientApplication object
     * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
     * auth flows.
     * @param hash Hash to process. Defaults to the current value of window.location.hash. Only needs to be provided explicitly if the response to be handled is not contained in the current value.
     * @returns Token response or null. If the return value is null, then no auth redirect was detected.
     */ handleRedirectPromise(hash) {
        return this.controller.handleRedirectPromise(hash);
    }
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param request
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */ loginPopup(request) {
        return this.controller.loginPopup(request);
    }
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
     * any code that follows this function will not execute.
     *
     * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
     * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
     *
     * @param request
     */ loginRedirect(request) {
        return this.controller.loginRedirect(request);
    }
    /**
     * Deprecated logout function. Use logoutRedirect or logoutPopup instead
     * @param logoutRequest
     * @deprecated
     */ logout(logoutRequest) {
        return this.controller.logout(logoutRequest);
    }
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param logoutRequest
     */ logoutRedirect(logoutRequest) {
        return this.controller.logoutRedirect(logoutRequest);
    }
    /**
     * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
     * @param logoutRequest
     */ logoutPopup(logoutRequest) {
        return this.controller.logoutPopup(logoutRequest);
    }
    /**
     * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
     * - Any browser using a form of Intelligent Tracking Prevention
     * - If there is not an established session with the service
     *
     * In these cases, the request must be done inside a popup or full frame redirect.
     *
     * For the cases where interaction is required, you cannot send a request with prompt=none.
     *
     * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
     * you session on the server still exists.
     * @param request {@link SsoSilentRequest}
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */ ssoSilent(request) {
        return this.controller.ssoSilent(request);
    }
    /**
     * Gets the token cache for the application.
     */ getTokenCache() {
        return this.controller.getTokenCache();
    }
    /**
     * Returns the logger instance
     */ getLogger() {
        return this.controller.getLogger();
    }
    /**
     * Replaces the default logger set in configurations with new Logger with new configurations
     * @param logger Logger instance
     */ setLogger(logger) {
        this.controller.setLogger(logger);
    }
    /**
     * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
     * @param account
     */ setActiveAccount(account) {
        this.controller.setActiveAccount(account);
    }
    /**
     * Gets the currently active account
     */ getActiveAccount() {
        return this.controller.getActiveAccount();
    }
    /**
     * Called by wrapper libraries (Angular & React) to set SKU and Version passed down to telemetry, logger, etc.
     * @param sku
     * @param version
     */ initializeWrapperLibrary(sku, version) {
        return this.controller.initializeWrapperLibrary(sku, version);
    }
    /**
     * Sets navigation client
     * @param navigationClient
     */ setNavigationClient(navigationClient) {
        this.controller.setNavigationClient(navigationClient);
    }
    /**
     * Returns the configuration object
     * @internal
     */ getConfiguration() {
        return this.controller.getConfiguration();
    }
    /**
     * Hydrates cache with the tokens and account in the AuthenticationResult object
     * @param result
     * @param request - The request object that was used to obtain the AuthenticationResult
     * @returns
     */ async hydrateCache(result, request) {
        return this.controller.hydrateCache(result, request);
    }
    /**
     * Clears tokens and account from the browser cache.
     * @param logoutRequest
     */ clearCache(logoutRequest) {
        return this.controller.clearCache(logoutRequest);
    }
}

},{"../controllers/ControllerFactory.mjs":"3qmWt","../controllers/StandardController.mjs":"1arxV","../operatingcontext/StandardOperatingContext.mjs":"bklRo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3qmWt":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createController", ()=>createController);
parcelHelpers.export(exports, "createV3Controller", ()=>createV3Controller);
var _teamsAppOperatingContextMjs = require("../operatingcontext/TeamsAppOperatingContext.mjs");
var _standardOperatingContextMjs = require("../operatingcontext/StandardOperatingContext.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ async function createV3Controller(config) {
    const standard = new (0, _standardOperatingContextMjs.StandardOperatingContext)(config);
    await standard.initialize();
    const controller = await require("f0bfe6d60d3ea118");
    return controller.StandardController.createController(standard);
}
async function createController(config) {
    const standard = new (0, _standardOperatingContextMjs.StandardOperatingContext)(config);
    const teamsApp = new (0, _teamsAppOperatingContextMjs.TeamsAppOperatingContext)(config);
    const operatingContexts = [
        standard.initialize(),
        teamsApp.initialize()
    ];
    await Promise.all(operatingContexts);
    if (teamsApp.isAvailable() && teamsApp.getConfig().auth.supportsNestedAppAuth) {
        const controller = await require("bfd8119179b952e5");
        return controller.NestedAppAuthController.createController(teamsApp);
    } else if (standard.isAvailable()) {
        const controller = await require("f0bfe6d60d3ea118");
        return controller.StandardController.createController(standard);
    } else // Since neither of the actual operating contexts are available keep the UnknownOperatingContextController
    return null;
}

},{"../operatingcontext/TeamsAppOperatingContext.mjs":"1f88e","../operatingcontext/StandardOperatingContext.mjs":"bklRo","f0bfe6d60d3ea118":"9ozHd","bfd8119179b952e5":"51FGX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1f88e":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TeamsAppOperatingContext", ()=>TeamsAppOperatingContext);
var _baseOperatingContextMjs = require("./BaseOperatingContext.mjs");
var _bridgeProxyMjs = require("../naa/BridgeProxy.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class TeamsAppOperatingContext extends (0, _baseOperatingContextMjs.BaseOperatingContext) {
    constructor(){
        super(...arguments);
        this.bridgeProxy = undefined;
        this.activeAccount = undefined;
    }
    /**
     * Return the module name.  Intended for use with import() to enable dynamic import
     * of the implementation associated with this operating context
     * @returns
     */ getModuleName() {
        return TeamsAppOperatingContext.MODULE_NAME;
    }
    /**
     * Returns the unique identifier for this operating context
     * @returns string
     */ getId() {
        return TeamsAppOperatingContext.ID;
    }
    getBridgeProxy() {
        return this.bridgeProxy;
    }
    getActiveAccount() {
        return this.activeAccount;
    }
    setActiveAccount(account) {
        this.activeAccount = account;
    }
    /**
     * Checks whether the operating context is available.
     * Confirms that the code is running a browser rather.  This is required.
     * @returns Promise<boolean> indicating whether this operating context is currently available.
     */ async initialize() {
        /*
         * TODO: Add implementation to check for presence of inject Nested App Auth Bridge JavaScript interface
         *
         */ try {
            if (typeof window !== "undefined") {
                const bridgeProxy = await (0, _bridgeProxyMjs.BridgeProxy).create();
                /*
                 * Because we want single sign on we need to attempt to
                 * grab the active account as part of initialization
                 * this.activeAccount = await bridgeProxy.getActiveAccount();
                 */ try {
                    if (bridgeProxy.getHostCapabilities()?.queryAccount) this.activeAccount = await bridgeProxy.getActiveAccount();
                } catch (e) {
                    this.activeAccount = undefined;
                }
                this.bridgeProxy = bridgeProxy;
                this.available = bridgeProxy !== undefined;
            } else this.available = false;
        } catch (e) {
            this.available = false;
        } finally{
            return this.available;
        }
    }
}
/*
 * TODO: Once we have determine the bundling code return here to specify the name of the bundle
 * containing the implementation for this operating context
 */ TeamsAppOperatingContext.MODULE_NAME = "";
/**
 * Unique identifier for the operating context
 */ TeamsAppOperatingContext.ID = "TeamsAppOperatingContext";

},{"./BaseOperatingContext.mjs":"hv7iX","../naa/BridgeProxy.mjs":"epxKC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hv7iX":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseOperatingContext", ()=>BaseOperatingContext);
var _msalCommon = require("@azure/msal-common");
var _configurationMjs = require("../config/Configuration.mjs");
var _packageMetadataMjs = require("../packageMetadata.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Base class for operating context
 * Operating contexts are contexts in which MSAL.js is being run
 * More than one operating context may be available at a time
 * It's important from a logging and telemetry point of view for us to be able to identify the operating context.
 * For example: Some operating contexts will pre-cache tokens impacting performance telemetry
 */ class BaseOperatingContext {
    static loggerCallback(level, message) {
        switch(level){
            case (0, _msalCommon.LogLevel).Error:
                // eslint-disable-next-line no-console
                console.error(message);
                return;
            case (0, _msalCommon.LogLevel).Info:
                // eslint-disable-next-line no-console
                console.info(message);
                return;
            case (0, _msalCommon.LogLevel).Verbose:
                // eslint-disable-next-line no-console
                console.debug(message);
                return;
            case (0, _msalCommon.LogLevel).Warning:
                // eslint-disable-next-line no-console
                console.warn(message);
                return;
            default:
                // eslint-disable-next-line no-console
                console.log(message);
                return;
        }
    }
    constructor(config){
        /*
         * If loaded in an environment where window is not available,
         * set internal flag to false so that further requests fail.
         * This is to support server-side rendering environments.
         */ this.browserEnvironment = typeof window !== "undefined";
        this.config = (0, _configurationMjs.buildConfiguration)(config, this.browserEnvironment);
        let sessionStorage;
        try {
            sessionStorage = window[(0, _browserConstantsMjs.BrowserCacheLocation).SessionStorage];
        // Mute errors if it's a non-browser environment or cookies are blocked.
        } catch (e) {}
        const logLevelKey = sessionStorage?.getItem((0, _browserConstantsMjs.LOG_LEVEL_CACHE_KEY));
        const piiLoggingKey = sessionStorage?.getItem((0, _browserConstantsMjs.LOG_PII_CACHE_KEY))?.toLowerCase();
        const piiLoggingEnabled = piiLoggingKey === "true" ? true : piiLoggingKey === "false" ? false : undefined;
        const loggerOptions = {
            ...this.config.system.loggerOptions
        };
        const logLevel = logLevelKey && Object.keys((0, _msalCommon.LogLevel)).includes(logLevelKey) ? (0, _msalCommon.LogLevel)[logLevelKey] : undefined;
        if (logLevel) {
            loggerOptions.loggerCallback = BaseOperatingContext.loggerCallback;
            loggerOptions.logLevel = logLevel;
        }
        if (piiLoggingEnabled !== undefined) loggerOptions.piiLoggingEnabled = piiLoggingEnabled;
        this.logger = new (0, _msalCommon.Logger)(loggerOptions, (0, _packageMetadataMjs.name), (0, _packageMetadataMjs.version));
        this.available = false;
    }
    /**
     * Return the MSAL config
     * @returns BrowserConfiguration
     */ getConfig() {
        return this.config;
    }
    /**
     * Returns the MSAL Logger
     * @returns Logger
     */ getLogger() {
        return this.logger;
    }
    isAvailable() {
        return this.available;
    }
    isBrowserEnvironment() {
        return this.browserEnvironment;
    }
}

},{"@azure/msal-common":"rNWNa","../config/Configuration.mjs":"59132","../packageMetadata.mjs":"1oQUJ","../utils/BrowserConstants.mjs":"izeV4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59132":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_IFRAME_TIMEOUT_MS", ()=>DEFAULT_IFRAME_TIMEOUT_MS);
parcelHelpers.export(exports, "DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS", ()=>DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS);
parcelHelpers.export(exports, "DEFAULT_POPUP_TIMEOUT_MS", ()=>DEFAULT_POPUP_TIMEOUT_MS);
parcelHelpers.export(exports, "DEFAULT_REDIRECT_TIMEOUT_MS", ()=>DEFAULT_REDIRECT_TIMEOUT_MS);
parcelHelpers.export(exports, "buildConfiguration", ()=>buildConfiguration);
var _msalCommon = require("@azure/msal-common");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _navigationClientMjs = require("../navigation/NavigationClient.mjs");
var _fetchClientMjs = require("../network/FetchClient.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ // Default timeout for popup windows and iframes in milliseconds
const DEFAULT_POPUP_TIMEOUT_MS = 60000;
const DEFAULT_IFRAME_TIMEOUT_MS = 10000;
const DEFAULT_REDIRECT_TIMEOUT_MS = 30000;
const DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS = 2000;
/**
 * MSAL function that sets the default options when not explicitly configured from app developer
 *
 * @param auth
 * @param cache
 * @param system
 *
 * @returns Configuration object
 */ function buildConfiguration({ auth: userInputAuth, cache: userInputCache, system: userInputSystem, telemetry: userInputTelemetry }, isBrowserEnvironment) {
    // Default auth options for browser
    const DEFAULT_AUTH_OPTIONS = {
        clientId: (0, _msalCommon.Constants).EMPTY_STRING,
        authority: `${(0, _msalCommon.Constants).DEFAULT_AUTHORITY}`,
        knownAuthorities: [],
        cloudDiscoveryMetadata: (0, _msalCommon.Constants).EMPTY_STRING,
        authorityMetadata: (0, _msalCommon.Constants).EMPTY_STRING,
        redirectUri: (0, _msalCommon.Constants).EMPTY_STRING,
        postLogoutRedirectUri: (0, _msalCommon.Constants).EMPTY_STRING,
        navigateToLoginRequestUrl: true,
        clientCapabilities: [],
        protocolMode: (0, _msalCommon.ProtocolMode).AAD,
        OIDCOptions: {
            serverResponseType: (0, _msalCommon.ServerResponseType).FRAGMENT,
            defaultScopes: [
                (0, _msalCommon.Constants).OPENID_SCOPE,
                (0, _msalCommon.Constants).PROFILE_SCOPE,
                (0, _msalCommon.Constants).OFFLINE_ACCESS_SCOPE
            ]
        },
        azureCloudOptions: {
            azureCloudInstance: (0, _msalCommon.AzureCloudInstance).None,
            tenant: (0, _msalCommon.Constants).EMPTY_STRING
        },
        skipAuthorityMetadataCache: false,
        supportsNestedAppAuth: false
    };
    // Default cache options for browser
    const DEFAULT_CACHE_OPTIONS = {
        cacheLocation: (0, _browserConstantsMjs.BrowserCacheLocation).SessionStorage,
        temporaryCacheLocation: (0, _browserConstantsMjs.BrowserCacheLocation).SessionStorage,
        storeAuthStateInCookie: false,
        secureCookies: false,
        // Default cache migration to true if cache location is localStorage since entries are preserved across tabs/windows. Migration has little to no benefit in sessionStorage and memoryStorage
        cacheMigrationEnabled: userInputCache && userInputCache.cacheLocation === (0, _browserConstantsMjs.BrowserCacheLocation).LocalStorage ? true : false,
        claimsBasedCachingEnabled: false
    };
    // Default logger options for browser
    const DEFAULT_LOGGER_OPTIONS = {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        loggerCallback: ()=>{
        // allow users to not set logger call back
        },
        logLevel: (0, _msalCommon.LogLevel).Info,
        piiLoggingEnabled: false
    };
    // Default system options for browser
    const DEFAULT_BROWSER_SYSTEM_OPTIONS = {
        ...(0, _msalCommon.DEFAULT_SYSTEM_OPTIONS),
        loggerOptions: DEFAULT_LOGGER_OPTIONS,
        networkClient: isBrowserEnvironment ? new (0, _fetchClientMjs.FetchClient)() : (0, _msalCommon.StubbedNetworkModule),
        navigationClient: new (0, _navigationClientMjs.NavigationClient)(),
        loadFrameTimeout: 0,
        // If loadFrameTimeout is provided, use that as default.
        windowHashTimeout: userInputSystem?.loadFrameTimeout || DEFAULT_POPUP_TIMEOUT_MS,
        iframeHashTimeout: userInputSystem?.loadFrameTimeout || DEFAULT_IFRAME_TIMEOUT_MS,
        navigateFrameWait: 0,
        redirectNavigationTimeout: DEFAULT_REDIRECT_TIMEOUT_MS,
        asyncPopups: false,
        allowRedirectInIframe: false,
        allowNativeBroker: false,
        nativeBrokerHandshakeTimeout: userInputSystem?.nativeBrokerHandshakeTimeout || DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS,
        pollIntervalMilliseconds: (0, _browserConstantsMjs.BrowserConstants).DEFAULT_POLL_INTERVAL_MS
    };
    const providedSystemOptions = {
        ...DEFAULT_BROWSER_SYSTEM_OPTIONS,
        ...userInputSystem,
        loggerOptions: userInputSystem?.loggerOptions || DEFAULT_LOGGER_OPTIONS
    };
    const DEFAULT_TELEMETRY_OPTIONS = {
        application: {
            appName: (0, _msalCommon.Constants).EMPTY_STRING,
            appVersion: (0, _msalCommon.Constants).EMPTY_STRING
        },
        client: new (0, _msalCommon.StubPerformanceClient)()
    };
    // Throw an error if user has set OIDCOptions without being in OIDC protocol mode
    if (userInputAuth?.protocolMode !== (0, _msalCommon.ProtocolMode).OIDC && userInputAuth?.OIDCOptions) {
        const logger = new (0, _msalCommon.Logger)(providedSystemOptions.loggerOptions);
        logger.warning(JSON.stringify((0, _msalCommon.createClientConfigurationError)((0, _msalCommon.ClientConfigurationErrorCodes).cannotSetOIDCOptions)));
    }
    // Throw an error if user has set allowNativeBroker to true without being in AAD protocol mode
    if (userInputAuth?.protocolMode && userInputAuth.protocolMode !== (0, _msalCommon.ProtocolMode).AAD && providedSystemOptions?.allowNativeBroker) throw (0, _msalCommon.createClientConfigurationError)((0, _msalCommon.ClientConfigurationErrorCodes).cannotAllowNativeBroker);
    const overlayedConfig = {
        auth: {
            ...DEFAULT_AUTH_OPTIONS,
            ...userInputAuth,
            OIDCOptions: {
                ...DEFAULT_AUTH_OPTIONS.OIDCOptions,
                ...userInputAuth?.OIDCOptions
            }
        },
        cache: {
            ...DEFAULT_CACHE_OPTIONS,
            ...userInputCache
        },
        system: providedSystemOptions,
        telemetry: {
            ...DEFAULT_TELEMETRY_OPTIONS,
            ...userInputTelemetry
        }
    };
    return overlayedConfig;
}

},{"@azure/msal-common":"rNWNa","../utils/BrowserConstants.mjs":"izeV4","../navigation/NavigationClient.mjs":"dsMEj","../network/FetchClient.mjs":"haZqt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dsMEj":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NavigationClient", ()=>NavigationClient);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class NavigationClient {
    /**
     * Navigates to other pages within the same web application
     * @param url
     * @param options
     */ navigateInternal(url, options) {
        return NavigationClient.defaultNavigateWindow(url, options);
    }
    /**
     * Navigates to other pages outside the web application i.e. the Identity Provider
     * @param url
     * @param options
     */ navigateExternal(url, options) {
        return NavigationClient.defaultNavigateWindow(url, options);
    }
    /**
     * Default navigation implementation invoked by the internal and external functions
     * @param url
     * @param options
     */ static defaultNavigateWindow(url, options) {
        if (options.noHistory) window.location.replace(url);
        else window.location.assign(url);
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(true);
            }, options.timeout);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haZqt":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FetchClient", ()=>FetchClient);
var _msalCommon = require("@azure/msal-common");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * This class implements the Fetch API for GET and POST requests. See more here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */ class FetchClient {
    /**
     * Fetch Client for REST endpoints - Get request
     * @param url
     * @param headers
     * @param body
     */ async sendGetRequestAsync(url, options) {
        let response;
        try {
            response = await fetch(url, {
                method: (0, _browserConstantsMjs.HTTP_REQUEST_TYPE).GET,
                headers: this.getFetchHeaders(options)
            });
        } catch (e) {
            if (window.navigator.onLine) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.getRequestFailed));
            else throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.noNetworkConnectivity));
        }
        try {
            return {
                headers: this.getHeaderDict(response.headers),
                body: await response.json(),
                status: response.status
            };
        } catch (e) {
            throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.failedToParseResponse));
        }
    }
    /**
     * Fetch Client for REST endpoints - Post request
     * @param url
     * @param headers
     * @param body
     */ async sendPostRequestAsync(url, options) {
        const reqBody = options && options.body || (0, _msalCommon.Constants).EMPTY_STRING;
        let response;
        try {
            response = await fetch(url, {
                method: (0, _browserConstantsMjs.HTTP_REQUEST_TYPE).POST,
                headers: this.getFetchHeaders(options),
                body: reqBody
            });
        } catch (e) {
            if (window.navigator.onLine) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.postRequestFailed));
            else throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.noNetworkConnectivity));
        }
        try {
            return {
                headers: this.getHeaderDict(response.headers),
                body: await response.json(),
                status: response.status
            };
        } catch (e) {
            throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.failedToParseResponse));
        }
    }
    /**
     * Get Fetch API Headers object from string map
     * @param inputHeaders
     */ getFetchHeaders(options) {
        const headers = new Headers();
        if (!(options && options.headers)) return headers;
        const optionsHeaders = options.headers;
        Object.keys(optionsHeaders).forEach((key)=>{
            headers.append(key, optionsHeaders[key]);
        });
        return headers;
    }
    getHeaderDict(headers) {
        const headerDict = {};
        headers.forEach((value, key)=>{
            headerDict[key] = value;
        });
        return headerDict;
    }
}

},{"@azure/msal-common":"rNWNa","../error/BrowserAuthError.mjs":"hI9Lm","../utils/BrowserConstants.mjs":"izeV4","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1oQUJ":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "name", ()=>name);
parcelHelpers.export(exports, "version", ()=>version);
"use strict";
/* eslint-disable header/header */ const name = "@azure/msal-browser";
const version = "3.10.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"epxKC":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BridgeProxy", ()=>BridgeProxy);
parcelHelpers.export(exports, "default", ()=>BridgeProxy);
var _bridgeStatusCodeMjs = require("./BridgeStatusCode.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * BridgeProxy
 * Provides a proxy for accessing a bridge to a host app and/or
 * platform broker
 */ class BridgeProxy {
    /**
     * initializeNestedAppAuthBridge - Initializes the bridge to the host app
     * @returns a promise that resolves to an InitializeBridgeResponse or rejects with an Error
     * @remarks This method will be called by the create factory method
     * @remarks If the bridge is not available, this method will throw an error
     */ static async initializeNestedAppAuthBridge() {
        if (window === undefined) throw new Error("window is undefined");
        if (window.nestedAppAuthBridge === undefined) throw new Error("window.nestedAppAuthBridge is undefined");
        if (window.crypto === undefined) throw new Error("window.crypto is undefined");
        try {
            BridgeProxy.crypto = window.crypto;
            window.nestedAppAuthBridge.addEventListener("message", (response)=>{
                const responsePayload = typeof response === "string" ? response : response.data;
                const responseEnvelope = JSON.parse(responsePayload);
                const request = BridgeProxy.bridgeRequests.find((element)=>element.requestId === responseEnvelope.requestId);
                if (request !== undefined) {
                    BridgeProxy.bridgeRequests.splice(BridgeProxy.bridgeRequests.indexOf(request), 1);
                    if (responseEnvelope.success) request.resolve(responseEnvelope);
                    else request.reject(responseEnvelope.error);
                }
            });
            const bridgeResponse = await new Promise((resolve, reject)=>{
                const message = {
                    messageType: "NestedAppAuthRequest",
                    method: "GetInitContext",
                    requestId: BridgeProxy.getRandomId()
                };
                const request = {
                    requestId: message.requestId,
                    method: message.method,
                    resolve: resolve,
                    reject: reject
                };
                BridgeProxy.bridgeRequests.push(request);
                window.nestedAppAuthBridge.postMessage(JSON.stringify(message));
            });
            return BridgeProxy.validateBridgeResultOrThrow(bridgeResponse.initContext);
        } catch (error) {
            window.console.log(error);
            throw error;
        }
    }
    static getRandomId() {
        return BridgeProxy.crypto.randomUUID();
    }
    /**
     * getTokenInteractive - Attempts to get a token interactively from the bridge
     * @param request A token request
     * @returns a promise that resolves to an auth result or rejects with a BridgeError
     */ getTokenInteractive(request) {
        return this.getToken("GetTokenPopup", request);
    }
    /**
     * getTokenSilent Attempts to get a token silently from the bridge
     * @param request A token request
     * @returns a promise that resolves to an auth result or rejects with a BridgeError
     */ getTokenSilent(request) {
        return this.getToken("GetToken", request);
    }
    async getToken(requestType, request) {
        const result = await this.sendRequest(requestType, {
            tokenParams: request
        });
        return {
            token: BridgeProxy.validateBridgeResultOrThrow(result.token),
            account: BridgeProxy.validateBridgeResultOrThrow(result.account)
        };
    }
    async getActiveAccount() {
        const result = await this.sendRequest("GetActiveAccount");
        return BridgeProxy.validateBridgeResultOrThrow(result.account);
    }
    getHostCapabilities() {
        return this.capabilities ?? null;
    }
    /**
     * A method used to send a request to the bridge
     * @param request A token request
     * @returns a promise that resolves to a response of provided type or rejects with a BridgeError
     */ sendRequest(method, requestParams) {
        const message = {
            messageType: "NestedAppAuthRequest",
            method: method,
            requestId: BridgeProxy.getRandomId(),
            ...requestParams
        };
        const promise = new Promise((resolve, reject)=>{
            const request = {
                requestId: message.requestId,
                method: message.method,
                resolve: resolve,
                reject: reject
            };
            BridgeProxy.bridgeRequests.push(request);
            window.nestedAppAuthBridge.postMessage(JSON.stringify(message));
        });
        return promise;
    }
    static validateBridgeResultOrThrow(input) {
        if (input === undefined) {
            const bridgeError = {
                status: (0, _bridgeStatusCodeMjs.BridgeStatusCode).NestedAppAuthUnavailable
            };
            throw bridgeError;
        }
        return input;
    }
    /**
     * Private constructor for BridgeProxy
     * @param sdkName The name of the SDK being used to make requests on behalf of the app
     * @param sdkVersion The version of the SDK being used to make requests on behalf of the app
     * @param capabilities The capabilities of the bridge / SDK / platform broker
     */ constructor(sdkName, sdkVersion, capabilities){
        this.sdkName = sdkName;
        this.sdkVersion = sdkVersion;
        this.capabilities = capabilities;
    }
    /**
     * Factory method for creating an implementation of IBridgeProxy
     * @returns A promise that resolves to a BridgeProxy implementation
     */ static async create() {
        const response = await BridgeProxy.initializeNestedAppAuthBridge();
        return new BridgeProxy(response.sdkName, response.sdkVersion, response.capabilities);
    }
}
BridgeProxy.bridgeRequests = [];

},{"./BridgeStatusCode.mjs":"7S8RS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7S8RS":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BridgeStatusCode", ()=>BridgeStatusCode);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const BridgeStatusCode = {
    UserInteractionRequired: "USER_INTERACTION_REQUIRED",
    UserCancel: "USER_CANCEL",
    NoNetwork: "NO_NETWORK",
    TransientError: "TRANSIENT_ERROR",
    PersistentError: "PERSISTENT_ERROR",
    Disabled: "DISABLED",
    AccountUnavailable: "ACCOUNT_UNAVAILABLE",
    NestedAppAuthUnavailable: "NESTED_APP_AUTH_UNAVAILABLE"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bklRo":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StandardOperatingContext", ()=>StandardOperatingContext);
var _baseOperatingContextMjs = require("./BaseOperatingContext.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class StandardOperatingContext extends (0, _baseOperatingContextMjs.BaseOperatingContext) {
    /**
     * Return the module name.  Intended for use with import() to enable dynamic import
     * of the implementation associated with this operating context
     * @returns
     */ getModuleName() {
        return StandardOperatingContext.MODULE_NAME;
    }
    /**
     * Returns the unique identifier for this operating context
     * @returns string
     */ getId() {
        return StandardOperatingContext.ID;
    }
    /**
     * Checks whether the operating context is available.
     * Confirms that the code is running a browser rather.  This is required.
     * @returns Promise<boolean> indicating whether this operating context is currently available.
     */ async initialize() {
        this.available = typeof window !== "undefined";
        return this.available;
    /*
         * NOTE: The standard context is available as long as there is a window.  If/when we split out WAM from Browser
         * We can move the current contents of the initialize method to here and verify that the WAM extension is available
         */ }
}
/*
 * TODO: Once we have determine the bundling code return here to specify the name of the bundle
 * containing the implementation for this operating context
 */ StandardOperatingContext.MODULE_NAME = "";
/**
 * Unique identifier for the operating context
 */ StandardOperatingContext.ID = "StandardOperatingContext";

},{"./BaseOperatingContext.mjs":"hv7iX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ozHd":[function(require,module,exports) {
module.exports = Promise.resolve(module.bundle.root("1arxV"));

},{}],"51FGX":[function(require,module,exports) {
module.exports = require("b4dce18c43a91147")(require("71ed72007e9a986f").getBundleURL("cxajz") + "NestedAppAuthController.66b318b6.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("4OhJn"));

},{"b4dce18c43a91147":"61B45","71ed72007e9a986f":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"1arxV":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StandardController", ()=>StandardController);
var _cryptoOpsMjs = require("../crypto/CryptoOps.mjs");
var _msalCommon = require("@azure/msal-common");
var _browserCacheManagerMjs = require("../cache/BrowserCacheManager.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _browserUtilsMjs = require("../utils/BrowserUtils.mjs");
var _eventTypeMjs = require("../event/EventType.mjs");
var _browserConfigurationAuthErrorMjs = require("../error/BrowserConfigurationAuthError.mjs");
var _eventHandlerMjs = require("../event/EventHandler.mjs");
var _popupClientMjs = require("../interaction_client/PopupClient.mjs");
var _redirectClientMjs = require("../interaction_client/RedirectClient.mjs");
var _silentIframeClientMjs = require("../interaction_client/SilentIframeClient.mjs");
var _silentRefreshClientMjs = require("../interaction_client/SilentRefreshClient.mjs");
var _tokenCacheMjs = require("../cache/TokenCache.mjs");
var _nativeInteractionClientMjs = require("../interaction_client/NativeInteractionClient.mjs");
var _nativeMessageHandlerMjs = require("../broker/nativeBroker/NativeMessageHandler.mjs");
var _nativeAuthErrorMjs = require("../error/NativeAuthError.mjs");
var _silentCacheClientMjs = require("../interaction_client/SilentCacheClient.mjs");
var _silentAuthCodeClientMjs = require("../interaction_client/SilentAuthCodeClient.mjs");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _browserCryptoMjs = require("../crypto/BrowserCrypto.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
var _browserConfigurationAuthErrorCodesMjs = require("../error/BrowserConfigurationAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class StandardController {
    /**
     * @constructor
     * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     * - redirect_uri: the uri of your application registered in the portal.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
     * Full B2C functionality will be available in this library in future versions.
     *
     * @param configuration Object for the MSAL PublicClientApplication instance
     */ constructor(operatingContext){
        this.atsAsyncMeasurement = undefined;
        this.operatingContext = operatingContext;
        this.isBrowserEnvironment = this.operatingContext.isBrowserEnvironment();
        // Set the configuration.
        this.config = operatingContext.getConfig();
        this.initialized = false;
        // Initialize logger
        this.logger = this.operatingContext.getLogger();
        // Initialize the network module class.
        this.networkClient = this.config.system.networkClient;
        // Initialize the navigation client class.
        this.navigationClient = this.config.system.navigationClient;
        // Initialize redirectResponse Map
        this.redirectResponse = new Map();
        // Initial hybrid spa map
        this.hybridAuthCodeResponses = new Map();
        // Initialize performance client
        this.performanceClient = this.config.telemetry.client;
        // Initialize the crypto class.
        this.browserCrypto = this.isBrowserEnvironment ? new (0, _cryptoOpsMjs.CryptoOps)(this.logger, this.performanceClient) : (0, _msalCommon.DEFAULT_CRYPTO_IMPLEMENTATION);
        this.eventHandler = new (0, _eventHandlerMjs.EventHandler)(this.logger, this.browserCrypto);
        // Initialize the browser storage class.
        this.browserStorage = this.isBrowserEnvironment ? new (0, _browserCacheManagerMjs.BrowserCacheManager)(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger, (0, _msalCommon.buildStaticAuthorityOptions)(this.config.auth)) : (0, _browserCacheManagerMjs.DEFAULT_BROWSER_CACHE_MANAGER)(this.config.auth.clientId, this.logger);
        // initialize in memory storage for native flows
        const nativeCacheOptions = {
            cacheLocation: (0, _browserConstantsMjs.BrowserCacheLocation).MemoryStorage,
            temporaryCacheLocation: (0, _browserConstantsMjs.BrowserCacheLocation).MemoryStorage,
            storeAuthStateInCookie: false,
            secureCookies: false,
            cacheMigrationEnabled: false,
            claimsBasedCachingEnabled: false
        };
        this.nativeInternalStorage = new (0, _browserCacheManagerMjs.BrowserCacheManager)(this.config.auth.clientId, nativeCacheOptions, this.browserCrypto, this.logger);
        // Initialize the token cache
        this.tokenCache = new (0, _tokenCacheMjs.TokenCache)(this.config, this.browserStorage, this.logger, this.browserCrypto);
        this.activeSilentTokenRequests = new Map();
        // Register listener functions
        this.trackPageVisibility = this.trackPageVisibility.bind(this);
        // Register listener functions
        this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
    }
    static async createController(operatingContext) {
        const controller = new StandardController(operatingContext);
        await controller.initialize();
        return controller;
    }
    trackPageVisibility() {
        if (!this.atsAsyncMeasurement) return;
        this.logger.info("Perf: Visibility change detected");
        this.atsAsyncMeasurement.increment({
            visibilityChangeCount: 1
        });
    }
    /**
     * Initializer function to perform async startup tasks such as connecting to WAM extension
     */ async initialize() {
        this.logger.trace("initialize called");
        if (this.initialized) {
            this.logger.info("initialize has already been called, exiting early.");
            return;
        }
        const allowNativeBroker = this.config.system.allowNativeBroker;
        const initMeasurement = this.performanceClient.startMeasurement((0, _msalCommon.PerformanceEvents).InitializeClientApplication);
        this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).INITIALIZE_START);
        if (allowNativeBroker) try {
            this.nativeExtensionProvider = await (0, _nativeMessageHandlerMjs.NativeMessageHandler).createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient);
        } catch (e) {
            this.logger.verbose(e);
        }
        if (!this.config.cache.claimsBasedCachingEnabled) {
            this.logger.verbose("Claims-based caching is disabled. Clearing the previous cache with claims");
            await (0, _msalCommon.invokeAsync)(this.browserStorage.clearTokensAndKeysWithClaims.bind(this.browserStorage), (0, _msalCommon.PerformanceEvents).ClearTokensAndKeysWithClaims, this.logger, this.performanceClient)(this.performanceClient);
        }
        this.initialized = true;
        this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).INITIALIZE_END);
        initMeasurement.end({
            allowNativeBroker,
            success: true
        });
    }
    // #region Redirect Flow
    /**
     * Event handler function which allows users to fire events after the PublicClientApplication object
     * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
     * auth flows.
     * @param hash Hash to process. Defaults to the current value of window.location.hash. Only needs to be provided explicitly if the response to be handled is not contained in the current value.
     * @returns Token response or null. If the return value is null, then no auth redirect was detected.
     */ async handleRedirectPromise(hash) {
        this.logger.verbose("handleRedirectPromise called");
        // Block token acquisition before initialize has been called
        (0, _browserUtilsMjs.blockAPICallsBeforeInitialize)(this.initialized);
        const loggedInAccounts = this.getAllAccounts();
        if (this.isBrowserEnvironment) {
            /**
             * Store the promise on the PublicClientApplication instance if this is the first invocation of handleRedirectPromise,
             * otherwise return the promise from the first invocation. Prevents race conditions when handleRedirectPromise is called
             * several times concurrently.
             */ const redirectResponseKey = hash || "";
            let response = this.redirectResponse.get(redirectResponseKey);
            if (typeof response === "undefined") {
                const request = this.browserStorage.getCachedNativeRequest();
                const useNative = request && (0, _nativeMessageHandlerMjs.NativeMessageHandler).isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !hash;
                const correlationId = useNative ? request?.correlationId : this.browserStorage.getTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).CORRELATION_ID, true) || "";
                const rootMeasurement = this.performanceClient.startMeasurement("acquireTokenRedirect", correlationId);
                this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).HANDLE_REDIRECT_START, (0, _browserConstantsMjs.InteractionType).Redirect);
                this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise");
                let redirectResponse;
                if (useNative && this.nativeExtensionProvider) {
                    this.logger.trace("handleRedirectPromise - acquiring token from native platform");
                    const nativeClient = new (0, _nativeInteractionClientMjs.NativeInteractionClient)(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, (0, _browserConstantsMjs.ApiId).handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, request.accountId, this.nativeInternalStorage, request.correlationId);
                    redirectResponse = (0, _msalCommon.invokeAsync)(nativeClient.handleRedirectPromise.bind(nativeClient), (0, _msalCommon.PerformanceEvents).HandleNativeRedirectPromiseMeasurement, this.logger, this.performanceClient, rootMeasurement.event.correlationId)(this.performanceClient, rootMeasurement.event.correlationId);
                } else {
                    this.logger.trace("handleRedirectPromise - acquiring token from web flow");
                    const redirectClient = this.createRedirectClient(correlationId);
                    redirectResponse = (0, _msalCommon.invokeAsync)(redirectClient.handleRedirectPromise.bind(redirectClient), (0, _msalCommon.PerformanceEvents).HandleRedirectPromiseMeasurement, this.logger, this.performanceClient, rootMeasurement.event.correlationId)(hash, this.performanceClient, rootMeasurement.event.correlationId);
                }
                response = redirectResponse.then((result)=>{
                    if (result) {
                        // Emit login event if number of accounts change
                        const isLoggingIn = loggedInAccounts.length < this.getAllAccounts().length;
                        if (isLoggingIn) {
                            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGIN_SUCCESS, (0, _browserConstantsMjs.InteractionType).Redirect, result);
                            this.logger.verbose("handleRedirectResponse returned result, login success");
                        } else {
                            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_SUCCESS, (0, _browserConstantsMjs.InteractionType).Redirect, result);
                            this.logger.verbose("handleRedirectResponse returned result, acquire token success");
                        }
                        rootMeasurement.end({
                            success: true
                        });
                    }
                    this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).HANDLE_REDIRECT_END, (0, _browserConstantsMjs.InteractionType).Redirect);
                    rootMeasurement.end({
                        success: false
                    });
                    return result;
                }).catch((e)=>{
                    const eventError = e;
                    // Emit login event if there is an account
                    if (loggedInAccounts.length > 0) this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_FAILURE, (0, _browserConstantsMjs.InteractionType).Redirect, null, eventError);
                    else this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGIN_FAILURE, (0, _browserConstantsMjs.InteractionType).Redirect, null, eventError);
                    this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).HANDLE_REDIRECT_END, (0, _browserConstantsMjs.InteractionType).Redirect);
                    if (eventError instanceof (0, _msalCommon.AuthError)) rootMeasurement.end({
                        success: false,
                        errorCode: eventError.errorCode,
                        subErrorCode: eventError.subError
                    });
                    else rootMeasurement.end({
                        success: false
                    });
                    throw e;
                });
                this.redirectResponse.set(redirectResponseKey, response);
            } else this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call");
            return response;
        }
        this.logger.verbose("handleRedirectPromise returns null, not browser environment");
        return null;
    }
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
     * the page, so any code that follows this function will not execute.
     *
     * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
     * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
     *
     * @param request
     */ async acquireTokenRedirect(request) {
        // Preflight request
        const correlationId = this.getRequestCorrelationId(request);
        this.logger.verbose("acquireTokenRedirect called", correlationId);
        this.preflightBrowserEnvironmentCheck((0, _browserConstantsMjs.InteractionType).Redirect);
        // If logged in, emit acquire token events
        const isLoggedIn = this.getAllAccounts().length > 0;
        if (isLoggedIn) this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_START, (0, _browserConstantsMjs.InteractionType).Redirect, request);
        else this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGIN_START, (0, _browserConstantsMjs.InteractionType).Redirect, request);
        let result;
        if (this.nativeExtensionProvider && this.canUseNative(request)) {
            const nativeClient = new (0, _nativeInteractionClientMjs.NativeInteractionClient)(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, (0, _browserConstantsMjs.ApiId).acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(request), this.nativeInternalStorage, correlationId);
            result = nativeClient.acquireTokenRedirect(request).catch((e)=>{
                if (e instanceof (0, _nativeAuthErrorMjs.NativeAuthError) && (0, _nativeAuthErrorMjs.isFatalNativeAuthError)(e)) {
                    this.nativeExtensionProvider = undefined; // If extension gets uninstalled during session prevent future requests from continuing to attempt
                    const redirectClient = this.createRedirectClient(correlationId);
                    return redirectClient.acquireToken(request);
                } else if (e instanceof (0, _msalCommon.InteractionRequiredAuthError)) {
                    this.logger.verbose("acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow");
                    const redirectClient = this.createRedirectClient(correlationId);
                    return redirectClient.acquireToken(request);
                }
                this.getBrowserStorage().setInteractionInProgress(false);
                throw e;
            });
        } else {
            const redirectClient = this.createRedirectClient(correlationId);
            result = redirectClient.acquireToken(request);
        }
        return result.catch((e)=>{
            // If logged in, emit acquire token events
            if (isLoggedIn) this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_FAILURE, (0, _browserConstantsMjs.InteractionType).Redirect, null, e);
            else this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGIN_FAILURE, (0, _browserConstantsMjs.InteractionType).Redirect, null, e);
            throw e;
        });
    }
    // #endregion
    // #region Popup Flow
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     *
     * @param request
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */ acquireTokenPopup(request) {
        const correlationId = this.getRequestCorrelationId(request);
        const atPopupMeasurement = this.performanceClient.startMeasurement((0, _msalCommon.PerformanceEvents).AcquireTokenPopup, correlationId);
        try {
            this.logger.verbose("acquireTokenPopup called", correlationId);
            this.preflightBrowserEnvironmentCheck((0, _browserConstantsMjs.InteractionType).Popup);
        } catch (e) {
            // Since this function is syncronous we need to reject
            return Promise.reject(e);
        }
        // If logged in, emit acquire token events
        const loggedInAccounts = this.getAllAccounts();
        if (loggedInAccounts.length > 0) this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_START, (0, _browserConstantsMjs.InteractionType).Popup, request);
        else this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGIN_START, (0, _browserConstantsMjs.InteractionType).Popup, request);
        let result;
        if (this.canUseNative(request)) result = this.acquireTokenNative({
            ...request,
            correlationId
        }, (0, _browserConstantsMjs.ApiId).acquireTokenPopup).then((response)=>{
            this.getBrowserStorage().setInteractionInProgress(false);
            atPopupMeasurement.end({
                success: true,
                isNativeBroker: true,
                requestId: response.requestId
            });
            return response;
        }).catch((e)=>{
            if (e instanceof (0, _nativeAuthErrorMjs.NativeAuthError) && (0, _nativeAuthErrorMjs.isFatalNativeAuthError)(e)) {
                this.nativeExtensionProvider = undefined; // If extension gets uninstalled during session prevent future requests from continuing to attempt
                const popupClient = this.createPopupClient(correlationId);
                return popupClient.acquireToken(request);
            } else if (e instanceof (0, _msalCommon.InteractionRequiredAuthError)) {
                this.logger.verbose("acquireTokenPopup - Resolving interaction required error thrown by native broker by falling back to web flow");
                const popupClient = this.createPopupClient(correlationId);
                return popupClient.acquireToken(request);
            }
            this.getBrowserStorage().setInteractionInProgress(false);
            throw e;
        });
        else {
            const popupClient = this.createPopupClient(correlationId);
            result = popupClient.acquireToken(request);
        }
        return result.then((result)=>{
            /*
             *  If logged in, emit acquire token events
             */ const isLoggingIn = loggedInAccounts.length < this.getAllAccounts().length;
            if (isLoggingIn) this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGIN_SUCCESS, (0, _browserConstantsMjs.InteractionType).Popup, result);
            else this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_SUCCESS, (0, _browserConstantsMjs.InteractionType).Popup, result);
            atPopupMeasurement.add({
                accessTokenSize: result.accessToken.length,
                idTokenSize: result.idToken.length
            });
            atPopupMeasurement.end({
                success: true,
                requestId: result.requestId
            });
            return result;
        }).catch((e)=>{
            if (loggedInAccounts.length > 0) this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_FAILURE, (0, _browserConstantsMjs.InteractionType).Popup, null, e);
            else this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGIN_FAILURE, (0, _browserConstantsMjs.InteractionType).Popup, null, e);
            atPopupMeasurement.end({
                errorCode: e.errorCode,
                subErrorCode: e.subError,
                success: false
            });
            // Since this function is syncronous we need to reject
            return Promise.reject(e);
        });
    }
    trackPageVisibilityWithMeasurement() {
        const measurement = this.ssoSilentMeasurement || this.acquireTokenByCodeAsyncMeasurement;
        if (!measurement) return;
        this.logger.info("Perf: Visibility change detected in ", measurement.event.name);
        measurement.increment({
            visibilityChangeCount: 1
        });
    }
    // #endregion
    // #region Silent Flow
    /**
     * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
     * - Any browser using a form of Intelligent Tracking Prevention
     * - If there is not an established session with the service
     *
     * In these cases, the request must be done inside a popup or full frame redirect.
     *
     * For the cases where interaction is required, you cannot send a request with prompt=none.
     *
     * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
     * you session on the server still exists.
     * @param request {@link SsoSilentRequest}
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */ async ssoSilent(request) {
        const correlationId = this.getRequestCorrelationId(request);
        const validRequest = {
            ...request,
            // will be PromptValue.NONE or PromptValue.NO_SESSION
            prompt: request.prompt,
            correlationId: correlationId
        };
        this.preflightBrowserEnvironmentCheck((0, _browserConstantsMjs.InteractionType).Silent);
        this.ssoSilentMeasurement = this.performanceClient.startMeasurement((0, _msalCommon.PerformanceEvents).SsoSilent, correlationId);
        this.ssoSilentMeasurement?.increment({
            visibilityChangeCount: 0
        });
        document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
        this.logger.verbose("ssoSilent called", correlationId);
        this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).SSO_SILENT_START, (0, _browserConstantsMjs.InteractionType).Silent, validRequest);
        let result;
        if (this.canUseNative(validRequest)) result = this.acquireTokenNative(validRequest, (0, _browserConstantsMjs.ApiId).ssoSilent).catch((e)=>{
            // If native token acquisition fails for availability reasons fallback to standard flow
            if (e instanceof (0, _nativeAuthErrorMjs.NativeAuthError) && (0, _nativeAuthErrorMjs.isFatalNativeAuthError)(e)) {
                this.nativeExtensionProvider = undefined; // If extension gets uninstalled during session prevent future requests from continuing to attempt
                const silentIframeClient = this.createSilentIframeClient(validRequest.correlationId);
                return silentIframeClient.acquireToken(validRequest);
            }
            throw e;
        });
        else {
            const silentIframeClient = this.createSilentIframeClient(validRequest.correlationId);
            result = silentIframeClient.acquireToken(validRequest);
        }
        return result.then((response)=>{
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).SSO_SILENT_SUCCESS, (0, _browserConstantsMjs.InteractionType).Silent, response);
            this.ssoSilentMeasurement?.add({
                accessTokenSize: response.accessToken.length,
                idTokenSize: response.idToken.length
            });
            this.ssoSilentMeasurement?.end({
                success: true,
                isNativeBroker: response.fromNativeBroker,
                requestId: response.requestId
            });
            return response;
        }).catch((e)=>{
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).SSO_SILENT_FAILURE, (0, _browserConstantsMjs.InteractionType).Silent, null, e);
            this.ssoSilentMeasurement?.end({
                errorCode: e.errorCode,
                subErrorCode: e.subError,
                success: false
            });
            throw e;
        }).finally(()=>{
            document.removeEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
        });
    }
    /**
     * This function redeems an authorization code (passed as code) from the eSTS token endpoint.
     * This authorization code should be acquired server-side using a confidential client to acquire a spa_code.
     * This API is not indended for normal authorization code acquisition and redemption.
     *
     * Redemption of this authorization code will not require PKCE, as it was acquired by a confidential client.
     *
     * @param request {@link AuthorizationCodeRequest}
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */ async acquireTokenByCode(request) {
        const correlationId = this.getRequestCorrelationId(request);
        this.preflightBrowserEnvironmentCheck((0, _browserConstantsMjs.InteractionType).Silent);
        this.logger.trace("acquireTokenByCode called", correlationId);
        this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_BY_CODE_START, (0, _browserConstantsMjs.InteractionType).Silent, request);
        const atbcMeasurement = this.performanceClient.startMeasurement((0, _msalCommon.PerformanceEvents).AcquireTokenByCode, correlationId);
        try {
            if (request.code && request.nativeAccountId) // Throw error in case server returns both spa_code and spa_accountid in exchange for auth code.
            throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.spaCodeAndNativeAccountIdPresent));
            else if (request.code) {
                const hybridAuthCode = request.code;
                let response = this.hybridAuthCodeResponses.get(hybridAuthCode);
                if (!response) {
                    this.logger.verbose("Initiating new acquireTokenByCode request", correlationId);
                    response = this.acquireTokenByCodeAsync({
                        ...request,
                        correlationId
                    }).then((result)=>{
                        this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_BY_CODE_SUCCESS, (0, _browserConstantsMjs.InteractionType).Silent, result);
                        this.hybridAuthCodeResponses.delete(hybridAuthCode);
                        atbcMeasurement.add({
                            accessTokenSize: result.accessToken.length,
                            idTokenSize: result.idToken.length
                        });
                        atbcMeasurement.end({
                            success: true,
                            isNativeBroker: result.fromNativeBroker,
                            requestId: result.requestId
                        });
                        return result;
                    }).catch((error)=>{
                        this.hybridAuthCodeResponses.delete(hybridAuthCode);
                        this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_BY_CODE_FAILURE, (0, _browserConstantsMjs.InteractionType).Silent, null, error);
                        atbcMeasurement.end({
                            errorCode: error.errorCode,
                            subErrorCode: error.subError,
                            success: false
                        });
                        throw error;
                    });
                    this.hybridAuthCodeResponses.set(hybridAuthCode, response);
                } else {
                    this.logger.verbose("Existing acquireTokenByCode request found", correlationId);
                    atbcMeasurement.discard();
                }
                return await response;
            } else if (request.nativeAccountId) {
                if (this.canUseNative(request, request.nativeAccountId)) return await this.acquireTokenNative({
                    ...request,
                    correlationId
                }, (0, _browserConstantsMjs.ApiId).acquireTokenByCode, request.nativeAccountId).catch((e)=>{
                    // If native token acquisition fails for availability reasons fallback to standard flow
                    if (e instanceof (0, _nativeAuthErrorMjs.NativeAuthError) && (0, _nativeAuthErrorMjs.isFatalNativeAuthError)(e)) this.nativeExtensionProvider = undefined; // If extension gets uninstalled during session prevent future requests from continuing to attempt
                    throw e;
                });
                else throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.unableToAcquireTokenFromNativePlatform));
            } else throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.authCodeOrNativeAccountIdRequired));
        } catch (e) {
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_BY_CODE_FAILURE, (0, _browserConstantsMjs.InteractionType).Silent, null, e);
            atbcMeasurement.end({
                errorCode: e instanceof (0, _msalCommon.AuthError) && e.errorCode || undefined,
                subErrorCode: e instanceof (0, _msalCommon.AuthError) && e.subError || undefined,
                success: false
            });
            throw e;
        }
    }
    /**
     * Creates a SilentAuthCodeClient to redeem an authorization code.
     * @param request
     * @returns Result of the operation to redeem the authorization code
     */ async acquireTokenByCodeAsync(request) {
        this.logger.trace("acquireTokenByCodeAsync called", request.correlationId);
        this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement((0, _msalCommon.PerformanceEvents).AcquireTokenByCodeAsync, request.correlationId);
        this.acquireTokenByCodeAsyncMeasurement?.increment({
            visibilityChangeCount: 0
        });
        document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
        const silentAuthCodeClient = this.createSilentAuthCodeClient(request.correlationId);
        const silentTokenResult = await silentAuthCodeClient.acquireToken(request).then((response)=>{
            this.acquireTokenByCodeAsyncMeasurement?.end({
                success: true,
                fromCache: response.fromCache,
                isNativeBroker: response.fromNativeBroker,
                requestId: response.requestId
            });
            return response;
        }).catch((tokenRenewalError)=>{
            this.acquireTokenByCodeAsyncMeasurement?.end({
                errorCode: tokenRenewalError.errorCode,
                subErrorCode: tokenRenewalError.subError,
                success: false
            });
            throw tokenRenewalError;
        }).finally(()=>{
            document.removeEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
        });
        return silentTokenResult;
    }
    /**
     * Attempt to acquire an access token from the cache
     * @param silentCacheClient SilentCacheClient
     * @param commonRequest CommonSilentFlowRequest
     * @param silentRequest SilentRequest
     * @returns A promise that, when resolved, returns the access token
     */ async acquireTokenFromCache(silentCacheClient, commonRequest, cacheLookupPolicy) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).AcquireTokenFromCache, commonRequest.correlationId);
        switch(cacheLookupPolicy){
            case (0, _browserConstantsMjs.CacheLookupPolicy).Default:
            case (0, _browserConstantsMjs.CacheLookupPolicy).AccessToken:
            case (0, _browserConstantsMjs.CacheLookupPolicy).AccessTokenAndRefreshToken:
                return (0, _msalCommon.invokeAsync)(silentCacheClient.acquireToken.bind(silentCacheClient), (0, _msalCommon.PerformanceEvents).SilentCacheClientAcquireToken, this.logger, this.performanceClient, commonRequest.correlationId)(commonRequest);
            default:
                throw (0, _msalCommon.createClientAuthError)((0, _msalCommon.ClientAuthErrorCodes).tokenRefreshRequired);
        }
    }
    /**
     * Attempt to acquire an access token via a refresh token
     * @param commonRequest CommonSilentFlowRequest
     * @param cacheLookupPolicy CacheLookupPolicy
     * @returns A promise that, when resolved, returns the access token
     */ async acquireTokenByRefreshToken(commonRequest, cacheLookupPolicy) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).AcquireTokenByRefreshToken, commonRequest.correlationId);
        switch(cacheLookupPolicy){
            case (0, _browserConstantsMjs.CacheLookupPolicy).Default:
            case (0, _browserConstantsMjs.CacheLookupPolicy).AccessTokenAndRefreshToken:
            case (0, _browserConstantsMjs.CacheLookupPolicy).RefreshToken:
            case (0, _browserConstantsMjs.CacheLookupPolicy).RefreshTokenAndNetwork:
                const silentRefreshClient = this.createSilentRefreshClient(commonRequest.correlationId);
                return (0, _msalCommon.invokeAsync)(silentRefreshClient.acquireToken.bind(silentRefreshClient), (0, _msalCommon.PerformanceEvents).SilentRefreshClientAcquireToken, this.logger, this.performanceClient, commonRequest.correlationId)(commonRequest);
            default:
                throw (0, _msalCommon.createClientAuthError)((0, _msalCommon.ClientAuthErrorCodes).tokenRefreshRequired);
        }
    }
    /**
     * Attempt to acquire an access token via an iframe
     * @param request CommonSilentFlowRequest
     * @returns A promise that, when resolved, returns the access token
     */ async acquireTokenBySilentIframe(request) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).AcquireTokenBySilentIframe, request.correlationId);
        const silentIframeClient = this.createSilentIframeClient(request.correlationId);
        return (0, _msalCommon.invokeAsync)(silentIframeClient.acquireToken.bind(silentIframeClient), (0, _msalCommon.PerformanceEvents).SilentIframeClientAcquireToken, this.logger, this.performanceClient, request.correlationId)(request);
    }
    // #endregion
    // #region Logout
    /**
     * Deprecated logout function. Use logoutRedirect or logoutPopup instead
     * @param logoutRequest
     * @deprecated
     */ async logout(logoutRequest) {
        const correlationId = this.getRequestCorrelationId(logoutRequest);
        this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", correlationId);
        return this.logoutRedirect({
            correlationId,
            ...logoutRequest
        });
    }
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param logoutRequest
     */ async logoutRedirect(logoutRequest) {
        const correlationId = this.getRequestCorrelationId(logoutRequest);
        this.preflightBrowserEnvironmentCheck((0, _browserConstantsMjs.InteractionType).Redirect);
        const redirectClient = this.createRedirectClient(correlationId);
        return redirectClient.logout(logoutRequest);
    }
    /**
     * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
     * @param logoutRequest
     */ logoutPopup(logoutRequest) {
        try {
            const correlationId = this.getRequestCorrelationId(logoutRequest);
            this.preflightBrowserEnvironmentCheck((0, _browserConstantsMjs.InteractionType).Popup);
            const popupClient = this.createPopupClient(correlationId);
            return popupClient.logout(logoutRequest);
        } catch (e) {
            // Since this function is syncronous we need to reject
            return Promise.reject(e);
        }
    }
    /**
     * Creates a cache interaction client to clear broswer cache.
     * @param logoutRequest
     */ async clearCache(logoutRequest) {
        const correlationId = this.getRequestCorrelationId(logoutRequest);
        const cacheClient = this.createSilentCacheClient(correlationId);
        return cacheClient.logout(logoutRequest);
    }
    // #endregion
    // #region Account APIs
    /**
     * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
     * @param accountFilter - (Optional) filter to narrow down the accounts returned
     * @returns Array of AccountInfo objects in cache
     */ getAllAccounts(accountFilter) {
        this.logger.verbose("getAllAccounts called");
        return this.isBrowserEnvironment ? this.browserStorage.getAllAccounts(accountFilter) : [];
    }
    /**
     * Returns the first account found in the cache that matches the account filter passed in.
     * @param accountFilter
     * @returns The first account found in the cache matching the provided filter or null if no account could be found.
     */ getAccount(accountFilter) {
        this.logger.trace("getAccount called");
        if (Object.keys(accountFilter).length === 0) {
            this.logger.warning("getAccount: No accountFilter provided");
            return null;
        }
        const account = this.browserStorage.getAccountInfoFilteredBy(accountFilter);
        if (account) {
            this.logger.verbose("getAccount: Account matching provided filter found, returning");
            return account;
        } else {
            this.logger.verbose("getAccount: No matching account found, returning null");
            return null;
        }
    }
    /**
     * Returns the signed in account matching username.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found.
     * This API is provided for convenience but getAccountById should be used for best reliability
     * @param username
     * @returns The account object stored in MSAL
     */ getAccountByUsername(username) {
        this.logger.trace("getAccountByUsername called");
        if (!username) {
            this.logger.warning("getAccountByUsername: No username provided");
            return null;
        }
        const account = this.browserStorage.getAccountInfoFilteredBy({
            username
        });
        if (account) {
            this.logger.verbose("getAccountByUsername: Account matching username found, returning");
            this.logger.verbosePii(`getAccountByUsername: Returning signed-in accounts matching username: ${username}`);
            return account;
        } else {
            this.logger.verbose("getAccountByUsername: No matching account found, returning null");
            return null;
        }
    }
    /**
     * Returns the signed in account matching homeAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @param homeAccountId
     * @returns The account object stored in MSAL
     */ getAccountByHomeId(homeAccountId) {
        this.logger.trace("getAccountByHomeId called");
        if (!homeAccountId) {
            this.logger.warning("getAccountByHomeId: No homeAccountId provided");
            return null;
        }
        const account = this.browserStorage.getAccountInfoFilteredBy({
            homeAccountId
        });
        if (account) {
            this.logger.verbose("getAccountByHomeId: Account matching homeAccountId found, returning");
            this.logger.verbosePii(`getAccountByHomeId: Returning signed-in accounts matching homeAccountId: ${homeAccountId}`);
            return account;
        } else {
            this.logger.verbose("getAccountByHomeId: No matching account found, returning null");
            return null;
        }
    }
    /**
     * Returns the signed in account matching localAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @param localAccountId
     * @returns The account object stored in MSAL
     */ getAccountByLocalId(localAccountId) {
        this.logger.trace("getAccountByLocalId called");
        if (!localAccountId) {
            this.logger.warning("getAccountByLocalId: No localAccountId provided");
            return null;
        }
        const account = this.browserStorage.getAccountInfoFilteredBy({
            localAccountId
        });
        if (account) {
            this.logger.verbose("getAccountByLocalId: Account matching localAccountId found, returning");
            this.logger.verbosePii(`getAccountByLocalId: Returning signed-in accounts matching localAccountId: ${localAccountId}`);
            return account;
        } else {
            this.logger.verbose("getAccountByLocalId: No matching account found, returning null");
            return null;
        }
    }
    /**
     * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
     * @param account
     */ setActiveAccount(account) {
        this.browserStorage.setActiveAccount(account);
    }
    /**
     * Gets the currently active account
     */ getActiveAccount() {
        return this.browserStorage.getActiveAccount();
    }
    // #endregion
    /**
     * Hydrates the cache with the tokens from an AuthenticationResult
     * @param result
     * @param request
     * @returns
     */ async hydrateCache(result, request) {
        this.logger.verbose("hydrateCache called");
        // Account gets saved to browser storage regardless of native or not
        const accountEntity = (0, _msalCommon.AccountEntity).createFromAccountInfo(result.account, result.cloudGraphHostName, result.msGraphHost);
        this.browserStorage.setAccount(accountEntity);
        if (result.fromNativeBroker) {
            this.logger.verbose("Response was from native broker, storing in-memory");
            // Tokens from native broker are stored in-memory
            return this.nativeInternalStorage.hydrateCache(result, request);
        } else return this.browserStorage.hydrateCache(result, request);
    }
    // #region Helpers
    /**
     * Helper to validate app environment before making an auth request
     *
     * @protected
     * @param {InteractionType} interactionType What kind of interaction is being used
     * @param {boolean} [isAppEmbedded=false] Whether to set interaction in progress temp cache flag
     */ preflightBrowserEnvironmentCheck(interactionType, isAppEmbedded = false) {
        this.logger.verbose("preflightBrowserEnvironmentCheck started");
        // Block request if not in browser environment
        (0, _browserUtilsMjs.blockNonBrowserEnvironment)(this.isBrowserEnvironment);
        // Block redirects if in an iframe
        (0, _browserUtilsMjs.blockRedirectInIframe)(interactionType, this.config.system.allowRedirectInIframe);
        // Block auth requests inside a hidden iframe
        (0, _browserUtilsMjs.blockReloadInHiddenIframes)();
        // Block redirectUri opened in a popup from calling MSAL APIs
        (0, _browserUtilsMjs.blockAcquireTokenInPopups)();
        // Block token acquisition before initialize has been called
        (0, _browserUtilsMjs.blockAPICallsBeforeInitialize)(this.initialized);
        // Block redirects if memory storage is enabled but storeAuthStateInCookie is not
        if (interactionType === (0, _browserConstantsMjs.InteractionType).Redirect && this.config.cache.cacheLocation === (0, _browserConstantsMjs.BrowserCacheLocation).MemoryStorage && !this.config.cache.storeAuthStateInCookie) throw (0, _browserConfigurationAuthErrorMjs.createBrowserConfigurationAuthError)((0, _browserConfigurationAuthErrorCodesMjs.inMemRedirectUnavailable));
        if (interactionType === (0, _browserConstantsMjs.InteractionType).Redirect || interactionType === (0, _browserConstantsMjs.InteractionType).Popup) this.preflightInteractiveRequest(!isAppEmbedded);
    }
    /**
     * Preflight check for interactive requests
     *
     * @protected
     * @param {boolean} setInteractionInProgress Whether to set interaction in progress temp cache flag
     */ preflightInteractiveRequest(setInteractionInProgress) {
        this.logger.verbose("preflightInteractiveRequest called, validating app environment");
        // block the reload if it occurred inside a hidden iframe
        (0, _browserUtilsMjs.blockReloadInHiddenIframes)();
        // Set interaction in progress temporary cache or throw if alread set.
        if (setInteractionInProgress) this.getBrowserStorage().setInteractionInProgress(true);
    }
    /**
     * Acquire a token from native device (e.g. WAM)
     * @param request
     */ async acquireTokenNative(request, apiId, accountId) {
        this.logger.trace("acquireTokenNative called");
        if (!this.nativeExtensionProvider) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.nativeConnectionNotEstablished));
        const nativeClient = new (0, _nativeInteractionClientMjs.NativeInteractionClient)(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, apiId, this.performanceClient, this.nativeExtensionProvider, accountId || this.getNativeAccountId(request), this.nativeInternalStorage, request.correlationId);
        return nativeClient.acquireToken(request);
    }
    /**
     * Returns boolean indicating if this request can use the native broker
     * @param request
     */ canUseNative(request, accountId) {
        this.logger.trace("canUseNative called");
        if (!(0, _nativeMessageHandlerMjs.NativeMessageHandler).isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, request.authenticationScheme)) {
            this.logger.trace("canUseNative: isNativeAvailable returned false, returning false");
            return false;
        }
        if (request.prompt) switch(request.prompt){
            case (0, _msalCommon.PromptValue).NONE:
            case (0, _msalCommon.PromptValue).CONSENT:
            case (0, _msalCommon.PromptValue).LOGIN:
                this.logger.trace("canUseNative: prompt is compatible with native flow");
                break;
            default:
                this.logger.trace(`canUseNative: prompt = ${request.prompt} is not compatible with native flow, returning false`);
                return false;
        }
        if (!accountId && !this.getNativeAccountId(request)) {
            this.logger.trace("canUseNative: nativeAccountId is not available, returning false");
            return false;
        }
        return true;
    }
    /**
     * Get the native accountId from the account
     * @param request
     * @returns
     */ getNativeAccountId(request) {
        const account = request.account || this.getAccount({
            loginHint: request.loginHint,
            sid: request.sid
        }) || this.getActiveAccount();
        return account && account.nativeAccountId || "";
    }
    /**
     * Returns new instance of the Popup Interaction Client
     * @param correlationId
     */ createPopupClient(correlationId) {
        return new (0, _popupClientMjs.PopupClient)(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, correlationId);
    }
    /**
     * Returns new instance of the Redirect Interaction Client
     * @param correlationId
     */ createRedirectClient(correlationId) {
        return new (0, _redirectClientMjs.RedirectClient)(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, correlationId);
    }
    /**
     * Returns new instance of the Silent Iframe Interaction Client
     * @param correlationId
     */ createSilentIframeClient(correlationId) {
        return new (0, _silentIframeClientMjs.SilentIframeClient)(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, (0, _browserConstantsMjs.ApiId).ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, correlationId);
    }
    /**
     * Returns new instance of the Silent Cache Interaction Client
     */ createSilentCacheClient(correlationId) {
        return new (0, _silentCacheClientMjs.SilentCacheClient)(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, correlationId);
    }
    /**
     * Returns new instance of the Silent Refresh Interaction Client
     */ createSilentRefreshClient(correlationId) {
        return new (0, _silentRefreshClientMjs.SilentRefreshClient)(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, correlationId);
    }
    /**
     * Returns new instance of the Silent AuthCode Interaction Client
     */ createSilentAuthCodeClient(correlationId) {
        return new (0, _silentAuthCodeClientMjs.SilentAuthCodeClient)(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, (0, _browserConstantsMjs.ApiId).acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, correlationId);
    }
    /**
     * Adds event callbacks to array
     * @param callback
     */ addEventCallback(callback) {
        return this.eventHandler.addEventCallback(callback);
    }
    /**
     * Removes callback with provided id from callback array
     * @param callbackId
     */ removeEventCallback(callbackId) {
        this.eventHandler.removeEventCallback(callbackId);
    }
    /**
     * Registers a callback to receive performance events.
     *
     * @param {PerformanceCallbackFunction} callback
     * @returns {string}
     */ addPerformanceCallback(callback) {
        return this.performanceClient.addPerformanceCallback(callback);
    }
    /**
     * Removes a callback registered with addPerformanceCallback.
     *
     * @param {string} callbackId
     * @returns {boolean}
     */ removePerformanceCallback(callbackId) {
        return this.performanceClient.removePerformanceCallback(callbackId);
    }
    /**
     * Adds event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
     */ enableAccountStorageEvents() {
        this.eventHandler.enableAccountStorageEvents();
    }
    /**
     * Removes event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
     */ disableAccountStorageEvents() {
        this.eventHandler.disableAccountStorageEvents();
    }
    /**
     * Gets the token cache for the application.
     */ getTokenCache() {
        return this.tokenCache;
    }
    /**
     * Returns the logger instance
     */ getLogger() {
        return this.logger;
    }
    /**
     * Replaces the default logger set in configurations with new Logger with new configurations
     * @param logger Logger instance
     */ setLogger(logger) {
        this.logger = logger;
    }
    /**
     * Called by wrapper libraries (Angular & React) to set SKU and Version passed down to telemetry, logger, etc.
     * @param sku
     * @param version
     */ initializeWrapperLibrary(sku, version) {
        // Validate the SKU passed in is one we expect
        this.browserStorage.setWrapperMetadata(sku, version);
    }
    /**
     * Sets navigation client
     * @param navigationClient
     */ setNavigationClient(navigationClient) {
        this.navigationClient = navigationClient;
    }
    /**
     * Returns the configuration object
     */ getConfiguration() {
        return this.config;
    }
    /**
     * Returns the performance client
     */ getPerformanceClient() {
        return this.performanceClient;
    }
    /**
     * Returns the browser storage
     */ getBrowserStorage() {
        return this.browserStorage;
    }
    /**
     * Returns the browser env indicator
     */ isBrowserEnv() {
        return this.isBrowserEnvironment;
    }
    /**
     * Returns the event handler
     */ getEventHandler() {
        return this.eventHandler;
    }
    /**
     * Generates a correlation id for a request if none is provided.
     *
     * @protected
     * @param {?Partial<BaseAuthRequest>} [request]
     * @returns {string}
     */ getRequestCorrelationId(request) {
        if (request?.correlationId) return request.correlationId;
        if (this.isBrowserEnvironment) return (0, _browserCryptoMjs.createNewGuid)();
        /*
         * Included for fallback for non-browser environments,
         * and to ensure this method always returns a string.
         */ return (0, _msalCommon.Constants).EMPTY_STRING;
    }
    // #endregion
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
     * any code that follows this function will not execute.
     *
     * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
     * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
     *
     * @param request
     */ async loginRedirect(request) {
        const correlationId = this.getRequestCorrelationId(request);
        this.logger.verbose("loginRedirect called", correlationId);
        return this.acquireTokenRedirect({
            correlationId,
            ...request || (0, _browserConstantsMjs.DEFAULT_REQUEST)
        });
    }
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param request
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */ loginPopup(request) {
        const correlationId = this.getRequestCorrelationId(request);
        this.logger.verbose("loginPopup called", correlationId);
        return this.acquireTokenPopup({
            correlationId,
            ...request || (0, _browserConstantsMjs.DEFAULT_REQUEST)
        });
    }
    /**
     * Silently acquire an access token for a given set of scopes. Returns currently processing promise if parallel requests are made.
     *
     * @param {@link (SilentRequest:type)}
     * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */ async acquireTokenSilent(request) {
        const correlationId = this.getRequestCorrelationId(request);
        const atsMeasurement = this.performanceClient.startMeasurement((0, _msalCommon.PerformanceEvents).AcquireTokenSilent, correlationId);
        atsMeasurement.add({
            cacheLookupPolicy: request.cacheLookupPolicy
        });
        this.preflightBrowserEnvironmentCheck((0, _browserConstantsMjs.InteractionType).Silent);
        this.logger.verbose("acquireTokenSilent called", correlationId);
        const account = request.account || this.getActiveAccount();
        if (!account) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.noAccountError));
        const thumbprint = {
            clientId: this.config.auth.clientId,
            authority: request.authority || (0, _msalCommon.Constants).EMPTY_STRING,
            scopes: request.scopes,
            homeAccountIdentifier: account.homeAccountId,
            claims: request.claims,
            authenticationScheme: request.authenticationScheme,
            resourceRequestMethod: request.resourceRequestMethod,
            resourceRequestUri: request.resourceRequestUri,
            shrClaims: request.shrClaims,
            sshKid: request.sshKid,
            shrOptions: request.shrOptions
        };
        const silentRequestKey = JSON.stringify(thumbprint);
        const cachedResponse = this.activeSilentTokenRequests.get(silentRequestKey);
        if (typeof cachedResponse === "undefined") {
            this.logger.verbose("acquireTokenSilent called for the first time, storing active request", correlationId);
            const response = (0, _msalCommon.invokeAsync)(this.acquireTokenSilentAsync.bind(this), (0, _msalCommon.PerformanceEvents).AcquireTokenSilentAsync, this.logger, this.performanceClient, correlationId)({
                ...request,
                correlationId
            }, account).then((result)=>{
                this.activeSilentTokenRequests.delete(silentRequestKey);
                atsMeasurement.add({
                    accessTokenSize: result.accessToken.length,
                    idTokenSize: result.idToken.length
                });
                atsMeasurement.end({
                    success: true,
                    fromCache: result.fromCache,
                    isNativeBroker: result.fromNativeBroker,
                    cacheLookupPolicy: request.cacheLookupPolicy,
                    requestId: result.requestId
                });
                return result;
            }).catch((error)=>{
                this.activeSilentTokenRequests.delete(silentRequestKey);
                atsMeasurement.end({
                    errorCode: error.errorCode,
                    subErrorCode: error.subError,
                    success: false
                });
                throw error;
            });
            this.activeSilentTokenRequests.set(silentRequestKey, response);
            return {
                ...await response,
                state: request.state
            };
        } else {
            this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", correlationId);
            // Discard measurements for memoized calls, as they are usually only a couple of ms and will artificially deflate metrics
            atsMeasurement.discard();
            return {
                ...await cachedResponse,
                state: request.state
            };
        }
    }
    /**
     * Silently acquire an access token for a given set of scopes. Will use cached token if available, otherwise will attempt to acquire a new token from the network via refresh token.
     * @param {@link (SilentRequest:type)}
     * @param {@link (AccountInfo:type)}
     * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse}
     */ async acquireTokenSilentAsync(request, account) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).AcquireTokenSilentAsync, request.correlationId);
        this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_START, (0, _browserConstantsMjs.InteractionType).Silent, request);
        this.atsAsyncMeasurement = this.performanceClient.startMeasurement((0, _msalCommon.PerformanceEvents).AcquireTokenSilentAsync, request.correlationId);
        this.atsAsyncMeasurement?.increment({
            visibilityChangeCount: 0
        });
        document.addEventListener("visibilitychange", this.trackPageVisibility);
        let result;
        if ((0, _nativeMessageHandlerMjs.NativeMessageHandler).isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, request.authenticationScheme) && account.nativeAccountId) {
            this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform");
            const silentRequest = {
                ...request,
                account
            };
            result = this.acquireTokenNative(silentRequest, (0, _browserConstantsMjs.ApiId).acquireTokenSilent_silentFlow).catch(async (e)=>{
                // If native token acquisition fails for availability reasons fallback to web flow
                if (e instanceof (0, _nativeAuthErrorMjs.NativeAuthError) && (0, _nativeAuthErrorMjs.isFatalNativeAuthError)(e)) {
                    this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow");
                    this.nativeExtensionProvider = undefined; // Prevent future requests from continuing to attempt
                    // Cache will not contain tokens, given that previous WAM requests succeeded. Skip cache and RT renewal and go straight to iframe renewal
                    const silentIframeClient = this.createSilentIframeClient(request.correlationId);
                    return silentIframeClient.acquireToken(request);
                }
                throw e;
            });
        } else {
            this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow");
            const silentCacheClient = this.createSilentCacheClient(request.correlationId);
            const silentRequest = await (0, _msalCommon.invokeAsync)(silentCacheClient.initializeSilentRequest.bind(silentCacheClient), (0, _msalCommon.PerformanceEvents).InitializeSilentRequest, this.logger, this.performanceClient, request.correlationId)(request, account);
            const cacheLookupPolicy = request.cacheLookupPolicy || (0, _browserConstantsMjs.CacheLookupPolicy).Default;
            result = (0, _msalCommon.invokeAsync)(this.acquireTokenFromCache.bind(this), (0, _msalCommon.PerformanceEvents).AcquireTokenFromCache, this.logger, this.performanceClient, silentRequest.correlationId)(silentCacheClient, silentRequest, cacheLookupPolicy).catch((cacheError)=>{
                if (request.cacheLookupPolicy === (0, _browserConstantsMjs.CacheLookupPolicy).AccessToken) throw cacheError;
                // block the reload if it occurred inside a hidden iframe
                (0, _browserUtilsMjs.blockReloadInHiddenIframes)();
                this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_NETWORK_START, (0, _browserConstantsMjs.InteractionType).Silent, silentRequest);
                return (0, _msalCommon.invokeAsync)(this.acquireTokenByRefreshToken.bind(this), (0, _msalCommon.PerformanceEvents).AcquireTokenByRefreshToken, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest, cacheLookupPolicy).catch((refreshTokenError)=>{
                    const shouldTryToResolveSilently = checkIfRefreshTokenErrorCanBeResolvedSilently(refreshTokenError, silentRequest, cacheLookupPolicy);
                    if (shouldTryToResolveSilently) {
                        this.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", silentRequest.correlationId);
                        return (0, _msalCommon.invokeAsync)(this.acquireTokenBySilentIframe.bind(this), (0, _msalCommon.PerformanceEvents).AcquireTokenBySilentIframe, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest);
                    } else // Error cannot be silently resolved or iframe renewal is not allowed, interaction required
                    throw refreshTokenError;
                });
            });
        }
        return result.then((response)=>{
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_SUCCESS, (0, _browserConstantsMjs.InteractionType).Silent, response);
            this.atsAsyncMeasurement?.end({
                success: true,
                fromCache: response.fromCache,
                isNativeBroker: response.fromNativeBroker,
                requestId: response.requestId
            });
            return response;
        }).catch((tokenRenewalError)=>{
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).ACQUIRE_TOKEN_FAILURE, (0, _browserConstantsMjs.InteractionType).Silent, null, tokenRenewalError);
            this.atsAsyncMeasurement?.end({
                errorCode: tokenRenewalError.errorCode,
                subErrorCode: tokenRenewalError.subError,
                success: false
            });
            throw tokenRenewalError;
        }).finally(()=>{
            document.removeEventListener("visibilitychange", this.trackPageVisibility);
        });
    }
}
/**
 * Determines whether an error thrown by the refresh token endpoint can be resolved without interaction
 * @param refreshTokenError
 * @param silentRequest
 * @param cacheLookupPolicy
 * @returns
 */ function checkIfRefreshTokenErrorCanBeResolvedSilently(refreshTokenError, silentRequest, cacheLookupPolicy) {
    const noInteractionRequired = !(refreshTokenError instanceof (0, _msalCommon.InteractionRequiredAuthError) && // For refresh token errors, bad_token does not always require interaction (silently resolvable)
    refreshTokenError.subError !== (0, _msalCommon.InteractionRequiredAuthErrorCodes).badToken);
    // Errors that result when the refresh token needs to be replaced
    const refreshTokenRefreshRequired = refreshTokenError.errorCode === (0, _browserConstantsMjs.BrowserConstants).INVALID_GRANT_ERROR || refreshTokenError.errorCode === (0, _msalCommon.ClientAuthErrorCodes).tokenRefreshRequired;
    // Errors that may be resolved before falling back to interaction (through iframe renewal)
    const isSilentlyResolvable = noInteractionRequired && refreshTokenRefreshRequired || refreshTokenError.errorCode === (0, _msalCommon.InteractionRequiredAuthErrorCodes).noTokensFound || refreshTokenError.errorCode === (0, _msalCommon.InteractionRequiredAuthErrorCodes).refreshTokenExpired;
    // Only these policies allow for an iframe renewal attempt
    const tryIframeRenewal = (0, _browserConstantsMjs.iFrameRenewalPolicies).includes(cacheLookupPolicy);
    return isSilentlyResolvable && tryIframeRenewal;
}

},{"../crypto/CryptoOps.mjs":"ftoka","@azure/msal-common":"rNWNa","../cache/BrowserCacheManager.mjs":"fnHfs","../utils/BrowserConstants.mjs":"izeV4","../utils/BrowserUtils.mjs":"7ahCa","../event/EventType.mjs":"3AsqD","../error/BrowserConfigurationAuthError.mjs":"bdb1W","../event/EventHandler.mjs":"3FsXm","../interaction_client/PopupClient.mjs":"6WLbz","../interaction_client/RedirectClient.mjs":"3azAB","../interaction_client/SilentIframeClient.mjs":"bDBog","../interaction_client/SilentRefreshClient.mjs":"kxwk1","../cache/TokenCache.mjs":"dbIr2","../interaction_client/NativeInteractionClient.mjs":"bOcEE","../broker/nativeBroker/NativeMessageHandler.mjs":"01Tz2","../error/NativeAuthError.mjs":"lxTHh","../interaction_client/SilentCacheClient.mjs":"6oTgG","../interaction_client/SilentAuthCodeClient.mjs":"dyTCV","../error/BrowserAuthError.mjs":"hI9Lm","../crypto/BrowserCrypto.mjs":"foGbR","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","../error/BrowserConfigurationAuthErrorCodes.mjs":"fxaOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ftoka":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CryptoOps", ()=>CryptoOps);
var _msalCommon = require("@azure/msal-common");
var _base64EncodeMjs = require("../encode/Base64Encode.mjs");
var _base64DecodeMjs = require("../encode/Base64Decode.mjs");
var _browserCryptoMjs = require("./BrowserCrypto.mjs");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _cryptoKeyStoreMjs = require("../cache/CryptoKeyStore.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * This class implements MSAL's crypto interface, which allows it to perform base64 encoding and decoding, generating cryptographically random GUIDs and
 * implementing Proof Key for Code Exchange specs for the OAuth Authorization Code Flow using PKCE (rfc here: https://tools.ietf.org/html/rfc7636).
 */ class CryptoOps {
    constructor(logger, performanceClient){
        this.logger = logger;
        // Browser crypto needs to be validated first before any other classes can be set.
        (0, _browserCryptoMjs.validateCryptoAvailable)(logger);
        this.cache = new (0, _cryptoKeyStoreMjs.CryptoKeyStore)(this.logger);
        this.performanceClient = performanceClient;
    }
    /**
     * Creates a new random GUID - used to populate state and nonce.
     * @returns string (GUID)
     */ createNewGuid() {
        return (0, _browserCryptoMjs.createNewGuid)();
    }
    /**
     * Encodes input string to base64.
     * @param input
     */ base64Encode(input) {
        return (0, _base64EncodeMjs.base64Encode)(input);
    }
    /**
     * Decodes input string from base64.
     * @param input
     */ base64Decode(input) {
        return (0, _base64DecodeMjs.base64Decode)(input);
    }
    /**
     * Generates a keypair, stores it and returns a thumbprint
     * @param request
     */ async getPublicKeyThumbprint(request) {
        const publicKeyThumbMeasurement = this.performanceClient?.startMeasurement((0, _msalCommon.PerformanceEvents).CryptoOptsGetPublicKeyThumbprint, request.correlationId);
        // Generate Keypair
        const keyPair = await (0, _browserCryptoMjs.generateKeyPair)(CryptoOps.EXTRACTABLE, CryptoOps.POP_KEY_USAGES);
        // Generate Thumbprint for Public Key
        const publicKeyJwk = await (0, _browserCryptoMjs.exportJwk)(keyPair.publicKey);
        const pubKeyThumprintObj = {
            e: publicKeyJwk.e,
            kty: publicKeyJwk.kty,
            n: publicKeyJwk.n
        };
        const publicJwkString = getSortedObjectString(pubKeyThumprintObj);
        const publicJwkHash = await this.hashString(publicJwkString);
        // Generate Thumbprint for Private Key
        const privateKeyJwk = await (0, _browserCryptoMjs.exportJwk)(keyPair.privateKey);
        // Re-import private key to make it unextractable
        const unextractablePrivateKey = await (0, _browserCryptoMjs.importJwk)(privateKeyJwk, false, [
            "sign"
        ]);
        // Store Keypair data in keystore
        await this.cache.asymmetricKeys.setItem(publicJwkHash, {
            privateKey: unextractablePrivateKey,
            publicKey: keyPair.publicKey,
            requestMethod: request.resourceRequestMethod,
            requestUri: request.resourceRequestUri
        });
        if (publicKeyThumbMeasurement) publicKeyThumbMeasurement.end({
            success: true
        });
        return publicJwkHash;
    }
    /**
     * Removes cryptographic keypair from key store matching the keyId passed in
     * @param kid
     */ async removeTokenBindingKey(kid) {
        await this.cache.asymmetricKeys.removeItem(kid);
        const keyFound = await this.cache.asymmetricKeys.containsKey(kid);
        return !keyFound;
    }
    /**
     * Removes all cryptographic keys from IndexedDB storage
     */ async clearKeystore() {
        return this.cache.clear();
    }
    /**
     * Signs the given object as a jwt payload with private key retrieved by given kid.
     * @param payload
     * @param kid
     */ async signJwt(payload, kid, shrOptions, correlationId) {
        const signJwtMeasurement = this.performanceClient?.startMeasurement((0, _msalCommon.PerformanceEvents).CryptoOptsSignJwt, correlationId);
        const cachedKeyPair = await this.cache.asymmetricKeys.getItem(kid);
        if (!cachedKeyPair) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.cryptoKeyNotFound));
        // Get public key as JWK
        const publicKeyJwk = await (0, _browserCryptoMjs.exportJwk)(cachedKeyPair.publicKey);
        const publicKeyJwkString = getSortedObjectString(publicKeyJwk);
        // Base64URL encode public key thumbprint with keyId only: BASE64URL({ kid: "FULL_PUBLIC_KEY_HASH" })
        const encodedKeyIdThumbprint = (0, _base64EncodeMjs.urlEncode)(JSON.stringify({
            kid: kid
        }));
        // Generate header
        const shrHeader = (0, _msalCommon.JoseHeader).getShrHeaderString({
            ...shrOptions?.header,
            alg: publicKeyJwk.alg,
            kid: encodedKeyIdThumbprint
        });
        const encodedShrHeader = (0, _base64EncodeMjs.urlEncode)(shrHeader);
        // Generate payload
        payload.cnf = {
            jwk: JSON.parse(publicKeyJwkString)
        };
        const encodedPayload = (0, _base64EncodeMjs.urlEncode)(JSON.stringify(payload));
        // Form token string
        const tokenString = `${encodedShrHeader}.${encodedPayload}`;
        // Sign token
        const encoder = new TextEncoder();
        const tokenBuffer = encoder.encode(tokenString);
        const signatureBuffer = await (0, _browserCryptoMjs.sign)(cachedKeyPair.privateKey, tokenBuffer);
        const encodedSignature = (0, _base64EncodeMjs.urlEncodeArr)(new Uint8Array(signatureBuffer));
        const signedJwt = `${tokenString}.${encodedSignature}`;
        if (signJwtMeasurement) signJwtMeasurement.end({
            success: true
        });
        return signedJwt;
    }
    /**
     * Returns the SHA-256 hash of an input string
     * @param plainText
     */ async hashString(plainText) {
        const hashBuffer = await (0, _browserCryptoMjs.sha256Digest)(plainText);
        const hashBytes = new Uint8Array(hashBuffer);
        return (0, _base64EncodeMjs.urlEncodeArr)(hashBytes);
    }
}
CryptoOps.POP_KEY_USAGES = [
    "sign",
    "verify"
];
CryptoOps.EXTRACTABLE = true;
function getSortedObjectString(obj) {
    return JSON.stringify(obj, Object.keys(obj).sort());
}

},{"@azure/msal-common":"rNWNa","../encode/Base64Encode.mjs":"9M5y6","../encode/Base64Decode.mjs":"12oz3","./BrowserCrypto.mjs":"foGbR","../error/BrowserAuthError.mjs":"hI9Lm","../cache/CryptoKeyStore.mjs":"bH5tC","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9M5y6":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "base64Encode", ()=>base64Encode);
parcelHelpers.export(exports, "urlEncode", ()=>urlEncode);
parcelHelpers.export(exports, "urlEncodeArr", ()=>urlEncodeArr);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Class which exposes APIs to encode plaintext to base64 encoded string. See here for implementation details:
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
 */ /**
 * Returns URL Safe b64 encoded string from a plaintext string.
 * @param input
 */ function urlEncode(input) {
    return encodeURIComponent(base64Encode(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"));
}
/**
 * Returns URL Safe b64 encoded string from an int8Array.
 * @param inputArr
 */ function urlEncodeArr(inputArr) {
    return base64EncArr(inputArr).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
/**
 * Returns b64 encoded string from plaintext string.
 * @param input
 */ function base64Encode(input) {
    return base64EncArr(new TextEncoder().encode(input));
}
/**
 * Base64 encode byte array
 * @param aBytes
 */ function base64EncArr(aBytes) {
    const binString = Array.from(aBytes, (x)=>String.fromCodePoint(x)).join("");
    return btoa(binString);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"12oz3":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "base64Decode", ()=>base64Decode);
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Class which exposes APIs to decode base64 strings to plaintext. See here for implementation details:
 * https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
 */ /**
 * Returns a URL-safe plaintext decoded string from b64 encoded input.
 * @param input
 */ function base64Decode(input) {
    return new TextDecoder().decode(base64DecToArr(input));
}
/**
 * Decodes base64 into Uint8Array
 * @param base64String
 */ function base64DecToArr(base64String) {
    let encodedString = base64String.replace(/-/g, "+").replace(/_/g, "/");
    switch(encodedString.length % 4){
        case 0:
            break;
        case 2:
            encodedString += "==";
            break;
        case 3:
            encodedString += "=";
            break;
        default:
            throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.invalidBase64String));
    }
    const binString = atob(encodedString);
    return Uint8Array.from(binString, (m)=>m.codePointAt(0) || 0);
}

},{"../error/BrowserAuthError.mjs":"hI9Lm","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bH5tC":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CryptoKeyStore", ()=>CryptoKeyStore);
parcelHelpers.export(exports, "CryptoKeyStoreNames", ()=>CryptoKeyStoreNames);
var _asyncMemoryStorageMjs = require("./AsyncMemoryStorage.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const CryptoKeyStoreNames = {
    asymmetricKeys: "asymmetricKeys",
    symmetricKeys: "symmetricKeys"
};
/**
 * MSAL CryptoKeyStore DB Version 2
 */ class CryptoKeyStore {
    constructor(logger){
        this.logger = logger;
        this.asymmetricKeys = new (0, _asyncMemoryStorageMjs.AsyncMemoryStorage)(this.logger, CryptoKeyStoreNames.asymmetricKeys);
        this.symmetricKeys = new (0, _asyncMemoryStorageMjs.AsyncMemoryStorage)(this.logger, CryptoKeyStoreNames.symmetricKeys);
    }
    async clear() {
        // Delete in-memory keystores
        this.asymmetricKeys.clearInMemory();
        this.symmetricKeys.clearInMemory();
        /**
         * There is only one database, so calling clearPersistent on asymmetric keystore takes care of
         * every persistent keystore
         */ try {
            await this.asymmetricKeys.clearPersistent();
            return true;
        } catch (e) {
            if (e instanceof Error) this.logger.error(`Clearing keystore failed with error: ${e.message}`);
            else this.logger.error("Clearing keystore failed with unknown error");
            return false;
        }
    }
}

},{"./AsyncMemoryStorage.mjs":"hr0Bb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hr0Bb":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncMemoryStorage", ()=>AsyncMemoryStorage);
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _databaseStorageMjs = require("./DatabaseStorage.mjs");
var _memoryStorageMjs = require("./MemoryStorage.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * This class allows MSAL to store artifacts asynchronously using the DatabaseStorage IndexedDB wrapper,
 * backed up with the more volatile MemoryStorage object for cases in which IndexedDB may be unavailable.
 */ class AsyncMemoryStorage {
    constructor(logger, storeName){
        this.inMemoryCache = new (0, _memoryStorageMjs.MemoryStorage)();
        this.indexedDBCache = new (0, _databaseStorageMjs.DatabaseStorage)();
        this.logger = logger;
        this.storeName = storeName;
    }
    handleDatabaseAccessError(error) {
        if (error instanceof (0, _browserAuthErrorMjs.BrowserAuthError) && error.errorCode === (0, _browserAuthErrorCodesMjs.databaseUnavailable)) this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
        else throw error;
    }
    /**
     * Get the item matching the given key. Tries in-memory cache first, then in the asynchronous
     * storage object if item isn't found in-memory.
     * @param key
     */ async getItem(key) {
        const item = this.inMemoryCache.getItem(key);
        if (!item) try {
            this.logger.verbose("Queried item not found in in-memory cache, now querying persistent storage.");
            return await this.indexedDBCache.getItem(key);
        } catch (e) {
            this.handleDatabaseAccessError(e);
        }
        return item;
    }
    /**
     * Sets the item in the in-memory cache and then tries to set it in the asynchronous
     * storage object with the given key.
     * @param key
     * @param value
     */ async setItem(key, value) {
        this.inMemoryCache.setItem(key, value);
        try {
            await this.indexedDBCache.setItem(key, value);
        } catch (e) {
            this.handleDatabaseAccessError(e);
        }
    }
    /**
     * Removes the item matching the key from the in-memory cache, then tries to remove it from the asynchronous storage object.
     * @param key
     */ async removeItem(key) {
        this.inMemoryCache.removeItem(key);
        try {
            await this.indexedDBCache.removeItem(key);
        } catch (e) {
            this.handleDatabaseAccessError(e);
        }
    }
    /**
     * Get all the keys from the in-memory cache as an iterable array of strings. If no keys are found, query the keys in the
     * asynchronous storage object.
     */ async getKeys() {
        const cacheKeys = this.inMemoryCache.getKeys();
        if (cacheKeys.length === 0) try {
            this.logger.verbose("In-memory cache is empty, now querying persistent storage.");
            return await this.indexedDBCache.getKeys();
        } catch (e) {
            this.handleDatabaseAccessError(e);
        }
        return cacheKeys;
    }
    /**
     * Returns true or false if the given key is present in the cache.
     * @param key
     */ async containsKey(key) {
        const containsKey = this.inMemoryCache.containsKey(key);
        if (!containsKey) try {
            this.logger.verbose("Key not found in in-memory cache, now querying persistent storage.");
            return await this.indexedDBCache.containsKey(key);
        } catch (e) {
            this.handleDatabaseAccessError(e);
        }
        return containsKey;
    }
    /**
     * Clears in-memory Map
     */ clearInMemory() {
        // InMemory cache is a Map instance, clear is straightforward
        this.logger.verbose(`Deleting in-memory keystore ${this.storeName}`);
        this.inMemoryCache.clear();
        this.logger.verbose(`In-memory keystore ${this.storeName} deleted`);
    }
    /**
     * Tries to delete the IndexedDB database
     * @returns
     */ async clearPersistent() {
        try {
            this.logger.verbose("Deleting persistent keystore");
            const dbDeleted = await this.indexedDBCache.deleteDatabase();
            if (dbDeleted) this.logger.verbose("Persistent keystore deleted");
            return dbDeleted;
        } catch (e) {
            this.handleDatabaseAccessError(e);
            return false;
        }
    }
}

},{"../error/BrowserAuthError.mjs":"hI9Lm","./DatabaseStorage.mjs":"fNFHJ","./MemoryStorage.mjs":"eTMRb","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNFHJ":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DatabaseStorage", ()=>DatabaseStorage);
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Storage wrapper for IndexedDB storage in browsers: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
 */ class DatabaseStorage {
    constructor(){
        this.dbName = (0, _browserConstantsMjs.DB_NAME);
        this.version = (0, _browserConstantsMjs.DB_VERSION);
        this.tableName = (0, _browserConstantsMjs.DB_TABLE_NAME);
        this.dbOpen = false;
    }
    /**
     * Opens IndexedDB instance.
     */ async open() {
        return new Promise((resolve, reject)=>{
            const openDB = window.indexedDB.open(this.dbName, this.version);
            openDB.addEventListener("upgradeneeded", (e)=>{
                const event = e;
                event.target.result.createObjectStore(this.tableName);
            });
            openDB.addEventListener("success", (e)=>{
                const event = e;
                this.db = event.target.result;
                this.dbOpen = true;
                resolve();
            });
            openDB.addEventListener("error", ()=>reject((0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.databaseUnavailable))));
        });
    }
    /**
     * Closes the connection to IndexedDB database when all pending transactions
     * complete.
     */ closeConnection() {
        const db = this.db;
        if (db && this.dbOpen) {
            db.close();
            this.dbOpen = false;
        }
    }
    /**
     * Opens database if it's not already open
     */ async validateDbIsOpen() {
        if (!this.dbOpen) return this.open();
    }
    /**
     * Retrieves item from IndexedDB instance.
     * @param key
     */ async getItem(key) {
        await this.validateDbIsOpen();
        return new Promise((resolve, reject)=>{
            // TODO: Add timeouts?
            if (!this.db) return reject((0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.databaseNotOpen)));
            const transaction = this.db.transaction([
                this.tableName
            ], "readonly");
            const objectStore = transaction.objectStore(this.tableName);
            const dbGet = objectStore.get(key);
            dbGet.addEventListener("success", (e)=>{
                const event = e;
                this.closeConnection();
                resolve(event.target.result);
            });
            dbGet.addEventListener("error", (e)=>{
                this.closeConnection();
                reject(e);
            });
        });
    }
    /**
     * Adds item to IndexedDB under given key
     * @param key
     * @param payload
     */ async setItem(key, payload) {
        await this.validateDbIsOpen();
        return new Promise((resolve, reject)=>{
            // TODO: Add timeouts?
            if (!this.db) return reject((0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.databaseNotOpen)));
            const transaction = this.db.transaction([
                this.tableName
            ], "readwrite");
            const objectStore = transaction.objectStore(this.tableName);
            const dbPut = objectStore.put(payload, key);
            dbPut.addEventListener("success", ()=>{
                this.closeConnection();
                resolve();
            });
            dbPut.addEventListener("error", (e)=>{
                this.closeConnection();
                reject(e);
            });
        });
    }
    /**
     * Removes item from IndexedDB under given key
     * @param key
     */ async removeItem(key) {
        await this.validateDbIsOpen();
        return new Promise((resolve, reject)=>{
            if (!this.db) return reject((0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.databaseNotOpen)));
            const transaction = this.db.transaction([
                this.tableName
            ], "readwrite");
            const objectStore = transaction.objectStore(this.tableName);
            const dbDelete = objectStore.delete(key);
            dbDelete.addEventListener("success", ()=>{
                this.closeConnection();
                resolve();
            });
            dbDelete.addEventListener("error", (e)=>{
                this.closeConnection();
                reject(e);
            });
        });
    }
    /**
     * Get all the keys from the storage object as an iterable array of strings.
     */ async getKeys() {
        await this.validateDbIsOpen();
        return new Promise((resolve, reject)=>{
            if (!this.db) return reject((0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.databaseNotOpen)));
            const transaction = this.db.transaction([
                this.tableName
            ], "readonly");
            const objectStore = transaction.objectStore(this.tableName);
            const dbGetKeys = objectStore.getAllKeys();
            dbGetKeys.addEventListener("success", (e)=>{
                const event = e;
                this.closeConnection();
                resolve(event.target.result);
            });
            dbGetKeys.addEventListener("error", (e)=>{
                this.closeConnection();
                reject(e);
            });
        });
    }
    /**
     *
     * Checks whether there is an object under the search key in the object store
     */ async containsKey(key) {
        await this.validateDbIsOpen();
        return new Promise((resolve, reject)=>{
            if (!this.db) return reject((0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.databaseNotOpen)));
            const transaction = this.db.transaction([
                this.tableName
            ], "readonly");
            const objectStore = transaction.objectStore(this.tableName);
            const dbContainsKey = objectStore.count(key);
            dbContainsKey.addEventListener("success", (e)=>{
                const event = e;
                this.closeConnection();
                resolve(event.target.result === 1);
            });
            dbContainsKey.addEventListener("error", (e)=>{
                this.closeConnection();
                reject(e);
            });
        });
    }
    /**
     * Deletes the MSAL database. The database is deleted rather than cleared to make it possible
     * for client applications to downgrade to a previous MSAL version without worrying about forward compatibility issues
     * with IndexedDB database versions.
     */ async deleteDatabase() {
        // Check if database being deleted exists
        if (this.db && this.dbOpen) this.closeConnection();
        return new Promise((resolve, reject)=>{
            const deleteDbRequest = window.indexedDB.deleteDatabase((0, _browserConstantsMjs.DB_NAME));
            deleteDbRequest.addEventListener("success", ()=>resolve(true));
            deleteDbRequest.addEventListener("blocked", ()=>resolve(true));
            deleteDbRequest.addEventListener("error", ()=>reject(false));
        });
    }
}

},{"../error/BrowserAuthError.mjs":"hI9Lm","../utils/BrowserConstants.mjs":"izeV4","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTMRb":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MemoryStorage", ()=>MemoryStorage);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class MemoryStorage {
    constructor(){
        this.cache = new Map();
    }
    getItem(key) {
        return this.cache.get(key) || null;
    }
    setItem(key, value) {
        this.cache.set(key, value);
    }
    removeItem(key) {
        this.cache.delete(key);
    }
    getKeys() {
        const cacheKeys = [];
        this.cache.forEach((value, key)=>{
            cacheKeys.push(key);
        });
        return cacheKeys;
    }
    containsKey(key) {
        return this.cache.has(key);
    }
    clear() {
        this.cache.clear();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnHfs":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BrowserCacheManager", ()=>BrowserCacheManager);
parcelHelpers.export(exports, "DEFAULT_BROWSER_CACHE_MANAGER", ()=>DEFAULT_BROWSER_CACHE_MANAGER);
var _msalCommon = require("@azure/msal-common");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _browserStorageMjs = require("./BrowserStorage.mjs");
var _memoryStorageMjs = require("./MemoryStorage.mjs");
var _browserProtocolUtilsMjs = require("../utils/BrowserProtocolUtils.mjs");
var _base64DecodeMjs = require("../encode/Base64Decode.mjs");
var _base64EncodeMjs = require("../encode/Base64Encode.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * This class implements the cache storage interface for MSAL through browser local or session storage.
 * Cookies are only used if storeAuthStateInCookie is true, and are only used for
 * parameters such as state and nonce, generally.
 */ class BrowserCacheManager extends (0, _msalCommon.CacheManager) {
    constructor(clientId, cacheConfig, cryptoImpl, logger, staticAuthorityOptions){
        super(clientId, cryptoImpl, logger, staticAuthorityOptions);
        // Cookie life calculation (hours * minutes * seconds * ms)
        this.COOKIE_LIFE_MULTIPLIER = 86400000;
        this.cacheConfig = cacheConfig;
        this.logger = logger;
        this.internalStorage = new (0, _memoryStorageMjs.MemoryStorage)();
        this.browserStorage = this.setupBrowserStorage(this.cacheConfig.cacheLocation);
        this.temporaryCacheStorage = this.setupTemporaryCacheStorage(this.cacheConfig.temporaryCacheLocation, this.cacheConfig.cacheLocation);
        // Migrate cache entries from older versions of MSAL.
        if (cacheConfig.cacheMigrationEnabled) {
            this.migrateCacheEntries();
            this.createKeyMaps();
        }
    }
    /**
     * Returns a window storage class implementing the IWindowStorage interface that corresponds to the configured cacheLocation.
     * @param cacheLocation
     */ setupBrowserStorage(cacheLocation) {
        switch(cacheLocation){
            case (0, _browserConstantsMjs.BrowserCacheLocation).LocalStorage:
            case (0, _browserConstantsMjs.BrowserCacheLocation).SessionStorage:
                try {
                    return new (0, _browserStorageMjs.BrowserStorage)(cacheLocation);
                } catch (e) {
                    this.logger.verbose(e);
                    break;
                }
        }
        this.cacheConfig.cacheLocation = (0, _browserConstantsMjs.BrowserCacheLocation).MemoryStorage;
        return new (0, _memoryStorageMjs.MemoryStorage)();
    }
    /**
     * Returns a window storage class implementing the IWindowStorage interface that corresponds to the configured temporaryCacheLocation.
     * @param temporaryCacheLocation
     * @param cacheLocation
     */ setupTemporaryCacheStorage(temporaryCacheLocation, cacheLocation) {
        switch(cacheLocation){
            case (0, _browserConstantsMjs.BrowserCacheLocation).LocalStorage:
            case (0, _browserConstantsMjs.BrowserCacheLocation).SessionStorage:
                try {
                    // Temporary cache items will always be stored in session storage to mitigate problems caused by multiple tabs
                    return new (0, _browserStorageMjs.BrowserStorage)(temporaryCacheLocation || (0, _browserConstantsMjs.BrowserCacheLocation).SessionStorage);
                } catch (e) {
                    this.logger.verbose(e);
                    return this.internalStorage;
                }
            case (0, _browserConstantsMjs.BrowserCacheLocation).MemoryStorage:
            default:
                return this.internalStorage;
        }
    }
    /**
     * Migrate all old cache entries to new schema. No rollback supported.
     * @param storeAuthStateInCookie
     */ migrateCacheEntries() {
        const idTokenKey = `${(0, _msalCommon.Constants).CACHE_PREFIX}.${(0, _msalCommon.PersistentCacheKeys).ID_TOKEN}`;
        const clientInfoKey = `${(0, _msalCommon.Constants).CACHE_PREFIX}.${(0, _msalCommon.PersistentCacheKeys).CLIENT_INFO}`;
        const errorKey = `${(0, _msalCommon.Constants).CACHE_PREFIX}.${(0, _msalCommon.PersistentCacheKeys).ERROR}`;
        const errorDescKey = `${(0, _msalCommon.Constants).CACHE_PREFIX}.${(0, _msalCommon.PersistentCacheKeys).ERROR_DESC}`;
        const idTokenValue = this.browserStorage.getItem(idTokenKey);
        const clientInfoValue = this.browserStorage.getItem(clientInfoKey);
        const errorValue = this.browserStorage.getItem(errorKey);
        const errorDescValue = this.browserStorage.getItem(errorDescKey);
        const values = [
            idTokenValue,
            clientInfoValue,
            errorValue,
            errorDescValue
        ];
        const keysToMigrate = [
            (0, _msalCommon.PersistentCacheKeys).ID_TOKEN,
            (0, _msalCommon.PersistentCacheKeys).CLIENT_INFO,
            (0, _msalCommon.PersistentCacheKeys).ERROR,
            (0, _msalCommon.PersistentCacheKeys).ERROR_DESC
        ];
        keysToMigrate.forEach((cacheKey, index)=>this.migrateCacheEntry(cacheKey, values[index]));
    }
    /**
     * Utility function to help with migration.
     * @param newKey
     * @param value
     * @param storeAuthStateInCookie
     */ migrateCacheEntry(newKey, value) {
        if (value) this.setTemporaryCache(newKey, value, true);
    }
    /**
     * Searches all cache entries for MSAL accounts and creates the account key map
     * This is used to migrate users from older versions of MSAL which did not create the map.
     * @returns
     */ createKeyMaps() {
        this.logger.trace("BrowserCacheManager - createKeyMaps called.");
        const accountKeys = this.getItem((0, _browserConstantsMjs.StaticCacheKeys).ACCOUNT_KEYS);
        const tokenKeys = this.getItem(`${(0, _browserConstantsMjs.StaticCacheKeys).TOKEN_KEYS}.${this.clientId}`);
        if (accountKeys && tokenKeys) {
            this.logger.verbose("BrowserCacheManager:createKeyMaps - account and token key maps already exist, skipping migration.");
            // Key maps already exist, no need to iterate through cache
            return;
        }
        const allKeys = this.browserStorage.getKeys();
        allKeys.forEach((key)=>{
            if (this.isCredentialKey(key)) {
                // Get item, parse, validate and write key to map
                const value = this.getItem(key);
                if (value) {
                    const credObj = this.validateAndParseJson(value);
                    if (credObj && credObj.hasOwnProperty("credentialType")) switch(credObj["credentialType"]){
                        case (0, _msalCommon.CredentialType).ID_TOKEN:
                            if ((0, _msalCommon.CacheHelpers).isIdTokenEntity(credObj)) {
                                this.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map");
                                this.logger.tracePii(`BrowserCacheManager:createKeyMaps - idToken with key: ${key} found, saving key to token key map`);
                                const idTokenEntity = credObj;
                                const newKey = this.updateCredentialCacheKey(key, idTokenEntity);
                                this.addTokenKey(newKey, (0, _msalCommon.CredentialType).ID_TOKEN);
                                return;
                            } else {
                                this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping.");
                                this.logger.tracePii(`BrowserCacheManager:createKeyMaps - failed idToken validation on key: ${key}`);
                            }
                            break;
                        case (0, _msalCommon.CredentialType).ACCESS_TOKEN:
                        case (0, _msalCommon.CredentialType).ACCESS_TOKEN_WITH_AUTH_SCHEME:
                            if ((0, _msalCommon.CacheHelpers).isAccessTokenEntity(credObj)) {
                                this.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map");
                                this.logger.tracePii(`BrowserCacheManager:createKeyMaps - accessToken with key: ${key} found, saving key to token key map`);
                                const accessTokenEntity = credObj;
                                const newKey = this.updateCredentialCacheKey(key, accessTokenEntity);
                                this.addTokenKey(newKey, (0, _msalCommon.CredentialType).ACCESS_TOKEN);
                                return;
                            } else {
                                this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping.");
                                this.logger.tracePii(`BrowserCacheManager:createKeyMaps - failed accessToken validation on key: ${key}`);
                            }
                            break;
                        case (0, _msalCommon.CredentialType).REFRESH_TOKEN:
                            if ((0, _msalCommon.CacheHelpers).isRefreshTokenEntity(credObj)) {
                                this.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map");
                                this.logger.tracePii(`BrowserCacheManager:createKeyMaps - refreshToken with key: ${key} found, saving key to token key map`);
                                const refreshTokenEntity = credObj;
                                const newKey = this.updateCredentialCacheKey(key, refreshTokenEntity);
                                this.addTokenKey(newKey, (0, _msalCommon.CredentialType).REFRESH_TOKEN);
                                return;
                            } else {
                                this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching refreshToken schema with value containing refreshToken credentialType field but value failed RefreshTokenEntity validation, skipping.");
                                this.logger.tracePii(`BrowserCacheManager:createKeyMaps - failed refreshToken validation on key: ${key}`);
                            }
                            break;
                    }
                }
            }
            if (this.isAccountKey(key)) {
                const value = this.getItem(key);
                if (value) {
                    const accountObj = this.validateAndParseJson(value);
                    if (accountObj && (0, _msalCommon.AccountEntity).isAccountEntity(accountObj)) {
                        this.logger.trace("BrowserCacheManager:createKeyMaps - account found, saving key to account key map");
                        this.logger.tracePii(`BrowserCacheManager:createKeyMaps - account with key: ${key} found, saving key to account key map`);
                        this.addAccountKeyToMap(key);
                    }
                }
            }
        });
    }
    /**
     * Parses passed value as JSON object, JSON.parse() will throw an error.
     * @param input
     */ validateAndParseJson(jsonValue) {
        try {
            const parsedJson = JSON.parse(jsonValue);
            /**
             * There are edge cases in which JSON.parse will successfully parse a non-valid JSON object
             * (e.g. JSON.parse will parse an escaped string into an unescaped string), so adding a type check
             * of the parsed value is necessary in order to be certain that the string represents a valid JSON object.
             *
             */ return parsedJson && typeof parsedJson === "object" ? parsedJson : null;
        } catch (error) {
            return null;
        }
    }
    /**
     * fetches the entry from the browser storage based off the key
     * @param key
     */ getItem(key) {
        return this.browserStorage.getItem(key);
    }
    /**
     * sets the entry in the browser storage
     * @param key
     * @param value
     */ setItem(key, value) {
        this.browserStorage.setItem(key, value);
    }
    /**
     * fetch the account entity from the platform cache
     * @param accountKey
     */ getAccount(accountKey, logger) {
        this.logger.trace("BrowserCacheManager.getAccount called");
        const accountEntity = this.getCachedAccountEntity(accountKey);
        return this.updateOutdatedCachedAccount(accountKey, accountEntity, logger);
    }
    /**
     * Reads account from cache, deserializes it into an account entity and returns it.
     * If account is not found from the key, returns null and removes key from map.
     * @param accountKey
     * @returns
     */ getCachedAccountEntity(accountKey) {
        const serializedAccount = this.getItem(accountKey);
        if (!serializedAccount) {
            this.removeAccountKeyFromMap(accountKey);
            return null;
        }
        const parsedAccount = this.validateAndParseJson(serializedAccount);
        if (!parsedAccount || !(0, _msalCommon.AccountEntity).isAccountEntity(parsedAccount)) {
            this.removeAccountKeyFromMap(accountKey);
            return null;
        }
        return (0, _msalCommon.CacheManager).toObject(new (0, _msalCommon.AccountEntity)(), parsedAccount);
    }
    /**
     * set account entity in the platform cache
     * @param account
     */ setAccount(account) {
        this.logger.trace("BrowserCacheManager.setAccount called");
        const key = account.generateAccountKey();
        this.setItem(key, JSON.stringify(account));
        this.addAccountKeyToMap(key);
    }
    /**
     * Returns the array of account keys currently cached
     * @returns
     */ getAccountKeys() {
        this.logger.trace("BrowserCacheManager.getAccountKeys called");
        const accountKeys = this.getItem((0, _browserConstantsMjs.StaticCacheKeys).ACCOUNT_KEYS);
        if (accountKeys) return JSON.parse(accountKeys);
        this.logger.verbose("BrowserCacheManager.getAccountKeys - No account keys found");
        return [];
    }
    /**
     * Add a new account to the key map
     * @param key
     */ addAccountKeyToMap(key) {
        this.logger.trace("BrowserCacheManager.addAccountKeyToMap called");
        this.logger.tracePii(`BrowserCacheManager.addAccountKeyToMap called with key: ${key}`);
        const accountKeys = this.getAccountKeys();
        if (accountKeys.indexOf(key) === -1) {
            // Only add key if it does not already exist in the map
            accountKeys.push(key);
            this.setItem((0, _browserConstantsMjs.StaticCacheKeys).ACCOUNT_KEYS, JSON.stringify(accountKeys));
            this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added");
        } else this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map");
    }
    /**
     * Remove an account from the key map
     * @param key
     */ removeAccountKeyFromMap(key) {
        this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called");
        this.logger.tracePii(`BrowserCacheManager.removeAccountKeyFromMap called with key: ${key}`);
        const accountKeys = this.getAccountKeys();
        const removalIndex = accountKeys.indexOf(key);
        if (removalIndex > -1) {
            accountKeys.splice(removalIndex, 1);
            this.setItem((0, _browserConstantsMjs.StaticCacheKeys).ACCOUNT_KEYS, JSON.stringify(accountKeys));
            this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed");
        } else this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map");
    }
    /**
     * Extends inherited removeAccount function to include removal of the account key from the map
     * @param key
     */ async removeAccount(key) {
        super.removeAccount(key);
        this.removeAccountKeyFromMap(key);
    }
    /**
     * Remove account entity from the platform cache if it's outdated
     * @param accountKey
     */ removeOutdatedAccount(accountKey) {
        this.removeItem(accountKey);
        this.removeAccountKeyFromMap(accountKey);
    }
    /**
     * Removes given idToken from the cache and from the key map
     * @param key
     */ removeIdToken(key) {
        super.removeIdToken(key);
        this.removeTokenKey(key, (0, _msalCommon.CredentialType).ID_TOKEN);
    }
    /**
     * Removes given accessToken from the cache and from the key map
     * @param key
     */ async removeAccessToken(key) {
        super.removeAccessToken(key);
        this.removeTokenKey(key, (0, _msalCommon.CredentialType).ACCESS_TOKEN);
    }
    /**
     * Removes given refreshToken from the cache and from the key map
     * @param key
     */ removeRefreshToken(key) {
        super.removeRefreshToken(key);
        this.removeTokenKey(key, (0, _msalCommon.CredentialType).REFRESH_TOKEN);
    }
    /**
     * Gets the keys for the cached tokens associated with this clientId
     * @returns
     */ getTokenKeys() {
        this.logger.trace("BrowserCacheManager.getTokenKeys called");
        const item = this.getItem(`${(0, _browserConstantsMjs.StaticCacheKeys).TOKEN_KEYS}.${this.clientId}`);
        if (item) {
            const tokenKeys = this.validateAndParseJson(item);
            if (tokenKeys && tokenKeys.hasOwnProperty("idToken") && tokenKeys.hasOwnProperty("accessToken") && tokenKeys.hasOwnProperty("refreshToken")) return tokenKeys;
            else this.logger.error("BrowserCacheManager.getTokenKeys - Token keys found but in an unknown format. Returning empty key map.");
        } else this.logger.verbose("BrowserCacheManager.getTokenKeys - No token keys found");
        return {
            idToken: [],
            accessToken: [],
            refreshToken: []
        };
    }
    /**
     * Adds the given key to the token key map
     * @param key
     * @param type
     */ addTokenKey(key, type) {
        this.logger.trace("BrowserCacheManager addTokenKey called");
        const tokenKeys = this.getTokenKeys();
        switch(type){
            case (0, _msalCommon.CredentialType).ID_TOKEN:
                if (tokenKeys.idToken.indexOf(key) === -1) {
                    this.logger.info("BrowserCacheManager: addTokenKey - idToken added to map");
                    tokenKeys.idToken.push(key);
                }
                break;
            case (0, _msalCommon.CredentialType).ACCESS_TOKEN:
                if (tokenKeys.accessToken.indexOf(key) === -1) {
                    this.logger.info("BrowserCacheManager: addTokenKey - accessToken added to map");
                    tokenKeys.accessToken.push(key);
                }
                break;
            case (0, _msalCommon.CredentialType).REFRESH_TOKEN:
                if (tokenKeys.refreshToken.indexOf(key) === -1) {
                    this.logger.info("BrowserCacheManager: addTokenKey - refreshToken added to map");
                    tokenKeys.refreshToken.push(key);
                }
                break;
            default:
                this.logger.error(`BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: ${type}`);
                throw (0, _msalCommon.createClientAuthError)((0, _msalCommon.ClientAuthErrorCodes).unexpectedCredentialType);
        }
        this.setItem(`${(0, _browserConstantsMjs.StaticCacheKeys).TOKEN_KEYS}.${this.clientId}`, JSON.stringify(tokenKeys));
    }
    /**
     * Removes the given key from the token key map
     * @param key
     * @param type
     */ removeTokenKey(key, type) {
        this.logger.trace("BrowserCacheManager removeTokenKey called");
        const tokenKeys = this.getTokenKeys();
        switch(type){
            case (0, _msalCommon.CredentialType).ID_TOKEN:
                this.logger.infoPii(`BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: ${key} from map`);
                const idRemoval = tokenKeys.idToken.indexOf(key);
                if (idRemoval > -1) {
                    this.logger.info("BrowserCacheManager: removeTokenKey - idToken removed from map");
                    tokenKeys.idToken.splice(idRemoval, 1);
                } else this.logger.info("BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added.");
                break;
            case (0, _msalCommon.CredentialType).ACCESS_TOKEN:
                this.logger.infoPii(`BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: ${key} from map`);
                const accessRemoval = tokenKeys.accessToken.indexOf(key);
                if (accessRemoval > -1) {
                    this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map");
                    tokenKeys.accessToken.splice(accessRemoval, 1);
                } else this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
                break;
            case (0, _msalCommon.CredentialType).REFRESH_TOKEN:
                this.logger.infoPii(`BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: ${key} from map`);
                const refreshRemoval = tokenKeys.refreshToken.indexOf(key);
                if (refreshRemoval > -1) {
                    this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken removed from map");
                    tokenKeys.refreshToken.splice(refreshRemoval, 1);
                } else this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added.");
                break;
            default:
                this.logger.error(`BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: ${type}`);
                throw (0, _msalCommon.createClientAuthError)((0, _msalCommon.ClientAuthErrorCodes).unexpectedCredentialType);
        }
        this.setItem(`${(0, _browserConstantsMjs.StaticCacheKeys).TOKEN_KEYS}.${this.clientId}`, JSON.stringify(tokenKeys));
    }
    /**
     * generates idToken entity from a string
     * @param idTokenKey
     */ getIdTokenCredential(idTokenKey) {
        const value = this.getItem(idTokenKey);
        if (!value) {
            this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit");
            this.removeTokenKey(idTokenKey, (0, _msalCommon.CredentialType).ID_TOKEN);
            return null;
        }
        const parsedIdToken = this.validateAndParseJson(value);
        if (!parsedIdToken || !(0, _msalCommon.CacheHelpers).isIdTokenEntity(parsedIdToken)) {
            this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit");
            this.removeTokenKey(idTokenKey, (0, _msalCommon.CredentialType).ID_TOKEN);
            return null;
        }
        this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit");
        return parsedIdToken;
    }
    /**
     * set IdToken credential to the platform cache
     * @param idToken
     */ setIdTokenCredential(idToken) {
        this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
        const idTokenKey = (0, _msalCommon.CacheHelpers).generateCredentialKey(idToken);
        this.setItem(idTokenKey, JSON.stringify(idToken));
        this.addTokenKey(idTokenKey, (0, _msalCommon.CredentialType).ID_TOKEN);
    }
    /**
     * generates accessToken entity from a string
     * @param key
     */ getAccessTokenCredential(accessTokenKey) {
        const value = this.getItem(accessTokenKey);
        if (!value) {
            this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit");
            this.removeTokenKey(accessTokenKey, (0, _msalCommon.CredentialType).ACCESS_TOKEN);
            return null;
        }
        const parsedAccessToken = this.validateAndParseJson(value);
        if (!parsedAccessToken || !(0, _msalCommon.CacheHelpers).isAccessTokenEntity(parsedAccessToken)) {
            this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit");
            this.removeTokenKey(accessTokenKey, (0, _msalCommon.CredentialType).ACCESS_TOKEN);
            return null;
        }
        this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit");
        return parsedAccessToken;
    }
    /**
     * set accessToken credential to the platform cache
     * @param accessToken
     */ setAccessTokenCredential(accessToken) {
        this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
        const accessTokenKey = (0, _msalCommon.CacheHelpers).generateCredentialKey(accessToken);
        this.setItem(accessTokenKey, JSON.stringify(accessToken));
        this.addTokenKey(accessTokenKey, (0, _msalCommon.CredentialType).ACCESS_TOKEN);
    }
    /**
     * generates refreshToken entity from a string
     * @param refreshTokenKey
     */ getRefreshTokenCredential(refreshTokenKey) {
        const value = this.getItem(refreshTokenKey);
        if (!value) {
            this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit");
            this.removeTokenKey(refreshTokenKey, (0, _msalCommon.CredentialType).REFRESH_TOKEN);
            return null;
        }
        const parsedRefreshToken = this.validateAndParseJson(value);
        if (!parsedRefreshToken || !(0, _msalCommon.CacheHelpers).isRefreshTokenEntity(parsedRefreshToken)) {
            this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit");
            this.removeTokenKey(refreshTokenKey, (0, _msalCommon.CredentialType).REFRESH_TOKEN);
            return null;
        }
        this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit");
        return parsedRefreshToken;
    }
    /**
     * set refreshToken credential to the platform cache
     * @param refreshToken
     */ setRefreshTokenCredential(refreshToken) {
        this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
        const refreshTokenKey = (0, _msalCommon.CacheHelpers).generateCredentialKey(refreshToken);
        this.setItem(refreshTokenKey, JSON.stringify(refreshToken));
        this.addTokenKey(refreshTokenKey, (0, _msalCommon.CredentialType).REFRESH_TOKEN);
    }
    /**
     * fetch appMetadata entity from the platform cache
     * @param appMetadataKey
     */ getAppMetadata(appMetadataKey) {
        const value = this.getItem(appMetadataKey);
        if (!value) {
            this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit");
            return null;
        }
        const parsedMetadata = this.validateAndParseJson(value);
        if (!parsedMetadata || !(0, _msalCommon.CacheHelpers).isAppMetadataEntity(appMetadataKey, parsedMetadata)) {
            this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit");
            return null;
        }
        this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit");
        return parsedMetadata;
    }
    /**
     * set appMetadata entity to the platform cache
     * @param appMetadata
     */ setAppMetadata(appMetadata) {
        this.logger.trace("BrowserCacheManager.setAppMetadata called");
        const appMetadataKey = (0, _msalCommon.CacheHelpers).generateAppMetadataKey(appMetadata);
        this.setItem(appMetadataKey, JSON.stringify(appMetadata));
    }
    /**
     * fetch server telemetry entity from the platform cache
     * @param serverTelemetryKey
     */ getServerTelemetry(serverTelemetryKey) {
        const value = this.getItem(serverTelemetryKey);
        if (!value) {
            this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit");
            return null;
        }
        const parsedEntity = this.validateAndParseJson(value);
        if (!parsedEntity || !(0, _msalCommon.CacheHelpers).isServerTelemetryEntity(serverTelemetryKey, parsedEntity)) {
            this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit");
            return null;
        }
        this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit");
        return parsedEntity;
    }
    /**
     * set server telemetry entity to the platform cache
     * @param serverTelemetryKey
     * @param serverTelemetry
     */ setServerTelemetry(serverTelemetryKey, serverTelemetry) {
        this.logger.trace("BrowserCacheManager.setServerTelemetry called");
        this.setItem(serverTelemetryKey, JSON.stringify(serverTelemetry));
    }
    /**
     *
     */ getAuthorityMetadata(key) {
        const value = this.internalStorage.getItem(key);
        if (!value) {
            this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit");
            return null;
        }
        const parsedMetadata = this.validateAndParseJson(value);
        if (parsedMetadata && (0, _msalCommon.CacheHelpers).isAuthorityMetadataEntity(key, parsedMetadata)) {
            this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit");
            return parsedMetadata;
        }
        return null;
    }
    /**
     *
     */ getAuthorityMetadataKeys() {
        const allKeys = this.internalStorage.getKeys();
        return allKeys.filter((key)=>{
            return this.isAuthorityMetadata(key);
        });
    }
    /**
     * Sets wrapper metadata in memory
     * @param wrapperSKU
     * @param wrapperVersion
     */ setWrapperMetadata(wrapperSKU, wrapperVersion) {
        this.internalStorage.setItem((0, _browserConstantsMjs.InMemoryCacheKeys).WRAPPER_SKU, wrapperSKU);
        this.internalStorage.setItem((0, _browserConstantsMjs.InMemoryCacheKeys).WRAPPER_VER, wrapperVersion);
    }
    /**
     * Returns wrapper metadata from in-memory storage
     */ getWrapperMetadata() {
        const sku = this.internalStorage.getItem((0, _browserConstantsMjs.InMemoryCacheKeys).WRAPPER_SKU) || (0, _msalCommon.Constants).EMPTY_STRING;
        const version = this.internalStorage.getItem((0, _browserConstantsMjs.InMemoryCacheKeys).WRAPPER_VER) || (0, _msalCommon.Constants).EMPTY_STRING;
        return [
            sku,
            version
        ];
    }
    /**
     *
     * @param entity
     */ setAuthorityMetadata(key, entity) {
        this.logger.trace("BrowserCacheManager.setAuthorityMetadata called");
        this.internalStorage.setItem(key, JSON.stringify(entity));
    }
    /**
     * Gets the active account
     */ getActiveAccount() {
        const activeAccountKeyFilters = this.generateCacheKey((0, _msalCommon.PersistentCacheKeys).ACTIVE_ACCOUNT_FILTERS);
        const activeAccountValueFilters = this.getItem(activeAccountKeyFilters);
        if (!activeAccountValueFilters) {
            // if new active account cache type isn't found, it's an old version, so look for that instead
            this.logger.trace("BrowserCacheManager.getActiveAccount: No active account filters cache schema found, looking for legacy schema");
            const activeAccountKeyLocal = this.generateCacheKey((0, _msalCommon.PersistentCacheKeys).ACTIVE_ACCOUNT);
            const activeAccountValueLocal = this.getItem(activeAccountKeyLocal);
            if (!activeAccountValueLocal) {
                this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found");
                return null;
            }
            const activeAccount = this.getAccountInfoFilteredBy({
                localAccountId: activeAccountValueLocal
            });
            if (activeAccount) {
                this.logger.trace("BrowserCacheManager.getActiveAccount: Legacy active account cache schema found");
                this.logger.trace("BrowserCacheManager.getActiveAccount: Adding active account filters cache schema");
                this.setActiveAccount(activeAccount);
                return activeAccount;
            }
            return null;
        }
        const activeAccountValueObj = this.validateAndParseJson(activeAccountValueFilters);
        if (activeAccountValueObj) {
            this.logger.trace("BrowserCacheManager.getActiveAccount: Active account filters schema found");
            return this.getAccountInfoFilteredBy({
                homeAccountId: activeAccountValueObj.homeAccountId,
                localAccountId: activeAccountValueObj.localAccountId,
                tenantId: activeAccountValueObj.tenantId
            });
        }
        this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found");
        return null;
    }
    /**
     * Sets the active account's localAccountId in cache
     * @param account
     */ setActiveAccount(account) {
        const activeAccountKey = this.generateCacheKey((0, _msalCommon.PersistentCacheKeys).ACTIVE_ACCOUNT_FILTERS);
        const activeAccountKeyLocal = this.generateCacheKey((0, _msalCommon.PersistentCacheKeys).ACTIVE_ACCOUNT);
        if (account) {
            this.logger.verbose("setActiveAccount: Active account set");
            const activeAccountValue = {
                homeAccountId: account.homeAccountId,
                localAccountId: account.localAccountId,
                tenantId: account.tenantId
            };
            this.browserStorage.setItem(activeAccountKey, JSON.stringify(activeAccountValue));
            this.browserStorage.setItem(activeAccountKeyLocal, account.localAccountId);
        } else {
            this.logger.verbose("setActiveAccount: No account passed, active account not set");
            this.browserStorage.removeItem(activeAccountKey);
            this.browserStorage.removeItem(activeAccountKeyLocal);
        }
    }
    /**
     * fetch throttling entity from the platform cache
     * @param throttlingCacheKey
     */ getThrottlingCache(throttlingCacheKey) {
        const value = this.getItem(throttlingCacheKey);
        if (!value) {
            this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit");
            return null;
        }
        const parsedThrottlingCache = this.validateAndParseJson(value);
        if (!parsedThrottlingCache || !(0, _msalCommon.CacheHelpers).isThrottlingEntity(throttlingCacheKey, parsedThrottlingCache)) {
            this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit");
            return null;
        }
        this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit");
        return parsedThrottlingCache;
    }
    /**
     * set throttling entity to the platform cache
     * @param throttlingCacheKey
     * @param throttlingCache
     */ setThrottlingCache(throttlingCacheKey, throttlingCache) {
        this.logger.trace("BrowserCacheManager.setThrottlingCache called");
        this.setItem(throttlingCacheKey, JSON.stringify(throttlingCache));
    }
    /**
     * Gets cache item with given key.
     * Will retrieve from cookies if storeAuthStateInCookie is set to true.
     * @param key
     */ getTemporaryCache(cacheKey, generateKey) {
        const key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
        if (this.cacheConfig.storeAuthStateInCookie) {
            const itemCookie = this.getItemCookie(key);
            if (itemCookie) {
                this.logger.trace("BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies");
                return itemCookie;
            }
        }
        const value = this.temporaryCacheStorage.getItem(key);
        if (!value) {
            // If temp cache item not found in session/memory, check local storage for items set by old versions
            if (this.cacheConfig.cacheLocation === (0, _browserConstantsMjs.BrowserCacheLocation).LocalStorage) {
                const item = this.browserStorage.getItem(key);
                if (item) {
                    this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage");
                    return item;
                }
            }
            this.logger.trace("BrowserCacheManager.getTemporaryCache: No cache item found in local storage");
            return null;
        }
        this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item returned");
        return value;
    }
    /**
     * Sets the cache item with the key and value given.
     * Stores in cookie if storeAuthStateInCookie is set to true.
     * This can cause cookie overflow if used incorrectly.
     * @param key
     * @param value
     */ setTemporaryCache(cacheKey, value, generateKey) {
        const key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
        this.temporaryCacheStorage.setItem(key, value);
        if (this.cacheConfig.storeAuthStateInCookie) {
            this.logger.trace("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie");
            this.setItemCookie(key, value);
        }
    }
    /**
     * Removes the cache item with the given key.
     * Will also clear the cookie item if storeAuthStateInCookie is set to true.
     * @param key
     */ removeItem(key) {
        this.browserStorage.removeItem(key);
        this.temporaryCacheStorage.removeItem(key);
        if (this.cacheConfig.storeAuthStateInCookie) {
            this.logger.trace("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie");
            this.clearItemCookie(key);
        }
    }
    /**
     * Checks whether key is in cache.
     * @param key
     */ containsKey(key) {
        return this.browserStorage.containsKey(key) || this.temporaryCacheStorage.containsKey(key);
    }
    /**
     * Gets all keys in window.
     */ getKeys() {
        return [
            ...this.browserStorage.getKeys(),
            ...this.temporaryCacheStorage.getKeys()
        ];
    }
    /**
     * Clears all cache entries created by MSAL.
     */ async clear() {
        // Removes all accounts and their credentials
        await this.removeAllAccounts();
        this.removeAppMetadata();
        // Removes all remaining MSAL cache items
        this.getKeys().forEach((cacheKey)=>{
            // Check if key contains msal prefix; For now, we are clearing all the cache items created by MSAL.js
            if ((this.browserStorage.containsKey(cacheKey) || this.temporaryCacheStorage.containsKey(cacheKey)) && (cacheKey.indexOf((0, _msalCommon.Constants).CACHE_PREFIX) !== -1 || cacheKey.indexOf(this.clientId) !== -1)) this.removeItem(cacheKey);
        });
        this.internalStorage.clear();
    }
    /**
     * Clears all access tokes that have claims prior to saving the current one
     * @param performanceClient {IPerformanceClient}
     * @returns
     */ async clearTokensAndKeysWithClaims(performanceClient) {
        performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).ClearTokensAndKeysWithClaims);
        const tokenKeys = this.getTokenKeys();
        const removedAccessTokens = [];
        tokenKeys.accessToken.forEach((key)=>{
            // if the access token has claims in its key, remove the token key and the token
            const credential = this.getAccessTokenCredential(key);
            if (credential?.requestedClaimsHash && key.includes(credential.requestedClaimsHash.toLowerCase())) removedAccessTokens.push(this.removeAccessToken(key));
        });
        await Promise.all(removedAccessTokens);
        // warn if any access tokens are removed
        if (removedAccessTokens.length > 0) this.logger.warning(`${removedAccessTokens.length} access tokens with claims in the cache keys have been removed from the cache.`);
    }
    /**
     * Add value to cookies
     * @param cookieName
     * @param cookieValue
     * @param expires
     */ setItemCookie(cookieName, cookieValue, expires) {
        let cookieStr = `${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)};path=/;SameSite=Lax;`;
        if (expires) {
            const expireTime = this.getCookieExpirationTime(expires);
            cookieStr += `expires=${expireTime};`;
        }
        if (this.cacheConfig.secureCookies) cookieStr += "Secure;";
        document.cookie = cookieStr;
    }
    /**
     * Get one item by key from cookies
     * @param cookieName
     */ getItemCookie(cookieName) {
        const name = `${encodeURIComponent(cookieName)}=`;
        const cookieList = document.cookie.split(";");
        for(let i = 0; i < cookieList.length; i++){
            let cookie = cookieList[i];
            while(cookie.charAt(0) === " ")cookie = cookie.substring(1);
            if (cookie.indexOf(name) === 0) return decodeURIComponent(cookie.substring(name.length, cookie.length));
        }
        return (0, _msalCommon.Constants).EMPTY_STRING;
    }
    /**
     * Clear all msal-related cookies currently set in the browser. Should only be used to clear temporary cache items.
     */ clearMsalCookies() {
        const cookiePrefix = `${(0, _msalCommon.Constants).CACHE_PREFIX}.${this.clientId}`;
        const cookieList = document.cookie.split(";");
        cookieList.forEach((cookie)=>{
            while(cookie.charAt(0) === " ")// eslint-disable-next-line no-param-reassign
            cookie = cookie.substring(1);
            if (cookie.indexOf(cookiePrefix) === 0) {
                const cookieKey = cookie.split("=")[0];
                this.clearItemCookie(cookieKey);
            }
        });
    }
    /**
     * Clear an item in the cookies by key
     * @param cookieName
     */ clearItemCookie(cookieName) {
        this.setItemCookie(cookieName, (0, _msalCommon.Constants).EMPTY_STRING, -1);
    }
    /**
     * Get cookie expiration time
     * @param cookieLifeDays
     */ getCookieExpirationTime(cookieLifeDays) {
        const today = new Date();
        const expr = new Date(today.getTime() + cookieLifeDays * this.COOKIE_LIFE_MULTIPLIER);
        return expr.toUTCString();
    }
    /**
     * Gets the cache object referenced by the browser
     */ getCache() {
        return this.browserStorage;
    }
    /**
     * interface compat, we cannot overwrite browser cache; Functionality is supported by individual entities in browser
     */ setCache() {
    // sets nothing
    }
    /**
     * Prepend msal.<client-id> to each key; Skip for any JSON object as Key (defined schemas do not need the key appended: AccessToken Keys or the upcoming schema)
     * @param key
     * @param addInstanceId
     */ generateCacheKey(key) {
        const generatedKey = this.validateAndParseJson(key);
        if (!generatedKey) {
            if ((0, _msalCommon.StringUtils).startsWith(key, (0, _msalCommon.Constants).CACHE_PREFIX) || (0, _msalCommon.StringUtils).startsWith(key, (0, _msalCommon.PersistentCacheKeys).ADAL_ID_TOKEN)) return key;
            return `${(0, _msalCommon.Constants).CACHE_PREFIX}.${this.clientId}.${key}`;
        }
        return JSON.stringify(key);
    }
    /**
     * Create authorityKey to cache authority
     * @param state
     */ generateAuthorityKey(stateString) {
        const { libraryState: { id: stateId } } = (0, _msalCommon.ProtocolUtils).parseRequestState(this.cryptoImpl, stateString);
        return this.generateCacheKey(`${(0, _browserConstantsMjs.TemporaryCacheKeys).AUTHORITY}.${stateId}`);
    }
    /**
     * Create Nonce key to cache nonce
     * @param state
     */ generateNonceKey(stateString) {
        const { libraryState: { id: stateId } } = (0, _msalCommon.ProtocolUtils).parseRequestState(this.cryptoImpl, stateString);
        return this.generateCacheKey(`${(0, _browserConstantsMjs.TemporaryCacheKeys).NONCE_IDTOKEN}.${stateId}`);
    }
    /**
     * Creates full cache key for the request state
     * @param stateString State string for the request
     */ generateStateKey(stateString) {
        // Use the library state id to key temp storage for uniqueness for multiple concurrent requests
        const { libraryState: { id: stateId } } = (0, _msalCommon.ProtocolUtils).parseRequestState(this.cryptoImpl, stateString);
        return this.generateCacheKey(`${(0, _browserConstantsMjs.TemporaryCacheKeys).REQUEST_STATE}.${stateId}`);
    }
    /**
     * Gets the cached authority based on the cached state. Returns empty if no cached state found.
     */ getCachedAuthority(cachedState) {
        const stateCacheKey = this.generateStateKey(cachedState);
        const state = this.getTemporaryCache(stateCacheKey);
        if (!state) return null;
        const authorityCacheKey = this.generateAuthorityKey(state);
        return this.getTemporaryCache(authorityCacheKey);
    }
    /**
     * Updates account, authority, and state in cache
     * @param serverAuthenticationRequest
     * @param account
     */ updateCacheEntries(state, nonce, authorityInstance, loginHint, account) {
        this.logger.trace("BrowserCacheManager.updateCacheEntries called");
        // Cache the request state
        const stateCacheKey = this.generateStateKey(state);
        this.setTemporaryCache(stateCacheKey, state, false);
        // Cache the nonce
        const nonceCacheKey = this.generateNonceKey(state);
        this.setTemporaryCache(nonceCacheKey, nonce, false);
        // Cache authorityKey
        const authorityCacheKey = this.generateAuthorityKey(state);
        this.setTemporaryCache(authorityCacheKey, authorityInstance, false);
        if (account) {
            const ccsCredential = {
                credential: account.homeAccountId,
                type: (0, _msalCommon.CcsCredentialType).HOME_ACCOUNT_ID
            };
            this.setTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).CCS_CREDENTIAL, JSON.stringify(ccsCredential), true);
        } else if (loginHint) {
            const ccsCredential = {
                credential: loginHint,
                type: (0, _msalCommon.CcsCredentialType).UPN
            };
            this.setTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).CCS_CREDENTIAL, JSON.stringify(ccsCredential), true);
        }
    }
    /**
     * Reset all temporary cache items
     * @param state
     */ resetRequestCache(state) {
        this.logger.trace("BrowserCacheManager.resetRequestCache called");
        // check state and remove associated cache items
        if (state) {
            this.getKeys().forEach((key)=>{
                if (key.indexOf(state) !== -1) this.removeItem(key);
            });
            // delete generic interactive request parameters
            this.removeItem(this.generateStateKey(state));
            this.removeItem(this.generateNonceKey(state));
            this.removeItem(this.generateAuthorityKey(state));
        }
        this.removeItem(this.generateCacheKey((0, _browserConstantsMjs.TemporaryCacheKeys).REQUEST_PARAMS));
        this.removeItem(this.generateCacheKey((0, _browserConstantsMjs.TemporaryCacheKeys).ORIGIN_URI));
        this.removeItem(this.generateCacheKey((0, _browserConstantsMjs.TemporaryCacheKeys).URL_HASH));
        this.removeItem(this.generateCacheKey((0, _browserConstantsMjs.TemporaryCacheKeys).CORRELATION_ID));
        this.removeItem(this.generateCacheKey((0, _browserConstantsMjs.TemporaryCacheKeys).CCS_CREDENTIAL));
        this.removeItem(this.generateCacheKey((0, _browserConstantsMjs.TemporaryCacheKeys).NATIVE_REQUEST));
        this.setInteractionInProgress(false);
    }
    /**
     * Removes temporary cache for the provided state
     * @param stateString
     */ cleanRequestByState(stateString) {
        this.logger.trace("BrowserCacheManager.cleanRequestByState called");
        // Interaction is completed - remove interaction status.
        if (stateString) {
            const stateKey = this.generateStateKey(stateString);
            const cachedState = this.temporaryCacheStorage.getItem(stateKey);
            this.logger.infoPii(`BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: ${cachedState}`);
            this.resetRequestCache(cachedState || (0, _msalCommon.Constants).EMPTY_STRING);
        }
        this.clearMsalCookies();
    }
    /**
     * Looks in temporary cache for any state values with the provided interactionType and removes all temporary cache items for that state
     * Used in scenarios where temp cache needs to be cleaned but state is not known, such as clicking browser back button.
     * @param interactionType
     */ cleanRequestByInteractionType(interactionType) {
        this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called");
        // Loop through all keys to find state key
        this.getKeys().forEach((key)=>{
            // If this key is not the state key, move on
            if (key.indexOf((0, _browserConstantsMjs.TemporaryCacheKeys).REQUEST_STATE) === -1) return;
            // Retrieve state value, return if not a valid value
            const stateValue = this.temporaryCacheStorage.getItem(key);
            if (!stateValue) return;
            // Extract state and ensure it matches given InteractionType, then clean request cache
            const parsedState = (0, _browserProtocolUtilsMjs.extractBrowserRequestState)(this.cryptoImpl, stateValue);
            if (parsedState && parsedState.interactionType === interactionType) {
                this.logger.infoPii(`BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: ${stateValue}`);
                this.resetRequestCache(stateValue);
            }
        });
        this.clearMsalCookies();
        this.setInteractionInProgress(false);
    }
    cacheCodeRequest(authCodeRequest) {
        this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
        const encodedValue = (0, _base64EncodeMjs.base64Encode)(JSON.stringify(authCodeRequest));
        this.setTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).REQUEST_PARAMS, encodedValue, true);
    }
    /**
     * Gets the token exchange parameters from the cache. Throws an error if nothing is found.
     */ getCachedRequest(state) {
        this.logger.trace("BrowserCacheManager.getCachedRequest called");
        // Get token request from cache and parse as TokenExchangeParameters.
        const encodedTokenRequest = this.getTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).REQUEST_PARAMS, true);
        if (!encodedTokenRequest) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.noTokenRequestCacheError));
        let parsedRequest;
        try {
            parsedRequest = JSON.parse((0, _base64DecodeMjs.base64Decode)(encodedTokenRequest));
        } catch (e) {
            this.logger.errorPii(`Attempted to parse: ${encodedTokenRequest}`);
            this.logger.error(`Parsing cached token request threw with error: ${e}`);
            throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.unableToParseTokenRequestCacheError));
        }
        this.removeItem(this.generateCacheKey((0, _browserConstantsMjs.TemporaryCacheKeys).REQUEST_PARAMS));
        // Get cached authority and use if no authority is cached with request.
        if (!parsedRequest.authority) {
            const authorityCacheKey = this.generateAuthorityKey(state);
            const cachedAuthority = this.getTemporaryCache(authorityCacheKey);
            if (!cachedAuthority) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.noCachedAuthorityError));
            parsedRequest.authority = cachedAuthority;
        }
        return parsedRequest;
    }
    /**
     * Gets cached native request for redirect flows
     */ getCachedNativeRequest() {
        this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
        const cachedRequest = this.getTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).NATIVE_REQUEST, true);
        if (!cachedRequest) {
            this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found");
            return null;
        }
        const parsedRequest = this.validateAndParseJson(cachedRequest);
        if (!parsedRequest) {
            this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request");
            return null;
        }
        return parsedRequest;
    }
    isInteractionInProgress(matchClientId) {
        const clientId = this.getInteractionInProgress();
        if (matchClientId) return clientId === this.clientId;
        else return !!clientId;
    }
    getInteractionInProgress() {
        const key = `${(0, _msalCommon.Constants).CACHE_PREFIX}.${(0, _browserConstantsMjs.TemporaryCacheKeys).INTERACTION_STATUS_KEY}`;
        return this.getTemporaryCache(key, false);
    }
    setInteractionInProgress(inProgress) {
        // Ensure we don't overwrite interaction in progress for a different clientId
        const key = `${(0, _msalCommon.Constants).CACHE_PREFIX}.${(0, _browserConstantsMjs.TemporaryCacheKeys).INTERACTION_STATUS_KEY}`;
        if (inProgress) {
            if (this.getInteractionInProgress()) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.interactionInProgress));
            else // No interaction is in progress
            this.setTemporaryCache(key, this.clientId, false);
        } else if (!inProgress && this.getInteractionInProgress() === this.clientId) this.removeItem(key);
    }
    /**
     * Returns username retrieved from ADAL or MSAL v1 idToken
     * @deprecated
     */ getLegacyLoginHint() {
        // Only check for adal/msal token if no SSO params are being used
        const adalIdTokenString = this.getTemporaryCache((0, _msalCommon.PersistentCacheKeys).ADAL_ID_TOKEN);
        if (adalIdTokenString) {
            this.browserStorage.removeItem((0, _msalCommon.PersistentCacheKeys).ADAL_ID_TOKEN);
            this.logger.verbose("Cached ADAL id token retrieved.");
        }
        // Check for cached MSAL v1 id token
        const msalIdTokenString = this.getTemporaryCache((0, _msalCommon.PersistentCacheKeys).ID_TOKEN, true);
        if (msalIdTokenString) {
            this.removeItem(this.generateCacheKey((0, _msalCommon.PersistentCacheKeys).ID_TOKEN));
            this.logger.verbose("Cached MSAL.js v1 id token retrieved");
        }
        const cachedIdTokenString = msalIdTokenString || adalIdTokenString;
        if (cachedIdTokenString) {
            const idTokenClaims = (0, _msalCommon.AuthToken).extractTokenClaims(cachedIdTokenString, (0, _base64DecodeMjs.base64Decode));
            if (idTokenClaims.preferred_username) {
                this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint");
                return idTokenClaims.preferred_username;
            } else if (idTokenClaims.upn) {
                this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint");
                return idTokenClaims.upn;
            } else this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO.");
        }
        return null;
    }
    /**
     * Updates a credential's cache key if the current cache key is outdated
     */ updateCredentialCacheKey(currentCacheKey, credential) {
        const updatedCacheKey = (0, _msalCommon.CacheHelpers).generateCredentialKey(credential);
        if (currentCacheKey !== updatedCacheKey) {
            const cacheItem = this.getItem(currentCacheKey);
            if (cacheItem) {
                this.removeItem(currentCacheKey);
                this.setItem(updatedCacheKey, cacheItem);
                this.logger.verbose(`Updated an outdated ${credential.credentialType} cache key`);
                return updatedCacheKey;
            } else this.logger.error(`Attempted to update an outdated ${credential.credentialType} cache key but no item matching the outdated key was found in storage`);
        }
        return currentCacheKey;
    }
    /**
     * Returns application id as redirect context during AcquireTokenRedirect flow.
     */ getRedirectRequestContext() {
        return this.getTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).REDIRECT_CONTEXT, true);
    }
    /**
     * Sets application id as the redirect context during AcquireTokenRedirect flow.
     * @param value
     */ setRedirectRequestContext(value) {
        this.setTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).REDIRECT_CONTEXT, value, true);
    }
    /**
     * Builds credential entities from AuthenticationResult object and saves the resulting credentials to the cache
     * @param result
     * @param request
     */ async hydrateCache(result, request) {
        const idTokenEntity = (0, _msalCommon.CacheHelpers).createIdTokenEntity(result.account?.homeAccountId, result.account?.environment, result.idToken, this.clientId, result.tenantId);
        let claimsHash;
        if (request.claims) claimsHash = await this.cryptoImpl.hashString(request.claims);
        const accessTokenEntity = (0, _msalCommon.CacheHelpers).createAccessTokenEntity(result.account?.homeAccountId, result.account.environment, result.accessToken, this.clientId, result.tenantId, result.scopes.join(" "), result.expiresOn?.getTime() || 0, result.extExpiresOn?.getTime() || 0, (0, _base64DecodeMjs.base64Decode), undefined, result.tokenType, undefined, request.sshKid, request.claims, claimsHash);
        const cacheRecord = new (0, _msalCommon.CacheRecord)(undefined, idTokenEntity, accessTokenEntity);
        return this.saveCacheRecord(cacheRecord);
    }
}
const DEFAULT_BROWSER_CACHE_MANAGER = (clientId, logger)=>{
    const cacheOptions = {
        cacheLocation: (0, _browserConstantsMjs.BrowserCacheLocation).MemoryStorage,
        temporaryCacheLocation: (0, _browserConstantsMjs.BrowserCacheLocation).MemoryStorage,
        storeAuthStateInCookie: false,
        secureCookies: false,
        cacheMigrationEnabled: false,
        claimsBasedCachingEnabled: false
    };
    return new BrowserCacheManager(clientId, cacheOptions, (0, _msalCommon.DEFAULT_CRYPTO_IMPLEMENTATION), logger);
};

},{"@azure/msal-common":"rNWNa","../error/BrowserAuthError.mjs":"hI9Lm","../utils/BrowserConstants.mjs":"izeV4","./BrowserStorage.mjs":"2qFey","./MemoryStorage.mjs":"eTMRb","../utils/BrowserProtocolUtils.mjs":"jGwco","../encode/Base64Decode.mjs":"12oz3","../encode/Base64Encode.mjs":"9M5y6","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qFey":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BrowserStorage", ()=>BrowserStorage);
var _browserConfigurationAuthErrorMjs = require("../error/BrowserConfigurationAuthError.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _browserConfigurationAuthErrorCodesMjs = require("../error/BrowserConfigurationAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class BrowserStorage {
    constructor(cacheLocation){
        this.validateWindowStorage(cacheLocation);
        this.windowStorage = window[cacheLocation];
    }
    validateWindowStorage(cacheLocation) {
        if (cacheLocation !== (0, _browserConstantsMjs.BrowserCacheLocation).LocalStorage && cacheLocation !== (0, _browserConstantsMjs.BrowserCacheLocation).SessionStorage || !window[cacheLocation]) throw (0, _browserConfigurationAuthErrorMjs.createBrowserConfigurationAuthError)((0, _browserConfigurationAuthErrorCodesMjs.storageNotSupported));
    }
    getItem(key) {
        return this.windowStorage.getItem(key);
    }
    setItem(key, value) {
        this.windowStorage.setItem(key, value);
    }
    removeItem(key) {
        this.windowStorage.removeItem(key);
    }
    getKeys() {
        return Object.keys(this.windowStorage);
    }
    containsKey(key) {
        return this.windowStorage.hasOwnProperty(key);
    }
}

},{"../error/BrowserConfigurationAuthError.mjs":"bdb1W","../utils/BrowserConstants.mjs":"izeV4","../error/BrowserConfigurationAuthErrorCodes.mjs":"fxaOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bdb1W":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BrowserConfigurationAuthErrorCodes", ()=>_browserConfigurationAuthErrorCodesMjs);
parcelHelpers.export(exports, "BrowserConfigurationAuthError", ()=>BrowserConfigurationAuthError);
parcelHelpers.export(exports, "BrowserConfigurationAuthErrorMessage", ()=>BrowserConfigurationAuthErrorMessage);
parcelHelpers.export(exports, "BrowserConfigurationAuthErrorMessages", ()=>BrowserConfigurationAuthErrorMessages);
parcelHelpers.export(exports, "createBrowserConfigurationAuthError", ()=>createBrowserConfigurationAuthError);
var _msalCommon = require("@azure/msal-common");
var _browserConfigurationAuthErrorCodesMjs = require("./BrowserConfigurationAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const BrowserConfigurationAuthErrorMessages = {
    [(0, _browserConfigurationAuthErrorCodesMjs.storageNotSupported)]: "Given storage configuration option was not supported.",
    [(0, _browserConfigurationAuthErrorCodesMjs.stubbedPublicClientApplicationCalled)]: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors",
    [(0, _browserConfigurationAuthErrorCodesMjs.inMemRedirectUnavailable)]: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true."
};
/**
 * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
 * @deprecated Use BrowserAuthErrorCodes instead
 */ const BrowserConfigurationAuthErrorMessage = {
    storageNotSupportedError: {
        code: (0, _browserConfigurationAuthErrorCodesMjs.storageNotSupported),
        desc: BrowserConfigurationAuthErrorMessages[0, _browserConfigurationAuthErrorCodesMjs.storageNotSupported]
    },
    stubPcaInstanceCalled: {
        code: (0, _browserConfigurationAuthErrorCodesMjs.stubbedPublicClientApplicationCalled),
        desc: BrowserConfigurationAuthErrorMessages[0, _browserConfigurationAuthErrorCodesMjs.stubbedPublicClientApplicationCalled]
    },
    inMemRedirectUnavailable: {
        code: (0, _browserConfigurationAuthErrorCodesMjs.inMemRedirectUnavailable),
        desc: BrowserConfigurationAuthErrorMessages[0, _browserConfigurationAuthErrorCodesMjs.inMemRedirectUnavailable]
    }
};
/**
 * Browser library error class thrown by the MSAL.js library for SPAs
 */ class BrowserConfigurationAuthError extends (0, _msalCommon.AuthError) {
    constructor(errorCode, errorMessage){
        super(errorCode, errorMessage);
        this.name = "BrowserConfigurationAuthError";
        Object.setPrototypeOf(this, BrowserConfigurationAuthError.prototype);
    }
}
function createBrowserConfigurationAuthError(errorCode) {
    return new BrowserConfigurationAuthError(errorCode, BrowserConfigurationAuthErrorMessages[errorCode]);
}

},{"@azure/msal-common":"rNWNa","./BrowserConfigurationAuthErrorCodes.mjs":"fxaOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fxaOo":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inMemRedirectUnavailable", ()=>inMemRedirectUnavailable);
parcelHelpers.export(exports, "storageNotSupported", ()=>storageNotSupported);
parcelHelpers.export(exports, "stubbedPublicClientApplicationCalled", ()=>stubbedPublicClientApplicationCalled);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const storageNotSupported = "storage_not_supported";
const stubbedPublicClientApplicationCalled = "stubbed_public_client_application_called";
const inMemRedirectUnavailable = "in_mem_redirect_unavailable";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jGwco":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extractBrowserRequestState", ()=>extractBrowserRequestState);
var _msalCommon = require("@azure/msal-common");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Extracts the BrowserStateObject from the state string.
 * @param browserCrypto
 * @param state
 */ function extractBrowserRequestState(browserCrypto, state) {
    if (!state) return null;
    try {
        const requestStateObj = (0, _msalCommon.ProtocolUtils).parseRequestState(browserCrypto, state);
        return requestStateObj.libraryState.meta;
    } catch (e) {
        throw (0, _msalCommon.createClientAuthError)((0, _msalCommon.ClientAuthErrorCodes).invalidState);
    }
}

},{"@azure/msal-common":"rNWNa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3AsqD":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventType", ()=>EventType);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const EventType = {
    INITIALIZE_START: "msal:initializeStart",
    INITIALIZE_END: "msal:initializeEnd",
    ACCOUNT_ADDED: "msal:accountAdded",
    ACCOUNT_REMOVED: "msal:accountRemoved",
    ACTIVE_ACCOUNT_CHANGED: "msal:activeAccountChanged",
    LOGIN_START: "msal:loginStart",
    LOGIN_SUCCESS: "msal:loginSuccess",
    LOGIN_FAILURE: "msal:loginFailure",
    ACQUIRE_TOKEN_START: "msal:acquireTokenStart",
    ACQUIRE_TOKEN_SUCCESS: "msal:acquireTokenSuccess",
    ACQUIRE_TOKEN_FAILURE: "msal:acquireTokenFailure",
    ACQUIRE_TOKEN_NETWORK_START: "msal:acquireTokenFromNetworkStart",
    SSO_SILENT_START: "msal:ssoSilentStart",
    SSO_SILENT_SUCCESS: "msal:ssoSilentSuccess",
    SSO_SILENT_FAILURE: "msal:ssoSilentFailure",
    ACQUIRE_TOKEN_BY_CODE_START: "msal:acquireTokenByCodeStart",
    ACQUIRE_TOKEN_BY_CODE_SUCCESS: "msal:acquireTokenByCodeSuccess",
    ACQUIRE_TOKEN_BY_CODE_FAILURE: "msal:acquireTokenByCodeFailure",
    HANDLE_REDIRECT_START: "msal:handleRedirectStart",
    HANDLE_REDIRECT_END: "msal:handleRedirectEnd",
    POPUP_OPENED: "msal:popupOpened",
    LOGOUT_START: "msal:logoutStart",
    LOGOUT_SUCCESS: "msal:logoutSuccess",
    LOGOUT_FAILURE: "msal:logoutFailure",
    LOGOUT_END: "msal:logoutEnd",
    RESTORE_FROM_BFCACHE: "msal:restoreFromBFCache"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3FsXm":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventHandler", ()=>EventHandler);
var _msalCommon = require("@azure/msal-common");
var _eventTypeMjs = require("./EventType.mjs");
var _browserCryptoMjs = require("../crypto/BrowserCrypto.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class EventHandler {
    constructor(logger, browserCrypto){
        this.eventCallbacks = new Map();
        this.logger = logger;
        this.browserCrypto = browserCrypto;
        this.listeningToStorageEvents = false;
        this.handleAccountCacheChange = this.handleAccountCacheChange.bind(this);
    }
    /**
     * Adds event callbacks to array
     * @param callback
     */ addEventCallback(callback) {
        if (typeof window !== "undefined") {
            const callbackId = (0, _browserCryptoMjs.createNewGuid)();
            this.eventCallbacks.set(callbackId, callback);
            this.logger.verbose(`Event callback registered with id: ${callbackId}`);
            return callbackId;
        }
        return null;
    }
    /**
     * Removes callback with provided id from callback array
     * @param callbackId
     */ removeEventCallback(callbackId) {
        this.eventCallbacks.delete(callbackId);
        this.logger.verbose(`Event callback ${callbackId} removed.`);
    }
    /**
     * Adds event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
     */ enableAccountStorageEvents() {
        if (typeof window === "undefined") return;
        if (!this.listeningToStorageEvents) {
            this.logger.verbose("Adding account storage listener.");
            this.listeningToStorageEvents = true;
            window.addEventListener("storage", this.handleAccountCacheChange);
        } else this.logger.verbose("Account storage listener already registered.");
    }
    /**
     * Removes event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
     */ disableAccountStorageEvents() {
        if (typeof window === "undefined") return;
        if (this.listeningToStorageEvents) {
            this.logger.verbose("Removing account storage listener.");
            window.removeEventListener("storage", this.handleAccountCacheChange);
            this.listeningToStorageEvents = false;
        } else this.logger.verbose("No account storage listener registered.");
    }
    /**
     * Emits events by calling callback with event message
     * @param eventType
     * @param interactionType
     * @param payload
     * @param error
     */ emitEvent(eventType, interactionType, payload, error) {
        if (typeof window !== "undefined") {
            const message = {
                eventType: eventType,
                interactionType: interactionType || null,
                payload: payload || null,
                error: error || null,
                timestamp: Date.now()
            };
            this.logger.info(`Emitting event: ${eventType}`);
            this.eventCallbacks.forEach((callback, callbackId)=>{
                this.logger.verbose(`Emitting event to callback ${callbackId}: ${eventType}`);
                callback.apply(null, [
                    message
                ]);
            });
        }
    }
    /**
     * Emit account added/removed events when cached accounts are changed in a different tab or frame
     */ handleAccountCacheChange(e) {
        try {
            // Handle active account filter change
            if (e.key?.includes((0, _msalCommon.PersistentCacheKeys).ACTIVE_ACCOUNT_FILTERS)) // This event has no payload, it only signals cross-tab app instances that the results of calling getActiveAccount() will have changed
            this.emitEvent((0, _eventTypeMjs.EventType).ACTIVE_ACCOUNT_CHANGED);
            // Handle account object change
            const cacheValue = e.newValue || e.oldValue;
            if (!cacheValue) return;
            const parsedValue = JSON.parse(cacheValue);
            if (typeof parsedValue !== "object" || !(0, _msalCommon.AccountEntity).isAccountEntity(parsedValue)) return;
            const accountEntity = (0, _msalCommon.CacheManager).toObject(new (0, _msalCommon.AccountEntity)(), parsedValue);
            const accountInfo = accountEntity.getAccountInfo();
            if (!e.oldValue && e.newValue) {
                this.logger.info("Account was added to cache in a different window");
                this.emitEvent((0, _eventTypeMjs.EventType).ACCOUNT_ADDED, undefined, accountInfo);
            } else if (!e.newValue && e.oldValue) {
                this.logger.info("Account was removed from cache in a different window");
                this.emitEvent((0, _eventTypeMjs.EventType).ACCOUNT_REMOVED, undefined, accountInfo);
            }
        } catch (e) {
            return;
        }
    }
}

},{"@azure/msal-common":"rNWNa","./EventType.mjs":"3AsqD","../crypto/BrowserCrypto.mjs":"foGbR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6WLbz":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PopupClient", ()=>PopupClient);
var _msalCommon = require("@azure/msal-common");
var _standardInteractionClientMjs = require("./StandardInteractionClient.mjs");
var _eventTypeMjs = require("../event/EventType.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _browserUtilsMjs = require("../utils/BrowserUtils.mjs");
var _nativeInteractionClientMjs = require("./NativeInteractionClient.mjs");
var _nativeMessageHandlerMjs = require("../broker/nativeBroker/NativeMessageHandler.mjs");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _interactionHandlerMjs = require("../interaction_handler/InteractionHandler.mjs");
var _responseHandlerMjs = require("../response/ResponseHandler.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class PopupClient extends (0, _standardInteractionClientMjs.StandardInteractionClient) {
    constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeStorageImpl, nativeMessageHandler, correlationId){
        super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId);
        // Properly sets this reference for the unload event.
        this.unloadWindow = this.unloadWindow.bind(this);
        this.nativeStorage = nativeStorageImpl;
    }
    /**
     * Acquires tokens by opening a popup window to the /authorize endpoint of the authority
     * @param request
     */ acquireToken(request) {
        try {
            const popupName = this.generatePopupName(request.scopes || (0, _msalCommon.OIDC_DEFAULT_SCOPES), request.authority || this.config.auth.authority);
            const popupWindowAttributes = request.popupWindowAttributes || {};
            // asyncPopups flag is true. Acquires token without first opening popup. Popup will be opened later asynchronously.
            if (this.config.system.asyncPopups) {
                this.logger.verbose("asyncPopups set to true, acquiring token");
                // Passes on popup position and dimensions if in request
                return this.acquireTokenPopupAsync(request, popupName, popupWindowAttributes);
            } else {
                // asyncPopups flag is set to false. Opens popup before acquiring token.
                this.logger.verbose("asyncPopup set to false, opening popup before acquiring token");
                const popup = this.openSizedPopup("about:blank", popupName, popupWindowAttributes);
                return this.acquireTokenPopupAsync(request, popupName, popupWindowAttributes, popup);
            }
        } catch (e) {
            return Promise.reject(e);
        }
    }
    /**
     * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
     * @param logoutRequest
     */ logout(logoutRequest) {
        try {
            this.logger.verbose("logoutPopup called");
            const validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
            const popupName = this.generateLogoutPopupName(validLogoutRequest);
            const authority = logoutRequest && logoutRequest.authority;
            const mainWindowRedirectUri = logoutRequest && logoutRequest.mainWindowRedirectUri;
            const popupWindowAttributes = logoutRequest?.popupWindowAttributes || {};
            // asyncPopups flag is true. Acquires token without first opening popup. Popup will be opened later asynchronously.
            if (this.config.system.asyncPopups) {
                this.logger.verbose("asyncPopups set to true");
                // Passes on popup position and dimensions if in request
                return this.logoutPopupAsync(validLogoutRequest, popupName, popupWindowAttributes, authority, undefined, mainWindowRedirectUri);
            } else {
                // asyncPopups flag is set to false. Opens popup before logging out.
                this.logger.verbose("asyncPopup set to false, opening popup");
                const popup = this.openSizedPopup("about:blank", popupName, popupWindowAttributes);
                return this.logoutPopupAsync(validLogoutRequest, popupName, popupWindowAttributes, authority, popup, mainWindowRedirectUri);
            }
        } catch (e) {
            // Since this function is synchronous we need to reject
            return Promise.reject(e);
        }
    }
    /**
     * Helper which obtains an access_token for your API via opening a popup window in the user's browser
     * @param validRequest
     * @param popupName
     * @param popup
     * @param popupWindowAttributes
     *
     * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
     */ async acquireTokenPopupAsync(request, popupName, popupWindowAttributes, popup) {
        this.logger.verbose("acquireTokenPopupAsync called");
        const serverTelemetryManager = this.initializeServerTelemetryManager((0, _browserConstantsMjs.ApiId).acquireTokenPopup);
        const validRequest = await (0, _msalCommon.invokeAsync)(this.initializeAuthorizationRequest.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(request, (0, _browserConstantsMjs.InteractionType).Popup);
        (0, _browserUtilsMjs.preconnect)(validRequest.authority);
        try {
            // Create auth code request and generate PKCE params
            const authCodeRequest = await (0, _msalCommon.invokeAsync)(this.initializeAuthorizationCodeRequest.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientInitializeAuthorizationCodeRequest, this.logger, this.performanceClient, this.correlationId)(validRequest);
            // Initialize the client
            const authClient = await (0, _msalCommon.invokeAsync)(this.createAuthCodeClient.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, validRequest.authority, validRequest.azureCloudOptions, validRequest.account);
            const isNativeBroker = (0, _nativeMessageHandlerMjs.NativeMessageHandler).isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, request.authenticationScheme);
            // Start measurement for server calls with native brokering enabled
            let fetchNativeAccountIdMeasurement;
            if (isNativeBroker) fetchNativeAccountIdMeasurement = this.performanceClient.startMeasurement((0, _msalCommon.PerformanceEvents).FetchAccountIdWithNativeBroker, request.correlationId);
            // Create acquire token url.
            const navigateUrl = await authClient.getAuthCodeUrl({
                ...validRequest,
                nativeBroker: isNativeBroker
            });
            // Create popup interaction handler.
            const interactionHandler = new (0, _interactionHandlerMjs.InteractionHandler)(authClient, this.browserStorage, authCodeRequest, this.logger, this.performanceClient);
            // Show the UI once the url has been created. Get the window handle for the popup.
            const popupParameters = {
                popup,
                popupName,
                popupWindowAttributes
            };
            const popupWindow = this.initiateAuthRequest(navigateUrl, popupParameters);
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).POPUP_OPENED, (0, _browserConstantsMjs.InteractionType).Popup, {
                popupWindow
            }, null);
            // Monitor the window for the hash. Return the string value and close the popup when the hash is received. Default timeout is 60 seconds.
            const responseString = await this.monitorPopupForHash(popupWindow);
            const serverParams = (0, _msalCommon.invoke)((0, _responseHandlerMjs.deserializeResponse), (0, _msalCommon.PerformanceEvents).DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(responseString, this.config.auth.OIDCOptions.serverResponseType, this.logger);
            // Remove throttle if it exists
            (0, _msalCommon.ThrottlingUtils).removeThrottle(this.browserStorage, this.config.auth.clientId, authCodeRequest);
            if (serverParams.accountId) {
                this.logger.verbose("Account id found in hash, calling WAM for token");
                // end measurement for server call with native brokering enabled
                if (fetchNativeAccountIdMeasurement) fetchNativeAccountIdMeasurement.end({
                    success: true,
                    isNativeBroker: true
                });
                if (!this.nativeMessageHandler) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.nativeConnectionNotEstablished));
                const nativeInteractionClient = new (0, _nativeInteractionClientMjs.NativeInteractionClient)(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, (0, _browserConstantsMjs.ApiId).acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, this.nativeStorage, validRequest.correlationId);
                const { userRequestState } = (0, _msalCommon.ProtocolUtils).parseRequestState(this.browserCrypto, validRequest.state);
                return await nativeInteractionClient.acquireToken({
                    ...validRequest,
                    state: userRequestState,
                    prompt: undefined
                });
            }
            // Handle response from hash string.
            const result = await interactionHandler.handleCodeResponse(serverParams, validRequest);
            return result;
        } catch (e) {
            if (popup) // Close the synchronous popup if an error is thrown before the window unload event is registered
            popup.close();
            if (e instanceof (0, _msalCommon.AuthError)) {
                e.setCorrelationId(this.correlationId);
                serverTelemetryManager.cacheFailedRequest(e);
            }
            throw e;
        }
    }
    /**
     *
     * @param validRequest
     * @param popupName
     * @param requestAuthority
     * @param popup
     * @param mainWindowRedirectUri
     * @param popupWindowAttributes
     */ async logoutPopupAsync(validRequest, popupName, popupWindowAttributes, requestAuthority, popup, mainWindowRedirectUri) {
        this.logger.verbose("logoutPopupAsync called");
        this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGOUT_START, (0, _browserConstantsMjs.InteractionType).Popup, validRequest);
        const serverTelemetryManager = this.initializeServerTelemetryManager((0, _browserConstantsMjs.ApiId).logoutPopup);
        try {
            // Clear cache on logout
            await this.clearCacheOnLogout(validRequest.account);
            // Initialize the client
            const authClient = await (0, _msalCommon.invokeAsync)(this.createAuthCodeClient.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, requestAuthority, undefined, validRequest.account || undefined);
            try {
                authClient.authority.endSessionEndpoint;
            } catch  {
                if (validRequest.account?.homeAccountId && validRequest.postLogoutRedirectUri && authClient.authority.protocolMode === (0, _msalCommon.ProtocolMode).OIDC) {
                    this.browserStorage.removeAccount(validRequest.account?.homeAccountId);
                    this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGOUT_SUCCESS, (0, _browserConstantsMjs.InteractionType).Popup, validRequest);
                    if (mainWindowRedirectUri) {
                        const navigationOptions = {
                            apiId: (0, _browserConstantsMjs.ApiId).logoutPopup,
                            timeout: this.config.system.redirectNavigationTimeout,
                            noHistory: false
                        };
                        const absoluteUrl = (0, _msalCommon.UrlString).getAbsoluteUrl(mainWindowRedirectUri, (0, _browserUtilsMjs.getCurrentUri)());
                        await this.navigationClient.navigateInternal(absoluteUrl, navigationOptions);
                    }
                    if (popup) popup.close();
                    return;
                }
            }
            // Create logout string and navigate user window to logout.
            const logoutUri = authClient.getLogoutUri(validRequest);
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGOUT_SUCCESS, (0, _browserConstantsMjs.InteractionType).Popup, validRequest);
            // Open the popup window to requestUrl.
            const popupWindow = this.openPopup(logoutUri, {
                popupName,
                popupWindowAttributes,
                popup
            });
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).POPUP_OPENED, (0, _browserConstantsMjs.InteractionType).Popup, {
                popupWindow
            }, null);
            await this.monitorPopupForHash(popupWindow).catch(()=>{
            // Swallow any errors related to monitoring the window. Server logout is best effort
            });
            if (mainWindowRedirectUri) {
                const navigationOptions = {
                    apiId: (0, _browserConstantsMjs.ApiId).logoutPopup,
                    timeout: this.config.system.redirectNavigationTimeout,
                    noHistory: false
                };
                const absoluteUrl = (0, _msalCommon.UrlString).getAbsoluteUrl(mainWindowRedirectUri, (0, _browserUtilsMjs.getCurrentUri)());
                this.logger.verbose("Redirecting main window to url specified in the request");
                this.logger.verbosePii(`Redirecting main window to: ${absoluteUrl}`);
                await this.navigationClient.navigateInternal(absoluteUrl, navigationOptions);
            } else this.logger.verbose("No main window navigation requested");
        } catch (e) {
            if (popup) // Close the synchronous popup if an error is thrown before the window unload event is registered
            popup.close();
            if (e instanceof (0, _msalCommon.AuthError)) {
                e.setCorrelationId(this.correlationId);
                serverTelemetryManager.cacheFailedRequest(e);
            }
            this.browserStorage.setInteractionInProgress(false);
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGOUT_FAILURE, (0, _browserConstantsMjs.InteractionType).Popup, null, e);
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGOUT_END, (0, _browserConstantsMjs.InteractionType).Popup);
            throw e;
        }
        this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGOUT_END, (0, _browserConstantsMjs.InteractionType).Popup);
    }
    /**
     * Opens a popup window with given request Url.
     * @param requestUrl
     */ initiateAuthRequest(requestUrl, params) {
        // Check that request url is not empty.
        if (requestUrl) {
            this.logger.infoPii(`Navigate to: ${requestUrl}`);
            // Open the popup window to requestUrl.
            return this.openPopup(requestUrl, params);
        } else {
            // Throw error if request URL is empty.
            this.logger.error("Navigate url is empty");
            throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.emptyNavigateUri));
        }
    }
    /**
     * Monitors a window until it loads a url with the same origin.
     * @param popupWindow - window that is being monitored
     * @param timeout - timeout for processing hash once popup is redirected back to application
     */ monitorPopupForHash(popupWindow) {
        return new Promise((resolve, reject)=>{
            this.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
            const intervalId = setInterval(()=>{
                // Window is closed
                if (popupWindow.closed) {
                    this.logger.error("PopupHandler.monitorPopupForHash - window closed");
                    clearInterval(intervalId);
                    reject((0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.userCancelled)));
                    return;
                }
                let href = "";
                try {
                    /*
                     * Will throw if cross origin,
                     * which should be caught and ignored
                     * since we need the interval to keep running while on STS UI.
                     */ href = popupWindow.location.href;
                } catch (e) {}
                // Don't process blank pages or cross domain
                if (!href || href === "about:blank") return;
                clearInterval(intervalId);
                let responseString = "";
                const responseType = this.config.auth.OIDCOptions.serverResponseType;
                if (popupWindow) {
                    if (responseType === (0, _msalCommon.ServerResponseType).QUERY) responseString = popupWindow.location.search;
                    else responseString = popupWindow.location.hash;
                }
                this.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller");
                resolve(responseString);
            }, this.config.system.pollIntervalMilliseconds);
        }).finally(()=>{
            this.cleanPopup(popupWindow);
        });
    }
    /**
     * @hidden
     *
     * Configures popup window for login.
     *
     * @param urlNavigate
     * @param title
     * @param popUpWidth
     * @param popUpHeight
     * @param popupWindowAttributes
     * @ignore
     * @hidden
     */ openPopup(urlNavigate, popupParams) {
        try {
            let popupWindow;
            // Popup window passed in, setting url to navigate to
            if (popupParams.popup) {
                popupWindow = popupParams.popup;
                this.logger.verbosePii(`Navigating popup window to: ${urlNavigate}`);
                popupWindow.location.assign(urlNavigate);
            } else if (typeof popupParams.popup === "undefined") {
                // Popup will be undefined if it was not passed in
                this.logger.verbosePii(`Opening popup window to: ${urlNavigate}`);
                popupWindow = this.openSizedPopup(urlNavigate, popupParams.popupName, popupParams.popupWindowAttributes);
            }
            // Popup will be null if popups are blocked
            if (!popupWindow) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.emptyWindowError));
            if (popupWindow.focus) popupWindow.focus();
            this.currentWindow = popupWindow;
            window.addEventListener("beforeunload", this.unloadWindow);
            return popupWindow;
        } catch (e) {
            this.logger.error("error opening popup " + e.message);
            this.browserStorage.setInteractionInProgress(false);
            throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.popupWindowError));
        }
    }
    /**
     * Helper function to set popup window dimensions and position
     * @param urlNavigate
     * @param popupName
     * @param popupWindowAttributes
     * @returns
     */ openSizedPopup(urlNavigate, popupName, popupWindowAttributes) {
        /**
         * adding winLeft and winTop to account for dual monitor
         * using screenLeft and screenTop for IE8 and earlier
         */ const winLeft = window.screenLeft ? window.screenLeft : window.screenX;
        const winTop = window.screenTop ? window.screenTop : window.screenY;
        /**
         * window.innerWidth displays browser window"s height and width excluding toolbars
         * using document.documentElement.clientWidth for IE8 and earlier
         */ const winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let width = popupWindowAttributes.popupSize?.width;
        let height = popupWindowAttributes.popupSize?.height;
        let top = popupWindowAttributes.popupPosition?.top;
        let left = popupWindowAttributes.popupPosition?.left;
        if (!width || width < 0 || width > winWidth) {
            this.logger.verbose("Default popup window width used. Window width not configured or invalid.");
            width = (0, _browserConstantsMjs.BrowserConstants).POPUP_WIDTH;
        }
        if (!height || height < 0 || height > winHeight) {
            this.logger.verbose("Default popup window height used. Window height not configured or invalid.");
            height = (0, _browserConstantsMjs.BrowserConstants).POPUP_HEIGHT;
        }
        if (!top || top < 0 || top > winHeight) {
            this.logger.verbose("Default popup window top position used. Window top not configured or invalid.");
            top = Math.max(0, winHeight / 2 - (0, _browserConstantsMjs.BrowserConstants).POPUP_HEIGHT / 2 + winTop);
        }
        if (!left || left < 0 || left > winWidth) {
            this.logger.verbose("Default popup window left position used. Window left not configured or invalid.");
            left = Math.max(0, winWidth / 2 - (0, _browserConstantsMjs.BrowserConstants).POPUP_WIDTH / 2 + winLeft);
        }
        return window.open(urlNavigate, popupName, `width=${width}, height=${height}, top=${top}, left=${left}, scrollbars=yes`);
    }
    /**
     * Event callback to unload main window.
     */ unloadWindow(e) {
        this.browserStorage.cleanRequestByInteractionType((0, _browserConstantsMjs.InteractionType).Popup);
        if (this.currentWindow) this.currentWindow.close();
        // Guarantees browser unload will happen, so no other errors will be thrown.
        e.preventDefault();
    }
    /**
     * Closes popup, removes any state vars created during popup calls.
     * @param popupWindow
     */ cleanPopup(popupWindow) {
        if (popupWindow) // Close window.
        popupWindow.close();
        // Remove window unload function
        window.removeEventListener("beforeunload", this.unloadWindow);
        // Interaction is completed - remove interaction status.
        this.browserStorage.setInteractionInProgress(false);
    }
    /**
     * Generates the name for the popup based on the client id and request
     * @param clientId
     * @param request
     */ generatePopupName(scopes, authority) {
        return `${(0, _browserConstantsMjs.BrowserConstants).POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${scopes.join("-")}.${authority}.${this.correlationId}`;
    }
    /**
     * Generates the name for the popup based on the client id and request for logouts
     * @param clientId
     * @param request
     */ generateLogoutPopupName(request) {
        const homeAccountId = request.account && request.account.homeAccountId;
        return `${(0, _browserConstantsMjs.BrowserConstants).POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${homeAccountId}.${this.correlationId}`;
    }
}

},{"@azure/msal-common":"rNWNa","./StandardInteractionClient.mjs":"1Pw1B","../event/EventType.mjs":"3AsqD","../utils/BrowserConstants.mjs":"izeV4","../utils/BrowserUtils.mjs":"7ahCa","./NativeInteractionClient.mjs":"bOcEE","../broker/nativeBroker/NativeMessageHandler.mjs":"01Tz2","../error/BrowserAuthError.mjs":"hI9Lm","../interaction_handler/InteractionHandler.mjs":"g9nQu","../response/ResponseHandler.mjs":"4YI3v","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Pw1B":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StandardInteractionClient", ()=>StandardInteractionClient);
var _msalCommon = require("@azure/msal-common");
var _baseInteractionClientMjs = require("./BaseInteractionClient.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _packageMetadataMjs = require("../packageMetadata.mjs");
var _browserUtilsMjs = require("../utils/BrowserUtils.mjs");
var _pkceGeneratorMjs = require("../crypto/PkceGenerator.mjs");
var _browserCryptoMjs = require("../crypto/BrowserCrypto.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Defines the class structure and helper functions used by the "standard", non-brokered auth flows (popup, redirect, silent (RT), silent (iframe))
 */ class StandardInteractionClient extends (0, _baseInteractionClientMjs.BaseInteractionClient) {
    /**
     * Generates an auth code request tied to the url request.
     * @param request
     */ async initializeAuthorizationCodeRequest(request) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).StandardInteractionClientInitializeAuthorizationCodeRequest, this.correlationId);
        const generatedPkceParams = await (0, _msalCommon.invokeAsync)((0, _pkceGeneratorMjs.generatePkceCodes), (0, _msalCommon.PerformanceEvents).GeneratePkceCodes, this.logger, this.performanceClient, this.correlationId)(this.performanceClient, this.logger, this.correlationId);
        const authCodeRequest = {
            ...request,
            redirectUri: request.redirectUri,
            code: (0, _msalCommon.Constants).EMPTY_STRING,
            codeVerifier: generatedPkceParams.verifier
        };
        request.codeChallenge = generatedPkceParams.challenge;
        request.codeChallengeMethod = (0, _msalCommon.Constants).S256_CODE_CHALLENGE_METHOD;
        return authCodeRequest;
    }
    /**
     * Initializer for the logout request.
     * @param logoutRequest
     */ initializeLogoutRequest(logoutRequest) {
        this.logger.verbose("initializeLogoutRequest called", logoutRequest?.correlationId);
        const validLogoutRequest = {
            correlationId: this.correlationId || (0, _browserCryptoMjs.createNewGuid)(),
            ...logoutRequest
        };
        /**
         * Set logout_hint to be login_hint from ID Token Claims if present
         * and logoutHint attribute wasn't manually set in logout request
         */ if (logoutRequest) {
            // If logoutHint isn't set and an account was passed in, try to extract logoutHint from ID Token Claims
            if (!logoutRequest.logoutHint) {
                if (logoutRequest.account) {
                    const logoutHint = this.getLogoutHintFromIdTokenClaims(logoutRequest.account);
                    if (logoutHint) {
                        this.logger.verbose("Setting logoutHint to login_hint ID Token Claim value for the account provided");
                        validLogoutRequest.logoutHint = logoutHint;
                    }
                } else this.logger.verbose("logoutHint was not set and account was not passed into logout request, logoutHint will not be set");
            } else this.logger.verbose("logoutHint has already been set in logoutRequest");
        } else this.logger.verbose("logoutHint will not be set since no logout request was configured");
        /*
         * Only set redirect uri if logout request isn't provided or the set uri isn't null.
         * Otherwise, use passed uri, config, or current page.
         */ if (!logoutRequest || logoutRequest.postLogoutRedirectUri !== null) {
            if (logoutRequest && logoutRequest.postLogoutRedirectUri) {
                this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", validLogoutRequest.correlationId);
                validLogoutRequest.postLogoutRedirectUri = (0, _msalCommon.UrlString).getAbsoluteUrl(logoutRequest.postLogoutRedirectUri, (0, _browserUtilsMjs.getCurrentUri)());
            } else if (this.config.auth.postLogoutRedirectUri === null) this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", validLogoutRequest.correlationId);
            else if (this.config.auth.postLogoutRedirectUri) {
                this.logger.verbose("Setting postLogoutRedirectUri to configured uri", validLogoutRequest.correlationId);
                validLogoutRequest.postLogoutRedirectUri = (0, _msalCommon.UrlString).getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, (0, _browserUtilsMjs.getCurrentUri)());
            } else {
                this.logger.verbose("Setting postLogoutRedirectUri to current page", validLogoutRequest.correlationId);
                validLogoutRequest.postLogoutRedirectUri = (0, _msalCommon.UrlString).getAbsoluteUrl((0, _browserUtilsMjs.getCurrentUri)(), (0, _browserUtilsMjs.getCurrentUri)());
            }
        } else this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", validLogoutRequest.correlationId);
        return validLogoutRequest;
    }
    /**
     * Parses login_hint ID Token Claim out of AccountInfo object to be used as
     * logout_hint in end session request.
     * @param account
     */ getLogoutHintFromIdTokenClaims(account) {
        const idTokenClaims = account.idTokenClaims;
        if (idTokenClaims) {
            if (idTokenClaims.login_hint) return idTokenClaims.login_hint;
            else this.logger.verbose("The ID Token Claims tied to the provided account do not contain a login_hint claim, logoutHint will not be added to logout request");
        } else this.logger.verbose("The provided account does not contain ID Token Claims, logoutHint will not be added to logout request");
        return null;
    }
    /**
     * Creates an Authorization Code Client with the given authority, or the default authority.
     * @param serverTelemetryManager
     * @param authorityUrl
     */ async createAuthCodeClient(serverTelemetryManager, authorityUrl, requestAzureCloudOptions, account) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).StandardInteractionClientCreateAuthCodeClient, this.correlationId);
        // Create auth module.
        const clientConfig = await (0, _msalCommon.invokeAsync)(this.getClientConfiguration.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, authorityUrl, requestAzureCloudOptions, account);
        return new (0, _msalCommon.AuthorizationCodeClient)(clientConfig, this.performanceClient);
    }
    /**
     * Creates a Client Configuration object with the given request authority, or the default authority.
     * @param serverTelemetryManager
     * @param requestAuthority
     * @param requestCorrelationId
     */ async getClientConfiguration(serverTelemetryManager, requestAuthority, requestAzureCloudOptions, account) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).StandardInteractionClientGetClientConfiguration, this.correlationId);
        const discoveredAuthority = await (0, _msalCommon.invokeAsync)(this.getDiscoveredAuthority.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, this.correlationId)(requestAuthority, requestAzureCloudOptions, account);
        const logger = this.config.system.loggerOptions;
        return {
            authOptions: {
                clientId: this.config.auth.clientId,
                authority: discoveredAuthority,
                clientCapabilities: this.config.auth.clientCapabilities
            },
            systemOptions: {
                tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
                preventCorsPreflight: true
            },
            loggerOptions: {
                loggerCallback: logger.loggerCallback,
                piiLoggingEnabled: logger.piiLoggingEnabled,
                logLevel: logger.logLevel,
                correlationId: this.correlationId
            },
            cacheOptions: {
                claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled
            },
            cryptoInterface: this.browserCrypto,
            networkInterface: this.networkClient,
            storageInterface: this.browserStorage,
            serverTelemetryManager: serverTelemetryManager,
            libraryInfo: {
                sku: (0, _browserConstantsMjs.BrowserConstants).MSAL_SKU,
                version: (0, _packageMetadataMjs.version),
                cpu: (0, _msalCommon.Constants).EMPTY_STRING,
                os: (0, _msalCommon.Constants).EMPTY_STRING
            },
            telemetry: this.config.telemetry
        };
    }
    /**
     * Helper to initialize required request parameters for interactive APIs and ssoSilent()
     * @param request
     * @param interactionType
     */ async initializeAuthorizationRequest(request, interactionType) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).StandardInteractionClientInitializeAuthorizationRequest, this.correlationId);
        const redirectUri = this.getRedirectUri(request.redirectUri);
        const browserState = {
            interactionType: interactionType
        };
        const state = (0, _msalCommon.ProtocolUtils).setRequestState(this.browserCrypto, request && request.state || (0, _msalCommon.Constants).EMPTY_STRING, browserState);
        const baseRequest = await (0, _msalCommon.invokeAsync)(this.initializeBaseRequest.bind(this), (0, _msalCommon.PerformanceEvents).InitializeBaseRequest, this.logger, this.performanceClient, this.correlationId)(request);
        const validatedRequest = {
            ...baseRequest,
            redirectUri: redirectUri,
            state: state,
            nonce: request.nonce || (0, _browserCryptoMjs.createNewGuid)(),
            responseMode: this.config.auth.OIDCOptions.serverResponseType
        };
        const account = request.account || this.browserStorage.getActiveAccount();
        if (account) {
            this.logger.verbose("Setting validated request account", this.correlationId);
            this.logger.verbosePii(`Setting validated request account: ${account.homeAccountId}`, this.correlationId);
            validatedRequest.account = account;
        }
        // Check for ADAL/MSAL v1 SSO
        if (!validatedRequest.loginHint && !account) {
            const legacyLoginHint = this.browserStorage.getLegacyLoginHint();
            if (legacyLoginHint) validatedRequest.loginHint = legacyLoginHint;
        }
        return validatedRequest;
    }
}

},{"@azure/msal-common":"rNWNa","./BaseInteractionClient.mjs":"1Ze6T","../utils/BrowserConstants.mjs":"izeV4","../packageMetadata.mjs":"1oQUJ","../utils/BrowserUtils.mjs":"7ahCa","../crypto/PkceGenerator.mjs":"1Ew7i","../crypto/BrowserCrypto.mjs":"foGbR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Ze6T":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseInteractionClient", ()=>BaseInteractionClient);
var _msalCommon = require("@azure/msal-common");
var _packageMetadataMjs = require("../packageMetadata.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _browserUtilsMjs = require("../utils/BrowserUtils.mjs");
var _browserCryptoMjs = require("../crypto/BrowserCrypto.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class BaseInteractionClient {
    constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId){
        this.config = config;
        this.browserStorage = storageImpl;
        this.browserCrypto = browserCrypto;
        this.networkClient = this.config.system.networkClient;
        this.eventHandler = eventHandler;
        this.navigationClient = navigationClient;
        this.nativeMessageHandler = nativeMessageHandler;
        this.correlationId = correlationId || (0, _browserCryptoMjs.createNewGuid)();
        this.logger = logger.clone((0, _browserConstantsMjs.BrowserConstants).MSAL_SKU, (0, _packageMetadataMjs.version), this.correlationId);
        this.performanceClient = performanceClient;
    }
    async clearCacheOnLogout(account) {
        if (account) {
            if ((0, _msalCommon.AccountEntity).accountInfoIsEqual(account, this.browserStorage.getActiveAccount(), false)) {
                this.logger.verbose("Setting active account to null");
                this.browserStorage.setActiveAccount(null);
            }
            // Clear given account.
            try {
                await this.browserStorage.removeAccount((0, _msalCommon.AccountEntity).generateAccountCacheKey(account));
                this.logger.verbose("Cleared cache items belonging to the account provided in the logout request.");
            } catch (error) {
                this.logger.error("Account provided in logout request was not found. Local cache unchanged.");
            }
        } else try {
            this.logger.verbose("No account provided in logout request, clearing all cache items.", this.correlationId);
            // Clear all accounts and tokens
            await this.browserStorage.clear();
            // Clear any stray keys from IndexedDB
            await this.browserCrypto.clearKeystore();
        } catch (e) {
            this.logger.error("Attempted to clear all MSAL cache items and failed. Local cache unchanged.");
        }
    }
    /**
     * Initializer function for all request APIs
     * @param request
     */ async initializeBaseRequest(request) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).InitializeBaseRequest, this.correlationId);
        const authority = request.authority || this.config.auth.authority;
        const scopes = [
            ...request && request.scopes || []
        ];
        const validatedRequest = {
            ...request,
            correlationId: this.correlationId,
            authority,
            scopes
        };
        // Set authenticationScheme to BEARER if not explicitly set in the request
        if (!validatedRequest.authenticationScheme) {
            validatedRequest.authenticationScheme = (0, _msalCommon.AuthenticationScheme).BEARER;
            this.logger.verbose('Authentication Scheme wasn\'t explicitly set in request, defaulting to "Bearer" request');
        } else {
            if (validatedRequest.authenticationScheme === (0, _msalCommon.AuthenticationScheme).SSH) {
                if (!request.sshJwk) throw (0, _msalCommon.createClientConfigurationError)((0, _msalCommon.ClientConfigurationErrorCodes).missingSshJwk);
                if (!request.sshKid) throw (0, _msalCommon.createClientConfigurationError)((0, _msalCommon.ClientConfigurationErrorCodes).missingSshKid);
            }
            this.logger.verbose(`Authentication Scheme set to "${validatedRequest.authenticationScheme}" as configured in Auth request`);
        }
        // Set requested claims hash if claims-based caching is enabled and claims were requested
        if (this.config.cache.claimsBasedCachingEnabled && request.claims && // Checks for empty stringified object "{}" which doesn't qualify as requested claims
        !(0, _msalCommon.StringUtils).isEmptyObj(request.claims)) validatedRequest.requestedClaimsHash = await this.browserCrypto.hashString(request.claims);
        return validatedRequest;
    }
    /**
     *
     * Use to get the redirect uri configured in MSAL or null.
     * @param requestRedirectUri
     * @returns Redirect URL
     *
     */ getRedirectUri(requestRedirectUri) {
        this.logger.verbose("getRedirectUri called");
        const redirectUri = requestRedirectUri || this.config.auth.redirectUri || (0, _browserUtilsMjs.getCurrentUri)();
        return (0, _msalCommon.UrlString).getAbsoluteUrl(redirectUri, (0, _browserUtilsMjs.getCurrentUri)());
    }
    /**
     *
     * @param apiId
     * @param correlationId
     * @param forceRefresh
     */ initializeServerTelemetryManager(apiId, forceRefresh) {
        this.logger.verbose("initializeServerTelemetryManager called");
        const telemetryPayload = {
            clientId: this.config.auth.clientId,
            correlationId: this.correlationId,
            apiId: apiId,
            forceRefresh: forceRefresh || false,
            wrapperSKU: this.browserStorage.getWrapperMetadata()[0],
            wrapperVer: this.browserStorage.getWrapperMetadata()[1]
        };
        return new (0, _msalCommon.ServerTelemetryManager)(telemetryPayload, this.browserStorage);
    }
    /**
     * Used to get a discovered version of the default authority.
     * @param requestAuthority
     * @param requestAzureCloudOptions
     * @param account
     */ async getDiscoveredAuthority(requestAuthority, requestAzureCloudOptions, account) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).StandardInteractionClientGetDiscoveredAuthority, this.correlationId);
        const authorityOptions = {
            protocolMode: this.config.auth.protocolMode,
            OIDCOptions: this.config.auth.OIDCOptions,
            knownAuthorities: this.config.auth.knownAuthorities,
            cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
            authorityMetadata: this.config.auth.authorityMetadata,
            skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
        };
        // build authority string based on auth params, precedence - azureCloudInstance + tenant >> authority
        const userAuthority = requestAuthority ? requestAuthority : this.config.auth.authority;
        // fall back to the authority from config
        const builtAuthority = (0, _msalCommon.Authority).generateAuthority(userAuthority, requestAzureCloudOptions || this.config.auth.azureCloudOptions);
        const discoveredAuthority = await (0, _msalCommon.invokeAsync)((0, _msalCommon.AuthorityFactory).createDiscoveredInstance, (0, _msalCommon.PerformanceEvents).AuthorityFactoryCreateDiscoveredInstance, this.logger, this.performanceClient, this.correlationId)(builtAuthority, this.config.system.networkClient, this.browserStorage, authorityOptions, this.logger, this.correlationId, this.performanceClient);
        if (account && !discoveredAuthority.isAlias(account.environment)) throw (0, _msalCommon.createClientConfigurationError)((0, _msalCommon.ClientConfigurationErrorCodes).authorityMismatch);
        return discoveredAuthority;
    }
}

},{"@azure/msal-common":"rNWNa","../packageMetadata.mjs":"1oQUJ","../utils/BrowserConstants.mjs":"izeV4","../utils/BrowserUtils.mjs":"7ahCa","../crypto/BrowserCrypto.mjs":"foGbR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Ew7i":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generatePkceCodes", ()=>generatePkceCodes);
var _msalCommon = require("@azure/msal-common");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _base64EncodeMjs = require("../encode/Base64Encode.mjs");
var _browserCryptoMjs = require("./BrowserCrypto.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ // Constant byte array length
const RANDOM_BYTE_ARR_LENGTH = 32;
/**
 * This file defines APIs to generate PKCE codes and code verifiers.
 */ /**
 * Generates PKCE Codes. See the RFC for more information: https://tools.ietf.org/html/rfc7636
 */ async function generatePkceCodes(performanceClient, logger, correlationId) {
    performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).GeneratePkceCodes, correlationId);
    const codeVerifier = (0, _msalCommon.invoke)(generateCodeVerifier, (0, _msalCommon.PerformanceEvents).GenerateCodeVerifier, logger, performanceClient, correlationId)(performanceClient, logger, correlationId);
    const codeChallenge = await (0, _msalCommon.invokeAsync)(generateCodeChallengeFromVerifier, (0, _msalCommon.PerformanceEvents).GenerateCodeChallengeFromVerifier, logger, performanceClient, correlationId)(codeVerifier, performanceClient, logger, correlationId);
    return {
        verifier: codeVerifier,
        challenge: codeChallenge
    };
}
/**
 * Generates a random 32 byte buffer and returns the base64
 * encoded string to be used as a PKCE Code Verifier
 */ function generateCodeVerifier(performanceClient, logger, correlationId) {
    try {
        // Generate random values as utf-8
        const buffer = new Uint8Array(RANDOM_BYTE_ARR_LENGTH);
        (0, _msalCommon.invoke)((0, _browserCryptoMjs.getRandomValues), (0, _msalCommon.PerformanceEvents).GetRandomValues, logger, performanceClient, correlationId)(buffer);
        // encode verifier as base64
        const pkceCodeVerifierB64 = (0, _base64EncodeMjs.urlEncodeArr)(buffer);
        return pkceCodeVerifierB64;
    } catch (e) {
        throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.pkceNotCreated));
    }
}
/**
 * Creates a base64 encoded PKCE Code Challenge string from the
 * hash created from the PKCE Code Verifier supplied
 */ async function generateCodeChallengeFromVerifier(pkceCodeVerifier, performanceClient, logger, correlationId) {
    performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).GenerateCodeChallengeFromVerifier, correlationId);
    try {
        // hashed verifier
        const pkceHashedCodeVerifier = await (0, _msalCommon.invokeAsync)((0, _browserCryptoMjs.sha256Digest), (0, _msalCommon.PerformanceEvents).Sha256Digest, logger, performanceClient, correlationId)(pkceCodeVerifier, performanceClient, correlationId);
        // encode hash as base64
        return (0, _base64EncodeMjs.urlEncodeArr)(new Uint8Array(pkceHashedCodeVerifier));
    } catch (e) {
        throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.pkceNotCreated));
    }
}

},{"@azure/msal-common":"rNWNa","../error/BrowserAuthError.mjs":"hI9Lm","../encode/Base64Encode.mjs":"9M5y6","./BrowserCrypto.mjs":"foGbR","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bOcEE":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NativeInteractionClient", ()=>NativeInteractionClient);
var _msalCommon = require("@azure/msal-common");
var _baseInteractionClientMjs = require("./BaseInteractionClient.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _nativeAuthErrorMjs = require("../error/NativeAuthError.mjs");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _silentCacheClientMjs = require("./SilentCacheClient.mjs");
var _base64DecodeMjs = require("../encode/Base64Decode.mjs");
var _nativeAuthErrorCodesMjs = require("../error/NativeAuthErrorCodes.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const BrokerServerParamKeys = {
    BROKER_CLIENT_ID: "brk_client_id",
    BROKER_REDIRECT_URI: "brk_redirect_uri"
};
class NativeInteractionClient extends (0, _baseInteractionClientMjs.BaseInteractionClient) {
    constructor(config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, provider, accountId, nativeStorageImpl, correlationId){
        super(config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, performanceClient, provider, correlationId);
        this.apiId = apiId;
        this.accountId = accountId;
        this.nativeMessageHandler = provider;
        this.nativeStorageManager = nativeStorageImpl;
        this.silentCacheClient = new (0, _silentCacheClientMjs.SilentCacheClient)(config, this.nativeStorageManager, browserCrypto, logger, eventHandler, navigationClient, performanceClient, provider, correlationId);
    }
    /**
     * Acquire token from native platform via browser extension
     * @param request
     */ async acquireToken(request) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).NativeInteractionClientAcquireToken, request.correlationId);
        this.logger.trace("NativeInteractionClient - acquireToken called.");
        // start the perf measurement
        const nativeATMeasurement = this.performanceClient.startMeasurement((0, _msalCommon.PerformanceEvents).NativeInteractionClientAcquireToken, request.correlationId);
        const reqTimestamp = (0, _msalCommon.TimeUtils).nowSeconds();
        // initialize native request
        const nativeRequest = await this.initializeNativeRequest(request);
        // check if the tokens can be retrieved from internal cache
        try {
            const result = await this.acquireTokensFromCache(this.accountId, nativeRequest);
            nativeATMeasurement.end({
                success: true,
                isNativeBroker: false,
                fromCache: true
            });
            return result;
        } catch (e) {
            // continue with a native call for any and all errors
            this.logger.info("MSAL internal Cache does not contain tokens, proceed to make a native call");
        }
        // fall back to native calls
        const messageBody = {
            method: (0, _browserConstantsMjs.NativeExtensionMethod).GetToken,
            request: nativeRequest
        };
        const response = await this.nativeMessageHandler.sendMessage(messageBody);
        const validatedResponse = this.validateNativeResponse(response);
        return this.handleNativeResponse(validatedResponse, nativeRequest, reqTimestamp).then((result)=>{
            nativeATMeasurement.end({
                success: true,
                isNativeBroker: true,
                requestId: result.requestId
            });
            return result;
        }).catch((error)=>{
            nativeATMeasurement.end({
                success: false,
                errorCode: error.errorCode,
                subErrorCode: error.subError,
                isNativeBroker: true
            });
            throw error;
        });
    }
    /**
     * Creates silent flow request
     * @param request
     * @param cachedAccount
     * @returns CommonSilentFlowRequest
     */ createSilentCacheRequest(request, cachedAccount) {
        return {
            authority: request.authority,
            correlationId: this.correlationId,
            scopes: (0, _msalCommon.ScopeSet).fromString(request.scope).asArray(),
            account: cachedAccount,
            forceRefresh: false
        };
    }
    /**
     * Fetches the tokens from the cache if un-expired
     * @param nativeAccountId
     * @param request
     * @returns authenticationResult
     */ async acquireTokensFromCache(nativeAccountId, request) {
        if (!nativeAccountId) {
            this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided");
            throw (0, _msalCommon.createClientAuthError)((0, _msalCommon.ClientAuthErrorCodes).noAccountFound);
        }
        // fetch the account from browser cache
        const account = this.browserStorage.getBaseAccountInfo({
            nativeAccountId
        });
        if (!account) throw (0, _msalCommon.createClientAuthError)((0, _msalCommon.ClientAuthErrorCodes).noAccountFound);
        // leverage silent flow for cached tokens retrieval
        try {
            const silentRequest = this.createSilentCacheRequest(request, account);
            const result = await this.silentCacheClient.acquireToken(silentRequest);
            const fullAccount = {
                ...account,
                idTokenClaims: result?.idTokenClaims,
                idToken: result?.idToken
            };
            return {
                ...result,
                account: fullAccount
            };
        } catch (e) {
            throw e;
        }
    }
    /**
     * Acquires a token from native platform then redirects to the redirectUri instead of returning the response
     * @param request
     */ async acquireTokenRedirect(request) {
        this.logger.trace("NativeInteractionClient - acquireTokenRedirect called.");
        const nativeRequest = await this.initializeNativeRequest(request);
        const messageBody = {
            method: (0, _browserConstantsMjs.NativeExtensionMethod).GetToken,
            request: nativeRequest
        };
        try {
            const response = await this.nativeMessageHandler.sendMessage(messageBody);
            this.validateNativeResponse(response);
        } catch (e) {
            // Only throw fatal errors here to allow application to fallback to regular redirect. Otherwise proceed and the error will be thrown in handleRedirectPromise
            if (e instanceof (0, _nativeAuthErrorMjs.NativeAuthError) && (0, _nativeAuthErrorMjs.isFatalNativeAuthError)(e)) throw e;
        }
        this.browserStorage.setTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).NATIVE_REQUEST, JSON.stringify(nativeRequest), true);
        const navigationOptions = {
            apiId: (0, _browserConstantsMjs.ApiId).acquireTokenRedirect,
            timeout: this.config.system.redirectNavigationTimeout,
            noHistory: false
        };
        const redirectUri = this.config.auth.navigateToLoginRequestUrl ? window.location.href : this.getRedirectUri(request.redirectUri);
        await this.navigationClient.navigateExternal(redirectUri, navigationOptions); // Need to treat this as external to ensure handleRedirectPromise is run again
    }
    /**
     * If the previous page called native platform for a token using redirect APIs, send the same request again and return the response
     * @param performanceClient {IPerformanceClient?}
     * @param correlationId {string?} correlation identifier
     */ async handleRedirectPromise(performanceClient, correlationId) {
        this.logger.trace("NativeInteractionClient - handleRedirectPromise called.");
        if (!this.browserStorage.isInteractionInProgress(true)) {
            this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
            return null;
        }
        // remove prompt from the request to prevent WAM from prompting twice
        const cachedRequest = this.browserStorage.getCachedNativeRequest();
        if (!cachedRequest) {
            this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null.");
            if (performanceClient && correlationId) performanceClient?.addFields({
                errorCode: "no_cached_request"
            }, correlationId);
            return null;
        }
        const { prompt, ...request } = cachedRequest;
        if (prompt) this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window.");
        this.browserStorage.removeItem(this.browserStorage.generateCacheKey((0, _browserConstantsMjs.TemporaryCacheKeys).NATIVE_REQUEST));
        const messageBody = {
            method: (0, _browserConstantsMjs.NativeExtensionMethod).GetToken,
            request: request
        };
        const reqTimestamp = (0, _msalCommon.TimeUtils).nowSeconds();
        try {
            this.logger.verbose("NativeInteractionClient - handleRedirectPromise sending message to native broker.");
            const response = await this.nativeMessageHandler.sendMessage(messageBody);
            this.validateNativeResponse(response);
            const result = this.handleNativeResponse(response, request, reqTimestamp);
            this.browserStorage.setInteractionInProgress(false);
            return await result;
        } catch (e) {
            this.browserStorage.setInteractionInProgress(false);
            throw e;
        }
    }
    /**
     * Logout from native platform via browser extension
     * @param request
     */ logout() {
        this.logger.trace("NativeInteractionClient - logout called.");
        return Promise.reject("Logout not implemented yet");
    }
    /**
     * Transform response from native platform into AuthenticationResult object which will be returned to the end user
     * @param response
     * @param request
     * @param reqTimestamp
     */ async handleNativeResponse(response, request, reqTimestamp) {
        this.logger.trace("NativeInteractionClient - handleNativeResponse called.");
        // generate identifiers
        const idTokenClaims = (0, _msalCommon.AuthToken).extractTokenClaims(response.id_token, (0, _base64DecodeMjs.base64Decode));
        const homeAccountIdentifier = this.createHomeAccountIdentifier(response, idTokenClaims);
        const cachedhomeAccountId = this.browserStorage.getAccountInfoFilteredBy({
            nativeAccountId: request.accountId
        })?.homeAccountId;
        if (homeAccountIdentifier !== cachedhomeAccountId && response.account.id !== request.accountId) // User switch in native broker prompt is not supported. All users must first sign in through web flow to ensure server state is in sync
        throw (0, _nativeAuthErrorMjs.createNativeAuthError)((0, _nativeAuthErrorCodesMjs.userSwitch));
        // Get the preferred_cache domain for the given authority
        const authority = await this.getDiscoveredAuthority(request.authority);
        const baseAccount = (0, _msalCommon.buildAccountToCache)(this.browserStorage, authority, homeAccountIdentifier, idTokenClaims, (0, _base64DecodeMjs.base64Decode), response.client_info, undefined, idTokenClaims.tid, undefined, response.account.id, this.logger);
        // generate authenticationResult
        const result = await this.generateAuthenticationResult(response, request, idTokenClaims, baseAccount, authority.canonicalAuthority, reqTimestamp);
        // cache accounts and tokens in the appropriate storage
        this.cacheAccount(baseAccount);
        this.cacheNativeTokens(response, request, homeAccountIdentifier, idTokenClaims, result.accessToken, result.tenantId, reqTimestamp);
        return result;
    }
    /**
     * creates an homeAccountIdentifier for the account
     * @param response
     * @param idTokenObj
     * @returns
     */ createHomeAccountIdentifier(response, idTokenClaims) {
        // Save account in browser storage
        const homeAccountIdentifier = (0, _msalCommon.AccountEntity).generateHomeAccountId(response.client_info || (0, _msalCommon.Constants).EMPTY_STRING, (0, _msalCommon.AuthorityType).Default, this.logger, this.browserCrypto, idTokenClaims);
        return homeAccountIdentifier;
    }
    /**
     * Helper to generate scopes
     * @param response
     * @param request
     * @returns
     */ generateScopes(response, request) {
        return response.scope ? (0, _msalCommon.ScopeSet).fromString(response.scope) : (0, _msalCommon.ScopeSet).fromString(request.scope);
    }
    /**
     * If PoP token is requesred, records the PoP token if returned from the WAM, else generates one in the browser
     * @param request
     * @param response
     */ async generatePopAccessToken(response, request) {
        if (request.tokenType === (0, _msalCommon.AuthenticationScheme).POP) {
            /**
             * This code prioritizes SHR returned from the native layer. In case of error/SHR not calculated from WAM and the AT
             * is still received, SHR is calculated locally
             */ // Check if native layer returned an SHR token
            if (response.shr) {
                this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer");
                return response.shr;
            }
            // Generate SHR in msal js if WAM does not compute it when POP is enabled
            const popTokenGenerator = new (0, _msalCommon.PopTokenGenerator)(this.browserCrypto);
            const shrParameters = {
                resourceRequestMethod: request.resourceRequestMethod,
                resourceRequestUri: request.resourceRequestUri,
                shrClaims: request.shrClaims,
                shrNonce: request.shrNonce
            };
            /**
             * KeyID must be present in the native request from when the PoP key was generated in order for
             * PopTokenGenerator to query the full key for signing
             */ if (!request.keyId) throw (0, _msalCommon.createClientAuthError)((0, _msalCommon.ClientAuthErrorCodes).keyIdMissing);
            return popTokenGenerator.signPopToken(response.access_token, request.keyId, shrParameters);
        } else return response.access_token;
    }
    /**
     * Generates authentication result
     * @param response
     * @param request
     * @param idTokenObj
     * @param accountEntity
     * @param authority
     * @param reqTimestamp
     * @returns
     */ async generateAuthenticationResult(response, request, idTokenClaims, accountEntity, authority, reqTimestamp) {
        // Add Native Broker fields to Telemetry
        const mats = this.addTelemetryFromNativeResponse(response);
        // If scopes not returned in server response, use request scopes
        const responseScopes = response.scope ? (0, _msalCommon.ScopeSet).fromString(response.scope) : (0, _msalCommon.ScopeSet).fromString(request.scope);
        const accountProperties = response.account.properties || {};
        const uid = accountProperties["UID"] || idTokenClaims.oid || idTokenClaims.sub || (0, _msalCommon.Constants).EMPTY_STRING;
        const tid = accountProperties["TenantId"] || idTokenClaims.tid || (0, _msalCommon.Constants).EMPTY_STRING;
        const accountInfo = (0, _msalCommon.updateAccountTenantProfileData)(accountEntity.getAccountInfo(), undefined, idTokenClaims, response.id_token);
        /**
         * In pairwise broker flows, this check prevents the broker's native account id
         * from being returned over the embedded app's account id.
         */ if (accountInfo.nativeAccountId !== response.account.id) accountInfo.nativeAccountId = response.account.id;
        // generate PoP token as needed
        const responseAccessToken = await this.generatePopAccessToken(response, request);
        const tokenType = request.tokenType === (0, _msalCommon.AuthenticationScheme).POP ? (0, _msalCommon.AuthenticationScheme).POP : (0, _msalCommon.AuthenticationScheme).BEARER;
        const result = {
            authority: authority,
            uniqueId: uid,
            tenantId: tid,
            scopes: responseScopes.asArray(),
            account: accountInfo,
            idToken: response.id_token,
            idTokenClaims: idTokenClaims,
            accessToken: responseAccessToken,
            fromCache: mats ? this.isResponseFromCache(mats) : false,
            expiresOn: new Date(Number(reqTimestamp + response.expires_in) * 1000),
            tokenType: tokenType,
            correlationId: this.correlationId,
            state: response.state,
            fromNativeBroker: true
        };
        return result;
    }
    /**
     * cache the account entity in browser storage
     * @param accountEntity
     */ cacheAccount(accountEntity) {
        // Store the account info and hence `nativeAccountId` in browser cache
        this.browserStorage.setAccount(accountEntity);
        // Remove any existing cached tokens for this account in browser storage
        this.browserStorage.removeAccountContext(accountEntity).catch((e)=>{
            this.logger.error(`Error occurred while removing account context from browser storage. ${e}`);
        });
    }
    /**
     * Stores the access_token and id_token in inmemory storage
     * @param response
     * @param request
     * @param homeAccountIdentifier
     * @param idTokenObj
     * @param responseAccessToken
     * @param tenantId
     * @param reqTimestamp
     */ cacheNativeTokens(response, request, homeAccountIdentifier, idTokenClaims, responseAccessToken, tenantId, reqTimestamp) {
        const cachedIdToken = (0, _msalCommon.CacheHelpers).createIdTokenEntity(homeAccountIdentifier, request.authority, response.id_token || "", request.clientId, idTokenClaims.tid || "");
        // cache accessToken in inmemory storage
        const expiresIn = request.tokenType === (0, _msalCommon.AuthenticationScheme).POP ? (0, _msalCommon.Constants).SHR_NONCE_VALIDITY : (typeof response.expires_in === "string" ? parseInt(response.expires_in, 10) : response.expires_in) || 0;
        const tokenExpirationSeconds = reqTimestamp + expiresIn;
        const responseScopes = this.generateScopes(response, request);
        const cachedAccessToken = (0, _msalCommon.CacheHelpers).createAccessTokenEntity(homeAccountIdentifier, request.authority, responseAccessToken, request.clientId, idTokenClaims.tid || tenantId, responseScopes.printScopes(), tokenExpirationSeconds, 0, (0, _base64DecodeMjs.base64Decode));
        const nativeCacheRecord = new (0, _msalCommon.CacheRecord)(undefined, cachedIdToken, cachedAccessToken);
        this.nativeStorageManager.saveCacheRecord(nativeCacheRecord, request.storeInCache);
    }
    addTelemetryFromNativeResponse(response) {
        const mats = this.getMATSFromResponse(response);
        if (!mats) return null;
        this.performanceClient.addFields({
            extensionId: this.nativeMessageHandler.getExtensionId(),
            extensionVersion: this.nativeMessageHandler.getExtensionVersion(),
            matsBrokerVersion: mats.broker_version,
            matsAccountJoinOnStart: mats.account_join_on_start,
            matsAccountJoinOnEnd: mats.account_join_on_end,
            matsDeviceJoin: mats.device_join,
            matsPromptBehavior: mats.prompt_behavior,
            matsApiErrorCode: mats.api_error_code,
            matsUiVisible: mats.ui_visible,
            matsSilentCode: mats.silent_code,
            matsSilentBiSubCode: mats.silent_bi_sub_code,
            matsSilentMessage: mats.silent_message,
            matsSilentStatus: mats.silent_status,
            matsHttpStatus: mats.http_status,
            matsHttpEventCount: mats.http_event_count
        }, this.correlationId);
        return mats;
    }
    /**
     * Validates native platform response before processing
     * @param response
     */ validateNativeResponse(response) {
        if (response.hasOwnProperty("access_token") && response.hasOwnProperty("id_token") && response.hasOwnProperty("client_info") && response.hasOwnProperty("account") && response.hasOwnProperty("scope") && response.hasOwnProperty("expires_in")) return response;
        else throw (0, _msalCommon.createAuthError)((0, _msalCommon.AuthErrorCodes).unexpectedError, "Response missing expected properties.");
    }
    /**
     * Gets MATS telemetry from native response
     * @param response
     * @returns
     */ getMATSFromResponse(response) {
        if (response.properties.MATS) try {
            return JSON.parse(response.properties.MATS);
        } catch (e) {
            this.logger.error("NativeInteractionClient - Error parsing MATS telemetry, returning null instead");
        }
        return null;
    }
    /**
     * Returns whether or not response came from native cache
     * @param response
     * @returns
     */ isResponseFromCache(mats) {
        if (typeof mats.is_cached === "undefined") {
            this.logger.verbose("NativeInteractionClient - MATS telemetry does not contain field indicating if response was served from cache. Returning false.");
            return false;
        }
        return !!mats.is_cached;
    }
    /**
     * Translates developer provided request object into NativeRequest object
     * @param request
     */ async initializeNativeRequest(request) {
        this.logger.trace("NativeInteractionClient - initializeNativeRequest called");
        const authority = request.authority || this.config.auth.authority;
        if (request.account) // validate authority
        await this.getDiscoveredAuthority(authority, request.azureCloudOptions, request.account);
        const canonicalAuthority = new (0, _msalCommon.UrlString)(authority);
        canonicalAuthority.validateAsUri();
        // scopes are expected to be received by the native broker as "scope" and will be added to the request below. Other properties that should be dropped from the request to the native broker can be included in the object destructuring here.
        const { scopes, ...remainingProperties } = request;
        const scopeSet = new (0, _msalCommon.ScopeSet)(scopes || []);
        scopeSet.appendScopes((0, _msalCommon.OIDC_DEFAULT_SCOPES));
        const getPrompt = ()=>{
            // If request is silent, prompt is always none
            switch(this.apiId){
                case (0, _browserConstantsMjs.ApiId).ssoSilent:
                case (0, _browserConstantsMjs.ApiId).acquireTokenSilent_silentFlow:
                    this.logger.trace("initializeNativeRequest: silent request sets prompt to none");
                    return (0, _msalCommon.PromptValue).NONE;
            }
            // Prompt not provided, request may proceed and native broker decides if it needs to prompt
            if (!request.prompt) {
                this.logger.trace("initializeNativeRequest: prompt was not provided");
                return undefined;
            }
            // If request is interactive, check if prompt provided is allowed to go directly to native broker
            switch(request.prompt){
                case (0, _msalCommon.PromptValue).NONE:
                case (0, _msalCommon.PromptValue).CONSENT:
                case (0, _msalCommon.PromptValue).LOGIN:
                    this.logger.trace("initializeNativeRequest: prompt is compatible with native flow");
                    return request.prompt;
                default:
                    this.logger.trace(`initializeNativeRequest: prompt = ${request.prompt} is not compatible with native flow`);
                    throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.nativePromptNotSupported));
            }
        };
        const validatedRequest = {
            ...remainingProperties,
            accountId: this.accountId,
            clientId: this.config.auth.clientId,
            authority: canonicalAuthority.urlString,
            scope: scopeSet.printScopes(),
            redirectUri: this.getRedirectUri(request.redirectUri),
            prompt: getPrompt(),
            correlationId: this.correlationId,
            tokenType: request.authenticationScheme,
            windowTitleSubstring: document.title,
            extraParameters: {
                ...request.extraQueryParameters,
                ...request.tokenQueryParameters
            },
            extendedExpiryToken: false
        };
        this.handleExtraBrokerParams(validatedRequest);
        validatedRequest.extraParameters = validatedRequest.extraParameters || {};
        validatedRequest.extraParameters.telemetry = (0, _browserConstantsMjs.NativeConstants).MATS_TELEMETRY;
        if (request.authenticationScheme === (0, _msalCommon.AuthenticationScheme).POP) {
            // add POP request type
            const shrParameters = {
                resourceRequestUri: request.resourceRequestUri,
                resourceRequestMethod: request.resourceRequestMethod,
                shrClaims: request.shrClaims,
                shrNonce: request.shrNonce
            };
            const popTokenGenerator = new (0, _msalCommon.PopTokenGenerator)(this.browserCrypto);
            const reqCnfData = await (0, _msalCommon.invokeAsync)(popTokenGenerator.generateCnf.bind(popTokenGenerator), (0, _msalCommon.PerformanceEvents).PopTokenGenerateCnf, this.logger, this.performanceClient, this.correlationId)(shrParameters, this.logger);
            // to reduce the URL length, it is recommended to send the hash of the req_cnf instead of the whole string
            validatedRequest.reqCnf = reqCnfData.reqCnfHash;
            validatedRequest.keyId = reqCnfData.kid;
        }
        return validatedRequest;
    }
    /**
     * Handles extra broker request parameters
     * @param request {NativeTokenRequest}
     * @private
     */ handleExtraBrokerParams(request) {
        if (!request.extraParameters) return;
        if (request.extraParameters.hasOwnProperty(BrokerServerParamKeys.BROKER_CLIENT_ID) && request.extraParameters.hasOwnProperty(BrokerServerParamKeys.BROKER_REDIRECT_URI) && request.extraParameters.hasOwnProperty((0, _msalCommon.AADServerParamKeys).CLIENT_ID)) {
            const child_client_id = request.extraParameters[(0, _msalCommon.AADServerParamKeys).CLIENT_ID];
            const child_redirect_uri = request.redirectUri;
            const brk_redirect_uri = request.extraParameters[BrokerServerParamKeys.BROKER_REDIRECT_URI];
            request.extraParameters = {
                child_client_id,
                child_redirect_uri
            };
            request.redirectUri = brk_redirect_uri;
        }
    }
}

},{"@azure/msal-common":"rNWNa","./BaseInteractionClient.mjs":"1Ze6T","../utils/BrowserConstants.mjs":"izeV4","../error/NativeAuthError.mjs":"lxTHh","../error/BrowserAuthError.mjs":"hI9Lm","./SilentCacheClient.mjs":"6oTgG","../encode/Base64Decode.mjs":"12oz3","../error/NativeAuthErrorCodes.mjs":"iZymj","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxTHh":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NativeAuthError", ()=>NativeAuthError);
parcelHelpers.export(exports, "NativeAuthErrorMessages", ()=>NativeAuthErrorMessages);
parcelHelpers.export(exports, "createNativeAuthError", ()=>createNativeAuthError);
parcelHelpers.export(exports, "isFatalNativeAuthError", ()=>isFatalNativeAuthError);
var _msalCommon = require("@azure/msal-common");
var _browserAuthErrorMjs = require("./BrowserAuthError.mjs");
var _nativeAuthErrorCodesMjs = require("./NativeAuthErrorCodes.mjs");
var _nativeStatusCodesMjs = require("../broker/nativeBroker/NativeStatusCodes.mjs");
var _browserAuthErrorCodesMjs = require("./BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const INVALID_METHOD_ERROR = -2147186943;
const NativeAuthErrorMessages = {
    [(0, _nativeAuthErrorCodesMjs.userSwitch)]: "User attempted to switch accounts in the native broker, which is not allowed. All new accounts must sign-in through the standard web flow first, please try again."
};
class NativeAuthError extends (0, _msalCommon.AuthError) {
    constructor(errorCode, description, ext){
        super(errorCode, description);
        Object.setPrototypeOf(this, NativeAuthError.prototype);
        this.name = "NativeAuthError";
        this.ext = ext;
    }
}
/**
 * These errors should result in a fallback to the 'standard' browser based auth flow.
 */ function isFatalNativeAuthError(error) {
    if (error.ext && error.ext.status && (error.ext.status === (0, _nativeStatusCodesMjs.PERSISTENT_ERROR) || error.ext.status === (0, _nativeStatusCodesMjs.DISABLED))) return true;
    if (error.ext && error.ext.error && error.ext.error === INVALID_METHOD_ERROR) return true;
    switch(error.errorCode){
        case 0, _nativeAuthErrorCodesMjs.contentError:
            return true;
        default:
            return false;
    }
}
/**
 * Create the appropriate error object based on the WAM status code.
 * @param code
 * @param description
 * @param ext
 * @returns
 */ function createNativeAuthError(code, description, ext) {
    if (ext && ext.status) switch(ext.status){
        case 0, _nativeStatusCodesMjs.ACCOUNT_UNAVAILABLE:
            return (0, _msalCommon.createInteractionRequiredAuthError)((0, _msalCommon.InteractionRequiredAuthErrorCodes).nativeAccountUnavailable);
        case 0, _nativeStatusCodesMjs.USER_INTERACTION_REQUIRED:
            return new (0, _msalCommon.InteractionRequiredAuthError)(code, description);
        case 0, _nativeStatusCodesMjs.USER_CANCEL:
            return (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.userCancelled));
        case 0, _nativeStatusCodesMjs.NO_NETWORK:
            return (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.noNetworkConnectivity));
    }
    return new NativeAuthError(code, NativeAuthErrorMessages[code] || description, ext);
}

},{"@azure/msal-common":"rNWNa","./BrowserAuthError.mjs":"hI9Lm","./NativeAuthErrorCodes.mjs":"iZymj","../broker/nativeBroker/NativeStatusCodes.mjs":"l6k0T","./BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZymj":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "contentError", ()=>contentError);
parcelHelpers.export(exports, "userSwitch", ()=>userSwitch);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ const contentError = "ContentError";
const userSwitch = "user_switch";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l6k0T":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ACCOUNT_UNAVAILABLE", ()=>ACCOUNT_UNAVAILABLE);
parcelHelpers.export(exports, "DISABLED", ()=>DISABLED);
parcelHelpers.export(exports, "NO_NETWORK", ()=>NO_NETWORK);
parcelHelpers.export(exports, "PERSISTENT_ERROR", ()=>PERSISTENT_ERROR);
parcelHelpers.export(exports, "USER_CANCEL", ()=>USER_CANCEL);
parcelHelpers.export(exports, "USER_INTERACTION_REQUIRED", ()=>USER_INTERACTION_REQUIRED);
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ // Status Codes that can be thrown by WAM
const USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED";
const USER_CANCEL = "USER_CANCEL";
const NO_NETWORK = "NO_NETWORK";
const PERSISTENT_ERROR = "PERSISTENT_ERROR";
const DISABLED = "DISABLED";
const ACCOUNT_UNAVAILABLE = "ACCOUNT_UNAVAILABLE";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6oTgG":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SilentCacheClient", ()=>SilentCacheClient);
var _standardInteractionClientMjs = require("./StandardInteractionClient.mjs");
var _msalCommon = require("@azure/msal-common");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class SilentCacheClient extends (0, _standardInteractionClientMjs.StandardInteractionClient) {
    /**
     * Returns unexpired tokens from the cache, if available
     * @param silentRequest
     */ async acquireToken(silentRequest) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).SilentCacheClientAcquireToken, silentRequest.correlationId);
        // Telemetry manager only used to increment cacheHits here
        const serverTelemetryManager = this.initializeServerTelemetryManager((0, _browserConstantsMjs.ApiId).acquireTokenSilent_silentFlow);
        const silentAuthClient = await this.createSilentFlowClient(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions, silentRequest.account);
        this.logger.verbose("Silent auth client created");
        try {
            const response = await (0, _msalCommon.invokeAsync)(silentAuthClient.acquireCachedToken.bind(silentAuthClient), (0, _msalCommon.PerformanceEvents).SilentFlowClientAcquireCachedToken, this.logger, this.performanceClient, silentRequest.correlationId)(silentRequest);
            const authResponse = response[0];
            this.performanceClient.addFields({
                fromCache: true
            }, silentRequest.correlationId);
            return authResponse;
        } catch (error) {
            if (error instanceof (0, _browserAuthErrorMjs.BrowserAuthError) && error.errorCode === (0, _browserAuthErrorCodesMjs.cryptoKeyNotFound)) this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair.");
            throw error;
        }
    }
    /**
     * API to silenty clear the browser cache.
     * @param logoutRequest
     */ logout(logoutRequest) {
        this.logger.verbose("logoutRedirect called");
        const validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
        return this.clearCacheOnLogout(validLogoutRequest?.account);
    }
    /**
     * Creates an Silent Flow Client with the given authority, or the default authority.
     * @param serverTelemetryManager
     * @param authorityUrl
     */ async createSilentFlowClient(serverTelemetryManager, authorityUrl, azureCloudOptions, account) {
        // Create auth module.
        const clientConfig = await (0, _msalCommon.invokeAsync)(this.getClientConfiguration.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, authorityUrl, azureCloudOptions, account);
        return new (0, _msalCommon.SilentFlowClient)(clientConfig, this.performanceClient);
    }
    async initializeSilentRequest(request, account) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).InitializeSilentRequest, this.correlationId);
        const baseRequest = await (0, _msalCommon.invokeAsync)(this.initializeBaseRequest.bind(this), (0, _msalCommon.PerformanceEvents).InitializeBaseRequest, this.logger, this.performanceClient, this.correlationId)(request);
        return {
            ...request,
            ...baseRequest,
            account: account,
            forceRefresh: request.forceRefresh || false
        };
    }
}

},{"./StandardInteractionClient.mjs":"1Pw1B","@azure/msal-common":"rNWNa","../utils/BrowserConstants.mjs":"izeV4","../error/BrowserAuthError.mjs":"hI9Lm","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01Tz2":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NativeMessageHandler", ()=>NativeMessageHandler);
var _browserConstantsMjs = require("../../utils/BrowserConstants.mjs");
var _msalCommon = require("@azure/msal-common");
var _nativeAuthErrorMjs = require("../../error/NativeAuthError.mjs");
var _browserAuthErrorMjs = require("../../error/BrowserAuthError.mjs");
var _browserCryptoMjs = require("../../crypto/BrowserCrypto.mjs");
var _browserAuthErrorCodesMjs = require("../../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class NativeMessageHandler {
    constructor(logger, handshakeTimeoutMs, performanceClient, extensionId){
        this.logger = logger;
        this.handshakeTimeoutMs = handshakeTimeoutMs;
        this.extensionId = extensionId;
        this.resolvers = new Map(); // Used for non-handshake messages
        this.handshakeResolvers = new Map(); // Used for handshake messages
        this.messageChannel = new MessageChannel();
        this.windowListener = this.onWindowMessage.bind(this); // Window event callback doesn't have access to 'this' unless it's bound
        this.performanceClient = performanceClient;
        this.handshakeEvent = performanceClient.startMeasurement((0, _msalCommon.PerformanceEvents).NativeMessageHandlerHandshake);
    }
    /**
     * Sends a given message to the extension and resolves with the extension response
     * @param body
     */ async sendMessage(body) {
        this.logger.trace("NativeMessageHandler - sendMessage called.");
        const req = {
            channel: (0, _browserConstantsMjs.NativeConstants).CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: (0, _browserCryptoMjs.createNewGuid)(),
            body: body
        };
        this.logger.trace("NativeMessageHandler - Sending request to browser extension");
        this.logger.tracePii(`NativeMessageHandler - Sending request to browser extension: ${JSON.stringify(req)}`);
        this.messageChannel.port1.postMessage(req);
        return new Promise((resolve, reject)=>{
            this.resolvers.set(req.responseId, {
                resolve,
                reject
            });
        });
    }
    /**
     * Returns an instance of the MessageHandler that has successfully established a connection with an extension
     * @param {Logger} logger
     * @param {number} handshakeTimeoutMs
     * @param {IPerformanceClient} performanceClient
     * @param {ICrypto} crypto
     */ static async createProvider(logger, handshakeTimeoutMs, performanceClient) {
        logger.trace("NativeMessageHandler - createProvider called.");
        try {
            const preferredProvider = new NativeMessageHandler(logger, handshakeTimeoutMs, performanceClient, (0, _browserConstantsMjs.NativeConstants).PREFERRED_EXTENSION_ID);
            await preferredProvider.sendHandshakeRequest();
            return preferredProvider;
        } catch (e) {
            // If preferred extension fails for whatever reason, fallback to using any installed extension
            const backupProvider = new NativeMessageHandler(logger, handshakeTimeoutMs, performanceClient);
            await backupProvider.sendHandshakeRequest();
            return backupProvider;
        }
    }
    /**
     * Send handshake request helper.
     */ async sendHandshakeRequest() {
        this.logger.trace("NativeMessageHandler - sendHandshakeRequest called.");
        // Register this event listener before sending handshake
        window.addEventListener("message", this.windowListener, false); // false is important, because content script message processing should work first
        const req = {
            channel: (0, _browserConstantsMjs.NativeConstants).CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: (0, _browserCryptoMjs.createNewGuid)(),
            body: {
                method: (0, _browserConstantsMjs.NativeExtensionMethod).HandshakeRequest
            }
        };
        this.handshakeEvent.add({
            extensionId: this.extensionId,
            extensionHandshakeTimeoutMs: this.handshakeTimeoutMs
        });
        this.messageChannel.port1.onmessage = (event)=>{
            this.onChannelMessage(event);
        };
        window.postMessage(req, window.origin, [
            this.messageChannel.port2
        ]);
        return new Promise((resolve, reject)=>{
            this.handshakeResolvers.set(req.responseId, {
                resolve,
                reject
            });
            this.timeoutId = window.setTimeout(()=>{
                /*
                 * Throw an error if neither HandshakeResponse nor original Handshake request are received in a reasonable timeframe.
                 * This typically suggests an event handler stopped propagation of the Handshake request but did not respond to it on the MessageChannel port
                 */ window.removeEventListener("message", this.windowListener, false);
                this.messageChannel.port1.close();
                this.messageChannel.port2.close();
                this.handshakeEvent.end({
                    extensionHandshakeTimedOut: true,
                    success: false
                });
                reject((0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.nativeHandshakeTimeout)));
                this.handshakeResolvers.delete(req.responseId);
            }, this.handshakeTimeoutMs); // Use a reasonable timeout in milliseconds here
        });
    }
    /**
     * Invoked when a message is posted to the window. If a handshake request is received it means the extension is not installed.
     * @param event
     */ onWindowMessage(event) {
        this.logger.trace("NativeMessageHandler - onWindowMessage called");
        // We only accept messages from ourselves
        if (event.source !== window) return;
        const request = event.data;
        if (!request.channel || request.channel !== (0, _browserConstantsMjs.NativeConstants).CHANNEL_ID) return;
        if (request.extensionId && request.extensionId !== this.extensionId) return;
        if (request.body.method === (0, _browserConstantsMjs.NativeExtensionMethod).HandshakeRequest) {
            const handshakeResolver = this.handshakeResolvers.get(request.responseId);
            /*
             * Filter out responses with no matched resolvers sooner to keep channel ports open while waiting for
             * the proper response.
             */ if (!handshakeResolver) {
                this.logger.trace(`NativeMessageHandler.onWindowMessage - resolver can't be found for request ${request.responseId}`);
                return;
            }
            // If we receive this message back it means no extension intercepted the request, meaning no extension supporting handshake protocol is installed
            this.logger.verbose(request.extensionId ? `Extension with id: ${request.extensionId} not installed` : "No extension installed");
            clearTimeout(this.timeoutId);
            this.messageChannel.port1.close();
            this.messageChannel.port2.close();
            window.removeEventListener("message", this.windowListener, false);
            this.handshakeEvent.end({
                success: false,
                extensionInstalled: false
            });
            handshakeResolver.reject((0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.nativeExtensionNotInstalled)));
        }
    }
    /**
     * Invoked when a message is received from the extension on the MessageChannel port
     * @param event
     */ onChannelMessage(event) {
        this.logger.trace("NativeMessageHandler - onChannelMessage called.");
        const request = event.data;
        const resolver = this.resolvers.get(request.responseId);
        const handshakeResolver = this.handshakeResolvers.get(request.responseId);
        try {
            const method = request.body.method;
            if (method === (0, _browserConstantsMjs.NativeExtensionMethod).Response) {
                if (!resolver) return;
                const response = request.body.response;
                this.logger.trace("NativeMessageHandler - Received response from browser extension");
                this.logger.tracePii(`NativeMessageHandler - Received response from browser extension: ${JSON.stringify(response)}`);
                if (response.status !== "Success") resolver.reject((0, _nativeAuthErrorMjs.createNativeAuthError)(response.code, response.description, response.ext));
                else if (response.result) {
                    if (response.result["code"] && response.result["description"]) resolver.reject((0, _nativeAuthErrorMjs.createNativeAuthError)(response.result["code"], response.result["description"], response.result["ext"]));
                    else resolver.resolve(response.result);
                } else throw (0, _msalCommon.createAuthError)((0, _msalCommon.AuthErrorCodes).unexpectedError, "Event does not contain result.");
                this.resolvers.delete(request.responseId);
            } else if (method === (0, _browserConstantsMjs.NativeExtensionMethod).HandshakeResponse) {
                if (!handshakeResolver) {
                    this.logger.trace(`NativeMessageHandler.onChannelMessage - resolver can't be found for request ${request.responseId}`);
                    return;
                }
                clearTimeout(this.timeoutId); // Clear setTimeout
                window.removeEventListener("message", this.windowListener, false); // Remove 'No extension' listener
                this.extensionId = request.extensionId;
                this.extensionVersion = request.body.version;
                this.logger.verbose(`NativeMessageHandler - Received HandshakeResponse from extension: ${this.extensionId}`);
                this.handshakeEvent.end({
                    extensionInstalled: true,
                    success: true
                });
                handshakeResolver.resolve();
                this.handshakeResolvers.delete(request.responseId);
            }
        // Do nothing if method is not Response or HandshakeResponse
        } catch (err) {
            this.logger.error("Error parsing response from WAM Extension");
            this.logger.errorPii(`Error parsing response from WAM Extension: ${err}`);
            this.logger.errorPii(`Unable to parse ${event}`);
            if (resolver) resolver.reject(err);
            else if (handshakeResolver) handshakeResolver.reject(err);
        }
    }
    /**
     * Returns the Id for the browser extension this handler is communicating with
     * @returns
     */ getExtensionId() {
        return this.extensionId;
    }
    /**
     * Returns the version for the browser extension this handler is communicating with
     * @returns
     */ getExtensionVersion() {
        return this.extensionVersion;
    }
    /**
     * Returns boolean indicating whether or not the request should attempt to use native broker
     * @param logger
     * @param config
     * @param nativeExtensionProvider
     * @param authenticationScheme
     */ static isNativeAvailable(config, logger, nativeExtensionProvider, authenticationScheme) {
        logger.trace("isNativeAvailable called");
        if (!config.system.allowNativeBroker) {
            logger.trace("isNativeAvailable: allowNativeBroker is not enabled, returning false");
            // Developer disabled WAM
            return false;
        }
        if (!nativeExtensionProvider) {
            logger.trace("isNativeAvailable: WAM extension provider is not initialized, returning false");
            // Extension is not available
            return false;
        }
        if (authenticationScheme) switch(authenticationScheme){
            case (0, _msalCommon.AuthenticationScheme).BEARER:
            case (0, _msalCommon.AuthenticationScheme).POP:
                logger.trace("isNativeAvailable: authenticationScheme is supported, returning true");
                return true;
            default:
                logger.trace("isNativeAvailable: authenticationScheme is not supported, returning false");
                return false;
        }
        return true;
    }
}

},{"../../utils/BrowserConstants.mjs":"izeV4","@azure/msal-common":"rNWNa","../../error/NativeAuthError.mjs":"lxTHh","../../error/BrowserAuthError.mjs":"hI9Lm","../../crypto/BrowserCrypto.mjs":"foGbR","../../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g9nQu":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InteractionHandler", ()=>InteractionHandler);
var _msalCommon = require("@azure/msal-common");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Abstract class which defines operations for a browser interaction handling class.
 */ class InteractionHandler {
    constructor(authCodeModule, storageImpl, authCodeRequest, logger, performanceClient){
        this.authModule = authCodeModule;
        this.browserStorage = storageImpl;
        this.authCodeRequest = authCodeRequest;
        this.logger = logger;
        this.performanceClient = performanceClient;
    }
    /**
     * Function to handle response parameters from hash.
     * @param locationHash
     */ async handleCodeResponse(response, request) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).HandleCodeResponse, request.correlationId);
        let authCodeResponse;
        try {
            authCodeResponse = this.authModule.handleFragmentResponse(response, request.state);
        } catch (e) {
            if (e instanceof (0, _msalCommon.ServerError) && e.subError === (0, _browserAuthErrorCodesMjs.userCancelled)) // Translate server error caused by user closing native prompt to corresponding first class MSAL error
            throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.userCancelled));
            else throw e;
        }
        return (0, _msalCommon.invokeAsync)(this.handleCodeResponseFromServer.bind(this), (0, _msalCommon.PerformanceEvents).HandleCodeResponseFromServer, this.logger, this.performanceClient, request.correlationId)(authCodeResponse, request);
    }
    /**
     * Process auth code response from AAD
     * @param authCodeResponse
     * @param state
     * @param authority
     * @param networkModule
     * @returns
     */ async handleCodeResponseFromServer(authCodeResponse, request, validateNonce = true) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).HandleCodeResponseFromServer, request.correlationId);
        this.logger.trace("InteractionHandler.handleCodeResponseFromServer called");
        // Assign code to request
        this.authCodeRequest.code = authCodeResponse.code;
        // Check for new cloud instance
        if (authCodeResponse.cloud_instance_host_name) await (0, _msalCommon.invokeAsync)(this.authModule.updateAuthority.bind(this.authModule), (0, _msalCommon.PerformanceEvents).UpdateTokenEndpointAuthority, this.logger, this.performanceClient, request.correlationId)(authCodeResponse.cloud_instance_host_name, request.correlationId);
        // Nonce validation not needed when redirect not involved (e.g. hybrid spa, renewing token via rt)
        if (validateNonce) // TODO: Assigning "response nonce" to "request nonce" is confusing. Refactor the function doing validation to accept request nonce directly
        authCodeResponse.nonce = request.nonce || undefined;
        authCodeResponse.state = request.state;
        // Add CCS parameters if available
        if (authCodeResponse.client_info) this.authCodeRequest.clientInfo = authCodeResponse.client_info;
        else {
            const ccsCred = this.createCcsCredentials(request);
            if (ccsCred) this.authCodeRequest.ccsCredential = ccsCred;
        }
        // Acquire token with retrieved code.
        const tokenResponse = await (0, _msalCommon.invokeAsync)(this.authModule.acquireToken.bind(this.authModule), (0, _msalCommon.PerformanceEvents).AuthClientAcquireToken, this.logger, this.performanceClient, request.correlationId)(this.authCodeRequest, authCodeResponse);
        return tokenResponse;
    }
    /**
     * Build ccs creds if available
     */ createCcsCredentials(request) {
        if (request.account) return {
            credential: request.account.homeAccountId,
            type: (0, _msalCommon.CcsCredentialType).HOME_ACCOUNT_ID
        };
        else if (request.loginHint) return {
            credential: request.loginHint,
            type: (0, _msalCommon.CcsCredentialType).UPN
        };
        return null;
    }
}

},{"@azure/msal-common":"rNWNa","../error/BrowserAuthError.mjs":"hI9Lm","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4YI3v":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deserializeResponse", ()=>deserializeResponse);
parcelHelpers.export(exports, "validateInteractionType", ()=>validateInteractionType);
var _msalCommon = require("@azure/msal-common");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _browserProtocolUtilsMjs = require("../utils/BrowserProtocolUtils.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ function deserializeResponse(responseString, responseLocation, logger) {
    // Deserialize hash fragment response parameters.
    const serverParams = (0, _msalCommon.UrlUtils).getDeserializedResponse(responseString);
    if (!serverParams) {
        if (!(0, _msalCommon.UrlUtils).stripLeadingHashOrQuery(responseString)) {
            // Hash or Query string is empty
            logger.error(`The request has returned to the redirectUri but a ${responseLocation} is not present. It's likely that the ${responseLocation} has been removed or the page has been redirected by code running on the redirectUri page.`);
            throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.hashEmptyError));
        } else {
            logger.error(`A ${responseLocation} is present in the iframe but it does not contain known properties. It's likely that the ${responseLocation} has been replaced by code running on the redirectUri page.`);
            logger.errorPii(`The ${responseLocation} detected is: ${responseString}`);
            throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.hashDoesNotContainKnownProperties));
        }
    }
    return serverParams;
}
/**
 * Returns the interaction type that the response object belongs to
 */ function validateInteractionType(response, browserCrypto, interactionType) {
    if (!response.state) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.noStateInHash));
    const platformStateObj = (0, _browserProtocolUtilsMjs.extractBrowserRequestState)(browserCrypto, response.state);
    if (!platformStateObj) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.unableToParseState));
    if (platformStateObj.interactionType !== interactionType) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.stateInteractionTypeMismatch));
}

},{"@azure/msal-common":"rNWNa","../error/BrowserAuthError.mjs":"hI9Lm","../utils/BrowserProtocolUtils.mjs":"jGwco","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3azAB":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RedirectClient", ()=>RedirectClient);
var _msalCommon = require("@azure/msal-common");
var _standardInteractionClientMjs = require("./StandardInteractionClient.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _redirectHandlerMjs = require("../interaction_handler/RedirectHandler.mjs");
var _browserUtilsMjs = require("../utils/BrowserUtils.mjs");
var _eventTypeMjs = require("../event/EventType.mjs");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _nativeInteractionClientMjs = require("./NativeInteractionClient.mjs");
var _nativeMessageHandlerMjs = require("../broker/nativeBroker/NativeMessageHandler.mjs");
var _responseHandlerMjs = require("../response/ResponseHandler.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class RedirectClient extends (0, _standardInteractionClientMjs.StandardInteractionClient) {
    constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeStorageImpl, nativeMessageHandler, correlationId){
        super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId);
        this.nativeStorage = nativeStorageImpl;
    }
    /**
     * Redirects the page to the /authorize endpoint of the IDP
     * @param request
     */ async acquireToken(request) {
        const validRequest = await (0, _msalCommon.invokeAsync)(this.initializeAuthorizationRequest.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(request, (0, _browserConstantsMjs.InteractionType).Redirect);
        this.browserStorage.updateCacheEntries(validRequest.state, validRequest.nonce, validRequest.authority, validRequest.loginHint || "", validRequest.account || null);
        const serverTelemetryManager = this.initializeServerTelemetryManager((0, _browserConstantsMjs.ApiId).acquireTokenRedirect);
        const handleBackButton = (event)=>{
            // Clear temporary cache if the back button is clicked during the redirect flow.
            if (event.persisted) {
                this.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache.");
                this.browserStorage.cleanRequestByState(validRequest.state);
                this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).RESTORE_FROM_BFCACHE, (0, _browserConstantsMjs.InteractionType).Redirect);
            }
        };
        try {
            // Create auth code request and generate PKCE params
            const authCodeRequest = await (0, _msalCommon.invokeAsync)(this.initializeAuthorizationCodeRequest.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientInitializeAuthorizationCodeRequest, this.logger, this.performanceClient, this.correlationId)(validRequest);
            // Initialize the client
            const authClient = await (0, _msalCommon.invokeAsync)(this.createAuthCodeClient.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, validRequest.authority, validRequest.azureCloudOptions, validRequest.account);
            // Create redirect interaction handler.
            const interactionHandler = new (0, _redirectHandlerMjs.RedirectHandler)(authClient, this.browserStorage, authCodeRequest, this.logger, this.performanceClient);
            // Create acquire token url.
            const navigateUrl = await authClient.getAuthCodeUrl({
                ...validRequest,
                nativeBroker: (0, _nativeMessageHandlerMjs.NativeMessageHandler).isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, request.authenticationScheme)
            });
            const redirectStartPage = this.getRedirectStartPage(request.redirectStartPage);
            this.logger.verbosePii(`Redirect start page: ${redirectStartPage}`);
            // Clear temporary cache if the back button is clicked during the redirect flow.
            window.addEventListener("pageshow", handleBackButton);
            // Show the UI once the url has been created. Response will come back in the hash, which will be handled in the handleRedirectCallback function.
            return await interactionHandler.initiateAuthRequest(navigateUrl, {
                navigationClient: this.navigationClient,
                redirectTimeout: this.config.system.redirectNavigationTimeout,
                redirectStartPage: redirectStartPage,
                onRedirectNavigate: request.onRedirectNavigate
            });
        } catch (e) {
            if (e instanceof (0, _msalCommon.AuthError)) {
                e.setCorrelationId(this.correlationId);
                serverTelemetryManager.cacheFailedRequest(e);
            }
            window.removeEventListener("pageshow", handleBackButton);
            this.browserStorage.cleanRequestByState(validRequest.state);
            throw e;
        }
    }
    /**
     * Checks if navigateToLoginRequestUrl is set, and:
     * - if true, performs logic to cache and navigate
     * - if false, handles hash string and parses response
     * @param hash {string?} url hash
     * @param performanceClient {IPerformanceClient?}
     * @param correlationId {string?} correlation identifier
     */ async handleRedirectPromise(hash, performanceClient, correlationId) {
        const serverTelemetryManager = this.initializeServerTelemetryManager((0, _browserConstantsMjs.ApiId).handleRedirectPromise);
        try {
            if (!this.browserStorage.isInteractionInProgress(true)) {
                this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
                return null;
            }
            const [serverParams, responseString] = this.getRedirectResponse(hash || "");
            if (!serverParams) {
                // Not a recognized server response hash or hash not associated with a redirect request
                this.logger.info("handleRedirectPromise did not detect a response as a result of a redirect. Cleaning temporary cache.");
                this.browserStorage.cleanRequestByInteractionType((0, _browserConstantsMjs.InteractionType).Redirect);
                if (performanceClient && correlationId) performanceClient?.addFields({
                    errorCode: "no_server_response"
                }, correlationId);
                return null;
            }
            // If navigateToLoginRequestUrl is true, get the url where the redirect request was initiated
            const loginRequestUrl = this.browserStorage.getTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).ORIGIN_URI, true) || (0, _msalCommon.Constants).EMPTY_STRING;
            const loginRequestUrlNormalized = (0, _msalCommon.UrlString).removeHashFromUrl(loginRequestUrl);
            const currentUrlNormalized = (0, _msalCommon.UrlString).removeHashFromUrl(window.location.href);
            if (loginRequestUrlNormalized === currentUrlNormalized && this.config.auth.navigateToLoginRequestUrl) {
                // We are on the page we need to navigate to - handle hash
                this.logger.verbose("Current page is loginRequestUrl, handling response");
                if (loginRequestUrl.indexOf("#") > -1) // Replace current hash with non-msal hash, if present
                (0, _browserUtilsMjs.replaceHash)(loginRequestUrl);
                const handleHashResult = await this.handleResponse(serverParams, serverTelemetryManager);
                return handleHashResult;
            } else if (!this.config.auth.navigateToLoginRequestUrl) {
                this.logger.verbose("NavigateToLoginRequestUrl set to false, handling response");
                return await this.handleResponse(serverParams, serverTelemetryManager);
            } else if (!(0, _browserUtilsMjs.isInIframe)() || this.config.system.allowRedirectInIframe) {
                /*
                 * Returned from authority using redirect - need to perform navigation before processing response
                 * Cache the hash to be retrieved after the next redirect
                 */ this.browserStorage.setTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).URL_HASH, responseString, true);
                const navigationOptions = {
                    apiId: (0, _browserConstantsMjs.ApiId).handleRedirectPromise,
                    timeout: this.config.system.redirectNavigationTimeout,
                    noHistory: true
                };
                /**
                 * Default behavior is to redirect to the start page and not process the hash now.
                 * The start page is expected to also call handleRedirectPromise which will process the hash in one of the checks above.
                 */ let processHashOnRedirect = true;
                if (!loginRequestUrl || loginRequestUrl === "null") {
                    // Redirect to home page if login request url is null (real null or the string null)
                    const homepage = (0, _browserUtilsMjs.getHomepage)();
                    // Cache the homepage under ORIGIN_URI to ensure cached hash is processed on homepage
                    this.browserStorage.setTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).ORIGIN_URI, homepage, true);
                    this.logger.warning("Unable to get valid login request url from cache, redirecting to home page");
                    processHashOnRedirect = await this.navigationClient.navigateInternal(homepage, navigationOptions);
                } else {
                    // Navigate to page that initiated the redirect request
                    this.logger.verbose(`Navigating to loginRequestUrl: ${loginRequestUrl}`);
                    processHashOnRedirect = await this.navigationClient.navigateInternal(loginRequestUrl, navigationOptions);
                }
                // If navigateInternal implementation returns false, handle the hash now
                if (!processHashOnRedirect) return await this.handleResponse(serverParams, serverTelemetryManager);
            }
            return null;
        } catch (e) {
            if (e instanceof (0, _msalCommon.AuthError)) {
                e.setCorrelationId(this.correlationId);
                serverTelemetryManager.cacheFailedRequest(e);
            }
            this.browserStorage.cleanRequestByInteractionType((0, _browserConstantsMjs.InteractionType).Redirect);
            throw e;
        }
    }
    /**
     * Gets the response hash for a redirect request
     * Returns null if interactionType in the state value is not "redirect" or the hash does not contain known properties
     * @param hash
     */ getRedirectResponse(userProvidedResponse) {
        this.logger.verbose("getRedirectResponseHash called");
        // Get current location hash from window or cache.
        let responseString = userProvidedResponse;
        if (!responseString) {
            if (this.config.auth.OIDCOptions.serverResponseType === (0, _msalCommon.ServerResponseType).QUERY) responseString = window.location.search;
            else responseString = window.location.hash;
        }
        let response = (0, _msalCommon.UrlUtils).getDeserializedResponse(responseString);
        if (response) {
            try {
                (0, _responseHandlerMjs.validateInteractionType)(response, this.browserCrypto, (0, _browserConstantsMjs.InteractionType).Redirect);
            } catch (e) {
                if (e instanceof (0, _msalCommon.AuthError)) this.logger.error(`Interaction type validation failed due to ${e.errorCode}: ${e.errorMessage}`);
                return [
                    null,
                    ""
                ];
            }
            (0, _browserUtilsMjs.clearHash)(window);
            this.logger.verbose("Hash contains known properties, returning response hash");
            return [
                response,
                responseString
            ];
        }
        const cachedHash = this.browserStorage.getTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).URL_HASH, true);
        this.browserStorage.removeItem(this.browserStorage.generateCacheKey((0, _browserConstantsMjs.TemporaryCacheKeys).URL_HASH));
        if (cachedHash) {
            response = (0, _msalCommon.UrlUtils).getDeserializedResponse(cachedHash);
            if (response) {
                this.logger.verbose("Hash does not contain known properties, returning cached hash");
                return [
                    response,
                    cachedHash
                ];
            }
        }
        return [
            null,
            ""
        ];
    }
    /**
     * Checks if hash exists and handles in window.
     * @param hash
     * @param state
     */ async handleResponse(serverParams, serverTelemetryManager) {
        const state = serverParams.state;
        if (!state) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.noStateInHash));
        const cachedRequest = this.browserStorage.getCachedRequest(state);
        this.logger.verbose("handleResponse called, retrieved cached request");
        if (serverParams.accountId) {
            this.logger.verbose("Account id found in hash, calling WAM for token");
            if (!this.nativeMessageHandler) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.nativeConnectionNotEstablished));
            const nativeInteractionClient = new (0, _nativeInteractionClientMjs.NativeInteractionClient)(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, (0, _browserConstantsMjs.ApiId).acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, this.nativeStorage, cachedRequest.correlationId);
            const { userRequestState } = (0, _msalCommon.ProtocolUtils).parseRequestState(this.browserCrypto, state);
            return nativeInteractionClient.acquireToken({
                ...cachedRequest,
                state: userRequestState,
                prompt: undefined
            }).finally(()=>{
                this.browserStorage.cleanRequestByState(state);
            });
        }
        // Hash contains known properties - handle and return in callback
        const currentAuthority = this.browserStorage.getCachedAuthority(state);
        if (!currentAuthority) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.noCachedAuthorityError));
        const authClient = await (0, _msalCommon.invokeAsync)(this.createAuthCodeClient.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, currentAuthority);
        (0, _msalCommon.ThrottlingUtils).removeThrottle(this.browserStorage, this.config.auth.clientId, cachedRequest);
        const interactionHandler = new (0, _redirectHandlerMjs.RedirectHandler)(authClient, this.browserStorage, cachedRequest, this.logger, this.performanceClient);
        return interactionHandler.handleCodeResponse(serverParams, state);
    }
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param logoutRequest
     */ async logout(logoutRequest) {
        this.logger.verbose("logoutRedirect called");
        const validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
        const serverTelemetryManager = this.initializeServerTelemetryManager((0, _browserConstantsMjs.ApiId).logout);
        try {
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGOUT_START, (0, _browserConstantsMjs.InteractionType).Redirect, logoutRequest);
            // Clear cache on logout
            await this.clearCacheOnLogout(validLogoutRequest.account);
            const navigationOptions = {
                apiId: (0, _browserConstantsMjs.ApiId).logout,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: false
            };
            const authClient = await (0, _msalCommon.invokeAsync)(this.createAuthCodeClient.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, logoutRequest && logoutRequest.authority, undefined, logoutRequest && logoutRequest.account || undefined);
            if (authClient.authority.protocolMode === (0, _msalCommon.ProtocolMode).OIDC) try {
                authClient.authority.endSessionEndpoint;
            } catch  {
                if (validLogoutRequest.account?.homeAccountId) {
                    this.browserStorage.removeAccount(validLogoutRequest.account?.homeAccountId);
                    this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGOUT_SUCCESS, (0, _browserConstantsMjs.InteractionType).Redirect, validLogoutRequest);
                    return;
                }
            }
            // Create logout string and navigate user window to logout.
            const logoutUri = authClient.getLogoutUri(validLogoutRequest);
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGOUT_SUCCESS, (0, _browserConstantsMjs.InteractionType).Redirect, validLogoutRequest);
            // Check if onRedirectNavigate is implemented, and invoke it if so
            if (logoutRequest && typeof logoutRequest.onRedirectNavigate === "function") {
                const navigate = logoutRequest.onRedirectNavigate(logoutUri);
                if (navigate !== false) {
                    this.logger.verbose("Logout onRedirectNavigate did not return false, navigating");
                    // Ensure interaction is in progress
                    if (!this.browserStorage.getInteractionInProgress()) this.browserStorage.setInteractionInProgress(true);
                    await this.navigationClient.navigateExternal(logoutUri, navigationOptions);
                    return;
                } else {
                    // Ensure interaction is not in progress
                    this.browserStorage.setInteractionInProgress(false);
                    this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation");
                }
            } else {
                // Ensure interaction is in progress
                if (!this.browserStorage.getInteractionInProgress()) this.browserStorage.setInteractionInProgress(true);
                await this.navigationClient.navigateExternal(logoutUri, navigationOptions);
                return;
            }
        } catch (e) {
            if (e instanceof (0, _msalCommon.AuthError)) {
                e.setCorrelationId(this.correlationId);
                serverTelemetryManager.cacheFailedRequest(e);
            }
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGOUT_FAILURE, (0, _browserConstantsMjs.InteractionType).Redirect, null, e);
            this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGOUT_END, (0, _browserConstantsMjs.InteractionType).Redirect);
            throw e;
        }
        this.eventHandler.emitEvent((0, _eventTypeMjs.EventType).LOGOUT_END, (0, _browserConstantsMjs.InteractionType).Redirect);
    }
    /**
     * Use to get the redirectStartPage either from request or use current window
     * @param requestStartPage
     */ getRedirectStartPage(requestStartPage) {
        const redirectStartPage = requestStartPage || window.location.href;
        return (0, _msalCommon.UrlString).getAbsoluteUrl(redirectStartPage, (0, _browserUtilsMjs.getCurrentUri)());
    }
}

},{"@azure/msal-common":"rNWNa","./StandardInteractionClient.mjs":"1Pw1B","../utils/BrowserConstants.mjs":"izeV4","../interaction_handler/RedirectHandler.mjs":"641jI","../utils/BrowserUtils.mjs":"7ahCa","../event/EventType.mjs":"3AsqD","../error/BrowserAuthError.mjs":"hI9Lm","./NativeInteractionClient.mjs":"bOcEE","../broker/nativeBroker/NativeMessageHandler.mjs":"01Tz2","../response/ResponseHandler.mjs":"4YI3v","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"641jI":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RedirectHandler", ()=>RedirectHandler);
var _msalCommon = require("@azure/msal-common");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class RedirectHandler {
    constructor(authCodeModule, storageImpl, authCodeRequest, logger, performanceClient){
        this.authModule = authCodeModule;
        this.browserStorage = storageImpl;
        this.authCodeRequest = authCodeRequest;
        this.logger = logger;
        this.performanceClient = performanceClient;
    }
    /**
     * Redirects window to given URL.
     * @param urlNavigate
     */ async initiateAuthRequest(requestUrl, params) {
        this.logger.verbose("RedirectHandler.initiateAuthRequest called");
        // Navigate if valid URL
        if (requestUrl) {
            // Cache start page, returns to this page after redirectUri if navigateToLoginRequestUrl is true
            if (params.redirectStartPage) {
                this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page");
                this.browserStorage.setTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).ORIGIN_URI, params.redirectStartPage, true);
            }
            // Set interaction status in the library.
            this.browserStorage.setTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).CORRELATION_ID, this.authCodeRequest.correlationId, true);
            this.browserStorage.cacheCodeRequest(this.authCodeRequest);
            this.logger.infoPii(`RedirectHandler.initiateAuthRequest: Navigate to: ${requestUrl}`);
            const navigationOptions = {
                apiId: (0, _browserConstantsMjs.ApiId).acquireTokenRedirect,
                timeout: params.redirectTimeout,
                noHistory: false
            };
            // If onRedirectNavigate is implemented, invoke it and provide requestUrl
            if (typeof params.onRedirectNavigate === "function") {
                this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback");
                const navigate = params.onRedirectNavigate(requestUrl);
                // Returning false from onRedirectNavigate will stop navigation
                if (navigate !== false) {
                    this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating");
                    await params.navigationClient.navigateExternal(requestUrl, navigationOptions);
                    return;
                } else {
                    this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation");
                    return;
                }
            } else {
                // Navigate window to request URL
                this.logger.verbose("RedirectHandler.initiateAuthRequest: Navigating window to navigate url");
                await params.navigationClient.navigateExternal(requestUrl, navigationOptions);
                return;
            }
        } else {
            // Throw error if request URL is empty.
            this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty");
            throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.emptyNavigateUri));
        }
    }
    /**
     * Handle authorization code response in the window.
     * @param hash
     */ async handleCodeResponse(response, state) {
        this.logger.verbose("RedirectHandler.handleCodeResponse called");
        // Interaction is completed - remove interaction status.
        this.browserStorage.setInteractionInProgress(false);
        // Handle code response.
        const stateKey = this.browserStorage.generateStateKey(state);
        const requestState = this.browserStorage.getTemporaryCache(stateKey);
        if (!requestState) throw (0, _msalCommon.createClientAuthError)((0, _msalCommon.ClientAuthErrorCodes).stateNotFound, "Cached State");
        let authCodeResponse;
        try {
            authCodeResponse = this.authModule.handleFragmentResponse(response, requestState);
        } catch (e) {
            if (e instanceof (0, _msalCommon.ServerError) && e.subError === (0, _browserAuthErrorCodesMjs.userCancelled)) // Translate server error caused by user closing native prompt to corresponding first class MSAL error
            throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.userCancelled));
            else throw e;
        }
        // Get cached items
        const nonceKey = this.browserStorage.generateNonceKey(requestState);
        const cachedNonce = this.browserStorage.getTemporaryCache(nonceKey);
        // Assign code to request
        this.authCodeRequest.code = authCodeResponse.code;
        // Check for new cloud instance
        if (authCodeResponse.cloud_instance_host_name) await (0, _msalCommon.invokeAsync)(this.authModule.updateAuthority.bind(this.authModule), (0, _msalCommon.PerformanceEvents).UpdateTokenEndpointAuthority, this.logger, this.performanceClient, this.authCodeRequest.correlationId)(authCodeResponse.cloud_instance_host_name, this.authCodeRequest.correlationId);
        authCodeResponse.nonce = cachedNonce || undefined;
        authCodeResponse.state = requestState;
        // Add CCS parameters if available
        if (authCodeResponse.client_info) this.authCodeRequest.clientInfo = authCodeResponse.client_info;
        else {
            const cachedCcsCred = this.checkCcsCredentials();
            if (cachedCcsCred) this.authCodeRequest.ccsCredential = cachedCcsCred;
        }
        // Acquire token with retrieved code.
        const tokenResponse = await this.authModule.acquireToken(this.authCodeRequest, authCodeResponse);
        this.browserStorage.cleanRequestByState(state);
        return tokenResponse;
    }
    /**
     * Looks up ccs creds in the cache
     */ checkCcsCredentials() {
        // Look up ccs credential in temp cache
        const cachedCcsCred = this.browserStorage.getTemporaryCache((0, _browserConstantsMjs.TemporaryCacheKeys).CCS_CREDENTIAL, true);
        if (cachedCcsCred) try {
            return JSON.parse(cachedCcsCred);
        } catch (e) {
            this.authModule.logger.error("Cache credential could not be parsed");
            this.authModule.logger.errorPii(`Cache credential could not be parsed: ${cachedCcsCred}`);
        }
        return null;
    }
}

},{"@azure/msal-common":"rNWNa","../error/BrowserAuthError.mjs":"hI9Lm","../utils/BrowserConstants.mjs":"izeV4","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bDBog":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SilentIframeClient", ()=>SilentIframeClient);
var _msalCommon = require("@azure/msal-common");
var _standardInteractionClientMjs = require("./StandardInteractionClient.mjs");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _silentHandlerMjs = require("../interaction_handler/SilentHandler.mjs");
var _nativeMessageHandlerMjs = require("../broker/nativeBroker/NativeMessageHandler.mjs");
var _nativeInteractionClientMjs = require("./NativeInteractionClient.mjs");
var _interactionHandlerMjs = require("../interaction_handler/InteractionHandler.mjs");
var _browserUtilsMjs = require("../utils/BrowserUtils.mjs");
var _responseHandlerMjs = require("../response/ResponseHandler.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class SilentIframeClient extends (0, _standardInteractionClientMjs.StandardInteractionClient) {
    constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, nativeStorageImpl, nativeMessageHandler, correlationId){
        super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId);
        this.apiId = apiId;
        this.nativeStorage = nativeStorageImpl;
    }
    /**
     * Acquires a token silently by opening a hidden iframe to the /authorize endpoint with prompt=none or prompt=no_session
     * @param request
     */ async acquireToken(request) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).SilentIframeClientAcquireToken, request.correlationId);
        // Check that we have some SSO data
        if (!request.loginHint && !request.sid && (!request.account || !request.account.username)) this.logger.warning("No user hint provided. The authorization server may need more information to complete this request.");
        // Check the prompt value
        const inputRequest = {
            ...request
        };
        if (inputRequest.prompt) {
            if (inputRequest.prompt !== (0, _msalCommon.PromptValue).NONE && inputRequest.prompt !== (0, _msalCommon.PromptValue).NO_SESSION) {
                this.logger.warning(`SilentIframeClient. Replacing invalid prompt ${inputRequest.prompt} with ${(0, _msalCommon.PromptValue).NONE}`);
                inputRequest.prompt = (0, _msalCommon.PromptValue).NONE;
            }
        } else inputRequest.prompt = (0, _msalCommon.PromptValue).NONE;
        // Create silent request
        const silentRequest = await (0, _msalCommon.invokeAsync)(this.initializeAuthorizationRequest.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, request.correlationId)(inputRequest, (0, _browserConstantsMjs.InteractionType).Silent);
        (0, _browserUtilsMjs.preconnect)(silentRequest.authority);
        const serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
        try {
            // Initialize the client
            const authClient = await (0, _msalCommon.invokeAsync)(this.createAuthCodeClient.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, request.correlationId)(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions, silentRequest.account);
            return await (0, _msalCommon.invokeAsync)(this.silentTokenHelper.bind(this), (0, _msalCommon.PerformanceEvents).SilentIframeClientTokenHelper, this.logger, this.performanceClient, request.correlationId)(authClient, silentRequest);
        } catch (e) {
            if (e instanceof (0, _msalCommon.AuthError)) {
                e.setCorrelationId(this.correlationId);
                serverTelemetryManager.cacheFailedRequest(e);
            }
            throw e;
        }
    }
    /**
     * Currently Unsupported
     */ logout() {
        // Synchronous so we must reject
        return Promise.reject((0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.silentLogoutUnsupported)));
    }
    /**
     * Helper which acquires an authorization code silently using a hidden iframe from given url
     * using the scopes requested as part of the id, and exchanges the code for a set of OAuth tokens.
     * @param navigateUrl
     * @param userRequestScopes
     */ async silentTokenHelper(authClient, silentRequest) {
        const correlationId = silentRequest.correlationId;
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).SilentIframeClientTokenHelper, correlationId);
        // Create auth code request and generate PKCE params
        const authCodeRequest = await (0, _msalCommon.invokeAsync)(this.initializeAuthorizationCodeRequest.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientInitializeAuthorizationCodeRequest, this.logger, this.performanceClient, correlationId)(silentRequest);
        // Create authorize request url
        const navigateUrl = await (0, _msalCommon.invokeAsync)(authClient.getAuthCodeUrl.bind(authClient), (0, _msalCommon.PerformanceEvents).GetAuthCodeUrl, this.logger, this.performanceClient, correlationId)({
            ...silentRequest,
            nativeBroker: (0, _nativeMessageHandlerMjs.NativeMessageHandler).isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, silentRequest.authenticationScheme)
        });
        // Create silent handler
        const interactionHandler = new (0, _interactionHandlerMjs.InteractionHandler)(authClient, this.browserStorage, authCodeRequest, this.logger, this.performanceClient);
        // Get the frame handle for the silent request
        const msalFrame = await (0, _msalCommon.invokeAsync)((0, _silentHandlerMjs.initiateAuthRequest), (0, _msalCommon.PerformanceEvents).SilentHandlerInitiateAuthRequest, this.logger, this.performanceClient, correlationId)(navigateUrl, this.performanceClient, this.logger, correlationId, this.config.system.navigateFrameWait);
        const responseType = this.config.auth.OIDCOptions.serverResponseType;
        // Monitor the window for the hash. Return the string value and close the popup when the hash is received. Default timeout is 60 seconds.
        const responseString = await (0, _msalCommon.invokeAsync)((0, _silentHandlerMjs.monitorIframeForHash), (0, _msalCommon.PerformanceEvents).SilentHandlerMonitorIframeForHash, this.logger, this.performanceClient, correlationId)(msalFrame, this.config.system.iframeHashTimeout, this.config.system.pollIntervalMilliseconds, this.performanceClient, this.logger, correlationId, responseType);
        const serverParams = (0, _msalCommon.invoke)((0, _responseHandlerMjs.deserializeResponse), (0, _msalCommon.PerformanceEvents).DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(responseString, responseType, this.logger);
        if (serverParams.accountId) {
            this.logger.verbose("Account id found in hash, calling WAM for token");
            if (!this.nativeMessageHandler) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.nativeConnectionNotEstablished));
            const nativeInteractionClient = new (0, _nativeInteractionClientMjs.NativeInteractionClient)(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, this.browserStorage, correlationId);
            const { userRequestState } = (0, _msalCommon.ProtocolUtils).parseRequestState(this.browserCrypto, silentRequest.state);
            return (0, _msalCommon.invokeAsync)(nativeInteractionClient.acquireToken.bind(nativeInteractionClient), (0, _msalCommon.PerformanceEvents).NativeInteractionClientAcquireToken, this.logger, this.performanceClient, correlationId)({
                ...silentRequest,
                state: userRequestState,
                prompt: silentRequest.prompt || (0, _msalCommon.PromptValue).NONE
            });
        }
        // Handle response from hash string
        return (0, _msalCommon.invokeAsync)(interactionHandler.handleCodeResponse.bind(interactionHandler), (0, _msalCommon.PerformanceEvents).HandleCodeResponse, this.logger, this.performanceClient, correlationId)(serverParams, silentRequest);
    }
}

},{"@azure/msal-common":"rNWNa","./StandardInteractionClient.mjs":"1Pw1B","../error/BrowserAuthError.mjs":"hI9Lm","../utils/BrowserConstants.mjs":"izeV4","../interaction_handler/SilentHandler.mjs":"3YmjJ","../broker/nativeBroker/NativeMessageHandler.mjs":"01Tz2","./NativeInteractionClient.mjs":"bOcEE","../interaction_handler/InteractionHandler.mjs":"g9nQu","../utils/BrowserUtils.mjs":"7ahCa","../response/ResponseHandler.mjs":"4YI3v","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3YmjJ":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initiateAuthRequest", ()=>initiateAuthRequest);
parcelHelpers.export(exports, "monitorIframeForHash", ()=>monitorIframeForHash);
var _msalCommon = require("@azure/msal-common");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _configurationMjs = require("../config/Configuration.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Creates a hidden iframe to given URL using user-requested scopes as an id.
 * @param urlNavigate
 * @param userRequestScopes
 */ async function initiateAuthRequest(requestUrl, performanceClient, logger, correlationId, navigateFrameWait) {
    performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).SilentHandlerInitiateAuthRequest, correlationId);
    if (!requestUrl) {
        // Throw error if request URL is empty.
        logger.info("Navigate url is empty");
        throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.emptyNavigateUri));
    }
    if (navigateFrameWait) return (0, _msalCommon.invokeAsync)(loadFrame, (0, _msalCommon.PerformanceEvents).SilentHandlerLoadFrame, logger, performanceClient, correlationId)(requestUrl, navigateFrameWait, performanceClient, correlationId);
    return (0, _msalCommon.invoke)(loadFrameSync, (0, _msalCommon.PerformanceEvents).SilentHandlerLoadFrameSync, logger, performanceClient, correlationId)(requestUrl);
}
/**
 * Monitors an iframe content window until it loads a url with a known hash, or hits a specified timeout.
 * @param iframe
 * @param timeout
 */ async function monitorIframeForHash(iframe, timeout, pollIntervalMilliseconds, performanceClient, logger, correlationId, responseType) {
    performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).SilentHandlerMonitorIframeForHash, correlationId);
    return new Promise((resolve, reject)=>{
        if (timeout < (0, _configurationMjs.DEFAULT_IFRAME_TIMEOUT_MS)) logger.warning(`system.loadFrameTimeout or system.iframeHashTimeout set to lower (${timeout}ms) than the default (${(0, _configurationMjs.DEFAULT_IFRAME_TIMEOUT_MS)}ms). This may result in timeouts.`);
        /*
         * Polling for iframes can be purely timing based,
         * since we don't need to account for interaction.
         */ const timeoutId = window.setTimeout(()=>{
            window.clearInterval(intervalId);
            reject((0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.monitorWindowTimeout)));
        }, timeout);
        const intervalId = window.setInterval(()=>{
            let href = "";
            const contentWindow = iframe.contentWindow;
            try {
                /*
                 * Will throw if cross origin,
                 * which should be caught and ignored
                 * since we need the interval to keep running while on STS UI.
                 */ href = contentWindow ? contentWindow.location.href : "";
            } catch (e) {}
            if (!href || href === "about:blank") return;
            let responseString = "";
            if (contentWindow) {
                if (responseType === (0, _msalCommon.ServerResponseType).QUERY) responseString = contentWindow.location.search;
                else responseString = contentWindow.location.hash;
            }
            window.clearTimeout(timeoutId);
            window.clearInterval(intervalId);
            resolve(responseString);
        }, pollIntervalMilliseconds);
    }).finally(()=>{
        (0, _msalCommon.invoke)(removeHiddenIframe, (0, _msalCommon.PerformanceEvents).RemoveHiddenIframe, logger, performanceClient, correlationId)(iframe);
    });
}
/**
 * @hidden
 * Loads iframe with authorization endpoint URL
 * @ignore
 * @deprecated
 */ function loadFrame(urlNavigate, navigateFrameWait, performanceClient, correlationId) {
    performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).SilentHandlerLoadFrame, correlationId);
    /*
     * This trick overcomes iframe navigation in IE
     * IE does not load the page consistently in iframe
     */ return new Promise((resolve, reject)=>{
        const frameHandle = createHiddenIframe();
        window.setTimeout(()=>{
            if (!frameHandle) {
                reject("Unable to load iframe");
                return;
            }
            frameHandle.src = urlNavigate;
            resolve(frameHandle);
        }, navigateFrameWait);
    });
}
/**
 * @hidden
 * Loads the iframe synchronously when the navigateTimeFrame is set to `0`
 * @param urlNavigate
 * @param frameName
 * @param logger
 */ function loadFrameSync(urlNavigate) {
    const frameHandle = createHiddenIframe();
    frameHandle.src = urlNavigate;
    return frameHandle;
}
/**
 * @hidden
 * Creates a new hidden iframe or gets an existing one for silent token renewal.
 * @ignore
 */ function createHiddenIframe() {
    const authFrame = document.createElement("iframe");
    authFrame.style.visibility = "hidden";
    authFrame.style.position = "absolute";
    authFrame.style.width = authFrame.style.height = "0";
    authFrame.style.border = "0";
    authFrame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
    document.body.appendChild(authFrame);
    return authFrame;
}
/**
 * @hidden
 * Removes a hidden iframe from the page.
 * @ignore
 */ function removeHiddenIframe(iframe) {
    if (document.body === iframe.parentNode) document.body.removeChild(iframe);
}

},{"@azure/msal-common":"rNWNa","../error/BrowserAuthError.mjs":"hI9Lm","../config/Configuration.mjs":"59132","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kxwk1":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SilentRefreshClient", ()=>SilentRefreshClient);
var _standardInteractionClientMjs = require("./StandardInteractionClient.mjs");
var _msalCommon = require("@azure/msal-common");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class SilentRefreshClient extends (0, _standardInteractionClientMjs.StandardInteractionClient) {
    /**
     * Exchanges the refresh token for new tokens
     * @param request
     */ async acquireToken(request) {
        this.performanceClient.addQueueMeasurement((0, _msalCommon.PerformanceEvents).SilentRefreshClientAcquireToken, request.correlationId);
        const baseRequest = await (0, _msalCommon.invokeAsync)(this.initializeBaseRequest.bind(this), (0, _msalCommon.PerformanceEvents).InitializeBaseRequest, this.logger, this.performanceClient, request.correlationId)(request);
        const silentRequest = {
            ...request,
            ...baseRequest
        };
        if (request.redirectUri) // Make sure any passed redirectUri is converted to an absolute URL - redirectUri is not a required parameter for refresh token redemption so only include if explicitly provided
        silentRequest.redirectUri = this.getRedirectUri(request.redirectUri);
        const serverTelemetryManager = this.initializeServerTelemetryManager((0, _browserConstantsMjs.ApiId).acquireTokenSilent_silentFlow);
        const refreshTokenClient = await this.createRefreshTokenClient(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions, silentRequest.account);
        // Send request to renew token. Auth module will throw errors if token cannot be renewed.
        return (0, _msalCommon.invokeAsync)(refreshTokenClient.acquireTokenByRefreshToken.bind(refreshTokenClient), (0, _msalCommon.PerformanceEvents).RefreshTokenClientAcquireTokenByRefreshToken, this.logger, this.performanceClient, request.correlationId)(silentRequest).catch((e)=>{
            e.setCorrelationId(this.correlationId);
            serverTelemetryManager.cacheFailedRequest(e);
            throw e;
        });
    }
    /**
     * Currently Unsupported
     */ logout() {
        // Synchronous so we must reject
        return Promise.reject((0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.silentLogoutUnsupported)));
    }
    /**
     * Creates a Refresh Client with the given authority, or the default authority.
     * @param serverTelemetryManager
     * @param authorityUrl
     */ async createRefreshTokenClient(serverTelemetryManager, authorityUrl, azureCloudOptions, account) {
        // Create auth module.
        const clientConfig = await (0, _msalCommon.invokeAsync)(this.getClientConfiguration.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)(serverTelemetryManager, authorityUrl, azureCloudOptions, account);
        return new (0, _msalCommon.RefreshTokenClient)(clientConfig, this.performanceClient);
    }
}

},{"./StandardInteractionClient.mjs":"1Pw1B","@azure/msal-common":"rNWNa","../utils/BrowserConstants.mjs":"izeV4","../error/BrowserAuthError.mjs":"hI9Lm","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbIr2":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TokenCache", ()=>TokenCache);
var _msalCommon = require("@azure/msal-common");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _base64DecodeMjs = require("../encode/Base64Decode.mjs");
var _browserCryptoMjs = require("../crypto/BrowserCrypto.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ /**
 * Token cache manager
 */ class TokenCache {
    constructor(configuration, storage, logger, cryptoObj){
        this.isBrowserEnvironment = typeof window !== "undefined";
        this.config = configuration;
        this.storage = storage;
        this.logger = logger;
        this.cryptoObj = cryptoObj;
    }
    // Move getAllAccounts here and cache utility APIs
    /**
     * API to load tokens to msal-browser cache.
     * @param request
     * @param response
     * @param options
     * @returns `AuthenticationResult` for the response that was loaded.
     */ loadExternalTokens(request, response, options) {
        this.logger.info("TokenCache - loadExternalTokens called");
        if (!response.id_token) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.unableToLoadToken));
        const idTokenClaims = (0, _msalCommon.AuthToken).extractTokenClaims(response.id_token, (0, _base64DecodeMjs.base64Decode));
        let cacheRecord;
        let authority;
        let cacheRecordAccount;
        if (request.account) {
            cacheRecordAccount = (0, _msalCommon.AccountEntity).createFromAccountInfo(request.account);
            cacheRecord = new (0, _msalCommon.CacheRecord)(cacheRecordAccount, this.loadIdToken(response.id_token, cacheRecordAccount.homeAccountId, request.account.environment, request.account.tenantId), this.loadAccessToken(request, response, cacheRecordAccount.homeAccountId, request.account.environment, request.account.tenantId, options), this.loadRefreshToken(request, response, cacheRecordAccount.homeAccountId, request.account.environment));
        } else if (request.authority) {
            const authorityUrl = (0, _msalCommon.Authority).generateAuthority(request.authority, request.azureCloudOptions);
            const authorityOptions = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata,
                skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
            };
            authority = new (0, _msalCommon.Authority)(authorityUrl, this.config.system.networkClient, this.storage, authorityOptions, this.logger, request.correlationId || (0, _browserCryptoMjs.createNewGuid)());
            // "clientInfo" from options takes precedence over "clientInfo" in response
            if (options.clientInfo) {
                this.logger.trace("TokenCache - homeAccountId from options");
                cacheRecordAccount = this.loadAccount(idTokenClaims, authority, options.clientInfo);
                cacheRecord = new (0, _msalCommon.CacheRecord)(cacheRecordAccount, this.loadIdToken(response.id_token, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant), this.loadAccessToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant, options), this.loadRefreshToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort));
            } else if (response.client_info) {
                this.logger.trace("TokenCache - homeAccountId from response");
                cacheRecordAccount = this.loadAccount(idTokenClaims, authority, response.client_info);
                cacheRecord = new (0, _msalCommon.CacheRecord)(cacheRecordAccount, this.loadIdToken(response.id_token, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant), this.loadAccessToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant, options), this.loadRefreshToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort));
            } else throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.unableToLoadToken));
        } else throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.unableToLoadToken));
        return this.generateAuthenticationResult(request, idTokenClaims, cacheRecord, cacheRecordAccount, authority);
    }
    /**
     * Helper function to load account to msal-browser cache
     * @param idToken
     * @param environment
     * @param clientInfo
     * @param authorityType
     * @param requestHomeAccountId
     * @returns `AccountEntity`
     */ loadAccount(idTokenClaims, authority, clientInfo, requestHomeAccountId) {
        if (this.isBrowserEnvironment) {
            this.logger.verbose("TokenCache - loading account");
            let homeAccountId;
            if (requestHomeAccountId) homeAccountId = requestHomeAccountId;
            else if (authority.authorityType !== undefined && clientInfo) homeAccountId = (0, _msalCommon.AccountEntity).generateHomeAccountId(clientInfo, authority.authorityType, this.logger, this.cryptoObj, idTokenClaims);
            if (!homeAccountId) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.unableToLoadToken));
            const claimsTenantId = idTokenClaims.tid;
            const cachedAccount = (0, _msalCommon.buildAccountToCache)(this.storage, authority, homeAccountId, idTokenClaims, (0, _base64DecodeMjs.base64Decode), clientInfo, authority.hostnameAndPort, claimsTenantId, undefined, undefined, this.logger);
            this.storage.setAccount(cachedAccount);
            return cachedAccount;
        } else throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.unableToLoadToken));
    }
    /**
     * Helper function to load id tokens to msal-browser cache
     * @param idToken
     * @param homeAccountId
     * @param environment
     * @param tenantId
     * @returns `IdTokenEntity`
     */ loadIdToken(idToken, homeAccountId, environment, tenantId) {
        const idTokenEntity = (0, _msalCommon.CacheHelpers).createIdTokenEntity(homeAccountId, environment, idToken, this.config.auth.clientId, tenantId);
        if (this.isBrowserEnvironment) {
            this.logger.verbose("TokenCache - loading id token");
            this.storage.setIdTokenCredential(idTokenEntity);
            return idTokenEntity;
        } else throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.unableToLoadToken));
    }
    /**
     * Helper function to load access tokens to msal-browser cache
     * @param request
     * @param response
     * @param homeAccountId
     * @param environment
     * @param tenantId
     * @returns `AccessTokenEntity`
     */ loadAccessToken(request, response, homeAccountId, environment, tenantId, options) {
        if (!response.access_token) {
            this.logger.verbose("TokenCache - No access token provided for caching");
            return null;
        }
        if (!response.expires_in) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.unableToLoadToken));
        if (!options.extendedExpiresOn) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.unableToLoadToken));
        const scopes = new (0, _msalCommon.ScopeSet)(request.scopes).printScopes();
        const expiresOn = options.expiresOn || response.expires_in + new Date().getTime() / 1000;
        const extendedExpiresOn = options.extendedExpiresOn;
        const accessTokenEntity = (0, _msalCommon.CacheHelpers).createAccessTokenEntity(homeAccountId, environment, response.access_token, this.config.auth.clientId, tenantId, scopes, expiresOn, extendedExpiresOn, (0, _base64DecodeMjs.base64Decode));
        if (this.isBrowserEnvironment) {
            this.logger.verbose("TokenCache - loading access token");
            this.storage.setAccessTokenCredential(accessTokenEntity);
            return accessTokenEntity;
        } else throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.unableToLoadToken));
    }
    /**
     * Helper function to load refresh tokens to msal-browser cache
     * @param request
     * @param response
     * @param homeAccountId
     * @param environment
     * @returns `RefreshTokenEntity`
     */ loadRefreshToken(request, response, homeAccountId, environment) {
        if (!response.refresh_token) {
            this.logger.verbose("TokenCache - No refresh token provided for caching");
            return null;
        }
        const refreshTokenEntity = (0, _msalCommon.CacheHelpers).createRefreshTokenEntity(homeAccountId, environment, response.refresh_token, this.config.auth.clientId);
        if (this.isBrowserEnvironment) {
            this.logger.verbose("TokenCache - loading refresh token");
            this.storage.setRefreshTokenCredential(refreshTokenEntity);
            return refreshTokenEntity;
        } else throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.unableToLoadToken));
    }
    /**
     * Helper function to generate an `AuthenticationResult` for the result.
     * @param request
     * @param idTokenObj
     * @param cacheRecord
     * @param authority
     * @returns `AuthenticationResult`
     */ generateAuthenticationResult(request, idTokenClaims, cacheRecord, accountEntity, authority) {
        let accessToken = (0, _msalCommon.Constants).EMPTY_STRING;
        let responseScopes = [];
        let expiresOn = null;
        let extExpiresOn;
        if (cacheRecord?.accessToken) {
            accessToken = cacheRecord.accessToken.secret;
            responseScopes = (0, _msalCommon.ScopeSet).fromString(cacheRecord.accessToken.target).asArray();
            expiresOn = new Date(Number(cacheRecord.accessToken.expiresOn) * 1000);
            extExpiresOn = new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1000);
        }
        const uid = idTokenClaims.oid || idTokenClaims.sub || (0, _msalCommon.Constants).EMPTY_STRING;
        const tid = idTokenClaims.tid || (0, _msalCommon.Constants).EMPTY_STRING;
        return {
            authority: authority ? authority.canonicalAuthority : (0, _msalCommon.Constants).EMPTY_STRING,
            uniqueId: uid,
            tenantId: tid,
            scopes: responseScopes,
            account: accountEntity.getAccountInfo(),
            idToken: cacheRecord.idToken?.secret || "",
            idTokenClaims: idTokenClaims || {},
            accessToken: accessToken,
            fromCache: true,
            expiresOn: expiresOn,
            correlationId: request.correlationId || (0, _msalCommon.Constants).EMPTY_STRING,
            requestId: (0, _msalCommon.Constants).EMPTY_STRING,
            extExpiresOn: extExpiresOn,
            familyId: (0, _msalCommon.Constants).EMPTY_STRING,
            tokenType: cacheRecord?.accessToken?.tokenType || (0, _msalCommon.Constants).EMPTY_STRING,
            state: (0, _msalCommon.Constants).EMPTY_STRING,
            cloudGraphHostName: accountEntity.cloudGraphHostName || (0, _msalCommon.Constants).EMPTY_STRING,
            msGraphHost: accountEntity.msGraphHost || (0, _msalCommon.Constants).EMPTY_STRING,
            code: undefined,
            fromNativeBroker: false
        };
    }
}

},{"@azure/msal-common":"rNWNa","../error/BrowserAuthError.mjs":"hI9Lm","../encode/Base64Decode.mjs":"12oz3","../crypto/BrowserCrypto.mjs":"foGbR","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dyTCV":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SilentAuthCodeClient", ()=>SilentAuthCodeClient);
var _msalCommon = require("@azure/msal-common");
var _standardInteractionClientMjs = require("./StandardInteractionClient.mjs");
var _browserAuthErrorMjs = require("../error/BrowserAuthError.mjs");
var _browserConstantsMjs = require("../utils/BrowserConstants.mjs");
var _hybridSpaAuthorizationCodeClientMjs = require("./HybridSpaAuthorizationCodeClient.mjs");
var _interactionHandlerMjs = require("../interaction_handler/InteractionHandler.mjs");
var _browserAuthErrorCodesMjs = require("../error/BrowserAuthErrorCodes.mjs");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class SilentAuthCodeClient extends (0, _standardInteractionClientMjs.StandardInteractionClient) {
    constructor(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, nativeMessageHandler, correlationId){
        super(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId);
        this.apiId = apiId;
    }
    /**
     * Acquires a token silently by redeeming an authorization code against the /token endpoint
     * @param request
     */ async acquireToken(request) {
        // Auth code payload is required
        if (!request.code) throw (0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.authCodeRequired));
        // Create silent request
        const silentRequest = await (0, _msalCommon.invokeAsync)(this.initializeAuthorizationRequest.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, request.correlationId)(request, (0, _browserConstantsMjs.InteractionType).Silent);
        const serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
        try {
            // Create auth code request (PKCE not needed)
            const authCodeRequest = {
                ...silentRequest,
                code: request.code
            };
            // Initialize the client
            const clientConfig = await (0, _msalCommon.invokeAsync)(this.getClientConfiguration.bind(this), (0, _msalCommon.PerformanceEvents).StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, request.correlationId)(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions, silentRequest.account);
            const authClient = new (0, _hybridSpaAuthorizationCodeClientMjs.HybridSpaAuthorizationCodeClient)(clientConfig);
            this.logger.verbose("Auth code client created");
            // Create silent handler
            const interactionHandler = new (0, _interactionHandlerMjs.InteractionHandler)(authClient, this.browserStorage, authCodeRequest, this.logger, this.performanceClient);
            // Handle auth code parameters from request
            return await (0, _msalCommon.invokeAsync)(interactionHandler.handleCodeResponseFromServer.bind(interactionHandler), (0, _msalCommon.PerformanceEvents).HandleCodeResponseFromServer, this.logger, this.performanceClient, request.correlationId)({
                code: request.code,
                msgraph_host: request.msGraphHost,
                cloud_graph_host_name: request.cloudGraphHostName,
                cloud_instance_host_name: request.cloudInstanceHostName
            }, silentRequest, false);
        } catch (e) {
            if (e instanceof (0, _msalCommon.AuthError)) {
                e.setCorrelationId(this.correlationId);
                serverTelemetryManager.cacheFailedRequest(e);
            }
            throw e;
        }
    }
    /**
     * Currently Unsupported
     */ logout() {
        // Synchronous so we must reject
        return Promise.reject((0, _browserAuthErrorMjs.createBrowserAuthError)((0, _browserAuthErrorCodesMjs.silentLogoutUnsupported)));
    }
}

},{"@azure/msal-common":"rNWNa","./StandardInteractionClient.mjs":"1Pw1B","../error/BrowserAuthError.mjs":"hI9Lm","../utils/BrowserConstants.mjs":"izeV4","./HybridSpaAuthorizationCodeClient.mjs":"fDptV","../interaction_handler/InteractionHandler.mjs":"g9nQu","../error/BrowserAuthErrorCodes.mjs":"3Rg8e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fDptV":[function(require,module,exports) {
/*! @azure/msal-browser v3.10.0 2024-02-17 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HybridSpaAuthorizationCodeClient", ()=>HybridSpaAuthorizationCodeClient);
var _msalCommon = require("@azure/msal-common");
"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */ class HybridSpaAuthorizationCodeClient extends (0, _msalCommon.AuthorizationCodeClient) {
    constructor(config){
        super(config);
        this.includeRedirectUri = false;
    }
}

},{"@azure/msal-common":"rNWNa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1OYTL","jZEa7"], "jZEa7", "parcelRequirecc93")

//# sourceMappingURL=index.3c2c95b0.js.map
