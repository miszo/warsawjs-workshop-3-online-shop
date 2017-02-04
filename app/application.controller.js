export default class ApplicationController {
  constructor(productsService) {
    this.productsService = productsService
    this.inCartProducts = []
  }

  get products() {
    return this.productsService.products
  }

  get promotedProducts() {
    return this.productsService.promotedProducts
  }

  $onInit() {
    this.productsService.loadProducts()
  }

  addProductToCart(product, amount) {
    console.log(`Adding ${product.name} to cart. ${amount} items.`)
    const addedProduct =  angular.extend(angular.copy(product), {amount})
    this.inCartProducts.push(addedProduct)
  }

  removeProductFromCart(product) {
    this.inCartProducts = this.inCartProducts.filter(({id}) => id !== product.id)
  }
}
