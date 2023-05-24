// @ts-check
const path = require('path')
const {devices} = require('@playwright/test')

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type{import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  projects:[
    {
      name: "chrome",
      use: {...devices['Desktop Chrome']}
    }
  ],
  webServer: {
    port: 9900,
    command: 'npm run start',
  },
  // Test directory
  testDir: path.join(__dirname, 'tests'),
};
module.exports = config;
