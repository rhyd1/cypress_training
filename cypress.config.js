const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify")

async function setupNodeEvents(on, config)
{
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on('file:preprocessor', browserify.default(config));
  return config
}

module.exports = defineConfig({
  e2e: {
    includeShadowDom: true,
    baseUrl: 'https://www.lambdatest.com/selenium-playground/',
    viewportHeight: 900,
    viewportWidth: 1400,
    defaultCommandTimeout: 10000,
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
