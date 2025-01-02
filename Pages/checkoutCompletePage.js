import { expect } from '@playwright/test';

//This page is created to mantain all locators on the Checkout Complete page
export class CheckoutCompletePage {

    constructor(page) {
        this.page = page;

//Header
this.title = page.locator('.app_logo');
this.burgerMenu = page.locator('#react-burger-menu-btn');
this.checkoutTitle = page.locator('.title');

//Cart
this.cartIcon = page.locator('#shopping_cart_container');
this.cartBadge = page.locator('.shopping_cart_badge');

//Confirmation image
this.confirmationImage =page.locator('img[alt="Pony Express"]');

//Confirm title
this.confirmTitle = page.locator('h2.complete-header')

//Order Dispatched text
this.orderDispatchedText = page.locator('.complete-text');

//Back home button
this.backHomeButton = page.locator('#back-to-products');

//Footer
this.footerText = page.locator('.footer_copy');
this.twitterLink = page.locator('a[href="https://twitter.com/saucelabs"]');
this.facebookLink = page.locator('a[href="https://www.facebook.com/saucelabs"]');
this.linkedinLink = page.locator('a[href="https://www.linkedin.com/company/sauce-labs/"]');
}


// Validate the header content on this page
async validateproductsPageHeader(){
    await expect(this.title).toBeVisible();
    await expect(this.title).toHaveText('Swag Labs');
    console.log("Title: Swag Labs is visible");
    await expect(this.burgerMenu).toBeVisible();
    await expect(this.cartIcon).toBeVisible();
    await expect(this.cartBadge).toBeHidden();
}

// Validate checkout complete container
async validateCheckoutCompleteContainer(){
    await expect(this.confirmationImage).toBeVisible();
    await expect(this.confirmTitle).toHaveText('Thank you for your order!');
    console.log("Thank you for your order!");
    await expect(this.orderDispatchedText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    console.log("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
}

// Validate back to home button 
async validateBackToHomeButton() {
    await expect(this.backHomeButton).toBeVisible();
    await this.backHomeButton.click();
}

// Validate Footer
async validateFooter() {
    await expect(this.footerText).toHaveText('© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    
    //Check redirection to Twitter page
    await expect(this.twitterLink).toBeVisible();
    const [newTwitterPage] = await Promise.all([
        this.page.waitForEvent('popup'),
        this.twitterLink.click(), 
    ]);
    await newTwitterPage.waitForLoadState();
    await expect(newTwitterPage).toHaveURL('https://x.com/saucelabs?mx=2');
    await newTwitterPage.close();

    //Check redirection to Facebook page
    await expect(this.facebookLink).toBeVisible();
    const [newFacebookPage] = await Promise.all([
        this.page.waitForEvent('popup'),
        this.facebookLink.click(), 
    ]);
    await newFacebookPage.waitForLoadState();
    await expect(newFacebookPage).toHaveURL('https://www.facebook.com/saucelabs');
    await newFacebookPage.close();

    //Check redirection to Linkedin page
    await expect(this.linkedinLink).toBeVisible();
    const [newLinkedinPage] = await Promise.all([
        this.page.waitForEvent('popup'),
        this.linkedinLink.click(), 
    ]);
    await newLinkedinPage.waitForLoadState();
    await expect(newLinkedinPage).toHaveURL('https://www.linkedin.com/company/sauce-labs/');
    await newLinkedinPage.close();
}
}