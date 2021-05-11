(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ElementUtil"] = factory();
	else
		root["ElementUtil"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/element-filter.ts":
/*!***************************************!*\
  !*** ./src/classes/element-filter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "ElementFilter": () => (/* binding */ ElementFilter)
/* harmony export */ });
/* harmony import */ var _methods_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/base */ "./src/methods/base.ts");
/* harmony import */ var _methods_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../methods/util */ "./src/methods/util.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


/**
 * Filtering elements. (It's helper method for the ElementFilter.)
 *
 * @param {ElementTarget} selector target elements.
 * @param {string} [str=''] filter string. default: `''`
 * @param {FilterOptions} [options={}] options. default: `{}`
 * @returns {FilterResult} {elms, filtered}
 */
function filter(selector, str, options) {
    if (str === void 0) { str = ''; }
    if (options === void 0) { options = {}; }
    return new ElementFilter(selector, str, options).execute();
}
var ElementFilter = /** @class */ (function () {
    /**
     * Creates an instance of ElementFilter.
     * @param {ElementTarget} selector target elements.
     * @param {string} [str=''] filter string. default: `''`
     * @param {FilterOptions} [options={}] options. default: `{}`
     * @memberof ElementFilter
     */
    function ElementFilter(selector, str, options) {
        if (str === void 0) { str = ''; }
        if (options === void 0) { options = {}; }
        this.filtered = [];
        this.elms = (0,_methods_base__WEBPACK_IMPORTED_MODULE_0__.getElementsAsArray)(selector);
        this.setFilter(str);
        this.options = this.getDefaultOptions();
        this.setOptions(options);
    }
    /**
     * Get default options.
     *
     * @returns {FilterOptions}
     * @memberof ElementFilter
     */
    ElementFilter.prototype.getDefaultOptions = function () {
        return {
            enableHTML: false,
        };
    };
    /**
     * Set options.
     *
     * @param {FilterOptions} options
     * @returns {this}
     * @memberof ElementFilter
     */
    ElementFilter.prototype.setOptions = function (options) {
        this.options = __assign(__assign({}, this.options), options);
        return this;
    };
    /**
     * Set filter string.
     *
     * @param {string} str string for filtering.
     * @returns {this}
     * @memberof ElementFilter
     */
    ElementFilter.prototype.setFilter = function (str) {
        this.filter = str;
        return this;
    };
    /**
     * Execute filtering.
     *
     * @returns {FilterResult}
     * @memberof ElementFilter
     */
    ElementFilter.prototype.execute = function () {
        if (this.elmsIsTable()) {
            this.filteringTable();
        }
        else {
            this.filteringNodes(this.elms);
        }
        return {
            elms: this.elms,
            filtered: this.filtered,
        };
    };
    ElementFilter.prototype.filteringTable = function () {
        var tableRows = (0,_methods_base__WEBPACK_IMPORTED_MODULE_0__.getElementsAsArray)('tbody tr', this.elms[0]);
        this.filteringNodes(tableRows);
    };
    ElementFilter.prototype.filteringNodes = function (elms) {
        var str = this.filter.toUpperCase();
        for (var _i = 0, elms_1 = elms; _i < elms_1.length; _i++) {
            var elm = elms_1[_i];
            var content = this.options.enableHTML
                ? elm.innerHTML
                : elm.textContent;
            if (content.toUpperCase().indexOf(str) === -1) {
                this.actionToElm(elm, false);
            }
            else {
                this.actionToElm(elm, true);
                this.filtered.push(elm);
            }
        }
    };
    ElementFilter.prototype.actionToElm = function (elm, isMatched) {
        var action = this.options.action;
        if (action === 'hideOthers') {
            isMatched ? (0,_methods_util__WEBPACK_IMPORTED_MODULE_1__.show)(elm) : (0,_methods_util__WEBPACK_IMPORTED_MODULE_1__.hide)(elm);
        }
        else if (typeof action === 'string' && /^(addClass:)/.test(action)) {
            var _a = action.split(':').map(function (x) { return x.trim(); }), className = _a[1];
            isMatched ? (0,_methods_util__WEBPACK_IMPORTED_MODULE_1__.addClass)(elm, className) : (0,_methods_util__WEBPACK_IMPORTED_MODULE_1__.removeClass)(elm, className);
        }
        else if (typeof action === 'function') {
            action(elm, isMatched);
        }
    };
    ElementFilter.prototype.elmsIsTable = function () {
        return this.elms.length === 1
            && this.elms[0].tagName === 'TABLE';
    };
    return ElementFilter;
}());



