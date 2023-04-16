"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/webextension-polyfill/dist/browser-polyfill.js
  var require_browser_polyfill = __commonJS({
    "node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports2, module2) {
      (function(global2, factory) {
        if (typeof define === "function" && define.amd) {
          define("webextension-polyfill", ["module"], factory);
        } else if (typeof exports2 !== "undefined") {
          factory(module2);
        } else {
          var mod = {
            exports: {}
          };
          factory(mod);
          global2.browser = mod.exports;
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports2, function(module3) {
        "use strict";
        if (!globalThis.chrome?.runtime?.id) {
          throw new Error("This script should only be loaded in a browser extension.");
        }
        if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const wrapAPIs = (extensionAPIs) => {
            const apiMetadata = {
              "alarms": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "clearAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "bookmarks": {
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getChildren": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getRecent": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getSubTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTree": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "browserAction": {
                "disable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "enable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "getBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "openPopup": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "browsingData": {
                "remove": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "removeCache": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCookies": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeDownloads": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFormData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeHistory": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeLocalStorage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePasswords": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePluginData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "settings": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "commands": {
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "contextMenus": {
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "cookies": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAllCookieStores": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "devtools": {
                "inspectedWindow": {
                  "eval": {
                    "minArgs": 1,
                    "maxArgs": 2,
                    "singleCallbackArg": false
                  }
                },
                "panels": {
                  "create": {
                    "minArgs": 3,
                    "maxArgs": 3,
                    "singleCallbackArg": true
                  },
                  "elements": {
                    "createSidebarPane": {
                      "minArgs": 1,
                      "maxArgs": 1
                    }
                  }
                }
              },
              "downloads": {
                "cancel": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "download": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "erase": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFileIcon": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "open": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "pause": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFile": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "resume": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "extension": {
                "isAllowedFileSchemeAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "isAllowedIncognitoAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "history": {
                "addUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "deleteRange": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getVisits": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "i18n": {
                "detectLanguage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAcceptLanguages": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "identity": {
                "launchWebAuthFlow": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "idle": {
                "queryState": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "management": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getSelf": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setEnabled": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "uninstallSelf": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "notifications": {
                "clear": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPermissionLevel": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "pageAction": {
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "hide": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "permissions": {
                "contains": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "request": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "runtime": {
                "getBackgroundPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPlatformInfo": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "openOptionsPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "requestUpdateCheck": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "sendMessage": {
                  "minArgs": 1,
                  "maxArgs": 3
                },
                "sendNativeMessage": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "setUninstallURL": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "sessions": {
                "getDevices": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getRecentlyClosed": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "restore": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "storage": {
                "local": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                },
                "managed": {
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  }
                },
                "sync": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              },
              "tabs": {
                "captureVisibleTab": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "detectLanguage": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "discard": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "duplicate": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "executeScript": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getZoom": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getZoomSettings": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goBack": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goForward": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "highlight": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "insertCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "query": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "reload": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "sendMessage": {
                  "minArgs": 2,
                  "maxArgs": 3
                },
                "setZoom": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "setZoomSettings": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "update": {
                  "minArgs": 1,
                  "maxArgs": 2
                }
              },
              "topSites": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "webNavigation": {
                "getAllFrames": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFrame": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "webRequest": {
                "handlerBehaviorChanged": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "windows": {
                "create": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getLastFocused": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = (value) => {
              return value && typeof value === "object" && typeof value.then === "function";
            };
            const makeCallback = (promise, metadata) => {
              return (...callbackArgs) => {
                if (extensionAPIs.runtime.lastError) {
                  promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                  promise.resolve(callbackArgs[0]);
                } else {
                  promise.resolve(callbackArgs);
                }
              };
            };
            const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => {
              return function asyncFunctionWrapper(target, ...args) {
                if (args.length < metadata.minArgs) {
                  throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                  throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject) => {
                  if (metadata.fallbackToNoCallback) {
                    try {
                      target[name](...args, makeCallback({
                        resolve,
                        reject
                      }, metadata));
                    } catch (cbError) {
                      console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                      target[name](...args);
                      metadata.fallbackToNoCallback = false;
                      metadata.noCallback = true;
                      resolve();
                    }
                  } else if (metadata.noCallback) {
                    target[name](...args);
                    resolve();
                  } else {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  }
                });
              };
            };
            const wrapMethod = (target, method, wrapper) => {
              return new Proxy(method, {
                apply(targetMethod, thisObj, args) {
                  return wrapper.call(thisObj, target, ...args);
                }
              });
            };
            let hasOwnProperty7 = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = /* @__PURE__ */ Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache) {
                    return cache[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty7(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty7(wrappers, prop) || hasOwnProperty7(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty7(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache) {
                    cache[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(
                  req,
                  {},
                  {
                    getContent: {
                      minArgs: 0,
                      maxArgs: 0
                    }
                  }
                );
                listener(wrappedReq);
              };
            });
            const onMessageWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve) => {
                  wrappedSendResponse = function(response) {
                    didCallSendResponse = true;
                    resolve(response);
                  };
                });
                let result;
                try {
                  result = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result = Promise.reject(err);
                }
                const isResultThenable = result !== true && isThenable(result);
                if (result !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = (promise) => {
                  promise.then((msg) => {
                    sendResponse(msg);
                  }, (error) => {
                    let message2;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message2 = error.message;
                    } else {
                      message2 = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message: message2
                    });
                  }).catch((err) => {
                    console.error("Failed to send onMessage rejected reply", err);
                  });
                };
                if (isResultThenable) {
                  sendPromisedResult(result);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            });
            const wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              });
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          module3.exports = wrapAPIs(chrome);
        } else {
          module3.exports = globalThis.browser;
        }
      });
    }
  });

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f = {};
  var e = [];
  var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function a(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function h(l3, u3, i3) {
    var t3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return v(l3, f3, t3, o3, null);
  }
  function v(n2, i3, t3, o3, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function p(n2) {
    return n2.children;
  }
  function d(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function _(n2, l3) {
    if (null == l3)
      return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? _(n2) : null;
  }
  function k(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return k(n2);
    }
  }
  function b(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, o3, r3;
        n3.__d && (o3 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o3] : null, u3, null == o3 ? _(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && k(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, o3, r3, c3, s3, a3) {
    var h3, y2, d3, k3, b3, g3, w3, x = i3 && i3.__k || e, C2 = x.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if (null != (k3 = u3.__k[h3] = null == (k3 = l3[h3]) || "boolean" == typeof k3 ? null : "string" == typeof k3 || "number" == typeof k3 || "bigint" == typeof k3 ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(p, { children: k3 }, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, k3.ref ? k3.ref : null, k3.__v) : k3)) {
        if (k3.__ = u3, k3.__b = u3.__b + 1, null === (d3 = x[h3]) || d3 && k3.key == d3.key && k3.type === d3.type)
          x[h3] = void 0;
        else
          for (y2 = 0; y2 < C2; y2++) {
            if ((d3 = x[y2]) && k3.key == d3.key && k3.type === d3.type) {
              x[y2] = void 0;
              break;
            }
            d3 = null;
          }
        j(n2, k3, d3 = d3 || f, t3, o3, r3, c3, s3, a3), b3 = k3.__e, (y2 = k3.ref) && d3.ref != y2 && (w3 || (w3 = []), d3.ref && w3.push(d3.ref, null, k3), w3.push(y2, k3.__c || b3, k3)), null != b3 ? (null == g3 && (g3 = b3), "function" == typeof k3.type && k3.__k === d3.__k ? k3.__d = s3 = m(k3, s3, n2) : s3 = A(n2, k3, d3, x, b3, s3), "function" == typeof u3.type && (u3.__d = s3)) : s3 && d3.__e == s3 && s3.parentNode != n2 && (s3 = _(d3));
      }
    for (u3.__e = g3, h3 = C2; h3--; )
      null != x[h3] && N(x[h3], x[h3]);
    if (w3)
      for (h3 = 0; h3 < w3.length; h3++)
        M(w3[h3], w3[++h3], w3[++h3]);
  }
  function m(n2, l3, u3) {
    for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
      (i3 = t3[o3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function A(n2, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (void 0 !== l3.__d)
      r3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != o3 || null == t3.parentNode)
      n:
        if (null == o3 || o3.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o3), r3 = o3;
        }
    return void 0 !== r3 ? r3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      "children" === o3 || "key" === o3 || o3 in l3 || H(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
  }
  function $(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && -1 == l3.indexOf("-") ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
    var a3, h3, v3, y2, _3, k3, b3, g3, m3, x, A2, C2, $2, H2, I2, T2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
    try {
      n:
        if ("function" == typeof T2) {
          if (g3 = u3.props, m3 = (a3 = T2.contextType) && t3[a3.__c], x = a3 ? m3 ? m3.props.value : a3.__ : t3, i3.__c ? b3 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in T2 && T2.prototype.render ? u3.__c = h3 = new T2(g3, x) : (u3.__c = h3 = new d(g3, x), h3.constructor = T2, h3.render = O), m3 && m3.sub(h3), h3.props = g3, h3.state || (h3.state = {}), h3.context = x, h3.__n = t3, v3 = h3.__d = true, h3.__h = [], h3._sb = []), null == h3.__s && (h3.__s = h3.state), null != T2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = s({}, h3.__s)), s(h3.__s, T2.getDerivedStateFromProps(g3, h3.__s))), y2 = h3.props, _3 = h3.state, v3)
            null == T2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
          else {
            if (null == T2.getDerivedStateFromProps && g3 !== y2 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(g3, x), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(g3, h3.__s, x) || u3.__v === i3.__v) {
              for (h3.props = g3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), A2 = 0; A2 < h3._sb.length; A2++)
                h3.__h.push(h3._sb[A2]);
              h3._sb = [], h3.__h.length && f3.push(h3);
              break n;
            }
            null != h3.componentWillUpdate && h3.componentWillUpdate(g3, h3.__s, x), null != h3.componentDidUpdate && h3.__h.push(function() {
              h3.componentDidUpdate(y2, _3, k3);
            });
          }
          if (h3.context = x, h3.props = g3, h3.__v = u3, h3.__P = n2, C2 = l.__r, $2 = 0, "prototype" in T2 && T2.prototype.render) {
            for (h3.state = h3.__s, h3.__d = false, C2 && C2(u3), a3 = h3.render(h3.props, h3.state, h3.context), H2 = 0; H2 < h3._sb.length; H2++)
              h3.__h.push(h3._sb[H2]);
            h3._sb = [];
          } else
            do {
              h3.__d = false, C2 && C2(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
            } while (h3.__d && ++$2 < 25);
          h3.state = h3.__s, null != h3.getChildContext && (t3 = s(s({}, t3), h3.getChildContext())), v3 || null == h3.getSnapshotBeforeUpdate || (k3 = h3.getSnapshotBeforeUpdate(y2, _3)), I2 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n2, Array.isArray(I2) ? I2 : [I2], u3, i3, t3, o3, r3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b3 && (h3.__E = h3.__ = null), h3.__e = false;
        } else
          null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
      (a3 = l.diffed) && a3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t3, o3, r3, e3, c3) {
    var s3, h3, v3, y2 = i3.props, p3 = u3.props, d3 = u3.type, k3 = 0;
    if ("svg" === d3 && (o3 = true), null != r3) {
      for (; k3 < r3.length; k3++)
        if ((s3 = r3[k3]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : 3 === s3.nodeType)) {
          l3 = s3, r3[k3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d3)
        return document.createTextNode(p3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
    }
    if (null === d3)
      y2 === p3 || c3 && l3.data === p3 || (l3.data = p3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), h3 = (y2 = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
        if (null != r3)
          for (y2 = {}, k3 = 0; k3 < l3.attributes.length; k3++)
            y2[l3.attributes[k3].name] = l3.attributes[k3].value;
        (v3 || h3) && (v3 && (h3 && v3.__html == h3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p3, y2, o3, c3), v3)
        u3.__k = [];
      else if (k3 = u3.props.children, w(l3, Array.isArray(k3) ? k3 : [k3], u3, i3, t3, o3 && "foreignObject" !== d3, r3, e3, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
        for (k3 = r3.length; k3--; )
          null != r3[k3] && a(r3[k3]);
      c3 || ("value" in p3 && void 0 !== (k3 = p3.value) && (k3 !== l3.value || "progress" === d3 && !k3 || "option" === d3 && k3 !== y2.value) && H(l3, "value", k3, y2.value, false), "checked" in p3 && void 0 !== (k3 = p3.checked) && k3 !== l3.checked && H(l3, "checked", k3, y2.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, o3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null, n2.__c = void 0;
    }
    if (t3 = n2.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && N(t3[o3], u3, i3 || "function" != typeof n2.type);
    i3 || null == n2.__e || a(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function P(u3, i3, t3) {
    var o3, r3, e3;
    l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, e3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = h(p, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(e3, u3);
  }
  n = e.slice, l = { __e: function(n2, l3, u3, i3) {
    for (var t3, o3, r3; l3 = l3.__; )
      if ((t3 = l3.__c) && !t3.__)
        try {
          if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
            return t3.__E = t3;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, d.prototype.setState = function(n2, l3) {
    var u3;
    u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u3), this.props)), n2 && s(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), b(this));
  }, d.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
  }, d.prototype.render = p, t = [], g.__r = 0, r = 0;

  // src/util/localization.ts
  var import_webextension_polyfill = __toESM(require_browser_polyfill());

  // src/util/localizedStrings.json
  var localizedStrings_exports = {};
  __export(localizedStrings_exports, {
    choose_language: () => choose_language,
    current_date_placeholder_tip: () => current_date_placeholder_tip,
    default: () => localizedStrings_default,
    default_prompt: () => default_prompt,
    discord_button_tip: () => discord_button_tip,
    github_button_tip: () => github_button_tip,
    language: () => language,
    name_placeholder: () => name_placeholder,
    new_prompt: () => new_prompt,
    options: () => options,
    page_command_description: () => page_command_description,
    query_placeholder_tip: () => query_placeholder_tip,
    save: () => save,
    site_command_description: () => site_command_description,
    support_me: () => support_me,
    support_this_project: () => support_this_project,
    textarea_placeholder: () => textarea_placeholder,
    trim_long_text: () => trim_long_text,
    twitter_button_tip: () => twitter_button_tip,
    web_results_placeholder_tip: () => web_results_placeholder_tip,
    you_can_use_duckduckgo_bangs: () => you_can_use_duckduckgo_bangs
  });
  var default_prompt = {
    en: "Web search results:\n\n{web_results}\nCurrent date: {current_date}\n\nInstructions: Using the provided web search results, write a comprehensive reply to the given query. Make sure to cite results using [[number](URL)] notation after the reference. If the provided search results refer to multiple subjects with the same name, write separate answers for each subject.\nQuery: {query}"
  };
  var language = {
    en: "Language",
    pt: "Idioma",
    es: "Idioma",
    fr: "Langue",
    de: "Sprache",
    it: "Lingua",
    zh: "\u8BED\u8A00",
    "zh-TW": "\u8A9E\u8A00",
    ja: "\u8A00\u8A9E",
    ko: "\uC5B8\uC5B4",
    he: "\u05E9\u05E4\u05D4",
    ru: "\u044F\u0437\u044B\u043A",
    bg: "\u0415\u0437\u0438\u043A",
    pl: "J\u0119zyk"
  };
  var choose_language = {
    en: "Choose language",
    pt: "Escolha o idioma",
    es: "Elegir idioma",
    fr: "Choisir la langue",
    de: "Sprache ausw\xE4hlen",
    it: "Scegli la lingua",
    zh: "\u9009\u62E9\u8BED\u8A00",
    "zh-TW": "\u9078\u64C7\u8A9E\u8A00",
    ja: "\u8A00\u8A9E\u3092\u9078\u629E",
    ko: "\uC5B8\uC5B4 \uC120\uD0DD",
    he: "\u05D1\u05D7\u05E8 \u05E9\u05E4\u05D4",
    ru: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u044F\u0437\u044B\u043A",
    bg: "\u0418\u0437\u0431\u0435\u0440\u0438 \u0435\u0437\u0438\u043A",
    pl: "Wybierz j\u0119zyk"
  };
  var options = {
    en: "Options",
    pt: "Op\xE7\xF5es",
    es: "Opciones",
    fr: "Options",
    de: "Optionen",
    it: "Opzioni",
    zh: "\u9009\u9879",
    "zh-TW": "\u9078\u9805",
    ja: "\u30AA\u30D7\u30B7\u30E7\u30F3",
    ko: "\uC635\uC158",
    he: "\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA",
    ru: "\u041E\u043F\u0446\u0438\u0438",
    bg: "\u041E\u043F\u0446\u0438\u0438",
    pl: "Opcje"
  };
  var trim_long_text = {
    en: "Trim long text to fit into context limit",
    pt: "Recortar texto longo para caber no limite de contexto",
    es: "Recortar texto largo para que quepa en el l\xEDmite de contexto",
    fr: "Raccourcir le texte long pour qu'il rentre dans la limite de contexte",
    de: "Langen Text k\xFCrzen, um in das Kontextlimit zu passen",
    it: "Riduci il testo lungo per adattarlo al limite di contesto",
    zh: "\u5C06\u957F\u6587\u672C\u4FEE\u526A\u4EE5\u9002\u5408\u4E0A\u4E0B\u6587\u9650\u5236",
    "zh-TW": "\u5C07\u9577\u6587\u672C\u4FEE\u526A\u4EE5\u9069\u5408\u4E0A\u4E0B\u6587\u9650\u5236",
    ja: "\u9577\u3044\u30C6\u30AD\u30B9\u30C8\u3092\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u5236\u9650\u306B\u5408\u308F\u305B\u3066\u5207\u308A\u8A70\u3081\u307E\u3059",
    ko: "\uAE34 \uD14D\uC2A4\uD2B8\uB97C \uCEE8\uD14D\uC2A4\uD2B8 \uC81C\uD55C\uC5D0 \uB9DE\uAC8C \uC798\uB77C\uB0C5\uB2C8\uB2E4.",
    he: "\u05E7\u05E6\u05E8 \u05D0\u05EA \u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05D0\u05E8\u05D5\u05DA \u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05DE\u05D2\u05D1\u05DC\u05EA \u05D4\u05D4\u05E7\u05E9\u05E8",
    ru: "\u041E\u0431\u0440\u0435\u0437\u0430\u0442\u044C \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u043E\u0436\u0438\u0442\u044C\u0441\u044F \u0432 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430",
    bg: "\u0421\u043A\u044A\u0441\u0438 \u0434\u044A\u043B\u044A\u0433 \u0442\u0435\u043A\u0441\u0442, \u0437\u0430 \u0434\u0430 \u0441\u0435 \u043F\u043E\u0431\u0435\u0440\u0435 \u0432 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u043B\u0438\u043C\u0438\u0442\u0430",
    pl: "Przytnij d\u0142ugi tekst, aby zmie\u015Bci\u0107 si\u0119 w limicie kontekstu"
  };
  var textarea_placeholder = {
    en: "Press / to open the commands menu",
    pt: "Pressione / para abrir o menu de comandos",
    es: "Presione / para abrir el men\xFA de comandos",
    fr: "Appuyez sur / pour ouvrir le menu des commandes",
    de: "Dr\xFCcken Sie /, um das Befehlsmen\xFC zu \xF6ffnen",
    it: "Premi / per aprire il menu dei comandi",
    zh: "\u6309 / \u6253\u5F00\u547D\u4EE4\u83DC\u5355",
    "zh-TW": "\u6309 / \u958B\u555F\u547D\u4EE4\u9078\u55AE",
    ja: "/ \u3092\u62BC\u3057\u3066\u30B3\u30DE\u30F3\u30C9 \u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304D\u307E\u3059",
    ko: "/\uB97C \uB20C\uB7EC \uBA85\uB839 \uBA54\uB274\uB97C \uC5FD\uB2C8\uB2E4.",
    he: "\u05DC\u05D7\u05E5 \u05E2\u05DC / \u05DB\u05D3\u05D9 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05EA \u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05E4\u05E7\u05D5\u05D3\u05D5\u05EA",
    ru: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 / \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E \u043A\u043E\u043C\u0430\u043D\u0434",
    bg: "\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 / \u0437\u0430 \u0434\u0430 \u043E\u0442\u0432\u043E\u0440\u0438\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E\u0442\u043E \u043C\u0435\u043D\u044E"
  };
  var you_can_use_duckduckgo_bangs = {
    en: "You can use DuckDuckGo bangs to search on other websites. Learn more:",
    pt: "Voc\xEA pode usar os bangs do DuckDuckGo para pesquisar em outros sites. Saiba mais:",
    es: "Puede usar los bangs de DuckDuckGo para buscar en otros sitios. Obtenga m\xE1s informaci\xF3n:",
    fr: "Vous pouvez utiliser les bangs DuckDuckGo pour rechercher sur d'autres sites. En savoir plus:",
    de: "Sie k\xF6nnen DuckDuckGo-Bangs verwenden, um auf anderen Websites zu suchen. Erfahren Sie mehr:",
    it: "Puoi usare i DuckDuckGo bang per cercare su altri siti web. Ulteriori informazioni:",
    zh: "\u60A8\u53EF\u4EE5\u4F7F\u7528 DuckDuckGo bang \u5728\u5176\u4ED6\u7F51\u7AD9\u4E0A\u641C\u7D22\u3002\u4E86\u89E3\u66F4\u591A\uFF1A",
    "zh-TW": "\u60A8\u53EF\u4EE5\u4F7F\u7528 DuckDuckGo bang \u5728\u5176\u4ED6\u7DB2\u7AD9\u4E0A\u641C\u5C0B\u3002\u4E86\u89E3\u66F4\u591A\uFF1A",
    ja: "DuckDuckGo bang\u3092\u4F7F\u7528\u3057\u3066\u4ED6\u306EWeb\u30B5\u30A4\u30C8\u3067\u691C\u7D22\u3067\u304D\u307E\u3059\u3002\u8A73\u7D30\u306F\u6B21\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044:",
    ko: "DuckDuckGo bang\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB2E4\uB978 \uC6F9\uC0AC\uC774\uD2B8\uC5D0\uC11C \uAC80\uC0C9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9:",
    he: "\u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1- DuckDuckGo bangs \u05DB\u05D3\u05D9 \u05DC\u05D7\u05E4\u05E9 \u05D1\u05D0\u05EA\u05E8\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9\u05DD. \u05DC\u05DE\u05D3 \u05E2\u05D5\u05D3:",
    ru: "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C DuckDuckGo bang \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0430\u0439\u0442\u0430\u0445. \u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435:",
    bg: "Mo\u0436\u0435 \u0434\u0430 \u0438\u0437\u043F\u043B\u043E\u0437\u0432\u0430\u0442\u0435 DuckDuckGo bangs \u0437\u0430 \u0442\u0430 \u0442\u044A\u0440\u0441\u0438\u0442\u0435 \u0432 \u0434\u0440\u0443\u0433\u0438 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u043E\u0432\u0435. \u041D\u0430\u0443\u0447\u0435\u0442\u0435 \u043F\u043E\u0432\u0435\u0447\u0435:"
  };
  var site_command_description = {
    en: "Restrict search results to a specific website, e.g. /site:wikipedia.com",
    pt: "Restringir resultados de pesquisa a um website espec\xEDfico, por exemplo /site:wikipedia.com",
    es: "Restringir los resultados de b\xFAsqueda a un sitio web espec\xEDfico, por ejemplo /site:wikipedia.com",
    fr: "Restreindre les r\xE9sultats de recherche \xE0 un site Web sp\xE9cifique, par exemple /site:wikipedia.com",
    de: "Suchergebnisse auf eine bestimmte Website einschr\xE4nken, z. B. /site:wikipedia.com",
    it: "Limita i risultati della ricerca a un sito Web specifico, ad esempio /site:wikipedia.com",
    zh: "\u5C06\u641C\u7D22\u7ED3\u679C\u9650\u5236\u4E3A\u7279\u5B9A\u7F51\u7AD9\uFF0C\u4F8B\u5982 /site:wikipedia.com",
    "zh-TW": "\u5C07\u641C\u5C0B\u7D50\u679C\u9650\u5236\u70BA\u7279\u5B9A\u7DB2\u7AD9\uFF0C\u4F8B\u5982 /site:wikipedia.com",
    ja: "\u7279\u5B9A\u306EWeb\u30B5\u30A4\u30C8\u306E\u691C\u7D22\u7D50\u679C\u3092\u5236\u9650\u3057\u307E\u3059\u3002\u4F8B: /site:wikipedia.com",
    ko: "\uAC80\uC0C9 \uACB0\uACFC\uB97C \uD2B9\uC815 \uC6F9\uC0AC\uC774\uD2B8\uB85C \uC81C\uD55C\uD569\uB2C8\uB2E4. \uC608: /site:wikipedia.com",
    he: "\u05D4\u05D2\u05D1\u05DC \u05D0\u05EA \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05D0\u05EA\u05E8 \u05DE\u05E1\u05D5\u05D9\u05DD, \u05DC\u05DE\u05E9\u05DC /site:wikipedia.com",
    ru: "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E\u0438\u0441\u043A\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u043C \u0441\u0430\u0439\u0442\u043E\u043C, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, /site:wikipedia.com",
    bg: "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0438 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0438 \u043E\u0442 \u0442\u044A\u0440\u0441\u0435\u043D\u0435\u0442\u043E \u0434\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438 \u0441\u0430\u0439\u0442\u043E\u0432\u0435, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 /site:wikipedia.com"
  };
  var page_command_description = {
    en: "Get the content of a specific page, e.g. /page:buymeacoffee.com/anzorq",
    pt: "Obter o conte\xFAdo de uma p\xE1gina espec\xEDfica, por exemplo /page:buymeacoffee.com/anzorq",
    es: "Obtener el contenido de una p\xE1gina espec\xEDfica, por ejemplo /page:buymeacoffee.com/anzorq",
    fr: "Obtenir le contenu d'une page sp\xE9cifique, par exemple /page:buymeacoffee.com/anzorq",
    de: "Den Inhalt einer bestimmten Seite erhalten, z. B. /page:buymeacoffee.com/anzorq",
    it: "Ottenere il contenuto di una pagina specifica, ad esempio, /page:buymeacoffee.com/anzorq",
    zh: "\u83B7\u53D6\u7279\u5B9A\u9875\u9762\u7684\u5185\u5BB9\uFF0C\u4F8B\u5982 /page:buymeacoffee.com/anzorq",
    "zh-TW": "\u53D6\u5F97\u7279\u5B9A\u9801\u9762\u7684\u5167\u5BB9\uFF0C\u4F8B\u5982 /page:buymeacoffee.com/anzorq",
    ja: "\u7279\u5B9A\u306E\u30DA\u30FC\u30B8\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002\u4F8B: /page:buymeacoffee.com/anzorq",
    ko: "\uD2B9\uC815 \uD398\uC774\uC9C0\uC758 \uB0B4\uC6A9\uC744 \uAC00\uC838\uC635\uB2C8\uB2E4. \uC608: /page:buymeacoffee.com/anzorq",
    he: "\u05E7\u05D1\u05DC \u05D0\u05EA \u05EA\u05D5\u05DB\u05DF \u05D3\u05E3 \u05DE\u05E1\u05D5\u05D9\u05DD, \u05DC\u05DE\u05E9\u05DC /page:buymeacoffee.com/anzorq",
    ru: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, /page:buymeacoffee.com/anzorq",
    bg: "\u0412\u0437\u0435\u043C\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0442 \u0441\u043F\u0435\u0441\u0438\u0444\u0438\u0447\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 /page:buymeacoffee.com/anzorq"
  };
  var support_this_project = {
    en: "Support this project",
    pt: "Apoie este projeto",
    es: "Apoya este proyecto",
    fr: "Soutenez ce projet",
    de: "Unterst\xFCtzen Sie dieses Projekt",
    it: "Sostieni questo progetto",
    zh: "\u652F\u6301\u6B64\u9879\u76EE",
    "zh-TW": "\u652F\u6301\u6B64\u5C08\u6848",
    ja: "\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u652F\u63F4",
    ko: "\uC774 \uD504\uB85C\uC81D\uD2B8 \uC9C0\uC6D0",
    he: "\u05DC\u05EA\u05E8\u05D5\u05DD \u05DC\u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8",
    ru: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442",
    pl: "Wesprzyj ten projekt",
    bg: "\u041F\u043E\u0434\u043A\u0440\u0435\u043F\u0435\u0442\u0435 \u0442\u043E\u0437\u0438 \u043F\u0440\u043E\u0435\u043A\u0442"
  };
  var support_me = {
    en: "If you find this extension useful, please consider supporting me \u2935\uFE0F",
    pt: "Se voc\xEA achar \xFAtil esta extens\xE3o, por favor, considere apoiar-me \u2935\uFE0F",
    es: "Si encuentra \xFAtil esta extensi\xF3n, por favor considere apoyarme \u2935\uFE0F",
    fr: "Si vous trouvez cette extension utile, pensez \xE0 me soutenir \u2935\uFE0F",
    de: "Wenn Sie diese Erweiterung n\xFCtzlich finden, unterst\xFCtzen Sie mich bitte \u2935\uFE0F",
    it: "Se trovi questo estensione utile, considera di supportarmi \u2935\uFE0F",
    zh: "\u5982\u679C\u60A8\u89C9\u5F97\u8FD9\u4E2A\u6269\u5C55\u6709\u7528\uFF0C\u8BF7\u8003\u8651\u652F\u6301\u6211\u2935\uFE0F",
    "zh-TW": "\u5982\u679C\u60A8\u89BA\u5F97\u9019\u500B\u64F4\u5145\u529F\u80FD\u6709\u7528\uFF0C\u8ACB\u8003\u616E\u652F\u6301\u6211\u2935\uFE0F",
    ja: "\u3053\u306E\u62E1\u5F35\u6A5F\u80FD\u304C\u5F79\u7ACB\u3064\u3068\u601D\u308F\u308C\u308B\u5834\u5408\u306F\u3001\u79C1\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3053\u3068\u3092\u691C\u8A0E\u3057\u3066\u304F\u3060\u3055\u3044 \u2935\uFE0F",
    ko: "\uC774 \uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8\uC774 \uC720\uC6A9\uD558\uB2E4\uACE0 \uC0DD\uAC01\uB418\uBA74 \uC800\uB97C \uC9C0\uC6D0\uD574 \uC8FC\uC138\uC694 \u2935\uFE0F",
    he: "\u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E6\u05D0\u05EA \u05D0\u05EA \u05D4\u05EA\u05D5\u05E1\u05E3 \u05E9\u05D9\u05DE\u05D5\u05E9\u05D9, \u05D0\u05E0\u05D0 \u05E9\u05E7\u05D5\u05DC \u05DC\u05EA\u05DE\u05D5\u05DA \u05D1\u05D9 \u2935\uFE0F",
    ru: "\u0415\u0441\u043B\u0438 \u0432\u0430\u043C \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u044D\u0442\u043E \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0442\u0435 \u043C\u0435\u043D\u044F \u2935\uFE0F",
    pl: "Je\u015Bli uwa\u017Casz to rozszerzenie za przydatne, rozwa\u017C prosz\u0119 wsparcie mnie \u2935\uFE0F",
    bg: "\u0410\u043A\u043E \u0442\u043E\u0432\u0430 \u0440\u0430\u0437\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u0432\u0438 \u0435 \u043E\u0442 \u043F\u043E\u043B\u0437\u0430, \u043C\u043E\u043B\u044F, \u043E\u0431\u043C\u0438\u0441\u043B\u0435\u0442\u0435 \u0434\u0430 \u043C\u0435 \u043F\u043E\u0434\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u2935\uFE0F"
  };
  var save = {
    en: "Save",
    pt: "Salvar",
    es: "Guardar",
    fr: "Enregistrer",
    de: "Speichern",
    it: "Salva",
    zh: "\u4FDD\u5B58",
    "zh-TW": "\u5132\u5B58",
    ja: "\u4FDD\u5B58",
    ko: "\uC800\uC7A5",
    he: "\u05E9\u05DE\u05D5\u05E8",
    ru: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
    pl: "Zapisz",
    bg: "\u0417\u0430\u043F\u0430\u0437\u0438"
  };
  var new_prompt = {
    en: "New chat",
    pt: "Novo chat",
    es: "Nuevo chat",
    fr: "Nouveau chat",
    de: "Neues chat",
    it: "Nuovo chat",
    zh: "\u65B0\u63D0\u793A",
    "zh-TW": "\u65B0\u63D0\u793A",
    ja: "\u65B0\u3057\u3044\u30D7\u30ED\u30F3\u30D7\u30C8",
    ko: "\uC0C8\uB85C\uC6B4 \uD504\uB86C\uD504\uD2B8",
    he: "\u05D1\u05E7\u05E9\u05D4 \u05D7\u05D3\u05E9\u05D4",
    ru: "\u041D\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441",
    pl: "Nowe zapytanie",
    bg: "\u041D\u043E\u0432\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u0435"
  };
  var name_placeholder = {
    en: "Name",
    pt: "Nome",
    es: "Nombre",
    fr: "Nom",
    de: "Name",
    it: "Nome",
    zh: "\u540D\u79F0",
    "zh-TW": "\u540D\u7A31",
    ja: "\u540D\u524D",
    ko: "\uC774\uB984",
    he: "\u05E9\u05DD",
    ru: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
    pl: "Nazwa",
    bg: "\u0418\u043C\u0435"
  };
  var current_date_placeholder_tip = {
    en: "Insert placeholder for the current date (optional)",
    pt: "Insira o espa\xE7o reservado para a data atual (opcional)",
    es: "Ingrese un marcador de posici\xF3n para la fecha actual (opcional)",
    fr: "Ins\xE9rer un marqueur de place pour la date actuelle (facultatif)",
    de: "Platzhalter f\xFCr das aktuelle Datum einf\xFCgen (optional)",
    it: "Inserisci il segnaposto per la data attuale (opzionale)",
    zh: "\u63D2\u5165\u5F53\u524D\u65E5\u671F\u7684\u5360\u4F4D\u7B26\uFF08\u53EF\u9009\uFF09",
    "zh-TW": "\u63D2\u5165\u76EE\u524D\u65E5\u671F\u7684\u4F54\u4F4D\u7B26\uFF08\u9078\u586B\uFF09",
    ja: "\u73FE\u5728\u306E\u65E5\u4ED8\u306E\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC\u3092\u633F\u5165\uFF08\u4EFB\u610F\uFF09",
    ko: "\uD604\uC7AC \uB0A0\uC9DC\uC758 \uC790\uB9AC \uD45C\uC2DC\uC790\uB97C \uC0BD\uC785 (\uC120\uD0DD \uC0AC\uD56D)",
    he: "\u05D4\u05D5\u05E1\u05E3 \u05DE\u05E6\u05D9\u05D9\u05DF \u05DE\u05D9\u05E7\u05D5\u05DD \u05E2\u05D1\u05D5\u05E8 \u05D4\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 (\u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9)",
    ru: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043B\u0435\u0439\u0441\u0445\u043E\u043B\u0434\u0435\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0434\u0430\u0442\u044B (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
    pl: "Wstaw znacznik dla bie\u017C\u0105cej daty (opcjonalne)",
    bg: "\u0412\u043C\u044A\u043A\u043D\u0438 \u0437\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B \u0437\u0430 \u0441\u0435\u0433\u0430\u0448\u043D\u0430\u0442\u0430 \u0434\u0430\u0442\u0430 (\u043F\u043E \u0436\u0435\u043B\u0430\u043D\u0438\u0435)"
  };
  var web_results_placeholder_tip = {
    en: "Insert placeholder for the web results (optional)",
    pt: "Insira o espa\xE7o reservado para os resultados da pesquisa na web (opcional)",
    es: "Ingrese un marcador de posici\xF3n para los resultados de b\xFAsqueda web (opcional)",
    fr: "Ins\xE9rer un marqueur de place pour les r\xE9sultats de recherche web (facultatif)",
    de: "Platzhalter f\xFCr die Web-Ergebnisse einf\xFCgen (optional)",
    it: "Inserisci il segnaposto per i risultati web (opzionale)",
    zh: "\u63D2\u5165\u7F51\u7EDC\u641C\u7D22\u7ED3\u679C\u7684\u5360\u4F4D\u7B26\uFF08\u53EF\u9009\uFF09",
    "zh-TW": "\u63D2\u5165\u7DB2\u8DEF\u641C\u5C0B\u7D50\u679C\u7684\u4F54\u4F4D\u7B26\uFF08\u9078\u586B\uFF09",
    ja: "Web\u7D50\u679C\u306E\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC\u3092\u633F\u5165\uFF08\u4EFB\u610F\uFF09",
    ko: "\uC6F9 \uAC80\uC0C9 \uACB0\uACFC\uC758 \uC790\uB9AC \uD45C\uC2DC\uC790\uB97C \uC0BD\uC785 (\uC120\uD0DD \uC0AC\uD56D)",
    he: "\u05D4\u05D5\u05E1\u05E3 \u05DE\u05E6\u05D9\u05D9\u05DF \u05DE\u05D9\u05E7\u05D5\u05DD \u05E2\u05D1\u05D5\u05E8 \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D4\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8 (\u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9)",
    ru: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043B\u0435\u0439\u0441\u0445\u043E\u043B\u0434\u0435\u0440 \u0432\u0435\u0431-\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
    pl: "Wstaw znacznik dla wynik\xF3w wyszukiwania w sieci (opcjonalne)",
    bg: "\u0412\u043C\u044A\u043A\u043D\u0438 \u0437\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B \u0437\u0430 \u0443\u0435\u0431 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0438 (\u043F\u043E \u0436\u0435\u043B\u0430\u043D\u0438\u0435)"
  };
  var query_placeholder_tip = {
    en: "Insert placeholder for the initial query (required)",
    pt: "Insira o espa\xE7o reservado para a pergunta inicial (obrigat\xF3rio)",
    es: "Ingrese un marcador de posici\xF3n para la consulta inicial (requerido)",
    fr: "Ins\xE9rer un marqueur de place pour la requ\xEAte initiale (requis)",
    de: "Platzhalter f\xFCr die urspr\xFCngliche Anfrage einf\xFCgen (erforderlich)",
    it: "Inserisci il segnaposto per la query iniziale (richiesto)",
    zh: "\u63D2\u5165\u521D\u59CB\u67E5\u8BE2\u7684\u5360\u4F4D\u7B26\uFF08\u5FC5\u9700\uFF09",
    "zh-TW": "\u63D2\u5165\u521D\u59CB\u67E5\u8A62\u7684\u4F54\u4F4D\u7B26\uFF08\u5FC5\u586B\uFF09",
    ja: "\u521D\u671F\u30AF\u30A8\u30EA\u306E\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC\u3092\u633F\u5165\uFF08\u5FC5\u9808\uFF09",
    ko: "\uCD08\uAE30 \uCFFC\uB9AC\uC758 \uC790\uB9AC \uD45C\uC2DC\uC790\uB97C \uC0BD\uC785 (\uD544\uC218)",
    he: "\u05D4\u05D5\u05E1\u05E3 \u05DE\u05E6\u05D9\u05D9\u05DF \u05DE\u05D9\u05E7\u05D5\u05DD \u05E2\u05D1\u05D5\u05E8 \u05D4\u05E9\u05D0\u05D9\u05DC\u05EA\u05D4 \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05EA (\u05D7\u05D5\u05D1\u05D4)",
    ru: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043B\u0435\u0439\u0441\u0445\u043E\u043B\u0434\u0435\u0440 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430 (\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
    pl: "Wstaw znacznik dla pocz\u0105tkowego zapytania (wymagane)",
    bg: "\u0412\u043C\u044A\u043A\u043D\u0438 \u0437\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B \u0437\u0430 \u043D\u0430\u0447\u0430\u043B\u043D\u043E \u0442\u044A\u0440\u0441\u0435\u043D\u0435 (\u043F\u043E \u0436\u0435\u043B\u0430\u043D\u0438\u0435)"
  };
  var twitter_button_tip = {
    en: "Follow me on Twitter",
    pt: "Siga-me no Twitter",
    es: "S\xEDgueme en Twitter",
    fr: "Me suivre sur Twitter",
    de: "Folgen Sie mir auf Twitter",
    it: "Seguimi su Twitter",
    zh: "\u5728 Twitter \u4E0A\u5173\u6CE8\u6211",
    "zh-TW": "\u5728 Twitter \u4E0A\u8DDF\u96A8\u6211",
    ja: "Twitter\u3067\u79C1\u3092\u30D5\u30A9\u30ED\u30FC",
    ko: "Twitter\uC5D0\uC11C \uB098\uB97C \uD314\uB85C\uC6B0\uD558\uC138\uC694",
    he: "\u05E2\u05E7\u05D1\u05D5 \u05D0\u05D7\u05E8\u05D9 \u05D1\u05D8\u05D5\u05D5\u05D9\u05D8\u05E8",
    ru: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u0435\u043D\u044F \u0432 Twitter",
    pl: "Obserwuj mnie na Twitterze",
    bg: "\u041F\u043E\u0441\u043B\u0435\u0434\u0432\u0430\u0439\u0442\u0435 \u043C\u0435 \u043D\u0430 Twitter"
  };
  var github_button_tip = {
    en: "View the source code on GitHub",
    pt: "Veja o c\xF3digo fonte no GitHub",
    es: "Ver el c\xF3digo fuente en GitHub",
    fr: "Voir le code source sur GitHub",
    de: "Quellcode auf GitHub anzeigen",
    it: "Visualizza il codice sorgente su GitHub",
    zh: "\u5728 GitHub \u4E0A\u67E5\u770B\u6E90\u4EE3\u7801",
    "zh-TW": "\u5728 GitHub \u4E0A\u67E5\u770B\u539F\u59CB\u78BC",
    ja: "GitHub\u4E0A\u306E\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u3092\u898B\u308B",
    ko: "GitHub\uC5D0\uC11C \uC18C\uC2A4 \uCF54\uB4DC \uBCF4\uAE30",
    he: "\u05E8\u05D0\u05D5 \u05D0\u05EA \u05D4\u05E7\u05D5\u05D3 \u05D1\u05D2\u05D9\u05D8\u05D4\u05D0\u05D1",
    ru: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434 \u043D\u0430 GitHub",
    pl: "Zobacz kod \u017Ar\xF3d\u0142owy na GitHubie",
    bg: "\u0412\u0438\u0436 \u0438\u0437\u0445\u043E\u0434\u043D\u0438\u044F \u043A\u043E\u0434 \u043D\u0430 Github"
  };
  var discord_button_tip = {
    en: "Join our Discord community",
    pt: "Junte-se \xE0 nossa comunidade no Discord",
    es: "\xDAnete a nuestra comunidad de Discord",
    fr: "Rejoignez notre communaut\xE9 Discord",
    de: "Treten Sie unserer Discord-Community bei",
    it: "Unisciti alla nostra comunit\xE0 su Discord",
    zh: "\u52A0\u5165\u6211\u4EEC\u7684 Discord \u793E\u533A",
    "zh-TW": "\u52A0\u5165\u6211\u5011\u7684 Discord \u793E\u7FA4",
    ja: "\u79C1\u305F\u3061\u306EDiscord\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u53C2\u52A0\u3057\u3066\u304F\u3060\u3055\u3044",
    ko: "\uC6B0\uB9AC\uC758 Discord \uCEE4\uBBA4\uB2C8\uD2F0\uC5D0 \uAC00\uC785\uD558\uC138\uC694",
    he: "\u05D1\u05D5\u05D0\u05D5 \u05DC\u05E7\u05D4\u05D9\u05DC\u05EA \u05D4\u05D3\u05D9\u05E1\u05E7\u05D5\u05E8\u05D3 \u05E9\u05DC\u05E0\u05D5",
    ru: "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u043A \u043D\u0430\u0448\u0435\u043C\u0443 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443 \u043D\u0430 Discord",
    pl: "Do\u0142\u0105cz do naszej spo\u0142eczno\u015Bci na Discordzie",
    bg: "\u041F\u0440\u0438\u0441\u044A\u0435\u0434\u0438\u043D\u0438 \u0441\u0435 \u043A\u044A\u043C \u043D\u0430\u0448a\u0442a Discord \u043E\u0431\u0449\u043D\u043E\u0441\u0442"
  };
  var localizedStrings_default = {
    default_prompt,
    language,
    choose_language,
    options,
    trim_long_text,
    textarea_placeholder,
    you_can_use_duckduckgo_bangs,
    site_command_description,
    page_command_description,
    support_this_project,
    support_me,
    save,
    new_prompt,
    name_placeholder,
    current_date_placeholder_tip,
    web_results_placeholder_tip,
    query_placeholder_tip,
    twitter_button_tip,
    github_button_tip,
    discord_button_tip
  };

  // src/util/localization.ts
  var getSystemLanguage = () => import_webextension_polyfill.default.i18n.getUILanguage().split("-")[0];
  var Languages = {
    auto: "Auto",
    en: "English",
    de: "Deutsch",
    es: "Espa\xF1ol",
    fr: "Fran\xE7ais",
    it: "Italiano",
    ja: "\u65E5\u672C\u8A9E",
    ko: "\uD55C\uAD6D\uC5B4",
    pl: "Polski",
    pt: "Portugu\xEAs",
    ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    zh: "\u4E2D\u6587",
    "zh-TW": "\u4E2D\u6587\uFF08\u81FA\u7063\uFF09",
    he: "\u05E2\u05D1\u05E8\u05D9\u05EA",
    bg: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
  };
  var DEFAULT_LANGUAGE = "en";
  var language2 = getSystemLanguage();
  var getLocaleLanguage = () => language2;
  var getCurrentLanguageName = () => language2 === Languages.auto ? Languages.en : Languages[language2];
  var setLocaleLanguage = (newLanguage) => {
    language2 = newLanguage === "auto" ? getSystemLanguage() : newLanguage;
  };
  var getTranslation = (key, lang) => {
    if (lang) {
      return localizedStrings_exports[key][lang];
    }
    if (language2 in localizedStrings_exports[key]) {
      return localizedStrings_exports[key][language2];
    }
    return localizedStrings_exports[key][DEFAULT_LANGUAGE];
  };
  var localizationKeys = {
    defaultPrompt: "default_prompt",
    UI: {
      language: "language",
      options: "options",
      trimLongText: "trim_long_text",
      supportThisProject: "support_this_project",
      supportMe: "support_me",
      chooseLanguage: "choose_language",
      textareaPlaceholder: "textarea_placeholder",
      youCanUseDuckDuckGoBangs: "you_can_use_duckduckgo_bangs"
    },
    slashCommandsMenu: {
      siteCommandDescription: "site_command_description",
      pageCommandDescription: "page_command_description"
    },
    placeholders: {
      namePlaceholder: "name_placeholder"
    },
    buttons: {
      save: "save",
      newPrompt: "new_prompt"
    },
    placeHolderTips: {
      currentDate: "current_date_placeholder_tip",
      webResults: "web_results_placeholder_tip",
      query: "query_placeholder_tip"
    },
    socialButtonTips: {
      twitter: "twitter_button_tip",
      github: "github_button_tip",
      discord: "discord_button_tip"
    }
  };

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = [];
  var e2 = l.__b;
  var a2 = l.__r;
  var v2 = l.diffed;
  var l2 = l.__c;
  var m2 = l.unmount;
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function p2(n2) {
    return o2 = 1, y(B, n2);
  }
  function y(n2, u3, i3) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      r2.u = true;
      var f3 = r2.shouldComponentUpdate;
      r2.shouldComponentUpdate = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !f3 || f3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!f3 || f3.call(this, n3, t3, r3));
      };
    }
    return o3.__N || o3.__;
  }
  function h2(u3, i3) {
    var o3 = d2(t2++, 3);
    !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__H.__h.push(o3));
  }
  function s2(u3, i3) {
    var o3 = d2(t2++, 4);
    !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__h.push(o3));
  }
  function _2(n2) {
    return o2 = 5, F(function() {
      return { current: n2 };
    }, []);
  }
  function F(n2, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  l.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, l.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i3 = (r2 = n2.__c).__H;
    i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
    })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
  }, l.diffed = function(t3) {
    v2 && v2(t3);
    var o3 = t3.__c;
    o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
      n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
    })), u2 = r2 = null;
  }, l.__c = function(t3, r3) {
    r3.some(function(t4) {
      try {
        t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || w2(n2);
        });
      } catch (u3) {
        r3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), r3 = [], l.__e(u3, t4.__v);
      }
    }), l2 && l2(t3, r3);
  }, l.unmount = function(t3) {
    m2 && m2(t3);
    var r3, u3 = t3.__c;
    u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
      try {
        k2(n2);
      } catch (n3) {
        r3 = n3;
      }
    }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
  };
  var g2 = "function" == typeof requestAnimationFrame;
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // src/util/promptManager.ts
  var import_webextension_polyfill3 = __toESM(require_browser_polyfill());

  // node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }

  // node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (let i3 = 0; i3 < 256; ++i3) {
    byteToHex.push((i3 + 256).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  }

  // node_modules/uuid/dist/esm-browser/native.js
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native_default = {
    randomUUID
  };

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options2, buf, offset) {
    if (native_default.randomUUID && !buf && !options2) {
      return native_default.randomUUID();
    }
    options2 = options2 || {};
    const rnds = options2.random || (options2.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i3 = 0; i3 < 16; ++i3) {
        buf[offset + i3] = rnds[i3];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  var v4_default = v4;

  // node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // node_modules/lodash-es/_Symbol.js
  var Symbol2 = root_default.Symbol;
  var Symbol_default = Symbol2;

  // node_modules/lodash-es/_getRawTag.js
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e3) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getRawTag_default = getRawTag;

  // node_modules/lodash-es/_objectToString.js
  var objectProto2 = Object.prototype;
  var nativeObjectToString2 = objectProto2.toString;
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectToString_default = objectToString;

  // node_modules/lodash-es/_baseGetTag.js
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var baseGetTag_default = baseGetTag;

  // node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default = isObjectLike;

  // node_modules/lodash-es/isArray.js
  var isArray = Array.isArray;
  var isArray_default = isArray;

  // node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default = isObject;

  // node_modules/lodash-es/identity.js
  function identity(value) {
    return value;
  }
  var identity_default = identity;

  // node_modules/lodash-es/isFunction.js
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_default = isFunction;

  // node_modules/lodash-es/_coreJsData.js
  var coreJsData = root_default["__core-js_shared__"];
  var coreJsData_default = coreJsData;

  // node_modules/lodash-es/_isMasked.js
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var isMasked_default = isMasked;

  // node_modules/lodash-es/_toSource.js
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e3) {
      }
      try {
        return func + "";
      } catch (e3) {
      }
    }
    return "";
  }
  var toSource_default = toSource;

  // node_modules/lodash-es/_baseIsNative.js
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto2 = Function.prototype;
  var objectProto3 = Object.prototype;
  var funcToString2 = funcProto2.toString;
  var hasOwnProperty2 = objectProto3.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject_default(value) || isMasked_default(value)) {
      return false;
    }
    var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource_default(value));
  }
  var baseIsNative_default = baseIsNative;

  // node_modules/lodash-es/_getValue.js
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  var getValue_default = getValue;

  // node_modules/lodash-es/_getNative.js
  function getNative(object, key) {
    var value = getValue_default(object, key);
    return baseIsNative_default(value) ? value : void 0;
  }
  var getNative_default = getNative;

  // node_modules/lodash-es/_apply.js
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var apply_default = apply;

  // node_modules/lodash-es/_shortOut.js
  var HOT_COUNT = 800;
  var HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  var shortOut_default = shortOut;

  // node_modules/lodash-es/constant.js
  function constant(value) {
    return function() {
      return value;
    };
  }
  var constant_default = constant;

  // node_modules/lodash-es/_defineProperty.js
  var defineProperty = function() {
    try {
      var func = getNative_default(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e3) {
    }
  }();
  var defineProperty_default = defineProperty;

  // node_modules/lodash-es/_baseSetToString.js
  var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
    return defineProperty_default(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant_default(string),
      "writable": true
    });
  };
  var baseSetToString_default = baseSetToString;

  // node_modules/lodash-es/_setToString.js
  var setToString = shortOut_default(baseSetToString_default);
  var setToString_default = setToString;

  // node_modules/lodash-es/_isIndex.js
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var isIndex_default = isIndex;

  // node_modules/lodash-es/eq.js
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_default = eq;

  // node_modules/lodash-es/_overRest.js
  var nativeMax = Math.max;
  function overRest(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply_default(func, this, otherArgs);
    };
  }
  var overRest_default = overRest;

  // node_modules/lodash-es/_baseRest.js
  function baseRest(func, start) {
    return setToString_default(overRest_default(func, start, identity_default), func + "");
  }
  var baseRest_default = baseRest;

  // node_modules/lodash-es/isLength.js
  var MAX_SAFE_INTEGER2 = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
  }
  var isLength_default = isLength;

  // node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default = isArrayLike;

  // node_modules/lodash-es/_isIterateeCall.js
  function isIterateeCall(value, index, object) {
    if (!isObject_default(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
      return eq_default(object[index], value);
    }
    return false;
  }
  var isIterateeCall_default = isIterateeCall;

  // node_modules/lodash-es/_isPrototype.js
  var objectProto4 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto4;
    return value === proto;
  }
  var isPrototype_default = isPrototype;

  // node_modules/lodash-es/_baseTimes.js
  function baseTimes(n2, iteratee) {
    var index = -1, result = Array(n2);
    while (++index < n2) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var baseTimes_default = baseTimes;

  // node_modules/lodash-es/_baseIsArguments.js
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
  }
  var baseIsArguments_default = baseIsArguments;

  // node_modules/lodash-es/isArguments.js
  var objectProto5 = Object.prototype;
  var hasOwnProperty3 = objectProto5.hasOwnProperty;
  var propertyIsEnumerable = objectProto5.propertyIsEnumerable;
  var isArguments = baseIsArguments_default(function() {
    return arguments;
  }()) ? baseIsArguments_default : function(value) {
    return isObjectLike_default(value) && hasOwnProperty3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_default = isArguments;

  // node_modules/lodash-es/stubFalse.js
  function stubFalse() {
    return false;
  }
  var stubFalse_default = stubFalse;

  // node_modules/lodash-es/isBuffer.js
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root_default.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse_default;
  var isBuffer_default = isBuffer;

  // node_modules/lodash-es/_baseIsTypedArray.js
  var argsTag2 = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag2 = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
  }
  var baseIsTypedArray_default = baseIsTypedArray;

  // node_modules/lodash-es/_baseUnary.js
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var baseUnary_default = baseUnary;

  // node_modules/lodash-es/_nodeUtil.js
  var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess = moduleExports2 && freeGlobal_default.process;
  var nodeUtil = function() {
    try {
      var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e3) {
    }
  }();
  var nodeUtil_default = nodeUtil;

  // node_modules/lodash-es/isTypedArray.js
  var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
  var isTypedArray_default = isTypedArray;

  // node_modules/lodash-es/_arrayLikeKeys.js
  var objectProto6 = Object.prototype;
  var hasOwnProperty4 = objectProto6.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty4.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex_default(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var arrayLikeKeys_default = arrayLikeKeys;

  // node_modules/lodash-es/_nativeKeysIn.js
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  var nativeKeysIn_default = nativeKeysIn;

  // node_modules/lodash-es/_baseKeysIn.js
  var objectProto7 = Object.prototype;
  var hasOwnProperty5 = objectProto7.hasOwnProperty;
  function baseKeysIn(object) {
    if (!isObject_default(object)) {
      return nativeKeysIn_default(object);
    }
    var isProto = isPrototype_default(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty5.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeysIn_default = baseKeysIn;

  // node_modules/lodash-es/keysIn.js
  function keysIn(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
  }
  var keysIn_default = keysIn;

  // node_modules/lodash-es/defaults.js
  var objectProto8 = Object.prototype;
  var hasOwnProperty6 = objectProto8.hasOwnProperty;
  var defaults = baseRest_default(function(object, sources) {
    object = Object(object);
    var index = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : void 0;
    if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
      length = 1;
    }
    while (++index < length) {
      var source = sources[index];
      var props = keysIn_default(source);
      var propsIndex = -1;
      var propsLength = props.length;
      while (++propsIndex < propsLength) {
        var key = props[propsIndex];
        var value = object[key];
        if (value === void 0 || eq_default(value, objectProto8[key]) && !hasOwnProperty6.call(object, key)) {
          object[key] = source[key];
        }
      }
    }
    return object;
  });
  var defaults_default = defaults;

  // src/util/userConfig.ts
  var import_webextension_polyfill2 = __toESM(require_browser_polyfill());
  var defaultConfig = {
    numWebResults: 3,
    webAccess: true,
    region: "wt-wt",
    timePeriod: "",
    language: getSystemLanguage(),
    promptUUID: "default",
    trimLongText: false
  };
  async function getUserConfig() {
    const config = await import_webextension_polyfill2.default.storage.sync.get(defaultConfig);
    return defaults_default(config, defaultConfig);
  }
  async function updateUserConfig(config) {
    await import_webextension_polyfill2.default.storage.sync.set(config);
  }

  // src/util/promptManager.ts
  var SAVED_PROMPTS_KEY = "saved_prompts";
  var SAVED_PROMPTS_MOVED_KEY = "saved_prompts_moved_to_local";
  var getDefaultPrompt = () => {
    return {
      name: "Default prompt",
      text: getTranslation(localizationKeys.defaultPrompt, "en") + (getLocaleLanguage() !== "en" ? `
Reply in ${getCurrentLanguageName()}` : ""),
      uuid: "default"
    };
  };
  var getDefaultEnglishPrompt = () => {
    return { name: "Default English", text: getTranslation(localizationKeys.defaultPrompt, "en"), uuid: "default_en" };
  };
  var getSavedPrompts = async (addDefaults = true) => {
    const { [SAVED_PROMPTS_KEY]: localPrompts, [SAVED_PROMPTS_MOVED_KEY]: promptsMoved } = await import_webextension_polyfill3.default.storage.local.get({ [SAVED_PROMPTS_KEY]: [], [SAVED_PROMPTS_MOVED_KEY]: false });
    let savedPrompts = localPrompts;
    if (!promptsMoved) {
      const syncStorage = await import_webextension_polyfill3.default.storage.sync.get({ [SAVED_PROMPTS_KEY]: [] });
      const syncPrompts = syncStorage?.[SAVED_PROMPTS_KEY] ?? [];
      savedPrompts = localPrompts.reduce((prompts, prompt) => {
        if (!prompts.some(({ uuid }) => uuid === prompt.uuid))
          prompts.push(prompt);
        return prompts;
      }, syncPrompts);
      await import_webextension_polyfill3.default.storage.local.set({ [SAVED_PROMPTS_KEY]: savedPrompts, [SAVED_PROMPTS_MOVED_KEY]: true });
      await import_webextension_polyfill3.default.storage.sync.set({ [SAVED_PROMPTS_KEY]: [] });
    }
    return addDefaults ? addDefaultPrompts(savedPrompts) : savedPrompts;
  };
  function addDefaultPrompts(prompts) {
    if (getLocaleLanguage() !== "en") {
      addPrompt(prompts, getDefaultEnglishPrompt());
    }
    addPrompt(prompts, getDefaultPrompt());
    return prompts;
    function addPrompt(prompts2, prompt) {
      const index = prompts2.findIndex((i3) => i3.uuid === prompt.uuid);
      if (index >= 0) {
        prompts2[index] = prompt;
      } else {
        prompts2.unshift(prompt);
      }
    }
  }
  var savePrompt = async (prompt) => {
    const savedPrompts = await getSavedPrompts(false);
    const index = savedPrompts.findIndex((i3) => i3.uuid === prompt.uuid);
    if (index >= 0) {
      savedPrompts[index] = prompt;
    } else {
      prompt.uuid = v4_default();
      savedPrompts.push(prompt);
    }
    await import_webextension_polyfill3.default.storage.local.set({ [SAVED_PROMPTS_KEY]: savedPrompts });
  };
  var deletePrompt = async (prompt) => {
    let savedPrompts = await getSavedPrompts();
    savedPrompts = savedPrompts.filter((i3) => i3.uuid !== prompt.uuid);
    await import_webextension_polyfill3.default.storage.local.set({ [SAVED_PROMPTS_KEY]: savedPrompts });
  };

  // src/components/tooltipWrapper.tsx
  var tooltipPositions = {
    top: "wcg-tooltip-top",
    bottom: "wcg-tooltip-bottom"
  };
  function TooltipWrapper(props) {
    if (!props.tip)
      return props.children;
    return /* @__PURE__ */ h(
      "span",
      {
        className: `wcg-tooltip ${props.position || tooltipPositions.bottom}
             wcg-normal-case before:wcg-text-xs before:wcg-content-[attr(data-tip)]`,
        "data-tip": props.tip
      },
      props.children
    );
  }
  var tooltipWrapper_default = TooltipWrapper;

  // src/components/promptEditor.tsx
  var PromptEditor = (props) => {
    const [savedPrompts, setSavedPrompts] = p2([]);
    const [prompt, setPrompt] = p2(getDefaultPrompt());
    const [hasWebResultsPlaceholder, setHasWebResultsPlaceholder] = p2(false);
    const [hasQueryPlaceholder, setHasQueryPlaceholder] = p2(false);
    const [deleteBtnText, setDeleteBtnText] = p2("delete");
    const [showErrors, setShowErrors] = p2(false);
    const [nameError, setNameError] = p2(false);
    const [textError, setTextError] = p2(false);
    const [webResultsError, setWebResultsError] = p2(false);
    const [queryError, setQueryError] = p2(false);
    s2(() => {
      updateSavedPrompts();
    }, []);
    const updateSavedPrompts = async () => {
      const prompts = await getSavedPrompts();
      setSavedPrompts(prompts);
      if (prompt.uuid === "default") {
        setPrompt(prompts[0]);
      }
    };
    h2(() => {
      updateSavedPrompts();
    }, [props.language]);
    h2(() => {
      updatePlaceholderButtons(prompt.text);
    }, [prompt]);
    h2(() => {
      setNameError(prompt.name.trim() === "");
      setTextError(prompt.text.trim() === "");
      setQueryError(!prompt.text.includes("{query}"));
    }, [prompt]);
    async function updateList() {
      getSavedPrompts().then((sp) => {
        setSavedPrompts(sp);
      });
    }
    const handleSelect = (prompt2) => {
      setShowErrors(false);
      setPrompt(prompt2);
      setDeleteBtnText("delete");
    };
    const handleAdd = () => {
      setShowErrors(false);
      setPrompt({ name: "", text: "" });
      setDeleteBtnText("delete");
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    };
    const handleSave = async () => {
      setShowErrors(true);
      if (nameError || textError || webResultsError || queryError) {
        return;
      }
      await savePrompt(prompt);
      await updateList();
    };
    const handleDeleteBtnClick = () => {
      if (deleteBtnText === "delete") {
        setDeleteBtnText("check");
      } else {
        handleDelete();
      }
    };
    const handleDelete = async () => {
      await deletePrompt(prompt);
      updateList();
      handleAdd();
    };
    const nameInputRef = _2(null);
    const textareaRef = _2(null);
    const handleInsertText = (text) => {
      if (textareaRef.current) {
        const start = textareaRef.current.selectionStart;
        const end = textareaRef.current.selectionEnd;
        const currentText = textareaRef.current.value;
        const newText = currentText.substring(0, start) + text + currentText.substring(end, currentText.length);
        textareaRef.current.setSelectionRange(
          start + text.length,
          start + text.length
        );
        textareaRef.current.focus();
        setPrompt({ ...prompt, text: newText });
      }
    };
    const handleTextareaChange = (e3) => {
      const text = e3.target.value;
      if (text !== prompt.text) {
        setTextError(false);
        setPrompt({ ...prompt, text });
      }
    };
    const updatePlaceholderButtons = (text) => {
      setHasWebResultsPlaceholder(text.includes("{web_results}"));
      setHasQueryPlaceholder(text.includes("{query}"));
    };
    const styless = {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      border: "1px solid rgba(0, 0, 0, 0.8)",
      padding: "20px",
      fontSize: "30px",
      textAlign: "center"
    };
    const actionToolbar = /* @__PURE__ */ h(
      "div",
      {
        className: `wcg-mt-4 wcg-flex wcg-flex-row wcg-justify-between
                        ${prompt.uuid === "default" || prompt.uuid === "default_en" ? "wcg-hidden" : ""}`
      },
      /* @__PURE__ */ h("div", { className: "wcg-flex wcg-flex-row wcg-gap-4" }, /* @__PURE__ */ h(
        tooltipWrapper_default,
        {
          tip: getTranslation(localizationKeys.placeHolderTips.webResults)
        },
        /* @__PURE__ */ h(
          "button",
          {
            className: `wcg-btn-success wcg-btn
                        wcg-p-1 wcg-lowercase`,
            onClick: () => {
              handleInsertText("{web_results}");
            }
          },
          "{web_results}"
        )
      ), /* @__PURE__ */ h(
        tooltipWrapper_default,
        {
          tip: getTranslation(localizationKeys.placeHolderTips.query)
        },
        /* @__PURE__ */ h(
          "button",
          {
            className: `wcg-btn
                        ${showErrors && queryError ? "wcg-btn-error" : hasQueryPlaceholder ? "wcg-btn-success" : "wcg-btn-warning"}
                        wcg-p-1 wcg-lowercase`,
            onClick: () => {
              setQueryError(false);
              handleInsertText("{query}");
            }
          },
          "{query}"
        )
      ), /* @__PURE__ */ h(
        tooltipWrapper_default,
        {
          tip: getTranslation(localizationKeys.placeHolderTips.currentDate)
        },
        /* @__PURE__ */ h(
          "button",
          {
            className: "wcg-btn-success wcg-btn wcg-p-1 wcg-lowercase",
            onClick: () => handleInsertText("{current_date}")
          },
          "{current_date}"
        )
      )),
      /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          className: "wcg-btn-primary wcg-btn wcg-text-base",
          onClick: handleSave
        },
        getTranslation(localizationKeys.buttons.save)
      )
    );
    const PromptList = /* @__PURE__ */ h("div", null, /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        className: "wcg-btn-primary wcg-btn wcg-w-full wcg-text-base",
        onClick: handleAdd
      },
      /* @__PURE__ */ h("span", { class: "material-symbols-outlined wcg-mr-2" }, "add_circle"),
      getTranslation(localizationKeys.buttons.newPrompt)
    ), /* @__PURE__ */ h(
      "ul",
      {
        className: "wcg-scroll-y wcg-menu wcg-mt-4 wcg-flex wcg-max-h-96 wcg-scroll-m-0 wcg-flex-col\n                    wcg-flex-nowrap wcg-overflow-auto wcg-border-2\n                    wcg-border-solid wcg-border-white/20 wcg-p-0"
      },
      savedPrompts.map((prmpt) => /* @__PURE__ */ h("li", { key: prmpt.uuid, onClick: () => handleSelect(prmpt) }, /* @__PURE__ */ h(
        "a",
        {
          className: `wcg-text-base ${prmpt.uuid === prompt.uuid ? "wcg-active" : ""}`
        },
        "\u{1F4DD} ",
        prmpt.name
      )))
    ));
    const nameInput = /* @__PURE__ */ h(
      "input",
      {
        ref: nameInputRef,
        style: { width: "100%", padding: "1rem", marginTop: "1rem" },
        className: `wcg-input-bordered wcg-input wcg-flex-1
                        ${showErrors && nameError ? "wcg-input-error" : ""}`,
        placeholder: getTranslation(
          localizationKeys.placeholders.namePlaceholder
        ),
        value: prompt.name,
        onInput: (e3) => {
          setNameError(false);
          setPrompt({ ...prompt, name: e3.target.value });
        },
        disabled: prompt.uuid === "default" || prompt.uuid === "default_en"
      }
    );
    const btnDelete = /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        className: `wcg-btn wcg-text-base
                    ${deleteBtnText === "check" ? "wcg-btn-error" : "wcg-btn-primary"}
                    ${prompt.uuid === "default" || prompt.uuid === "default_en" ? "wcg-hidden" : ""}`,
        onClick: handleDeleteBtnClick
      },
      /* @__PURE__ */ h("span", { class: "material-symbols-outlined" }, deleteBtnText)
    );
    const textArea = /* @__PURE__ */ h(
      "textarea",
      {
        ref: textareaRef,
        style: { width: "100%" },
        className: `wcg-textarea-bordered wcg-textarea
                        ${showErrors && textError ? "wcg-textarea-error" : ""}
                        wcg-mt-2 wcg-h-96 wcg-resize-none wcg-text-base`,
        value: prompt.text,
        onInput: handleTextareaChange,
        disabled: prompt.uuid === "default" || prompt.uuid === "default_en",
        title: "Prompt template text"
      }
    );
    return /* @__PURE__ */ h(
      "div",
      {
        class: "grid-container",
        style: {
          display: "grid",
          columnGap: "50px",
          gridTemplateColumns: "auto auto auto ",
          padding: "10px",
          width: "100%",
          gap: 2
        }
      },
      /* @__PURE__ */ h("div", { style: styless }, textArea),
      /* @__PURE__ */ h("div", { style: styless }, textArea),
      /* @__PURE__ */ h("div", { style: styless }, textArea),
      /* @__PURE__ */ h("div", { style: styless }, textArea),
      /* @__PURE__ */ h("div", { style: styless }, textArea),
      /* @__PURE__ */ h("div", { style: styless }, textArea),
      /* @__PURE__ */ h("div", { style: styless }, textArea),
      /* @__PURE__ */ h("div", { style: styless }, textArea),
      /* @__PURE__ */ h("div", { style: styless }, textArea)
    );
  };
  var promptEditor_default = PromptEditor;

  // src/util/icons.tsx
  var twitterIcon = /* @__PURE__ */ h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ h("path", { fill: "#fff", "fill-rule": "evenodd", d: "M24 4.309a9.83 9.83 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.196 4.925 4.925 0 0 0-8.39 4.49A13.974 13.974 0 0 1 1.671 2.9a4.902 4.902 0 0 0-.667 2.476c0 1.708.869 3.216 2.191 4.099A4.936 4.936 0 0 1 .964 8.86v.06a4.926 4.926 0 0 0 3.95 4.829 4.964 4.964 0 0 1-2.224.085 4.93 4.93 0 0 0 4.6 3.42 9.886 9.886 0 0 1-6.115 2.107c-.398 0-.79-.023-1.175-.068a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.503 14.009-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.309" }));
  var discordIcon = /* @__PURE__ */ h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ h("path", { d: "M18.942 5.556a16.299 16.299 0 0 0-4.126-1.297c-.178.321-.385.754-.529 1.097a15.175 15.175 0 0 0-4.573 0 11.583 11.583 0 0 0-.535-1.097 16.274 16.274 0 0 0-4.129 1.3c-2.611 3.946-3.319 7.794-2.965 11.587a16.494 16.494 0 0 0 5.061 2.593 12.65 12.65 0 0 0 1.084-1.785 10.689 10.689 0 0 1-1.707-.831c.143-.106.283-.217.418-.331 3.291 1.539 6.866 1.539 10.118 0 .137.114.277.225.418.331-.541.326-1.114.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595c.415-4.396-.709-8.209-2.973-11.589zM8.678 14.813c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c.001 1.123-.793 2.045-1.798 2.045zm6.644 0c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c0 1.123-.793 2.045-1.798 2.045z", fill: "#fff", "fill-rule": "evenodd" }));
  var githubIcon = /* @__PURE__ */ h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ h("path", { d: "M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z", fill: "#fff", "fill-rule": "evenodd" }));
  var tuneIcon = /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24" }, /* @__PURE__ */ h("path", { fill: "#aaa", d: "M11 21v-6h2v2h8v2h-8v2Zm-8-2v-2h6v2Zm4-4v-2H3v-2h4V9h2v6Zm4-2v-2h10v2Zm4-4V3h2v2h4v2h-4v2ZM3 7V5h10v2Z" }));
  var Language = /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24" }, /* @__PURE__ */ h("path", { fill: "#fff", d: "m11.9 22 4.55-12h2.1l4.55 12H21l-1.05-3.05H15.1L14 22Zm3.8-4.8h3.6l-1.75-4.95h-.1ZM4 19l-1.4-1.4 5.05-5.05q-.95-1.05-1.662-2.175Q5.275 9.25 4.75 8h2.1q.45.9.963 1.625.512.725 1.237 1.525 1.1-1.2 1.825-2.462Q11.6 7.425 12.1 6H1V4h7V2h2v2h7v2h-2.9q-.525 1.775-1.425 3.45-.9 1.675-2.225 3.15l2.4 2.45-.75 2.05L9 14Z" }));
  var Expand = /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24" }, /* @__PURE__ */ h("path", { fill: "currentColor", d: "m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z" }));
  var TabKey = /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24" }, /* @__PURE__ */ h("path", { fill: "#fff", d: "M22 4.25a.75.75 0 00-1.5 0v15a.75.75 0 001.5 0v-15zm-9.72 14.28a.75.75 0 11-1.06-1.06l4.97-4.97H1.75a.75.75 0 010-1.5h14.44l-4.97-4.97a.75.75 0 011.06-1.06l6.25 6.25a.75.75 0 010 1.06l-6.25 6.25z" }));
  var icons = {
    twitter: twitterIcon,
    discord: discordIcon,
    github: githubIcon,
    tune: tuneIcon,
    language: Language,
    expand: Expand,
    tabKey: TabKey
  };

  // src/components/navBar.tsx
  var import_webextension_polyfill4 = __toESM(require_browser_polyfill());

  // src/components/socialIconButton.tsx
  function IconButton(props) {
    return /* @__PURE__ */ h(tooltipWrapper_default, { tip: props.tip }, /* @__PURE__ */ h("a", { href: props.url, target: "_blank", rel: "noopener noreferrer" }, /* @__PURE__ */ h("div", { className: "wcg-btn-ghost wcg-btn wcg-p-2 wcg-px-4" }, props.icon)));
  }
  var socialIconButton_default = IconButton;

  // src/components/navBar.tsx
  var NavBar = (props) => {
    const version = import_webextension_polyfill4.default.runtime.getManifest().version;
    return /* @__PURE__ */ h("div", { className: "wcg-navbar wcg-sticky wcg-top-0 wcg-z-30 wcg-rounded-lg wcg-bg-base-200" }, /* @__PURE__ */ h("div", { className: "wcg-flex-1 wcg-items-center wcg-gap-2" }, /* @__PURE__ */ h(
      "img",
      {
        className: "wcg-w-8 wcg-p-2",
        src: "../icons/icon48.png",
        alt: "WebChatGPT"
      }
    ), /* @__PURE__ */ h("span", { className: "wcg-text-xl wcg-font-bold" }, "FriendWithGPT"), /* @__PURE__ */ h("span", { className: "font-mono text-xs text-opacity-50 wcg-pt-1" }, version)), /* @__PURE__ */ h("div", { className: "wcg-flex-none wcg-gap-3" }, /* @__PURE__ */ h(
      tooltipWrapper_default,
      {
        tip: getTranslation(localizationKeys.UI.chooseLanguage)
      },
      /* @__PURE__ */ h("div", { className: "wcg-dropdown-end wcg-dropdown" }, /* @__PURE__ */ h(
        "div",
        {
          tabIndex: 0,
          className: "wcg-btn-ghost wcg-btn wcg-p-2 wcg-px-4"
        },
        icons.language,
        icons.expand
      ), /* @__PURE__ */ h(
        "ul",
        {
          tabIndex: 0,
          className: "wcg-dropdown-content wcg-menu wcg-rounded-box wcg-w-52 wcg-bg-base-100 wcg-p-2 wcg-shadow"
        },
        Object.entries(Languages).map(([value, label]) => /* @__PURE__ */ h(
          "li",
          {
            key: value,
            className: "wcg-menu-item",
            onClick: () => props.onLanguageChange(value)
          },
          /* @__PURE__ */ h(
            "a",
            {
              className: `wcg-text-base ${value === props.language ? "wcg-active" : ""}`
            },
            label
          )
        ))
      ))
    ), /* @__PURE__ */ h("div", { className: "wcg-divider" }), /* @__PURE__ */ h(
      socialIconButton_default,
      {
        url: "https://twitter.com/hahahahohohe",
        tip: getTranslation(localizationKeys.socialButtonTips.twitter),
        icon: icons.twitter
      }
    ), /* @__PURE__ */ h(
      socialIconButton_default,
      {
        url: "https://github.com/qunash/chatgpt-advanced",
        tip: getTranslation(localizationKeys.socialButtonTips.github),
        icon: icons.github
      }
    ), /* @__PURE__ */ h(
      socialIconButton_default,
      {
        url: "https://discord.gg/hjvAtVNtHa",
        tip: getTranslation(localizationKeys.socialButtonTips.discord),
        icon: icons.discord
      }
    )));
  };
  var navBar_default = NavBar;

  // src/components/optionsEditor.tsx
  var OptionsEditor = () => {
    const [trimLongText, setTrimLongText] = p2(null);
    h2(() => {
      getUserConfig().then((config) => {
        setTrimLongText(config.trimLongText);
      });
    }, []);
    return /* @__PURE__ */ h("div", { className: "wcg-flex wcg-w-4/5 wcg-flex-col wcg-gap-2" }, /* @__PURE__ */ h("h1", { className: "wcg-m-0 wcg-p-0 wcg-text-2xl" }, getTranslation(localizationKeys.UI.options)), /* @__PURE__ */ h("div", { class: "wcg-form-control" }, /* @__PURE__ */ h("label", { className: "wcg-label wcg-flex wcg-w-fit wcg-cursor-pointer wcg-items-center wcg-gap-2" }, /* @__PURE__ */ h("span", { className: "wcg-label-text wcg-text-lg" }, getTranslation(localizationKeys.UI.trimLongText)), /* @__PURE__ */ h(
      "input",
      {
        type: "checkbox",
        checked: trimLongText,
        onChange: (e3) => {
          const checkbox = e3.target;
          setTrimLongText(checkbox.checked);
          updateUserConfig({ trimLongText: checkbox.checked });
        }
      }
    ))));
  };
  var optionsEditor_default = OptionsEditor;

  // src/options/options.tsx
  var Footer = () => /* @__PURE__ */ h("div", { className: "wcg-flex wcg-flex-col wcg-items-center wcg-p-4" }, /* @__PURE__ */ h(
    "p",
    {
      style: { whiteSpace: "pre-line" },
      className: "wcg-m-0 wcg-p-1 wcg-text-center wcg-text-lg"
    },
    getTranslation(localizationKeys.UI.supportMe)
  ));
  function OptionsPage() {
    const [language3, setLanguage] = p2(null);
    s2(() => {
      getUserConfig().then((config) => {
        setLanguage(config.language);
        setLocaleLanguage(config.language);
      });
    }, []);
    const onLanguageChange = (language4) => {
      setLanguage(language4);
      updateUserConfig({ language: language4 });
      setLocaleLanguage(language4);
    };
    if (!language3) {
      return /* @__PURE__ */ h("div", null);
    }
    return /* @__PURE__ */ h("div", { className: "wcg-flex wcg-w-5/6 wcg-flex-col wcg-items-center" }, /* @__PURE__ */ h(navBar_default, { language: language3, onLanguageChange }), /* @__PURE__ */ h(promptEditor_default, { language: language3 }), /* @__PURE__ */ h("div", { className: "wcg-flex wcg-w-full wcg-flex-col wcg-items-center wcg-gap-4 md:wcg-w-4/5" }, /* @__PURE__ */ h("div", { className: "wcg-divider wcg-m-0 wcg-w-4/5 wcg-self-center" }), /* @__PURE__ */ h(optionsEditor_default, null), /* @__PURE__ */ h("div", { className: "wcg-divider wcg-m-0 wcg-w-4/5 wcg-self-center" }), /* @__PURE__ */ h("div", { className: "wcg-flex wcg-flex-col wcg-items-center wcg-self-center" }, /* @__PURE__ */ h(Footer, null))));
  }
  P(/* @__PURE__ */ h(OptionsPage, null), document.getElementById("options"));
})();
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
