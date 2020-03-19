/* @fwrlines/generator-react-component 1.4.0 */
import React from 'react'
import PropTypes from 'prop-types'

import {
  HTMLInput,
  HTMLTextarea,
  HTMLChoice,
  SVGChoice,
  CardChoice,

  InputLabel,
  InputDescription,
  InputSide
} from './common'



/* Config*/
import C from 'ui/cssClasses'

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

  value,
  onChange,

  inputId,
  inputClassName,
  inputStyle,
  inputDisabled,

  label,
  labelId,
  labelClassName,
  labelStyle,

  options,
  other,
  otherId,

  as:Wrapper,
  aesthetic,
  variant,

  description,
  descriptionAs,
  descriptionClassName,
  descriptionStyle,

  leftSide,
  rightSide,
  sidesClassName,
  sidesStyle
}) => {
  console.log(onChange)
  if (AcceptedHTMLInputTypes.includes(type)) return(
    <Wrapper
      className={
        [
          //styles[baseClassName],
          baseClassName,
          aesthetic,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      disabled={ Wrapper === 'fieldset' ? disabled : undefined }
    >
      { label &&
        <InputLabel
          id={ labelId }
          className={ labelClassName }
          style={ labelStyle }
          htmlFor={ inputId }
        >
          { label }
        </InputLabel>
      }
      <div className={ C.inside }>
        { leftSide &&
          <InputSide
            side='left'
            className={ sidesClassName }
            style={ sidesStyle }
          >
            { leftSide }
          </InputSide>
        }
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

          value={ value }
          onChange={ onChange }
        />
        { rightSide &&
          <InputSide
            side='right'
            className={ sidesClassName }
            style={ sidesStyle }
          >
            { rightSide }
          </InputSide>
        }
      </div>
      { description &&
        <InputDescription
          as={ descriptionAs }
          className={ descriptionClassName }
          style={ descriptionStyle }
        >
          { description }
        </InputDescription>
      }
    </Wrapper>
  )

  else if (type === 'textarea') return(
    <Wrapper
      className={
        [
          //styles[baseClassName],
          baseClassName,
          aesthetic,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      disabled={ Wrapper === 'fieldset' ? disabled : undefined }

    >
      { label &&
        <InputLabel
          id={ labelId }
          className={ labelClassName }
          style={ labelStyle }
          htmlFor={ inputId }
        >
          { label }
        </InputLabel>
      }
      <div className={ C.inside }>
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

          value={ value }
          onChange={ onChange }
        />
      </div>
      { description &&
        <InputDescription
          as={ descriptionAs }
          className={ descriptionClassName }
          style={ descriptionStyle }
        >
          { description }
        </InputDescription>
      }
    </Wrapper>

  )

  else if ([ 'checkboxes', 'radios' ].includes(type)) return(
    <Wrapper
      className={
        [
          //styles[baseClassName],
          baseClassName,
          aesthetic,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      disabled={ Wrapper === 'fieldset' ? disabled : undefined }

    >
      { label &&
        <InputLabel
          id={ labelId }
          className={ labelClassName }
          style={ labelStyle }
          as='legend'
        >
          { label }
        </InputLabel>
      }
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

        value={ value }
        onChange={ onChange }
      />
      { description &&
        <InputDescription
          as={ descriptionAs }
          className={ descriptionClassName }
          style={ descriptionStyle }
        >
          { description }
        </InputDescription>
      }
    </Wrapper>

  )

  else if ([ 'svg-checkboxes', 'svg-radios' ].includes(type)) return(
    <Wrapper
      className={
        [
          //styles[baseClassName],
          baseClassName,
          aesthetic,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      disabled={ Wrapper === 'fieldset' ? disabled : undefined }

    >
      { label &&
        <InputLabel
          id={ labelId }
          className={ labelClassName }
          style={ labelStyle }
          as='legend'
        >
          { label }
        </InputLabel>
      }
      <SVGChoice
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
        multiple={ type === 'svg-checkboxes' ? true : false }
        options={ options }
        other={ other }
        otherId={ otherId }
        variant={ variant }

        value={ value }
        onChange={ onChange }
      />
      { description &&
        <InputDescription
          as={ descriptionAs }
          className={ descriptionClassName }
          style={ descriptionStyle }
        >
          { description }
        </InputDescription>
      }
    </Wrapper>

  )

  else if ([ 'card-checkboxes', 'card-radios' ].includes(type)) return(
    <Wrapper
      className={
        [
          //styles[baseClassName],
          baseClassName,
          aesthetic,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      disabled={ Wrapper === 'fieldset' ? disabled : undefined }

    >
      { label &&
        <InputLabel
          id={ labelId }
          className={ labelClassName }
          style={ labelStyle }
          as='legend'
        >
          { label }
        </InputLabel>
      }
      <CardChoice
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
        multiple={ type === 'card-checkboxes' ? true : false }
        options={ options }
        other={ other }
        otherId={ otherId }
        variant={ variant }
        value={ value }
      />
      { description &&
        <InputDescription
          as={ descriptionAs }
          className={ descriptionClassName }
          style={ descriptionStyle }
        >
          { description }
        </InputDescription>
      }
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
   * The input name
   */
  name:PropTypes.string.isRequired,

  /**
   * Whether the input is disabled. This property is applied at the wrapper level, and only if the wrapper is a fieldset
   */
  disabled:PropTypes.bool,

  /**
   * Provide an HTML id to the input
   */
  inputId:PropTypes.string.isRequired,

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
   * The content of the label
   */
  label:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * Provide an HTML id to the label
   */
  labelId:PropTypes.string,

  /**
   * The html class names to be provided to the label
   */
  labelClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the label.
   */
  labelStyle:PropTypes.object,

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
    'card-checkboxes',
    'card-radios',
    'svg-checkboxes',
    'svg-radios',
  ]
  ),

  /**
   * The input placeholder
   */
  placeholder:PropTypes.string,

  /**
   * The input description
   */
  description:PropTypes.string,

  /**
   * The html class names to be provided to the input description
   */
  descriptionClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the input description.
   */
  descriptionStyle:PropTypes.object,

  /**
   * A text to display on the input left side (only valid for inputs assimilated to text)
   */
  leftSide:PropTypes.string,

  /**
   * A text to display on the input right side (only valid for inputs assimilated to text)
   */
  rightSide:PropTypes.string,

  /**
   * The html class names to be provided to the input sides
   */
  sidesClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the input sides.
   */
  sidesStyle:PropTypes.object,

  /**
   * Which html tag to use
   */
  descriptionAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

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
  otherId:PropTypes.string,

  /**
   * The variant. Look at exact components documentation. See SVGChoice
   */
  variant:PropTypes.string,

  /**
   * The display style.
   */
  aesthetic:PropTypes.oneOf(['mars', 'saturn']),

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  */
  /**
   * The value of the input, for controlled inputs
   */
  value:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),

  /**
   * Which function to call on value change, for controlled inputs
   */
  onChange:PropTypes.func,
}

Input.defaultProps = {
  type       :'text',
  placeholder:'please enter your email here',
  as         :'fieldset',
  disabled   :false,
  aesthetic  :'mars'
  /* height:'2.2em',
     as:'p', */
}

export default Input
