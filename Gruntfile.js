module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        jshint: {
            files: [
                'Gruntfile.js',
                'src/scripts/**/*.js',
                'demo/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        clean: {
            dist: ['dist']
        },

        sass: {
            build: {
                files: {
                    'src/styles/ng-countdown-ribbon.css': 'src/styles/ng-countdown-ribbon.sass'
                }
            }
        },

        cssmin: {
            build: {
                files: {
                    'dist/ng-countdown-ribbon.min.css': 'src/styles/ng-countdown-ribbon.css'
                }
            },

            demo: {
                files: {
                    'dist/demo/demo.min.css': [
                        'src/styles/ng-countdown-ribbon.css',
                        'demo/demo.css'
                    ]
                }
            }
        },

        processhtml: {
            build: {
                files: {
                    'dist/demo/index.html': 'demo/index.html'
                }
            }
        },

        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            index: {
                files: {
                    'dist/demo/index.html': 'dist/demo/index.html'
                }
            }
        },

        uglify: {
            build: {
                files: {
                    'dist/ng-countdown-ribbon.min.js': 'src/**/*.js'
                }
            },
            demo: {
                files: {
                    'dist/demo/demo.min.js': [
                        'bower_components/angular/angular.js',
                        'src/scripts/ng-countdown-ribbon.js',
                        'demo/demo.js'
                    ]
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/**/*', 'demo/**/*'],
                tasks: ['build']
            }
        }

    });

    grunt.registerTask('build', [
        'jshint',
        'clean',
        'sass',
        'cssmin:build',
        'uglify:build',
        'demo'
    ]);

    grunt.registerTask('demo', [
        'processhtml',
        'htmlmin',
        'cssmin:demo',
        'uglify:demo'
    ]);


    grunt.registerTask('default', ['build']);
    grunt.registerTask('dev', ['build', 'watch']);

};
