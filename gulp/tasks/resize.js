/**
* Image Crop and Compress with Tinypng and Image Resize
*
* gulp-tinypng-compress: https://www.npmjs.com/package/gulp-tinypng
* gulp-image-resize: https://www.npmjs.com/package/gulp-image-resize
*
* Requirements
* Tinypng API Key: https://tinypng.com/developers/
*
* Based on ryantbrown: https://gist.github.com/ryantbrown/239dfdad465ce4932c81
*
* This test case is resizing hero images
*
**/

var gulp            = require('gulp');
var config          = require('../config');
var rename          = require('gulp-rename');
var imageresize     = require('gulp-image-resize');
var tinypng         = require('gulp-tinypng-compress');

gulp.task('resize', function () {

    hero.forEach(function(type){

        var resize_settings = {
            width: type.width,
            crop: type.crop,
            upscale : false
        }

        if (type.hasOwnProperty("height")) {
            resize_settings.height = type.height
        }

        gulp

        .src(config.images.input.files+'/**/*')

        .pipe(imageresize(resize_settings))
        .pipe(rename(type.rename))

        .pipe(tinypng({
          key: 'API-KEY',
    	    log: true
        }))

        .pipe(gulp.dest(config.images.output.path));

    });
});
