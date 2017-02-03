const template = `<div>{{ $ctrl.product.name }} for only {{ $ctrl.product.price }}</div>`

export const name = 'productItem'
export const properties = {
  template,
  bindings: {
    product: '<item'
  }
}
