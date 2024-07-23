const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');

// Task to compile SCSS to CSS
gulp.task('styles', () => {
    return gulp.src('scss/*.scss') // Source SCSS files
       .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
       .pipe(gulp.dest('css')); // Output CSS to the css folder
});

// Task to minify CSS files
gulp.task('minify', () => {
    return gulp.src('css/*.css') // Minify CSS files in the css folder
        .pipe(minify({ ext: { min: '.min.css' } }))
        .pipe(gulp.dest('css')); // Output minified CSS to the css folder
});

// Default task to run both 'styles' and 'minify'
gulp.task('default', gulp.series('styles', 'minify'));

// Watch task to monitor changes in SCSS files
gulp.task('watch', () => {
    gulp.watch('scss/*.scss', gulp.series('styles'));
});
