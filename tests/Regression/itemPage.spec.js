import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { ItemPage } from '../../Pages/itemPage';
import { CheckoutInformationPage } from '../../Pages/checkoutInformationPage';
import { CheckoutOverviewPage } from '../../Pages/checkoutOverviewPage';
import { CartPage } from '../../Pages/cartPage';

const pageUrl = require('../../Data/pageUrl').default;

test.describe('@regression, Item page', () => {
test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
  });

 // TC: 66 - Check that header is present
 test('TC:66', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const itemPage = new ItemPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await itemPage.validateItemPageHeader();
  });

  // TC: 67 - Check that burger menu is present
  test('TC:67', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const itemPage = new ItemPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await itemPage.validateBurgerMenu();
  });

  // TC: 68 - Check logout functionality from burger menu
  test('TC:68', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const itemPage = new ItemPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await itemPage.validateLogout();
    await loginPage.validateLoginForm();
  });

  // TC: 69 Check about functionality from burger menu
  test('TC:69', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const itemPage = new ItemPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await itemPage.validateAboutFunctionality();
  });

   // TC: 70 Check added item from product page is same as shown in item page
   test('TC:70', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const itemPage = new ItemPage(page);
    await loginPage.validateLoginWithValidCredentials();
    const expectedItemDetails = await productsPage.getItemDetailsBeforeAddingToCart();
    await productsPage.validateItemTitleLink();
    const actualItemDetails = await itemPage.getItemDetailsAfterRedirectionToItemPage();
    await expect(actualItemDetails).toEqual(expectedItemDetails);
   });

    // TC: 71 Check added item from checkout overview page is same as shown in owerview page
    test('TC:71', async({ page }) =>{
      const loginPage = new LoginPage(page);
      const productsPage = new ProductsPage(page);
      const cartPage = new CartPage(page);
      const itemPage = new ItemPage(page);
      const checkoutInformationPage = new CheckoutInformationPage(page);
      const сheckoutOverviewPage = new CheckoutOverviewPage(page);
      await loginPage.validateLoginWithValidCredentials();
      await productsPage.validatedAddItemToCart();
      await cartPage.validatedCheckoutButton();
      await checkoutInformationPage.validateCheckoutFormWithCorrectData();
      const actualItemDetails = await сheckoutOverviewPage.getItemDetailsFromOverviewPage();
      await сheckoutOverviewPage.validateItemTitleLink();
      const expectedItemDetails = await itemPage.getItemDetailsAfterRedirectionToItemPage();
      await expect(actualItemDetails).toEqual(expectedItemDetails);
     });

    // TC: 72 Check add to cart button
  test('TC:72', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const itemPage = new ItemPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await itemPage.validatedAddCartButton();
    await itemPage.validateCartBadge();
  });

   // TC: 73 Check go back to products page button
   test('TC:73', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const itemPage = new ItemPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await itemPage.validatedbackToProductsButton();
    await productsPage.validateproductsPageHeader();
  });

  // TC: 74 Check if user add item to the cart and then go back to products page - badge counter will should be visible
  test('TC:74', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const itemPage = new ItemPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await itemPage.validatedAddCartButton();
    await itemPage.validatedbackToProductsButton();
    await productsPage.validateproductsPageHeader();
    await productsPage.validateCartBadge();
  });

   // TC: 75 Check footer
  test('TC:75', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const itemPage = new ItemPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await itemPage.validateFooter();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
});
});