process.env.CHROME_BIN = require('puppeteer').executablePath()
module.exports = function(config) {
	"use strict";

	console.log("CHROME_BIN: " + process.env.CHROME_BIN);

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
				flags: chromeFlags
			},
			CustomChromeHeadless: {
				base: "ChromeHeadless",
				flags: ['--disable-web-security', '--no-sandbox']
			}
		},

	});
};
