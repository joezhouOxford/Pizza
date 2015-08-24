exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8010/app/index-debug.html',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    onPrepare: function () {
        if (process.env.TEAMCITY_VERSION)
        {
            require('jasmine-reporters');
            jasmine.getEnv().addReporter(new jasmine.TeamcityReporter());
        }
    }
};
