const template = `
<p ng-if="!$ctrl.items.length">No products in cart.</p>
<div ng-repeat="item in $ctrl.items">{{ item.name }} - {{ item.amount }}</div>`

export const name = 'shopCart'
export const properties = {
  template,
  bindings: {
    items: '<'
  }
}
