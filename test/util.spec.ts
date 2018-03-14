import * as utilMethods from '../src/methods/util';
import { makeElement, makeElements, toArray } from './util/util';

describe('#UtilMethods', () => {
  describe('#wrap', () => {
    const div = makeElement('div', {id: 'wrap'});
    const spans = makeElements(5, 'span');
    spans.forEach(span => div.appendChild(span));
    document.body.appendChild(div);

    it('wrapping elements each one.', () => {
      // before
      expect(div.children[0].tagName).toEqual('SPAN');
      utilMethods.wrap('#wrap > span', 'wrapper', 'div');
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
      utilMethods.wrapAll('#wrapAll > span', 'wrapper', 'div');
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
      utilMethods.wrapAll('#wrapAll2 > span.target', 'wrapper', 'div');
      // after -> [1, [2, 4, 6], 3, 5]
      expect(div.children.length).toEqual(4);
      expect(div.children[1].classList.contains('wrapper')).toBeTruthy();
      expect(div.children[1].children.length).toEqual(3);
    });
  });

  describe('#addClass', () => {
    it('add class to element.', () => {
      const div = makeElement('div');
      utilMethods.addClass(div, 'test');
      expect(div.classList.contains('test')).toBeTruthy();
    });

    it('can add multiple classes.', () => {
      const div = makeElement('div');
      utilMethods.addClass(div, 'first second');
      expect(div.classList.contains('first')).toBeTruthy();
      expect(div.classList.contains('second')).toBeTruthy();
    });
  });

  describe('#removeClass', () => {
    it('remove class from element.', () => {
      const div = makeElement('div', {className: 'test'});
      expect(div.classList.contains('test')).toBeTruthy();
      utilMethods.removeClass(div, 'test');
      expect(div.classList.contains('test')).toBeFalsy();
    });

    it('can remove multiple classes.', () => {
      const div = makeElement('div', {className: 'first second third'});
      expect(div.classList.contains('first')).toBeTruthy();
      expect(div.classList.contains('second')).toBeTruthy();
      expect(div.classList.contains('third')).toBeTruthy();
      utilMethods.removeClass(div, 'first third');
      expect(div.classList.contains('first')).toBeFalsy();
      expect(div.classList.contains('second')).toBeTruthy();
      expect(div.classList.contains('third')).toBeFalsy();
    });
  });

  describe('#toggleClass', () => {
    it('toggle class on element.', () => {
      const div = makeElement('div');
      utilMethods.toggleClass(div, 'toggle');
      expect(div.classList.contains('toggle')).toBeTruthy();
      utilMethods.toggleClass(div, 'toggle');
      expect(div.classList.contains('toggle')).toBeFalsy();
    });

    it('can toggle multiple classes.', () => {
      const div = makeElement('div', {className: 'first'});
      utilMethods.toggleClass(div, 'first second');
      expect(div.classList.contains('first')).toBeFalsy();
      expect(div.classList.contains('second')).toBeTruthy();
      utilMethods.toggleClass(div, 'first second');
      expect(div.classList.contains('first')).toBeTruthy();
      expect(div.classList.contains('second')).toBeFalsy();
    });
  });

  describe('#toggleShow', () => {
    const div = makeElement('div');

    it('hide', () => {
      utilMethods.hide(div);
      expect(div.style.display).toEqual('none');
    });

    it('show', () => {
      utilMethods.show(div);
      expect(div.style.display).toEqual('');
    });

    it('toggle', () => {
      utilMethods.toggleShow(div);
      expect(div.style.display).toEqual('none');
      utilMethods.toggleShow(div);
      expect(div.style.display).toEqual('');
    });
  });

  describe('#makeHiddenInput', () => {
    it('returns input:hidden element.', () => {
      const input = utilMethods.makeHiddenInput('name', 'value');
      expect(input instanceof HTMLInputElement).toBeTruthy();
      expect(input.type).toEqual('hidden');
      expect(input.name).toEqual('name');
      expect(input.value).toEqual('value');
    });
  });

  describe('#appendHiddenInput', () => {
    const form = makeElement('form');

    it("append input:hidden to target's child node.", () => {
      utilMethods.appendHiddenInput(form, 'secret', 'value');
      const input: HTMLInputElement = form.querySelector('input[type=hidden]');
      expect(input instanceof HTMLInputElement).toBeTruthy();
      expect(input.value).toEqual('value');
    });

    it('if input name exists already, then will replace it.', () => {
      utilMethods.appendHiddenInput(form, 'secret', 'other-value');
      const input: HTMLInputElement = form.querySelector('input[type=hidden]');
      expect(input instanceof HTMLInputElement).toBeTruthy();
      expect(input.value).toEqual('other-value');
    });
  });
});
