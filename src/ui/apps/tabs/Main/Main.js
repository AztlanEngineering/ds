/* @fwrlines/generator-react-component 2.2.5 */
import * as React from 'react'
import { useEffect, useMemo, useReducer } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import {
  Context as TabContext,
  Tabline
} from '../common'


//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './main.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
 import('./main.scss')
}

const isClient = !(typeof(window) === 'undefined')
const LOCAL_STORAGE_KEY = 'tabs'

const generateRandomString = () => Math.random().toString(36).substring(7)

const baseClassName = 'main'

const reducer = (state, action) =>{
  switch (action.type) {
  case 'INITIALIZE':
    return {
      ...action.payload
    }
  case 'OPEN_NEW_TAB':
    return {
      ...state,
      tabs:[
        ...state.tabs,
        action.payload,
      ],
      focus:action.payload.id
    }
  case 'SELECT_TAB':
    return {
      ...state,
      focus:action.payload
    }
  case 'CLOSE_TAB':
    return {
      ...state,
      tabs :state.tabs.filter( e => !(e.id === action.payload )),
      focus:((action.payload === state.focus) && state.tabs.length > 1) ?
        state.tabs[
          state.tabs.findIndex( e => e.id === action.payload) - 1
        ].id : state.focus
    }

  default:
    return state
  }

}


const openMenuOptions = [
  {
    value:'/apple',
    id   :'light',
    label:'apple'
  },
  {
    value:'/melon',
    id   :'dark',
    label:'melon'
  },
  {
    value:'/iceberg',
    id   :'iceberg',
    label:'Iceberg'
  },
  {
    value:'/tomatoe',
    id   :'sys',
    label:'tomatoe'
  }
]


/**
 * Use `Main` to
 * Has color `x`
 */
const Main = ({
  id,
  className,
  style,

  homeTab,
}) => {

  const [state, dispatch] = useReducer(reducer, {
    tabs:[
      {
        ...homeTab,
        id      :'__home',
        closable:false,
      }
    ],
    focus:'__home',
  })

  const history = useHistory()

  const openNewTab = (payload) => {
    console.log('opening new tab', payload)
    dispatch({
      type   :'OPEN_NEW_TAB',
      payload:{
        ...payload,
        id:generateRandomString()
      }, //'sidebar', 'main'
    })
  }

  const selectTab = (tabId) => {
    dispatch({
      type   :'SELECT_TAB',
      payload:tabId
    })
  }

  const closeTab = (tabId) => {
    dispatch({
      type   :'CLOSE_TAB',
      payload:tabId
    })
  }

  const focusedTab = useMemo(() => state.tabs.find(e => e.id === state.focus),
    [state.focus]
  )

  // Loading the state if it exists
  useEffect(() => {
    if(isClient) {
      const storedState = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (storedState) {
        dispatch({
          type   :'INITIALIZE',
          payload:JSON.parse(storedState),
        })
      }

    }
  }
  ,[])

  // Updating the store on each state change
  useEffect(() => {
    if(isClient) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(state)
      )
    }
  }
  ,[state])

  // Pushing to the url on each focus change
  useEffect(() => {
    history.push(focusedTab.path)
  }, [focusedTab])

  return (
    <TabContext.Provider value={{
      //State
      ...state,
      focusedTab,

      //Constants
      openMenuOptions,

      //Actions
      openNewTab,
      closeTab,
      selectTab
    }}
    >
      <div
        className={
          [
            //styles[baseClassName],
            baseClassName,
            'x-blue b-x',
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
      >
        <Tabline></Tabline>
        <h3>
          Focus is :
          { state.focus }
        </h3>
      </div>
    </TabContext.Provider>
  )}

Main.propTypes = {
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
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The home tab
   */
  homeTab:PropTypes.shape({
    path :PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
  }),
  /*
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

Main.defaultProps = {
  homeTab:{
    path :'/',
    title:'Home',
  },
  /* height:'2.2em',
     as:'p', */
}

Main.Tabline = Tabline

export default Main
