/* @fwrlines/generator-react-component 1.1.2 */
import React from 'react'
import PropTypes from 'prop-types'



import C from 'ui/cssClasses'

//Relative imports

const baseClassName = C.group

const Group = ({
  id,
  className,
  style,
  children,

  vertical,
  stretch
}) => {


  return (
    <div
      className={
        [
          styles[baseClassName],
          stretch == 'horizontal' && C.horizontalStretch,
          stretch == 'vertical' && C.verticalStretch,
          vertical && C.vertical,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { children }
    </div>
  )}

Group.propTypes = {
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
   * How the group should stretch
   */
  vertical:PropTypes.boolean,
  /**
   * How the group should stretch
   */
  stretch: PropTypes.oneOf(['horizontal', 'vertical'])
}

Group.defaultProps = {
  vertical:false,
}

export default Group
