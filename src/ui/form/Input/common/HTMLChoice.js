/* @fwrlines/generator-react-component 1.4.0 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './h_t_m_l_choice.scss' */
//import './h_t_m_l_choice.scss'

//const baseClassName = 'h_t_m_l_choice'


/**
 * Use `HTMLChoice` to
 * Has color `x`
 */
const HTMLChoice = ({
  id,
  className,
  style,

  name,
  multiple,
  options,
  disabled,

  other,
  otherId
}) => {

  const [otherValue, setOtherValue] = useState('')

  return (
    <>
      { options.map((e,i) =>
        <div
          className={
            [
            //styles[baseClassName],
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
        </div>
      ) }

      { other &&
        <div
          className={
            [
            //styles[baseClassName],
              className
            ].filter(e => e).join(' ')
          }
          id={ id }
          style={ style }
        >
          <input
            type={ multiple ? 'checkbox' : 'radio' }
            name={ name }
            id={ otherId }
            value={ otherValue }
            disabled={ disabled }
          />
          <label
            htmlFor={ otherId }
            onClick={
              e => console.log(e.target.children[
                [
                  otherId,
                  'setter'
                ].filter(e => e).join('_')
              ].focus())
            }
          >
            { typeof(other) === 'string' ? other : 'Other :' }
            &nbsp;
            <input
              type='text'
              value={ otherValue }
              id={
                [
                  otherId,
                  'setter'
                ].filter(e => e).join('_')
              }
              onChange={ e => setOtherValue(e.target.value) }
            />
          </label>
        </div>
      }
    </>
  )}

HTMLChoice.propTypes = {
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

HTMLChoice.defaultProps = {
  multiple:false,
  other   :false,
  otherId :'other'
}
export default HTMLChoice
