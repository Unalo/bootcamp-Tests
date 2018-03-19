describe('The totalPhoneBill function' , function(){
    it('should take in a string of calls and sms and calculate the total phone bill' , function(){
      assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45');
    });
});
