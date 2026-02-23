const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
    video: false,
    specPattern: 'cypress/e2e/**/*.cy.js'
  },

  env: {
    username: 'standard_user',
    password: 'secret_sauce'
  }
});
