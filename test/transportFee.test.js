describe('The transportFee function' , function(){
    it('should take in morning shift and calculate the price based on the shift you worked' , function(){
      assert.equal(transportFee('morning'),('R20'));
    });
    it('should take in afternoon shift and calculate the price based on the shift you worked' , function(){
      assert.equal(transportFee('afternoon'),('R10'));
    });
    it('should take in Night shift and calculate the price based on the shift you worked' , function(){
      assert.equal(transportFee('Night'),('free'));
    });
    it('should take in morning, afternoon and Night shift and calculate the price based on the shift you worked' , function(){
      assert.equal(transportFee('mid Night'),('not a shift'));
    });
});
