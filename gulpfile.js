"use strict";

var gulp       = global.gulp        = require('./config/includes').gulp;
var gulpPlugin = global.gulpPlugin  = require('./config/includes').gulpPlugin;

<<<<<<< HEAD
var stream = require('event-stream');

var gulpPlugin = {
    uglifyjs: require('gulp-uglifyjs'),
    concat_sourcemap: require('gulp-concat-sourcemap'),
    autoprefixer: require('gulp-autoprefixer'),
    clean: require('gulp-clean'),
    rename: require('gulp-rename'),
    notify: require('gulp-notify'),
    compass: require('gulp-compass'),
    minifyCSS: require('gulp-minify-css'),
};
=======
>>>>>>> 5ab46babbf24c661bcd66b160f22ca72b76f8227
/*var gulpPlugin = require("gulp-load-plugins")({
 pattern: ['gulp-*', 'gulp.*'],
 replaceString: /\bgulp[\-.]/
 });*/

// Files & Paths
var basepath = global.basePaths   = require('./config/paths').basePaths;
var files    = global.files       = require('./config/paths').files;
var paths    = global.paths       = require('./config/paths').paths;


var changeEvent = global.changeEvent = function (evt) {
    gulpPlugin.notify( '[watcher] File ' + evt.path + ' was ' + evt.type + ', compiling...');
};

var displayError = global.displayError = function (error) {
    var errorString = '[' + error.plugin + ']';

    errorString += ' ' + error.message.replace("\n", '');
    if (error.fileName)
        errorString += ' in ' + error.fileName;
    if (error.lineNumber)
        errorString += ' on line ' + error.lineNumber + '.';

    gulpPlugin.notify(errorString)
};

// Register tasks
require('./tasks/js')();
require('./tasks/jsminify')();
require('./tasks/scss')();
require('./tasks/sprites').sprites();
require('./tasks/sprites').rename_sprites();
require('./tasks/clean')();

require('./tasks/watch')();


