/*global exports*/
exports.config = {
	capabilities: {
		'browserName': 'chrome'
	},
	'specs': ['Specs/*.md'],
	daSpecOptions: {
		'specs': ['DaSpec/Specs/*.md'],
		'steps': ['DaSpec/Steps/**/*.js'],
		'formatters': ['daspec/formatters/console', 'daspec/formatters/markdown-files'],
		'output-dir': 'daspec-output',
		encoding: 'utf8'
	},
	baseUrl: 'http://localhost:8081/',
	framework: 'custom',
	frameworkPath: '../node_modules/daspec-js-protractor-driver/lib/daspec-protractor-driver.js'
};
