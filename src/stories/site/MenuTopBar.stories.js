/* @fwrlines/generator-storybook-story 1.5.0 */
import * as React from 'react'
import { useState } from 'react'

//import { action } from '@storybook/addon-actions'

import {
  MenuTopBar,
  ProgressBar,
  Button
} from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'site/MenuBar/common/MenuTopBar',
  component    :MenuTopBar,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //MenuTopBar.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => (
  <MenuTopBar >
    hello
  </MenuTopBar>
)

export const Background = () => (
  <MenuTopBar
    className='x-secondary'
  >
    yoho
  </MenuTopBar>
)

export const Padded = () => (
  <MenuTopBar
    className='x-paragraph u1'
  >
    <div className='yf inside'>
      yoho
    </div>
  </MenuTopBar>
)

export const Composed = () =>{
  const [progress, setProgress] = useState(70)
  return(
    <MenuTopBar
      className='x-secondary u50'
    >
      <div className='yf inside'>
        <Button
          simple
          className='it x-white xh-white'
          icon='h'
          iconSide='l'
          onClick={() => setProgress(progress - 10)}
        >
          Back
        </Button>
        {' '}
        <div className='fh s2 ks yib'>A good title bar menu</div>
        {' '}
        <Button
          className='x-success'
          onClick={() => setProgress(progress + 10)}
        >
          Call to action
        </Button>
      </div>
      <ProgressBar
        current={progress}
        className='x-green xa xst'
      />
    </MenuTopBar>
  )


}
