/* @fwrlines/generator-react-component 1.2.2 */
import React from 'react'
import PropTypes from 'prop-types'



//Config
//import C from 'ui/cssClasses'

//Relative imports
//import styles from './status_bar.scss'
import './status_bar.scss'

const baseClassName = 'status_bar'


/**
 * Use `StatusBar` to
 * Has color `x` 
 */
const StatusBar = ({
  id,
  className,
  style,

  fixed,
}) => {
  
  
  return (
  <div 
    className={
      [
        //styles[baseClassName],
        baseClassName,
        className
      ].filter(e => e).join(' ')
  }
    id={ id }
    style={ style }
  >
    <h2>Welcome to the StatusBar component</h2>
  </div>
)}

StatusBar.propTypes = {
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
   * Whether the bar is fixed at the bottom
   */
  fixed: PropTypes.bool,
  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

/*
StatusBar.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default StatusBar
