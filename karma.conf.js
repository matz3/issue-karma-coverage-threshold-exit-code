module.exports = function(config) {
    config.set({
        basePath: "./",
        plugins: [
            require("karma-chrome-launcher"),
            require("karma-coverage")
        ],
        files: ["test/test.js"],
        preprocessors: {
			"test/test.js": ["coverage"]
		},
        coverageReporter: {
			check: {
				each: {
					statements: 100
				}
			}
        },
        singleRun: true,
        browsers: ["ChromeHeadless"],
        reporters: ["progress", "coverage"],
        logLevel: "DEBUG"
    });
};
