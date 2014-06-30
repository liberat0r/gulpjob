
/**
 * Full build
 */

var build = function () {

	gulp.task('build', ['js', 'build_compass', 'image_min'], function(){
	    return gulp.start('clean');
	});

};

/**
 * Compass build
 *
 * SCSS needs to be run after spriting in order for the sprites scss to be added into the compilation
 */

var build_compass = function () {

	gulp.task('build_compass', ['sprites'], function(){
	    return gulp.start('scss');
	});

}

module.exports.build = build;
module.exports.build_compass = build_compass;