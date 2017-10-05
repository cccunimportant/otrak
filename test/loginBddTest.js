/* eslint-disable no-undef */
var expect = require('chai').expect
describe('otrak (BDD style)', function () {
  var M = require('./mock')
  describe('login', function () {
    it('login(ccc, 1111).to.be.an(undefined)', function () {
      expect(M.login('ccc', '1111')).to.be.an('undefined')
    })
    it('login(ccc, 1234567).id.to.equal(ccc)', function () {
      expect(M.login('ccc', '1234567').username).to.equal('ccc')
    })
    it('login(leo, 1111).to.be.an(undefined)', function () {
      expect(M.login('leo', '1111')).to.be.an('undefined')
    })
  })
})
