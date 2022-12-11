const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    experimentalStudio: true,
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
