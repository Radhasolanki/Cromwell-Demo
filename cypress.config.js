const { defineConfig } = require('cypress')

module.exports = defineConfig({
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 80000,
    reporter: 'mochawesome',
    env: {
        url: 'https://www.cromwell.co.uk/shop/abrasives/cutting/c/090901',
    },
    chromeWebSecurity: false,
    projectId: 'o7h6i1',
    retries: {
        runMode: 0,
    },
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
        specPattern: 'cypress/e2e/**/*.feature',
    },
})
