// Watchers

var watch = function() {
	gulp.task('default', function() {

		gulpPlugin.browserSync.init([paths.dist.css + '/*.css', paths.dist.js + '/*.js'], {
		});

		gulpPlugin.gulpWatch(watchFiles.scss,
			function() {
				gulp.start('scss');
			});

		gulpPlugin.gulpWatch(watchFiles.js,
			function() {
				gulp.start('js');
			});

		// init build
		gulp.start('build');

	});
};

module.exports = watch;
