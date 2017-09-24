var gulp = require('gulp'),
    connect = require('gulp-connect'),
    historyApiFallback = require("connect-history-api-fallback"),
    sass = require("gulp-sass"),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify');

/**
 * @desc Server of development task
 */
gulp.task('server', function() {
    connect.server({
        root: './app',
        hostname: '0.0.0.0',
        port: 8085,
        livereload: true,
        middleware: function(connect, opt) {
            return [ historyApiFallback() ];
        }
    });
});
/**
 * @desc Task of compile and watch sass to css
 */
gulp.task('sass', function () {
    return gulp.src('./app/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/css'))
        .pipe(connect.reload());
});
/**
 * @desc task to watch js files changed
 */
gulp.task('js', function() {
    gulp.src('./app/js/**/*.js')
        .pipe(connect.reload());
});
/**
 * @desc task to watch html files changed
 */
gulp.task('html', function() {
    gulp.src('./app/**/*.html')
        .pipe(connect.reload());
});