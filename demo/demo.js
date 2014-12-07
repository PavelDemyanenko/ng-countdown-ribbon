var app = angular.module('demo', ['ngCountdownRibbon']);

app.controller('MainCtrl', ['$scope', 'ngCountdownRibbon',
    function($scope, ngCountdownRibbon) {
        'use strict';

        // Configuration options...

        $scope.theme = 'default';

        $scope.position = 'left';

        $scope.defaultType = 'default';

        // Configuration actions...

        $scope.setDefaultType = function() {
            ngCountdownRibbon.config({
                defaultType: $scope.defaultType
            });
        };

        $scope.setDefaultPosition = function() {
            ngCountdownRibbon.config({
                position: $scope.position
            });
        };

        $scope.setDefaultTheme = function() {
            ngCountdownRibbon.config({
                theme: $scope.theme
            });
        };
    }
]);

