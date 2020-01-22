/* @fwrlines/generator-react-component 1.1.0 */
import React from 'react'
import PropTypes from 'prop-types'



import { gql } from 'graphql-tag'
//Config
//import C from 'ui/cssClasses'

//Relative imports
import styles from './heading.scss'

const baseClassName = 'heading'

const Heading = ({
  id,
  className,
  style
}) => {
  
  
  return (
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
    <h2>Welcome to the Heading component</h2>
  </div>
)}

Heading.propTypes = {
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
Heading.defaultProps = {
  status: 'neutral',
}
*/

export default Heading
