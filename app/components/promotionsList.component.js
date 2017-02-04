const template = `<product-item ng-repeat="product in $ctrl.products" item="product" on-add-to-cart="$ctrl.addToCart(product, amount)"></product-item>`

class PromotionsListController {
  addToCart(product, amount) {
    this.requestAddToCart({product, amount})
  }
}

export const name = 'promotionsList'
export const properties = {
  template,
  bindings: {
    products: '<items',
    requestAddToCart: '&onAddToCart'
  },
  controller: PromotionsListController
}
