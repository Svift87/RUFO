const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const less = require('gulp-less');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const notify = require("gulp-notify");
const del = require('del');

gulp.task('less', function(){
    return gulp.src('src/less/**/*.less')
    .pipe(less().on('error', notify.onError()))
    .pipe(autoprefixer(['last 15 version']))
    .pipe(gulp.dest('src/css'))    
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('images', function(){
    return gulp.src('src/img/**/*')
    .pipe(imagemin([
        imagemin.jpegtran({
            progressive: true
        }),
        imagemin.optipng({
            optimizationLevel: 5
        })
    ]))
    .pipe(gulp.dest('dist/img'))
});

gulp.task('scripts', function () {
    return gulp.src([
        'src/js/script.js'
    ])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        },
        notify: false
    });
});

gulp.task('watch', ['server'], function() {
    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/img/**/*', browserSync.reload);
    gulp.watch('src/**/*.html', browserSync.reload);
});

gulp.task('del', function() {
    del(['dist']);
})

gulp.task('build', ['del', 'less', 'images'], function () {
    return gulp.src([
        'src/**/*.html',
        'src/**/*.all.js',
        'src/**/*.css',
        'src/**/*.woff',
        'src/**/*.woff2',
        'src/**/*.ttf',
        'src/**/*.eot',
        'src/**/*.js'
    ])
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['watch']);