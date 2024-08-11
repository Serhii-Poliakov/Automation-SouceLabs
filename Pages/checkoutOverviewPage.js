import { expect } from '@playwright/test';


//This page is created to mantain all locators on the Checkout Overview page
export class CheckoutOverviewPage {

    constructor(page) {
        this.page = page;

//Header
this.title = page.locator('.app_logo');
this.burgerMenu = page.locator('#react-burger-menu-btn');
this.checkoutTitle = page.locator('.title');

//Cart
this.cartContainer = page.locator('.cart_item');
this.cartIcon = page.locator('#shopping_cart_container');
this.cartBadge = page.locator('.shopping_cart_badge');

//Burger Menu
this.burgerMenuForm = page.locator('.bm-menu');
this.allInventary = page.locator('#inventory_sidebar_link');
this.about = page.locator('#about_sidebar_link');
this.logout = page.locator('#logout_sidebar_link');
this.resetAppState = page.locator('#reset_sidebar_link');
this.burgerMenuCloseButton = page.locator('#react-burger-cross-btn');

//Item container
this.itemContainer = page.locator('.cart_item');
this.itemTitle = page.locator('#item_4_title_link');
this.itemDescription = page.locator('//div[@class="inventory_item_desc"]').first();
this.itemPriceContainer = page.locator('.inventory_item_price');
this.cartQuantity = page.locator('.cart_quantity');

//Payment information
this.paymentInformationTitle = page.locator('.summary_info_label').first();
this.paymentContent = page.locator('.summary_value_label').nth(1);

//Shipping information
this.shippingInformationTitle = page.locator('.summary_info_label').first();
this.shippingInformation = page.locator('summary_value_label').nth(1);

//Price total
this.itemPrice = page.locator('.summary_subtotal_label');
this.tax = page.locator('.summary_tax_label');
this.toatalPrice = page.locator('.summary_total_label');

//Cancel button
this.cancelButton = page.locator('#cancel');

//Finish button
this.finishButton = page.locator('#finish');
}

// Validate the header content on this page
async validateItemsPageHeader(){
    await expect(this.title).toBeVisible();
    await expect(this.title).toHaveText('Swag Labs');
    console.log("Title: Swag Labs is visible");
    await expect(this.burgerMenu).toBeVisible();
    await expect(this.burgerMenu).toBeVisible();
    await expect(this.cartIcon).toBeVisible();
    await expect(this.cartBadge).toBeVisible();
    await expect(this.cartQuantity).toBeVisible();
    await expect(this.itemDescription).toBeVisible();
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

// Verify if item added from items page is same as shown in overview page
async validateItemDetailsAfterAddingToCart(expectedItemDetails) {
    await expect(this.itemTitle).toBeVisible();
    expect(await (await this.itemTitle).textContent()).toBe(expectedItemDetails[0]);
  
    await expect(this.itemDescription).toBeVisible();
    expect(await (await this.itemDescription).textContent()).toBe(expectedItemDetails[1]);
  
    await expect(this.itemPriceContainer).toBeVisible();
    expect(await (await this.itemPriceContainer).textContent()).toBe(expectedItemDetails[2]);
}

//Get item details 
async getItemDetailsAfterAddingToCart() {
    const ItemTitle = await (await this.itemTitle).textContent();
    const ItemDescription = await (await this.itemDescription).textContent();
    const ItemPriceContainer = await (await this.itemPriceContainer).textContent();
    return [ItemTitle, ItemDescription, ItemPriceContainer];
}

// Validate payment information
async validatePaymentInformation() {
    await expect(this.paymentInformationTitle).toBeVisible();
    await expect(this.paymentInformationTitle).toHaveText('Payment Information:');
    await expect(this.paymentContent).toBeVisible();
    await expect(this.paymentContent).toHaveText('SauceCard #31337');
}

// Validate shipping information
async validateShipingInformation() {
    await expect(this.shippingInformationTitle).toBeVisible();
    await expect(this.shippingInformationTitle).toHaveText('Shipping Information:');
    await expect(this.shippingInformation).toBeVisible();
    await expect(this.shippingInformation).toHaveText('FREE PONY EXPRESS DELIVERY!');
}

//Validate price breakdown
async validatePriceBreakdown() {
expect(parseFloat(this.itemPrice.textContent())).toEqual(parseFloat(this.itemPrice.textContent()));
}

// Validate tax percentage 
async validateTaxPercentage() {
    const itemPrice = parseFloat(this.itemPrice.replace('$', ''));
    const tax = parseFloat(this.tax.replace('$', ''));
  
    // Check tax rate
    const calculatedTaxRate = (tax / itemPrice) * 100;
  
    // Round the tax rate to 2 decimal places
    const roundedTax = Math.round(calculatedTaxRate * 100) / 100;
    expect(tax).toBe(roundedTax);
}

//validate total price
async validateTotalPrice() {
expect(parseFloat(this.itemPrice.textContent())) + (parseFloat(this.tax.textContent())).toEqual(parseFloat(this.toatalPrice.textContent()))
}

// Validate Finish button  
async validatedContinueButton() {
    await expect(this.finishButton).toBeVisible();
    await this.finishButton.click();
}

// Validate cancel button
async validatedCancelButton() {
    await expect(this.cancelButton).toBeVisible();
    await this.cancelButton.click();
}
}