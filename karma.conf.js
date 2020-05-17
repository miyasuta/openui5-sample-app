process.env.CHROME_BIN = require('puppeteer').executablePath()
module.exports = function(config) {
	"use strict";

	var chromeFlags = [
		"--window-size=1280,1024"
	];

	config.set({

		frameworks: ["ui5"],

		browsers: ["CustomChrome"],

		browserConsoleLogOptions: {
			level: "error"
		},

		customLaunchers: {
			CustomChrome: {
				base: "Chrome",
				flags: ['--no-sandbox']
			},
			CustomChromeHeadless: {
				base: "ChromeHeadless",
				flags: ['--no-sandbox']
			}
		},

	});
};
