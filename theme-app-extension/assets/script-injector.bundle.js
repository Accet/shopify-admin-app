(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else if (typeof exports === "object") exports["tbyb-common"] = factory();
  else root["TBYB"] = factory();
})(window, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter,
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === "object" &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, "default", {
        enumerable: true,
        value: value,
      });
      /******/ if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        // ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);

        // EXPORTS
        __webpack_require__.d(__webpack_exports__, "Config", function () {
          return /* reexport */ config_Config;
        });
        __webpack_require__.d(__webpack_exports__, "init", function () {
          return /* binding */ init;
        });

        // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }
        // CONCATENATED MODULE: ./src/config.js

        var config_Config = /*#__PURE__*/ (function () {
          function Config(config) {
            _classCallCheck(this, Config);

            _defineProperty(this, "_config", void 0);

            this.primaryColor = config.primary_color;
            this.secondaryColor = config.secondary_color;
            this.tag_color = config.tag_color;
            this.variant = config.variant;
            this.tbyb_btn_insert_position = config.tbyb_btn_insert_position;
            this.tbyb_btn_insert_container = config.tbyb_btn_insert_container;
            this.tbyb_btn_style = config.tbyb_btn_style;
            this.tbyb_btn_text = config.tbyb_btn_text || "Try Before You Buy";
            this.tbyb_lmm_shop_title = config.tbyb_lmm_shop_title;
            this.tbyb_lmm_shop_caption = config.tbyb_lmm_shop_caption;
            this.tbyb_lmm_try_caption = config.tbyb_lmm_try_caption;
            this.tbyb_lmm_try_title = config.tbyb_lmm_try_title;
            this.tbyb_lmm_keep_title = config.tbyb_lmm_keep_title;
            this.tbyb_lmm_keep_caption = config.tbyb_lmm_keep_caption;
            this.tbyb_lmm_return_title = config.tbyb_lmm_return_title;
            this.tbyb_lmm_return_caption = config.tbyb_lmm_return_caption;
            this._config = {
              rules: {
                minAmount: 10000,
                maxAmount: 100000,
                minCount: 1,
                deposit: 2000,
                restockingFee: 0,
                tryDays: 10,
                maxCountPerItem: 1,
              },
              implementation: {
                merchantDetails: {
                  id: "1",
                  name: "Dawn",
                },
                autoOptIn: false,
                useCustomPricing: false,
                priceFormat: "MINOR",
                currency: "CAD",
              },
              elements: {
                theme: {
                  brandColors: {
                    primary: this.primaryColor,
                    secondary: this.secondaryColor,
                  },
                  variant: this.variant,
                },
                productDetailPage: {
                  tbybBtn: {
                    targetSelector: 'button[name="add"]',
                    style: this.tbyb_btn_style,
                    insertPosition: this.tbyb_btn_insert_position,
                    container: this.tbyb_btn_insert_container,
                    text: this.tbyb_btn_text,
                  },
                },
                learnMoreModal: {
                  title: "TRY AT HOME BEFORE YOU BUY",
                  learnMoreLinkUrl: "https://blackcart.com",
                  learnMoreLinkText: "Learn More",
                  className: "blackcart_luvo_modal",
                  tryBeforeYouBuyText: "Try Before You Buy",
                  features: [
                    {
                      type: 0,
                      title: this.tbyb_lmm_shop_title,
                      caption: this.tbyb_lmm_shop_caption,
                    },
                    {
                      type: 1,
                      title: this.tbyb_lmm_try_title,
                      caption: this.tbyb_lmm_try_caption,
                    },
                    {
                      type: 2,
                      title: this.tbyb_lmm_keep_title,
                      caption: this.tbyb_lmm_keep_caption,
                    },
                    {
                      type: 3,
                      title: this.tbyb_lmm_return_title,
                      caption: this.tbyb_lmm_return_caption,
                    },
                  ],
                },
                cartPage: {
                  targetSelector: "#MainContent",
                  lineItem: {
                    targetSelector: ".cart-item",
                    linePrice: {
                      targetSelector: ".cart-item__prices span.price",
                    },
                    tbybTag: {
                      insertPosition: "AFTER",
                      targetSelector: ".cart-item__name",
                      style: "outlined",
                      size: "regular",
                      color: this.tag_color,
                    },
                    lineTotal: {
                      targetSelector: ".cart-item__totals span.price",
                    },
                    quantityControlsSelector: 'button[name="plus"]',
                  },
                  payNow: {
                    price: ".totals__subtotal-value",
                    targetSelector: ".totals",
                    text: ".totals__subtotal",
                  },
                  warningBanner: {
                    className: "bc-cart-warning",
                    insertPosition: "BEFORE",
                    targetSelector: ".medium-down--one-whole",
                  },
                  hiddenElements: [
                    ".cart_savings",
                    ".blackcart__cartPage-lineItem .price_total",
                  ],
                  checkoutBtn: {
                    targetSelector: "test some",
                    insertPosition: "AFTER",
                  },
                },
              },
            };
          }

          _createClass(Config, [
            {
              key: "config",
              get: function get() {
                return this._config;
              },
            },
          ]);

          return Config;
        })();

        _defineProperty(config_Config, "instance", void 0);

        _defineProperty(config_Config, "getInstance", function (config) {
          if (!config_Config.instance) {
            config_Config.instance = new config_Config(config);
          }

          return config_Config.instance;
        });
        // CONCATENATED MODULE: ./src/script-injector.js

        var init = function init(config) {
          if (!window.tbyb) {
            window.tbyb = new BlackCartShopify(config);
          }
        };

        /***/
      },
      /******/
    ]
  );
});
