export default class ApplicationController {
  constructor(productsService, cartService) {
    this.productsService = productsService
    this.cartService = cartService
  }

  get products() {
    return this.productsService.products
  }

  get promotedProducts() {
    return this.productsService.promotedProducts
  }

  get inCartProducts() {
    return this.cartService.cart
  }

  $onInit() {
    this.productsService.loadProducts()
    this.cartService.loadCart()
  }

  addProductToCart(product, amount) {
    this.cartService.addProduct(product, amount)
  }

  removeProductFromCart(product) {
    this.cartService.removeProduct(product)
  }
}
