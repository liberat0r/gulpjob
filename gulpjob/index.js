"use strict";

var gulp = global.gulp = require('./config/includes').gulp;
var gulpPlugin = global.gulpPlugin = require('./config/includes').gulpPlugin;

// Files & Paths
var basepath = global.basePaths = require('./config/paths').basePaths;
var files = global.files = require('./config/paths').files;
var paths = global.paths = require('./config/paths').paths;
var watchFiles = global.watchFiles = require('./config/paths').watchFiles;

var changeEvent = global.changeEvent = function(evt) {
	gulpPlugin.notify('[watcher] File ' + evt.path + ' was ' + evt.type + ', compiling...');
};

var displayError = global.displayError = function(error) {
	var errorString = '[' + error.plugin + ']';

	errorString += ' ' + error.message.replace("\n", '');
	if (error.fileName)
		errorString += ' in ' + error.fileName;
	if (error.lineNumber)
		errorString += ' on line ' + error.lineNumber + '.';

	gulpPlugin.notify({
		title  : "Gulp Error",
		message: errorString
	});
};

// Register tasks
require('./tasks/js').js();
require('./tasks/js').js_hint();
require('./tasks/js').js_concat();
require('./tasks/js').js_minify();
require('./tasks/scss').scss();
require('./tasks/scss').scss_compile();
require('./tasks/scss').scss_minify();
require('./tasks/sprites').sprites();
require('./tasks/sprites').create_sprites();
require('./tasks/sprites').rename_sprites();
require('./tasks/clean')();
require('./tasks/build').build();
require('./tasks/build').build_compass();
require('./tasks/images')();

// watch = default
require('./tasks/default')();