const template = `
<p ng-if="!$ctrl.items.length">No products in cart.</p>
<div ng-repeat="item in $ctrl.items">
  {{ item.name | pluralize:item.amount }} - {{ item.amount }} (added: {{ item.added | date:"MMM dd, yyyy 'at' hh:mm" }})
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
