import {
  addClass,
  addListener,
  addOuterListener,
  appendHiddenInput,
  hide,
  makeHiddenInput,
  removeClass,
  show,
  toggleClass,
  toggleShow,
  wrap,
  wrapAll,
} from '../src/methods/util';
import { makeElement, makeElements, toArray } from './util/util';

describe('#wrap', () => {
  const div = makeElement('div', {id: 'wrap'});
  const spans = makeElements(5, 'span');
  spans.forEach(span => div.appendChild(span));
  document.body.appendChild(div);

  it('wrapping elements each one.', () => {
    // before
    expect(div.children[0].tagName).toEqual('SPAN');
    wrap('#wrap > span', 'wrapper', 'div');
    // after
    const children = toArray(div.children) as HTMLElement[];
    expect(children.every(el => el.tagName === 'DIV')).toBeTruthy();
    expect(children.every(el => el.classList.contains('wrapper'))).toBeTruthy();
  });
});

describe('#wrapAll', () => {
  it('wrapping all elements into the one wrapper.', () => {
    const div = makeElement('div', {id: 'wrapAll'});
    const spans = makeElements(5, 'span');
    spans.forEach(span => div.appendChild(span));
    document.body.appendChild(div);
    // before
    expect(div.children[0].tagName).toEqual('SPAN');
    wrapAll('#wrapAll > span', 'wrapper', 'div');
    // after
    expect(div.children.length).toEqual(1);
    expect(div.children[0].children.length).toEqual(5);
    expect(div.children[0].tagName).toEqual('DIV');
    expect(div.children[0].classList.contains('wrapper')).toBeTruthy();
  });

  it('works also when target elements are position between siblings.', () => {
    const div = makeElement('div', {id: 'wrapAll2'});
    const spans = makeElements(6, 'span');
    spans.forEach((span, i) => {
      if (i % 2 === 1) {
        span.classList.add('target');
      }
      div.appendChild(span);
    });
    document.body.appendChild(div);
    // before -> [1, 2, 3, 4, 5, 6]
    expect(div.children.length).toEqual(6);
    expect(div.children[1].classList.contains('target')).toBeTruthy();
    wrapAll('#wrapAll2 > span.target', 'wrapper', 'div');
    // after -> [1, [2, 4, 6], 3, 5]
    expect(div.children.length).toEqual(4);
    expect(div.children[1].classList.contains('wrapper')).toBeTruthy();
    expect(div.children[1].children.length).toEqual(3);
  });
});

describe('#addClass', () => {
  it('add class to element.', () => {
    const div = makeElement('div');
    addClass(div, 'test');
    expect(div.classList.contains('test')).toBeTruthy();
  });

  it('can add multiple classes.', () => {
    const div = makeElement('div');
    addClass(div, 'first second');
    expect(div.classList.contains('first')).toBeTruthy();
    expect(div.classList.contains('second')).toBeTruthy();
  });
});

describe('#removeClass', () => {
  it('remove class from element.', () => {
    const div = makeElement('div', {className: 'test'});
    expect(div.classList.contains('test')).toBeTruthy();
    removeClass(div, 'test');
    expect(div.classList.contains('test')).toBeFalsy();
  });

  it('can remove multiple classes.', () => {
    const div = makeElement('div', {className: 'first second third'});
    expect(div.classList.contains('first')).toBeTruthy();
    expect(div.classList.contains('second')).toBeTruthy();
    expect(div.classList.contains('third')).toBeTruthy();
    removeClass(div, 'first third');
    expect(div.classList.contains('first')).toBeFalsy();
    expect(div.classList.contains('second')).toBeTruthy();
    expect(div.classList.contains('third')).toBeFalsy();
  });
});

describe('#toggleClass', () => {
  it('toggle class on element.', () => {
    const div = makeElement('div');
    toggleClass(div, 'toggle');
    expect(div.classList.contains('toggle')).toBeTruthy();
    toggleClass(div, 'toggle');
    expect(div.classList.contains('toggle')).toBeFalsy();
  });

  it('can toggle multiple classes.', () => {
    const div = makeElement('div', {className: 'first'});
    toggleClass(div, 'first second');
    expect(div.classList.contains('first')).toBeFalsy();
    expect(div.classList.contains('second')).toBeTruthy();
    toggleClass(div, 'first second');
    expect(div.classList.contains('first')).toBeTruthy();
    expect(div.classList.contains('second')).toBeFalsy();
  });
});

describe('#toggleShow', () => {
  const div = makeElement('div');

  it('hide', () => {
    hide(div);
    expect(div.style.display).toEqual('none');
  });

  it('show', () => {
    show(div);
    expect(div.style.display).toEqual('');
  });

  it('toggle', () => {
    toggleShow(div);
    expect(div.style.display).toEqual('none');
    toggleShow(div);
    expect(div.style.display).toEqual('');
  });
});

describe('#makeHiddenInput', () => {
  it('returns input:hidden element.', () => {
    const input = makeHiddenInput('name', 'value');
    expect(input instanceof HTMLInputElement).toBeTruthy();
    expect(input.type).toEqual('hidden');
    expect(input.name).toEqual('name');
    expect(input.value).toEqual('value');
  });
});

describe('#appendHiddenInput', () => {
  const form = makeElement('form');

  it("append input:hidden to target's child node.", () => {
    appendHiddenInput(form, 'secret', 'value');
    const input: HTMLInputElement = form.querySelector('input[type=hidden]');
    expect(input instanceof HTMLInputElement).toBeTruthy();
    expect(input.value).toEqual('value');
  });

  it('if input name exists already, then will replace it.', () => {
    appendHiddenInput(form, 'secret', 'other-value');
    const input: HTMLInputElement = form.querySelector('input[type=hidden]');
    expect(input instanceof HTMLInputElement).toBeTruthy();
    expect(input.value).toEqual('other-value');
  });
});

describe('#addOuterListener', () => {
  it('should be works.', () => {
    const box = makeElement('div');
    const other = makeElement('div', { className: 'other' });
    const target = makeElement('div', { className: 'target' });
    [other, target].forEach(elm => box.appendChild(elm));
    const listener = jest.fn();

    addOuterListener(box, target, 'click', listener);

    other.click();
    expect(listener.mock.calls.length).toBe(1);
    target.click();
    expect(listener.mock.calls.length).toBe(1);
  });

  it('also works in using selector.', () => {
    const box = makeElement('div', { id: 'outer' });
    const other = makeElement('div', { className: 'outer__other' });
    const target = makeElement('div', { className: 'outer__target' });
    [other, target].forEach(elm => box.appendChild(elm));
    document.body.appendChild(box);
    const listener = jest.fn();

    addOuterListener('#outer', '.outer__target', 'click', listener);

    const other1 = document.querySelector('.outer__other') as HTMLElement;
    other1.click();
    expect(listener.mock.calls.length).toBe(1);
    const target1 = document.querySelector('.outer__target') as HTMLElement;
    target1.click();
    expect(listener.mock.calls.length).toBe(1);
  });
});

describe('#addListener', () => {
  const div = makeElement('div', { id: 'addListener' });
  const buttons = makeElements(3, 'button');
  buttons.forEach(b => div.appendChild(b));
  document.documentElement.appendChild(div);

  it('should works.', () => {
    const mockFn = jest.fn();
    addListener('#addListener button', 'click', mockFn);
    buttons[0].click();
    expect(mockFn.mock.calls.length).toBe(1);
    buttons[1].click();
    expect(mockFn.mock.calls.length).toBe(2);
    buttons[2].click();
    expect(mockFn.mock.calls.length).toBe(3);
  });
});
