module.exports = function (grunt) {
    "use strict"
    grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
    grunt.config.merge({ compatVersion: "1.77" });
    grunt.registerTask("buildProject", [
        "clean",
        "lint",
        "build"
    ]);

    grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-test");
    grunt.registerTask("testProject", ["test"]);
    grunt.config.merge({
        coverage_threshold: {
            statements: 0,
            branches: 100,
            functions: 0,
            lines: 0
        }
    });
};