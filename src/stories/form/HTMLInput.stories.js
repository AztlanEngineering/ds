/* @fwrlines/generator-storybook-story 1.3.0 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { HTMLInput } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/Input/common/HTMLInput',
  component    :HTMLInput,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Input.Item
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
  <HTMLInput
    name='some_input'
    placeholder={ 'Write something here' }
  />
)

export const Email = () => (
  <HTMLInput
    name='some_input'
    type={ 'email' }
    placeholder={ 'john.doe@mail.com' }
  />
)

export const Password = () => (
  <HTMLInput
    name='some_input'
    type={ 'password' }
    placeholder={ 'Write something here' }
  />
)

export const Phone = () => (
  <HTMLInput
    name='some_input'
    type={ 'tel' }
    placeholder={ '332876798' }
  />
)

