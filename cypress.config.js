const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here


    },

    baseUrl: 'https://mostly.ai'

  },
  "trashAssetsBeforeRuns": true,
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/report/mochawesome-report",
    "overwrite":false,
    "html": true,
    "json":false,
  }
});



