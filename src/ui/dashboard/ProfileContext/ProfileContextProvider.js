/* @fwrlines/generator-react-component 1.2.2 */
import * as React from 'react'
import { useState, useMutation } from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */

import ProfileContext from './ProfileContext'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import QUERY_ME from './graphql/me.gql'

const DataProcessor = (data) => {
  if (data.me) return { ...data.me }
}
/**
 * Use `ProfileContextProvider` to
 * Has color `x`
 */

const ProfileContextProvider = ({
  children,
  GQL_QUERY_ME,

  processor,

  loginUri,
  logoutUri,
}) => {

  const [ sessionExpires, setSessionExpires ] = useState()

  const {
    error,
    loading,
    data={}
  } = useQuery(gql(GQL_QUERY_ME))

  const contextValue = {
    ...processor(data),
    loading,
    error
  }

  const setExpiration = (num) => {
    const now = new Date.now()
    setSessionExpires(
      now.setSeconds( now.getSeconds + num )
    )
  }

  contextValue.setExpiration = setExpiration
  contextValue.sessionExpires = sessionExpires

  contextValue.logoutUri = logoutUri
  contextValue.loginUri = loginUri

  return (
    <ProfileContext.Provider value={ contextValue } >
      { children }
    </ProfileContext.Provider>
  )}

ProfileContextProvider.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node.isRequired,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The graphql query
   */
  loginUri:PropTypes.string,


  /**
   * The graphql query
   */
  logoutUri:PropTypes.string,

  /**
   * The graphql query
   */
  GQL_QUERY_ME:PropTypes.string,

  /**
   * The graphql query
   */
  GQL_MUTATION_OAUTH2_LOGIN:PropTypes.string,

  /**
   * A function that transforms the query data result in a dictionnary deconstructed passed to context
   */
  processor:PropTypes.func,
}

ProfileContextProvider.defaultProps = {
  query    :QUERY_ME,
  logoutUri:'/logout',
  loginUri :'/login',
  processor:DataProcessor
}

export default ProfileContextProvider
