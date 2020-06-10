/* @fwrlines/generator-storybook-story 1.5.2 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { BlockCards } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'collections/content/BlockCards',
  component    :BlockCards,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:BlockCards.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => {
  
  const cardMap = [
    { 
      className:'s-2 k-s y-background',
      headingProps:{
        
        heading         :'Cars and autos',
        headingAs       :'h2',
        headingClassName:'s4 k-s c-on-y',
      },
      svgTarget:'car',
      children        :<p className='s2 k-s c-on-y'>One of the features explained in just a few words.</p>,
    },
    { 
      className:'s-2 k-s y-background',
      headingProps:{
        heading         :'Car engine',
        headingAs       :'h2',
        headingClassName:'s4 k-s c-on-y'
      },
      svgTarget:'engine-1',
      children        :<p className='s2 k-s c-on-y'>One of the features explained in a short sentence.</p>,
    },
    { 
      className:'s-2 k-s y-grey',
      headingProps:{
        heading         :'Car lights',
        headingAs       :'h2',
        headingClassName:'s4 k-s c-on-y'
      },
      svgTarget:'car-lights-1',
      children        :<p className='s2 k-s c-on-y'>This car also has lights for safety. Very modern indeed</p>,
    }
  ]

  return(
    <BlockCards
      className='s1 k-s'
      headingProps={{
        label         :'Our philosophy',
        labelClassName:'x-green',
        labelProps    :{dash: true},

        heading         :'A software for every need',
        headingAs       :'h2',
        headingClassName:'s5 k-s'
      }}
    >
      { cardMap.map((e, i) => 
        <BlockCards.Card 
          { ...e }
        />

      ) }
    </BlockCards>
  )
}

export const Variant = () => (
  <BlockCards></BlockCards>
)

