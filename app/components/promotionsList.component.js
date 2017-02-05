const template = `
  <product-item ng-repeat="product in $ctrl.products" item="product"></product-item>
  <p ng-if="!$ctrl.products.length">No items yet. Subscribe to our newsletter to be up-to-date with our offers.</p>`

export const name = 'promotionsList'
export const properties = {
  template,
  bindings: {
    products: '<items'
  }
}