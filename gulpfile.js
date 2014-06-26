"use strict";

var gulp       = global.gulp        = require('./gulp-config/includes').gulp;
var gulpPlugin = global.gulpPlugin  = require('./gulp-config/includes').gulpPlugin;

// Files & Paths
var basepath = global.basePaths   = require('./gulp-config/paths').basePaths;
var files    = global.files       = require('./gulp-config/paths').files;
var paths    = global.paths       = require('./gulp-config/paths').paths;


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
require('./gulp-tasks/js').js();
require('./gulp-tasks/js').js_concat();
require('./gulp-tasks/js').js_minify();
require('./gulp-tasks/scss')();
require('./gulp-tasks/sprites').sprites();
require('./gulp-tasks/sprites').create_sprites();
require('./gulp-tasks/sprites').rename_sprites();
require('./gulp-tasks/clean')();
require('./gulp-tasks/build').build();
require('./gulp-tasks/build').build_compass();

// watch = default
require('./gulp-tasks/default')();