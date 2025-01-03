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

//Item container
this.itemContainer = page.locator('.cart_item');
this.itemTitle = page.locator('#item_4_title_link');
this.itemDescription = page.locator('//div[@class="inventory_item_desc"]').first();
this.itemPriceContainer = page.locator('.inventory_item_price');
this.cartQuantity = page.locator('.cart_quantity');

//Payment information
this.paymentInformationTitle = page.locator('.summary_info_label').first();
this.paymentContent = page.locator('.summary_value_label').first();

//Shipping information
this.shippingInformationTitle = page.locator('.summary_info_label:nth-of-type(3)');
this.shippingInformation = page.locator('.summary_value_label:nth-of-type(4)');

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
async validateproductsPageHeader(){
    await expect(this.title).toBeVisible();
    await expect(this.title).toHaveText('Swag Labs');
    console.log("Title: Swag Labs is visible");
    await expect(this.burgerMenu).toBeVisible();
    await expect(this.cartIcon).toBeVisible();
    await expect(this.cartBadge).toBeVisible();
    await expect(this.cartQuantity).toBeVisible();
    await expect(this.itemDescription).toBeVisible();
}

// Check item title link
async validateItemTitleLink() {
    await expect(this.itemTitle).toBeVisible();
    await this.itemTitle.click();
}

//Get item details 
async getItemDetailsFromOverviewPage() {
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
    const shippingInformation = await this.shippingInformation.textContent();
    await expect(shippingInformation.toUpperCase()).toBe('FREE PONY EXPRESS DELIVERY!');
}

//Validate price breakdown
async validatePriceBreakdown() {
    const itemPriceCart = parseFloat((await (await this.page.locator('.inventory_item_price')).textContent()).replace(/[^0-9.]/g, ''));
    console.log('Item Price in Cart:', itemPriceCart);
    const itemPriceBreakdown = parseFloat((await (await this.page.locator('.summary_subtotal_label')).textContent()).replace(/[^0-9.]/g, ''));
await expect(itemPriceCart).toEqual(itemPriceBreakdown);
console.log('Item Price in Breakdown:', itemPriceBreakdown);
}

// Validate tax percentage 
async validateTaxPercentage() {
   const itemPrice = parseFloat((await (await this.itemPrice).textContent()).replace(/[^0-9.]/g, ''));
   const tax = parseFloat((await (await this.tax).textContent()).replace(/[^0-9.]/g, ''));
    // finding tax rate from item price
    const calculatedTaxRate = (tax / itemPrice) * 100;
    console.log('Calculate tax rate from item price', calculatedTaxRate);
  
    // Round the tax rate to 2 decimal places
    const roundedTax = Math.round(calculatedTaxRate * 100) / 100;
    console.log('Rounded Tax Rate:', roundedTax);

    // Calculate tax amount
    const calculatedTaxAmount = itemPrice * (roundedTax/ 100);
    console.log('Tax amount:', calculatedTaxAmount);

    // Round the tax amount to 2 decimal places
    const roundedTaxAmount = Math.round(calculatedTaxAmount * 100) / 100;
    expect(tax).toBe(roundedTaxAmount);
}

//validate total price - to do global value
async validateTotalPrice() {
    const itemPrice = parseFloat((await (await this.itemPrice).textContent()).replace(/[^0-9.]/g, ''));
    const tax = parseFloat((await (await this.tax).textContent()).replace(/[^0-9.]/g, ''));
    const expectedTotalPrice = parseFloat((await (await this.page.locator('.summary_total_label')).textContent()).replace(/[^0-9.]/g, ''));
    const totalPrice = itemPrice + tax;
await expect(totalPrice).toEqual(expectedTotalPrice);
console.log('Total price;', totalPrice);
}

// Validate Finish button  
async validatedFinishButton() {
    await expect(this.finishButton).toBeVisible();
    await this.finishButton.click();
}

// Validate cancel button
async validatedCancelButton() {
    await expect(this.cancelButton).toBeVisible();
    await this.cancelButton.click();
}
}