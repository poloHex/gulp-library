/**
* Build Script (WIP)

* Requirements
* gulp-plumber: https://github.com/floatdrop/gulp-plumber
* gulp-notify: https://github.com/mikaelbr/gulp-notify

**/


var gulp            = require('gulp');
var config          = require('../config');
var autoprefixer    = require('gulp-autoprefixer');
var sourcemaps      = require('gulp-sourcemaps');
var sass            = require('gulp-sass');
var ignore          = require('gulp-ignore');
var notify          = require('gulp-notify');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');
var reload          = browserSync.reload;
