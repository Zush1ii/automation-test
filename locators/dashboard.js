const dashboardLocators = {
  addToCartButton: (productName) =>
    `//div[text()='${productName}']//ancestor::div[@class='inventory_item_description']//button[text()='Add to cart']`,
  header: `//div[@class='app_logo']`,
  title: `//span[@class='title']`,
  cartBadge: `//span[@class='shopping_cart_badge']`,
  removeProductButton: (productName) => `//div[text()='${productName}']//ancestor::div[@class='inventory_item_description']//button[text()='Remove']`,
  itemDescription: (productName) => `//div[text()='${productName}']//ancestor::div[@class='inventory_item_description']//div[@class='inventory_item_desc']`,
  itemPrice: (productName) => `//div[text()='${productName}']//ancestor::div[@class='inventory_item_description']//div[@class='inventory_item_price']`,
  itemCartDescription: (productName) => `//div[text()='${productName}']//ancestor::div[@class='cart_item_label']//div[@class='inventory_item_desc']`,
  itemCartPrice: (productName) => `//div[text()='${productName}']//ancestor::div[@class='cart_item_label']//div[@class='inventory_item_price']`,
  continueShoppingButton: `//button[@id='continue-shopping']`,
}

module.exports = dashboardLocators
