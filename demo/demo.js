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

        var today = new Date();
        var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));

        function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
            if (month.length < 2) {
              month = '0' + month;
            }
            if (day.length < 2) {
              day = '0' + day;
            }
            return [year, month, day].join('-');
        }

        ngCountdownRibbon.set(formatDate(tomorrow), 'http://amzn.com/w/ZWFNUL8AGNLP');

        $scope.setDefaultPosition = function() {
            ngCountdownRibbon.config({
                position: $scope.position
            });
            ngCountdownRibbon.set(formatDate(tomorrow), 'http://amzn.com/w/ZWFNUL8AGNLP');
        };

        $scope.setDefaultTheme = function() {
            ngCountdownRibbon.config({
                theme: $scope.theme
            });
            ngCountdownRibbon.set(formatDate(tomorrow), 'http://amzn.com/w/ZWFNUL8AGNLP');
        };

    }
]);
