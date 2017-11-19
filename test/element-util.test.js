const expect = window.chai.expect;
const Module = window.ElementUtil;
const ElementUtil = Module.default;
const ElementFilter = Module.ElementFilter;
const ElementSort = Module.ElementSort;

describe('ElementUtil', () => {
  it('ElementUtil to be an object.', () => {
    expect(ElementUtil).to.be.an('object');
  });

  describe('baseMethods', () => {
    describe('#getElement', () => {
      it('Returns to be an instance of Element.', () => {
        let elm = ElementUtil.getElement('#mocha');
        expect(elm).to.be.an.instanceof(Element);
      });

      it('If base is not exists, then will occur ReferenceError.', () => {
        let badFn = () => ElementUtil.getElement('div', '#mocha1');
        expect(badFn).to.throw(ReferenceError);
      });
    });

    describe('#findAncestor', () => {
      it('Returns Element if find ancestor.', () => {
        let elm = ElementUtil.findAncestor('table.filter', '#test');
        expect(elm).to.be.an.instanceof(Element);
      });

      it('Returns null if not found ancestor.', () => {
        let elm = ElementUtil.findAncestor('table.filter', '#impossible');
        expect(elm).to.be.null;
      });

      it('It works too if set ancestor parameter as Element.', () => {
        let elm = ElementUtil.findAncestor(
          ElementUtil.getElement('table.filter'),
          ElementUtil.getElement('#test')
        );
        console.log(elm);
        expect(elm).to.equal(document.querySelector('#test'));
      });
    });
  });

  describe('utilMethods', () => {
    describe('#addClass', () => {
      it('Add class to element.', () => {
        let elm = ElementUtil.getElement('#test');
        ElementUtil.addClass(elm, 'test-class');
        expect(elm.classList.contains('test-class')).to.equal(true);
      });
    });

    describe('#toggleShow', () => {
      let elm = ElementUtil.getElement('div.show-target');

      it('First toggle will show a element.', () => {
        ElementUtil.toggleShow(elm);
        expect(elm.style.display).to.be.empty;
      });

      it('Second toggle will hide a element.', () => {
        ElementUtil.toggleShow(elm);
        expect(elm.style.display).to.equal('none');
      });
    });

    describe('#makeHiddenInput', () => {
      it('Returns input:hidden element.', () => {
        let input = ElementUtil.makeHiddenInput('input-hidden', 'test-value');
        expect(input).to.be.instanceof(Element);
        expect(input.tagName).to.equal('INPUT');
        expect(input.type).to.equal('hidden');
      });
    });

    describe('#appendHiddenInput', () => {
      let target = document.createElement('div');

      it('Append input:hidden to target as child node.', () => {
        ElementUtil.appendHiddenInput(target, 'input-hidden', 'test-value');
        let input = target.querySelector('input[type="hidden"]');

        expect(input).to.be.instanceof(Element);
        expect(input.value).to.equal('test-value');
      });

      it('If same input name is exists, then will replace it.', () => {
        ElementUtil.appendHiddenInput(target, 'input-hidden', 'other-value');
        let input = target.querySelector('input[type="hidden"]');

        expect(input.value).to.equal('other-value');
      });
    });
  });

  describe('ElementFilter', () => {
    describe('#filter', () => {
      it('filtering on table element.', () => {
        let hit = ElementUtil.filter('table.filter', 'james');
        expect(hit).to.equal(1);
      });
    });
  });

  describe('ElementSort', () => {
    describe('#sort', () => {
      it('sort on list.', () => {
        let items = ElementUtil.sort('ul.sort');
        expect(items[0].textContent).to.equal('abc');
      });

      it('sort on table.', () => {
        ElementUtil.sort('table.sort');
        ElementUtil.getElement('table.sort thead th:nth-child(3)').click();
        let firstRowDate = ElementUtil
          .getElement('td:nth-child(3)', 'table.sort tbody tr:first-child')
          .textContent;
        expect(firstRowDate).to.equal('1444-05-01');
      });
    });
  });
});
