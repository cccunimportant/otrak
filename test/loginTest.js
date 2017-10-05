/* eslint-disable no-undef */
// var assert = require('assert')
var assert = require('chai').assert
describe('otrak', function () {
  var M = require('./manager')
  describe('login', function () {
    it('login(ccc, 1111).isUndefined', function () {
      assert.isUndefined(M.login('ccc', '1111'))
    })
    it('login(ccc, 1234567).id===ccc', function () {
      assert.equal('ccc', M.login('ccc', '1234567').username)
    })
    it('login(leo, 1111).isUndefined', function () {
      assert.isUndefined(M.login('leo', '1111'))
    })
  })
})
