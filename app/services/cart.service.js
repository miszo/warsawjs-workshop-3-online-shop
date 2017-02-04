export const name = 'cartService'

export class CartService {
  constructor($http, apiUrl) {
    this.http = $http
    this.apiUrl = apiUrl
    this.cart = []
  }

  loadCart() {
    this.http.get(`${this.apiUrl}/cart`)
      .then(response => response.data)
      .then(items => this.cart.push.apply(this.cart, items))
  }

  addProduct(product, amount) {
    const existingProduct = this.cart.find(inCartProduct => product.id === inCartProduct.id)
    if (existingProduct) {
      existingProduct.amount += amount
      this.http.put(`${this.apiUrl}/cart/${existingProduct.id}`, existingProduct)
    } else {
      const newProduct = angular.extend(angular.copy(product), {amount}, {added: Date.now()})
      this.http.post(`${this.apiUrl}/cart`, newProduct)
        .then(() => this.cart.push(newProduct))
    }
  }

  removeProduct(product) {
    this.http.delete(`${this.apiUrl}/cart/${product.id}`)
      .then(() => this.cart = this.cart.filter(inCartProduct => inCartProduct.id !== product.id))
  }
}
