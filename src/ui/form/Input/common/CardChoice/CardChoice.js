/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'



//Config
import C from 'ui/cssClasses'

/* Relative imports
   import styles from './card_choice.scss' */
import './card_choice.scss'

const baseClassName = 'card_choice'


/**
 * Use `CardChoice` to
 * Has color `x`
 */
const CardChoice = ({
  id,
  className,
  style,

  name,
  multiple,
  options,
  disabled,

}) => {


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
          <div
            className={
	    C.content
	  }
            style={ style }
            tabIndex='0'
          >
            <label htmlFor={ e.id }>
              { typeof(e.label) === 'object' ? e.label : <span>{ e.label }</span>
              }
            </label>
          </div>
        </div>
      ) }
    </>
  )}

CardChoice.propTypes = {
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

}

CardChoice.defaultProps = {
  multiple:false,
}

export default CardChoice
