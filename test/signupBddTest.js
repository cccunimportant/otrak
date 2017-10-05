/* eslint-disable no-undef */
var expect = require('chai').expect
describe('otrak (BDD style)', function () {
  var M = require('./manager')
  var ccc = {username: 'ccc', password: '1234567'}
  var jack = {username: 'jack', password: 'jack1234'}
  describe('signup', function () {
    it('signup(ccc).to.be.an(undefined)', function () {
      expect(M.signup(ccc)).to.be.an('undefined')
    })
    it('signup(jack).not.to.be.an(undefined)', function () {
      expect(M.signup(jack)).not.to.be.an('undefined')
    })
    it('login(jack.username, jack.password).not.be.an(undefined)', function () {
      expect(M.login(jack.username, jack.password)).not.to.be.an('undefined')
    })
  })
})
