/* @fwrlines/generator-react-component 2.3.4 */
import { defineMessages } from 'react-intl'

export default defineMessages({
  logout:{
    id            :'ds.collections.cp.status_bar.logout',
    defaultMessage:'Logout.',
    description   :'Text for the logout link.',
  },
  responseIs:{
    id            :'ds.collections.cp.status_bar.response_is',
    defaultMessage:'Server answered { response }.',
    description   :'Text if the endpoint is connected',
  },
  connected:{
    id            :'ds.collections.cp.status_bar.connected',
    defaultMessage:'Connected to the GraphQL endpoint at { endpoint }.',
    description   :'Text if the endpoint is connected',
  },
  connectionError:{
    id            :'ds.collections.cp.status_bar.connected',
    defaultMessage:'Error connecting to the endpoint at { endpoint }.',
    description   :'Text if the endpoint is not connected',
  },
  loading:{
    id            :'ds.collections.cp.status_bar.retry',
    defaultMessage:'Testing the API connection at { endpoint }',
    description   :'Text to retry connecting.',
  },
  update:{
    id            :'ds.collections.cp.status_bar.update',
    defaultMessage:'Update.',
    description   :'Text to retry connecting.',
  },
  retry:{
    id            :'ds.collections.cp.status_bar.retry',
    defaultMessage:'Retry.',
    description   :'Text to retry connecting.',
  },
  /*
  pppTitle:{
    id            :'app.messages.pages.ppp.title',
    defaultMessage:'',
    description   :'Page Title'
  },
  pppSubtitle:{
    id            :'app.messages.pages.ppp.subtitle',
    defaultMessage:'',
    description   :'Page Subtitle'
  },
  */
})

