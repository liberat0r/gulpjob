
// Watchers

var watch = function(){
    gulp.task('default', function () {
        // Build
        //gulp.start('build');

/*	    // Images
	    gulp.watch(watchFiles.images, ['image_min']).on('change', function (evt) {
		    changeEvent(evt)
	    });

        // SCSS
        gulp.watch(watchFiles.scss, ['scss']).on('change', function (evt) {
            changeEvent(evt)
        });

        // Sprites
        gulp.watch(watchFiles.sprites, ['sprites', 'rename_sprites', 'clean']).on('change', function (evt) {
            changeEvent(evt)
        });

        // JS
        gulp.watch(watchFiles.js, ['js']).on('change', function (evt) {
            changeEvent(evt)
        });*/

/*        gulpPlugin.gulpWatch({ glob: '' })
            .pipe(plumber())
            .pipe(anotherPlugin(opts))
            .pipe(gulp.dest('./html'));*/

    });
};

module.exports = watch;