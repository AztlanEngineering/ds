/* @fwrlines/generator-storybook-story 1.5.0 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { ContentSlides, ProgressBar,  HorizontalBar, Button } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'site/ContentSlides',
  component    :ContentSlides,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    'Slide':ContentSlides.Slide
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
  const slides = [
    {
      id   :'welcome',
      title:'welcome to this slide',
      progress:40,
    },
    {
      id   :'plan',
      title:'choose your plqn',
      progress:60
    },
    {
      id   :'payment',
      title:'Payment',
      progress:80
    }
  ]
  return (
    <ContentSlides
      slides={slides}

    >
      
      <ContentSlides.HorizontalBar 
        //className=''
        //progressBarClassName=''
      />
      <ContentSlides.Slide
        className='b-z z-primary'
        index={ 0 }
      >
        Slide 0
      </ContentSlides.Slide>
      <ContentSlides.Slide
        className='b-z z-secondary'
        index={ 1 }
      >
        Slide 1
      </ContentSlides.Slide>
      <ContentSlides.Slide
        className='b-z z-accent1'
        index={ 2 }
      >
        Slide 1
      </ContentSlides.Slide>
    </ContentSlides>
  )

}
  /*
export const Variant = () => (
  <ContentSlides></ContentSlides>
)
*/

export const SideBar = () => {
  const slides = [
    {
      id   :'welcome',
      title:'Welcome',
      progress:40,
    },
    {
      id   :'plan',
      title:'Choose your plan',
      progress:60
    },
    {
      id   :'payment',
      title:'Payment',
      progress:80
    }
  ]
  return (
    <ContentSlides
      slides={slides}
      className='g-sidebar left'

    >
      
      <ContentSlides.SideBar 
        className='u2 p-u'
        //progressBarClassName=''
      />
      <ContentSlides.Slide
        className='b-z z-primary g12'
        index={ 0 }
      >
        Slide 0
      </ContentSlides.Slide>
      <ContentSlides.Slide
        className='b-z z-secondary g12'
        index={ 1 }
      >
        Slide 1
      </ContentSlides.Slide>
      <ContentSlides.Slide
        className='b-z z-accent1 g12'
        index={ 2 }
      >
        Slide 1
      </ContentSlides.Slide>
    </ContentSlides>
  )

}

