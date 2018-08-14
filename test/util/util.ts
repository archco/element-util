interface ElementOptions {
  id?: string;
  className?: string;
  text?: string;
  html?: string;
  attr?: {
    [index: string]: string;
  };
  dataset?: {
    [index: string]: string;
  };
}

export function makeElement(
  tag: string,
  {id, className, text, html, attr = {}, dataset = {}}: ElementOptions = {},
): HTMLElement {
  const elm = document.createElement(tag);

  // id
  if (id) elm.setAttribute('id', id);

  // class
  if (className) className.split(' ').forEach(c => elm.classList.add(c));

  // text or html
  if (html) elm.innerHTML = html;
  if (text) elm.textContent = text;

  // dataset
  Object.keys(dataset).forEach(k => elm.dataset[k] = dataset[k]);

  // attr
  Object.keys(attr).forEach(k => elm.setAttribute(k, attr[k]));

  return elm;
}

export function makeElements(count: number, tag: string, options: ElementOptions = {}): HTMLElement[] {
  const elms: HTMLElement[] = [];
  for (let i = 0; i < count; i++) {
    elms.push(makeElement(tag, options));
  }
  return elms;
}

export function appendChain(...elms: HTMLElement[]): void {
  elms.forEach((el, i, arr) => {
    if (i !== arr.length - 1) {
      el.appendChild(arr[i + 1]);
    }
  });
}

export function toArray(collection: HTMLCollection): Element[] {
  return [].slice.call(collection);
}

export function makeTableRow(...cols: HTMLElement[]): HTMLElement {
  const tr = makeElement('tr');
  cols.forEach(el => tr.appendChild(el));
  return tr;
}
