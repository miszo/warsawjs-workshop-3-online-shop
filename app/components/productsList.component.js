const template = `
<product-item ng-repeat="product in $ctrl.products" item="product"></product-item>
<p ng-if="!$ctrl.products.length">No items yet. Subscribe to our fantastic newsletter!</p>`

export const name = 'productsList'
export const properties = {
  template,
  bindings: {
    products: '<items'
  }
}
