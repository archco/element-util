const expect = require('chai').expect;

describe('ElementUtil', () => {
  describe('#getElement', () => {
    it('foo to be a string.', () => {
      let foo = 'hey';
      expect(foo).to.be.a('string');
    });
  });
});
