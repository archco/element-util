var ElementUtil = window.ElementUtil;
var expect = window.chai.expect;

describe('ElementFilter', function () {
  describe('#filter', function () {
    it('filtering on table element.', function () {
      var hit = ElementUtil.filter('table.filter', 'james');
      expect(hit).to.equal(1);
    });
  });
});
