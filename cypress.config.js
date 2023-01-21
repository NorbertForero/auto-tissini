const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/',
    specPattern: 'cypress/e2e/ts-Autoconversión/tests/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    failOnStatusCode: false,
    viewportWidth: 390,
    viewportHeight: 844,
  },
});
