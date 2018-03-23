describe('The regCheck function' , function(){
    it('It Checks registration numbers' , function(){
      assert.equal(false,regCheck('DV 23 LP GP', 'MP'));
    });
    it('It Checks registration numbers from Gauteng' , function(){
      assert.equal(true,regCheck('DV 23 LP GP', 'GP'));
    });
});
