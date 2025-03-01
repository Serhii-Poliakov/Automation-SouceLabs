import { expect } from '@playwright/test';

//This page is created to mantain all locators on the Checkout Overview page
export class ItemPage {

    constructor(page) {
        this.page = page;

//Cart
this.cartContainer = page.locator('.cart_item');
this.cartIcon = page.locator('#shopping_cart_container');
this.cartBadge = page.locator('.shopping_cart_badge');

//Item container
this.itemContainer = page.locator('.cart_item');
this.itemTitle = page.locator('.inventory_details_name.large_size');
this.itemDescription = page.locator('.inventory_details_desc.large_size');
this.itemPriceContainer = page.locator('.inventory_details_price');
this.itemImage = page.locator('.inventory_details_img');

//Add to cart button
this.addToCartButton = page.locator('#add-to-cart');

//Back to products button
this.backToProductsButton = page.locator('#back-to-products');
}

// Validate the header content on this page
async validateItemPageHeader(){
    await expect(this.title).toBeVisible();
    await expect(this.title).toHaveText('Swag Labs');
    console.log("Title: Swag Labs is visible");
    await expect(this.burgerMenu).toBeVisible();
    await expect(this.cartIcon).toBeVisible();
    await expect(this.cartBadge).toBeHidden();
    await expect(this.itemDescription).toBeVisible();
}

//Get item details 
async getItemDetailsAfterRedirectionToItemPage() {
    const ItemTitle = await (await this.itemTitle).textContent();
    const ItemDescription = await (await this.itemDescription).textContent();
    const ItemPriceContainer = await (await this.itemPriceContainer).textContent();
    return [ItemTitle, ItemDescription, ItemPriceContainer];
}

// Validate item container
async validateItemContainer() {
    await expect(this.itemTitle).toBeVisible();
    await expect(this.itemTitle).toHaveText('Sauce Labs Backpack');
    await expect(this.itemDescription).toBeVisible();
    await expect(this.itemDescription).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    await expect(this.itemPrice).toBeVisible();
    await expect(this.itemPrice).toHaveText('$29.99');
    await expect(this.itemAddCartButton).toBeVisible();
    await expect(this.itemAddCartButton).toBeEnabled();
    await expect(this.itemImage).toBeVisible();
}

// Validate Add Cart button  
async validatedAddCartButton() {
    await expect(this.addToCartButton).toBeVisible();
    await this.addToCartButton.click();
    await expect(this.cartBadge).toBeVisible();
}

// Validate that after adding the item to the cart, a badge counter will appear
async validateCartBadge() {
    await expect(this.cartBadge).toBeVisible();
}

// Validate back to Products Button
async validatedbackToProductsButton() {
    await expect(this.backToProductsButton).toBeVisible();
    await this.backToProductsButton.click();
}
}