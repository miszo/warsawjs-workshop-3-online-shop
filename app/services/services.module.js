import {name as productsServiceName, ProductsService} from './products.service'

export const moduleName = 'services'
angular.module(moduleName, [])
  .service(productsServiceName, ProductsService)
