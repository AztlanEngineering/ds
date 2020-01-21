import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import CONFIG from 'config'

const Client = new ApolloClient({
  uri:CONFIG.ENDPOINT,
})

const Provider = ({props}) => (
  <ApolloProvider
    {...props}
    client={ client }
  />
)

export { Client, Provider }

