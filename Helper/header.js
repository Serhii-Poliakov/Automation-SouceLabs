import { expect } from '@playwright/test';

export class Header {

    constructor(page) {
        this.page = page;

//Header
this.title = page.locator('.app_logo');
this.burgerMenu = page.locator('#react-burger-menu-btn');
this.qty = page.locator('.cart_quantity_label');
this.decription = page.locator('.cart_desc_label');
this.filter = page.locator('.product_sort_container');
this.cartBadge = page.locator('.shopping_cart_badge');
this.cartIcon = page.locator('#shopping_cart_container');

// Page title 
this.pageTitle = page.locator('.title');

//Back home button
this.backHomeButton = page.locator('#back-to-products');
    }

//Validate Header
async validateHeader() {
    await expect(this.burgerMenu).toBeVisible();
    await expect(this.title).toBeVisible();
    await expect(this.title).toHaveText('Swag Labs');
    console.log("Title: Swag Labs is visible");
    await expect(this.cartIcon).toBeVisible();
   
    let initialPageTitleText;
    let pageTitleLocator;

    if (await this.pageTitle.isVisible()) { 
        pageTitleLocator = this.pageTitle;
        initialPageTitleText = await pageTitleLocator.textContent();
        console.log(`Page title is: ${initialPageTitleText}`);
    } else {
        pageTitleLocator = this.backHomeButton;
        initialPageTitleText = await pageTitleLocator.textContent();
        console.log(`Page title is: ${initialPageTitleText}`);
    }

    const cartPage = initialPageTitleText.includes('Your Cart');
    const checkoutInformation = initialPageTitleText.includes('Checkout: Your Information');
    const checkoutOverview = initialPageTitleText.includes('Checkout: Overview');
    const products = initialPageTitleText.includes('Products');

    if (cartPage || checkoutInformation || checkoutOverview) {
        await expect(this.cartBadge).toBeVisible();
        console.log("Cart badge is visible");
    } else {
        await expect(this.cartBadge).toBeHidden();
        console.log("Cart badge is hidden");
    }

    if (products) {
        await expect(this.filter).toBeVisible();
        console.log("Filter is visible");
    } else {
        await expect(this.filter).toBeHidden();
        console.log("Filter is hidden");
    }

    if (cartPage || checkoutOverview) {
        await expect(this.qty).toBeVisible();
        console.log("Cart qty is visible");
    } else {
        await expect(this.qty).toBeHidden();
        console.log("Cart qty is hidden");
    }
}

//Validate redirection to products page
async redirectionToProductsPage(){
    await expect(this.pageTitle).toHaveText('Products');
}
}