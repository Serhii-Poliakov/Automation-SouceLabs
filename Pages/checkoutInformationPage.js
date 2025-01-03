import { expect } from '@playwright/test';
const checkoutDetails = require('../Data/checkoutDetails').default;

//This page is created to mantain all locators on the Items page
export class CheckoutInformationPage {

    constructor(page) {
        this.page = page;

//Header
this.title = page.locator('.app_logo');
this.burgerMenu = page.locator('#react-burger-menu-btn');
this.checkoutTitle = page.locator('.title');

//Cart
this.cartIcon = page.locator('#shopping_cart_container');
this.cartBadge = page.locator('.shopping_cart_badge');

//Validate Checkout details form
this.firstName = page.locator('#first-name');
this.lastName = page.locator('#last-name');
this.zipOrPostalCode = page.locator('#postal-code');

//Validate Checkout errors
this.errorMessage = page.locator('.error-message-container.error'); //
this.errorButton = page.locator('.error-button');
this.lastName = page.locator('#last-name'); //
this.zipOrPostalCode = page.locator('#postal-code'); //

//Validate Cancel button
this.cancelButton = page.locator('#cancel');

//Validate Continue button
this.continueButton = page.locator('#continue');
}

    // Validate the header content on the item page
async validateproductsPageHeader(){
    await expect(this.title).toBeVisible();
    await expect(this.title).toHaveText('Swag Labs');
    console.log("Title: Swag Labs is visible");
    await expect(this.burgerMenu).toBeVisible();
    await expect(this.cartIcon).toBeVisible();
    }

    // Validate cart button 
async validateCartButton() {
    await expect(this.cartIcon).toBeVisible();
    await expect(this.cartIcon).toBeEnabled();
    console.log("Cart button is visible and enabled");
    await this.cartIcon.click();   
    }

    // Validate Checkout form 
async validateCheckoutFrom() {
    await expect(this.firstName).toBeVisible();
    await expect(this.firstName).toHaveAttribute('placeholder', 'First Name');
    await expect(this.lastName).toBeVisible();
    await expect(this.lastName).toHaveAttribute('placeholder', 'Last Name');
    await expect(this.zipOrPostalCode).toBeVisible();
    await expect(this.zipOrPostalCode).toHaveAttribute('placeholder', 'Zip/Postal Code');
    }

    //Validate Checkout details with empty data
async validateCheckoutFormWithEmptyData() {
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill('');
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill('');
    await expect(this.zipOrPostalCode).toBeVisible();
    await this.zipOrPostalCode.fill('');
    await this.continueButton.click();
    await expect(this.errorMessage).toHaveText('Error: First Name is required')
    }

    //Validate Checkout details with empty First name
async validateCheckoutFormWithEmptyFirstName() {
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill('');
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill(checkoutDetails.lastName);
    await expect(this.zipOrPostalCode).toBeVisible();
    await this.zipOrPostalCode.fill(checkoutDetails.zipOrPostalCode);
    await this.continueButton.click();
    await expect(this.errorMessage).toHaveText('Error: First Name is required')
    }

    //Validate Checkout details with empty Last name
async validateCheckoutFormWithEmptyLastName() {
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill(checkoutDetails.firstName);
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill('');
    await expect(this.zipOrPostalCode).toBeVisible();
    await this.zipOrPostalCode.fill(checkoutDetails.zipOrPostalCode);
    await this.continueButton.click();
    await expect(this.errorMessage).toHaveText('Error: Last Name is required')
    }

    //Validate Checkout details with empty zip code 
async validateCheckoutFormWithEmptyZipCode() {
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill(checkoutDetails.firstName);
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill(checkoutDetails.lastName);
    await expect(this.zipOrPostalCode).toBeVisible();
    await this.zipOrPostalCode.fill('');
    await this.continueButton.click();
    await expect(this.errorMessage).toHaveText('Error: Postal Code is required')
    }

     //Validate Checkout details with all correct data
async validateCheckoutFormWithCorrectData() {
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill(checkoutDetails.firstName);
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill(checkoutDetails.lastName);
    await expect(this.zipOrPostalCode).toBeVisible();
    await this.zipOrPostalCode.fill(checkoutDetails.zipOrPostalCode);
    await this.continueButton.click();
    }

    //Check the button for clearing checkout form from errors 
async validateCleaningErrorButton () {
    await this.continueButton.click();
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText('Error: First Name is required')
    await expect(this.errorButton).toBeVisible();
    await this.errorButton.click();
    await expect(this.errorMessage).toBeHidden();
    }

    // Validate continue button
async validatedContinueButton() {
    await expect(this.continueButton).toBeVisible();
    await this.continueButton.click();
}

    // Validate cancel button
async validatedCancelButton() {
    await expect(this.cancelButton).toBeVisible();
    await this.cancelButton.click();
}
}