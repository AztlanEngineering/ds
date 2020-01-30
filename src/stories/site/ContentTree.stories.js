/* @fwrlines/generator-storybook-story 1.0.1 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import {
  ContentTree,
  ContentTreeContextProvider as ContextProvider,
} from 'ui'

import { TEXT } from '../utils'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title     :'site/ContentTree',
  component :ContentTree,
  parameters:{
    decorators:[
      storyfn => <ContextProvider>{ storyfn() }</ContextProvider>
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => (
  <>
    <ContentTree
      content={ TEXT }
      style={{
    		position  :'fixed',
    		top       :'0',
    		left      :'0',
		    background:'beige'
		  }}
    />
    <div
      className='content'
      dangerouslySetInnerHTML={{__html: TEXT}}
      style={{ paddingTop: '500px', paddingBottom: '500px' }}
    >

    </div>
  </>
)

export const PastStyle = () => (
  <>
    <ContentTree
      content={ TEXT }
      style={{
    		position  :'fixed',
    		top       :'0',
    		left      :'0',
		    background:'beige'
		  }}
      pastClassName='cx x-red ti'
      activeClassName='cx x-blue'
      elementClassName='nt'
    />
    <div
      className='content'
      dangerouslySetInnerHTML={{__html: TEXT}}
      style={{ paddingTop: '500px', paddingBottom: '500px' }}
    />

  </>
)

export const UnfoldActive = () => (
  <>
    <ContentTree
      content={ TEXT }
      style={{
    		position  :'fixed',
    		top       :'0',
    		left      :'0',
		    background:'beige'
		  }}
      activeClassName='cx x-red'
      unfoldActive
    />
    <div
      className='content'
      dangerouslySetInnerHTML={{__html: TEXT}}
      style={{ paddingTop: '500px', paddingBottom: '500px' }}
    />

  </>
)

