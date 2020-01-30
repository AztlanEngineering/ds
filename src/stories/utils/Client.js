import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import CONFIG from 'config'

const client = new ApolloClient({
  uri         :CONFIG.ENDPOINT,
  fetchOptions:{
    mode:'no-cors',
  },
})

const Provider = ({children, ...props}) => (
  <ApolloProvider
    {...props}
    client={ client }
  >
    { children }
  </ApolloProvider>
)

export { client, Provider }

