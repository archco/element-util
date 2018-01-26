import * as baseMethods from './base';

type ElementTarget = baseMethods.ElementTarget;

export function addListener(
  selector: ElementTarget,
  type: string,
  listener: EventListener,
  useCapture: boolean = false,
): number|null {

  const elms: NodeList = baseMethods.getElements(selector);
  if (!elms.length) {
    return null;
  }

  for (const elm of elms) {
    elm.addEventListener(type, listener, useCapture);
  }

  return elms.length;
}

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
    div.classList.add(className);
    div.appendChild(elm);

    if (sibling) {
      parent.insertBefore(div, sibling);
    } else {
      parent.appendChild(div);
    }
  }
}

export function wrapAll(
  selector: ElementTarget,
  className: string,
  tagName: string = 'div',
): void {

  const elms = baseMethods.getElements(selector);
  const parent = elms[0].parentNode;
  const preSibling = elms[0].previousSibling;
  const div = document.createElement(tagName);
  div.classList.add(className);

  for (const elm of elms) {
    div.appendChild(elm);
  }

  if (preSibling) {
    parent.insertBefore(div, preSibling.nextSibling);
  } else {
    parent.appendChild(div);
  }
}

export function submitConfirm(selector: ElementTarget, message: string = 'Are you confirm?'): void {
  addListener(selector, 'submit', e => {
    if (!confirm(message)) {
      e.preventDefault();
    }
  }, true); // this use capture.
}

export function addClass(selector: ElementTarget, className: string): void {
  const elm = baseMethods.getElement(selector);
  elm.classList.add(className);
}

export function removeClass(selector: ElementTarget, className: string): void {
  const elm = baseMethods.getElement(selector);
  elm.classList.remove(className);
}

export function toggleClass(selector: ElementTarget, className: string): void {
  const elm = baseMethods.getElement(selector);
  elm.classList.toggle(className);
}

export function hide(selector: ElementTarget): void {
  const elm = baseMethods.getElement(selector) as HTMLElement;
  elm.style.display = 'none';
}

export function show(selector: ElementTarget): void {
  const elm = baseMethods.getElement(selector) as HTMLElement;
  if (elm.style.display && elm.style.display === 'none') {
    elm.style.display = '';
  }
}

export function toggleShow(selector: ElementTarget): void {
  const elm = baseMethods.getElement(selector) as HTMLElement;
  elm.style.display !== 'none' ? hide(elm) : show(elm);
}

export function makeHiddenInput(name: string, value: string): HTMLInputElement {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = name;
  input.value = value;
  return input;
}

export function appendHiddenInput(target: ElementTarget, name: string, value: string): void {
  const targetElm = baseMethods.getElement(target);

  // Remove if already has input.
  baseMethods.removeElements(`input[name="${name}"]`, target);
  targetElm.appendChild(makeHiddenInput(name, value));
}
