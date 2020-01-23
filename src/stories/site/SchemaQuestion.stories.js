/* @fwrlines/generator-storybook-story 1.0.1 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { SchemaQuestion } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'site/SchemaQuestion',
  component:SchemaQuestion,
  parameters: {
    decorators: [ 
      //storyfn => <div className="">{ storyfn() }</div>,
      //storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
      //storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

export const Default = () => (
  <SchemaQuestion></SchemaQuestion> 
)

export const Variant = () => (
    <SchemaQuestion></SchemaQuestion> 
)

