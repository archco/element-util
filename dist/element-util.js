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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getElement;
/* harmony export (immutable) */ __webpack_exports__["c"] = getElements;
/* harmony export (immutable) */ __webpack_exports__["d"] = getElementsAsArray;
/* harmony export (immutable) */ __webpack_exports__["f"] = removeElements;
/* harmony export (immutable) */ __webpack_exports__["g"] = toNodeList;
/* harmony export (immutable) */ __webpack_exports__["e"] = nodeListToArray;
/* harmony export (immutable) */ __webpack_exports__["a"] = findAncestor;
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
/**
 * Get element.
 * @param  selector querySelector
 * @param  base     base element. default is Document.
 * @return
 */
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
/**
 * Get elements as NodeList.
 * @param  selector querySelector
 * @param  base     base element. default is Document.
 * @return
 */
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
/**
 * Get elements as array of HTMLElement.
 *
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document]
 * @returns {HTMLElement[]}
 */
function getElementsAsArray(selector, base) {
    if (base === void 0) { base = document; }
    var nodeList = getElements(selector, base);
    return nodeListToArray(nodeList);
}
/**
 * Remove elements.
 * @param  selector querySelector
 * @param  base     base element. default is Document.
 * @return          number of removed.
 */
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
/**
 * Convert a single element to NodeList.
 * @param  elm
 * @return
 */
function toNodeList(elm) {
    elm = getElement(elm);
    elm.setAttribute('toNodeList', '');
    var nodeList = document.querySelectorAll('[toNodeList]');
    elm.removeAttribute('toNodeList');
    return nodeList;
}
/**
 * Convert NodeList to Array.
 * @param  list
 * @return
 */
