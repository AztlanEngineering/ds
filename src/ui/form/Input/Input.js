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
  InputSide,
  InputIcon
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

// Undocumented. Wraps every input
const Holder = ({
  className,
  id,
  style,
  children,

  error,
  valid,

  disabled,
  optional,

  as:Wrapper,
  aesthetic,
  compact,

  inputId,

  label,
  labelAs, //This is the only new prop compared to Input
  labelId,
  labelClassName,
  labelStyle,

  description,
  descriptionAs,
  descriptionClassName,
  descriptionStyle,
}) => {
  return(
    <Wrapper
      className={[
      //styles[baseClassName],
        baseClassName,
        className,
        aesthetic,
        error && C.error,
        valid && C.valid,
        compact && C.compact
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
          optional={ optional }
          labelAs={ labelAs }
        >
          { label }
        </InputLabel>
      }
      { children }
      { (description || error || valid) &&
        <InputDescription
          as={ descriptionAs }
          className={[
            descriptionClassName,
            error && C.error,
            valid && C.valid
          ].filter( e => e ).join(' ') }
          style={ descriptionStyle }
        >
          { error || valid || description }
        </InputDescription>
      }
    </Wrapper>
  )
}


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
  optional,

  value,
  onChange,

  error,
  valid,

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

  as,
  aesthetic,
  variant,
  compact,

  description,
  descriptionAs,
  descriptionClassName,
  descriptionStyle,

  leftSide,
  rightSide,
  sidesClassName,
  sidesStyle,

  leftIcon,
  rightIcon,
  iconsClassName,
  iconsStyle,
  validIcon,
  errorIcon,
}) => {

  console.log(onChange)

  const holder_props = {
    //A) props passed
    className,
    id,
    style,

    error,
    valid,

    disabled,
    optional,

    as,
    aesthetic,
    compact,

    inputId,

    label,
    labelId,
    labelClassName,
    labelStyle,

    description,
    descriptionAs,
    descriptionClassName,
    descriptionStyle,

    // The props labelAs and children are new props
  }

  if (AcceptedHTMLInputTypes.includes(type)) return(
    <Holder
      { ...holder_props }
    >
      <div className={ C.inside }>
        { leftSide &&
          <InputSide
            className={ sidesClassName }
            style={ sidesStyle }
          >
            { leftSide }
          </InputSide>
        }
        {
          leftIcon &&
            <InputIcon
              className={ iconsClassName }
              style={ iconsStyle }
              icon={ leftIcon }
            />
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
        {
          rightIcon &&
            <InputIcon
              className={ iconsClassName }
              style={ iconsStyle }
              icon={
                (error && errorIcon) ||
                (valid && validIcon) ||
                rightIcon }
            />
        }
        { rightSide &&
          <InputSide
            className={ sidesClassName }
            style={ sidesStyle }
          >
            { rightSide }
          </InputSide>
        }
      </div>
    </Holder>
  )

  else if (type === 'textarea') return(
    <Holder
      { ...holder_props }
    >
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
    </Holder>

  )

  else if ([ 'checkboxes', 'radios' ].includes(type)) return(
    <Holder
      { ...holder_props }
      labelAs='legend'
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

        value={ value }
        onChange={ onChange }
      />
    </Holder>

  )

  else if ([ 'svg-checkboxes', 'svg-radios' ].includes(type)) return(
    <Holder
      { ...holder_props }
      labelAs='legend'
    >
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
    </Holder>

  )

  else if ([ 'card-checkboxes', 'card-radios' ].includes(type)) return(
    <Holder
      { ...holder_props }
      labelAs='legend'
    >
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
    </Holder>

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
   * Whether the input is optional. Is considered a better practice than to mark the required fields
   */
  optional:PropTypes.bool,

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
   * Which html tag to use
   */
  descriptionAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

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
   * Which icon to display on the left side of the input. Refer to "Storybook/Icons/Default" for possible choices
   */
  leftIcon:PropTypes.string,

  /**
   * Which icon to display on the right side of the input. Refer to "Storybook/Icons/Default" for possible choices. Please not that the rightIcon is superseded by the State Icon Class
   */
  rightIcon:PropTypes.string,

  /**
   * The icon to be displayed on the right side of the input when valid. Refer to "Storybook/Icons/Default" for possible choices.
   */
  validIcon:PropTypes.string,

  /**
   * The icon to be displayed on the right side of the input when invalid. Refer to"Storybook/Icons/Default" for possible choices.
   */
  errorIcon:PropTypes.string,

  /**
   * The html class names to be provided to the input icons
   */
  iconsClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the input icons.
   */
  iconsStyle:PropTypes.object,

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

  /**
   * Whether the input is on an error state. Will be displayed before the description.
   */
  error:PropTypes.string,

  /**
   * Whether the input is valid. If a sentence, will be displayed before the description.
   */
  valid:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
}

Input.defaultProps = {
  type       :'text',
  placeholder:'please enter your email here',
  as         :'fieldset',
  disabled   :false,
  aesthetic  :'mars',
  optional   :false,
  validIcon  :'o',
  errorIcon  :'p'
  /* height:'2.2em',
     as:'p', */
}

export default Input
