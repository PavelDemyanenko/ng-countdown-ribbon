var app = angular.module('demo', ['ngCountdownRibbon']);

app.controller('MainCtrl', ['$scope', 'ngCountdownRibbon',
    function($scope, ngCountdownRibbon) {
        'use strict';

        $scope.theme = 'black';
        $scope.themeOptions = ['black', 'blue'];

        $scope.position = 'left';
        $scope.positionOptions = ['left', 'right'];

        ngCountdownRibbon.addTheme('greenTheme', 'green');

        ngCountdownRibbon.config({
            theme: 'greenTheme'
        });

        ngCountdownRibbon.set('2018-03-26', 'http://amzn.com/w/ZWFNUL8AGNLP');

        $scope.setDefaultPosition = function() {
            ngCountdownRibbon.config({
                position: $scope.position
            });
            ngCountdownRibbon.set('2018-03-26', 'http://amzn.com/w/ZWFNUL8AGNLP');
        };

        $scope.setDefaultTheme = function() {
            ngCountdownRibbon.config({
                theme: $scope.theme
            });
            ngCountdownRibbon.set('2018-03-26', 'http://amzn.com/w/ZWFNUL8AGNLP');
        };

    }
]);
