'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-jslint');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                files: {
                    'public/bundle.generated.js': ['public/**/*.js']
                }
            }
        },
        jslint: { // configure the task
            // lint your project's server code
            server: {
                src: [
                    '**/*.js',
                    '!public/**/*.js',
                    '!node_modules/**/*.js'
                ],
                directives: {
                    nomen: true,
                    node: true
                },
                options: {
                    errorsOnly: false,
                    failOnError: false
                }
            },
            // lint your project's client code
            client: {
                src: [
                    'public/**/*.js',
                    '!public/bundle.generated.js'
                ],
                directives: {
                    nomen: true,
                    browser: true,
                    node: true
                },
                options: {
                    errorsOnly: false,
                    failOnError: false
                }
            }
        }
    });


    grunt.registerTask('default', ['jslint', 'browserify']);

};