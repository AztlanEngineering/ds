/* @fwrlines/generator-storybook-story 1.5.2 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { 
  DashboardNavigation, 
  DashboardContextProvider,
  DashboardMain,
} from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils' */
import { Router } from 'stories/utils'
/* import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'dashboard/DashboardNavigation',
  component    :DashboardNavigation,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    Slide:DashboardNavigation.Slide
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>, */
      storyfn => <DashboardContextProvider>{ storyfn() }</DashboardContextProvider>,
      storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

export const Default = () => {

  const tree = {
    title    :'WebOffice',
    location :'/',
    baseMatch:'/',
    children :[
      {
        section  :'General',
        title    :'My website',
        location :'/website/',
        baseMatch:'/website/',
      },
      {
        section  :'General',
        title    :'My images',
        location :'/media/',
        baseMatch:'/media/',
      },
      {
        section  :'Account',
        title    :'My account',
        location :'/account/profile/',
        baseMatch:['/account/', '/account/profile/'],
        children:[
          {
            //section:''
            title:'My profile',
            location:'/account/profile/', 
          },
          {
            //section:''
            title:'Google Integration',
            location:'/account/integration/', 
          }
        ]
      },
      {
        section  :'Account',
        title    :'Plan and payment',
        location :'/plan/',
        baseMatch:['/plan/', '/plan/profile'],
        children:[
          {
            //section:''
            title:'My plan',
            location:'/plan/profile/', 
          },
          {
            //section:''
            title:'Billing',
            location:'/plan/billing/', 
          }
        ]
      }
    ]

  }

  return (
    <> 
    <DashboardNavigation
      tree={ tree }
    />
      <DashboardMain
      >
        Ohayo
        <div
        style={{height:'120vh'}}
        >Content</div>
      </DashboardMain>
    </>
  )

}

/*
export const Variant = () => (
  <DashboardNavigation
    tree={tree}
  ></DashboardNavigation>
)
*/

