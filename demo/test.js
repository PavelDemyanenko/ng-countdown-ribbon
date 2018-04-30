describe('MainCtrl', function(){
    beforeEach(module('demo'));

  	describe('getRibbonDate()', function(){
  		  it('should handle date correctly', inject(function($controller){
      			var mainCtrl = $controller('MainCtrl');

      			mainCtrl.getFullName().should.equal('George Harrison');
  		  }));
  	});
});
