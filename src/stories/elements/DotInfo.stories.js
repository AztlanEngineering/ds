/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { DotInfo } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title     :'elements/DotInfo',
  component :DotInfo,
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const map = [
  {
    name  :'In Progress',
    circle:'y-warning'
  },
  {
    name  :'Error',
    circle:'y-error'
  },
  {
    name  :'Ready',
    circle:'y-success'
  },
]


export const Default = () => (
  map.map((e,i) =>
    <div
      className='p1'
      key={i}
    >
      <DotInfo
        title={e.name}
        className={e.circle}
      />
    </div>

  )
)

export const Colors = () => (
  map.map((e,i) =>
    <div
      className='p1'
      key={i}
    >
      <DotInfo
        title={e.name}
        className={ e.circle + ' x-indigo' }
      />
    </div>

  )
)
