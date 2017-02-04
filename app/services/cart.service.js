export const name = 'cartService'

export class CartService {
  constructor($http) {
    this.http = $http
    this.cart = []
  }

  loadCart() {
    this.http.get('http://localhost:8001/cart')
      .then(response => response.data)
      .then(items => this.cart.push.apply(this.cart, items))
  }

  addProduct(product, amount) {
    const existingProduct = this.cart.find(inCartProduct => product.id === inCartProduct.id)
    if (existingProduct) {
      existingProduct.amount += amount
      this.http.put('http://localhost:8001/cart/' + existingProduct.id, existingProduct)
    } else {
      const newProduct = angular.extend(angular.copy(product), {amount})
      this.http.post('http://localhost:8001/cart', newProduct)
        .then(() => this.cart.push(newProduct))
    }
  }

  removeProduct(product) {
    this.http.delete('http://localhost:8001/cart/' + product.id)
      .then(() => this.cart = this.cart.filter(inCartProduct => inCartProduct.id !== product.id))
  }
}
