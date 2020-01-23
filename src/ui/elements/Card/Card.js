/* @fwrlines/generator-react-component 1.1.0 */
import React from 'react'
import PropTypes from 'prop-types'



import C from 'ui/cssClasses'

//Relative imports
import styles from './card.scss'
import {
  Content,
  Divider,
  Footer,
  Header
} from './common'

const baseClassName = 'card'

const Card = ({
  id,
  className,
  style,
  children,

  selectable,
  active,
  onClick,
}) => {
  return (
    <div
      className={
        [
          styles[baseClassName],
          'sh-sm b',
          active && C.active,
          selectable && C.selectable,
          className
        ].filter(e => e).join(' ')
      }
      id={id}
      onClick={onClick}
      style={style}
    >
      { children }
    </div>
  )}

Card.propTypes = {
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
   * Whether the element has a full size image inside
   */
  image:PropTypes.bool,

  /**
   * What to do when the card is clicked
   */
  onClick:PropTypes.func,

  /**
   * Whether the card is active
   */
  active: PropTypes.bool,

  /**
   * Whether the card is selectable
   */
  selectable: PropTypes.bool
}

Card.defaultProps = {
  selectable:false,
  active:false,
}

Card.Content = Content
Card.Divider = Divider
Card.Footer = Footer
Card.Header = Header

export default Card
