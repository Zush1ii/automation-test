const { test } = require('@playwright/test')
const { LoginPage } = require('../pages/loginPage')
const { CommonPage } = require('../pages/commonPage')
const LoginLocators = require('../locators/login')
const dashboardLocators = require('../locators/dashboard')


let loginPage
let commonPage
test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
  commonPage = new CommonPage(page)
})

//Test Case 1: Check the login page
test('Verify login page', async ({ page }) => {
  //Open the page from the URL
  await loginPage.openURL('https://www.saucedemo.com/')
  //Check the logo of the login page
  await commonPage.verifyText(LoginLocators.loginLogo, 'Swag Labs')
})

//Test Case 2: Verify login successfully with valid user
test('Verify login with valid user', async ({ page }) => {
  await loginPage.openURL('https://www.saucedemo.com/')
  //Login with valid user
  await loginPage.login('standard_user', 'secret_sauce')
  //Check the header of the dashboard page
  await commonPage.verifyText(dashboardLocators.title, 'Products')
  await commonPage.verifyText(dashboardLocators.header, 'Swag Labs')
})

//Test Case 3: Check error message in login screen
test('Verify error message when login with different invalid users', async ({ page }) => {
  await loginPage.openURL('https://www.saucedemo.com/')
  //Check error message when username and password are empty
  await loginPage.login('', '')
  await commonPage.verifyText(LoginLocators.errorMessage, 'Epic sadface: Username is required')
  //Check error message when password is empty
  await loginPage.login('standard_user', '')
  await commonPage.verifyText(LoginLocators.errorMessage, 'Epic sadface: Password is required')
  //Check error message when login by locked user
  await loginPage.login('locked_out_user', 'secret_sauce')
  await commonPage.verifyText(LoginLocators.errorMessage, 'Epic sadface: Sorry, this user has been locked out.')
})
