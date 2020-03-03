/* @fwrlines/generator-storybook-story 1.3.0 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { SVGChoice } from 'ui'
import {
  CheckboxCheck,
  CheckboxCross,
  RadioCircle,
  RadioCross,
  RadioDot
} from 'ui/form/Input/common/SVGChoice/common/'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */
import {ALL_COLORS, SIZES } from '../config.js'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/Input/common/SVGChoice',
  component    :SVGChoice,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    CheckboxCheck,
    CheckboxCross,
    RadioCircle,
    RadioCross,
    RadioDot
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
  <SVGChoice
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
  <SVGChoice
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
  <SVGChoice
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
  <SVGChoice
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
  <SVGChoice
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
  <SVGChoice
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


export const VariantCircle = () => (
  <SVGChoice
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
    variant='circle'
  />
)


export const VariantDot = () => (
  <SVGChoice
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
    variant='dot'
  />
)


export const VariantCheck = () => (
  <SVGChoice
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
    variant='check'
    multiple
  />
)


export const Colors = () => (
  ALL_COLORS.map((e,i) =>
    <SVGChoice
      name='composer'
      className={ 'y-' + e.toLowerCase() }
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
      multiple={ i % 2 }
    //disabled
    />
  )
)

