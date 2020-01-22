/* @fwrlines/generator-react-component 1.0.1 */
import React from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */

const stroke_class = 'stroke'

const UseSVG = ({
  id,
  className,
  style,

  sprite,
  target,

  stroke,
  strokeWidth
}) => {
  return (
    <use
      className={
        [
          className,
          stroke && stroke_class
        ].filter(e => e).join(' ')
      }
      href={(sprite || '/s2.svg' ) + (target ? '#' + target : '')}
      style={ strokeWidth ?
        {
          ...style,
          '--sw':Number(strokeWidth)
        } : { style }}
      id={ id }
    />
  )}

UseSVG.propTypes = {
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
   * The url to the svg sprite
   */
  sprite: PropTypes.string,

  /**
   * The target image id in the sprite
   */
  target: PropTypes.string,

  /**
   * The SVG property stroke ( color )
   */
  stroke: PropTypes.boolean,

  /**
   * The SVG property stroke-width
   */
  strokeWidth: PropTypes.number,
}

/*
UseSVG.defaultProps = {
  status: 'neutral',
}
*/

export default UseSVG