/***/ }),

/***/ "./src/classes/element-sorter.ts":
/*!***************************************!*\
  !*** ./src/classes/element-sorter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sort": () => (/* binding */ sort),
/* harmony export */   "ElementSorter": () => (/* binding */ ElementSorter)
/* harmony export */ });
/* harmony import */ var _methods_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/base */ "./src/methods/base.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * Sorting elements. (It's helper method of the ElementSorter.)
 *
 * @param {ElementTarget} elm base element.
 * @param {SorterOptions} [options={}] options for ElementSorter. default: `{}`
 * @returns {HTMLElement[]} sorted elements.
 */
function sort(elm, options) {
    if (options === void 0) { options = {}; }
    var s = new ElementSorter(elm, options);
    return s.execute().getItems();
}
var ElementSorter = /** @class */ (function () {
    /**
     * Creates an instance of ElementSorter.
     * @param {ElementTarget} elm Base element. e.g. `<ul>`, `<ol>` or `<table>`..
     * @param {SorterOptions} [options={}] items: 'auto'|selector|NodeList, datasetName: object
     * @memberof ElementSorter
     */
    function ElementSorter(elm, options) {
        if (options === void 0) { options = {}; }
        this.options = this.getDefaultOptions();
        this.setOptions(options);
        this.setElement(elm);
        this.setItems(this.options.items);
    }
    /**
     * Get default options.
     *
     * @returns {SorterOptions}
     * @memberof ElementSorter
     */
    ElementSorter.prototype.getDefaultOptions = function () {
        return {
            items: 'auto',
            datasetName: {
                sortDirection: 'sortDirection',
                sortType: 'sortType',
                sortValue: 'sortValue', // data-sort-value
            },
        };
    };
    /**
     * Set options.
     *
     * @param {SorterOptions} options items: 'auto'|selector|NodeList, datasetName: object
     * @returns {this}
     * @memberof ElementSorter
     */
    ElementSorter.prototype.setOptions = function (options) {
        this.options = __assign(__assign({}, this.options), options);
        return this;
    };
    /**
     * Set base element.
     *
     * @param {ElementTarget} elm
     * @returns {this}
     * @memberof ElementSorter
     */
    ElementSorter.prototype.setElement = function (elm) {
        this.elm = (0,_methods_base__WEBPACK_IMPORTED_MODULE_0__.getElement)(elm);
        return this;
    };
    /**
     * Get items.
     *
     * @returns {HTMLElement[]}
     * @memberof ElementSorter
     */
    ElementSorter.prototype.getItems = function () {
        return this.items;
    };
    /**
     * Set target items for to be sorted.
     *
     * @param {ItemsSettable} items
     * @returns {this}
     * @memberof ElementSorter
     */
    ElementSorter.prototype.setItems = function (items) {
        if (this.elmIsTable()) {
            this.items = (0,_methods_base__WEBPACK_IMPORTED_MODULE_0__.getElementsAsArray)('tbody tr', this.elm);
        }
        else if (items === 'auto') {
            this.items = (0,_methods_base__WEBPACK_IMPORTED_MODULE_0__.nodeListToArray)(this.elm.childNodes)
                .filter(function (node) { return node.tagName; });
        }
        else {
            this.items = (0,_methods_base__WEBPACK_IMPORTED_MODULE_0__.getElementsAsArray)(items, this.elm);
        }
        return this;
    };
    /**
     * Execute sort.
     *
     * @returns {this}
     * @memberof ElementSorter
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
        var heads = (0,_methods_base__WEBPACK_IMPORTED_MODULE_0__.getElementsAsArray)('thead th', this.elm);
        heads.forEach(function (head, i) {
            head.style.cursor = 'pointer'; // Set cursor style to `pointer`.
            head.addEventListener('click', function (event) {
                event.preventDefault();
                var th = event.currentTarget;
                _this.toggleSortDirection(th);
                _this.sortingTable(_this.items, i + 1, _this.getSortType(th), _this.getSortDirection(th));
            });
        });
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
            a = (0,_methods_base__WEBPACK_IMPORTED_MODULE_0__.getElement)("td:nth-child(" + nth + ")", a);
            b = (0,_methods_base__WEBPACK_IMPORTED_MODULE_0__.getElement)("td:nth-child(" + nth + ")", b);
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
            var bNum = parseFloat(bVal);
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



/***/ }),

