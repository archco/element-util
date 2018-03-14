import * as baseMethods from '../src/methods/base';
import {
  appendChain,
  makeElement,
  makeElements,
} from './util/util';

describe('#BaseMethods', () => {
  describe('#getElement', () => {
    const div = makeElement('div', {id: 'target'});
    document.body.appendChild(div);

    it('returns as HTMLElement.', () => {
      const elm = baseMethods.getElement('#target');
      expect(elm instanceof HTMLElement).toBeTruthy();
    });

    it('if base is not exists, then occur ReferenceError.', () => {
      expect(() => {
        baseMethods.getElement('#target', '#none');
      }).toThrow(ReferenceError);
    });
  });

  describe('#removeElements', () => {
    const div = document.createElement('div');
    const spans = makeElements(5, 'span');
    spans.forEach(span => div.appendChild(span));

    it('works.', () => {
      // before
      expect(div.children.length).toEqual(5);
      const num = baseMethods.removeElements('span', div);
      // than
      expect(div.children.length).toEqual(0);
      expect(num).toEqual(5);
    });
  });

  describe('#findAncestor', () => {
    const section = makeElement('section', {id: 'findAncestor'});
    const grandFarther = makeElement('div', {className: 'grand-father'});
    const father = makeElement('div', {className: 'father'});
    const child = makeElement('div', {className: 'child'});
    appendChain(document.body, section, grandFarther, father, child);

    it('returns element if find ancestor.', () => {
      const elm = baseMethods.findAncestor('#findAncestor .child', '.grand-father');
      expect(elm instanceof HTMLElement).toBeTruthy();
    });

    it('returns null if not found ancestor.', () => {
      const elm = baseMethods.findAncestor('#findAncestor .child', '#nobody');
      expect(elm).toBe(null);
    });

    it('works too if set ancestor parameter as HTMLElement.', () => {
      const elm = baseMethods.findAncestor(child, father);
      expect(elm).toEqual(document.querySelector('#findAncestor .father'));
    });

    it('is no problem in using innerHTML.', () => {
      child.innerHTML = '<span><i id="child-toy"></i></span>';
      const elm = baseMethods.findAncestor('#child-toy', '.grand-father');
      expect(elm).toEqual(grandFarther);
    });

    it('returns null when matches `null` during in process.', () => {
      const elm = baseMethods.findAncestor('#nobody', '.grand-father');
      expect(elm).toBe(null);
    });
  });

  describe('#getElementsAsArray', () => {
    const div = makeElement('div');
    const spans = makeElements(5, 'span');
    spans.forEach(span => div.appendChild(span));

    it('returns elements as array of HTMLElement.', () => {
      const elms = baseMethods.getElementsAsArray('span', div);
      expect(Array.isArray(elms)).toBeTruthy();
      expect(elms.every(elm => elm instanceof HTMLElement)).toBeTruthy();
    });
  });
});
