import test, {Locator, Page, BrowserContext,defineConfig, Browser } from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly context: BrowserContext;


    constructor(page: Page, context: BrowserContext){
        this.page = page;
        this.context = context;
    }

    
}


