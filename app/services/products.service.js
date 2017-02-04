export const name = 'productsService'

export class ProductsService {
  constructor($http, apiUrl) {
    this.http = $http;
    this.apiUrl = apiUrl
    this.productsStore = {
      normal: [],
      promoted: []
    }
  }

  get products() {
    return this.productsStore.normal
  }

  get promotedProducts() {
    return this.productsStore.promoted
  }

  loadProducts() {
    this.http.get(`${this.apiUrl}/products`)
      .then(response => response.data)
      .then(products => {
        this.productsStore.normal = products.filter(product => !product.promoted)
        this.productsStore.promoted = products.filter(product => product.promoted)
      })
  }
}