/***/ "./src/methods/base.ts":
/*!*****************************!*\
  !*** ./src/methods/base.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getElement": () => (/* binding */ getElement),
/* harmony export */   "getElements": () => (/* binding */ getElements),
/* harmony export */   "getElementsAsArray": () => (/* binding */ getElementsAsArray),
/* harmony export */   "removeElements": () => (/* binding */ removeElements),
/* harmony export */   "toNodeList": () => (/* binding */ toNodeList),
/* harmony export */   "nodeListToArray": () => (/* binding */ nodeListToArray),
/* harmony export */   "findAncestor": () => (/* binding */ findAncestor)
/* harmony export */ });
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
 * Get a single element.
 *
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default: `document`
 * @returns {Element}
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
}
/**
 * Get elements as NodeList.
 *
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default: `document`
 * @returns {NodeList}
 */
function getElements(selector, base) {
    if (base === void 0) { base = document; }
    base = resolveBase(base);
    if (typeof selector === 'string') {
        return base.querySelectorAll(selector);
    }
    else if (selector instanceof Element) {
        return toNodeList(selector, base);
    }
    else if (selector instanceof NodeList) {
        return selector;
    }
}
/**
 * Get elements as array of HTMLElements.
 *
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default: `document`
 * @returns {HTMLElement[]}
 */
function getElementsAsArray(selector, base) {
    if (base === void 0) { base = document; }
    var nodeList = getElements(selector, base);
    return nodeListToArray(nodeList);
}
/**
 * Remove elements.
 *
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default: `document`
 * @returns {number} The number of removed.
 */
function removeElements(selector, base) {
    if (base === void 0) { base = document; }
    base = resolveBase(base);
    var elms = getElementsAsArray(selector, base);
    elms.forEach(function (elm) { return elm.parentElement.removeChild(elm); });
    return elms.length;
}
/**
 * Convert a single element to NodeList.
 *
 * @param {(Element|string)} elm
 * @param {(Document|ElementTarget)} [base=document] base element. default: `document`
 * @returns {NodeList}
 */
function toNodeList(elm, base) {
    if (base === void 0) { base = document; }
    base = resolveBase(base);
    elm = getElement(elm);
    elm.setAttribute('toNodeList', '');
    var nodeList = base.querySelectorAll('[toNodeList]');
    elm.removeAttribute('toNodeList');
    return nodeList;
}
/**
 * Converts NodeList to Array.
 *
 * @param {(NodeList|any[]|string)} list
 * @returns {any[]}
 */
function nodeListToArray(list) {
    return Array.isArray(list)
        ? list
        : [].slice.call(getElements(list));
}
/**
 * Find ancestor element.
 *
 * @param {ElementTarget} self
 * @param {ElementTarget} ancestor
 * @returns {(Element|null)}
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

/***/ "./src/methods/util.ts":
/*!*****************************!*\
  !*** ./src/methods/util.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListener": () => (/* binding */ addListener),
/* harmony export */   "addOuterListener": () => (/* binding */ addOuterListener),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapAll": () => (/* binding */ wrapAll),
/* harmony export */   "submitConfirm": () => (/* binding */ submitConfirm),
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "show": () => (/* binding */ show),
/* harmony export */   "toggleShow": () => (/* binding */ toggleShow),
/* harmony export */   "makeHiddenInput": () => (/* binding */ makeHiddenInput),
/* harmony export */   "appendHiddenInput": () => (/* binding */ appendHiddenInput)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/methods/base.ts");

/**
 * Add event listener for each element.
 *
 * @param {ElementTarget} selector
 * @param {string} type event type
 * @param {EventListener} listener
 * @param {(boolean|AddEventListenerOptions)} [options=false] default: `false`
 */
function addListener(selector, type, listener, options) {
    if (options === void 0) { options = false; }
    var elms = (0,_base__WEBPACK_IMPORTED_MODULE_0__.getElementsAsArray)(selector);
    elms.forEach(function (elm) { return elm.addEventListener(type, listener, options); });
}
/**
 * Add listener for the event that occurs outer of the target element.
 *
 * @param {(Window|ElementTarget)} base the event target.
 * @param {ElementTarget} target the target element that will be ignored an event.
 * @param {string} type event type.
 * @param {EventListener} listener
 * @param {(boolean|AddEventListenerOptions)} [options=false] default: `false`
 */
