/* @fwrlines/generator-storybook-story 1.3.0 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { CardChoice } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'
//import {ALL_COLORS, SIZES } from '../config.js'
//import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'form/Input/common/CardChoice',
  component:CardChoice,
  //componentSubtitle:'Component subtitle',
  subcomponents: {
    //CardChoice.Item
  },
  parameters: {
    decorators: [ 
      //storyfn => <div className="">{ storyfn() }</div>,
      //storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
      //storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

export const Default = () => (
  <CardChoice
    name='composer'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag'
      },
      {
        value:'viaggio',
        label:'Rossini',
        id   :'ross'
      },
      {
        value:'pelleas',
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
  />
)

export const Multiple = () => (
  <CardChoice
    name='composer'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag'
      },
      {
        value:'viaggio',
        label:'Rossini',
        id   :'ross'
      },
      {
        value:'pelleas',
        label:'Debussy',
        id   :'debu'
      }
    ]}
    multiple
    //disabled
  />
)

export const Other = () => (
  <CardChoice
    name='composer'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag'
      },
      {
        value:'viaggio',
        label:'Rossini',
        id   :'ross'
      },
      {
        value:'pelleas',
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    other
    otherId='yoho'
    //disabled
  />
)

export const OtherCustom = () => (
  <CardChoice
    name='composer'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag'
      },
      {
        value:'viaggio',
        label:'Rossini',
        id   :'ross'
      },
      {
        value:'pelleas',
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    other='Altro'
    otherId='yoho'
    //disabled
  />
)

export const DisabledAll = () => (
  <CardChoice
    name='composer'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag'
      },
      {
        value:'viaggio',
        label:'Rossini',
        id   :'ross'
      },
      {
        value:'pelleas',
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    disabled
  />
)

export const DisabledOption = () => (
  <CardChoice
    name='composer'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag'
      },
      {
        value   :'viaggio',
        label   :'Rossini',
        id      :'ross',
        disabled:true
      },
      {
        value:'pelleas',
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
  />
)

export const Size = () => (
  <>
  <CardChoice
    name='composer'
    className='t-1'
    multiple
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag'
      },
      {
        value   :'viaggio',
        label   :'Rossini',
        id      :'ross',
      },
      {
        value:'pelleas',
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
  />
  <CardChoice
    name='composer'
    className='t3'
    multiple
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag'
      },
      {
        value   :'viaggio',
        label   :'Rossini',
        id      :'ross',
      },
      {
        value:'pelleas',
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
  />
  </>
)

