const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "aj3a25",
  e2e: {
    baseUrl: "http://localhost:3000/",
    retries: 2,
    video: false,
    screenshotOnRunFailure: false,
  },
});
