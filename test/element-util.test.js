// const chai = require('chai');
// chai.use(require('chai-dom'));
// const expect = chai.expect;
const expect = chai.expect;
const ElementUtil = window.ElementUtil.default;

describe('ElementUtil', () => {
  it('ElementUtil to be an object.', () => {
    expect(ElementUtil).to.be.an('object');
  });

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

  describe('#filter', () => {
    it('filtering on table element.', () => {
      let hit = ElementUtil.filter('table.filter', 'james');
      expect(hit).to.equal(1);
    });
  });

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
