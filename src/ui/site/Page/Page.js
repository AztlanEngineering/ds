/* @fwrlines/generator-react-component 1.1.2 */
import React, { memo }from 'react'
import PropTypes from 'prop-types'


/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './page.scss' */
import './page.scss'

import {
  Context,
  Section,
  LocalHelmet
} from './common'

const baseClassName = 'page'

const MemoLocalHelmet = memo(LocalHelmet)

const Page = ({
  id,
  className,
  style,
  children,

  itemType,
  HELMET
}) => {


  return (
    <Context.Provider
      value={{
        id,
      }}
    >
      <div
        className={
          [
            //styles[baseClassName],
            baseClassName,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
        itemType={ itemType }
        itemScope={ itemType && ' ' }
      >
        { itemType &&
          <meta
            itemProp='mainEntityOfPage'
            content={ HELMET && HELMET.canonical }
          />
        }
        { HELMET && <MemoLocalHelmet { ...HELMET }/> }

        { children }
      </div>
    </Context.Provider>
  )}

Page.propTypes = {
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
   * The main entity schema
   */
  itemType:PropTypes.string,

  /**
   * The helmet props to pass to the common/LocalHelmet comp
   */
  HELMET:PropTypes.object.isRequired
  ,
}

Page.defaultProps = {
  HELMET:{}
}

Page.Section = Section

export default Page
