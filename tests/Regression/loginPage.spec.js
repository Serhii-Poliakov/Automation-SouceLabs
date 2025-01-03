import { test } from '@playwright/test';
import { LoginPage } from '../../Pages/loginPage';

const pageUrl = require('../../Data/pageUrl').default;

test.describe('@regression, Login page', () => {
test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl.swagLabs);
    await page.waitForLoadState('networkidle');
  });
  
// TC:1 - Check that header logo is present
// TC:2 - Check that login form is present
  test('TC:1, 2', async({ page }) =>{
    const loginPage = new LoginPage(page);
    await loginPage.validateHeaderLogo();
    await loginPage.validateLoginForm();
  });

// TC:3 - Check login with empty fields
// TC:4 - Check that after clicking the Clear Error button, the error message disappears.
  test('TC:3, 4', async({ page }) =>{
    const loginPage = new LoginPage(page);
    await loginPage.validateEmptyLoginInputs();
    await loginPage.validateClearErrorButton();
  });

// TC:5 - Check login with invalid username and valid password
test('TC:5', async({ page }) =>{
  const loginPage = new LoginPage(page);
  await loginPage.validateLoginWithInvalidUserNameAndValidPassword();
});

// TC:6 - Check login with correct username and invalid password
test('TC:6', async({ page }) =>{
  const loginPage = new LoginPage(page);
  await loginPage.validateLoginWithInvalidPasswordAndValidUsername();
});

// TC:7 - Check login with correct password and empty username
test('TC:7', async({ page }) =>{
  const loginPage = new LoginPage(page);
  await loginPage.fillEmptyUsernameAndCorrectPassword();
});

// TC:8 - Check login with correct username and empty password
test('TC:8', async({ page }) =>{
  const loginPage = new LoginPage(page);
  await loginPage.validateLoginWithCorrectPasswordAndEmptyUsername();
});

// TC:9 - Check login login with valid credentials
test('TC:9', async({ page }) =>{
  const loginPage = new LoginPage(page);
  await loginPage.validateLoginWithValidCredentials();
});


  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
});
});

  
