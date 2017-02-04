export const name = 'droppable'
export const factory = ($parse) => {
  return {
    restrict: 'A',
    link: (scope, element, attributes) => {
      element
        .on('dragover', event => {
          event.preventDefault()
        })
        .on('drop', event => {
          const data = JSON.parse(event.dataTransfer.getData(attributes.droppable))
          const callback = $parse(attributes.onDrop);
          callback(scope, {data})
        })
    }
  }
}
