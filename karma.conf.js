module.exports = function (config) {
    config.set({

        basePath: 'app/',

        files: [
            'bower/angular/angular.js',
            'bower/angular-route/angular-route.js',
            'bower/angular-resource/angular-resource.js',
            'bower/angular-mocks/angular-mocks.js',
            'app.js',
            'components/**/*.js',
            'pizza/**/*.js',
            'pizza/*.html'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-teamcity-reporter',
            'karma-ng-html2js-preprocessor'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'pizza/*.js': ['coverage'],
            'pizza/*.html':['ng-html2js']
        }

    });
};
