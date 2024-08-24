import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { CartPage } from '../../Pages/cartPage';
import { CheckoutInformationPage } from '../../Pages/checkoutInformationPage';
import { CheckoutOverviewPage} from '../../Pages/checkoutOverviewPage';


const pageUrl = require('../../Data/pageUrl').default;

test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
  });

  // TC: 46 - Check that header is present
  test('TC:46', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateproductsPageHeader();
  });


  // TC: 47 - Check that burger menu is present
  test('TC:47', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateBurgerMenu();
  });

  // TC: 48 - Check logout functionality from burger menu
  test('TC:48', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateLogout();
    await loginPage.validateLoginForm();
  });

  // TC: 49 Check about functionality from burger menu
  test('TC:49', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateAboutFunctionality();
  });

   // TC: 50 Check item added from items page is same as shown in cart page
   test('TC:51', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    const expectedItemDetails = await productsPage.getItemDetailsBeforeAddingToCart();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    const actualItemDetails = await сheckoutOverviewPage.getItemDetailsFromOverviewPage();
    await expect(actualItemDetails).toEqual(expectedItemDetails);
   });

   // TC: 52 Check payment information block
   test('TC:52', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatePaymentInformation(); 
   });

   // TC: 53 Check shipping information block
   test('TC:54', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateShipingInformation(); 
   });

   // TC: 55 Check price breakdown
   test('TC:55', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatePriceBreakdown(); 
   });

   // TC: 56 Check tax percentage 
   test('TC:56', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateTaxPercentage(); 
   });

   // TC: 57 Check price total price
   test('TC:57', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateTotalPrice(); 
   });

   // TC: 58 Check Finish button 
   test('TC:58', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedFinishButton(); 
   });

   // TC: 59 Check cancel button
   test('TC:59', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedCancelButton(); 
    await productsPage.validateproductsPageHeader();
   });

        // TC: 60 Check footer
  test('TC:60', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateFooter();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
});