function nodeListToArray(list) {
    if (Array.isArray(list)) {
        return list;
    }
    else {
        list = getElements(list);
        return Array.prototype.slice.call(list);
    }
}
/**
 * Find ancestor element.
 * @param  self
 * @param  ancestor
 * @return          Element or null.
 */
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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = addListener;
/* harmony export (immutable) */ __webpack_exports__["k"] = wrap;
/* harmony export (immutable) */ __webpack_exports__["l"] = wrapAll;
/* harmony export (immutable) */ __webpack_exports__["h"] = submitConfirm;
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["f"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["i"] = toggleClass;
/* harmony export (immutable) */ __webpack_exports__["d"] = hide;
/* harmony export (immutable) */ __webpack_exports__["g"] = show;
/* harmony export (immutable) */ __webpack_exports__["j"] = toggleShow;
/* harmony export (immutable) */ __webpack_exports__["e"] = makeHiddenInput;
/* harmony export (immutable) */ __webpack_exports__["c"] = appendHiddenInput;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(0);
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

/**
 * Add event listener on every selected elements.
 * @param  selector   querySelector
 * @param  type       event-type
 * @param  listener   listener
 * @param  useCapture default is false
 * @return            number of affected
 */
function addListener(selector, type, listener, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    var elms = __WEBPACK_IMPORTED_MODULE_0__base__["c" /* getElements */](selector);
    try {
        for (var elms_1 = __values(elms), elms_1_1 = elms_1.next(); !elms_1_1.done; elms_1_1 = elms_1.next()) {
            var elm = elms_1_1.value;
            elm.addEventListener(type, listener, useCapture);
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
/**
 * Wrapping each element.
 * @param selector  querySelector
 * @param className wrapper's class name.
 * @param tagName   wrapper's tag name, default is 'div'.
 */
function wrap(selector, className, tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    var elms = __WEBPACK_IMPORTED_MODULE_0__base__["c" /* getElements */](selector);
    try {
        for (var elms_2 = __values(elms), elms_2_1 = elms_2.next(); !elms_2_1.done; elms_2_1 = elms_2.next()) {
            var elm = elms_2_1.value;
            var parent_1 = elm.parentNode;
            var sibling = elm.nextSibling;
            var div = document.createElement(tagName);
            addClass(div, className);
            div.appendChild(elm);
            if (sibling) {
                parent_1.insertBefore(div, sibling);
            }
            else {
                parent_1.appendChild(div);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (elms_2_1 && !elms_2_1.done && (_a = elms_2.return)) _a.call(elms_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    var e_2, _a;
}
/**
 * Wrapping all elements inside a one wrapper.
 * @param selector  querySelector
 * @param className wrapper's class name.
 * @param tagName   wrapper's tag name, default is 'div'.
 */
function wrapAll(selector, className, tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    var elms = __WEBPACK_IMPORTED_MODULE_0__base__["c" /* getElements */](selector);
    var parent = elms[0].parentNode;
    var preSibling = elms[0].previousSibling;
    var div = document.createElement(tagName);
    addClass(div, className);
    try {
        for (var elms_3 = __values(elms), elms_3_1 = elms_3.next(); !elms_3_1.done; elms_3_1 = elms_3.next()) {
            var elm = elms_3_1.value;
            div.appendChild(elm);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (elms_3_1 && !elms_3_1.done && (_a = elms_3.return)) _a.call(elms_3);
        }
        finally { if (e_3) throw e_3.error; }
    }
    if (preSibling) {
        parent.insertBefore(div, preSibling.nextSibling);
    }
    else {
        parent.appendChild(div);
    }
    var e_3, _a;
}
/**
 * Add confirm message listener when 'submit' event.
 * @param selector querySelector, form element probably.
 * @param message  confirm message.
 */
function submitConfirm(selector, message) {
    if (message === void 0) { message = 'Are you confirm?'; }
    addListener(selector, 'submit', function (e) {
        if (!confirm(message)) {
            e.preventDefault();
        }
    }, true); // this use capture.
}
/**
 * Add class to element.
 * @param selector  querySelector
 * @param className class name. If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
function addClass(selector, className) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["b" /* getElement */](selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.add(c); });
}
/**
 * Remove class from element.
 * @param selector  querySelector
 * @param className class name. If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
function removeClass(selector, className) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["b" /* getElement */](selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.remove(c); });
}
/**
 * Toggling class to element.
 * @param selector  querySelector
 * @param className class name. If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
function toggleClass(selector, className) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["b" /* getElement */](selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.toggle(c); });
}
/**
 * Hide element. It will set element's display to 'none'.
 * @param selector querySelector
 */
function hide(selector) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["b" /* getElement */](selector);
    elm.style.display = 'none';
}
/**
 * Show element. It will just remove 'display=none;'.
 * @param selector querySelector
 */
function show(selector) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["b" /* getElement */](selector);
    if (elm.style.display && elm.style.display === 'none') {
        elm.style.display = '';
    }
}
/**
 * Toggling show/hide element.
 * @param selector querySelector
 */
function toggleShow(selector) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["b" /* getElement */](selector);
    elm.style.display !== 'none' ? hide(elm) : show(elm);
}
/**
 * Make a hidden input.
 * @param  name  name attribute.
 * @param  value value attribute.
 * @return
 */
function makeHiddenInput(name, value) {
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    return input;
}
/**
 * Makes hidden input, and append to target element. If input[name=".."] already exists, overwrite it.
 * @param target querySelector
 * @param name   name attribute.
 * @param value  value attribute.
 */
