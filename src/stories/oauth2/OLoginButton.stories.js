/* @fwrlines/generator-storybook-story 1.0.1 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { OLoginButton } from 'ui'
   import { AplProvider } from 'stories/utils'

const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'oAuth2/OLoginButton',
  component:OLoginButton,
  parameters: {
    decorators: [
      storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
    ]
  }
}

export const Default = () => (
  <OLoginButton className="x-red cx tb" label="Login with Google"/>
)

export const Variant = () => (
  <OLoginButton></OLoginButton>
)

