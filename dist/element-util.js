(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ElementUtil"] = factory();
	else
		root["ElementUtil"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods_base__ = __webpack_require__(1);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

/* harmony default export */ __webpack_exports__["default"] = (__assign({}, __WEBPACK_IMPORTED_MODULE_0__methods_base__));


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getElement"] = getElement;
/* harmony export (immutable) */ __webpack_exports__["getElements"] = getElements;
/* harmony export (immutable) */ __webpack_exports__["removeElements"] = removeElements;
/* harmony export (immutable) */ __webpack_exports__["toNodeList"] = toNodeList;
/* harmony export (immutable) */ __webpack_exports__["nodeListToArray"] = nodeListToArray;
/* harmony export (immutable) */ __webpack_exports__["findAncestor"] = findAncestor;
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function resolveBase(base) {
    base = base === document ? base : getElement(base);
    if (!base) {
        throw new ReferenceError("'base' element is not exist!");
    }
    return base;
}
/**
 * Polyfill for Element.matches
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#polyfill
 */
function polyfillForMatches() {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector;
    }
}
function getElement(selector, base) {
    if (base === void 0) { base = document; }
    base = resolveBase(base);
    if (typeof selector === 'string') {
        return base.querySelector(selector);
    }
    else if (selector instanceof Element) {
        return selector;
    }
    else if (selector instanceof NodeList) {
        return selector[0];
    }
    else {
        throw new TypeError('selector is must be String or Element');
    }
}
function getElements(selector, base) {
    if (base === void 0) { base = document; }
    base = resolveBase(base);
    if (typeof selector === 'string') {
        return base.querySelectorAll(selector);
    }
    else if (selector instanceof Element) {
        return toNodeList(selector);
    }
    else if (selector instanceof NodeList) {
        return selector;
    }
    else {
        throw new TypeError('selector is must be String or NodeList');
    }
}
function removeElements(selector, base) {
    if (base === void 0) { base = document; }
    base = resolveBase(base);
    var elms = getElements(selector, base);
    try {
        for (var elms_1 = __values(elms), elms_1_1 = elms_1.next(); !elms_1_1.done; elms_1_1 = elms_1.next()) {
            var elm = elms_1_1.value;
            elm.parentNode.removeChild(elm);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (elms_1_1 && !elms_1_1.done && (_a = elms_1.return)) _a.call(elms_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return elms.length;
    var e_1, _a;
}
function toNodeList(elm) {
    elm = getElement(elm);
    elm.setAttribute('toNodeList', '');
    var nodeList = document.querySelectorAll('[toNodeList]');
    elm.removeAttribute('toNodeList');
    return nodeList;
}
function nodeListToArray(list) {
    if (Array.isArray(list)) {
        return list;
    }
    else {
        list = this.getElements(list);
        return Array.prototype.slice.call(list);
    }
}
function findAncestor(self, ancestor) {
    polyfillForMatches();
    self = getElement(self);
    var isMatch = function (elm) { return ancestor instanceof Element
        ? elm === ancestor
        : elm.matches(ancestor); };
    do {
        if (self == null || self.parentElement == null) {
            return null;
        }
        self = self.parentElement;
    } while (!isMatch(self));
    return self;
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=element-util.js.map