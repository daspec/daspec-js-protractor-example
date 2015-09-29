/**
 * Created by PhilBeadle on 10/09/15.
 */
exports.config = {
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
    frameworkPath: '/Projects/DaSpec/node_modules/protractor/lib/frameworks/daspec.js'
};
