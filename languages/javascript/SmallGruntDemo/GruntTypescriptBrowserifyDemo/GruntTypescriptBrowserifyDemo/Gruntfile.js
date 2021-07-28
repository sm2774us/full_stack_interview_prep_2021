module.exports = function (grunt) {
    'use strict';


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');



    //INSTRUCTIONS
	//1. Install Node.js
	//2. From Node.js command line run this command "npm install -g grunt"
	//3. From Node.js command line run this command "npm install -g grunt-cli"
	//3. From Node.js command line, Change to directory which has package.json in it, 
	//   and run the following command lines 
	//   a) "npm install"
	//   b) "grunt watch"
 

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Cleans directories
        clean: {
            dist: [
                'dist/**/*'
            ],
            tmp: [
                'tmp/**/*'
            ]
        },

        // Typescript transpiler (Typescript to JS)
        ts: {
            options: {
                fast: 'never',
                target: 'es5',
                module: 'commonjs',
                sourceMap: true
            },
            index: {
                src: ['./src/**/*.ts'],
                outDir: './tmp'
            }
        },

        // Package 
        browserify: {
            './dist/app.js': ['./tmp/*.js', './src/Jquery/jquery.js']
        },


        // Minify 
        uglify: {
            my_target: {
                options: {
                    sourceMap: 'dist/<%= pkg.name %>.map',
                    sourceMapRoot: '..',
                    sourceMappingURL: '<%= pkg.name %>.map'
                },
                files: {
                    './dist/app.js': ['./dist/app.js']
                }
            }
        },
		
		
		// Watch 
        watch: {
		  scripts: {
			files: ['./src/**/*.ts'],
			tasks: ['dev'],
			options: {
			  event: ['all']
			}
		  }
		}


    });

    // setup default task to run dev task 
    grunt.registerTask('default', ['dev']);

    // +++++++++++++++++++++++++++++++++++++++++++
    // Prod task
    // +++++++++++++++++++++++++++++++++++++++++++
    // 1. Cleans directories
    // 2. Runs typescript transpiling task
    // 3. Package using Browserify
    // 4. Minify using Uglify
    grunt.registerTask('prod', [
		'clean',
		'ts:index',
        'browserify',
        'uglify'
    ]);


    // +++++++++++++++++++++++++++++++++++++++++++
    // Dev task
    // +++++++++++++++++++++++++++++++++++++++++++
    // 1. Cleans directories
    // 2. Runs typescript transpiling task
    // 3. Package using Browserify
    grunt.registerTask('dev', [
       'clean',
       'ts:index',
       'browserify'
    ]);

};