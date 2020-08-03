/* @fwrlines/generator-storybook-story 1.3.0 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import {
  FormContextProvider as ContextProvider,
  FormInput,
  FormContextDebugger
} from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/ContextProvider',
  component    :ContextProvider,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //ContextProvider.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const context = React.createContext()

export const Default = () => (
  <ContextProvider
    context={ context }
    initialValues={{
      'planet_name':'jupyter',
      'story'      :'april is the cruellest month, breeding, lilacs out of the dead land, mixing, memory and desire',
      'fellini'    :new Set(['saty', 'otto']),
      'dscs':'magenta'
    }}
    validation={{
      _all:(f) => {
        const c1 = [
          f.planet_name === 'mars',
          'The planet cannot be mars'
        ]
        const c2 = [
          f.planet_name === 'venus',
          'The planet cannot be venus'
        ]
        const errors = [c1, c2].reduce((a, e) => {
          e[0] && a.push(e[1])
          return a
        }, [] )
        return errors.length ? errors : false
      },
      planet_name:(v) => (v === 'earth') && ['cannot be earth', 'this doenst include the z letter'],
      story:(v) => (v.length <= 6) && 'The story is not long enough'
    }}
  >
    <FormInput
      context={ context }
      name='planet_name'
      type='text'
      placeholder='placeholder'
      label='planet name'
      description='please enter here the name of the planet'
      inputId='planet_name'
    />
    <FormInput
      context={ context }
      name='story'
      type='textarea'
      placeholder='placeholder'
      label='your story'
      description='please enter here your story'
      inputId='story'
    />
    <FormInput
      context={ context }
      compact
      type='checkboxes' //checkboxes
      name='composer'
      options={[
        {
          value   :'valhalla',
          label   :'Wagner',
          id      :'wag',
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
      otherId='yowo'
      label='Whats your favourite composer'
      inputId='compo'
    />
    <FormInput
      context={ context }
      type='svg-checkboxes' //checkboxes
      name='britpop2'
      inputClassName='y-indigo'
      options={[
        {
          value:'oasis',
          label:'Oasis',
          id   :'oas',
        },
        {
          value:'elastica',
          label:'Elastica',
          id   :'elas',
        },
        {
          value:'blur',
          label:<span>
            <b>Blur</b>
            {' '}
            Blur
          </span>,
          id:'blur'
        }
      ]}
      other='Altro'
      otherId='yoho'
      label='Whats your favourite britpop'
      inputId='compo2'
    />
    <FormInput
      context={ context }
      type='card-checkboxes' //checkboxes
      name='fellini'
      inputClassName='y-indigo'
      options={[
        {
          value:'vita',
          label:'La vita e bella',
          id   :'vita',
        },
        {
          value:'otto',
          label:'8 1/2',
          id   :'otto',
        },
        {
          value:'saty',
          label:<span>
            <b>the</b>
            {' '}
            Satyricon
          </span>,
          id:'saty'
        }
      ]}
      label='Do you like these movies by fellini'
      inputId='compo2'
    />
    <FormInput
      context={ context }
      type='select' //checkboxes
      name='coolors'
      inputClassName='y-indigo'
      options={[
        {
          value:'magenta',
          label:'magenta',
          id   :'mag',
        },
        {
          value:'red',
          label:'red',
          id   :'red',
        },
        {
          value:'blue',
          label:'Blue',
          id:'blu'
        }
      ]}
      label='Favourite color?'
      inputId='compo2'
    />
    <FormInput
      context={ context }
      type='downshift-select' //checkboxes
      name='dscs'
      inputClassName='y-indigo'
      buttonProps={{
        className:'j x-metadata',
        simple:true,
          icon:'j',
          iconSide:'r'
      }}
      options={[
        {
          value:'magenta',
          label:'Magenta is my fav',
          id   :'id0mag',
        },
        {
          value:'red',
          label:'I like Red',
          id   :'id0red',
        },
        {
          value:'blue',
          label:'Blue s the best',
          id:'id0blu'
        }
      ]}
      label='Favourite color?'
      inputId='colorchoicer2'
      buttonChildren={ 'Select your favourite color' }
    />
    <FormContextDebugger context={ context }/>
  </ContextProvider>
)

export const Variant = () => (
  <ContextProvider></ContextProvider>
)

