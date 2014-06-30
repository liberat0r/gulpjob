
// Watchers

var watch = function(){
    gulp.task('default', function () {
        // Build
        gulp.start('build');

	    // Images
	    gulp.watch(basePaths.dist + 'files/src/**/*', ['image_min']).on('change', function (evt) {
		    changeEvent(evt)
	    });

        // SCSS
        gulp.watch(basePaths.dist + 'src/sass/**/*.scss', ['scss']).on('change', function (evt) {
            changeEvent(evt)
        });

        // Sprites
        gulp.watch(basePaths.dist + 'img/icons/*.png', ['sprites', 'rename_sprites', 'clean']).on('change', function (evt) {
            changeEvent(evt)
        });

        // JS
        gulp.watch(basePaths.dist + 'src/js/**/*.js', ['js', 'jsminify']).on('change', function (evt) {
            changeEvent(evt)
        });

    });
};

module.exports = watch;