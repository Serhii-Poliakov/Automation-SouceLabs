import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { CartPage } from '../../Pages/cartPage';
import { CheckoutInformationPage } from '../../Pages/checkoutInformationPage';
import { BurgerMenu } from '../../Helper/burgerMenu';
import { Footer } from '../../Helper/footer';
import { Header } from '../../Helper/header';


const pageUrl = require('../../Data/pageUrl').default;

test.describe('@regression, Checkout information page', () => {
test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
    await page.waitForLoadState('networkidle');
  });

  // TC: 42 - Check that header is present
  // TC: 43 - Check that cart badge is present
  // TC: 44 - Check that filter is hidden
  // TC: 45 - Check that quantity icon is hidden
  // TC: 46 - Check that page title is present
  test('TC:42, 43, 44, 45, 46', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const header = new Header(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await expect(header.pageTitle).toHaveText('Checkout: Your Information');
    await header.validateHeader();
});

  // TC: 47 - Check burger menu form (all elements are present, close button)
  test('TC:47', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await burgerMenu.validateBurgerMenu();
});

  //TC: 48 - Check All Items functionality from burger menu
  test('TC:48', async({ page }) =>{
   const loginPage = new LoginPage(page);
   const productsPage = new ProductsPage(page);
   const cartPage = new CartPage(page);
   const burgerMenu = new BurgerMenu(page);
   await loginPage.validateLoginWithValidCredentials();
   await productsPage.validatedAddItemToCart();
   await cartPage.validatedCheckoutButton();
   await burgerMenu.validateAllItems();
 });

  // TC: 49 - Check logout functionality from burger menu
  test('TC:49', async({ page }) =>{
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

  // TC: 50 Check about functionality from burger menu
  test('TC:50', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await burgerMenu.validateAboutFunctionality();
});

 // TC: 51 Check checkout form
 test('TC:51', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFrom();
 });

  // TC: 52 Check checkout details with empty data
  test('TC:52', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithEmptyData();
 });

 // TC: 53 Check checkout details with empty First name
 test('TC:53', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithEmptyFirstName();
 });

 // TC: 54 Check checkout details with empty Last name
 test('TC:54', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithEmptyLastName();
 });

 // TC: 55 Check checkout details with empty zip code
 test('TC:55', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithEmptyZipCode();
 });

 // TC: 56 Check the button for clearing checkout form from errors
 test('TC:56', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCleaningErrorButton();
 });

 // TC: 57 Check checkout details with all correct data
 test('TC:57', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
 });

 // TC: 58 Check cancel functionality 
 test('TC:58', async({ page }) =>{
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

// TC: 59 Check footer
test('TC:59', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const footer = new Footer(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await footer.validateFooter();
});

test.afterEach(async ({ page }) => {
   await page.close();
});
});
