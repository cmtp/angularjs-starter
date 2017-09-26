var fs = require('fs'),
    gulp = require('gulp'),
    debug = require('gulp-debug'),
    connect = require('gulp-connect'),
    historyApiFallback = require("connect-history-api-fallback"),
    sass = require("gulp-sass"),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    html2js = require('gulp-html2js'),
    ngAnnotate = require('gulp-ng-annotate');
    data = require('./gulp-config.json');
    
/**
 * @desc Server of development task
 */
gulp.task('server', function() {
    connect.server({
        root: './src',
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
gulp.task('scss', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/css'))
        .pipe(connect.reload());
});
/**
 * @desc task to watch js files changed
 */
gulp.task('js', function() {
    gulp.src(data.js)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js', {newLine: ';'}))
        .pipe(ngAnnotate({
            add: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/js/dist'))
        .pipe(connect.reload());
});
/**
 * @desc concat all vendors in a single file
 */
gulp.task('js:vendor', function() {
    return gulp.src(data.vendors.js)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/js/dist'));
});
/**
 * @desc min all 
 */
gulp.task('jsmin', function() {
    gulp.src(data.js)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js', {newLine: ';'}))
        .pipe(ngAnnotate({
            add: true
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js/dist'))
        .pipe(connect.reload());
});
/**
 * @desc min concat all vendors in a single file
 */
gulp.task('jsmin:vendor', function() {
    return gulp.src(data.vendors.js)
        .pipe(debug())
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js/dist'));
});

/**
 * @desc task to watch html files changed
 */
gulp.task('html', function() {
    gulp.src('src/js/app/**/*.html')
        .pipe(html2js('templates.js', {
            adapter: 'angular',
            base: 'src/js/app',
            name: 'app.templates'
        }))
        .pipe(gulp.dest('./src/js/dist/'))
        .pipe(connect.reload());
});
/**
 * @desc Watch all changes in development environment
 */
gulp.task('watch', function() {
    gulp.watch(['./src/**/*.tmpl.html'], ['html']);
    gulp.watch(['./src/js/app/**/*.js'], ['js']);
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});
/**
 * @desc task default
 */
gulp.task('default',
['html', 'scss', 'js:vendor', 'js', 'server', 'watch']
);