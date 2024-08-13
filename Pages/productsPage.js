import { expect } from '@playwright/test';

//This page is created to mantain all locators on the Items page
export class ProductsPage {

    constructor(page) {
        this.page = page;

//Header
this.title = page.locator('.app_logo');
this.burgerMenu = page.locator('#react-burger-menu-btn');

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

//Filter
this.filterTitle = page.locator('.title');
this.filterDropDown = page.locator('.product_sort_container');

//Item container
this.itemTitle = page.locator('#item_4_title_link');
this.itemDescription = page.locator('//div[@class="inventory_item_desc"]').first();
this.itemPrice = page.locator('.inventory_item_price').first();
this.itemAddCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
this.itemRemoveButton = page.locator('#remove-sauce-labs-backpack');

//Footer
this.footerText = page.locator('.footer_copy');
this.twitterLink = page.locator('a[href="https://twitter.com/saucelabs"]');
this.facebookLink = page.locator('a[href="https://www.facebook.com/saucelabs"]');
this.linkedinLink = page.locator('a[href="https://www.linkedin.com/company/sauce-labs/"]');
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

// Validate filter from high to low price
async sortByPriceHighToLow() {
    await this.filterDropDown.selectOption('hilo');
}

async getProductPrices() {
    const pricesText = await this.itemPrice.allTextContents();
    return pricesText.map(price => parseFloat(price.replace('$', '')));
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

}

// Check item title link
async validateItemTitleLink() {
    await expect(this.itemTitle).toBeVisible();
    await this.itemTitle.click();
}

// Validate add to cart button
async validatedAddToCartButton() {
    await expect(this.itemAddCartButton).toBeVisible();
    await this.itemAddCartButton.click();
    await expect(this.cartBadge).toBeVisible();
    await expect(this.itemRemoveButton).toBeVisible();
    await this.page.reload(); // - additional check that after page reload item will be in the cart
    await expect(this.cartBadge).toBeVisible();
    await this.cartIcon.click()
}

// Validate remove from cart button
async validatedRemoveFromCartButton() {
    await expect(this.itemAddCartButton).toBeVisible();
    await this.itemAddCartButton.click();
    await expect(this.cartBadge).toBeVisible();
    await expect(this.itemRemoveButton).toBeVisible();
    await this.itemRemoveButton.click();
    await this.page.reload(); // - additional check that after page reload removed item will not be in the cart
    await expect(this.cartBadge).toBeHidden();
    await expect(this.itemRemoveButton).toBeHidden();
}

//Get item details 
async getItemDetailsBeforeAddingToCart() {
    const ItemTitle = await (await this.itemTitle).textContent();
    const ItemDescription = await (await this.itemDescription).textContent();
    const ItemPrice = await (await this.itemPrice).textContent();
    return [ItemTitle, ItemDescription, ItemPrice];
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