function appendHiddenInput(target, name, value) {
    var targetElm = __WEBPACK_IMPORTED_MODULE_0__base__["b" /* getElement */](target);
    // Remove if already has input.
    __WEBPACK_IMPORTED_MODULE_0__base__["f" /* removeElements */]("input[name=\"" + name + "\"]", target);
    targetElm.appendChild(makeHiddenInput(name, value));
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods_base__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return __WEBPACK_IMPORTED_MODULE_0__methods_base__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getElements", function() { return __WEBPACK_IMPORTED_MODULE_0__methods_base__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getElementsAsArray", function() { return __WEBPACK_IMPORTED_MODULE_0__methods_base__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeElements", function() { return __WEBPACK_IMPORTED_MODULE_0__methods_base__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toNodeList", function() { return __WEBPACK_IMPORTED_MODULE_0__methods_base__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "nodeListToArray", function() { return __WEBPACK_IMPORTED_MODULE_0__methods_base__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "findAncestor", function() { return __WEBPACK_IMPORTED_MODULE_0__methods_base__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__methods_util__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "addListener", function() { return __WEBPACK_IMPORTED_MODULE_1__methods_util__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return __WEBPACK_IMPORTED_MODULE_1__methods_util__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "wrapAll", function() { return __WEBPACK_IMPORTED_MODULE_1__methods_util__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "submitConfirm", function() { return __WEBPACK_IMPORTED_MODULE_1__methods_util__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return __WEBPACK_IMPORTED_MODULE_1__methods_util__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return __WEBPACK_IMPORTED_MODULE_1__methods_util__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return __WEBPACK_IMPORTED_MODULE_1__methods_util__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return __WEBPACK_IMPORTED_MODULE_1__methods_util__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "show", function() { return __WEBPACK_IMPORTED_MODULE_1__methods_util__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toggleShow", function() { return __WEBPACK_IMPORTED_MODULE_1__methods_util__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "makeHiddenInput", function() { return __WEBPACK_IMPORTED_MODULE_1__methods_util__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "appendHiddenInput", function() { return __WEBPACK_IMPORTED_MODULE_1__methods_util__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_element_filter__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return __WEBPACK_IMPORTED_MODULE_2__classes_element_filter__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ElementFilter", function() { return __WEBPACK_IMPORTED_MODULE_2__classes_element_filter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_element_sorter__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return __WEBPACK_IMPORTED_MODULE_3__classes_element_sorter__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ElementSorter", function() { return __WEBPACK_IMPORTED_MODULE_3__classes_element_sorter__["a"]; });






/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = filter;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__methods_util__ = __webpack_require__(1);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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


/**
 * Filtering elements. (helper method)
 * @param  selector   querySelector
 * @param  str     filter string.
 * @param  enableHTML using .innerHTML, default is false.
 * @return            Hit number.
 */
function filter(selector, str, enableHTML) {
    if (str === void 0) { str = ''; }
    if (enableHTML === void 0) { enableHTML = false; }
    var f = new ElementFilter(selector, str, { enableHTML: enableHTML });
    return f.execute().hit;
}
var ElementFilter = /** @class */ (function () {
    /**
     * constructor
     * @param selector target elements.
     * @param str   a string for filtering.
     * @param options  enableHTML?: boolean
     */
    function ElementFilter(selector, str, options) {
        if (str === void 0) { str = ''; }
        if (options === void 0) { options = {}; }
        this.hit = 0;
        this.elms = __WEBPACK_IMPORTED_MODULE_0__methods_base__["c" /* getElements */](selector);
        this.filter = str;
        this.options = this.getDefaultOptions();
        this.setOptions(options);
    }
    /**
     * getDefaultOptions
     * @return filter options object.
     */
    ElementFilter.prototype.getDefaultOptions = function () {
        return {
            enableHTML: false,
        };
    };
    /**
     * setOptions
     * @param  options enableHTML?: boolean
     * @return
     */
    ElementFilter.prototype.setOptions = function (options) {
        this.options = __assign({}, this.options, options);
    };
    /**
     * setFilter
     * @param  filter a string for filtering.
     * @return
     */
    ElementFilter.prototype.setFilter = function (str) {
        this.filter = str;
        return this;
    };
    /**
     * get hit property.
     * @return
     */
    ElementFilter.prototype.getHit = function () {
        return this.hit;
    };
    /**
     * Executes filtering.
     * @return
     */
    ElementFilter.prototype.execute = function () {
        if (this.elmsIsTable()) {
            this.filteringTable();
        }
        else {
            this.filteringNodes(this.elms);
        }
        return this;
    };
    ElementFilter.prototype.filteringTable = function () {
        var table = this.elms[0];
        var tableRows = __WEBPACK_IMPORTED_MODULE_0__methods_base__["c" /* getElements */]('tbody tr', table);
        this.filteringNodes(tableRows);
    };
    ElementFilter.prototype.filteringNodes = function (nodes) {
        this.hit = 0;
        var str = this.filter.toUpperCase();
        try {
            for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                var node = nodes_1_1.value;
                var elm = node;
                var content = this.options.enableHTML
                    ? elm.innerHTML
                    : elm.textContent;
                if (content.toUpperCase().indexOf(str) === -1) {
                    __WEBPACK_IMPORTED_MODULE_1__methods_util__["d" /* hide */](elm);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_1__methods_util__["g" /* show */](elm);
                    this.hit++;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _a;
    };
    ElementFilter.prototype.elmsIsTable = function () {
        var elm = this.elms[0];
        return this.elms.length === 1 && elm.tagName === 'TABLE';
    };
    return ElementFilter;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = sort;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementSorter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__methods_base__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

/**
 * Sorting elements. (helper method)
 * @param  elm     base element.
 * @param  options options for ElementSorter.
 * @return         sorted elements.
 */
function sort(elm, options) {
    if (options === void 0) { options = {}; }
    var s = new ElementSorter(elm, options);
    return s.execute().getItems();
}
var ElementSorter = /** @class */ (function () {
    /**
     * constructor
     * @param elm     Base element. e.g. `<ul>`, `<ol>` or `<table>`..
     * @param options items: 'auto'|selector|NodeList, datasetName: object
     */
    function ElementSorter(elm, options) {
        if (options === void 0) { options = {}; }
        this.options = this.getDefaultOptions();
        this.setOptions(options);
        this.setElement(elm);
        this.setItems(this.options.items);
    }
    /**
     * getDefaultOptions
     * @return
     */
    ElementSorter.prototype.getDefaultOptions = function () {
        return {
            items: 'auto',
            datasetName: {
                sortDirection: 'sortDirection',
                sortType: 'sortType',
                sortValue: 'sortValue',
            },
        };
    };
    /**
     * setOptions
     * @param  options items: 'auto'|selector|NodeList, datasetName: object
     * @return
     */
    ElementSorter.prototype.setOptions = function (options) {
        this.options = __assign({}, this.options, options);
        return this;
    };
    /**
     * set base element.
     * @param  elm
     * @return
     */
    ElementSorter.prototype.setElement = function (elm) {
        this.elm = __WEBPACK_IMPORTED_MODULE_0__methods_base__["b" /* getElement */](elm);
        return this;
    };
    /**
     * getItems
     * @return
     */
    ElementSorter.prototype.getItems = function () {
        return this.items;
    };
    /**
     * set items that target for sort.
     * @param  items
     * @return
     */
    ElementSorter.prototype.setItems = function (items) {
        if (this.elmIsTable()) {
            this.items = __WEBPACK_IMPORTED_MODULE_0__methods_base__["d" /* getElementsAsArray */]('tbody tr', this.elm);
        }
        else if (items === 'auto') {
            this.items = __WEBPACK_IMPORTED_MODULE_0__methods_base__["e" /* nodeListToArray */](this.elm.childNodes)
                .filter(function (node) { return node.tagName; });
        }
        else {
            this.items = __WEBPACK_IMPORTED_MODULE_0__methods_base__["d" /* getElementsAsArray */](items, this.elm);
        }
        return this;
    };
    /**
     * Execute sort.
     * @return
     */
    ElementSorter.prototype.execute = function () {
        this.elmIsTable() ? this.sortTable() : this.sortElements();
        return this;
    };
    ElementSorter.prototype.elmIsTable = function () {
        return this.elm.tagName === 'TABLE';
    };
    ElementSorter.prototype.sortElements = function () {
        var _this = this;
        var compareMethod = function (a, b) {
            var aVal = _this.getSortValue(a);
            var bVal = _this.getSortValue(b);
            var type = _this.getSortType(_this.elm) || _this.getSortType(a);
            var asc = _this.getSortDirection(_this.elm) !== 'desc';
            return _this.compare(aVal, bVal, type, asc);
        };
        this.toggleSortDirection(this.elm);
        this.sorting(this.items, compareMethod.bind(this));
    };
    ElementSorter.prototype.sortTable = function () {
        var _this = this;
        var heads = __WEBPACK_IMPORTED_MODULE_0__methods_base__["d" /* getElementsAsArray */]('thead th', this.elm);
        var _loop_1 = function (i, head) {
            head.style.cursor = 'pointer'; // Set cursor style to `pointer`.
            head.addEventListener('click', function (event) {
                event.preventDefault();
                var th = event.currentTarget;
                _this.toggleSortDirection(th);
                _this.sortingTable(_this.items, i + 1, _this.getSortType(th), _this.getSortDirection(th));
            });
        };
        try {
            for (var _a = __values(heads.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var _c = __read(_b.value, 2), i = _c[0], head = _c[1];
                _loop_1(i, head);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _d;
    };
    ElementSorter.prototype.sorting = function (items, compareMethod) {
        items.sort(compareMethod);
        items.forEach(function (item) {
            var parent = item.parentNode;
            parent.removeChild(item);
            parent.appendChild(item);
        });
    };
    ElementSorter.prototype.sortingTable = function (rows, nth, type, direction) {
        var _this = this;
        var compareMethod = function (a, b) {
            a = __WEBPACK_IMPORTED_MODULE_0__methods_base__["b" /* getElement */]("td:nth-child(" + nth + ")", a);
            b = __WEBPACK_IMPORTED_MODULE_0__methods_base__["b" /* getElement */]("td:nth-child(" + nth + ")", b);
            var aVal = _this.getSortValue(a);
            var bVal = _this.getSortValue(b);
            type = type || _this.getSortType(a);
            var asc = direction === 'asc';
            return _this.compare(aVal, bVal, type, asc);
        };
        this.sorting(rows, compareMethod.bind(this));
    };
    ElementSorter.prototype.getSortValue = function (elm) {
        var sortValue = elm.dataset[this.options.datasetName.sortValue];
        if (!sortValue) {
            sortValue = elm.textContent;
        }
        return sortValue.toUpperCase();
    };
    ElementSorter.prototype.getSortType = function (elm) {
        return elm.dataset[this.options.datasetName.sortType] || null;
    };
    ElementSorter.prototype.getSortDirection = function (elm) {
        return elm.dataset[this.options.datasetName.sortDirection];
    };
    ElementSorter.prototype.toggleSortDirection = function (elm) {
        elm.dataset[this.options.datasetName.sortDirection]
            = this.getSortDirection(elm) === 'asc' ? 'desc' : 'asc';
    };
    ElementSorter.prototype.compare = function (a, b, type, asc) {
        if (asc === void 0) { asc = true; }
        var compareNumber = function (aVal, bVal) {
            var aNum = parseFloat(aVal);
            var bNum = parseFloat(b);
            return asc ? aNum - bNum : bNum - aNum;
        };
        var compareDate = function (aVal, bVal) {
            var aDate = new Date(aVal);
            var bDate = new Date(bVal);
            return asc
                ? aDate.getTime() - bDate.getTime()
                : bDate.getTime() - aDate.getTime();
        };
        if (type === 'number') {
            return compareNumber(a, b);
        }
        else if (type === 'date') {
            return compareDate(a, b);
        }
        else {
            // default: compare as string.
            return asc ? a.localeCompare(b) : b.localeCompare(a);
        }
    };
    return ElementSorter;
}());



/***/ })
/******/ ]);
});
//# sourceMappingURL=element-util.js.map