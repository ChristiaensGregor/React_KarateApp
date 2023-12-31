import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "aj3a25",
  viewportWidth: 1000,
  viewportHeight: 660,
  e2e: {
    baseUrl: "http://localhost:3000/",
    retries: 2,
    video: false,
    screenshotOnRunFailure: true,
    experimentalRunAllSpecs: true,
  },
});
