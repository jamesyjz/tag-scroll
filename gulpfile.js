var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create();

// Watch
gulp.task('watch', function() {
    gulp.watch("css/*.css").on("change", browserSync.reload);
    gulp.watch("js/*.js").on("change", browserSync.reload);
    gulp.watch("*.html").on("change", browserSync.reload);
});

// Browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            startPath: '/index.html'
        }
    });
});

gulp.task('css', function () {
    // 1. 找到文件
    gulp.src('css/*.css')
        .pipe(concat('screen.css'))
        // 2. 压缩文件
        .pipe(minify())
        // 3. 另存为压缩文件
        .pipe(gulp.dest('css'));
});

gulp.task('js', function() {
    return gulp.src(['lib/zepto/zepto.min.js','js/rem.js','js/region.js','js/common.js','js/j-mobile.js'])
        .pipe(concat('widget.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('uf', ['js','css']);

// Default
gulp.task('default', ['watch', 'browser-sync']);