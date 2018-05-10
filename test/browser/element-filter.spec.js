var ElementUtil = window.ElementUtil;
var expect = window.chai.expect;

describe('ElementFilter', function () {
  describe('#filter', function () {
    it('filtering on table element.', function () {
      var res = ElementUtil.filter('table.filter', 'james');
      expect(res.filtered.length).to.equal(1);
    });
  });
});
