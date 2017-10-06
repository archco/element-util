import baseMethods from './base';

export default {
  /**
   * add event listener on selector.
   *
   * @param {String}   selector
   * @param {String}   type  event type
   * @param {Function} listener
   * @param {Boolean}  [ useCapture = false ]
   */
  addListener(selector, type, listener, useCapture = false) {
    let elements = baseMethods.getElements(selector);
    if (!elements.length) return null;

    for (let element of elements) {
      element.addEventListener(type, listener, useCapture);
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
  wrap(selector, className, tagName = 'DIV') {
    let elements = baseMethods.getElements(selector);

    for (let elm of elements) {
      let parent = elm.parentNode;
      let sibling = elm.nextSibling;
      let div = document.createElement(tagName);
      div.classList.add(className);
      div.appendChild(elm);

      if (sibling) {
        parent.insertBefore(div, sibling);
      } else {
        parent.appendChild(div);
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
  wrapAll(selector, className, tagName = 'DIV') {
    let elements = baseMethods.getElements(selector);
    let parent = elements[0].parentNode;
    let sibling = elements[0].nextSibling;
    let div = document.createElement(tagName);
    div.classList.add(className);

    elements.forEach(elm => div.appendChild(elm));

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
  submitConfirm(selector, message = 'Are you confirm?') {
    this.addListener(selector, 'submit', event => {
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
  addClass(selector, className) {
    let elm = baseMethods.getElement(selector);
    elm.classList.add(className);
  },

  /**
   * removeClass
   *
   * @param  {String} selector
   * @param  {String} className
   * @return {void}
   */
  removeClass(selector, className) {
    let elm = baseMethods.getElement(selector);
    elm.classList.remove(className);
  },

  /**
   * toggleClass
   *
   * @param  {String} selector
   * @param  {String} className
   * @return {void}
   */
  toggleClass(selector, className) {
    let elm = baseMethods.getElement(selector);
    elm.classList.toggle(className);
  },

  /**
   * hide element
   *
   * @param  {String} selector
   * @return {void}
   */
  hide(selector) {
    let elm = baseMethods.getElement(selector);
    elm.style.display = 'none';
  },

  /**
   * show element
   *
   * @param  {String} selector
   * @return {void}
   */
  show(selector) {
    let elm = baseMethods.getElement(selector);
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
  toggleShow(selector) {
    let elm = baseMethods.getElement(selector);
    if (elm.classList.contains(ClassName.HIDE)) {
      this.show(selector);
    } else {
      this.hide(selector);
    }
  },
};
