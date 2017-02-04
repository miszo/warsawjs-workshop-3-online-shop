import {name as draggableDirectiveName, factory as draggableFactory} from './draggable.directive'

export const moduleName = 'directives'
angular.module(moduleName, [])
  .directive(draggableDirectiveName, draggableFactory)
