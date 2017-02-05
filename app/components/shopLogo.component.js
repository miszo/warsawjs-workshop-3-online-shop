class ShopLogoController {
  constructor() {
    this.source = '../images/warsawjs-logo.png';
    this.width = 'auto';
    // this.sizes = new Map([['medium', 200], ['small'], 100]);
  }

  $onInit() {
    if (this.size === 'medium') {
      this.width = 150;
    }
    else if (this.size === 'small') {
      this.width = 50;
    }
  }
}

export const name = 'shopLogo';
export const properties = {
  template: `
  <img ng-src="{{ $ctrl.source }}" width="{{ $ctrl.width }}">`,
  controller: ShopLogoController,
  bindings: {
    size: '@'
  }
}