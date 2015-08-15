exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:63342/Pizza/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  onPrepare: function() {
    var reporters=require('jasmine-reporters');
    jasmine.getEnv().addReporter(new reporters.TeamCityReporter());
  }
};
