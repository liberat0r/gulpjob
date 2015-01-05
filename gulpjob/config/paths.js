// Files & Paths
var basePaths = {
	/* do not add ./ in front of paths below if you want
	 gulp-watch to detect new files that are being created */

	main: 'app/webroot/src/',
	dist: 'app/webroot/',
};

var files = {

	clean: basePaths.dist + 'css/generate_sprites.css',

	src: {
		images          : basePaths.dist + 'src/files/**/*',
		compiled_js     : basePaths.dist + 'js/!(*.min*)', // does not minify files that reside in folders
		js              : basePaths.main + 'js/**/!(_*.js)',
		js_hint         : basePaths.main + 'js/*.js', // only hints files that are not in folders
		scss            : [basePaths.main + 'scss/**/!(_*.scss)', '!' + basePaths.main + 'scss/generate_sprites.scss'],
		sprites         : basePaths.main + 'scss/generate_sprites.scss',
		sprites_compiled: basePaths.dist + 'css/generate_sprites.css'
	}

};

var paths = {

	src: {
		scss           : basePaths.main + 'scss/',
		sprites        : basePaths.dist + '/img',
		sourcemaps_root: '/'
	},

	dist: {
		images      : basePaths.dist + 'files',
		js          : basePaths.dist + 'js',
		css         : basePaths.dist + 'css',
		sprites_scss: basePaths.main + 'scss'
	}

};

var watchFiles = {
	images : basePaths.dist + 'files/src/**/*',
	scss   : basePaths.dist + 'src/scss/**/*.scss',
	sprites: basePaths.dist + 'img/icons/*.png',
	js     : basePaths.dist + 'src/js/**/*.js'
}

module.exports.basePaths = basePaths;
module.exports.files = files;
module.exports.paths = paths;
module.exports.watchFiles = watchFiles;