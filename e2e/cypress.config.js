const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "aj3a25",
  e2e: {
    baseUrl: "http://localhost:3000/",
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
