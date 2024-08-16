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

//Burger Menu
this.burgerMenuForm = page.locator('.bm-menu');
this.allInventary = page.locator('#inventory_sidebar_link');
this.about = page.locator('#about_sidebar_link');
this.logout = page.locator('#logout_sidebar_link');
this.resetAppState = page.locator('#reset_sidebar_link');
this.burgerMenuCloseButton = page.locator('#react-burger-cross-btn');

//Confirmation image
this.confirmationImage =page.locator('img[alt="Pony Express"]');

//Confirm title
this.confirmTitle = page.locator('h2.complete-header')

//Order Dispatched text
this.orderDispatchedText = page.locator('.complete-text');

//Back home button
this.backHomeButton = page.locator('#back-to-products');
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

//Validate Burger Menu
async validateBurgerMenu() {
    await expect(this.burgerMenu).toBeVisible();
    await this.burgerMenu.click();
    await expect (this.burgerMenuForm).toBeVisible();
    await expect(this.allInventary).toBeVisible(); // unknown functionality only checking that element is present 
    await expect(this.about).toBeVisible();
    await expect(this.logout).toBeVisible();
    await expect(this.resetAppState).toBeVisible(); // unknown functionality only checking that element is present 
    await expect(this.burgerMenuCloseButton).toBeVisible();
    await this.burgerMenuCloseButton.click();
    await expect(this.burgerMenuForm).toBeHidden();
}

// Validate Logout functionality
async validateLogout() {
    await expect(this.burgerMenu).toBeVisible();
    await this.burgerMenu.click();
    await expect(this.logout).toBeVisible();
    await this.logout.click();
}

// Validate About functionality
async validateAboutFunctionality() {
    await expect(this.burgerMenu).toBeVisible();
    await this.burgerMenu.click();
    await expect(this.about).toBeVisible();
    await this.about.click();
    await this.page.waitForNavigation();
    const currentUrl = this.page.url();
    const expectedUrl = 'https://saucelabs.com/';
    if (currentUrl === expectedUrl) {
        console.log('The URL is expected:', currentUrl);
      } else {
        console.error('The URL does not match the expected URL. The resulting URL is:', currentUrl);
      }
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
}