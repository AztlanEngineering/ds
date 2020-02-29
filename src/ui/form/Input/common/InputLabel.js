/* @fwrlines/generator-react-component 1.4.0 */
import React from 'react'
import PropTypes from 'prop-types'



//Config
//import C from 'ui/cssClasses'

//Relative imports
//import styles from './input_label.scss'
import './input_label.scss'

const baseClassName = 'input_label'


/**
 * Use `InputLabel` to
 * Has color `x` 
 */
const InputLabel = ({
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
    <h2>Welcome to the InputLabel component</h2>
  </div>
)}

InputLabel.propTypes = {
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
InputLabel.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default InputLabel