function addOuterListener(base, target, type, listener, options) {
    if (options === void 0) { options = false; }
    var root = base === window ? window : (0,_base__WEBPACK_IMPORTED_MODULE_0__.getElement)(base);
    var targetElm = (0,_base__WEBPACK_IMPORTED_MODULE_0__.getElement)(target);
    root.addEventListener(type, function (event) {
        var eventTarget = event.target;
        if (targetElm !== eventTarget
            && !targetElm.contains(eventTarget)) {
            listener(event);
        }
    }, options);
}
/**
 * Wrap for each element.
 *
 * @param {ElementTarget} selector
 * @param {string} className wrapper's class name.
 * @param {string} [tagName='div'] wrapper's tag name. default: `'div'`
 */
function wrap(selector, className, tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    var elms = (0,_base__WEBPACK_IMPORTED_MODULE_0__.getElementsAsArray)(selector);
    for (var _i = 0, elms_1 = elms; _i < elms_1.length; _i++) {
        var elm = elms_1[_i];
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
/**
 * Wrap all elements to inside a one wrapper.
 *
 * @param {ElementTarget} selector
 * @param {string} className wrapper's class name.
 * @param {string} [tagName='div'] wrapper's tag name. default: `'div'`
 */
function wrapAll(selector, className, tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    var elms = (0,_base__WEBPACK_IMPORTED_MODULE_0__.getElementsAsArray)(selector);
    var parent = elms[0].parentNode;
    var preSibling = elms[0].previousSibling;
    var div = document.createElement(tagName);
    addClass(div, className);
    for (var _i = 0, elms_2 = elms; _i < elms_2.length; _i++) {
        var elm = elms_2[_i];
        div.appendChild(elm);
    }
    if (preSibling) {
        parent.insertBefore(div, preSibling.nextSibling);
    }
    else {
        parent.appendChild(div);
    }
}
/**
 * Add confirm on the 'submit' event.
 *
 * @param {ElementTarget} selector
 * @param {string} [message='Are you confirm?'] confirm message. default: `'Are you confirm?'`
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
 * Add classes to element.
 *
 * @param {ElementTarget} selector
 * @param {string} className
 */
function addClass(selector, className) {
    var elm = (0,_base__WEBPACK_IMPORTED_MODULE_0__.getElement)(selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.add(c); });
}
/**
 * Remove classes from element.
 *
 * @param {ElementTarget} selector
 * @param {string} className
 */
function removeClass(selector, className) {
    var elm = (0,_base__WEBPACK_IMPORTED_MODULE_0__.getElement)(selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.remove(c); });
}
/**
 * Toggling classes to element.
 *
 * @param {ElementTarget} selector
 * @param {string} className
 */
function toggleClass(selector, className) {
    var elm = (0,_base__WEBPACK_IMPORTED_MODULE_0__.getElement)(selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.toggle(c); });
}
/**
 * Hide element. It will set value of style.display to 'none'.
 *
 * @param {ElementTarget} selector
 */
function hide(selector) {
    var elm = (0,_base__WEBPACK_IMPORTED_MODULE_0__.getElement)(selector);
    elm.style.display = 'none';
}
/**
 * Show element. It will just remove 'display: none;'.
 *
 * @param {ElementTarget} selector
 */
function show(selector) {
    var elm = (0,_base__WEBPACK_IMPORTED_MODULE_0__.getElement)(selector);
    if (elm.style.display && elm.style.display === 'none') {
        elm.style.display = '';
    }
}
/**
 * Toggling show/hide element.
 *
 * @param {ElementTarget} selector
 */
function toggleShow(selector) {
    var elm = (0,_base__WEBPACK_IMPORTED_MODULE_0__.getElement)(selector);
    elm.style.display !== 'none' ? hide(elm) : show(elm);
}
/**
 * Make a hidden input.
 *
 * @param {string} name name attribute.
 * @param {string} value value attribute.
 * @returns {HTMLInputElement}
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
 *
 * @param {ElementTarget} target
 * @param {string} name name attribute.
 * @param {string} value value attribute.
 */
