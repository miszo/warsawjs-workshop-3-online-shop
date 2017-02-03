import * as pageHeaderComponent from './pageHeader.component'
import * as pageFooterComponent from './pageFooter.component'
import * as pageContentComponent from './pageContent.component'
import * as shopLogoComponent from './shopLogo.component'
import * as shopCartComponent from './shopCart.component'
import * as searchBarComponent from './searchBar.component'
import * as productsListComponent from './productsList.component'

export const moduleName = 'components'
angular.module(moduleName, [])
    .component(pageHeaderComponent.name, pageHeaderComponent.properties)
    .component(pageContentComponent.name, pageContentComponent.properties)
    .component(pageFooterComponent.name, pageFooterComponent.properties)
    .component(shopLogoComponent.name, shopLogoComponent.properties)
    .component(shopCartComponent.name, shopCartComponent.properties)
    .component(searchBarComponent.name, searchBarComponent.properties)
    .component(productsListComponent.name, productsListComponent.properties)
