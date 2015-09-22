module.exports = function (grunt) {

    // Display the elapsed execution time of grunt tasks
    require('time-grunt')(grunt);
    // Load all grunt-* packages from package.json
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        paths: {
            src: {
                js: 'src/TWeen.js'
            },
            dest: {
                jsMin: 'dist/TWeen.min.js'
            }
        },
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: '<%= paths.src.js %>',
                dest: '<%= paths.dest.js %>'
            }
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: true
            },
            target: {
                src: '<%= paths.src.js %>',
                dest: '<%= paths.dest.jsMin %>'
            }
        }
    });

    grunt.registerTask('default', 'concat vs. uglify', function (concat) {
        // grunt default:true
        if (concat) {
            // Update the uglify dest to be the result of concat
            var dest = grunt.config('concat.js.dest');
            grunt.config('uglify.target.src', dest);

            grunt.task.run('concat');
        }
        // grunt default
        grunt.task.run('uglify');
    });

};
