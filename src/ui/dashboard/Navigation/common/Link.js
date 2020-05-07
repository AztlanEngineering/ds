/* @fwrlines/generator-react-component 2.1.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Heading } from 'ui/elements'

//Config
import C from 'ui/cssClasses'

//Relative imports
//import styles from './item.scss'
import('./link.scss')

const baseClassName = 'item'


/**
 * Use `Link` to. Props are passed to the heading component
 * Has color `x` 
 */
const Link = ({
  id,
  className,
  style,
  children,
  
  as:Wrapper,
  ...otherProps
}) => {

  
  
  return (
    <Heading
    className={
      [
        //styles[baseClassName],
        baseClassName,
        C.pointer,
        'yib',
        className
      ].filter(e => e).join(' ')
  }
    id={ id }
    style={ style }
    heading={ children }
    { ...otherProps }
  />
)}

Link.propTypes = {
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
}

/*
Link.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Link
