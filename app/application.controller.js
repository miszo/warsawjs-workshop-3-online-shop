export default class ApplicationController {
  constructor() {
    this.products = [
      {name: 'Orange', price: 10, id: 1},
      {name: 'Banana', price: 20, id: 2}
    ]
    this.promotedProducts = [
      {name: 'Apple', price: 5, id: 3},
      {name: 'Pineapple', price: 10, id: 4}
    ]
    this.inCartProducts = []
  }

  addProductToCart(product, amount) {
    console.log(`Adding ${product.name} to cart. ${amount} items.`)
    const addedProduct =  angular.extend(angular.copy(product), {amount})
    this.inCartProducts.push(addedProduct)
  }
}
