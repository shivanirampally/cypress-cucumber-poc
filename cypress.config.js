const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "https://reqres.in/api",
    specPattern: "cypress/e2e/**/*.cy.js"
  }

});