const template = `
  <div>Shopping cart:</div>
  <div ng-repeat="item in $ctrl.items"> {{ item.name }} - {{ item.price | currency }}</div>`

class ShopCartController {

}

export const name = 'shopCart'
export const properties = {
  template,
  bindings: {
    items: '<'
  },
  controller: ShopCartController
}
