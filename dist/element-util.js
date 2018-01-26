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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["addListener"] = addListener;
/* harmony export (immutable) */ __webpack_exports__["wrap"] = wrap;
/* harmony export (immutable) */ __webpack_exports__["wrapAll"] = wrapAll;
/* harmony export (immutable) */ __webpack_exports__["submitConfirm"] = submitConfirm;
/* harmony export (immutable) */ __webpack_exports__["addClass"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["removeClass"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["toggleClass"] = toggleClass;
/* harmony export (immutable) */ __webpack_exports__["hide"] = hide;
/* harmony export (immutable) */ __webpack_exports__["show"] = show;
/* harmony export (immutable) */ __webpack_exports__["toggleShow"] = toggleShow;
/* harmony export (immutable) */ __webpack_exports__["makeHiddenInput"] = makeHiddenInput;
/* harmony export (immutable) */ __webpack_exports__["appendHiddenInput"] = appendHiddenInput;
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

function addListener(selector, type, listener, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    var elms = __WEBPACK_IMPORTED_MODULE_0__base__["getElements"](selector);
    if (!elms.length) {
        return null;
    }
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
function wrap(selector, className, tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    var elms = __WEBPACK_IMPORTED_MODULE_0__base__["getElements"](selector);
    try {
        for (var elms_2 = __values(elms), elms_2_1 = elms_2.next(); !elms_2_1.done; elms_2_1 = elms_2.next()) {
            var elm = elms_2_1.value;
            var parent_1 = elm.parentNode;
            var sibling = elm.nextSibling;
            var div = document.createElement(tagName);
            div.classList.add(className);
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
function wrapAll(selector, className, tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    var elms = __WEBPACK_IMPORTED_MODULE_0__base__["getElements"](selector);
    var parent = elms[0].parentNode;
    var preSibling = elms[0].previousSibling;
    var div = document.createElement(tagName);
    div.classList.add(className);
    elms.forEach(function (elm) { return div.appendChild(elm); });
    if (preSibling) {
        parent.insertBefore(div, preSibling.nextSibling);
    }
    else {
        parent.appendChild(div);
    }
}
function submitConfirm(selector, message) {
    if (message === void 0) { message = 'Are you confirm?'; }
    addListener(selector, 'submit', function (e) {
        if (!confirm(message)) {
            e.preventDefault();
        }
    }, true); // this use capture.
}
function addClass(selector, className) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](selector);
    elm.classList.add(className);
}
function removeClass(selector, className) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](selector);
    elm.classList.remove(className);
}
function toggleClass(selector, className) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](selector);
    elm.classList.toggle(className);
}
function hide(selector) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](selector);
    elm.style.display = 'none';
}
function show(selector) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](selector);
    if (elm.style.display && elm.style.display === 'none') {
        elm.style.display = '';
    }
}
function toggleShow(selector) {
    var elm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](selector);
    elm.style.display !== 'none' ? hide(elm) : show(elm);
}
function makeHiddenInput(name, value) {
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    return input;
}
function appendHiddenInput(target, name, value) {
    var targetElm = __WEBPACK_IMPORTED_MODULE_0__base__["getElement"](target);
    // Remove if already has input.
    __WEBPACK_IMPORTED_MODULE_0__base__["removeElements"]("input[name=\"" + name + "\"]", target);
    targetElm.appendChild(makeHiddenInput(name, value));
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_element_filter__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_element_sorter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__methods_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__methods_util__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ElementFilter", function() { return __WEBPACK_IMPORTED_MODULE_0__classes_element_filter__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ElementSorter", function() { return __WEBPACK_IMPORTED_MODULE_1__classes_element_sorter__["a"]; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





/* harmony default export */ __webpack_exports__["default"] = (__assign({}, __WEBPACK_IMPORTED_MODULE_2__methods_base__, __WEBPACK_IMPORTED_MODULE_3__methods_util__, { filter: function (selector, filter, enableHTML) {
        if (filter === void 0) { filter = ''; }
        if (enableHTML === void 0) { enableHTML = false; }
        var f = new __WEBPACK_IMPORTED_MODULE_0__classes_element_filter__["a" /* default */](selector, filter, { enableHTML: enableHTML });
        return f.execute().hit;
    },
    sort: function (elm, options) {
        if (options === void 0) { options = {}; }
        var s = new __WEBPACK_IMPORTED_MODULE_1__classes_element_sorter__["a" /* default */](elm, options);
        return s.execute().getItems();
    } }));


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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


var ElementFilter = /** @class */ (function () {
    function ElementFilter(selector, filter, options) {
        if (filter === void 0) { filter = ''; }
        if (options === void 0) { options = {}; }
        this.hit = 0;
        this.elms = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElements"](selector);
        this.filter = filter;
        this.options = this.getDefaultOptions();
        this.setOptions(options);
    }
    ElementFilter.prototype.getDefaultOptions = function () {
        return {
            enableHTML: false,
        };
    };
    ElementFilter.prototype.setOptions = function (options) {
        this.options = __assign({}, this.options, options);
    };
    ElementFilter.prototype.setFilter = function (filter) {
        this.filter = filter;
        return this;
    };
    ElementFilter.prototype.getHit = function () {
        return this.hit;
    };
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
        var tableRows = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElements"]('tbody tr', table);
        this.filteringNodes(tableRows);
    };
    ElementFilter.prototype.filteringNodes = function (nodes) {
        this.hit = 0;
        var filter = this.filter.toUpperCase();
        try {
            for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                var node = nodes_1_1.value;
                var elm = node;
                var content = this.options.enableHTML
                    ? elm.innerHTML
                    : elm.textContent;
                if (content.toUpperCase().indexOf(filter) === -1) {
                    __WEBPACK_IMPORTED_MODULE_1__methods_util__["hide"](elm);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_1__methods_util__["show"](elm);
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
/* harmony default export */ __webpack_exports__["a"] = (ElementFilter);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

var ElementSorter = /** @class */ (function () {
    function ElementSorter(elm, options) {
        if (options === void 0) { options = {}; }
        this.options = this.getDefaultOptions();
        this.setOptions(options);
        this.setElement(elm);
        this.setItems(this.options.items);
    }
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
    ElementSorter.prototype.setOptions = function (options) {
        this.options = __assign({}, this.options, options);
        return this;
    };
    ElementSorter.prototype.setElement = function (elm) {
        this.elm = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElement"](elm);
        return this;
    };
    ElementSorter.prototype.getItems = function () {
        return this.items;
    };
    ElementSorter.prototype.setItems = function (items) {
        if (this.elmIsTable()) {
            var nodeList = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElements"]('tbody tr', this.elm);
            this.items = __WEBPACK_IMPORTED_MODULE_0__methods_base__["nodeListToArray"](nodeList);
        }
        else if (items === 'auto') {
            this.items = __WEBPACK_IMPORTED_MODULE_0__methods_base__["nodeListToArray"](this.elm.childNodes)
                .filter(function (node) { return node.tagName; });
        }
        else {
            var nodeList = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElements"](items, this.elm);
            this.items = __WEBPACK_IMPORTED_MODULE_0__methods_base__["nodeListToArray"](nodeList);
        }
        return this;
    };
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
        var heads = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElements"]('thead th', this.elm);
        var _loop_1 = function (i, head) {
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
            a = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElement"]("td:nth-child(" + nth + ")", a);
            b = __WEBPACK_IMPORTED_MODULE_0__methods_base__["getElement"]("td:nth-child(" + nth + ")", b);
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
/* harmony default export */ __webpack_exports__["a"] = (ElementSorter);


/***/ })
/******/ ]);
});
//# sourceMappingURL=element-util.js.map