'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
const jade = require('gulp-jade');
//  Заменяем require('react') на React, а require('react-dom') на ReactDOM.
//  Что позволяет не собирать отдельно vendor.js, а просто подключать готовые сборки React'а.
const globalShim = require('browserify-global-shim')
    .configure({
        'react': 'React',
        'react-dom': 'ReactDOM'
    });

const blocks = [
    'Button',
    'Link',
    'RadioGroup',
    'CheckboxGroup',
    'TextInput',
    'Popup'
];

gulp.task('default', ['connect', 'examples', 'watch']);

gulp.task('connect', () => {
    connect.server({
        root: '.',
        port: 3000,
        //  livereload: true
    });
});

gulp.task('examples', () => {
    blocks.forEach(name => {
        const bundle = browserify({
            entries: `blocks/${name}/examples.js`,
            standalone: 'Example',
            debug: true
        });

        bundle
            .transform('babelify')
            .transform(globalShim)
            .bundle()
            .pipe(source('index.js'))
            .pipe(gulp.dest(`build/${name}`));

        gulp
            .src('jade/examples.jade')
            .pipe(jade({
                locals: { name }
            }))
            .pipe(rename('index.html'))
            .pipe(gulp.dest(`build/${name}`));

    });

    gulp
        .src('jade/examples-toc.jade')
        .pipe(jade({
            locals: { blocks }
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('build'));

    //  FIXME: Как-то очень медленно работает livereload.
    //  gulp.src('./**/*.html')
    //      .pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch(
        [
            'blocks/**/*.js',
            'jade/*.jade'
        ],
        ['examples']
    );
});

