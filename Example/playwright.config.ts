import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';


export default defineConfig({
  timeout: 420000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in await expect(locator).toHaveText();
     */
    timeout: 3000
  },
  testDir: './Example/tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 2,
  /* Opt out of parallel tests on CI. */
  //  workers: process.env.CI ? 2 : undefined,
  workers: 2,


  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  reporter: [
    ['html', { outputFolder: './playwright_reports/', open: 'never' }],
    ['list'],
    ['json', { outputFile: 'results.json' }],
  ],

  use: {
    actionTimeout: 0,
    trace: 'on',
    video: 'off',
    screenshot: 'only-on-failure',
    headless: false,
  },
  globalSetup: "Example/src/lib/globalSetup.ts",
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1536, height: 703 }

      },
    },
    /*
        {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
        },
    
        {
          name: 'webkit',
          use: { ...devices['Desktop Safari'] },
        },
    
        Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});