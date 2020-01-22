/* @fwrlines/generator-storybook-story 1.0.1 */
import React from 'react'

import { GreenTick } from 'ui'

export default {
  title: 'common/GreenTick',
  component:GreenTick,
  parameters: {
    decorators: [
      //storyfn => <div className="">{ storyfn() }</div>,
    ]
  }
}

const sizes = [
  {
    height:'200px',
    back:'black',
  },
  {
    height:'300px',
    back:'blue',
  },
  {
    height:'450px',
    back:'purple',
  },
]

export const Default = () =>(
  <GreenTick/>
)


export const Variant = () =>
  sizes.map((e,i) =>
    <div
      key={i}
      className={'p1 b-' + e.back}
      style={{ height:e.height, width:e.width }}
    >
      <p>
        { e.height }
        {' '}
x
        {' '}
        { e.back }
      </p>
      <GreenTick />
    </div>
  )

