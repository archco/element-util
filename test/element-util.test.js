var expect = window.chai.expect;
var ElementUtil = window.ElementUtil;

describe('ElementUtil', function () {
  it('ElementUtil to be an object.', function () {
    expect(ElementUtil).to.be.an('object');
  });

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

  describe('#UtilMethods', function () {
    describe('#wrap', function () {
      it('wrapping elements each one.', function () {
        var div = document.createElement('div');
        for (var i = 0; i < 5; i++) {
          var span = document.createElement('span');
          div.appendChild(span);
        }
        // before
        expect(div.children[0].tagName).to.equal('SPAN');
        var elms = ElementUtil.getElements('span', div);
        ElementUtil.wrap(elms, 'wrapper', 'div');
        // than
        expect(div.children[0].tagName).to.equal('DIV');
        expect(div.children[1].classList.contains('wrapper')).to.be.true;
      });
    });

    describe('#wrapAll', function () {
      it('wrapping all elements.', function () {
        var div = document.createElement('div');
        for (var i = 0; i < 5; i++) {
          var span = document.createElement('span');
          div.appendChild(span);
        }
        // before
        expect(div.children[0].tagName).to.equal('SPAN');
        var elms = ElementUtil.getElements('span', div);
        ElementUtil.wrapAll(elms, 'wrapper', 'div');
        // than
        expect(div.children.length).to.equal(1);
        expect(div.children[0].children.length).to.equal(5);
        expect(div.children[0].tagName).to.equal('DIV');
        expect(div.children[0].classList.contains('wrapper')).to.be.true;
      });

      it('works even when target elements are position between siblings.', function () {
        var div = document.createElement('div');
        for (var i = 1; i <= 6; i++) {
          var span = document.createElement('span');
          if (i % 2 == 0) {
            span.classList.add('target');
          }
          div.appendChild(span);
        }
        // before
        expect(div.children.length).to.equal(6);
        expect(div.children[1].classList.contains('target')).to.be.true;
        var elms = ElementUtil.getElements('span.target', div);
        ElementUtil.wrapAll(elms, 'wrapper', 'div');
        // than
        expect(div.children.length).to.equal(4);
        expect(div.children[1].classList.contains('wrapper')).to.be.true;
        expect(div.children[1].children.length).to.equal(3);
      });
    });

    describe('#addClass', function () {
      it('add class to element.', function () {
        var div = document.createElement('div');
        ElementUtil.addClass(div, 'test-class');
        expect(div.classList.contains('test-class')).to.equal(true);
      });

      it('addable multiple classes', function () {
        var div = document.createElement('div');
        ElementUtil.addClass(div, 'first second');
        expect(div.classList.contains('first')).to.be.true;
        expect(div.classList.contains('second')).to.be.true;
      });
    });

    describe('#removeClass', function () {
      it('remove class from element.', function () {
        var div = document.createElement('div');
        div.classList.add('test-class');
        expect(div.classList.contains('test-class')).to.be.true;
        ElementUtil.removeClass(div, 'test-class');
        expect(div.classList.contains('test-class')).to.be.false;
      });

      it('removable multiple classes', function () {
        var div = document.createElement('div');
        div.classList.add('first');
        div.classList.add('second');
        ElementUtil.removeClass(div, 'first second');
        expect(div.classList.contains('first')).to.be.false;
        expect(div.classList.contains('second')).to.be.false;
      });
    });

    describe('#toggleClass', function () {
      it('toggle class on element.', function () {
        var div = document.createElement('div');
        ElementUtil.toggleClass(div, 'toggle');
        expect(div.classList.contains('toggle')).to.be.true;
        ElementUtil.toggleClass(div, 'toggle');
        expect(div.classList.contains('toggle')).to.be.false;
      });

      it('toggle multiple classes.', function () {
        var div = document.createElement('div');
        div.classList.add('first');
        ElementUtil.toggleClass(div, 'first second');
        expect(div.classList.contains('first')).to.be.false;
        expect(div.classList.contains('second')).to.be.true;
        ElementUtil.toggleClass(div, 'first second');
        expect(div.classList.contains('first')).to.be.true;
        expect(div.classList.contains('second')).to.be.false;
      });
    });

    describe('#toggleShow', function () {
      var elm = ElementUtil.getElement('div.show-target');

      it('First toggle will show a element.', function () {
        ElementUtil.toggleShow(elm);
        expect(elm.style.display).to.be.empty;
      });

      it('Second toggle will hide a element.', function () {
        ElementUtil.toggleShow(elm);
        expect(elm.style.display).to.equal('none');
      });
    });

    describe('#makeHiddenInput', function () {
      it('Returns input:hidden element.', function () {
        var input = ElementUtil.makeHiddenInput('input-hidden', 'test-value');
        expect(input).to.be.instanceof(Element);
        expect(input.tagName).to.equal('INPUT');
        expect(input.type).to.equal('hidden');
      });
    });

    describe('#appendHiddenInput', function () {
      var target = document.createElement('div');

      it('Append input:hidden to target as child node.', function () {
        ElementUtil.appendHiddenInput(target, 'input-hidden', 'test-value');
        var input = target.querySelector('input[type="hidden"]');

        expect(input).to.be.instanceof(Element);
        expect(input.value).to.equal('test-value');
      });

      it('If same input name is exists, then will replace it.', function () {
        ElementUtil.appendHiddenInput(target, 'input-hidden', 'other-value');
        var input = target.querySelector('input[type="hidden"]');

        expect(input.value).to.equal('other-value');
      });
    });
  });

  describe('ElementFilter', function () {
    describe('#filter', function () {
      it('filtering on table element.', function () {
        var hit = ElementUtil.filter('table.filter', 'james');
        expect(hit).to.equal(1);
      });
    });
  });

  describe('ElementSort', function () {
    describe('#sort', function () {
      it('sort on list.', function () {
        var items = ElementUtil.sort('ul.sort');
        expect(items[0].textContent).to.equal('abc');
      });

      it('sort on table.', function () {
        ElementUtil.sort('table.sort');
        ElementUtil.getElement('table.sort thead th:nth-child(3)').click();
        var firstRowDate = ElementUtil
          .getElement('td:nth-child(3)', 'table.sort tbody tr:first-child')
          .textContent;
        expect(firstRowDate).to.equal('1444-05-01');
      });
    });
  });
});
