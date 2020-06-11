/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'


import C from 'ui/cssClasses'

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./card.scss')
}
import {
  Section,
  Divider,
} from './common'

const baseClassName = 'card'

const Card = ({
  id,
  className,
  style,
  children,

  basic,
  simple,
  selectable,
  active,
  onClick,

  backFace,
  backFaceClassName,
}) => {

  const [isFlipped, setFlip] = useState(false)
  const flipCard = () => setFlip(!isFlipped)
  const flipper = backFace &&
    <span
      className='flip fi'
      simple
      circle
      onClick={ flipCard }
    >
      i
    </span>

  return (
    <div className='scene'>
      <div
        className={
          [
            C.ensemble,
            isFlipped && 'flipped',
          ].filter(e => e).join(' ')
        }
      >
        <div
          className={
            [
              baseClassName,
              backFace && 'front-face',
              active && C.active,
              selectable && C.selectable,
              basic && C.basic,
              simple && C.simple,
              className
            ].filter(e => e).join(' ')
          }
          id={id}
          onClick={onClick}
          style={style}
        >
          { backFace && flipper}
          { children }
        </div>
        { backFace &&
          <div
            className={
              [
                baseClassName,
                'back-face',
                active && C.active,
                selectable && C.selectable,
                basic && C.basic,
                simple && C.simple,
                backFaceClassName
              ].filter(e => e).join(' ')
            }
            id={id}
            onClick={onClick}
            style={style}
          >
            { flipper }
            { backFace }
          </div>
        }
      </div>
    </div>
  )}

Card.propTypes = {
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
   *  The children JSX for the back face
   */
  backFace:PropTypes.node,

  /**
   * The html class names to be provided to this element
   */
  backFaceClassName:PropTypes.string,

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
  active:PropTypes.bool,

  /**
   * Whether to use a "simple" style
   */
  simple:PropTypes.bool,

  /**
   * Whether to apply the "basic" style
   */
  basic:PropTypes.bool,

  /**
   * Whether the card is selectable
   */
  selectable:PropTypes.bool
}

Card.defaultProps = {
  selectable:false,
  active    :false,
}

Card.Section = Section
Card.Divider = Divider

export default Card
