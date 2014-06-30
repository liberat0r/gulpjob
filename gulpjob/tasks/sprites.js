
/**
 * Run spriting
 */

var sprites = function () {

    gulp.task('sprites', ['create_sprites'], function(){
        return gulp.start('rename_sprites');
    });
};

/**
 * Create sprites CSS file and merge the png files
 *
 * @src png files to be merged
 * @dest sprites CSS file
 */

var create_sprites = function () {
  
    gulp.task('create_sprites', function(){
        return gulp.src(files.src.sprites)
            .pipe(gulpPlugin.gulpPlumber())
            .pipe(gulpPlugin.compass({
                css: paths.dist.css,
                sass: paths.src.scss,
                image: paths.src.sprites,
                relative: true,
            }))
/*            .on('error', function (err) {
                displayError(err);
            })*/
            .pipe(gulpPlugin.notify("Sprites Created"));
    });
};

/**
 * Rename the sprites CSS file to SCSS and make it available for @extend
 *
 * @src sprites CSS file created from the sprite task
 * @dest sprites SCSS file
 */
var rename_sprites = function () {
    
    gulp.task('rename_sprites', function(){
        return gulp.src(files.src.sprites_compiled)
            .pipe(gulpPlugin.gulpPlumber())
            .pipe(gulpPlugin.rename({
                basename: 'sprites',
                extname: '.scss'
            }))
            .pipe(gulp.dest(paths.dist.sprites_scss));
    });
};

module.exports.sprites = sprites;
module.exports.create_sprites = create_sprites;
module.exports.rename_sprites = rename_sprites;