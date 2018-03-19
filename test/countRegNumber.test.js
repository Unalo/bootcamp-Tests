describe('The countRegNumber function' , function(){
    it('count registration numbers' , function(){
      assert.equal(3,countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
});
