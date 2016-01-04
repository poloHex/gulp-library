/**
Image Crop and Compress with Tinypng and Image Resize

gulp-tinypng-compress: https://www.npmjs.com/package/gulp-tinypng
gulp-image-resize: https://www.npmjs.com/package/gulp-image-resize

Requirements
Tinypng API Key: https://tinypng.com/developers/

Based on ryantbrown: https://gist.github.com/ryantbrown/239dfdad465ce4932c81

**/

var gulp = require('gulp');
var imageresize = require('gulp-image-resize');
var tinypng = require('gulp-tinypng-compress');

var paths = {
  src: './_app/src/images/',
  images: './public/assets/images/'
};

var images = [
    { folder: 'bg', width: 1200, crop: false },
    { folder: 'bg_mobile', width: 600, height: 280, crop: true },
];

gulp.task('tinypng', function () {

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

        .src(paths.src+type.folder+'/**/*')

        .pipe(imageresize(resize_settings))

        .pipe(tinypng({
          key: 'API-KEY',
    	  log: true
        }))

        .pipe(gulp.dest(paths.images+type.folder));

    });
});

gulp.task('default', ['tinypng']);
