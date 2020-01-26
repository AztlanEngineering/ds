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
    back:'x-black bx',
  },
  {
    height:'300px',
    back:'x-blue bx',
  },
  {
    height:'450px',
    back:'x-violet bx',
  },
]

export const Default = () =>(
  <div style={{ height:'300px' }}>
  <GreenTick/>
  </div>
)


export const Variant = () =>
  sizes.map((e,i) =>
    <div
      key={i}
      className={e.back}
      style={{ height:e.height, width:e.width }}
    >
      <GreenTick />
    </div>
  )

