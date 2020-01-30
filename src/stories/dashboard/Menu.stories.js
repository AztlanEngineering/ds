/* @fwrlines/generator-storybook-story 1.1.1 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { Menu } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'dashboard/Menu',
  component    :Menu,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    'Item':Menu.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => (
  <Menu></Menu>
)

export const Variant = () => (
  <Menu></Menu>
)

