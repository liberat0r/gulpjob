
// Watchers

var watch = function(){
    gulp.task('default', function () {

    	gulpPlugin.browserSync.init([paths.dist.css + '/*.css', paths.dist.js + '/*.js'], {
		});

	gulpPlugin.gulpWatch(watchFiles.scss,
		function(){
			gulp.start('scss');
		});

	gulpPlugin.gulpWatch(watchFiles.sprites,
		function(){
			gulp.start('sprites');
		});

	gulpPlugin.gulpWatch(watchFiles.js,
		function(){
			gulp.start('js');
		});

/*		gulpPlugin.gulpWatch(watchFiles.images,
		function(){
			gulp.start('image_min');
		});*/

    });
};

module.exports = watch;
