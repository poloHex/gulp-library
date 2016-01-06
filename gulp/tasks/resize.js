/**
* Image Crop and Compress with Tinypng and Image Resize

* gulp-tinypng-compress: https://www.npmjs.com/package/gulp-tinypng
* gulp-image-resize: https://www.npmjs.com/package/gulp-image-resize

* Requirements
* Tinypng API Key: https://tinypng.com/developers/
* Resize all images within folders and recreate folder structure on output
* Based on ryantbrown: https://gist.github.com/ryantbrown/239dfdad465ce4932c81

**/

var gulp            = require('gulp');
var config          = require('../config');
var imageresize     = require('gulp-image-resize');
var tinypng         = require('gulp-tinypng-compress');
 

gulp.task('resize', function () {

    images.forEach(function(type){

        var resize_settings = {
            width: type.width,
            crop: type.crop,
            upscale : false
        }

        if (type.hasOwnProperty("height")) {
            resize_settings.height = type.height
        }

        gulp

        .src(config.images.input.files+type.folder+'/**/*')

        .pipe(imageresize(resize_settings))

        .pipe(tinypng({
          key: 'API-KEY',
    	    log: true
        }))

        .pipe(gulp.dest(config.images.output.path+type.folder));

    });
});
