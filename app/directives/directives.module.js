import {name as draggableDirectiveName, factory as draggableFactory} from './draggable.directive'
import {name as droppableDirectiveName, factory as droppableFactory} from './droppable.directive'

export const moduleName = 'directives'
angular.module(moduleName, [])
  .directive(draggableDirectiveName, draggableFactory)
  .directive(droppableDirectiveName, droppableFactory)
