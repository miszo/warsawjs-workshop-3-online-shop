export default class ApplicationController {
  constructor(productsService) {
    this.productsService = productsService;
    // this.products = productsService.products;
    this.promotedProducts = [
      {name: 'Apple', price: 5},
      {name: 'Pineapple', price: 10}
    ];
    this.inCartProducts = []
  }

  get products() {
    return this.productsService.products;
  }

  $onInit() {
    this.productsService.loadProducts();
  }
  addProductToCart(product, amount) {
    const addedProduct =  angular.extend(angular.copy(product), {amount}) // TODO: count products & calculate prices in cart
    this.inCartProducts.push(addedProduct)
    }
}
