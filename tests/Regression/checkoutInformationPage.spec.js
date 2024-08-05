import { test } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { CartPage } from '../../Pages/cartPage';
import { CheckoutPage } from '../../Pages/checkoutInformationPage';


const pageUrl = require('../../Data/pageUrl').default;

test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
  });

  // TC: 29 - Check that header is present
  test('TC:29', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutPage.validateItemsPageHeader();
});

  // TC: 30 - Check burger menu form (all elements are present, close button)
  test('TC:30', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutPage.validateBurgerMenu();
});

  // TC: 31 - Check logout functionality from burger menu
  test('TC:31', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutPage.validateLogout();
    await loginPage.validateLoginForm();
});

  // TC: 32 Check about functionality from burger menu
  test('TC:32', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutPage.validateAboutFunctionality();
});

   // TC: 33 Check about functionality from burger menu
   test('TC:33', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutPage.validateAboutFunctionality();
});

 // TC: 34 Check checkout form
 test('TC:34', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutPage.validateCheckoutFrom();
 });

  // TC: 35 Check checkout details with empty data
  test('TC:35', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutPage.validateCheckoutFormWithEmptyData();
 });

 // TC: 36 Check checkout details with empty First name
 test('TC:36', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutPage.validateCheckoutFormWithEmptyFirstName();
 });

 // TC: 37 Check checkout details with empty Last name
 test('TC:37', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutPage.validateCheckoutFormWithEmptyLastName();
 });

 // TC: 38 Check checkout details with empty zip code
 test('TC:38', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutPage.validateCheckoutFormWithEmptyZipCode();
 });

 // TC: 39 Check the button for clearing checkout form from errors
 test('TC:39', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutPage.validateCleaningErrorButton();
 });

 // TC: 40 Check checkout details with all correct data
 test('TC:40', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutPage.validatedContinueButton();
 });

 // TC: 41 Check checkout details with all correct data
 test('TC:41', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutPage.validatedCancelButton();
 });
