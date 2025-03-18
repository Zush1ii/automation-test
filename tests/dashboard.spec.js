const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/loginPage')
const { CommonPage } = require('../pages/commonPage')
const { DashboardPage } = require('../pages/dashboardPage')
const dashboardLocators = require('../locators/dashboard')

let loginPage
let commonPage
let dashboardPage
test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
  commonPage = new CommonPage(page)
  dashboardPage = new DashboardPage(page)
})

test('Check add, remove the product', async ({ page }) => {
  await loginPage.openURL('https://www.saucedemo.com/')
  await loginPage.login('standard_user', 'secret_sauce')
  //Check the current number of items in the cart
  const current_number = await commonPage.getNumberFromElement(dashboardLocators.cartBadge)
  
  //Test case 1: Add a product to the cart and check the number of items in the cart
  await dashboardPage.addProductToCart('Sauce Labs Backpack')
  await dashboardPage.addProductToCart('Sauce Labs Onesie')
  //Check the number of items in the cart after add new item
  const updated_number = await commonPage.getNumberFromElement(dashboardLocators.cartBadge)
  //Compare the number of items in the cart after add new item
  expect(updated_number).toBe(current_number + 2)

  //Test case 2: Check the product price, information in the cart and compare with the product information on the product page
  //Get the product information on the product page
  const item_desc_1 = await commonPage.getElementTextFromName(dashboardLocators.itemDescription, 'Sauce Labs Backpack')
  const item_desc_2 = await commonPage.getElementTextFromName(dashboardLocators.itemDescription, 'Sauce Labs Onesie')
  const item_price_1 = await commonPage.getElementTextFromName(dashboardLocators.itemPrice, 'Sauce Labs Backpack')
  const item_price_2 = await commonPage.getElementTextFromName(dashboardLocators.itemPrice, 'Sauce Labs Onesie')
  //Click on the cart icon to go to the cart page
  await commonPage.clickElement(dashboardLocators.cartBadge)
  //Verify the title of the cart page
  await commonPage.verifyText(dashboardLocators.title, 'Your Cart')
  //Get the product information on the cart page
  const item_desc_cart_1 = await commonPage.getElementTextFromName(dashboardLocators.itemCartDescription, 'Sauce Labs Backpack')
  const item_desc_cart_2 = await commonPage.getElementTextFromName(dashboardLocators.itemCartDescription, 'Sauce Labs Onesie')
  const item_price_cart_1 = await commonPage.getElementTextFromName(dashboardLocators.itemCartPrice, 'Sauce Labs Backpack')
  const item_price_cart_2 = await commonPage.getElementTextFromName(dashboardLocators.itemCartPrice, 'Sauce Labs Onesie')
  //Compare the product information on the product page with the product information on the cart page
  await commonPage.compareText(item_desc_1, item_desc_cart_1)
  await commonPage.compareText(item_desc_2, item_desc_cart_2)
  await commonPage.compareText(item_price_1, item_price_cart_1)
  await commonPage.compareText(item_price_2, item_price_cart_2)

  //Test case 3: Back to the product page from the cart page
  await commonPage.clickElement(dashboardLocators.continueShoppingButton)
  await commonPage.verifyText(dashboardLocators.title, 'Products')

  //Test case 4: Remove a product from the cart and check the number of items in the cart
  await dashboardPage.removeProduct('Sauce Labs Backpack')
  await dashboardPage.removeProduct('Sauce Labs Onesie')
  const new_updated_number = await commonPage.getNumberFromElement(dashboardLocators.cartBadge)
  //Compare the number of items in the cart after remove the item
  expect(new_updated_number).toBe(0)
})
