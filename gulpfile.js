'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const rename = require('gulp-rename');
const connect = require('gulp-connect');

const vendor = [
    'react',
    'react-dom'
];

const blocks = [
    'Button',
    'RadioGroup',
    'CheckboxGroup'
];

gulp.task('default', ['connect', 'vendor', 'examples', 'watch']);

gulp.task('connect', () => {
    connect.server({
        root: 'build',
        port: 3000,
        //  livereload: true
    });
});

gulp.task('vendor', () => {
    browserify({
        require: vendor,
        debug: true
    })
        .bundle()
        .pipe(source('vendor.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('examples', () => {
    blocks.forEach(name => {
        const bundle = browserify({
            entries: `blocks/${name}/examples.js`,
            debug: true
        });

        vendor.forEach(id => bundle.external(id));

        bundle
            .transform('babelify')
            .bundle()
            .pipe(source('index.js'))
            .pipe(gulp.dest(`build/${name}`));

        gulp
            .src('src/examples.html')
            .pipe(rename('index.html'))
            .pipe(gulp.dest(`build/${name}`));

    });

    //  FIXME: Как-то очень медленно работает livereload.
    //  gulp.src('./**/*.html')
    //      .pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch(
        [
            'blocks/**/*.js',
            'src/examples.html'
        ],
        ['examples']
    );
});

