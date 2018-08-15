var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

gulp.task('script', function (cb) {
    pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ], cb)
});

gulp.task('minicss', function () {
    pump([
        gulp.src('css/*.css'),
        minifyCSS(),
        gulp.dest('dist/css')
    ])
})

gulp.task('imagemin', function () {
    pump([
        gulp.src('images/*.*'),
        imagemin({ progressive: true }),
        gulp.dest('dist/images')
    ])
})

gulp.task('auto', function () {
    gulp.watch('js/*.js', ['script']);
    gulp.watch('css/*.css', ['minicss']);
    gulp.watch('images/*.*', ['imagemin']);

})

gulp.task('default', ['script', 'minicss', 'imagemin', 'auto']);
