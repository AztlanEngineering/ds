/* @fwrlines/generator-react-component 2.1.0 */
import * as React from 'react'
import { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { DashboardContext } from '../common'

import { Slide } from './common'

import { matchPath } from 'react-router'
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './navigation.scss' */
import('./navigation.scss')

const baseClassName = 'navigation'

const useNavTree = ({
  children:rootChildren,
  ...rootNode
}) => {

  const { pathname } = useLocation()

  const [newTree, setNewTree] = useState({})

  const matchElementPath = (path) => matchPath(
    pathname,
    {
      path,
      exact:true,
      /* exact:false,
         strict:false, */
    }
  )

  const matchElement = (
    {
      location,
      baseMatch,
      ...rest
    }
  ) => { return {
    location,
    baseMatch,
    ...rest,
    match:baseMatch ?
      matchElementPath(baseMatch) :
      matchElementPath(location)
  }}

  const mapTree = (t) => t.map((
    {
      children,
      ...element
    }
  ) => {
    return {
      children:children && mapTree(children),
      ...matchElement(element),
    }
  }
  )

  useEffect(() => setNewTree({
    ...matchElement(rootNode),
    children:mapTree(rootChildren)
  }),
  [pathname]
  )

  return newTree

}

/*
const reducer = (state, action) => {
  switch (action.type) {
  case 'UPDATE_NAV_TREE':
    return {
      navTree:action.payload
    }
  default:
    return state
  }
}
*/

/**
 * Use `Navigation` to display a Dashboard Navigation for both desktop and mobile.
 * Consumes `dashboard/common/DashboardContext`
 */
const Navigation = ({
  id,
  className,
  style,
  as:Wrapper,

  tree
}) => {

  /*
  const [
    {
      navTree
    },
    dispatch
  ] = useReducer(
    reducer,
    {
      navTree:{}
    }
  )
  */
  
  const {
    title:rootTitle,
    match:rootMatch,
    children:rootChildren,
    location:rootLocation,
  } = useNavTree(tree)

  console.log(true, true, rootMatch, rootChildren)

  const {
    focus,
    setFocus
  } = useContext(DashboardContext)

  return (
    <Wrapper
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <Slide
        title={ rootTitle }
        match={ rootMatch }
        location={ rootLocation }
        content={ rootChildren }
        treeDepth={ 0 }
      >
      </Slide>
    </Wrapper>
  )}

Navigation.propTypes = {
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
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The navigation tree
   */
  tree:PropTypes.shape({
    section  :PropTypes.string,
    title    :PropTypes.string.isRequired,
    location :PropTypes.string.isRequired,
    baseMatch:PropTypes.string.isRequired,
    children :PropTypes.array

  }),


  /**
   * The width of the element
   */
  width:PropTypes.string,
  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

Navigation.defaultProps = {
  as:'nav',
  /* height:'2.2em',
     as:'p', */
}

Navigation.Slide = Slide //TODO Remove, not to be exposed

export default Navigation
