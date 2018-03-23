
describe('The findItemsOver20 function' , function(){
    it('should take in list of items and retun the ones over 20 ' , function(){
      assert.equal(findItemsOver20(
        [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3}
        ]
        ,20),2);
    });
});
