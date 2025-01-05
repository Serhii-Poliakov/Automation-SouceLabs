import { expect } from '@playwright/test';

//This page is created to mantain all locators on the Checkout Complete page
export class CheckoutCompletePage {

    constructor(page) {
        this.page = page;

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