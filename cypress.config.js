// cypress.config.js
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // Update to your app's base URL
    supportFile: false
  }
};
