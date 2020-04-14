/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
import { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Context, Slide, HorizontalBar, SideBar } from './common'


/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './content_slides.scss' */
import './content_slides.scss'

const baseClassName = 'content_slides'


const reducer = (state, action) => {
  switch (action.type) {
  case 'SET_SLIDE_INDEX':
    return {
      ...state,
      currentIndex:action.payload
    }
  case 'SET_CURRENT_SLIDE':
    return {
      ...state,
      ...action.payload
    }

  default:
    return state
  }
}

/**
 * Use `ContentSlides` to
 * Has color `x`
 */
const ContentSlides = ({
  id,
  className,
  style,
  children,

  slides
}) => {

  const [state, dispatch] = useReducer(reducer, {
    currentIndex:0,
    currentSlide:slides[0]
    /* values :initialValues,
       touched:initialTouched, */
  })

  const {
    currentSlide,
    currentIndex,
    isFirst,
    isLast
  } = state

  const setNextSlide = () => {
    if (!isLast) dispatch({
      type   :'SET_SLIDE_INDEX',
      payload:currentIndex + 1,
    })
  }

  const setPrevSlide = () => {
    if (!isFirst) dispatch({
      type   :'SET_SLIDE_INDEX',
      payload:currentIndex - 1,
    })
  }

  const setCurrentSlide = index => {
    console.log('dispacthing new slide', index, slides[index])
    dispatch({
      type   :'SET_CURRENT_SLIDE',
      payload:{
        currentSlide:slides[index],
        isFirst     :index == 0,
        isLast      :index == (slides.length - 1)
      }
    })
  }

  useEffect(() => {
    setCurrentSlide(currentIndex)
  },
  [currentIndex]
  )

  return (
    <Context.Provider
      value={{
        slides,
        setNextSlide,
        setPrevSlide,
        dispatch,
        ...state
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
      >
        { children }
      </div>
    </Context.Provider>
  )}

ContentSlides.propTypes = {
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
   * The slides properties
   */
  slides:PropTypes.arrayOf(
    PropTypes.shape({
      id   :PropTypes.string.isRequired,
      title:PropTypes.string.isRequired,
      state:PropTypes.string.isRequired,
    })
  ),

  /**
   * The width of the element
   */
  width:PropTypes.string,
  /*
  )
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

/*
ContentSlides.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
ContentSlides.Slide = Slide
ContentSlides.HorizontalBar = HorizontalBar
ContentSlides.SideBar = SideBar

export default ContentSlides
