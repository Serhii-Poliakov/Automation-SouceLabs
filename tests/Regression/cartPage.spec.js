import { test } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { CartPage } from '../../Pages/cartPage';

const pageUrl = require('../../Data/pageUrl').default;

test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
  });

  // TC: 20 - Check that header is present
  test('TC:20', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validateItemsPageHeader();
  });


  // TC: 21 - Check burger menu form (all elements are present, close button)
  test('TC:21', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validateBurgerMenu();
  });

  // TC: 22 - Check logout functionality from burger menu
  test('TC:22', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validateLogout();
    await loginPage.validateLoginForm();
  });

  // TC: 23 Check about functionality from burger menu
  test('TC:23', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validateAboutFunctionality();
  });

   // TC: 24 Check item added from items page is same as shown in cart page
   test('TC:24', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    const expectedItemDetails = await itemsPage.getItemDetailsBeforeAddingToCart();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validateItemDetailsAfterAddingToCart(expectedItemDetails);
    });

    // TC: 25 Check remove button
  test('TC:25', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedRemoveFromCartButton();
    });

     // TC: 26 Check continue shopping button
  test('TC:26', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedContinueShoppingButton();
    });

     // TC: 27 Check checkout button
  test('TC:27', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    });