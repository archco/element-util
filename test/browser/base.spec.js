var ElementUtil = window.ElementUtil;
var expect = window.chai.expect;

describe('#BaseMethods', function () {
  describe('#getElement', function () {
    it('Returns to be an instance of Element.', function () {
      var elm = ElementUtil.getElement('#mocha');
      expect(elm).to.be.an.instanceof(Element);
    });

    it('If base is not exists, then will occur ReferenceError.', function () {
      var badFn = function () {
        ElementUtil.getElement('div', '#mocha1');
      };

      expect(badFn).to.throw(ReferenceError);
    });
  });

  describe('#removeElements', function () {
    it('works', function () {
      var div = document.createElement('div');
      for (var i = 0; i < 5; i++) {
        var span = document.createElement('span');
        div.appendChild(span);
      }
      // before
      expect(div.children.length).to.equal(5);
      var num = ElementUtil.removeElements('span', div);
      // than
      expect(div.children.length).to.equal(0);
      expect(num).to.equal(5);
    });
  });

  describe('#findAncestor', function () {
    it('Returns Element if find ancestor.', function () {
      var elm = ElementUtil.findAncestor('table.filter', '#test');
      expect(elm).to.be.an.instanceof(Element);
    });

    it('Returns null if not found ancestor.', function () {
      var elm = ElementUtil.findAncestor('table.filter', '#not-element');
      expect(elm).to.be.null;
    });

    it('It works too if set ancestor parameter as Element.', function () {
      var elm = ElementUtil.findAncestor(
        ElementUtil.getElement('table.filter'),
        ElementUtil.getElement('#test')
      );
      expect(elm).to.equal(document.querySelector('#test'));
    });

    it('No problem in using innerHTML.', function () {
      var elm = ElementUtil.getElement('#test > span.inside');
      elm.innerHTML = '<span class="inside">Hello</span>';
      var insideElm = ElementUtil.getElement('#test > span.inside > span.inside');
      expect(ElementUtil.findAncestor(insideElm, '#test'))
        .to.equal(document.querySelector('#test'));
    });

    it('Returns null when if `null` is during method process.', function () {
      expect(ElementUtil.findAncestor('#not-element', '#test')).to.be.null;
    });
  });

  describe('#getElementsAsArray', function () {
    it('Returns elements as array of HTMLElement.', function () {
      var elms = ElementUtil.getElementsAsArray('ul.sort li');
      expect(Array.isArray(elms)).to.be.true;
      expect(elms[0] instanceof HTMLElement).to.be.true;
    });
  });
});
