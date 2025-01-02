import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { CartPage } from '../../Pages/cartPage';
import { CheckoutInformationPage } from '../../Pages/checkoutInformationPage';
import { BurgerMenu } from '../../Helper/burgerMenu';


const pageUrl = require('../../Data/pageUrl').default;

test.describe('@regression, Checkout information page', () => {
test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
  });

  // TC: 33 - Check that header is present
  test('TC:33', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateproductsPageHeader();
});

  // TC: 34 - Check burger menu form (all elements are present, close button)
  test('TC:34', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await burgerMenu.validateBurgerMenu();
});

  //TC: XX - Check All Items functionality from burger menu
  test('TC:XX', async({ page }) =>{
   const loginPage = new LoginPage(page);
   const productsPage = new ProductsPage(page);
   const cartPage = new CartPage(page);
   const burgerMenu = new BurgerMenu(page);
   await loginPage.validateLoginWithValidCredentials();
   await productsPage.validatedAddItemToCart();
   await cartPage.validatedCheckoutButton();
   await burgerMenu.validateAllItems();
 });

  // TC: 35 - Check logout functionality from burger menu
  test('TC:35', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await burgerMenu.validateLogout();
    await loginPage.validateLoginForm();
});

  // TC: 36 Check about functionality from burger menu
  test('TC:36', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await burgerMenu.validateAboutFunctionality();
});

 // TC: 37 Check checkout form
 test('TC:37', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFrom();
 });

  // TC: 38 Check checkout details with empty data
  test('TC:38', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithEmptyData();
 });

 // TC: 39 Check checkout details with empty First name
 test('TC:39', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithEmptyFirstName();
 });

 // TC: 40 Check checkout details with empty Last name
 test('TC:40', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithEmptyLastName();
 });

 // TC: 41 Check checkout details with empty zip code
 test('TC:41', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithEmptyZipCode();
 });

 // TC: 42 Check the button for clearing checkout form from errors
 test('TC:42', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCleaningErrorButton();
 });

 // TC: 43 Check checkout details with all correct data
 test('TC:43', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
 });

 // TC: 44 Check cancel functionality 
 test('TC:44', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validatedCancelButton();
    await expect(cartPage.cartContainer).toBeVisible();
 });

   // TC: 45 Check footer
test('TC:45', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton(); 
    await checkoutInformationPage.validateFooter();
});

test.afterEach(async ({ page }) => {
   await page.close();
});
});
