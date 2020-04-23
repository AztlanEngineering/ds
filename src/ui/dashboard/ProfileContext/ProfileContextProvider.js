/* @fwrlines/generator-react-component 1.2.2 */
import * as React from 'react'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

import { ProfileContext } from './common'

import gql from 'graphql-tag'
import { useLazyQuery, useApolloClient } from '@apollo/client'
import QUERY_ME from './graphql/me.gql'

import { useCookies } from 'react-cookie'

import { useHistory } from 'react-router-dom'
/*
const DataProcessor = (data) => {
  if (data.me) return { ...data.me }
}
 */


/**
 * Use `ProfileContextProvider` to
 * Has color `x`
 */

const ProfileContextProvider = ({
  children,
  GQL_QUERY_ME,

  //processor,

  loginPath,
  logoutPath,

  cookieName
}) => {

  const contextValue = {}
  //Logic for setting and removing session cookies
  const [cookies, setCookie, removeCookie] = useCookies()

  const setSessionCookie = (value, options) => setCookie(cookieName, value, options)
  const removeSessionCookie = (options) => removeCookie(cookieName, options)
  const sessionCookie = cookies[cookieName]

  const client = useApolloClient()

  const history = useHistory()

  const logout = () => {
    removeSessionCookie()
    client.clearStore()
    history.push(loginPath)
  }

  contextValue.logoutPath = logoutPath
  contextValue.loginPath = loginPath

  contextValue.setSessionCookie = setSessionCookie
  contextValue.removeSessionCookie = removeSessionCookie
  contextValue.sessionCookie = sessionCookie
  contextValue.logout = logout

  const [loadCurrentUser, {
    currentUserError,
    currentUserLoading,
    data:{ me:currentUserData }={}
  }] = useLazyQuery(gql(GQL_QUERY_ME))

  contextValue.currentUserError = currentUserLoading
  contextValue.currentUserLoading = currentUserError
  contextValue.currentUserData = currentUserData

  useEffect(() => {
    console.log('sessionCookie value changed to ', sessionCookie)
    if(sessionCookie) {
      loadCurrentUser()
    }
  },
  [sessionCookie]
  )

  /*
  const [ sessionExpires, setSessionExpires ] = useState()

  const contextValue = {
    ...processor(data),
    loading,
    error
  }


  contextValue.setExpiration = setExpiration
  contextValue.sessionExpires = sessionExpires

  const setExpiration = (num) => {
    const now = new Date.now()
    setSessionExpires(
      now.setSeconds( now.getSeconds + num )
    )
  }
  */

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
   *  The children JSX
   */
  children:PropTypes.node.isRequired,

  /**
   * The absolute path to login
   */
  loginPath:PropTypes.string,

  /**
   * The absolute path to logout
   */
  logoutPath:PropTypes.string,

  /**
   * The graphql query to get the user profile
   */
  GQL_QUERY_ME:PropTypes.string,

  /**
   * A function that transforms the query data result in a dictionnary deconstructed passed to context
   */
  processor:PropTypes.func,

  /**
   * The name of the session cookie
   */
  cookieName:PropTypes.string,
}

ProfileContextProvider.defaultProps = {
  query     :QUERY_ME,
  logoutPath:'/logout',
  loginPath :'/login',
  //processor:DataProcessor
}

export default ProfileContextProvider
