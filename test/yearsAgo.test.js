describe('The yearsAgo function' , function(){
    it('23 years ago' , function(){
      assert.equal(23,yearsAgo('1995'));
    });
    it('5 years ago' , function(){
      assert.equal(5,yearsAgo('2013'));
    });
});
