/* @fwrlines/generator-storybook-story 1.2.0 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { DashboardMenu as Menu } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'dashboard/Menu.Item',
  component    :Menu.Item,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Menu.Item.Item
  },
  parameters:{
    decorators:[
      storyfn => <Menu><ul className='compact'>{ storyfn() }</ul></Menu>,
      /*
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => (
    <Menu.Item
      className=''
      heading='Website Information'
      label='Complete'
      labelClassName='x-success'
    />
)

export const Label = () => (
  <>
    <Menu.Item
      className='ur'
      heading='Website Information'
      label='Complete'
      labelClassName='x-success'
    />
  </>
)
export const Right = () => (
    <Menu.Item
      className='ur'
      heading='Website Information'
      label='Complete'
      labelClassName='x-success'
    />
)

export const Active = () => (
  <Menu.Item
    active
  >
  </Menu.Item>
)

