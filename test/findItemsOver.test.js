describe('The findItemsOver function' , function(){
    it('should take in list of items and return the ones over 20' , function(){
      assert.equal(findItemsOver(
        [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
      ]
      ,20),2);
    });
});
