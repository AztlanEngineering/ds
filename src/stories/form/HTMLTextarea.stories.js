/* @fwrlines/generator-storybook-story 1.3.0 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { HTMLTextarea } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'
//import {ALL_COLORS, SIZES } from '../config.js'
//import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'form/Input/common/HTMLTextarea',
  component:HTMLTextarea,
  //componentSubtitle:'Component subtitle',
  subcomponents: {
    //Textarea.Item
  },
  parameters: {
    decorators: [ 
      //storyfn => <div className="">{ storyfn() }</div>,
      //storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
      //storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

export const Default = () => (
  <HTMLTextarea 
    name='some_input'
  />
)

export const Variant = () => (
  <HTMLTextarea 
    name='some_input'
  />
)

