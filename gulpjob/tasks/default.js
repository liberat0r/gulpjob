// Watchers

var watch = function() {
	gulp.task('default', function() {

		/*gulp.start('build');*/

		gulpPlugin.browserSync.init([paths.dist.css + '/*.css', paths.dist.js + '/*.js'], {
		});

		gulpPlugin.gulpWatch(watchFiles.scss,
			function() {
				gulp.start('scss');
			});

		gulpPlugin.gulpWatch(watchFiles.sprites,
			function() {
				gulp.start('sprites');
			});

		gulpPlugin.gulpWatch(watchFiles.js,
			function() {
				gulp.start('js');
			});

		/**
		 * run gulp image_min to run this task on demand
		 * or uncomment to watch

		gulpPlugin.gulpWatch(watchFiles.images,
			 function(){
			    gulp.start('image_min');
			 });*/

	});
};

module.exports = watch;
