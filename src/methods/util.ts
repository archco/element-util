import {
  ElementTarget,
  getElement,
  getElementsAsArray,
  removeElements,
} from './base';

/**
 * Add event listener for each item.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} type event-type
 * @param {EventListener} listener
 * @param {boolean} [useCapture=false]
 * @returns {number} the number of affected.
 */
export function addListener(
  selector: ElementTarget,
  type: string,
  listener: EventListener,
  useCapture: boolean = false,
): number {

  const elms = getElementsAsArray(selector);
  elms.forEach(elm => elm.addEventListener(type, listener, useCapture));
  return elms.length;
}

/**
 * Add listener for the event that occurs outer of the element.
 *
 * @export
 * @param {(Window|ElementTarget)} base the event target.
 * @param {ElementTarget} target the target element that will be ignored an event.
 * @param {string} type event type.
 * @param {EventListener} listener
 */
export function addOuterListener(
  base: Window|ElementTarget,
  target: ElementTarget,
  type: string,
  listener: EventListener,
): void {
  const root = base === window ? window : getElement(base as ElementTarget);
  const targetElm = getElement(target) as HTMLElement;
  root.addEventListener(type, event => {
    const eventTarget = event.target as Element;
    if (targetElm !== eventTarget
      && !targetElm.contains(eventTarget)) {
      listener(event);
    }
  });
}

/**
 * Wrap for each element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className wrapper's class name.
 * @param {string} [tagName='div'] wrapper's tag name.
 */
export function wrap(
  selector: ElementTarget,
  className: string,
  tagName: string = 'div',
): void {

  const elms = getElementsAsArray(selector);
  for (const elm of elms) {
    const parent = elm.parentNode;
    const sibling = elm.nextSibling;
    const div = document.createElement(tagName);
    addClass(div, className);
    div.appendChild(elm);

    if (sibling) {
      parent.insertBefore(div, sibling);
    } else {
      parent.appendChild(div);
    }
  }
}

/**
 * Wrap all elements to inside a one wrapper.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className wrapper's class name.
 * @param {string} [tagName='div'] wrapper's tag name.
 */
export function wrapAll(
  selector: ElementTarget,
  className: string,
  tagName: string = 'div',
): void {

  const elms = getElementsAsArray(selector);
  const parent = elms[0].parentNode;
  const preSibling = elms[0].previousSibling;
  const div = document.createElement(tagName);
  addClass(div, className);

  for (const elm of elms) {
    div.appendChild(elm);
  }

  if (preSibling) {
    parent.insertBefore(div, preSibling.nextSibling);
  } else {
    parent.appendChild(div);
  }
}

/**
 * Add confirm on the 'submit' event.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} [message='Are you confirm?'] confirm message.
 */
export function submitConfirm(selector: ElementTarget, message: string = 'Are you confirm?'): void {
  addListener(selector, 'submit', e => {
    if (!confirm(message)) {
      e.preventDefault();
    }
  }, true); // this use capture.
}

/**
 * Add classes to element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className
 */
export function addClass(selector: ElementTarget, className: string): void {
  const elm = getElement(selector);
  const classes = className.split(' ');
  classes.forEach(c => elm.classList.add(c));
}

/**
 * Remove classes from element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className
 */
export function removeClass(selector: ElementTarget, className: string): void {
  const elm = getElement(selector);
  const classes = className.split(' ');
  classes.forEach(c => elm.classList.remove(c));
}

/**
 * Toggling classes to element.
 *
 * @export
 * @param {ElementTarget} selector
 * @param {string} className
 */
export function toggleClass(selector: ElementTarget, className: string): void {
  const elm = getElement(selector);
  const classes = className.split(' ');
  classes.forEach(c => elm.classList.toggle(c));
}

/**
 * Hide element. It will set value of style.display to 'none'.
 *
 * @export
 * @param {ElementTarget} selector
 */
export function hide(selector: ElementTarget): void {
  const elm = getElement(selector) as HTMLElement;
  elm.style.display = 'none';
}

/**
 * Show element. It will just remove 'display: none;'.
 *
 * @export
 * @param {ElementTarget} selector
 */
export function show(selector: ElementTarget): void {
  const elm = getElement(selector) as HTMLElement;
  if (elm.style.display && elm.style.display === 'none') {
    elm.style.display = '';
  }
}

/**
 * Toggling show/hide element.
 *
 * @export
 * @param {ElementTarget} selector
 */
export function toggleShow(selector: ElementTarget): void {
  const elm = getElement(selector) as HTMLElement;
  elm.style.display !== 'none' ? hide(elm) : show(elm);
}

/**
 * Make a hidden input.
 *
 * @export
 * @param {string} name name attribute.
 * @param {string} value value attribute.
 * @returns {HTMLInputElement}
 */
export function makeHiddenInput(name: string, value: string): HTMLInputElement {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = name;
  input.value = value;
  return input;
}

/**
 * Makes hidden input, and append to target element. If input[name=".."] already exists, overwrite it.
 *
 * @export
 * @param {ElementTarget} target
 * @param {string} name name attribute.
 * @param {string} value value attribute.
 */
export function appendHiddenInput(target: ElementTarget, name: string, value: string): void {
  const targetElm = getElement(target);

  // Remove if already has input.
  removeElements(`input[name="${name}"]`, target);
  targetElm.appendChild(makeHiddenInput(name, value));
}
