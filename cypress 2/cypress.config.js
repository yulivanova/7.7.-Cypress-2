const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "dh37n2",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});