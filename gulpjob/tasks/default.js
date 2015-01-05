// Watchers

var watch = function() {
	gulp.task('default', function() {


		gulpPlugin.browserSync.init([paths.dist.css + '/*.css', paths.dist.js + '/*.js'], {});

		gulpPlugin.gulpWatch(watchFiles.js, function(files, cb) {
			gulp.start('js', cb);
		});


		gulpPlugin.gulpWatch(watchFiles.sprites, function(files, cb) {
			gulp.start('sprites', cb);
		});


		gulpPlugin.gulpWatch(watchFiles.scss, function(files, cb) {
			gulp.start('scss', cb);
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