describe('The greet function' , function(){
    it('should greet Unalo properly' , function(){
      assert.equal(greet('Unalo'),'Hello Unalo');
    });
    it('should greet Vusi properly' , function(){
      assert.equal(greet('Vusi'),'Hello Vusi');
    });
});
