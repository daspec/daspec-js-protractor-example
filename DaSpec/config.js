/**
 * Created by PhilBeadle on 10/09/15.
 */
var configHelper = require('./configHelper.js');

exports.config = {
  onPrepare: function () {
    configHelper.setUpConfigGlobals();
  },
  capabilities: {
    'browserName': 'chrome'
  },
  "specs": ["Specs/*.md"],
  "daSpecOptions": {
    "specs": ["DaSpec/Specs/*.md"],
    "steps": ["DaSpec/Steps/**/*.js"],
    "output-dir": "daspec-output"
  },
  baseUrl: 'http://localhost:8081/',

  framework: 'custom',
  frameworkPath: '../node_modules/protractor/lib/frameworks/daspec.js'
};
