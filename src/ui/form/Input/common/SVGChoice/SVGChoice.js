/* @fwrlines/generator-react-component 1.4.0 */
import React from 'react'
import PropTypes from 'prop-types'



//Config
//import C from 'ui/cssClasses'

//Relative imports
//import styles from './s_v_g_choice.scss'
import './s_v_g_choice.scss'

const baseClassName = 's_v_g_choice'


/**
 * Use `SVGChoice` to
 * Has color `x` 
 */
const SVGChoice = ({
  id,
  className,
  style
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
    <h2>Welcome to the SVGChoice component</h2>
  </div>
)}

SVGChoice.propTypes = {
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
   * Which html tag to use
   */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]), 
  //as: PropTypes.string,

  /**
   * The height of the element
   */
  height: PropTypes.string,

  /**
   * The width of the element
   */
  width: PropTypes.string,
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
SVGChoice.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default SVGChoice
