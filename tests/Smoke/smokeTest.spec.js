import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';
import { ProductsPage } from '../../Pages/productsPage';
import { CheckoutInformationPage } from '../../Pages/checkoutInformationPage';
import { CheckoutOverviewPage } from '../../Pages/checkoutOverviewPage';
import { CheckoutCompletePage } from '../../Pages/checkoutCompletePage';
import { CartPage } from '../../Pages/cartPage';
import { BurgerMenu } from '../../Helper/burgerMenu';

const pageUrl = require('../../Data/pageUrl').default;

test.describe('@smoke, Smoke test', () => {
test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
  });

 test('Chekck main flow', async({ page }) =>{

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const сheckoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);
    const burgerMenu = new BurgerMenu(page);

    // Check login login with valid credentials
    await loginPage.validateLoginWithValidCredentials();
    console.log("Login is successful");
    await page.waitForTimeout(2000);

    // Check add item to cart 
    await productsPage.validatedAddItemToCart();
    console.log("item successfully added to cart");
    await page.waitForTimeout(2000);

    //Check item added from items page is same as shown in cart page 
    const expectedItemDetails = await productsPage.getItemDetailsBeforeAddingToCart();
    await cartPage.validateItemDetailsAfterAddingToCart(expectedItemDetails);
    console.log("Item in the cart is same as selected from items page");
    await page.waitForTimeout(2000);

    // Validate navigation to the Checkout information Page
    await cartPage.validatedCheckoutButton();
    console.log("Successful navigation to Checkout information Page");
    await page.waitForTimeout(2000);

    // Check checkout details with all correct data 
    await checkoutInformationPage.validateCheckoutFormWithCorrectData();
    console.log("Navigation to the Overview page with customer adress details");
    await page.waitForTimeout(2000);

    //Check item added from items page is same as shown in Overview page 
    const actualItemDetails = await сheckoutOverviewPage.getItemDetailsFromOverviewPage();
    await expect(actualItemDetails).toEqual(expectedItemDetails);
    console.log("Item in the Overview page is same as selected from items page");
    await page.waitForTimeout(2000);

    // Validate navigation to the checkout complete page
    await сheckoutOverviewPage.validatedFinishButton();
    console.log("Navigation to the checkout complete page");  
    await page.waitForTimeout(2000); 

    // Check item container 
    await checkoutCompletePage.validateCheckoutCompleteContainer();
    console.log("Thank you for your order!");

   // Check logout
   await burgerMenu.validateLogout();
   console.log("Logout is successful");
  });

    test.afterEach(async ({ page }) => {
      await page.close();
 });

});