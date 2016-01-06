/**
* Image Crop and Compress with Tinypng and Image Resize

* gulp-tinypng-compress: https://www.npmjs.com/package/gulp-tinypng
* gulp-image-resize: https://www.npmjs.com/package/gulp-image-resize

* Requirements
* Tinypng API Key: https://tinypng.com/developers/

* Based on ryantbrown: https://gist.github.com/ryantbrown/239dfdad465ce4932c81

**/

var gulp            = require('gulp');
var config          = require('../config');
var imageresize     = require('gulp-image-resize');
var tinypng         = require('gulp-tinypng-compress');

var images = [
    { folder: 'bg', width: 1200, crop: false },
    { folder: 'bg_mobile', width: 600, height: 280, crop: true },
];

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

        .src(config.images.input+type.folder+'/**/*')

        .pipe(imageresize(resize_settings))

        .pipe(tinypng({
          key: 'API-KEY',
    	    log: true
        }))

        .pipe(gulp.dest(config.images.output.path+type.folder));

    });
});
