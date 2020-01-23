/* @fwrlines/generator-react-component 1.1.2 */
import React from 'react'
import PropTypes from 'prop-types'

import C from 'ui/cssClasses'

//Relative imports
const baseClassName = C.header

const Header = ({
  id,
  className,
  style,
  children,

  image
}) => {

  return (
    <header
      className={
        [
          baseClassName,
          'b-light-grey',
          image ? C.image : 'p1',
          className
        ].filter(e => e).join(' ')
      }
      style={ style }
      id={id}
    >
      { children }
    </header>
  )}

Header.propTypes = {
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

  /**
   * Whether the element has a full size image inside
   */
  image:PropTypes.bool,
}

/*
Header.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

export default Header
