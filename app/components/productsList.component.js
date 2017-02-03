const template = `
<product-item ng-repeat="product in $ctrl.products" item="product"></product-item>`

export const name = 'productsList'
export const properties = {
  template,
  bindings: {
    products: '<items'
  }
}
