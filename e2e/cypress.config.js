const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "aj3a25",
  e2e: {
    baseUrl: "http://localhost:3000/",
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    video: false,
    screenshotOnRunFailure: false,
    retries: 5,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "../reporting/specs",
      overwrite: true,
      charts: true,
      autoOpen: false,
      html: false,
      reportFilename: "[name]-report-[status]",
    },
  },
});
