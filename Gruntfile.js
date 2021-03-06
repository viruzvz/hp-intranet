/*jshint node:true*/

'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt)
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'})

    var configs = require('load-grunt-configs')(grunt)
    grunt.initConfig(configs)

    grunt.registerTask('dev', '--allow-remote para permitir acesso externo', function (target) {

        if (grunt.option('allow-remote')) {
            grunt.config.set('connect.options.hostname', '*')
        }

        if (grunt.option('port')) {
            grunt.config.set('connect.options.port', grunt.option('port'))
            grunt.config.set('connect.options.livereload', grunt.option('port') + 1)
        }

        grunt.task.run([
            'clean',
            'concurrent',
            'autoprefixer',
            'connect:dev',
            'watch'
        ])

    })

    grunt.registerTask('build', [
        'clean',
        'concurrent',
        'autoprefixer',
        'cssmin',
        'copy'
    ])

    grunt.registerTask('default', ['build'])

}
