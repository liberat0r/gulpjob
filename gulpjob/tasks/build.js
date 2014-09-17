/**
 * Full build
 */

var build = function() {

	gulp.task('build', ['js', 'build_compass'], function() {
		return gulp.start('scss');
	});

};

module.exports.build = build;