/* @fwrlines/generator-react-component 1.2.2 */
import * as React from 'react'
import { useEffect, useState, useCallback, useMemo} from 'react'
import PropTypes from 'prop-types'

import Cookies from 'universal-cookie'

/* Config
   import C from 'ui/cssClasses' */

import { DashboardContext } from './common'

import gql from 'graphql-tag'
import { useLazyQuery, useApolloClient } from '@apollo/client'

//import { useCookies } from 'react-cookie'

//import { useHistory } from 'react-router-dom'

/**
 * Use `DashboardContextProvider` to
 * Has color `x`
 */

const DashboardContextProvider = ({
  children,
}) => {

  return (
    <DashboardContext.Provider value={{
    }}
    >
      { children }
    </DashboardContext.Provider>
  )}

DashboardContextProvider.propTypes = {
  /**
   *  The children JSX
   */
  children:PropTypes.node.isRequired,

  /**
   * The absolute path to login
   */
  //loginPath:PropTypes.string,
}

DashboardContextProvider.defaultProps = {
  //processor:DataProcessor
}

export default DashboardContextProvider
