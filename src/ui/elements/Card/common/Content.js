/* @fwrlines/generator-react-component 1.1.2 */
import React from 'react'
import PropTypes from 'prop-types'



import C from 'ui/cssClasses'


const baseClassName = C.content

const Content = ({
  id,
  className,
  style,
  children,

  image
}) => {

  return (
    <div
      className={
        [
          baseClassName,
          image ? C.image : 'p1',
          className
        ].filter(e => e).join(' ')
      }
      id={id}
      style={style}
    >
      { children }
    </div>
  )}

Content.propTypes = {
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
}

/*
Content.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

export default Content
