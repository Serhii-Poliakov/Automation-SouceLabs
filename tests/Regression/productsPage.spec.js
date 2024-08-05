import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ItemsPage } from '../../Pages/itemsPage';

const pageUrl = require('../../Data/pageUrl').default;

test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
  });

// TC: 10 - Check that header is present
  test('TC:10', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ItemsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validateItemsPageHeader();
  });

  // TC: 11 - Check cart button is available
  test('TC:11', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ItemsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validateCartButton();
  });

  // TC: 12 - Check burger menu form (all elements are present, close button)
  test('TC:12', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ItemsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validateBurgerMenu();
  });

  // TC:13 - Check logout functionality from burger menu
  test('TC:13', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ItemsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validateLogout();
    await loginPage.validateLoginForm();
  });

  // TC: 14 Check about functionality from burger menu
  test('TC:14', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ItemsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validateAboutFunctionality();
  });

  // TC: 15 Check filter from high to low price
  test('TS:15', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const itemsPage = new ItemsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.sortByPriceHighToLow();
    const prices = await itemsPage.getProductPrices();
    for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
    }
});

  // TC:16 Check first item details
  // TC:17 Check add item to cart
  test('TC:16, 17', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ItemsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validateItemContainer();
    await itemsPage.validatedAddToCartButton();
  });

  // TC:18 Check remove item from cart
  test('TC:18', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ItemsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validateItemContainer();
    await itemsPage.validatedRemoveFromCartButton();
  });

  // TC: 19 Check footer
  test('TC:19', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ItemsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validateFooter();
  });



  