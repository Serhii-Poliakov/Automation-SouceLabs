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
  test('TC:20', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateItemsPageHeader();
  });


  // TC: 41 - Check burger menu form (all elements are present, close button)
  test('TC:21', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateBurgerMenu();
  });

  // TC: 42 - Check logout functionality from burger menu
  test('TC:22', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateLogout();
    await loginPage.validateLoginForm();
  });

  // TC: 43 Check about functionality from burger menu
  test('TC:23', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    await сheckoutOverviewPage.validateAboutFunctionality();
  });

   // TC: 44 Check item added from items page is same as shown in cart page
   test('TC:24', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const itemsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    await loginPage.validateLoginWithValidCredentials();
    const expectedItemDetails = await itemsPage.getItemDetailsBeforeAddingToCart();
    await itemsPage.validatedAddToCartButton();
    await cartPage.validatedCheckoutButton();
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    const actualItemDetails = await сheckoutOverviewPage.getItemDetailsAfterAddingToCart();
    // Сравниваем результат вызова метода с ожидаемым значением
    await expect(actualItemDetails).toEqual(expectedItemDetails);
   });

    
     // await сheckoutOverviewPage.validateItemDetailsAfterAddingToCart(expectedItemDetails);