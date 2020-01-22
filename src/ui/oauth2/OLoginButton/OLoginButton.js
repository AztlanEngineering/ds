/* @fwrlines/generator-react-component 1.0.1 */
import React from 'react'
import PropTypes from 'prop-types'

//Config
//import C from 'ui/cssClasses'

//Relative imports
import styles from './o_login_button.scss'

const baseClassName = 'o_login_button'

const OLoginButton = ({
  id,
  className,
  style
}) => (
  <div 
    className={
      [
        styles[baseClassName],
        className
      ].filter(e => e).join(' ')
  }
    id={ id }
    style={ style }
  >
    <h2>Welcome to the OLoginButton component</h2>
  </div>
)

OLoginButton.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id: PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className: PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style: PropTypes.object,

  /**
   *  The children JSX
   */
  children: PropTypes.node,

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['primary', 'stroke', 'flat'])
  */
}

/*
OLoginButton.defaultProps = {
  status: 'neutral',
}
*/

export default OLoginButton
