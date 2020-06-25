/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useMemo, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import { Figure } from 'ui/common'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './album.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./album.scss')
}

const baseClassName = 'album'

const randrange = (length) => Math.floor(Math.random() * length)
const randomSort = (a,b) => 0.5 - Math.random()

const reducer = (state, action) =>{
  switch (action.type) {
  case 'SET_INITIAL_PICTURE':
    return {
      ...state,
      currentPicture:state.pictures[0]
    }
  case 'MOVE_FORWARD':
    return {
      ...state,
      index         :(state.index + 1) % (state.pictures.length ),
      currentPicture:state.pictures[(state.index + 1) % (state.pictures.length )]
    }

  default:
    return state
  }

}

/**
 * Use `Album` to
 * Has color `x`
 */
const Album = ({
  id,
  className,
  style,
  as:Wrapper,

  pictures:initialPictures,
  baseUrl
}) => {

  const history = useHistory()

  const pictureSet = useMemo(
    () => initialPictures.sort(randomSort), 
    [initialPictures]
  )

  const [{
    pictures,
    currentPicture,
    index
  }, dispatch] = useReducer(reducer, {
    pictures      :pictureSet,
    index         :0,
    currentPicture:{},
  })

  const setInitialPicture = (id) => {
    dispatch({
      type   :'SET_INITIAL_PICTURE',
      payload:id
    })
  }

  const moveForward = () => {
    console.log('movin frwd to', index+1, 'out of ', pictures.length,'modular',  (index +1) %( pictures.length ))
    dispatch({
      type:'MOVE_FORWARD',
    })
  }

  //Get initial picture
  useEffect( () => {
    setInitialPicture()
  },
  []
  )

  useEffect( ()=> {
    console.log('picture chqnged', index, currentPicture)
    if (index > 0) {
      history.push(currentPicture.id)
    } else history.push(baseUrl)
  },
    [currentPicture.id]
  )


  return (
    <Wrapper
      className={
        [
        //styles[baseClassName],
          baseClassName,
          currentPicture.wrapperClassName,
          'b-x',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <span className='uc u-4 p-u c-on-x md-h lg-h yb' id='rotationmsg'>Rotate  your device to landscape for a better experience.</span>
      <a
        className='pointer content'
        onClick={ moveForward }
      >
        <Figure
          src={ currentPicture.source }
          alt={currentPicture.alt}
          objectFit='contain'
        >
          <span className='c-on-x'>
          { currentPicture.caption }
          </span>
        </Figure>
      </a>
    </Wrapper>
  )}

Album.propTypes = {
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
  //children: PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * The base url for the first picture
   */
  baseUrl: PropTypes.string,

  /**
   * The pictures of the album
   */
  pictures:PropTypes.arrayOf(PropTypes.shape({
    id              :PropTypes.string.isRequired,
    source          :PropTypes.string.isRequired,
    alt             :PropTypes.string,
    caption         :PropTypes.string.isRequired,
    wrapperClassName:PropTypes.string.isRequired,
  })).isRequired,

  /*
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

Album.defaultProps = {
  /* status: 'neutral',
     height:'2.2em', */
  baseUrl:'/',
  as:'main',
}

export default Album
