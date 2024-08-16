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

  // TC: 40 - Check that header is present
  test('TC:40', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateproductsPageHeader();
  });


  // TC: 41 - Check that burger menu is present
  test('TC:41', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateBurgerMenu();
  });

  // TC: 42 - Check logout functionality from burger menu
  test('TC:42', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateLogout();
    await loginPage.validateLoginForm();
  });

  // TC: 43 Check about functionality from burger menu
  test('TC:43', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateAboutFunctionality();
  });

   // TC: 44 Check item added from items page is same as shown in cart page
   test('TC:44', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    const expectedItemDetails = await productsPage.getItemDetailsBeforeAddingToCart();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    const actualItemDetails = await сheckoutOverviewPage.getItemDetailsAfterAddingToCart();
    await expect(actualItemDetails).toEqual(expectedItemDetails);
   });

   // TC: 45 Check payment information block
   test('TC:45', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatePaymentInformation(); 
   });

   // TC: 46 Check shipping information block
   test('TC:46', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateShipingInformation(); 
   });

   // TC: 47 Check price breakdown
   test('TC:47', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatePriceBreakdown(); 
   });

   // TC: 48 Check tax percentage 
   test('TC:48', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateTaxPercentage(); 
   });

   // TC: 49 Check price total price
   test('TC:49', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateTotalPrice(); 
   });

   // TC: 50 Check Finish button 
   test('TC:50', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedFinishButton(); 
   });

   // TC: 51 Check cancel button
   test('TC:51', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedCancelButton(); 
    await productsPage.validateproductsPageHeader();
   });

