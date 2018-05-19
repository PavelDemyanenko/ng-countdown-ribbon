angular.module('app', ['ngCountdownRibbon'])
.controller('MainCtrl', ['$scope', 'ngCountdownRibbon',
    function($scope, ngCountdownRibbon) {
        var today = new Date();
        var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

        function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');
        }

        ngCountdownRibbon.set(formatDate(tomorrow), 'http://amzn.com/w/ZWFNUL8AGNLP');

        $scope.getRibbonDate = function() {
            return '1 day left';
        }
    }
]);


describe('MainCtrl', function(){
    beforeEach(module('app'));

    var $controller, $rootScope;

    beforeEach(inject(function(_$controller_, _$rootScope_){
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

  	describe('getRibbonDate()', function(){
        it('should handle date correctly', inject(function($controller){
            var $scope = $rootScope.$new();

            var mainCtrl = $controller('MainCtrl', {$scope: $scope});

            $scope.getRibbonDate().should.equal('1 day left');
        }));
  	});
});
