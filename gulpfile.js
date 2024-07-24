const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');

gulp.task('styles', () => {
    return gulp.src('scss/main.scss')  // Adjusted to point to main.scss
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('css')); 
});

gulp.task('minify', () => {
    return gulp.src('css/*.css') 
        .pipe(minify({ ext: { min: '.min.css' } }))
        .pipe(gulp.dest('css')); 
});

gulp.task('default', gulp.series('styles', 'minify'));

gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', gulp.series('styles', 'minify'));  // Watch for changes in all SCSS files
});
