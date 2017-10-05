// const chai = require('chai');
// chai.use(require('chai-dom'));
// const expect = chai.expect;
const expect = chai.expect;
const ElementUtil = window.ElementUtil.default;

describe('ElementUtil', () => {
  it('ElementUtil to be an function.', () => {
    expect(ElementUtil).to.be.an('function');
  });

  describe('#getElement', () => {
    it('Returns to be an instance of Element.', () => {
      let elm = ElementUtil.getElement('#mocha');
      expect(elm).to.be.an.instanceof(Element);
    });
  });
});
