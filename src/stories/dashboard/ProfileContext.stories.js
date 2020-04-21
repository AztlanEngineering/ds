/* @fwrlines/generator-storybook-story 1.2.0 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { ProfileContextProvider, Logout } from 'ui'
/* import QUERY from './graphql/query.graphql' */
import { Router, AplProvider } from 'stories/utils'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'dashboard/ProfileContextProvider',
  component    :ProfileContextProvider,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    Logout:Logout
  },
  parameters:{
    decorators:[
      storyfn => <AplProvider>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>
    ]
  }
}

export const Default = () => (
  <ProfileContextProvider>
    this text is inside the context
  </ProfileContextProvider>
)


