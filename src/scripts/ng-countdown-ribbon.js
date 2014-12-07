/**
 * @license ng-countdown-ribbon v0.1.0
 * http://paveldemyanenko.github.io/ng-countdown-ribbon
 * (c) 2014 MIT License, http://development.demyanenko.divshot.io
 */
(function() {
    'use strict';

    /**
     * @description
     *
     * This module provides any AngularJS application with a simple countdown robbin.
     *
     */
    var module = angular.module('ngCountdownRibbon', []);

    module.provider('ngCountdownRibbon', function() {

        this.$get = ['$document', '$compile', '$rootScope',

            function($document, $compile, $rootScope) {

                var options = {
                    theme: 'default',
                    position: 'left',
                    defaultType: ''
                };

                var ribbonScope = $rootScope.$new();
                var tpl = $compile('<span class="countdown-ribbon" ng-class="ngCountdownRibbon.ribbonClass">{{ ngCountdownRibbon.ribbonMessage }}</span>')(ribbonScope);

                $document.find('body').append(tpl);

                var ribbonObject = {

                    config: function(params) {
                        params = params || {};
                        angular.extend(options, params);
                    },

                    set: function(message, type) {

                        if (!message) {
                            return;
                        }

                        var ribbonClass = setClass(options.defaultType, type) + ' ' +
                            setTheme(options.theme) + ' ' +
                            setPosition(options.position);

                        ribbonScope.ngCountdownRibbon = {
                            ribbonClass: ribbonClass,
                            ribbonMessage: message
                        };

                    }
                };

                var setClass = function(defaultType, providedType) {

                    var classes = {
                        defaultClass: 'default',
                        todayClass: 'today'
                    };

                    var type = (providedType || defaultType) + 'Class';

                    return classes[type] || classes.defaultClass;
                };

                var setTheme = function(theme) {

                    var themes = {
                        default: 'black',
                        red: 'red',
                        blue: 'blue',
                        green: 'green'
                    };

                    return themes[theme] || '';
                };

                var setPosition = function(position) {

                    var positions = {
                        left: 'left',
                        right: 'right'
                    };

                    return positions[position] || positions.left;
                };

                return ribbonObject;
            }
        ];
    });
})();

