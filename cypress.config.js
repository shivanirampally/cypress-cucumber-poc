const { defineConfig } = require('cypress');

//Required to bundle feature files; Cucumber uses ESBuild internally
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

//Main Cucumber plugin; converts .feature → executable tests
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

//Connects Cucumber with ESBuild so Cypress can understand feature files
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {

    //Base URL 
    baseUrl: 'https://www.saucedemo.com',

    //Allows cross-origin requests
    chromeWebSecurity: false,

    //Now: support BOTH Cypress + Cucumber
    specPattern: [
      "cypress/e2e/**/*.cy.js",     
      "cypress/e2e/**/*.feature"    
    ],

    //Enables Cucumber
    async setupNodeEvents(on, config) {

      //Registers Cucumber plugin Without this → feature files won’t execute
      await addCucumberPreprocessorPlugin(on, config);

      //Cypress how to process feature files; Converts .feature → JS using ESBuild
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Always return config 
      return config;
    },
  },

  //Environment variables reused in cy.login()
  env: {
    username: 'standard_user',
    password: 'secret_sauce'
  }
});