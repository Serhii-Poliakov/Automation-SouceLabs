import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { CartPage } from '../../Pages/cartPage';
import { BurgerMenu } from '../../Helper/burgerMenu';
import { Footer } from '../../Helper/footer';
import { Header } from '../../Helper/header';

const pageUrl = require('../../Data/pageUrl').default;

test.describe('@regression, Product page', () => {
test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
    await page.waitForLoadState('networkidle');
  });

// TC: 10 - Check that header is present
// TC: 11 - Check that cart badge is hidden 
// TC: 12 - Check that filter is present
// TC: 13 - Check that quantity icon is hidden
// TC: 14 - Check that page title is present
  test('TC:10, 11, 12, 13, 14', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const header = new Header(page);
    await loginPage.validateLoginWithValidCredentials();
    await expect(header.pageTitle).toHaveText('Products');
    await header.validateHeader();
  });

  // TC: 15 - Check cart button is available
  test('TC:15', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateCartButton();
  });

  // TC: 16 - Check burger menu form (all elements are present, close button)
  test('TC:16', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await burgerMenu.validateBurgerMenu();
  });

  // TC:17 - Check logout functionality from burger menu
  test('TC:17', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await burgerMenu.validateLogout();
    await loginPage.validateLoginForm();
  });

  // TC: 18 Check about functionality from burger menu
  test('TC:18', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await burgerMenu.validateAboutFunctionality();
  });

  // TC: 19 Check filter from high to low price
  test('TC:19', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.sortByPriceHighToLow();
    const prices = await productsPage.getProductPrices();
    for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
    }
});
  // TC: 20 Check filter from Z to A
test('TC:20', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  await loginPage.validateLoginWithValidCredentials();
  await productsPage.sortByNameZToA();
  const productNames = await productsPage.getProductNames();
  for (let i = 0; i < productNames.length - 1; i++) {
      expect(productNames[i].localeCompare(productNames[i + 1])).toBeGreaterThanOrEqual(0);
  }
});

 // TC: 21 Check filter from low to high
 test('TC:21', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  await loginPage.validateLoginWithValidCredentials();
  await productsPage.sortByPriceLowToHigh();
  const prices = await productsPage.getProductPrices();
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
}
});

  // TC:22 Check first item details
  // TC:23 Check add item to cart
  test('TC:22, 23', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemContainer();
    await productsPage.validatedAddItemToCart();
  });

  // TC:24 Check that user has posibility to add few items to the cart
  test('TC:24', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemContainer();
    await productsPage.validatedAddFewItemsToCart();
    await cartPage.validatedFewItemsInTheCart();
  });

  // TC:25 Check remove item from cart
  test('TC:25', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemContainer();
    await productsPage.validatedRemoveFromCartButton();
  });

   // TC:26 Check that after relogin, item will be in the cart
   test('TC:26', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemContainer();
    await productsPage.validatedAddItemToCart();
    await burgerMenu.validateLogout();
    await loginPage.validateLoginWithValidCredentials();
    await expect (page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  // TC: 27 Check footer
  test('TC:27', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const footer = new Footer(page);
    await loginPage.validateLoginWithValidCredentials();
    await footer.validateFooter();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
});
});



  