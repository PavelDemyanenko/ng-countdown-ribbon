var app = angular.module('demo', ['ngCountdownRibbon']);

app.controller('MainCtrl', ['$scope', 'ngCountdownRibbon',
    function($scope, ngCountdownRibbon) {
        'use strict';

        ngCountdownRibbon.set('2015-03-26', 'http://amzn.com/w/ZWFNUL8AGNLP');

        $scope.theme = 'black';
        $scope.themeOptions = ['black', 'blue'];

        $scope.position = 'left';
        $scope.positionOptions = ['left', 'right'];


        $scope.setDefaultPosition = function() {
            ngCountdownRibbon.config({
                position: $scope.position
            });
            ngCountdownRibbon.set('2015-03-26', 'http://amzn.com/w/ZWFNUL8AGNLP');
        };

        $scope.setDefaultTheme = function() {
            ngCountdownRibbon.config({
                theme: $scope.theme
            });
            ngCountdownRibbon.set('2015-03-26', 'http://amzn.com/w/ZWFNUL8AGNLP');
        };

    }
]);
