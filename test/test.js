var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});



    describe('equals test', function() {
     it('its gonna go out of bounds', function(){
        assert.equal([1,2,3,4,5].indexOf(5), 4);
    });
});
