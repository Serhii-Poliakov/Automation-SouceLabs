import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { CartPage } from '../../Pages/cartPage';

const pageUrl = require('../../Data/pageUrl').default;

test.describe('@regression, Product page', () => {
test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
  });

// TC: 10 - Check that header is present
  test('TC:10', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateproductsPageHeader();
  });

  // TC: 11 - Check cart button is available
  test('TC:11', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateCartButton();
  });

  // TC: 12 - Check burger menu form (all elements are present, close button)
  test('TC:12', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage (page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateBurgerMenu();
  });

  // TC:13 - Check logout functionality from burger menu
  test('TC:13', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateLogout();
    await loginPage.validateLoginForm();
  });

  // TC: 14 Check about functionality from burger menu
  test('TC:14', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateAboutFunctionality();
  });

  // TC: 15 Check filter from high to low price
  test('TC:15', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.sortByPriceHighToLow();
    const prices = await productsPage.getProductPrices();
    for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
    }
});
  // TC: 16 Check filter from Z to A
test('TC:16', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  await loginPage.validateLoginWithValidCredentials();
  await productsPage.sortByNameZToA();
  const productNames = await productsPage.getProductNames();
  for (let i = 0; i < productNames.length - 1; i++) {
      expect(productNames[i].localeCompare(productNames[i + 1])).toBeGreaterThanOrEqual(0);
  }
});

 // TC: 17 Check filter from low to high
 test('TC:17', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  await loginPage.validateLoginWithValidCredentials();
  await productsPage.sortByPriceLowToHigh();
  const prices = await productsPage.getProductPrices();
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
}
});

  // TC:18 Check first item details
  // TC:19 Check add item to cart
  test('TC:18, 19', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemContainer();
    await productsPage.validatedAddItemToCart();
  });

  //TC:20 Check that user has posibility to add few items to the cart
  test('TC:20', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemContainer();
    await productsPage.validatedAddFewItemsToCart();
    await cartPage.validatedFewItemsInTheCart();
  });

  // TC:21 Check remove item from cart
  test('TC:21', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemContainer();
    await productsPage.validatedRemoveFromCartButton();
  });

   // TC:22 Check that after relogin, item will be in the cart
   test('TC:22', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemContainer();
    await productsPage.validatedAddItemToCart();
    await productsPage.validateLogout();
    await loginPage.validateLoginWithValidCredentials();
    await expect (page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  // TC: 23 Check footer
  test('TC:23', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateFooter();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
});
});



  