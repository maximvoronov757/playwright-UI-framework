import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60000,
  use: {
    browserName: 'chromium',
    headless: false,
  },
  testDir: './Example/tests', // Set this to the correct directory
};

export default config;
