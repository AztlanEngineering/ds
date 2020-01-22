/* @fwrlines/generator-storybook-story 1.0.1 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { Rating } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'elements/Rating',
  component:Rating,
  parameters: {
    decorators: [ 
      //storyfn => <div className="">{ storyfn() }</div>,
      //storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
      //storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

export const Default = () => (
  <Rating></Rating> 
)

export const Variant = () => (
    <Rating></Rating> 
)

