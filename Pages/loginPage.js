import { expect } from '@playwright/test';
const loginCredentials = require('../Data/loginCredentials').default;

//This page is created to mantain all locators on the Login page
export class LoginPage {

    constructor(page) {
        this.page = page;

//Header
this.logo = page.locator('.login_logo');

//Login form 
this.loginForm = page.locator('#login_button_container')
this.userName = page.locator('input#user-name');
this.password = page.locator('input#password');
this.loginButton = page.locator('#login-button');

// Login error
this.errorTitle = page.locator('h3[data-test="error"]');
this.errorButton = page.locator('.error-button');

//Login logo
this.loginLogo = page.locator('.bot_column');

//Footer
this.loginFooter=page.locator('.login_credentials_wrap-inner')
this.loginCredentialsUserName = page.locator('#login_credentials');
this.loginCredentialsPassword = page.locator('.login_password');
}

// Validate the header content on this page
async validateHeaderLogo(){
    await expect(this.logo).toBeVisible();
    console.log("Logo is visible");
}

// Validate login form 
async validateLoginForm(){
    await expect(this.loginForm).toBeVisible();
    await expect(this.userName).toBeVisible();
    await expect(this.password).toBeVisible();
    console.log("Login form is visible");
}

// Validate login button 
async validateLoginButton() {
    await expect(this.errorTitle).toBeVisible();
    await expect(this.loginButton).toBeEnabled();
    console.log("Login button is visible and enabled");
}

//Validate empty login inputs
async validateEmptyLoginInputs() {
    await this.loginButton.click();
    await expect(this.errorTitle).toBeVisible();
    await expect(this.errorTitle).toHaveText('Epic sadface: Username is required');
    console.log("Epic sadface: Username is required");
}

// Validate clear error button
async validateClearErrorButton() {
    await this.loginButton.click();
    await expect(this.errorButton).toBeVisible();
    await expect(this.errorButton).toBeEnabled();
    await this.errorButton.click();
    await expect(this.errorButton).toBeHidden();
    console.log("Login error is clear");
}

// Fill Invalid username
async fillInvalidUsername() {
    await this.userName.click();
    await this.userName.fill("ytrewq45");
    await this.password.click();
    await this.password.fill(loginCredentials.userName); 
}

// Validate login with invalid username and correct password
async validateLoginWithInvalidUserNameAndValidPassword() {
    await this.fillInvalidUsername();
    await this.loginButton.click();
    await expect(this.errorTitle).toBeVisible();
    await expect(this.errorTitle).toHaveText('Epic sadface: Username and password do not match any user in this service');
    console.log("Epic sadface: Username and password do not match any user in this service");
}

// Fill Invalid password 
async fillInvalidPassword() {
    await this.userName.click();
    await this.userName.fill(loginCredentials.userName);
    await this.password.click();
    await this.password.fill("qwerty123"); 
}

// Validate login with invalid password and correct username
async validateLoginWithInvalidPasswordAndValidUsername() {
    await this.fillInvalidPassword();
    await this.loginButton.click();
    await expect(this.errorTitle).toBeVisible();
    await expect(this.errorTitle).toHaveText('Epic sadface: Username and password do not match any user in this service');
    console.log("Epic sadface: Username and password do not match any user in this service");
}

// Fill empty username and correct password
async fillEmptyUsernameAndCorrectPassword() {
    await this.userName.click();
    await this.userName.fill("");
    await this.password.click();
    await this.password.fill(loginCredentials.password);
}

// Validate login with correct password and empty username
async validateLoginWithCorrectPasswordAndEmptyUsername() {
    await this.fillEmptyUsernameAndCorrectPassword();
    await this.loginButton.click();
    await expect(this.errorTitle).toBeVisible();
    await expect(this.errorTitle).toHaveText('Epic sadface: Username is required');
    console.log("Epic sadface: Username is required");
}

// Fill username and empty password
async fillUsernameAndEmptyPassword() {
    await this.userName.click();
    await this.userName.fill(loginCredentials.userName);
    await this.password.click();
    await this.password.fill("");
}

// Validate login with correct username and empty password 
async validateLoginWithCorrectUsernameAndEmptyPassword() {
    await this.fillUsernameAndEmptyPassword();
    await this.loginButton.click();
    await expect(this.errorTitle).toBeVisible();
    await expect(this.errorTitle).toHaveText("Epic sadface: Password is required");
    console.log("Epic sadface: Password is required");
}

// Fill valid credentials
async fillValidCredentials() {
    await this.userName.click();
    await this.userName.fill(loginCredentials.userName);
    await this.password.click();
    await this.password.fill(loginCredentials.password);
}

// Validate login with valid credentials 
async validateLoginWithValidCredentials() {
    await this.fillValidCredentials();
    await this.loginButton.click();
}
}
