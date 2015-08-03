var gulp = require('gulp'),
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

// Default
gulp.task('default', ['watch', 'browser-sync',]);