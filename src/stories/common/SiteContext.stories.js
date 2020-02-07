/* @fwrlines/generator-storybook-story 1.2.0 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { SiteContextProvider } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'common/SiteContextProvider',
  component    :SiteContextProvider,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //SiteContextProvider.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}
const config={
  SITE_NAME     :'Internet 1999',
  SITE_CANONICAL:'https://internet1999.org',
  FACEBOOK      :'facebook_id',
  INSTAGRAM     :'@superaccount',
}

export const Default = () => (
  <SiteContextProvider config={ config }>
    This text is inside the context
  </SiteContextProvider>
)


