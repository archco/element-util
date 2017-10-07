export default {
  /**
   * getElement
   *
   * @param  {String|Element|NodeList} selector
   * @param  {String|Element} [ base = document ]
   * @return {Element}
   */
  getElement(selector, base = document) {
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
  getElements(selector, base = document) {
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
  removeElements(selector, base = document) {
    base = this._resolveBase(base);

    let elms = this.getElements(selector, base);
    for (let elm of elms) {
      elm.parentNode.removeChild(elm);
    }

    return elms.length;
  },

  /**
   * Element to NodeList
   *
   * @param  {Element|String} elm
   * @return {NodeList}
   */
  toNodeList(elm) {
    elm = this.getElement(elm);
    elm.setAttribute('toNodeList', '');
    let nodelist = document.querySelectorAll('[toNodeList]');
    elm.removeAttribute('toNodeList');
    return nodelist;
  },

  /**
   * Convert NodeList to Array.
   *
   * @param  {NodeList|String|Array} nodelist
   * @return {Array}
   */
  nodeListToArray(nodelist) {
    if (Array.isArray(nodelist)) return nodelist;
    nodelist = this.getElements(nodelist);
    return Array.prototype.slice.call(nodelist);
  },

  /**
   * find ancestor by selector.
   *
   * @param  {Element|String} elm or querySelector
   * @param  {String}  selector
   * @return {Element|null}
   */
  findAncestor(elm, selector) {
    elm = this.getElement(elm);
    do {
      if (elm == this.getElement('html')) return null;
      elm = elm.parentElement;
    } while (!elm.matches(selector));
    return elm;
  },

  _resolveBase(base) {
    base = base === document ? base : this.getElement(base);
    if (!base) throw new ReferenceError("'base' element is not exist!");
    return base;
  },
};
