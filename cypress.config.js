const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://nexdom.tec.br",
    setupNodeEvents(on, config) {
      
    },
  },
});
