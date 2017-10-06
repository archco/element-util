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
   * @param  {Element} element
   * @return {NodeList}
   */
  toNodeList(element) {
    element.setAttribute('toNodeList', '');
    let nodelist = document.querySelectorAll('[toNodeList]');
    element.removeAttribute('toNodeList');
    return nodelist;
  },

  /**
   * Converting a NodeList to an Array.
   *
   * @param  {NodeList} nodelist
   * @return {Array}
   */
  nodeListToArray(nodelist) {
    return Array.prototype.slice.call(nodelist);
  },

  /**
   * find ancestor by selector.
   *
   * @param  {Element|String} element or querySelector
   * @param  {String}  selector
   * @return {Element|null}
   */
  findAncestor(element, selector) {
    element = this.getElement(element);
    do {
      if (element == this.getElement('html')) return null;
      element = element.parentElement;
    } while (!element.matches(selector));
    return element;
  },

  _resolveBase(base) {
    base = base === document ? base : this.getElement(base);
    if (!base) throw new ReferenceError("'base' element is not exist!");
    return base;
  },
};
