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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/element-util.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/element-filter.ts":
/*!***************************************!*\
  !*** ./src/classes/element-filter.ts ***!
  \***************************************/
/*! exports provided: filter, ElementFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementFilter", function() { return ElementFilter; });
/* harmony import */ var _methods_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/base */ "./src/methods/base.ts");
/* harmony import */ var _methods_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../methods/util */ "./src/methods/util.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
        this.elms = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElements"])(selector);
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
        var tableRows = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElements"])('tbody tr', table);
        this.filteringNodes(tableRows);
    };
    ElementFilter.prototype.filteringNodes = function (nodes) {
        this.hit = 0;
        var str = this.filter.toUpperCase();
        var elms = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["nodeListToArray"])(nodes);
        for (var _i = 0, elms_1 = elms; _i < elms_1.length; _i++) {
            var elm = elms_1[_i];
            var content = this.options.enableHTML
                ? elm.innerHTML
                : elm.textContent;
            if (content.toUpperCase().indexOf(str) === -1) {
                Object(_methods_util__WEBPACK_IMPORTED_MODULE_1__["hide"])(elm);
            }
            else {
                Object(_methods_util__WEBPACK_IMPORTED_MODULE_1__["show"])(elm);
                this.hit++;
            }
        }
    };
    ElementFilter.prototype.elmsIsTable = function () {
        var elm = this.elms[0];
        return this.elms.length === 1 && elm.tagName === 'TABLE';
    };
    return ElementFilter;
}());



/***/ }),

/***/ "./src/classes/element-sorter.ts":
/*!***************************************!*\
  !*** ./src/classes/element-sorter.ts ***!
  \***************************************/
/*! exports provided: sort, ElementSorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementSorter", function() { return ElementSorter; });
/* harmony import */ var _methods_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/base */ "./src/methods/base.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
        this.elm = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(elm);
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
            this.items = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])('tbody tr', this.elm);
        }
        else if (items === 'auto') {
            this.items = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["nodeListToArray"])(this.elm.childNodes)
                .filter(function (node) { return node.tagName; });
        }
        else {
            this.items = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])(items, this.elm);
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
        var heads = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])('thead th', this.elm);
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
            a = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])("td:nth-child(" + nth + ")", a);
            b = Object(_methods_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])("td:nth-child(" + nth + ")", b);
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



/***/ }),

/***/ "./src/element-util.ts":
/*!*****************************!*\
  !*** ./src/element-util.ts ***!
  \*****************************/
/*! exports provided: getElement, getElements, getElementsAsArray, removeElements, toNodeList, nodeListToArray, findAncestor, addListener, wrap, wrapAll, submitConfirm, addClass, removeClass, toggleClass, hide, show, toggleShow, makeHiddenInput, appendHiddenInput, filter, ElementFilter, sort, ElementSorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _methods_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/base */ "./src/methods/base.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["getElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElements", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["getElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementsAsArray", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeElements", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["removeElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNodeList", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["toNodeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeListToArray", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["nodeListToArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findAncestor", function() { return _methods_base__WEBPACK_IMPORTED_MODULE_0__["findAncestor"]; });

/* harmony import */ var _methods_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/util */ "./src/methods/util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addListener", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["addListener"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapAll", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["wrapAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submitConfirm", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["submitConfirm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["toggleClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "show", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["show"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleShow", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["toggleShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeHiddenInput", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["makeHiddenInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendHiddenInput", function() { return _methods_util__WEBPACK_IMPORTED_MODULE_1__["appendHiddenInput"]; });

/* harmony import */ var _classes_element_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/element-filter */ "./src/classes/element-filter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _classes_element_filter__WEBPACK_IMPORTED_MODULE_2__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementFilter", function() { return _classes_element_filter__WEBPACK_IMPORTED_MODULE_2__["ElementFilter"]; });

/* harmony import */ var _classes_element_sorter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/element-sorter */ "./src/classes/element-sorter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return _classes_element_sorter__WEBPACK_IMPORTED_MODULE_3__["sort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementSorter", function() { return _classes_element_sorter__WEBPACK_IMPORTED_MODULE_3__["ElementSorter"]; });







/***/ }),

/***/ "./src/methods/base.ts":
/*!*****************************!*\
  !*** ./src/methods/base.ts ***!
  \*****************************/
/*! exports provided: getElement, getElements, getElementsAsArray, removeElements, toNodeList, nodeListToArray, findAncestor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElements", function() { return getElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementsAsArray", function() { return getElementsAsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElements", function() { return removeElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNodeList", function() { return toNodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeListToArray", function() { return nodeListToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAncestor", function() { return findAncestor; });
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
    var elms = getElementsAsArray(selector, base);
    elms.forEach(function (elm) { return elm.parentElement.removeChild(elm); });
    return elms.length;
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
        return [].slice.call(list);
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

/***/ "./src/methods/util.ts":
/*!*****************************!*\
  !*** ./src/methods/util.ts ***!
  \*****************************/
/*! exports provided: addListener, wrap, wrapAll, submitConfirm, addClass, removeClass, toggleClass, hide, show, toggleShow, makeHiddenInput, appendHiddenInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListener", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapAll", function() { return wrapAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitConfirm", function() { return submitConfirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleShow", function() { return toggleShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeHiddenInput", function() { return makeHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendHiddenInput", function() { return appendHiddenInput; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/methods/base.ts");

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
    var elms = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])(selector);
    elms.forEach(function (elm) { return elm.addEventListener(type, listener, useCapture); });
    return elms.length;
}
/**
 * Wrapping each element.
 * @param selector  querySelector
 * @param className wrapper's class name.
 * @param tagName   wrapper's tag name, default is 'div'.
 */
function wrap(selector, className, tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    var elms = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])(selector);
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
 * Wrapping all elements inside a one wrapper.
 * @param selector  querySelector
 * @param className wrapper's class name.
 * @param tagName   wrapper's tag name, default is 'div'.
 */
function wrapAll(selector, className, tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    var elms = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElementsAsArray"])(selector);
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
    var elm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.add(c); });
}
/**
 * Remove class from element.
 * @param selector  querySelector
 * @param className class name. If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
function removeClass(selector, className) {
    var elm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.remove(c); });
}
/**
 * Toggling class to element.
 * @param selector  querySelector
 * @param className class name. If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
function toggleClass(selector, className) {
    var elm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(selector);
    var classes = className.split(' ');
    classes.forEach(function (c) { return elm.classList.toggle(c); });
}
/**
 * Hide element. It will set element's display to 'none'.
 * @param selector querySelector
 */
function hide(selector) {
    var elm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(selector);
    elm.style.display = 'none';
}
/**
 * Show element. It will just remove 'display=none;'.
 * @param selector querySelector
 */
function show(selector) {
    var elm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(selector);
    if (elm.style.display && elm.style.display === 'none') {
        elm.style.display = '';
    }
}
/**
 * Toggling show/hide element.
 * @param selector querySelector
 */
function toggleShow(selector) {
    var elm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(selector);
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
    var targetElm = Object(_base__WEBPACK_IMPORTED_MODULE_0__["getElement"])(target);
    // Remove if already has input.
    Object(_base__WEBPACK_IMPORTED_MODULE_0__["removeElements"])("input[name=\"" + name + "\"]", target);
    targetElm.appendChild(makeHiddenInput(name, value));
}


/***/ })

/******/ });
});
//# sourceMappingURL=element-util.js.map