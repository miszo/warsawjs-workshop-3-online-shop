export const name = 'draggable'
export const factory = () => {
  return {
    restrict: 'A',
    link: (scope, element, attributes) => {
      element.attr('draggable', true)
      element.on('dragstart', event => {
        event.dataTransfer.setData(attributes.dragDataName, attributes.dragData)
      })
    }
  }
}
