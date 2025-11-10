const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://nexdom.tec.br",
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      
    },
  },
});
