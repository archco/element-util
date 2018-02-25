var expect = window.chai.expect;
var ElementUtil = window.ElementUtil;

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

    it('cursor style of table-header to be "pointer".', () => {
      const th = ElementUtil.getElement('table.sort thead th:nth-child(1)');
      expect(th.style.cursor).to.equal('pointer');
    });
  });
});
