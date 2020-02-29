/* @fwrlines/generator-storybook-story 1.3.0 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { Input } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/Input',
  component    :Input,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Input.Item
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
  <Input
    name={ 'contact_email' }
  />
)

export const Placeholder = () => (
  <Input
    type='password'
    placeholder='a safe password, not 12345'
    name={ 'password' }
  />
)

export const Type = () => (
  <Input
    type='textarea'
    name={ 'openquestion' }
  />
)

export const Disabled = () => (
  <Input
    type='email'
    name='formeremail'
    disabled
  />
)

export const Choices = () => (
  <Input
    type='radios' //checkboxes
    name='composer'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag',
        disabled:true
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
  />

)

