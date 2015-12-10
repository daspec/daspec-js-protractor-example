/*global exports*/
exports.config = {
	capabilities: {
		'browserName': 'chrome'
	},
	'specs': ['Specs/friends-list.md'],
	daSpecOptions: {
		'specs': ['DaSpec/Specs/friends-list.md'],
		'steps': ['DaSpec/Steps/**/*.js'],
		'formatters': ['daspec/formatters/console', 'daspec/formatters/markdown-files'],
		'output-dir': 'daspec-output',
		encoding: 'utf8'
	},
	baseUrl: 'http://127.0.0.1:8080/',
	framework: 'custom',
	frameworkPath: '../node_modules/daspec-protractor-adapter/lib/daspec-protractor-driver.js'
};
