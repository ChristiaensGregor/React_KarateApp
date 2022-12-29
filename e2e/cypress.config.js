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
      reportDir: "cypress/reports",
      overwrite: false,
      charts: true,
      autoOpen: true,
      reportFilename: "[name]-[datetime]-report-[status]",
    },
  },
});
