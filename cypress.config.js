const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://chorusqa.cogninelabs.com",
    specPattern: "**/*.feature",

    // ✅ Stability
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 20000,
    requestTimeout: 30000,
    responseTimeout: 30000,

    // ✅ Microsoft login support
    chromeWebSecurity: false,

    // Optional
    video: false,
    screenshotOnRunFailure: true,

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },
  },

  // 🔐 Only NON-SENSITIVE config here
  env: {
    // optional flags
    loginType: "token"
  },

});