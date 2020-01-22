/* @fwrlines/generator-storybook-story 1.0.1 */
import React from 'react'

import { Checklist } from 'ui'

export default {
  title: 'common/Checklist',
  component:Checklist,
  parameters: {
    decorators: [
      //storyfn => <div className="">{ storyfn() }</div>,
    ]
  }
}

const items = [
  {
    content:'An amazing feature'
  },
  {
    content:'Better than an iPhone'
  },
  {
    content:'That you won\'t find somewhere else'
  },
  {
    content:'More than 5 hours of battery life. Only 3kg of weight. Available in 36 colors. Makes less noice than a B2 airplane.',
    className:'cc-red'
  }
]

export const Default = () =>(
  <Checklist>
    { items.map(({content, ...e}, i) =>
      <Checklist.Item key={i}>
        { content }
      </Checklist.Item>
    ) }
  </Checklist>
)

export const OtherColor = () => (
  <Checklist className='cc-green'>
    { items.map(({content, ...e}, i) =>
      <Checklist.Item
        {...e}
        key={i}
      >
        { content }
      </Checklist.Item>
    ) }
  </Checklist>
)

export const WithCross = () => (
  <Checklist className='cc-green'>
    { items.map(({content, ...e}, i) =>
      <Checklist.Item
        {...e}
        cross={ i%2 == 0 }
        key={i}
      >
        { content }
      </Checklist.Item>
    ) }
  </Checklist>
)

export const MultilineTest = () => (
  <Checklist style={{width:'200px'}}>
    { items.map(({content, ...e}, i) =>
      <Checklist.Item
        key={i}
        {...e}
      >
        { content }
      </Checklist.Item>
    ) }
  </Checklist>
)
