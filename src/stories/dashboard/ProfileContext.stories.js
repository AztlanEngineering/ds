/* @fwrlines/generator-storybook-story 1.2.0 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { ProfileContextProvider } from 'ui'
/* import QUERY from './graphql/query.graphql' */
import { AplProvider } from 'stories/utils'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'dashboard/ProfileContextProvider',
  component    :ProfileContextProvider,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //ProfileContext.Item
  },
  parameters:{
    decorators:[
      storyfn => <AplProvider>{ storyfn() }</AplProvider>,
    ]
  }
}

export const Default = () => (
  <ProfileContextProvider>
    this text is inside the context
  </ProfileContextProvider>
)


