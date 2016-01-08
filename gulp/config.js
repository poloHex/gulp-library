/**
* Notify is used for global error message
**/

var chalk           = require('chalk');
var notify          = require('gulp-notify');
var gutil           = require('gulp-util');
// Global Settings
module.exports = {

    baseurl: 'public',

    sass: {
        input: {
            file: 'styles.scss',
            files: '_app/scss/**/*.scss',
            path: '_app/scss/',
        },
        output: {
            style: 'expanded',
            sourcemap: true,
            file: 'styles.css',
            path: 'public/assets/css/',
            message: 'Sass task complete'
        }
    },

    js: {
        input: {
            files: '_app/js/**/*.js',
            file: '_app/js/_app.js' 
        },
        output: {
            file: 'main.js',
            path: 'public/assets/js',
            message: 'JS task complete'
        }
    },

    images: {
      input: {
          files: '_app/src/images/',
          favicons: '_app/src/images/favicons/'
      },
      output: {
          path: 'public/assets/images/',
          favicons: 'public/assets/images/favicons/'
      }
    },

    kit: {
      input: {
        files: "_app/kit/**/*.kit",
        file: "_app/kit/index.kit"
      },
      output: {
        file: "index.html",
        path: "public/",
      }
    },

    chalkStyles: {
      eTitle: chalk.bold,
      eMsg: chalk.red
    }

};


favicons = [
    { rename: 'mstile-558x558', width: 558, crop: false },
    { rename: 'mstile-558x270', width: 558, height: 270, crop: true },
    { rename: 'mstile-270x270', width: 270, height: 270, crop: true },
    { rename: 'mstile-128x128', width: 128, height: 128, crop: true },
    { rename: 'icon-192x192', width: 192, height: 192, crop: true },
    { rename: 'icon-144x144', width: 144, height: 144, crop: true },
    { rename: 'icon-96x96', width: 96, height: 96, crop: true },
    { rename: 'icon-72x72', width: 72, height: 72, crop: true },
    { rename: 'icon-48x48', width: 48, height: 48, crop: true },
    { rename: 'icon-36x36', width: 36, height: 36, crop: true },
    { rename: 'favicon-192x192', width: 192, height: 192, crop: true },
    { rename: 'apple-touch-icon-192x192', width: 192, height: 192, crop: true },
];


images = [
    { folder: 'bg', width: 1200, crop: false },
    { folder: 'bg_mobile', width: 600, height: 280, crop: true },
];
