import * as pageHeaderComponent from './pageHeader.component'
import * as pageFooterComponent from './pageFooter.component'
import * as shopLogoComponent from './shopLogo.component'

export const moduleName = 'components'
angular.module(moduleName, [])
    .component(pageHeaderComponent.name, pageHeaderComponent.properties)
    .component(pageFooterComponent.name, pageFooterComponent.properties)
    .component(shopLogoComponent.name, shopLogoComponent.properties)
