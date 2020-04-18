/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'

import { useCombobox } from 'downshift'

import { 
  HTMLInput ,
  InputSide,
  InputIcon
} from '../../common'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './downshift_combobox.scss' */
import('./downshift_combobox.scss')

const baseClassName = 'downshift_combobox'


/**
 * Use `DownshiftCombobox` to
 * Has color `x`
 */
const DownshiftCombobox = ({
  id,
  className,
  style,

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

  /*
  const holder_props = {
    id,
    //className, // We transform the classname as usual so not needed here
    style,

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

    labelAdditionalProps:getLabelProps(),
  }

  return (
    <Holder
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
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
  
    )*/
  return null
  }

DownshiftCombobox.propTypes = {
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
  children:PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

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


  /**
   * Whether the input is disabled. This property is applied at the wrapper level, and only if the wrapper is a fieldset
   */
  disabled:PropTypes.bool,

  /**
   * Whether the input is optional. Is considered a better practice than to mark the required fields
   */
  optional:PropTypes.bool,


  /**
   * Whether the input is compact
   */
  compact:PropTypes.bool,

  /**
   * The display style.
   */
  aesthetic:PropTypes.oneOf(['mars', 'saturn']),

  /**
   * Provide an HTML id to the input
   */
  inputId  :PropTypes.string.isRequired,
  
  /**
   * The content of the label
   */
  label:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * Provide an HTML id to the label. Trumps https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#labelid
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
   * Which html tag to use to display the label (This prop doesnt exist in the input component)
   */
  labelAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

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
DownshiftCombobox.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default DownshiftCombobox
