const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src('sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('css'));
}); 

gulp.task('default', function() {
    gulp.watch(['sass/main.scss', 'sass/**/*.scss'], ['sass']);
});