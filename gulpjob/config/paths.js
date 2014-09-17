// Files & Paths
var basePaths = {
	/* do not add ./ in front of paths below if you want
	 gulp-watch to detect new files that are being created */

	main: 'phonegap/src/',
	dist: 'phonegap/',
};

var files = {

	src: {
		compiled_js: basePaths.dist + '/js/scripts.js',
		js         : basePaths.main + 'js/**/!(_*.js)',
		js_hint    : basePaths.main + 'js/*.js',
		scss       : basePaths.main + 'scss/main.scss'
	}

};

var paths = {

	src: {
		scss           : basePaths.main + 'scss/',
		sourcemaps_root: '/'
	},

	dist: {
		js : basePaths.dist + 'js',
		css: basePaths.dist + 'css'
	}

};

var watchFiles = {
	scss: basePaths.dist + 'src/scss/**/*.scss',
	js  : basePaths.dist + 'src/js/**/*.js'
}

module.exports.basePaths = basePaths;
module.exports.files = files;
module.exports.paths = paths;
module.exports.watchFiles = watchFiles;