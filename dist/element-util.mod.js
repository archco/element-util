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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /**
   * getElement
   *
   * @param  {String|Element|NodeList} selector
   * @param  {String|Element} [ base = document ]
   * @return {Element}
   */
  getElement: function getElement(selector) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    base = this._resolveBase(base);

    if (typeof selector === 'string') {
      return base.querySelector(selector);
    } else if (selector instanceof Element) {
      return selector;
    } else if (selector instanceof NodeList) {
      return selector[0];
    } else {
      throw new TypeError('selector is must be String or Element');
    }
  },


  /**
   * getElements
   *
   * @param  {String|Element|NodeList} selector
   * @param  {String|Element} [ base = document ]
   * @return {NodeList}
   */
  getElements: function getElements(selector) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    base = this._resolveBase(base);

    if (typeof selector === 'string') {
      return base.querySelectorAll(selector);
    } else if (selector instanceof Element) {
      return this.toNodeList(selector);
    } else if (selector instanceof NodeList) {
      return selector;
    } else {
      throw new TypeError('selector is must be String or NodeList');
    }
  },


  /**
   * removeElements
   *
   * @param  {String|Element|NodeList} selector
   * @param  {String|Element} [ base = document ]
   * @return {Number} number of affected.
   */
  removeElements: function removeElements(selector) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    base = this._resolveBase(base);

    var elms = this.getElements(selector, base);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elm = _step.value;

        elm.parentNode.removeChild(elm);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return elms.length;
  },


  /**
   * Element to NodeList
   *
   * @param  {Element} element
   * @return {NodeList}
   */
  toNodeList: function toNodeList(element) {
    element.setAttribute('toNodeList', '');
    var nodelist = document.querySelectorAll('[toNodeList]');
    element.removeAttribute('toNodeList');
    return nodelist;
  },


  /**
   * Converting a NodeList to an Array.
   *
   * @param  {NodeList} nodelist
   * @return {Array}
   */
  nodeListToArray: function nodeListToArray(nodelist) {
    return Array.prototype.slice.call(nodelist);
  },


  /**
   * find ancestor by selector.
   *
   * @param  {Element|String} element or querySelector
   * @param  {String}  selector
   * @return {Element|null}
   */
  findAncestor: function findAncestor(element, selector) {
    element = this.getElement(element);
    do {
      if (element == this.getElement('html')) return null;
      element = element.parentElement;
    } while (!element.matches(selector));
    return element;
  },
  _resolveBase: function _resolveBase(base) {
    base = base === document ? base : this.getElement(base);
    if (!base) throw new ReferenceError("'base' element is not exist!");
    return base;
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /**
   * add event listener on selector.
   *
   * @param {String}   selector
   * @param {String}   type  event type
   * @param {Function} listener
   * @param {Boolean}  [ useCapture = false ]
   */
  addListener: function addListener(selector, type, listener) {
    var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var elements = _base2.default.getElements(selector);
    if (!elements.length) return null;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        element.addEventListener(type, listener, useCapture);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return elements.length;
  },


  /**
   * wrap elements by wrapper, one by one.
   *
   * @param  {String} selector
   * @param  {String} className wrapper's class name.
   * @param  {String} [ tagName = 'DIV' ] wrapper's tag name.
   * @return {void}
   */
  wrap: function wrap(selector, className) {
    var tagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'DIV';

    var elements = _base2.default.getElements(selector);

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var elm = _step2.value;

        var parent = elm.parentNode;
        var sibling = elm.nextSibling;
        var div = document.createElement(tagName);
        div.classList.add(className);
        div.appendChild(elm);

        if (sibling) {
          parent.insertBefore(div, sibling);
        } else {
          parent.appendChild(div);
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  },


  /**
   * wrap all elements inside to wrapper.
   *
   * @param  {String} selector
   * @param  {String} className wrapper's class name.
   * @param  {String} [ tagName = 'DIV' ] wrapper's tag name.
   * @return {void}
   */
  wrapAll: function wrapAll(selector, className) {
    var tagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'DIV';

    var elements = _base2.default.getElements(selector);
    var parent = elements[0].parentNode;
    var sibling = elements[0].nextSibling;
    var div = document.createElement(tagName);
    div.classList.add(className);

    elements.forEach(function (elm) {
      return div.appendChild(elm);
    });

    if (sibling) {
      parent.insertBefore(div, sibling);
    } else {
      parent.appendChild(div);
    }
  },


  /**
   * submitConfirm
   *
   * @param  {String|Element|NodeList} selector
   * @param  {String} [ message = 'Are you confirm?' ]
   * @return {void}
   */
  submitConfirm: function submitConfirm(selector) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Are you confirm?';

    this.addListener(selector, 'submit', function (event) {
      if (!confirm(message)) event.preventDefault();
    }, true); // use capture.
  },


  /**
   * addClass
   *
   * @param  {String} selector
   * @param  {String} className
   * @return {void}
   */
  addClass: function addClass(selector, className) {
    var elm = _base2.default.getElement(selector);
    elm.classList.add(className);
  },


  /**
   * removeClass
   *
   * @param  {String} selector
   * @param  {String} className
   * @return {void}
   */
  removeClass: function removeClass(selector, className) {
    var elm = _base2.default.getElement(selector);
    elm.classList.remove(className);
  },


  /**
   * toggleClass
   *
   * @param  {String} selector
   * @param  {String} className
   * @return {void}
   */
  toggleClass: function toggleClass(selector, className) {
    var elm = _base2.default.getElement(selector);
    elm.classList.toggle(className);
  },


  /**
   * hide element
   *
   * @param  {String} selector
   * @return {void}
   */
  hide: function hide(selector) {
    var elm = _base2.default.getElement(selector);
    elm.style.display = 'none';
  },


  /**
   * show element
   *
   * @param  {String} selector
   * @return {void}
   */
  show: function show(selector) {
    var elm = _base2.default.getElement(selector);
    if (elm.style.display && elm.style.display === 'none') {
      elm.style.display = null;
    }
  },


  /**
   * toggleShow
   *
   * @param  {String} selector
   * @return {void}
   */
  toggleShow: function toggleShow(selector) {
    var elm = _base2.default.getElement(selector);
    if (elm.classList.contains(ClassName.HIDE)) {
      this.show(selector);
    } else {
      this.hide(selector);
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = undefined;

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

var _filter2 = __webpack_require__(3);

var _filter3 = _interopRequireDefault(_filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterMethod = {
  filter: function filter(selector, _filter) {
    var htmlMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var f = new _filter3.default(selector, _filter, { htmlMode: htmlMode });
    f.filtering();
    return f.getHit();
  }
};

var ElementUtil = Object.assign(_base2.default, _util2.default, filterMethod);

exports.default = ElementUtil;
exports.Filter = _filter3.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function () {
  function Filter(selector, filter) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Filter);

    this._elms = _base2.default.getElements(selector);
    this._filter = filter;
    this._hit = 0;
    this.options = Object.assign(this.getDefaultOptions(), options);
  }

  // public

  _createClass(Filter, [{
    key: 'getDefaultOptions',
    value: function getDefaultOptions() {
      return {
        htmlMode: false
      };
    }
  }, {
    key: 'setFilter',
    value: function setFilter(filter) {
      this._filter = filter;
      return this;
    }
  }, {
    key: 'getHit',
    value: function getHit() {
      return this._hit;
    }
  }, {
    key: 'filtering',
    value: function filtering() {
      if (this._elmsIsTable()) {
        this._filteringTable();
      } else {
        this._filteringNodes(this._elms);
      }
    }

    // private

  }, {
    key: '_filteringTable',
    value: function _filteringTable() {
      var table = this._elms[0];
      var tableRows = _base2.default.getElements('tbody tr', table);

      this._filteringNodes(tableRows);
    }
  }, {
    key: '_filteringNodes',
    value: function _filteringNodes(nodes) {
      this._hit = 0;
      var filter = this._filter.toUpperCase();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var node = _step.value;

          var content = this.options.htmlMode ? node.innerHTML : node.textContent;

          if (content.toUpperCase().indexOf(filter) === -1) {
            _util2.default.hide(node);
          } else {
            _util2.default.show(node);
            this._hit++;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: '_elmsIsTable',
    value: function _elmsIsTable() {
      return this._elms.length === 1 && this._elms[0].tagName === 'TABLE';
    }
  }]);

  return Filter;
}();

exports.default = Filter;
;

/***/ })
/******/ ]);
});