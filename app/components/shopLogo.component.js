class ShopLogoController {
  constructor() {
    this.source = '../images/warsawjs-logo.png'
    this.width = 'auto'
    this.sizes = new Map([['medium', '100px'], ['small', '30px']])
  }

  $onInit() {
    this.width = this.sizes.get(this.size) || this.width
  }
}

export const name = 'shopLogo'
export const properties = {
  template: `<image ng-src="{{ $ctrl.source }}" width="{{ $ctrl.width }}">`,
  controller: ShopLogoController,
  bindings: {
    size: '@'
  }
}
