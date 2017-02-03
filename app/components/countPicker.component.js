const template = `
<form>
  <input type="number" name="count" ng-model="$ctrl.count">
  <button ng-click="$ctrl.addToCart($ctrl.count)">Add to cart</button>
</form>`

class CountPickerControler {
  constructor() {
    this.count = 0
  }

  addToCart(count) {
    console.log('ADDED!', count)
  }
}

export const name = 'countPicker'
export const properties = {
  template,
  controller: CountPickerControler
}
