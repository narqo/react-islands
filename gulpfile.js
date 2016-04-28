'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const rename = require('gulp-rename');
const connect = require('connect');
const serveStatic = require('serve-static');
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
    'Popup',
    'Icon'
];

function onError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('default', ['connect', 'examples', 'watch']);

gulp.task('connect', () => {
    var app = connect();
    app.use(serveStatic('.', {
        etag: false,
        lastModified: false
    }));
    app.listen(3000);
});

gulp.task('examples', () => {
    blocks.forEach(name => {
        browserify({
            entries: `blocks/${name}/examples.js`,
            standalone: 'Example',
            debug: true
        })
            .transform('babelify')
            .transform(globalShim)
            .bundle()
            .on('error', onError)
            .pipe(source('index.js'))
            .pipe(gulp.dest(`build/${name}`));

        gulp
            .src('jade/examples.jade')
            .pipe(jade({
                locals: { name }
            }))
            .on('error', onError)
            .pipe(rename('index.html'))
            .pipe(gulp.dest(`build/${name}`));

    });

    gulp
        .src('jade/examples-toc.jade')
        .pipe(jade({
            locals: { blocks }
        }))
        .on('error', onError)
        .pipe(rename('index.html'))
        .pipe(gulp.dest('build'));
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

