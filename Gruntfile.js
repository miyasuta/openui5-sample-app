module.exports = function (grunt) {
    "use strict"
    grunt.loadNPMTasks("@sap/grunt-sapui5-bestpractice-build");
    grunt.registerTask("buildProject", [
        "clean",
        "lint",
        "build"
    ]);
};