'use strict';

const path = require('path');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const globalShim = require('browserify-global-shim');
const glob = require('glob');
const gulp = require('gulp');
const changed = require('gulp-changed');
const jade = require('gulp-jade');
const rename = require('gulp-rename');
const gutil = require('gulp-util');
const merge = require('merge-stream');
const source = require('vinyl-source-stream');
const watchify = require('watchify');

const examples = glob.sync('blocks/**/examples.js');

const blockName = file => path.basename(path.dirname(file));
const dest = name => `build/${name}`;

const bundle = args => file => browserify(
    Object.assign({
        entries: file,
        debug: true,
    }, args))
    .transform('babelify')
    .transform(globalShim.configure({
        'react': 'React',
        'react-dom': 'ReactDOM',
    }));

function bundleExamples(task) {
    return examples.reduce((stream, example) => {
        const next = task(blockName(example), example);
        if (typeof next !== 'undefined') {
            stream.add(next);
        }
        return stream;
    }, merge());
}

function bundleJs(name, bundler) {
    return bundler
        .bundle()
        .on('error', gutil.log)
        .pipe(source('index.js'))
        .pipe(gulp.dest(dest(name)))
        .pipe(browserSync.stream());
}

function bundleHtml(name) {
    const destPath = dest(name);
    return gulp.src('templates/examples.jade')
        .pipe(jade({
            locals: { block: name },
        }))
        .on('error', gutil.log)
        .pipe(rename('index.html'))
        .pipe(changed(destPath))
        .pipe(gulp.dest(destPath));
}

gulp.task('examples-js', () => {
    const bundler = bundle({ standalone: 'Example' });
    return bundleExamples((name, file) => {
        return bundleJs(name, bundler(file));
    });
});

gulp.task('examples-html', () => {
    return bundleExamples((name, file) => {
        return bundleHtml(name);
    });
});

gulp.task('examples-toc', () => {
    const blocks = examples.map(blockName);
    return gulp.src('templates/examples-toc.jade')
        .pipe(jade({
            locals: { blocks }
        }))
        .on('error', gutil.log)
        .pipe(rename('index.html'))
        .pipe(changed('build'))
        .pipe(gulp.dest('build'));
});

gulp.task('examples', gulp.series('examples-toc', 'examples-html', 'examples-js'));

gulp.task('watch-js', () => {
    const bundler = bundle(Object.assign({ standalone: 'Example' }, watchify.args));
    bundleExamples((name, file) => {
        const watcher = watchify(bundler(file));
        bundleJs(name, watcher);
        watcher.on('update', () => bundleJs(name, watcher));
        watcher.on('log', gutil.log);
    });
});

gulp.task('watch-html', () => {
    gulp.watch([
        'blocks/**/*.js',
        'templates/*.jade',
    ], gulp.parallel('examples-toc', 'examples-html'));
});

gulp.task('watch', gulp.parallel('watch-js', 'watch-html'));

gulp.task('serve', done => {
    browserSync({
        server: {
            baseDir: '.',
        },
        notify: false,
        open: false,
    }, done);
});

gulp.task('default', gulp.series('examples', 'serve', 'watch'));
