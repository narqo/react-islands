'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const rename = require('gulp-rename');

const vendor = [
    'react',
    'react-dom'
];

const blocks = [
    'Button'
];

gulp.task('default', ['vendor', 'examples', 'watch']);

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
});

gulp.task('watch', () => {
    gulp.watch(
        [
            'blocks/**/index.js',
            'blocks/index.js'
        ],
        ['library']
    );

    gulp.watch(
        [
            'blocks/**/examples.js'
        ],
        ['examples']
    );
});

