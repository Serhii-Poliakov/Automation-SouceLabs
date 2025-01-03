import { test } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { CartPage } from '../../Pages/cartPage';
import { BurgerMenu } from '../../Helper/burgerMenu';
import { Footer } from '../../Helper/footer';

const pageUrl = require('../../Data/pageUrl').default;

test.describe('@regression, Cart page', () => {
test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
    await page.waitForLoadState('networkidle');
  });

  // TC: 24 - Check that header is present
  test('TC:24', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validateCartPageHeader();
  });


  // TC: 25 - Check burger menu form (all elements are present, close button)
  test('TC:25', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await burgerMenu.validateBurgerMenu();
  });

  //TC: XX - Check All Items functionality from burger menu
  test('TC:XX', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await burgerMenu.validateAllItems();
  });

  // TC: 26 - Check logout functionality from burger menu
  test('TC:26', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await burgerMenu.validateLogout();
    await loginPage.validateLoginForm();
  });

  // TC: 27 Check about functionality from burger menu
  test('TC:27', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const burgerMenu = new BurgerMenu(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await burgerMenu.validateAboutFunctionality();
  });

   // TC: 28 Check item added from items page is same as shown in cart page
   test('TC:28', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    const expectedItemDetails = await productsPage.getItemDetailsBeforeAddingToCart();
    await productsPage.validatedAddItemToCart();
    await cartPage.validateItemDetailsAfterAddingToCart(expectedItemDetails);
    });

    // TC: 29 Check remove button
  test('TC:29', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedRemoveFromCartButton();
    });

     // TC: 30 Check continue shopping button
  test('TC:30', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedContinueShoppingButton();
    });

     // TC: 31 Check checkout button
  test('TC:31', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await cartPage.validatedCheckoutButton();
    });

     // TC: 32 Check footer
  test('TC:32', async({ page }) =>{
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const footer = new Footer(page);
    await loginPage.validateLoginWithValidCredentials();
    await productsPage.validatedAddItemToCart();
    await footer.validateFooter();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
});
});