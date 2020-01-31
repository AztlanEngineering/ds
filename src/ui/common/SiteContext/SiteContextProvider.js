/* @fwrlines/generator-react-component 1.2.2 */
import React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */



import SiteContext from './SiteContext'

/**
 * Use `SiteContextProvider` to
 * Has color `x`
 */
const SiteContextProvider = ({
  children,
  config
}) => {


  return (
    <SiteContext.Provider value={config}>
      { children }
    </SiteContext.Provider>
  )}

SiteContextProvider.propTypes = {
  /**
   *  The children JSX
   */
  children:PropTypes.node.isRequired,

  /**
   * Please configure
   */
  config:PropTypes.shape({
    SITE_NAME     :PropTypes.string.isRequired,
    SITE_CANONICAL:PropTypes.string.isRequired,
    FACEBOOK      :PropTypes.string.isRequired,
    INSTAGRAM     :PropTypes.string.isRequired,
  }).isRequired,
}

/*
SiteContextProvider.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default SiteContextProvider
