/* @fwrlines/generator-react-component 1.1.1 */
import React from 'react'
import PropTypes from 'prop-types'

import {
  //useWindowSize,
  useScrollProgressSpy
} from '@fwrlines/utils'

/* Config
   import C from 'ui/cssClasses' */

//Relative imports
import styles from './page_progress_tracker.scss'

const baseClassName = 'page_progress_tracker'

const PageProgressTracker = ({
  id,
  className,
  style,

  rectClassName,
  strokeWidth=8,
  gradientMap,

  initializeAt,
  spyOn,
  offsetPx,
  throttleMs=100
}) => {

  const {
    progress
  } = useScrollProgressSpy({
    activeDefaultId:initializeAt,
    offsetPx,
    contentId:spyOn,
    throttleMs
  })

  const pathVerticalPosition = strokeWidth / 2

  return (
    <div
      className={
        [
          styles[baseClassName],
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={{ ...style, height:strokeWidth }}
    >
      <svg
        viewBox={`0 0 100 ${strokeWidth}`}
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        preserveAspectRatio='none'
        height={ strokeWidth }
        className={
          //TODO
          [
            styles[baseClassName],
            className
          ].filter(e => e).join(' ')
        }
      >

        { gradientMap &&
          <defs>
            <linearGradient
              id='pbg'
              x2='100%'
              y2='0'
            >
              {
                gradientMap.map((e,i) =>(
                  <stop
                    key={i}
                    { ...e }
                  />
                ))
              }
            </linearGradient>
          </defs>
        }

        <mask id='pb_mask'>
          <rect
            width='100'
            height={ strokeWidth }
            fill='black'
          />
          <path
            d={`M0 ${pathVerticalPosition} H 100`}
            strokeLinecap='butt'
            strokeWidth={ strokeWidth }
            strokeDasharray='100'
            id='active'
            style={{
              '--do':100 - progress,
            }}
            stroke='white'
          />
        </mask>

        <g>
          <rect
            width='100'
            height={ strokeWidth }
            id='pb_back'
            className={
              rectClassName ? rectClassName : ''
            }
            mask='url(#pb_mask)'
            style={{
				    '--fill':gradientMap && `url(#pbg)`
				  }}
          />
        </g>
      </svg>

    </div>
  )}

PageProgressTracker.propTypes = {
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
   * An html class to pass to the main rectangle
   */
  rectClassName: PropTypes.string,

  /**
   * Offset for the page tracking, in pixels
   */
  offsetPx:PropTypes.number,

  /**
   * An html id representing the target position at module initalization
   */
  initializeAt:PropTypes.string,

  /**
   * The html ID to spy on, for instance a container of content
   */
  spyOn:PropTypes.string.isRequired,

  /**
   * The linecap
   */
  //strokeLinecap:PropTypes.string,

  /**
   *
   */
  strokeWidth:PropTypes.number,

  /**
   * The svg map for the gradient background
   */
  gradientMap: PropTypes.arrayOf(PropTypes.shape({
    offset: PropTypes.string.isRequired,
    stopColor: PropTypes.string.isRequired,
  })),

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['primary', 'stroke', 'flat'])
  */
}

PageProgressTracker.defaultProps = {
  strokeWidth:8,
  throttleMs:100
}

export default PageProgressTracker
