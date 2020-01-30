/* @fwrlines/generator-react-component 1.1.2 */
import React, { useEffect, useContext, memo } from 'react'
import PropTypes from 'prop-types'

import { useScrollspy } from '@fwrlines/utils'

import C from 'ui/cssClasses'

import { LocalIndex } from 'ui/elements'
import { Link as ScrollLink } from 'react-scroll'

/* Relative imports
   import styles from './content_tree.scss' */
import './content_tree.scss'
import { Context, Provider, DisplayTree } from './common'


const defaultDurationFromDistance = (distance) => Math.abs(distance) / 2

const baseClassName = 'content_tree'

const ContentTree = ({
  id,
  className,
  style,
  children,

  title,

  content,

  elementClassName,
  activeClassName,
  pastClassName,

  unfoldActive,
  onElementClick,

  offsetPx,

  withScrollLink,
  scrollLinkOffset,
  scrollLinkSmooth,
  scrollLinkDuration
}) => {

  const {
    contentTree,
    idList,
    setContentTree
  } = useContext(Context)

  const {
    activeId,
    pastIds
  } = useScrollspy(
    {
      idList,
      offsetPx
    }
  )

  useEffect(
    () => setContentTree(content),
    [content, setContentTree]
  )

  const params = {
    tree:contentTree,
    activeId,
    pastIds,
    onElementClick,
    withScrollLink,
    scrollLinkOffset,
    scrollLinkSmooth,
    scrollLinkDuration,
    elementClassName,
    activeClassName,
    pastClassName,
    unfoldActive,

  }

  return(
    <LocalIndex
      title={ title }
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { children }
      <DisplayTree { ...params } />
    </LocalIndex>

  )}

ContentTree.propTypes = {
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
   * The html id for the content to spy on
   */
  content:PropTypes.string.isRequired,

  /**
   * The title to display for the local index
   */
  title:PropTypes.string,

  /**
   * HTML class of an item
   */
  elementClassName:PropTypes.string,

  /**
   * HTML class toggled for active items
   */
  activeClassName:PropTypes.string,

  /**
   * HTML class applied to "past" items
   */
  pastClassName:PropTypes.string,

  /**
   * Whether to unfold the current subsection
   */
  unfoldActive:PropTypes.bool,

  /**
   * The offset in px to pass to the listener
   */
  offsetPx:PropTypes.number,

  /**
   * Callback on element click
   */
  onElementClick:PropTypes.func,

  /**
   * Whether we use ScrollLink for links (from react-scroller)
   */
  withScrollLink:PropTypes.bool,

  /**
   * Offset to pass to the ScrollLink
   */
  scrollLinkOffset:PropTypes.number,

  /**
   * Whether the ScrollLink is smooth
   */
  scrollLinkSmooth:PropTypes.bool,

  /**
   * Duration to pass to the ScrollLink. If a function, should be (currentOffset) => milliseconds
   */
  scrollLinkDuration:PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func
  ]),
}

ContentTree.defaultProps = {
  offsetPx          :-100,
  scrollLinkOffset  :0,
  scrollLinkSmooth  :true,
  scrollLinkDuration:defaultDurationFromDistance,
  activeClassName   :'x-blue cx'
}

export default ContentTree
