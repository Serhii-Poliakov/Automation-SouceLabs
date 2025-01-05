import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { ItemPage } from '../../Pages/itemPage';
import { CheckoutInformationPage } from '../../Pages/checkoutInformationPage';
import { CheckoutOverviewPage } from '../../Pages/checkoutOverviewPage';
import { CartPage } from '../../Pages/cartPage';
import { BurgerMenu } from '../../Helper/burgerMenu';
import { Footer } from '../../Helper/footer';
import { Header } from '../../Helper/header';

const pageUrl = require('../../Data/pageUrl').default;

test.describe('@regression, Item page', () => {
test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
    await page.waitForLoadState('networkidle');
  });

  // TC: 90 - Check that header is present
  // TC: 91 - Check that cart badge is hidden
  // TC: 92 - Check Check that filter is hidden
  // TC: 93 - Check that quantity icon is hidden
  // TC: 94 - Check that page title is hidden
 test('TC:90, 91, 92, 93, 94', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const header = new Header(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await expect(header.pageTitle).toBeHidden();
    await header.validateHeader();
  });

  // TC: 95 - Check that burger menu is present
  test('TC:95', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await burgerMenu.validateBurgerMenu();
  });

   //TC: 96 - Check All Items functionality from burger menu
   test('TC:96', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await burgerMenu.validateAllItems();
  });

  // TC: 97 - Check logout functionality from burger menu
  test('TC:97', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await burgerMenu.validateLogout();
    await loginPage.validateLoginForm();
  });

  // TC: 98 Check about functionality from burger menu
  test('TC:98', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await burgerMenu.validateAboutFunctionality();
  });

   // TC: 99 Check added item from product page is same as shown in item page
   test('TC:99', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const itemPage = new ItemPage(page);
    await loginPage.validateLoginWithValidCredentials();
    const expectedItemDetails = await productsPage.getItemDetailsBeforeAddingToCart();
    await productsPage.validateItemTitleLink();
    const actualItemDetails = await itemPage.getItemDetailsAfterRedirectionToItemPage();
    await expect(actualItemDetails).toEqual(expectedItemDetails);
   });

    // TC: 100 Check added item from checkout overview page is same as shown in owerview page
    test('TC:100', async({ page }) =>{
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

  // TC: 101 Check add to cart button
  test('TC:101', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const itemPage = new ItemPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await itemPage.validatedAddCartButton();
    await itemPage.validateCartBadge();
  });

   // TC: 102 Check go back to products page button
   test('TC:102', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const itemPage = new ItemPage(page);
    const header = new Header(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await itemPage.validatedbackToProductsButton();
    await header.validateHeader();
  });

  // TC: 103 Check if user add item to the cart and then go back to products page - badge counter will should be visible
  test('TC:103', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const itemPage = new ItemPage(page);
    const header = new Header(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await itemPage.validatedAddCartButton();
    await itemPage.validatedbackToProductsButton();
    await productsPage.validateCartBadge();
  });

   // TC: 104 Check footer
  test('TC:104', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const footer = new Footer(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validateItemTitleLink();
    await footer.validateFooter();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
});
});