var gulp        = require('gulp');
var config      = require('../config');
var plumber         = require('gulp-plumber');
var notify          = require('gulp-notify');
 var twig        = require('gulp-twig');
var stripCode   = require('gulp-strip-code');

gulp.task('twig', function () {
    return gulp.src(config.twig.input.file)
        .pipe(twig())
        .pipe(gulp.dest(config.twig.output.path));
});

var reportError = function (error) {
    notify().write(error);
    console.log(error);
    this.emit('end');
};

gulp.task('paragraphs', function () {
    return gulp.src(config.twig.input.paragraphs)
        .pipe(stripCode({
            pattern: /({# test-code #}\n?)[\s\S]*?({# test-code-end #}\n?)/g
        }))
        .pipe(gulp.dest(config.twig.output.paragraphs));
});
