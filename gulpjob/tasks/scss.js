/**
 * Compile CSS file from scss
 *
 * @src SCSS file that imports the rest
 * @dest CSS file and minified CSS file
 */
/*

 var scss = function () {

 gulp.task('scss', function(){
 return gulp.src(files.src.scss)
 .pipe(gulpPlugin.gulpPlumber({
 errorHandler: displayError
 }))
 .pipe(gulpPlugin.compass({
 css: paths.dist.css,
 sass: paths.src.scss,
 image: paths.src.sprites
 }))
 .pipe(gulpPlugin.autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
 .pipe(gulp.dest(paths.dist.css))
 .pipe(gulpPlugin.rename({ suffix: '.min' }))
 .pipe(gulpPlugin.minifyCSS())
 .pipe(gulp.dest(paths.dist.css))
 .pipe(gulpPlugin.notify("SCSS Recompiled"));
 });
 };
 */

/**
 * Compile CSS file from scss with libsass
 *
 * @src SCSS file that imports the rest
 * @dest CSS file and minified CSS file
 */

var scss = function() {

	gulp.task('scss', function() {
		return gulp.src(files.src.scss)
			.pipe(gulpPlugin.gulpPlumber({
				errorHandler: displayError
			}))
			.pipe(gulpPlugin.sass({
				onError: function(err) {
					console.log(err);
				}
			}))
			.pipe(gulpPlugin.autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
			.pipe(gulp.dest(paths.dist.css))
			.pipe(gulpPlugin.rename({suffix: '.min'}))
			.pipe(gulpPlugin.minifyCSS())
			.pipe(gulp.dest(paths.dist.css))
			.pipe(gulpPlugin.notify({
				message: "SCSS (lib) Recompiled",
				onLast : true
			}));
	});
};

module.exports = scss;