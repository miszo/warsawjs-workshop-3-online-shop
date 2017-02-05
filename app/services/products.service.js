// export const name = 'productsService';

export class ProductsService {
  constructor($http) {
    this.http = $http;
    this.productsStore = {
      normal: [],
      promoted: []
    }
  }

  get products() {
    return this.productsStore.normal;
  }

  get promotedProducts() { }

  loadProducts() {
    this.http.get('http://localhost:8001/products')
      .then(response => response.data)
      .then(products => {
        this.productsStore.normal = products.filter(products => !products.promoted)
        this.productsStore.promoted = products.filter(products => products.promoted)

      })
  }
}