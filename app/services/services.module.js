import {name as productsServiceName, ProductsService} from './products.service'
import {name as cartServiceName, CartService} from './cart.service'

export const moduleName = 'services'
angular.module(moduleName, [])
  .service(productsServiceName, ProductsService)
  .service(cartServiceName, CartService)
