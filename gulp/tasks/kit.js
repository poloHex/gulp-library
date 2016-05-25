/**
 * @task kit
 * Compiles kit files
 */

var gulp            = require('gulp');
var config          = require('../config');
var kit             = require('gulp-kit');
var notify          = require('gulp-notify');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');
var reload          = browserSync.reload;


kitError = function (error) {
  notify({
     title: 'Error: [' + error.plugin + ']',
     message: error.message + 'File: ' + error.Line,
     sound: 'Funk',
   }).write(error);
   console.log(config.chalkStyles.eTitle.white.bgRed('REPORT : Error in ' + error.plugin ) + '\n' + config.chalkStyles.eTitle('MSG: ') + config.chalkStyles.eMsg(error.message) + '\n' );
  this.emit('end');
};


gulp.task('kit', function () {
    return gulp.src(config.kit.input.file)
    .pipe(plumber({
      errorHandler : kitError
    }))
    .pipe(kit({compilePartials : false}))
    .pipe(browserSync.stream())
    .pipe(gulp.dest(config.kit.output.path));
});
