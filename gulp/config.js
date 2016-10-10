/**
* Notify is used for global error message
**/

var chalk           = require('chalk');
var notify          = require('gulp-notify');
var gutil           = require('gulp-util');

// Global Settings
module.exports = {
    baseurl:       '',
    baseIndex:     'index',
    baseIndexType: '.html',

    sass: {
        input: {
            file: 'styles.scss',
            files: '_src/scss/**/*.scss',
            path: '_src/scss/',
        },
        output: {
            style: 'expanded',
            sourcemap: true,
            file: 'styles.min.css',
            path: 'assets/css/',
            message: 'Sass task complete'
        }
    },

    js: {
        input: {
            path:    '_src/js/',
            vendor:  '_src/js/vendor/**/*.js',
            files:   '_src/js/**/*.js',
            file:    '_src/js/_app.js',
            build:   '_build.js'
        },
        output: {
            file: 'scripts.min.js',
            vendor:'vendor.min.js',
            path: 'assets/js/',
            message: 'JS task complete'
        }
    },

    kit: {
        input: {
            files: "_src/kit/**/*.kit",
            file: "_src/kit/index.kit"
        },
        output: {
            file: "index.html",
            path: "",
        }
    },

    chalkStyles: {
      eTitle: chalk.bold,
      eMsg: chalk.red
    }

};

