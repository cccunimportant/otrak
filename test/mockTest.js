/* eslint-disable no-undef */
var expect = require('chai').expect
describe('otrak (mock integration test)', function () {

  var M = require('./mock')
  var ccc = {username: 'ccc', password: '1234567'}
  var jack = {username: 'jack', password: 'jack1234'}

  describe('signup', function () {
    it('signup(ccc).to.be.an(undefined)', function () {
      expect(M.signup(ccc)).to.be.an('undefined')
    })
    it('signup(jack).not.to.be.an(undefined)', function () {
      expect(M.signup(jack)).not.to.be.an('undefined')
    })
  })

  describe('login', function () {
    it('login(jack.username, jack.password).not.to.be.an(undefined)', function () {
      expect(M.login(jack.username, jack.password)).not.to.be.an('undefined')
    })
  })

  describe('queryObjects', function () {
    it('queryObjects({type:book}).not.to.be.empty', function () {
      expect(M.queryObjects({type: 'book'})).not.to.be.empty
    })
    it('queryObjects({type:dog}).to.be.empty', function () {
      expect(M.queryObjects({type: 'dog'})).to.be.empty
    })
    it('queryObjects({distance:0.1, location:gps.getCurrentLocation()}).not.to.be.empty', function () {
      expect(M.queryObjects({distance: 0.1, location: M.gps.getCurrentLocation()})).not.to.be.empty
    })
    it('queryObjects({distance:0.0001, location:gps.getCurrentLocation()}).not.to.be.empty', function () {
      expect(M.queryObjects({distance: 0.0001, location: M.gps.getCurrentLocation()})).to.be.empty
    })
  })
})
