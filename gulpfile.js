var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function (done) {
    gulp.src(['src/ui/**/*.scss', '!src/ui/styling/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/ui/'));
    done();
});

gulp.task('watch', () => {
    gulp.watch('src/ui/**/*.scss', gulp.series('sass'));
    // Other watchers
});
