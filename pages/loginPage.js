const loginLocators = require('../locators/login')

class LoginPage {
  constructor(page) {
    this.page = page
  }
  // Open a URL
  async openURL(URL) {
    await this.page.goto(URL)
  }
  // Enter username in login page
  async enterUsername(username) {
    await this.page.waitForSelector(loginLocators.usernameField, { state: 'visible' })
    await this.page.fill(loginLocators.usernameField, username)
  }
  // Enter password in login page
  async enterPassword(password) {
    await this.page.waitForSelector(loginLocators.passwordField, { state: 'visible' })
    await this.page.fill(loginLocators.passwordField, password)
  }
  // Click the login button
  async clickLogin() {
    await this.page.waitForSelector(loginLocators.loginButton, { state: 'visible' })
    await this.page.click(loginLocators.loginButton)
  }
  // Login with username and password
  async login(username, password) {
    await this.enterUsername(username)
    await this.enterPassword(password)
    await this.clickLogin()
  }
}

module.exports = { LoginPage }
