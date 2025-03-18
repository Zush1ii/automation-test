const dashboardLocators = require('../locators/dashboard')

class DashboardPage {
  constructor(page) {
    this.page = page
  }

  // Add a product to the cart by product name
  async addProductToCart(productName) {
    const productLocator = dashboardLocators.addToCartButton(productName)
    await this.page.waitForSelector(productLocator, { state: 'visible' })
    await this.page.click(productLocator)
  }

  // Remove a product from the cart by product name
  async removeProduct(productName) {
    const productLocator = dashboardLocators.removeProductButton(productName)
    await this.page.waitForSelector(productLocator, { state: 'visible' })
    await this.page.click(productLocator)
  }

}

module.exports = { DashboardPage }
