const template = `
<form name="countForm" ng-submit="$ctrl.submitForm(countForm)">
  <input type="number" name="count" ng-model="$ctrl.count" required min="1" max="100">
  <button ng-disabled="countForm.$invalid">Add to cart</button>
  <div ng-if="countForm.$dirty">
    <span ng-if="countForm.count.$error.min">Add at least one product.</span>
    <span ng-if="countForm.count.$error.max">You can't buy more than 100 products.</span>
  </div>
</form>`

class CountPickerController {
  constructor() {
    this.count = 0
  }

  submitForm(form) {
    this.pick({count: this.count})
    this.count = 0
    form.$setPristine()
  }
}

export const name = 'countPicker'
export const properties = {
  template,
  controller: CountPickerController,
  bindings: {
    pick: '&onPick'
  }
}
