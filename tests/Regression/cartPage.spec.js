import { test } from '@playwright/test';
import { expect } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { CartPage } from '../../Pages/cartPage';
import { BurgerMenu } from '../../Helper/burgerMenu';
import { Footer } from '../../Helper/footer';
import { Header } from '../../Helper/header';

const pageUrl = require('../../Data/pageUrl').default;

test.describe('@regression, Cart page', () => {
test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
    await page.waitForLoadState('networkidle');
  });

  // TC: 28 - Check that header is present
  // TC: 29 - Check that cart badge is present
  // TC: 30 - Check that filter is hidden
  // TC: 31 - Check that quantity icon is visible
  // TC: 32 - Check that page title is present
  test('TC:28, 29, 30, 31, 32', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const header = new Header(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await expect(header.pageTitle).toHaveText('Your Cart');
    await header.validateHeader();
  });


  // TC: 33 - Check burger menu form (all elements are present, close button)
  test('TC:33', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await burgerMenu.validateBurgerMenu();
  });

  // TC: 34 - Check All Items functionality from burger menu
  test('TC:34', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await burgerMenu.validateAllItems();
  });

  // TC: 35 - Check logout functionality from burger menu
  test('TC:35', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await burgerMenu.validateLogout();
    await loginPage.validateLoginForm();
  });

  // TC: 36 Check about functionality from burger menu
  test('TC:36', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await burgerMenu.validateAboutFunctionality();
  });

   // TC: 37 Check item added from items page is same as shown in cart page
   test('TC:37', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    const expectedItemDetails = await productsPage.getItemDetailsBeforeAddingToCart();
    await productsPage.validatedAddItemToCart();
    await cartPage.validateItemDetailsAfterAddingToCart(expectedItemDetails);
    });

    // TC: 38 Check remove button
  test('TC:38', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedRemoveFromCartButton();
    });

     // TC: 39 Check continue shopping button
  test('TC:39', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedContinueShoppingButton();
    });

     // TC: 40 Check checkout button
  test('TC:40', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    });

     // TC: 41 Check footer
  test('TC:41', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const footer = new Footer(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await footer.validateFooter();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
});
});