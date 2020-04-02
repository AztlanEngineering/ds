/* @fwrlines/generator-react-component 1.2.2 */
import * as React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */

import ProfileContext from './ProfileContext'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import QUERY_ME from './graphql/me.gql'

const DataProcessor = (data) => {
  if (data.me){

    const {
      id,
      first_name,
      last_name,
      username,
      email,
    } = data.me

    return {
      id,
      first_name,
      last_name,
      username,
      email,


      //session_ends,
    }
  }
  else return {
  }
}
/**
 * Use `ProfileContextProvider` to
 * Has color `x`
 */

const ProfileContextProvider = ({
  children,
  query,

  processor,

  loginUri,
  logoutUri
}) => {
  const [
    sessionExpires,
    setSessionExpires,
  ] = useState()

  const {
    error,
    loading,
    data={}
  } = useQuery(gql(query))

  const val = {
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

  if ( val.id ) {
    val.logoutUri = logoutUri,
    val.setExpiration = setExpiration
    val.sessionExpires = sessionExpires
  } else {
    val.loginUri = loginUri
    //TODO Remove causeo nly 4 tests
    val.setExpiration = setExpiration
    val.sessionExpires = sessionExpires
  }

  return (
    <ProfileContext.Provider value={ val } >
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
  query:PropTypes.string,

  /**
   * A function that transforms the query data result in a hash passed to context
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
