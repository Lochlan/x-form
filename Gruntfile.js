module.exports = function (grunt) {
    grunt.initConfig({
        'smush-components': {
            dist: {
                fileMap: {
                    js: './demo/components.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-smush-components');

    grunt.registerTask('build', ['smush-components']);
};
