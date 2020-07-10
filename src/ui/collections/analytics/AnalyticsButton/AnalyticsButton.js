/* @fwrlines/generator-react-component 2.4.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'
import { Button } from 'ui/elements'




//Intl

//import { FormattedMessage} from "react-intl";
//import messages from "./messages";
// <FormattedMessage {...messages.title} />

//Config

//import C from 'ui/cssClasses'

//Relative imports
//import styles from './analytics_button.scss'
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./analytics_button.scss')
}

const baseClassName = ''//'analytics_button'


/**
 * Use `AnalyticsButton` associate events with a clickable button. Atm this is not set up and only reexportes the base button.
 * Has color `x` 
 */
const AnalyticsButton = ({
  id,
  className,
  style,
  ...otherProps

}) => {
  
  
  return (
  <Button
    className={
      [
        //styles[baseClassName],
        baseClassName,
        className
      ].filter(e => e).join(' ')
  }
    id={ id }
    style={ style }
    { ...otherProps }
  >
  </Button>
)}

AnalyticsButton.propTypes = {
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
AnalyticsButton.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default AnalyticsButton
