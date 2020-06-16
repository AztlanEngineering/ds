/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import PropTypes from 'prop-types'

import { Subtitle } from 'ui/common'

import { gql } from 'graphql-tag'

import C from 'ui/cssClasses'

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./dot_info.scss')
}

const baseClassName = 'dot_info'

/**
 * Circle has color `y` and text has color `x`
 *
 *
 */
const DotInfo = ({
  id,
  className,
  style,

  children,
  //link,

  circleClassName,
  subtitleClassName,
  subtitleUpper
}) => {


  return (
    <div
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <div className={
        [
          'yib wb',
          C.circle,
          circleClassName
        ].filter(e => e).join(' ')
      }
      >
      </div>
      <div className={ C.content + ' yib wb ph05' }>
        <Subtitle
          upper={ subtitleUpper }
          className={ subtitleClassName }
        >
          { children }
        </Subtitle>
      </div>
    </div>
  )}

DotInfo.propTypes = {
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
  children:PropTypes.node.isRequired,

  /**
   * A link, on Click (internal or external)
   */
  //link: PropTypes.string,

  /**
   * The class name of the subtitle
   */
  subtitleClassName:PropTypes.string,

  /**
   * The class name of the circle
   */
  circleClassName:PropTypes.string,

  /**
   * Whether the subtitle is in uppercase
   */
  subtitleUpper:PropTypes.bool,
}

DotInfo.defaultProps = {
  subtitleUpper:true
}

export default DotInfo
