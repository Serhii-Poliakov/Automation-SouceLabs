import { expect } from '@playwright/test';

//This page is created to mantain all locators on the Item page
export class ProductsPage {

    constructor(page) {
        this.page = page;

//Header
this.title = page.locator('.app_logo');
this.burgerMenu = page.locator('#react-burger-menu-btn');
this.titlePage = page.locator('span.title');

//Cart
this.cartIcon = page.locator('.shopping_cart_link');
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
this.itemName = page.locator('.inventory_item_name');
this.itemImage = page.locator('.inventory_item_img');
this.itemAddCartButton = page.locator('.btn.btn_primary').first();
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
    await expect(this.titlePage).toBeVisible;
    await expect(this.titlePage).toHaveText('Products');
    console.log("Title page: Products");

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
    const pricesText = await this.page.$$eval('.inventory_item_price', elements => 
        elements.map(el => parseFloat(el.textContent.replace('$', '').trim()))
    );
    return pricesText;
}

// Validate filter from low to high price
async sortByPriceLowToHigh() {
    await this.filterDropDown.selectOption('lohi'); 
}

// Validate filter from Z to A
async sortByNameZToA() {
    await this.filterDropDown.selectOption('za'); 
}

async getProductNames() {
    const productNamesText = await this.itemName.allTextContents();
    return productNamesText;
}


// Validate item container
async validateItemContainer() {
    await expect(this.itemTitle).toBeVisible();
    await expect(this.itemDescription).toBeVisible();
    await expect(this.itemPrice).toBeVisible();
    await expect(this.itemAddCartButton).toBeVisible();
    await expect(this.itemAddCartButton).toBeEnabled();
    await expect((this.itemImage).nth(0)).toBeVisible();
}

// Check item title link
async validateItemTitleLink() {
    await expect(this.itemTitle).toBeVisible();
    await this.itemTitle.click();
}

// Validate button - add item to cart 
async validatedAddItemToCart() {
    await expect(this.itemAddCartButton).toBeVisible();
    await this.itemAddCartButton.click();
    await expect(this.cartBadge).toBeVisible();
    await expect(this.cartBadge).toHaveText('1');
    await expect(this.itemRemoveButton).toBeVisible();
    await this.page.reload(); // - additional check that after page reload item will be in the cart
    await expect(this.cartBadge).toBeVisible();
    await expect(this.cartIcon).toBeVisible();
    await this.cartIcon.click();
}

// Validate add 3 ites to cart button
async validatedAddFewItemsToCart() {
    await expect(this.itemAddCartButton).toBeVisible();
    await this.page.locator('.btn.btn_primary').nth(0).click();
    await expect(this.cartBadge).toHaveText('1');
    await this.page.locator('.btn.btn_primary').nth(1).click();
    await expect(this.cartBadge).toHaveText('2');
    await this.page.locator('.btn.btn_primary').nth(2).click();
    await expect(this.cartBadge).toHaveText('3');
    await expect(this.itemRemoveButton).toBeVisible();
    await this.page.reload(); // - additional check that after page reload item will be in the cart
    await expect(this.cartBadge).toBeVisible();
    await this.cartIcon.click()
}

// Validate that after adding the item to the cart, a badge counter will appear
async validateCartBadge() {
    await expect(this.cartBadge).toBeVisible();
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