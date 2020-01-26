/* @fwrlines/generator-react-component 1.1.1 */
import React from 'react'
import PropTypes from 'prop-types'



/* Config*/
import C from 'ui/cssClasses'

//Relative imports
import './label.scss'


const baseClassName = 'label'

const Label = ({
  id,
  className,
  style,
  children,

  icon,
  basic,
  simple,

  as:Wrapper,
}) => {


  return (
    <Wrapper
      className={
        [
          baseClassName,
          className,
          C.transition,
          basic && C.basic,
          simple && C.simple,
          /*   icon && (C.fontIcon + ' ' + C.iconInside) */
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { children }
    </Wrapper>
  )}

Label.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node.isRequired,

  /**
   * With html tag to use
   */
  as:PropTypes.string,

  /**
   * Icon only
   */
  icon:PropTypes.bool,

  /**
   * Simple style, in the spirit of semantic-ui
   */
  simple:PropTypes.bool,

  /**
   * Basic style, in the spirit of semantic-ui
   */
  basic:PropTypes.bool,
}

Label.defaultProps = {
  as    :'p',
  basic :false,
  simple:false,
}

export default Label