function appendHiddenInput(target, name, value) {
    var targetElm = (0,_base__WEBPACK_IMPORTED_MODULE_0__.getElement)(target);
    // Remove if already has input.
    (0,_base__WEBPACK_IMPORTED_MODULE_0__.removeElements)("input[name=\"" + name + "\"]", target);
    targetElm.appendChild(makeHiddenInput(name, value));
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/element-util.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findAncestor": () => (/* reexport safe */ _methods_base__WEBPACK_IMPORTED_MODULE_0__.findAncestor),
/* harmony export */   "getElement": () => (/* reexport safe */ _methods_base__WEBPACK_IMPORTED_MODULE_0__.getElement),
/* harmony export */   "getElements": () => (/* reexport safe */ _methods_base__WEBPACK_IMPORTED_MODULE_0__.getElements),
/* harmony export */   "getElementsAsArray": () => (/* reexport safe */ _methods_base__WEBPACK_IMPORTED_MODULE_0__.getElementsAsArray),
/* harmony export */   "nodeListToArray": () => (/* reexport safe */ _methods_base__WEBPACK_IMPORTED_MODULE_0__.nodeListToArray),
/* harmony export */   "removeElements": () => (/* reexport safe */ _methods_base__WEBPACK_IMPORTED_MODULE_0__.removeElements),
/* harmony export */   "toNodeList": () => (/* reexport safe */ _methods_base__WEBPACK_IMPORTED_MODULE_0__.toNodeList),
/* harmony export */   "addClass": () => (/* reexport safe */ _methods_util__WEBPACK_IMPORTED_MODULE_1__.addClass),
/* harmony export */   "addListener": () => (/* reexport safe */ _methods_util__WEBPACK_IMPORTED_MODULE_1__.addListener),
/* harmony export */   "addOuterListener": () => (/* reexport safe */ _methods_util__WEBPACK_IMPORTED_MODULE_1__.addOuterListener),
/* harmony export */   "appendHiddenInput": () => (/* reexport safe */ _methods_util__WEBPACK_IMPORTED_MODULE_1__.appendHiddenInput),
/* harmony export */   "hide": () => (/* reexport safe */ _methods_util__WEBPACK_IMPORTED_MODULE_1__.hide),
/* harmony export */   "makeHiddenInput": () => (/* reexport safe */ _methods_util__WEBPACK_IMPORTED_MODULE_1__.makeHiddenInput),
/* harmony export */   "removeClass": () => (/* reexport safe */ _methods_util__WEBPACK_IMPORTED_MODULE_1__.removeClass),
/* harmony export */   "show": () => (/* reexport safe */ _methods_util__WEBPACK_IMPORTED_MODULE_1__.show),
/* harmony export */   "submitConfirm": () => (/* reexport safe */ _methods_util__WEBPACK_IMPORTED_MODULE_1__.submitConfirm),
/* harmony export */   "toggleClass": () => (/* reexport safe */ _methods_util__WEBPACK_IMPORTED_MODULE_1__.toggleClass),
/* harmony export */   "toggleShow": () => (/* reexport safe */ _methods_util__WEBPACK_IMPORTED_MODULE_1__.toggleShow),
/* harmony export */   "wrap": () => (/* reexport safe */ _methods_util__WEBPACK_IMPORTED_MODULE_1__.wrap),
/* harmony export */   "wrapAll": () => (/* reexport safe */ _methods_util__WEBPACK_IMPORTED_MODULE_1__.wrapAll),
/* harmony export */   "ElementFilter": () => (/* reexport safe */ _classes_element_filter__WEBPACK_IMPORTED_MODULE_2__.ElementFilter),
/* harmony export */   "filter": () => (/* reexport safe */ _classes_element_filter__WEBPACK_IMPORTED_MODULE_2__.filter),
/* harmony export */   "ElementSorter": () => (/* reexport safe */ _classes_element_sorter__WEBPACK_IMPORTED_MODULE_3__.ElementSorter),
/* harmony export */   "sort": () => (/* reexport safe */ _classes_element_sorter__WEBPACK_IMPORTED_MODULE_3__.sort)
/* harmony export */ });
/* harmony import */ var _methods_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/base */ "./src/methods/base.ts");
/* harmony import */ var _methods_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/util */ "./src/methods/util.ts");
/* harmony import */ var _classes_element_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/element-filter */ "./src/classes/element-filter.ts");
/* harmony import */ var _classes_element_sorter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/element-sorter */ "./src/classes/element-sorter.ts");





})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=element-util.js.map