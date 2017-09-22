var assert = require('assert');
describe('otrak', function() {
    var M = require('./manager')
    describe('login', function() {
    it('login(ccc, 1111)=undefined', function() {
      assert.equal('undefined', typeof(M.login('ccc', '1111')));
    });
    it('login(ccc, 1234567).id=ccc', function() {
        assert.equal('ccc', M.login('ccc', '1234567').id);
    });    
  });
});