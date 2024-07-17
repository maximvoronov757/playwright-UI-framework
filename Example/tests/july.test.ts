import test from "../src/lib/BaseTest";
import * as homeDepotSteps from '../src/lib/stepDefinitions/homeDepotSteps';
import assert from 'assert';




let page;


test('Verify title of the page', async ({ page }) => {
 // await page.goto('https://homedepot.com');
  await homeDepotSteps.navigateToHomePage(page);
  await homeDepotSteps.verifyTitle(page, "The Home Depot");



});

