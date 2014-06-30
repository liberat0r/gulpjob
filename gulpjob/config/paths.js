// Files & Paths
var basePaths = {
    main: './app/webroot/src/',
    dist: './app/webroot/',
};

var files = {

    clean: basePaths.dist + 'css/generate_sprites.css',

    src: {
	    images: basePaths.dist + '/files/src/**/*',
        compiled_js: basePaths.dist + '/js/scripts.js',
        js: basePaths.main + 'js/**/*.js',
        scss: basePaths.main + 'sass/main.scss',
        sprites: basePaths.main + 'sass/generate_sprites.scss',
        sprites_compiled: basePaths.dist + 'css/generate_sprites.css',
    },

};

var paths = {

    src: {
        scss: basePaths.main + 'sass/',
        sprites: basePaths.dist + '/img',
        sourcemaps_root: '/'
    },

    dist: {
	    images: basePaths.dist + 'files',
        js: basePaths.dist + 'js',
        css: basePaths.dist + 'css',
        sprites_scss: basePaths.main + 'sass',
    },

};

module.exports.basePaths    = basePaths;
module.exports.files        = files;
module.exports.paths        = paths;