describe('The transportFee function' , function(){
    it('should take in morning, afternoon and Night shifts and calculate the price based on the shifts you worked' , function(){
      assert.equal(transportFee('morning, afternoon, Night'),('free'));
    });
});
