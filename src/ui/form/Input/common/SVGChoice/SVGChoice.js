/* @fwrlines/generator-react-component 1.4.0 */
import React from 'react'
import PropTypes from 'prop-types'

import {
  CheckboxCheck,
  CheckboxCross,
  RadioCircle,
  RadioCross,
  RadioDot
} from './common'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './s_v_g_choice.scss' */
import './svg_choice.scss'

const baseClassName = 'svg_choice'

const checkboxVariantsMap ={
  check:CheckboxCheck,
  cross:CheckboxCross,
}

const radioVariantsMap ={
  circle:RadioCircle,
  cross :RadioCross,
  dot   :RadioDot
}

/**
 * Use `SVGChoice` to
 * Has color `x`
 */
const SVGChoice = ({
  id,
  className,
  style,

  name,
  multiple,
  options,
  disabled,

  other,
  otherId,

  variant
}) => {

  const SVGInput = multiple ?
    checkboxVariantsMap[variant] :
    radioVariantsMap[variant]

  return (
    <>
      { options.map((e,i) =>
        <div
          key={ i }
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
          <input
            type={ multiple ? 'checkbox' : 'radio' }
            name={ name }
            id={ e.id }
            value={ e.value }
            disabled={ disabled || e.disabled }
          />
          <label htmlFor={ e.id }>{ e.label }</label>
          <SVGInput />

        </div>
      )}
    </>
  )}

SVGChoice.propTypes = {
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
   * Whether the input is disabled. Trumps individual options
   */
  disabled:PropTypes.bool,

  /**
   * The input name
   */
  name:PropTypes.string.isRequired,

  /**
   * Whether multiple choices are possible. Will create checkboxes rather than radios
   */
  multiple:PropTypes.bool.isRequired,

  /**
   * The input options
   */
  options:PropTypes.arrayOf(
    PropTypes.shape({
    //id: PropTypes.string.isRequired,
      value   :PropTypes.string.isRequired,
      label   :PropTypes.node.isRequired,
      id      :PropTypes.string.isRequired,
      disabled:PropTypes.bool
    }),

  ),

  /**
   * Whether we accept a custom user-defined value
   */
  other:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),

  /**
   * In case we enable the other value, let's give it an ID
   */
  otherId:PropTypes.string
}

SVGChoice.defaultProps = {
  multiple:false,
  options :[],
  other   :false,
  otherId :'other',

  variant:'cross',
}

export default SVGChoice
