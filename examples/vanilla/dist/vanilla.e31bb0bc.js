// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/rescale-carousel/dist/rescale-carousel.js":[function(require,module,exports) {
var define;
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("Rescale Carousel", [], factory);else if (typeof exports === 'object') exports["Rescale Carousel"] = factory();else root["Rescale Carousel"] = factory();
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/rescale-carousel.js");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/rescale-carousel.js":
      /*!*********************************!*\
        !*** ./src/rescale-carousel.js ***!
        \*********************************/

      /*! exports provided: default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RescaleCarousel; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RescaleCarousel =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Create a RescaleCarousel.\n   * @param {Object} options - Optional settings object.\n   */\n  function RescaleCarousel(options) {\n    var _this = this;\n\n    _classCallCheck(this, RescaleCarousel);\n\n    // Merge defaults with user's settings\n    this.config = RescaleCarousel.mergeSettings(options); // Resolve selector's type\n\n    this.selector = typeof this.config.selector === 'string' ? document.querySelector(this.config.selector) : this.config.selector; // Early throw if selector doesn't exists\n\n    if (this.selector === null) {\n      throw new Error('Something is wrong with your selector 😭');\n    } // update perPage number dependable of user value\n\n\n    this.resolveSlidesNumber(); // Create global references\n\n    this.selectorWidth = this.selector.offsetWidth;\n    this.innerElements = [].slice.call(this.selector.children);\n    this.currentSlide = this.config.loop ? this.config.startIndex % this.innerElements.length : Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage));\n    this.transformProperty = RescaleCarousel.webkitOrNot(); // Bind all event handlers for reference-ability\n\n    ['resizeHandler', 'touchstartHandler', 'touchendHandler', 'touchmoveHandler', 'mousedownHandler', 'mouseupHandler', 'mouseleaveHandler', 'mousemoveHandler', 'clickHandler'].forEach(function (method) {\n      _this[method] = _this[method].bind(_this);\n    }); // Build markup and apply required styling to elements\n\n    this.init();\n  }\n  /**\n   * Override default settings with custom user settings.\n   * @param {Object} options - Optional settings object.\n   * @returns {Object} - Custom user settings.\n   */\n\n\n  _createClass(RescaleCarousel, [{\n    key: \"attachEvents\",\n\n    /**\n     * Attaches listeners to required events.\n     */\n    value: function attachEvents() {\n      // Resize element on window resize\n      window.addEventListener('resize', this.resizeHandler); // If element is draggable/swipe-able, add event handlers\n\n      if (this.config.draggable) {\n        // Keep track pointer hold and dragging distance\n        this.pointerDown = false;\n        this.drag = {\n          startX: 0,\n          endX: 0,\n          startY: 0,\n          letItGo: null,\n          preventClick: false\n        }; // Touch events\n\n        this.selector.addEventListener('touchstart', this.touchstartHandler);\n        this.selector.addEventListener('touchend', this.touchendHandler);\n        this.selector.addEventListener('touchmove', this.touchmoveHandler); // Mouse events\n\n        this.selector.addEventListener('mousedown', this.mousedownHandler);\n        this.selector.addEventListener('mouseup', this.mouseupHandler);\n        this.selector.addEventListener('mouseleave', this.mouseleaveHandler);\n        this.selector.addEventListener('mousemove', this.mousemoveHandler); // Click\n\n        this.selector.addEventListener('click', this.clickHandler);\n      }\n    }\n    /**\n     * Detaches listeners from required events.\n     */\n\n  }, {\n    key: \"detachEvents\",\n    value: function detachEvents() {\n      clearInterval(this.setAnimationInterval);\n      window.removeEventListener('resize', this.resizeHandler);\n      this.selector.removeEventListener('touchstart', this.touchstartHandler);\n      this.selector.removeEventListener('touchend', this.touchendHandler);\n      this.selector.removeEventListener('touchmove', this.touchmoveHandler);\n      this.selector.removeEventListener('mousedown', this.mousedownHandler);\n      this.selector.removeEventListener('mouseup', this.mouseupHandler);\n      this.selector.removeEventListener('mouseleave', this.mouseleaveHandler);\n      this.selector.removeEventListener('mousemove', this.mousemoveHandler);\n      this.selector.removeEventListener('click', this.clickHandler);\n    }\n    /**\n     * Builds the markup and attaches listeners to required events.\n     */\n\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this2 = this;\n\n      this.attachEvents(); // hide everything out of selector's boundaries\n\n      this.selector.style.overflow = 'hidden'; // rtl or ltr\n\n      this.selector.style.direction = this.config.rtl ? 'rtl' : 'ltr'; // build a frame and slide to a currentSlide\n\n      this.buildSliderFrame();\n      this.config.onInit.call(this);\n\n      if (this.config.animate === true) {\n        this.setAnimationInterval = setInterval(function () {\n          _this2.next();\n        }, this.config.intervalDuration);\n      }\n    }\n    /**\n     * Build a sliderFrame and slide to a current item.\n     */\n\n  }, {\n    key: \"buildSliderFrame\",\n    value: function buildSliderFrame() {\n      var _this3 = this;\n\n      var widthItem = this.selectorWidth / this.perPage;\n      var itemsToBuild = this.config.loop ? this.innerElements.length + 2 * this.perPage : this.innerElements.length; // Create frame and apply styling\n\n      this.sliderFrame = document.createElement('div');\n      this.sliderFrame.style.width = \"\".concat(widthItem * itemsToBuild, \"px\");\n      this.enableTransition();\n\n      if (this.config.draggable) {\n        this.selector.style.cursor = '-webkit-grab';\n      } // Create a document fragment to put slides into it\n\n\n      var docFragment = document.createDocumentFragment(); //* Loop through the slides, add styling and add them to document fragment\n\n      if (this.config.loop) {\n        for (var i = this.innerElements.length - this.perPage; i < this.innerElements.length; i++) {\n          var element = this.buildSliderFrameItem(this.innerElements[i].cloneNode(true));\n          docFragment.appendChild(element);\n        }\n      }\n\n      this.innerElements.forEach(function (elm) {\n        var element = _this3.buildSliderFrameItem(elm);\n\n        docFragment.appendChild(element);\n      });\n\n      if (this.config.loop) {\n        for (var _i = 0; _i < this.perPage; _i++) {\n          var _element = this.buildSliderFrameItem(this.innerElements[_i].cloneNode(true));\n\n          docFragment.appendChild(_element);\n        }\n      } // Add fragment to the frame\n\n\n      this.sliderFrame.appendChild(docFragment); // Clear selector (just in case something is there) and insert a frame\n\n      this.selector.innerHTML = '';\n      this.selector.appendChild(this.sliderFrame); // Go to currently active slide after initial build\n\n      this.slideToCurrent();\n    }\n  }, {\n    key: \"buildSliderFrameItem\",\n    value: function buildSliderFrameItem(elm) {\n      var elementContainer = document.createElement('div');\n      elementContainer.style.cssFloat = this.config.rtl ? 'right' : 'left';\n      elementContainer.style.float = this.config.rtl ? 'right' : 'left';\n      elementContainer.style.paddingLeft = \"\".concat(this.config.gap, \"px\");\n      elementContainer.style.paddingRight = \"\".concat(this.config.gap, \"px\");\n      elementContainer.style.width = \"\".concat(this.config.loop ? 100 / (this.innerElements.length + this.perPage * 2) : 100 / this.innerElements.length, \"%\");\n      elementContainer.appendChild(elm);\n      return elementContainer;\n    }\n    /**\n     * Determines the number of slides according to the clients viewport.\n     */\n\n  }, {\n    key: \"resolveSlidesNumber\",\n    value: function resolveSlidesNumber() {\n      if (typeof this.config.perPage === 'number') {\n        this.perPage = this.config.perPage;\n      } //* This is where we handle media queries\n      else if (_typeof(this.config.perPage) === 'object') {\n          this.perPage = 1;\n\n          var _arr = Object.entries(this.config.perPage);\n\n          for (var _i2 = 0; _i2 < _arr.length; _i2++) {\n            var _arr$_i = _slicedToArray(_arr[_i2], 2),\n                key = _arr$_i[0],\n                val = _arr$_i[1];\n\n            var parsedKey = parseInt(key.split('w')[1]);\n\n            if (window.innerWidth >= parsedKey) {\n              this.perPage = val;\n            }\n          }\n        }\n    }\n    /**\n     * Go to previous slide.\n     * @param {number} [howManySlides=1] - How many items to slide backward.\n     * @param {function} callback - Optional callback function.\n     */\n\n  }, {\n    key: \"prev\",\n    value: function prev() {\n      var howManySlides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      var callback = arguments.length > 1 ? arguments[1] : undefined;\n\n      // early return when there is nothing to slide\n      if (this.innerElements.length <= this.perPage) {\n        return;\n      }\n\n      var beforeChange = this.currentSlide;\n\n      if (this.config.loop) {\n        var isNewIndexClone = this.currentSlide - howManySlides < 0;\n\n        if (isNewIndexClone) {\n          this.disableTransition();\n          var mirrorSlideIndex = this.currentSlide + this.innerElements.length;\n          var mirrorSlideIndexOffset = this.perPage;\n          var moveTo = mirrorSlideIndex + mirrorSlideIndexOffset;\n          var offset = (this.config.rtl ? 1 : -1) * moveTo * (this.selectorWidth / this.perPage);\n          var dragDistance = this.config.draggable ? this.drag.endX - this.drag.startX : 0;\n          this.sliderFrame.style[this.transformProperty] = \"translate3d(\".concat(offset + dragDistance, \"px, 0, 0)\");\n          this.currentSlide = mirrorSlideIndex - howManySlides;\n        } else {\n          this.currentSlide = this.currentSlide - howManySlides;\n        }\n      } else {\n        this.currentSlide = Math.max(this.currentSlide - howManySlides, 0);\n      }\n\n      if (beforeChange !== this.currentSlide) {\n        this.slideToCurrent(this.config.loop);\n        this.config.onChange.call(this);\n\n        if (callback) {\n          callback.call(this);\n        }\n      }\n    }\n    /**\n     * Go to next slide.\n     * @param {number} [howManySlides=1] - How many items to slide forward.\n     * @param {function} callback - Optional callback function.\n     */\n\n  }, {\n    key: \"next\",\n    value: function next() {\n      var howManySlides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      var callback = arguments.length > 1 ? arguments[1] : undefined;\n\n      // early return when there is nothing to slide\n      if (this.innerElements.length <= this.perPage) {\n        return;\n      }\n\n      var beforeChange = this.currentSlide;\n\n      if (this.config.loop) {\n        var isNewIndexClone = this.currentSlide + howManySlides > this.innerElements.length - this.perPage;\n\n        if (isNewIndexClone) {\n          this.disableTransition();\n          var mirrorSlideIndex = this.currentSlide - this.innerElements.length;\n          var mirrorSlideIndexOffset = this.perPage;\n          var moveTo = mirrorSlideIndex + mirrorSlideIndexOffset;\n          var offset = (this.config.rtl ? 1 : -1) * moveTo * (this.selectorWidth / this.perPage);\n          var dragDistance = this.config.draggable ? this.drag.endX - this.drag.startX : 0;\n          this.sliderFrame.style[this.transformProperty] = \"translate3d(\".concat(offset + dragDistance, \"px, 0, 0)\");\n          this.currentSlide = mirrorSlideIndex + howManySlides;\n        } else {\n          this.currentSlide = this.currentSlide + howManySlides;\n        }\n      } else {\n        this.currentSlide = Math.min(this.currentSlide + howManySlides, this.innerElements.length - this.perPage);\n      }\n\n      if (beforeChange !== this.currentSlide) {\n        this.slideToCurrent(this.config.loop);\n        this.config.onChange.call(this);\n\n        if (callback) {\n          callback.call(this);\n        }\n      }\n    }\n    /**\n     * Disable transition on sliderFrame.\n     */\n\n  }, {\n    key: \"disableTransition\",\n    value: function disableTransition() {\n      this.sliderFrame.style.webkitTransition = \"all 0ms \".concat(this.config.easing);\n      this.sliderFrame.style.transition = \"all 0ms \".concat(this.config.easing);\n    }\n    /**\n     * Enable transition on sliderFrame.\n     */\n\n  }, {\n    key: \"enableTransition\",\n    value: function enableTransition() {\n      this.sliderFrame.style.webkitTransition = \"all \".concat(this.config.transitionDuration, \"ms \").concat(this.config.easing);\n      this.sliderFrame.style.transition = \"all \".concat(this.config.transitionDuration, \"ms \").concat(this.config.easing);\n    }\n    /**\n     * Go to slide with particular index\n     * @param {number} index - Item index to slide to.\n     * @param {function} callback - Optional callback function.\n     */\n\n  }, {\n    key: \"goTo\",\n    value: function goTo(index, callback) {\n      if (this.innerElements.length <= this.perPage) {\n        return;\n      }\n\n      var beforeChange = this.currentSlide;\n      this.currentSlide = this.config.loop ? index % this.innerElements.length : Math.min(Math.max(index, 0), this.innerElements.length - this.perPage);\n\n      if (beforeChange !== this.currentSlide) {\n        this.slideToCurrent();\n        this.config.onChange.call(this);\n\n        if (callback) {\n          callback.call(this);\n        }\n      }\n    }\n    /**\n     * Moves sliders frame to position of currently active slide\n     */\n\n  }, {\n    key: \"slideToCurrent\",\n    value: function slideToCurrent(enableTransition) {\n      var _this4 = this;\n\n      var currentSlide = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide;\n      var offset = (this.config.rtl ? 1 : -1) * currentSlide * (this.selectorWidth / this.perPage);\n\n      if (enableTransition) {\n        // This one is tricky, I know but this is a perfect explanation:\n        // https://youtu.be/cCOL7MC4Pl0\n        requestAnimationFrame(function () {\n          requestAnimationFrame(function () {\n            _this4.enableTransition();\n\n            _this4.sliderFrame.style[_this4.transformProperty] = \"translate3d(\".concat(offset, \"px, 0, 0)\");\n          });\n        });\n      } else {\n        this.sliderFrame.style[this.transformProperty] = \"translate3d(\".concat(offset, \"px, 0, 0)\");\n      }\n    } //* -----------------------\n    //* Handlers\n\n    /**\n     * Recalculate drag/swipe event and reposition the frame of a slider\n     */\n\n  }, {\n    key: \"updateAfterDrag\",\n    value: function updateAfterDrag() {\n      var movement = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX);\n      var movementDistance = Math.abs(movement);\n      var howManySliderToSlide = this.config.multipleDrag ? Math.ceil(movementDistance / (this.selectorWidth / this.perPage)) : 1;\n      var slideToNegativeClone = movement > 0 && this.currentSlide - howManySliderToSlide < 0;\n      var slideToPositiveClone = movement < 0 && this.currentSlide + howManySliderToSlide > this.innerElements.length - this.perPage;\n\n      if (movement > 0 && movementDistance > this.config.threshold && this.innerElements.length > this.perPage) {\n        this.prev(howManySliderToSlide);\n      } else if (movement < 0 && movementDistance > this.config.threshold && this.innerElements.length > this.perPage) {\n        this.next(howManySliderToSlide);\n      }\n\n      this.slideToCurrent(slideToNegativeClone || slideToPositiveClone);\n    }\n    /**\n     * When window resizes, resize slider components as well\n     */\n\n  }, {\n    key: \"resizeHandler\",\n    value: function resizeHandler() {\n      // update perPage number dependable of user value\n      this.resolveSlidesNumber(); // re-calculate currentSlide\n      // prevent hiding items when browser width increases\n\n      if (this.currentSlide + this.perPage > this.innerElements.length) {\n        this.currentSlide = this.innerElements.length <= this.perPage ? 0 : this.innerElements.length - this.perPage;\n      }\n\n      this.selectorWidth = this.selector.offsetWidth;\n      this.buildSliderFrame();\n    }\n    /**\n     * Clear drag after touchend and mouseup event\n     */\n\n  }, {\n    key: \"clearDrag\",\n    value: function clearDrag() {\n      this.drag = {\n        startX: 0,\n        endX: 0,\n        startY: 0,\n        letItGo: null,\n        preventClick: this.drag.preventClick\n      };\n    }\n    /**\n     * touchstart event handler\n     */\n\n  }, {\n    key: \"touchstartHandler\",\n    value: function touchstartHandler(e) {\n      // Prevent dragging / swiping on inputs, selects and textareas\n      var ignoreSiema = ['TEXTAREA', 'OPTION', 'INPUT', 'SELECT'].indexOf(e.target.nodeName) !== -1;\n\n      if (ignoreSiema) {\n        return;\n      }\n\n      e.stopPropagation();\n      this.pointerDown = true;\n      this.drag.startX = e.touches[0].pageX;\n      this.drag.startY = e.touches[0].pageY;\n    }\n    /**\n     * touchend event handler\n     */\n\n  }, {\n    key: \"touchendHandler\",\n    value: function touchendHandler(e) {\n      e.stopPropagation();\n      this.pointerDown = false;\n      this.enableTransition();\n\n      if (this.drag.endX) {\n        this.updateAfterDrag();\n      }\n\n      this.clearDrag();\n    }\n    /**\n     * touchmove event handler\n     */\n\n  }, {\n    key: \"touchmoveHandler\",\n    value: function touchmoveHandler(e) {\n      e.stopPropagation();\n\n      if (this.drag.letItGo === null) {\n        this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX);\n      }\n\n      if (this.pointerDown && this.drag.letItGo) {\n        e.preventDefault();\n        this.drag.endX = e.touches[0].pageX;\n        this.sliderFrame.style.webkitTransition = \"all 0ms \".concat(this.config.easing);\n        this.sliderFrame.style.transition = \"all 0ms \".concat(this.config.easing);\n        var currentSlide = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide;\n        var currentOffset = currentSlide * (this.selectorWidth / this.perPage);\n        var dragOffset = this.drag.endX - this.drag.startX;\n        var offset = this.config.rtl ? currentOffset + dragOffset : currentOffset - dragOffset;\n        this.sliderFrame.style[this.transformProperty] = \"translate3d(\".concat((this.config.rtl ? 1 : -1) * offset, \"px, 0, 0)\");\n      }\n    }\n    /**\n     * mousedown event handler\n     */\n\n  }, {\n    key: \"mousedownHandler\",\n    value: function mousedownHandler(e) {\n      // Prevent dragging / swiping on inputs, selects and textareas\n      var ignoreSiema = ['TEXTAREA', 'OPTION', 'INPUT', 'SELECT'].indexOf(e.target.nodeName) !== -1;\n\n      if (ignoreSiema) {\n        return;\n      }\n\n      e.preventDefault();\n      e.stopPropagation();\n      this.pointerDown = true;\n      this.drag.startX = e.pageX;\n    }\n    /**\n     * mouseup event handler\n     */\n\n  }, {\n    key: \"mouseupHandler\",\n    value: function mouseupHandler(e) {\n      e.stopPropagation();\n      this.pointerDown = false;\n      this.selector.style.cursor = '-webkit-grab';\n      this.enableTransition();\n\n      if (this.drag.endX) {\n        this.updateAfterDrag();\n      }\n\n      this.clearDrag();\n    }\n    /**\n     * mousemove event handler\n     */\n\n  }, {\n    key: \"mousemoveHandler\",\n    value: function mousemoveHandler(e) {\n      e.preventDefault();\n\n      if (this.pointerDown) {\n        // if dragged element is a link\n        // mark preventClick prop as a true\n        // to detemine about browser redirection later on\n        if (e.target.nodeName === 'A') {\n          this.drag.preventClick = true;\n        }\n\n        this.drag.endX = e.pageX;\n        this.selector.style.cursor = '-webkit-grabbing';\n        this.sliderFrame.style.webkitTransition = \"all 0ms \".concat(this.config.easing);\n        this.sliderFrame.style.transition = \"all 0ms \".concat(this.config.easing);\n        var currentSlide = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide;\n        var currentOffset = currentSlide * (this.selectorWidth / this.perPage);\n        var dragOffset = this.drag.endX - this.drag.startX;\n        var offset = this.config.rtl ? currentOffset + dragOffset : currentOffset - dragOffset;\n        this.sliderFrame.style[this.transformProperty] = \"translate3d(\".concat((this.config.rtl ? 1 : -1) * offset, \"px, 0, 0)\");\n      }\n    }\n    /**\n     * mouseleave event handler\n     */\n\n  }, {\n    key: \"mouseleaveHandler\",\n    value: function mouseleaveHandler(e) {\n      if (this.pointerDown) {\n        this.pointerDown = false;\n        this.selector.style.cursor = '-webkit-grab';\n        this.drag.endX = e.pageX;\n        this.drag.preventClick = false;\n        this.enableTransition();\n        this.updateAfterDrag();\n        this.clearDrag();\n      }\n    }\n    /**\n     * click event handler\n     */\n\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler(e) {\n      // if the dragged element is a link\n      // prevent browsers from following the link\n      if (this.drag.preventClick) {\n        e.preventDefault();\n      }\n\n      this.drag.preventClick = false;\n    } //* Handlers END\n    //* -----------------\n    //* -------------------------------\n    //* Manipulate slides\n\n    /**\n     * Remove item from carousel.\n     * @param {number} index - Item index to remove.\n     * @param {function} callback - Optional callback to call after remove.\n     */\n\n  }, {\n    key: \"remove\",\n    value: function remove(index, callback) {\n      if (index < 0 || index >= this.innerElements.length) {\n        throw new Error(\"Item to remove doesn't exist 😭\");\n      } // Shift sliderFrame back by one item when:\n      // 1. Item with lower index than currentSlide is removed.\n      // 2. Last item is removed.\n\n\n      var lowerIndex = index < this.currentSlide;\n      var lastItem = this.currentSlide + this.perPage - 1 === index;\n\n      if (lowerIndex || lastItem) {\n        this.currentSlide--;\n      }\n\n      this.innerElements.splice(index, 1); // build a frame and slide to a currentSlide\n\n      this.buildSliderFrame();\n\n      if (callback) {\n        callback.call(this);\n      }\n    }\n    /**\n     * Insert item to carousel at particular index.\n     * @param {HTMLElement} item - Item to insert.\n     * @param {number} index - Index of new new item insertion.\n     * @param {function} callback - Optional callback to call after insert.\n     */\n\n  }, {\n    key: \"insert\",\n    value: function insert(item, index, callback) {\n      if (index < 0 || index > this.innerElements.length + 1) {\n        throw new Error('Unable to inset it at this index 😭');\n      }\n\n      if (this.innerElements.indexOf(item) !== -1) {\n        throw new Error('The same item in a carousel? Really? Nope 😭');\n      } // Avoid shifting content\n\n\n      var shouldItShift = index <= this.currentSlide > 0 && this.innerElements.length;\n      this.currentSlide = shouldItShift ? this.currentSlide + 1 : this.currentSlide;\n      this.innerElements.splice(index, 0, item); // build a frame and slide to a currentSlide\n\n      this.buildSliderFrame();\n\n      if (callback) {\n        callback.call(this);\n      }\n    }\n    /**\n     * Prepend item to carousel.\n     * @param {HTMLElement} item - Item to prepend.\n     * @param {function} callback - Optional callback to call after prepend.\n     */\n\n  }, {\n    key: \"prepend\",\n    value: function prepend(item, callback) {\n      this.insert(item, 0);\n\n      if (callback) {\n        callback.call(this);\n      }\n    }\n    /**\n     * Append item to carousel.\n     * @param {HTMLElement} item - Item to append.\n     * @param {function} callback - Optional callback to call after append.\n     */\n\n  }, {\n    key: \"append\",\n    value: function append(item, callback) {\n      this.insert(item, this.innerElements.length + 1);\n\n      if (callback) {\n        callback.call(this);\n      }\n    } //* Manipulate slides END\n    //* ----------------------------------\n\n    /**\n     * Removes listeners and optionally restores to initial markup\n     * @param {boolean} restoreMarkup - Determines if the program should restore initial markup.\n     * @param {function} callback - Optional callback function.\n     */\n\n  }, {\n    key: \"destroyInstance\",\n    value: function destroyInstance() {\n      var restoreMarkup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var callback = arguments.length > 1 ? arguments[1] : undefined;\n      this.detachEvents();\n      this.selector.style.cursor = 'auto';\n\n      if (restoreMarkup) {\n        var slides = document.createDocumentFragment();\n\n        for (var i = 0; i < this.innerElements.length; i++) {\n          slides.appendChild(this.innerElements[i]);\n        }\n\n        this.selector.innerHTML = '';\n        this.selector.appendChild(slides);\n        this.selector.removeAttribute('style');\n      }\n\n      if (callback) {\n        callback.call(this);\n      }\n    }\n  }], [{\n    key: \"mergeSettings\",\n    value: function mergeSettings(options) {\n      var defaultSettings = {\n        selector: '.rescale_carousel',\n        transitionDuration: 450,\n        easing: 'ease-out',\n        perPage: 1,\n        gap: 0,\n        startIndex: 0,\n        draggable: true,\n        multipleDrag: true,\n        threshold: 20,\n        loop: true,\n        animate: true,\n        intervalDuration: 4250,\n        rtl: false,\n        onInit: function onInit() {},\n        onChange: function onChange() {},\n        destroy: function destroy() {}\n      };\n      var userSettings = options;\n\n      var _arr2 = Object.entries(userSettings);\n\n      for (var _i3 = 0; _i3 < _arr2.length; _i3++) {\n        var _arr2$_i = _slicedToArray(_arr2[_i3], 1),\n            key = _arr2$_i[0];\n\n        defaultSettings[key] = userSettings[key];\n      }\n\n      return defaultSettings;\n    }\n    /**\n     * Determine if browser supports un-prefixed transform property.\n     * Google Chrome since version 26 supports prefix-less transform\n     * @returns {string} - Transform property supported by client.\n     */\n\n  }, {\n    key: \"webkitOrNot\",\n    value: function webkitOrNot() {\n      var style = document.documentElement.style;\n\n      if (typeof style.transform === 'string') {\n        return 'transform';\n      }\n\n      return 'WebkitTransform';\n    }\n  }]);\n\n  return RescaleCarousel;\n}();\n\n\n\n//# sourceURL=webpack://Rescale_Carousel/./src/rescale-carousel.js?");
        /***/
      }
      /******/

    })
  );
});
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _rescaleCarousel = _interopRequireDefault(require("rescale-carousel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var selector = '.carousel';
var carousel = document.querySelector(selector);
var config = {
  perPage: {
    // Falls back to the default of 1 below 750px
    w750: 3,
    w1000: 4,
    w1200: 5,
    w1400: 6
  },
  gap: 5
}; // Will initialize with default settings

var initCarousel = carousel && new _rescaleCarousel.default(_objectSpread({
  selector: selector
}, config));
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
prev.addEventListener('click', function () {
  initCarousel.prev();
});
next.addEventListener('click', function () {
  initCarousel.next();
});
initCarousel();
},{"rescale-carousel":"node_modules/rescale-carousel/dist/rescale-carousel.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55621" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/vanilla.e31bb0bc.js.map