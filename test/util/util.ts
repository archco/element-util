interface ElementOptions {
  id?: string;
  className?: string;
  dataset?: object;
  text?: string;
}

export function makeElement(tag: string, {id, className, dataset, text}: ElementOptions = {}): HTMLElement {
  const elm = document.createElement(tag);
  if (id) {
    elm.setAttribute('id', id);
  }
  if (className) {
    className.split(' ').forEach(c => elm.classList.add(c));
  }
  if (dataset) {
    for (const key of Object.keys(dataset)) {
      elm.dataset[key] = dataset[key];
    }
  }
  if (text) {
    elm.textContent = text;
  }
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
