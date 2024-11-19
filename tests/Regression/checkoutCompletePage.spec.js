import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { CartPage } from '../../Pages/cartPage';
import { CheckoutInformationPage } from '../../Pages/checkoutInformationPage';
import { CheckoutOverviewPage} from '../../Pages/checkoutOverviewPage';
import { CheckoutCompletePage} from '../../Pages/checkoutCompletePage';


const pageUrl = require('../../Data/pageUrl').default;

test.describe('@regression, Checkout Complete page', () => {
test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
  });

  // TC: 59 - Check that header is present
  // TC: 60 - Check that cart bagde is not displayed 
  test('TC:59', 'TC:60', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedFinishButton(); 
    await checkoutCompletePage.validateproductsPageHeader(); 
  });

  // TC: 61 - Check logout functionality from burger menu 
  test('TC:61', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedFinishButton();
    await checkoutCompletePage.validateLogout();
    await loginPage.validateLoginForm();
  });

  // TC: 62 Check about functionality from burger menu
  test('TC:62', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedFinishButton();
    await checkoutCompletePage.validateAboutFunctionality();
  });

  // TC: 63 Check item container
  test('TC:63', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedFinishButton();
    await checkoutCompletePage.validateCheckoutCompleteContainer();
  });

  // TC: 64 Check Back to home functionality
  test('TC:64', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedFinishButton();
    await checkoutCompletePage.validateBackToHomeButton();
    await productsPage.validateproductsPageHeader();
  });

  // TC: 65 Check footer
  test('TC:65', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedFinishButton(); 
    await checkoutCompletePage.validateFooter();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
});
});