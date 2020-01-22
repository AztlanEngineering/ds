/* @fwrlines/generator-storybook-story 1.0.1 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { Wireframe } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'common/Wireframe',
  component:Wireframe,
  parameters: {
    decorators: [
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
const as_list = ['p', 'h5', 'h4', 'h3', 'h2', 'h1']
const dimensions_list = [
  {
    height:'100px',
    width:'100%',
  },
  {
    height:'200px',
    width:'200px',
  },
  {
    height:'40px',
    width:'500%',
  }
]

export const Text = () =>
  <Wireframe.Text/>

export const Sizes = () =>
  sizes.map((e) =>
    <Wireframe.Text size={e}/>
  )

export const As = () =>
  as_list.map((e) =>
    <Wireframe.Text as={e}/>
  )

export const Image = () =>
  dimensions_list.map((e) =>
    <div className='p1'>
      <Wireframe.Image
        height={ e.height }
        width={ e.width }
      />
    </div>
  )

