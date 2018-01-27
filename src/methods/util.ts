import * as baseMethods from './base';

type ElementTarget = baseMethods.ElementTarget;

/**
 * Add event listener on every selected elements.
 * @param  selector   querySelector
 * @param  type       event-type
 * @param  listener   listener
 * @param  useCapture default is false
 * @return            number of affected
 */
export function addListener(
  selector: ElementTarget,
  type: string,
  listener: EventListener,
  useCapture: boolean = false,
): number {

  const elms: NodeList = baseMethods.getElements(selector);
  for (const elm of elms) {
    elm.addEventListener(type, listener, useCapture);
  }
  return elms.length;
}

/**
 * Wrapping each element.
 * @param selector  querySelector
 * @param className wrapper's class name.
 * @param tagName   wrapper's tag name, default is 'div'.
 */
export function wrap(
  selector: ElementTarget,
  className: string,
  tagName: string = 'div',
): void {

  const elms = baseMethods.getElements(selector);
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
 * Wrapping all elements inside a one wrapper.
 * @param selector  querySelector
 * @param className wrapper's class name.
 * @param tagName   wrapper's tag name, default is 'div'.
 */
export function wrapAll(
  selector: ElementTarget,
  className: string,
  tagName: string = 'div',
): void {

  const elms = baseMethods.getElements(selector);
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
 * Add confirm message listener when 'submit' event.
 * @param selector querySelector, form element probably.
 * @param message  confirm message.
 */
export function submitConfirm(selector: ElementTarget, message: string = 'Are you confirm?'): void {
  addListener(selector, 'submit', e => {
    if (!confirm(message)) {
      e.preventDefault();
    }
  }, true); // this use capture.
}

/**
 * Add class to element.
 * @param selector  querySelector
 * @param className If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
export function addClass(selector: ElementTarget, className: string): void {
  const elm = baseMethods.getElement(selector);
  const classes = className.split(' ');
  classes.forEach(c => elm.classList.add(c));
}

/**
 * Remove class from element.
 * @param selector  querySelector
 * @param className If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
export function removeClass(selector: ElementTarget, className: string): void {
  const elm = baseMethods.getElement(selector);
  const classes = className.split(' ');
  classes.forEach(c => elm.classList.remove(c));
}

/**
 * Toggling class to element.
 * @param selector  querySelector
 * @param className If you want give multiple classes, separates classes by whitespace. e.g. 'first second'
 */
export function toggleClass(selector: ElementTarget, className: string): void {
  const elm = baseMethods.getElement(selector);
  const classes = className.split(' ');
  classes.forEach(c => elm.classList.toggle(c));
}

/**
 * Hide element. It will set element's display to 'none'.
 * @param selector querySelector
 */
export function hide(selector: ElementTarget): void {
  const elm = baseMethods.getElement(selector) as HTMLElement;
  elm.style.display = 'none';
}

/**
 * Show element. It will just remove 'display=none;'.
 * @param selector querySelector
 */
export function show(selector: ElementTarget): void {
  const elm = baseMethods.getElement(selector) as HTMLElement;
  if (elm.style.display && elm.style.display === 'none') {
    elm.style.display = '';
  }
}

/**
 * Toggling show/hide element.
 * @param selector querySelector
 */
export function toggleShow(selector: ElementTarget): void {
  const elm = baseMethods.getElement(selector) as HTMLElement;
  elm.style.display !== 'none' ? hide(elm) : show(elm);
}

/**
 * Make a hidden input.
 * @param  name  name attribute.
 * @param  value value attribute.
 * @return
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
 * @param target querySelector
 * @param name   name attribute.
 * @param value  value attribute.
 */
export function appendHiddenInput(target: ElementTarget, name: string, value: string): void {
  const targetElm = baseMethods.getElement(target);

  // Remove if already has input.
  baseMethods.removeElements(`input[name="${name}"]`, target);
  targetElm.appendChild(makeHiddenInput(name, value));
}
