
/**
 * @task sass
 * @usage $ gulp sass
 * Compiles sass files
 */

var gulp            = require('gulp');
var config          = require('../config');
var autoprefixer    = require('gulp-autoprefixer');
var browserSync     = require('browser-sync');
var ignore          = require('gulp-ignore');
var notify          = require('gulp-notify');
var path            = require('path'); //extracts the file name and not the path
var plumber         = require('gulp-plumber');
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');
var reload          = browserSync.reload;


reportError = function (error) {
    sassfile = path.basename(error.file)
    notify({
       title: 'Error: [' + error.plugin + '] ' + sassfile,
       message: 'LINE:' + error.line,
       sound: 'Funk',
     }).write(error);
     console.log(config.chalkStyles.eTitle.white.bgRed('REPORT : Error in ' + error.plugin) + '\n' + config.chalkStyles.eTitle('FILE: ') + config.chalkStyles.eMsg(sassfile) + '\n' + config.chalkStyles.eTitle('LINE: ') + config.chalkStyles.eMsg(error.line )+ '\n' + config.chalkStyles.eTitle('MESSAGE: ') + config.chalkStyles.eMsg(error.message ));
    this.emit('end');
};


gulp.task('sass', function () {
    return gulp.src(config.sass.input.path+config.sass.input.file)
    .pipe(plumber({
      errorHandler : reportError
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed',
        precision: 14,
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(browserSync.stream())
    .pipe(gulp.dest(config.sass.output.path))
    .pipe(ignore.exclude('*.map'))
});
