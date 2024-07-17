import { test as base } from '@playwright/test';
import { HomePage } from './pageFactory/HomePage';



const test = base.extend<{
    homePage: HomePage;


}>({
    homePage: async ({ page, context }, use) => {
        await use(new HomePage(page, context));
    },

})
export default test;
export const expect = test.expect;
