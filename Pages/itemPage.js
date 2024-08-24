import { expect } from '@playwright/test';

//This page is created to mantain all locators on the Checkout Overview page
export class ItemPage {

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
this.itemTitle = page.locator('.inventory_details_name.large_size');
this.itemDescription = page.locator('.inventory_details_desc.large_size');
this.itemPriceContainer = page.locator('.inventory_details_price');
this.itemImage = page.locator('.inventory_details_img');

//Add to cart button
this.addToCartButton = page.locator('#add-to-cart');

//Back to products button
this.backToProductsButton = page.locator('#back-to-products');

//Footer
this.footerText = page.locator('.footer_copy');
this.twitterLink = page.locator('a[href="https://twitter.com/saucelabs"]');
this.facebookLink = page.locator('a[href="https://www.facebook.com/saucelabs"]');
this.linkedinLink = page.locator('a[href="https://www.linkedin.com/company/sauce-labs/"]');
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

// Validate Footer
async validateFooter() {
    await expect(this.footerText).toHaveText('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    
    //Check redirection to Twitter page
    await expect(this.twitterLink).toBeVisible();
    const [newTwitterPage] = await Promise.all([
        this.page.waitForEvent('popup'),
        this.twitterLink.click(), 
    ]);
    await newTwitterPage.waitForLoadState();
    await expect(newTwitterPage).toHaveURL('https://x.com/saucelabs');
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