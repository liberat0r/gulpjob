/**
 * Full build
 */

var build = function() {

	gulp.task('build', ['js'], function() {
		return gulp.start('scss');
	});

};

module.exports.build = build;