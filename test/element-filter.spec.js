var expect = window.chai.expect;
var ElementUtil = window.ElementUtil;

describe('ElementFilter', function () {
  describe('#filter', function () {
    it('filtering on table element.', function () {
      var hit = ElementUtil.filter('table.filter', 'james');
      expect(hit).to.equal(1);
    });
  });
});
