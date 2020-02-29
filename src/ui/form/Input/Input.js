/* @fwrlines/generator-react-component 1.4.0 */
import React from 'react'
import PropTypes from 'prop-types'

import {
  HTMLInput,
  HTMLTextarea,
  HTMLChoice
} from './common'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './input.scss' */
import './input.scss'

const baseClassName = 'input'

const AcceptedHTMLInputTypes = [
  'text',
  'email',
  'password',
  'number',
  'date',
  'datetime',
  'month',
  'tel'
]


/**
 * Use `Input` to
 * Has color `x`
 */
const Input = ({
  id,
  className,
  style,

  type,
  placeholder,
  name,
  disabled,

  inputId,
  inputClassName,
  inputStyle,
  inputDisabled,

  options,
  multiple,
  other,
  otherId,

  as:Wrapper
}) => {

  if (AcceptedHTMLInputTypes.includes(type)) return(
    <Wrapper
      className={
        [
          //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      disabled={ Wrapper === 'fieldset' ? disabled : undefined }
    >
      <HTMLInput
        type={ type }
        placeholder={ placeholder }
        name={ name }
        className={
          [
            //styles[baseClassName],
            inputClassName
          ].filter(e => e).join(' ')
        }
        id={ inputId }
        style={ inputStyle }
        disabled={ inputDisabled }
      />
    </Wrapper>
  )

  else if (type === 'textarea') return(
    <Wrapper
      className={
        [
          //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      disabled={ Wrapper === 'fieldset' ? disabled : undefined }

    >
      <HTMLTextarea
        type={ type }
        placeholder={ placeholder }
        name={ name }
        className={
          [
            //styles[baseClassName],
            inputClassName
          ].filter(e => e).join(' ')
        }
        id={ inputId }
        style={ inputStyle }
        disabled={ inputDisabled }
      />
    </Wrapper>

  )

  else if ([ 'checkboxes', 'radios' ].includes(type)) return(
    <Wrapper
      className={
        [
          //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      disabled={ Wrapper === 'fieldset' ? disabled : undefined }

    >
      <HTMLChoice
        type={ type }
        name={ name }
        className={
          [
            //styles[baseClassName],
            inputClassName
          ].filter(e => e).join(' ')
        }
        id={ inputId }
        style={ inputStyle }
        disabled={ inputDisabled }
        multiple={ type === 'checkboxes' ? true : false }
        options={ options }
        other={ other }
        otherId={ otherId }
      />
    </Wrapper>

  )

}

Input.propTypes = {
  /**
   * Provide an HTML id to the wrapper
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to the wrapper
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the wrapper.
   */
  style:PropTypes.object,

  /**
   * Whether the input is disabled. This property is applied at the wrapper level, and only if the wrapper is a fieldset
   */
  disabled:PropTypes.bool,

  /**
   * Provide an HTML id to the input
   */
  inputId:PropTypes.string,

  /**
   * The html class names to be provided to the input
   */
  inputClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the input.
   */
  inputStyle:PropTypes.object,

  /**
   * Whether the input is disabled. Do not apply at the same time as 'disabled'
   */
  inputDisabled:PropTypes.bool,

  /**
   *  The children JSX
   */
  //children:PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The type of the input
   */
  type:PropTypes.oneOf([
    ...AcceptedHTMLInputTypes,
    'textarea',
    'checkboxes',
    'radios',
  ]
  ),

  /**
   * The input placeholder
   */
  placeholder:PropTypes.string,

  /**
   * The input name
   */
  name:PropTypes.string.isRequired,

  /**
   * The input options, necessary for
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
   * In case options are provided, whether we accept a custom user-defined value
   */
  other:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),

  /**
   * In case options are defined and we enable a user-defined value, let's give it an ID
   */
  otherId:PropTypes.string

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  */
}

Input.defaultProps = {
  type       :'text',
  placeholder:'please enter your email here',
  as         :'fieldset',
  disabled   :false
  /* height:'2.2em',
     as:'p', */
}

export default Input
