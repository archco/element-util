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
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default: `document`
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
  }
}

/**
 * Get elements as NodeList.
 *
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default: `document`
 * @returns {NodeList}
 */
export function getElements(selector: ElementTarget, base: Document|ElementTarget = document): NodeList {
  base = resolveBase(base);
  if (typeof selector === 'string') {
    return base.querySelectorAll(selector);
  } else if (selector instanceof Element) {
    return toNodeList(selector, base);
  } else if (selector instanceof NodeList) {
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
export function getElementsAsArray(selector: ElementTarget, base: Document|ElementTarget = document): HTMLElement[] {
  const nodeList = getElements(selector, base);
  return nodeListToArray(nodeList) as HTMLElement[];
}

/**
 * Remove elements.
 *
 * @param {ElementTarget} selector
 * @param {(Document|ElementTarget)} [base=document] base element. default: `document`
 * @returns {number} The number of removed.
 */
export function removeElements(selector: ElementTarget, base: Document|ElementTarget = document): number {
  base = resolveBase(base);
  const elms = getElementsAsArray(selector, base);
  elms.forEach(elm => elm.parentElement.removeChild(elm));
  return elms.length;
}

/**
 * Convert a single element to NodeList.
 *
 * @param {(Element|string)} elm
 * @param {(Document|ElementTarget)} [base=document] base element. default: `document`
 * @returns {NodeList}
 */
export function toNodeList(elm: Element|string, base: Document|ElementTarget = document): NodeList {
  base = resolveBase(base);
  elm = getElement(elm);
  elm.setAttribute('toNodeList', '');
  const nodeList = base.querySelectorAll('[toNodeList]');
  elm.removeAttribute('toNodeList');
  return nodeList;
}

/**
 * Converts NodeList to Array.
 *
 * @param {(NodeList|any[]|string)} list
 * @returns {any[]}
 */
export function nodeListToArray(list: NodeList|any[]|string): any[] {
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
