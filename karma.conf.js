module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['browserify', 'mocha'],
        files: [
            'blocks/**/test.js'
        ],
        preprocessors: {
            'blocks/**/*.js': ['browserify']
        },
        browserify: {
            debug: true,
            transform: [
                [
                    'babelify',
                    {
                        presets: ['es2015', 'stage-2', 'react']
                    }
                ]
            ],
            configure(bundle) {
                bundle.on('prebundle', () => {
                    bundle.external('react/lib/ReactContext');
                    bundle.external('react/lib/ExecutionEnvironment');
                });
            }
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: false,
    });
};
