/* @fwrlines/generator-storybook-story 1.3.0 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { SVGChoice } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'
//import {ALL_COLORS, SIZES } from '../config.js'
//import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'SVGChoice',
  component:SVGChoice,
  //componentSubtitle:'Component subtitle',
  subcomponents: {
    //SVGChoice.Item
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
  <SVGChoice></SVGChoice> 
)

export const Variant = () => (
    <SVGChoice></SVGChoice> 
)

