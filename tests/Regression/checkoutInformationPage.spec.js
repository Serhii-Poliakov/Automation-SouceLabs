import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { CartPage } from '../../Pages/cartPage';
import { CheckoutInformationPage } from '../../Pages/checkoutInformationPage';


const pageUrl = require('../../Data/pageUrl').default;

test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
  });

  // TC: 28 - Check that header is present
  test('TC:28', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateproductsPageHeader();
});

  // TC: 29 - Check burger menu form (all elements are present, close button)
  test('TC:29', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateBurgerMenu();
});

  // TC: 30 - Check logout functionality from burger menu
  test('TC:30', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateLogout();
    await loginPage.validateLoginForm();
});

  // TC: 31 Check about functionality from burger menu
  test('TC:31', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateAboutFunctionality();
});

 // TC: 32 Check checkout form
 test('TC:32', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFrom();
 });

  // TC: 33 Check checkout details with empty data
  test('TC:33', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithEmptyData();
 });

 // TC: 34 Check checkout details with empty First name
 test('TC:34', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithEmptyFirstName();
 });

 // TC: 35 Check checkout details with empty Last name
 test('TC:35', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithEmptyLastName();
 });

 // TC: 36 Check checkout details with empty zip code
 test('TC:36', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithEmptyZipCode();
 });

 // TC: 37 Check the button for clearing checkout form from errors
 test('TC:37', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCleaningErrorButton();
 });

 // TC: 38 Check checkout details with all correct data
 test('TC:38', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validatedContinueButton();
 });

 // TC: 39 Check cancel functionality 
 test('TC:39', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validatedCancelButton();
    await expect(cartPage.cartContainer).toBeVisible();
 });
