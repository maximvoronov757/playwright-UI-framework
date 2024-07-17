import { Page, BrowserContext, expect } from "playwright/test";
import { HomePage } from "../pageFactory/HomePage";
import test from "../BaseTest";
import assert from 'assert';
import ENV from "../env";

let context: BrowserContext;
let homePage: HomePage;


test.beforeEach(async ({ page, context }) => {
    await initializePageObjects(page, context);
})


async function initializePageObjects(page: Page, context: BrowserContext) {
    homePage = new HomePage(page, context);
}



export async function verifyTitle(page: Page, expectedTitle: string) {
    const actualTitle = await page.title();
    console.log("Title of the current page is - " + actualTitle);
    assert.strictEqual(actualTitle, expectedTitle,
        'Title of the page should be ' + expectedTitle + " but received " + actualTitle);
}

export async function navigateToHomePage(page: Page) {
    await page.goto(ENV.HOME_DEPOT_URL);
    await page.waitForLoadState();
}


