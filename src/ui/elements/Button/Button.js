/* @fwrlines/generator-react-component 1.1.0 */
import React from 'react'
import PropTypes from 'prop-types'

import C from 'ui/cssClasses'
import { InlineLoader } from 'ui/common'

//Relative imports
import styles from './button.scss'
import { Group } from './common'

const baseClassName = 'button'

const Button = ({
  id,
  className,
  style,
  children,

  shadow='md',
  shadowHover='sm',

  basic,
  simple,
  circle,

  icon,
  iconSide,

  disabled,
  loading,
  loaderType='bars',

  as:Element,
  dangerouslySetInnerHTML
}) => {

  return (
    <Element
      id={ id }
      style={ style }
      className={
        [
          styles[baseClassName],
          C.transition,
          (shadow && !simple) && C.shadow + shadow,
          disabled && C.disabled,
          icon && C.iconInside + ((iconSide && !loading) ? iconSide : 'c'),
          simple && C.simple,
          circle && C.circle,
          basic && 'bxc b-t bxc-' + C.shadowActive,
          loading && C.loading,
          (simple && !disabled) && C.simpleHover,
          (shadow && !simple && !basic) && C.shadow + shadow,
          (shadowHover && !disabled && !simple && !basic) && C.shadowHover + shadowHover + ' ' + C.shadowActive,
          className
        ]
      }
    >
      { loading ?
        <>
          <InlineLoader
            height='100%'
            type={ loaderType }
          />
        </>
	  :
        <>
          { dangerouslySetInnerHTML ?
            <span
              dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
            >
            </span> : children }
          { icon && <i className={'icon'}>{ icon }</i>}
        </>
      }
    </Element>
  )}

Button.propTypes = {
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
   * The shadow
   */
  shadow: PropTypes.oneOf(['sm', 'md', 'lg', null]),

  /**
   * The shadow on hover
   */
  shadowHover: PropTypes.oneOf(['sm', 'md', 'lg', null]),

  /**
   * The icon to add, as a fontastic char
   */
  icon: PropTypes.string,

  /**
   * Which side to display the icon on
   */
  iconSide: PropTypes.oneOf(['c', 'l', 'r']),

  /**
   * Whether to use a "simple" style
   */
  simple: PropTypes.bool,

  /**
   * Whether to apply the "basic" style
   */
  basic: PropTypes.bool,

  /**
   * Whether the element is circular instead of square
   */
  circle:PropTypes.bool,

  /**
   * Whether the element is disabled
   */
  disabled:PropTypes.bool,

  /**
   * Whether the element is loading
   */
  loading:PropTypes.bool,

  /**
   *
   */
  loaderType: PropTypes.oneOf(['bars', 'circle'])
}

Button.defaultProps = {
  as:'button',
  shadow:'md',
  shadowHover:'sm',
  loaderType:'bars',
  simple:false,
  basic:false,
  circle:false,
  disabled:false,
  loading:false
}

Button.Group = Group

export default Button
