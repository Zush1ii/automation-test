const { expect } = require('@playwright/test')

class CommonPage {
  constructor(page) {
    this.page = page
  }

  // Verify the text of an element
  async verifyText(locator, expectedText) {
    await this.page.waitForSelector(locator, { state: 'visible' })
    await expect(this.page.locator(locator)).toHaveText(expectedText)
  }

  // Pause the browser for a specific time
  async pauseBrowser(time) {
    await this.page.waitForTimeout(time)
  }

  // Click an element
  async clickElement(locator) {
    await this.page.waitForSelector(locator, { state: 'visible' })
    await this.page.click(locator)
  }

  // Compare two texts
  async compareText(actualText, expectedText) {
    try {
      expect(actualText).toBe(expectedText)
      console.log(`MATCH: Expected '${expectedText}', got '${actualText}'`)
    } catch (error) {
      console.log(`MISMATCH: Expected '${expectedText}', but got '${actualText}'`)
      throw error
    }
  }

  // Get the text of an element by name
  async getElementTextFromName(locatorFunction, name) {
    const locator = await this.page.locator(locatorFunction(name))
    const isVisible = await locator.isVisible()

    if (isVisible) {
      return (await locator.textContent()).trim()
    }

    return ""
  }

  // Get the number of items in the cart
  async getNumberFromElement(element) {
    const locator = await this.page.locator(element)
    const isVisible = await locator.isVisible()
    if (isVisible) {
      const text = await locator.textContent()
      const count = parseInt(text, 10)
      return isNaN(count) ? 0 : count
    }
    return 0
  }

}
module.exports = { CommonPage }
