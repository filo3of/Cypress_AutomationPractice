const { defineConfig } = require("cypress");

module.exports = defineConfig({
  waitForAnimations: true,
  video: false,
  defaultCommandTimeout: 20000,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
    openMode: 0,
  },

  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },

  e2e: {
    baseUrl: "http://automationpractice.com",
    setupNodeEvents(on, config) {
      require("cypress-grep/src/plugin")(config);

      return config;
    },
  },
});
