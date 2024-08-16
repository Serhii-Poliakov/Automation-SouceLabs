import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { CartPage } from '../../Pages/cartPage';
import { CheckoutInformationPage } from '../../Pages/checkoutInformationPage';
import { CheckoutOverviewPage} from '../../Pages/checkoutOverviewPage';
import { CheckoutCompletePage} from '../../Pages/checkoutCompletePage';


const pageUrl = require('../../Data/pageUrl').default;

test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
  });

  // TC: 52 - Check that header is present
  test('TC:52', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedFinishButton(); 
    await checkoutCompletePage.validateproductsPageHeader(); 
  });

  // TC: 53 - Check logout functionality from burger menu 
  test('TC:53', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedFinishButton();
    await checkoutCompletePage.validateLogout();
    await loginPage.validateLoginForm();
  });

  // TC: 54 Check about functionality from burger menu
  test('TC:54', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedFinishButton();
    await checkoutCompletePage.validateAboutFunctionality();
  });

  // TC: 55 Check item container
  test('TC:55', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedFinishButton();
    await checkoutCompletePage.validateCheckoutCompleteContainer();
  });

  // TC: 56 Check Back to home functionality
  test('TC:56', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validatedFinishButton();
    await checkoutCompletePage.validateBackToHomeButton();
    await productsPage.validateproductsPageHeader();
  });