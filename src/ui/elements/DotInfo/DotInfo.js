/* @fwrlines/generator-react-component 1.1.0 */
import React from 'react'
import PropTypes from 'prop-types'

import { Subtitle } from 'ui/common'

import { gql } from 'graphql-tag'

import C from 'ui/cssClasses'

//Relative imports
import styles from './dot_info.scss'

const baseClassName = 'dot_info'

const DotInfo = ({
  id,
  className,
  style,

  title,
  //link,

  circleClassName,
}) => {


  return (
    <div
      className={
        [
          styles[baseClassName],
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
        <Subtitle upper>
          { title }
        </Subtitle>
      </div>
    </div>
  )}

DotInfo.propTypes = {
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
   *  The title of the element
   */
  title: PropTypes.string.isRequired,

  /**
   * A link, on Click (internal or external)
   */
  //link: PropTypes.string,

  /**
   * The class name of the circle
   */
  circleClassName: PropTypes.string,
}

/*
DotInfo.defaultProps = {
  status: 'neutral',
}
*/

export default DotInfo
