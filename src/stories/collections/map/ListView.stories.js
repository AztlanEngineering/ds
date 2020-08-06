/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import { useEffect } from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Card, MapContextProvider, MapListView as ListView } from 'ui'
import QUERY_ALL from './graphql/allFruits.gql'
import { AplProvider } from 'stories/utils'
import { Router } from 'stories/utils'
/* import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy'
    */
import { Route, useHistory, useParams } from 'react-router-dom'

import {
  urljoin as _u
} from '@fwrlines/utils'


//const endpoint = 'https://api.fwrlines.com/graphql'

const typeList = [{
  name        :'Fruits',
  // This will be accessible from `URLS.MAP.${urlKey}`
  urlKey      :'FRUITS',
  // Used to catch the relevant urls in the mapper
  baseUrl     :'fruits',
  defaultViews:{
    table:{
      columns:[
        {
          Header  :'Id',
          accessor:'id'
        },
        {
          Header  :'Name',
          accessor:'name'
        },
        {
          Header  :'Taste',
          accessor:'taste'
        },
        /*
        {
          Header  :'Visits',
          accessor:'visits'
        },
        {
          Header  :'Status',
          accessor:'status'
        },
        {
          Header  :'Profile Progress',
          accessor:'progress'
        }*/
      ]

    },
    card:{
      Component:({item, ...props}) => (
        <Card { ...props }>
          <Card.Section>
            <p className="h2">{ item.name }</p>
          </Card.Section>
          <Card.Section>
            <p>{ item.id }</p>
          </Card.Section>
          <Card.Section>
            <p>This fruit tastes{' '}<strong>
            { item.taste }
            </strong>
            </p>
          </Card.Section>
        </Card>
      )
    },
    single:{

    }
  },
  graphql:{
    queries:{
      ALL:QUERY_ALL,
      //ONE:QUERY_ONE
    },
    mutation:{
      //DELETE:MUTATION_DELETE
    }
  }
}]

export default {
  title        :'collections/map/ListView',
  component    :ListView,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    Item:ListView
  },
  parameters:{
    decorators:[
      /* storyfn => <MapContextProvider typeList={ typeList }>{  storyfn() }</MapContextProvider>,
         storyfn => <Route path='/:type' > { storyfn() } </Route>, */
      storyfn => <AplProvider>{ storyfn() }</AplProvider>,
      storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

/*

const storyParameters = {
 previewTabs: {
    'canvas': {
      hidden: true
    },
  }
}

 */

export const Default = () => {
  const Redirector = () => {
    const history=useHistory()

    useEffect(() =>
    {
      history.push('/fruits')
    }, [])
    return 'Redirected'

  }

  const basePath = '/'
  const typeUrlParam = ':type([0-9a-z-]{3,80})'
  const viewUrlParam = ':view([0-9a-z]{3,80})'
  const idUrlParam = ':guid([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})'
  //const redeemParam = ':slug([0-9a-f]{24})'

  const urls = {
  //LOGIN  :'login',
    list   :_u(basePath,),
    listAlt:_u(basePath,viewUrlParam),
    single :_u(basePath,idUrlParam),
    new    :_u(basePath,'new')
  }


  return (
    <MapContextProvider
      typeList={ typeList }
      testParam='fruits'
      routes={ urls }
    >
      <Route
        path={[
          urls.list,
          urls.listAlt

        ]}
        exact={ true }
      >
        <ListView/>
      </Route>
    </MapContextProvider>
  )

}

//Default.parameters = storyParameters


//Variant.parameters = storyParameters
