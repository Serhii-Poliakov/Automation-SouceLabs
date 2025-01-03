import { expect } from '@playwright/test';

//This page is created to mantain all locators on the Cart page
export class CartPage {

    constructor(page) {
        this.page = page;

//Header
this.title = page.locator('.app_logo');
this.burgerMenu = page.locator('#react-burger-menu-btn');
this.cartTitle = page.locator('.title');
this.qty = page.locator('.cart_quantity_label');
this.decription = page.locator('.cart_desc_label');

//Cart
this.cartContainer = page.locator('.cart_item');
this.cartIcon = page.locator('#shopping_cart_container');
this.cartBadge = page.locator('.shopping_cart_badge');

//Item container
this.itemContainer = page.locator('.cart_item');
this.itemTitle = page.locator('#item_4_title_link');
this.itemDescription = page.locator('//div[@class="inventory_item_desc"]').first();
this.itemPrice = page.locator('.inventory_item_price').first();
this.cartQuantity = page.locator('.cart_quantity');
this.itemRemoveButton = page.locator('#remove-sauce-labs-backpack');

//Continue Shopping button
this.continueShoppingButton = page.locator('#continue-shopping');

//Checkout button
this.checkoutButton = page.locator('#checkout');
}

// Validate the header content on this page
async validateCartPageHeader(){
    await expect(this.title).toBeVisible();
    await expect(this.title).toHaveText('Swag Labs');
    console.log("Title: Swag Labs is visible");
    await expect(this.cartTitle).toHaveText("Your Cart")
    console.log("Title: Your Page");
    await expect(this.burgerMenu).toBeVisible();
    await expect(this.burgerMenu).toBeVisible();
    await expect(this.cartIcon).toBeVisible();
    await expect(this.cartBadge).toBeVisible();
    await expect(this.qty).toBeVisible();
    await expect(this.decription).toBeVisible();
}

// Verify if item added from items page is same as shown in cart page
async validateItemDetailsAfterAddingToCart(expectedItemDetails) {
    await expect(this.itemTitle).toBeVisible();
    expect(await (await this.itemTitle).textContent()).toBe(expectedItemDetails[0]);
  
    await expect(this.itemDescription).toBeVisible();
    expect(await (await this.itemDescription).textContent()).toBe(expectedItemDetails[1]);
  
    await expect(this.itemPrice).toBeVisible();
    expect(await (await this.itemPrice).textContent()).toBe(expectedItemDetails[2]);
}

// Validate if user add 3 items in products page - card budge has value 3
async validatedFewItemsInTheCart() {
    await expect(this.cartBadge).toBeVisible();
    await expect (this.cartBadge).toHaveText('3');
}

// Validate remove from cart button
async validatedRemoveFromCartButton() {
    await expect(this.itemRemoveButton).toBeVisible();
    await this.itemRemoveButton.click();
    await expect (this.cartContainer).toBeHidden();
    await this.page.reload(); // - additional check that after page reload removed item will not be in the cart
    await expect(this.cartBadge).toBeHidden();
    await expect(this.itemRemoveButton).toBeHidden();
}

// Validate continue shopping button
async validatedContinueShoppingButton() {
    await expect(this.continueShoppingButton).toBeVisible();
    await this.continueShoppingButton.click();
}

// Validate checkout button
async validatedCheckoutButton() {
    await expect(this.checkoutButton).toBeVisible();
    await this.checkoutButton.click();
}
}