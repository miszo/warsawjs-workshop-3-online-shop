const template = `
  <div>
    <h2>{{ $ctrl.product.name | uppercase }}</h2>
    <p>for only {{ $ctrl.product.price | currency }}</p>
    <p>{{ $ctrl.product.description | shorten:20 }}</p>
    <p>Add to cart</p>
    <form name="itemForm">
      <input type="number" ng-model="$ctrl.count" min="1" max="100"> 
      <button ng-disabled="itemForm.$invalid" ng-click="$ctrl.countPicked()">Add to cart</button>
    </form>
    <!--<count-picker on-pick="$ctrl.countPicked(count)"></count-picker>-->
  </div>`

class ProductItemController {
  constructor() {
    this.count = 0;
}
  countPicked() {
    this.addToCart({amount: this.count});
    this.count = 0;
  }
}

export const name = 'productItem';
export const properties = {
  template,
  bindings: {
    product: '<item',
    addToCart: '&onAddToCart'
  },
  controller: ProductItemController
};