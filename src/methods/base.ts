/** The target that can converted to Element. */
export type ElementTarget = string|Element|NodeList;

function resolveBase(base: Document|ElementTarget): Document|Element {
  base = base === document ? base : getElement(base as ElementTarget);
  if (!base) {
    throw new ReferenceError("'base' element is not exist!");
  }
  return base;
}

/**
 * Polyfill for Element.matches
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#polyfill
 */
function polyfillForMatches(): void {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
  }
}

/**
 * Get a single element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default is Document.
 * @returns {Element}
 */
export function getElement(selector: ElementTarget, base: Document|ElementTarget = document): Element {
  base = resolveBase(base);
  if (typeof selector === 'string') {
    return base.querySelector(selector);
  } else if (selector instanceof Element) {
    return selector;
  } else if (selector instanceof NodeList) {
    return selector[0] as Element;
  } else {
    throw new TypeError('selector is must be String or Element');
  }
}

/**
 * Get elements as NodeList.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default is Document.
 * @returns {NodeList}
 */
export function getElements(selector: ElementTarget, base: Document|ElementTarget = document): NodeList {
  base = resolveBase(base);

  if (typeof selector === 'string') {
    return base.querySelectorAll(selector);
  } else if (selector instanceof Element) {
    return toNodeList(selector);
  } else if (selector instanceof NodeList) {
    return selector;
  } else {
    throw new TypeError('selector is must be String or NodeList');
  }
}

/**
 * Get elements as array of HTMLElements.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default is Document.
 * @returns {HTMLElement[]}
 */
export function getElementsAsArray(selector: ElementTarget, base: Document|ElementTarget = document): HTMLElement[] {
  const nodeList = getElements(selector, base);
  return nodeListToArray(nodeList) as HTMLElement[];
}

/**
 * Remove elements.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default is Document.
 * @returns {number} The number of removed.
 */
export function removeElements(selector: ElementTarget, base: Document|ElementTarget = document): number {
  base = resolveBase(base);
  const elms = getElementsAsArray(selector, base);
  elms.forEach(elm => elm.parentElement.removeChild(elm));
  return elms.length;
}

/**
 * Converts a single element to NodeList.
 *
 * @export
 * @param {(Element|string)} elm
 * @returns {NodeList}
 */
export function toNodeList(elm: Element|string): NodeList {
  elm = getElement(elm);
  elm.setAttribute('toNodeList', '');
  const nodeList = document.querySelectorAll('[toNodeList]');
  elm.removeAttribute('toNodeList');
  return nodeList;
}

/**
 * Converts NodeList to Array.
 *
 * @export
 * @param {(NodeList|any[]|string)} list
 * @returns {any[]}
 */
export function nodeListToArray(list: NodeList|any[]|string): any[] {
  if (Array.isArray(list)) {
    return list;
  } else {
    list = getElements(list);
    return [].slice.call(list);
  }
}

/**
 * Find ancestor element.
 *
 * @export
 * @param {ElementTarget} self
 * @param {ElementTarget} ancestor
 * @returns {(Element|null)}
 */
export function findAncestor(self: ElementTarget, ancestor: ElementTarget): Element|null {
  polyfillForMatches();
  self = getElement(self);
  const isMatch = (elm: Element): boolean => ancestor instanceof Element
    ? elm === ancestor
    : elm.matches(ancestor as string);

  do {
    if (self == null || self.parentElement == null) {
      return null;
    }

    self = self.parentElement;
  } while (!isMatch(self));
  return self;
}
