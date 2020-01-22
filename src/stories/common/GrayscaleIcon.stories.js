/* @fwrlines/generator-storybook-story 1.0.1 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { GrayscaleIcon } from 'ui'

export default {
  title: 'common/GrayscaleIcon',
  component:GrayscaleIcon,
  parameters: {
    decorators: [
      //storyfn => <div className="">{ storyfn() }</div>,
    ]
  }
}

const variants = [
  {
    alt:'Corriere',
    src:'/press_corriere.png',
    link:'blah.com'
  },
  {
    alt:'New York Times',
    src:'/press_nyt.png',
    className:'b-teal',
    link:'blah.com'
  },
  {
    alt:'Stampa',
    src:'/press_stampa.svg',
    className:'b-red',
    link:'blah.com'
  }
]

export const Default = () =>
  (
    <GrayscaleIcon
      { ...variants[0] }
    />
  )

export const TestClasses = () =>
  variants.map((e,i) =>
    <GrayscaleIcon
      { ...e }
      key={ i }
    />
  )

export const Inline = () =>
  variants.map(({ className, ...e },i) =>
    <GrayscaleIcon
      { ...e }
      key={ i }
    />
  )
