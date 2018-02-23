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
 * Get element.
 * @param  selector querySelector
 * @param  base     base element. default is Document.
 * @return
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
 * @param  selector querySelector
 * @param  base     base element. default is Document.
 * @return
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
 * Remove elements.
 * @param  selector querySelector
 * @param  base     base element. default is Document.
 * @return          number of removed.
 */
export function removeElements(selector: ElementTarget, base: Document|ElementTarget = document): number {
  base = resolveBase(base);
  const elms = getElements(selector, base);
  for (const elm of elms) {
    elm.parentNode.removeChild(elm);
  }
  return elms.length;
}

/**
 * Convert a single element to NodeList.
 * @param  elm
 * @return
 */
export function toNodeList(elm: Element|string): NodeList {
  elm = getElement(elm);
  elm.setAttribute('toNodeList', '');
  const nodeList = document.querySelectorAll('[toNodeList]');
  elm.removeAttribute('toNodeList');
  return nodeList;
}

/**
 * Convert NodeList to Array.
 * @param  list
 * @return
 */
export function nodeListToArray(list: NodeList|any[]|string): any[] {
  if (Array.isArray(list)) {
    return list;
  } else {
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
