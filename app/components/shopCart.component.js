const template = `
<p ng-if="!$ctrl.items.length">No products in cart.</p>
<div ng-repeat="item in $ctrl.items">
  {{ item.name }} - {{ item.amount }}
  <button ng-click="$ctrl.removeItem(item)">Remove</button>
</div>`

class ShopCartController {
  removeItem(item) {
    this.remove({item})
  }
}

export const name = 'shopCart'
export const properties = {
  template,
  bindings: {
    items: '<',
    remove: '&onItemRemove'
  },
  controller: ShopCartController
}
