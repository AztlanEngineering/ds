/* @fwrlines/generator-react-component 2.3.3 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'




//Intl

//import { FormattedMessage} from "react-intl";
//import messages from "./messages";
// <FormattedMessage {...messages.title} />

//Config

//import C from 'ui/cssClasses'

//Relative imports
//import styles from './plan.scss'
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./plan.scss')
}

const baseClassName = 'plan'


/**
 * Use `Plan` to
 * Has color `x` 
 */
const Plan = ({
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
    <h2>Welcome to the Plan component</h2>
  </div>
)}

Plan.propTypes = {
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
Plan.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Plan
