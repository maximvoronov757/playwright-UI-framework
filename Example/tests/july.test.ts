const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://google.com');
  const title = await page.title();
  console.log(title);
  expect(title).toBe('Google');
});

