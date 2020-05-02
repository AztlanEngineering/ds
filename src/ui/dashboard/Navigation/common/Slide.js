/* @fwrlines/generator-react-component 2.1.0 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import { DashboardContext } from '../../common'

import { Subtitle, IconList } from 'ui/common'
import { Heading, Button } from 'ui/elements'
import { HorizontalBar } from 'ui/site'

import NavItem from './Item'

// Config
import C from 'ui/cssClasses'

/* Relative imports
   import styles from './slide.scss' */
import('./slide.scss')

const baseClassName = 'slide'

/**
 * Use `Slide` to
 * Has color `x`
 */
const Slide = ({
  id,
  className,
  style,
  children,

  treeDepth,

  title,
  match,
  content,
  location,

  parentName,
  parentLocation,

  isPreviousSlide,
  isNextSlide,
}) => {

  const { navigate } = useContext(DashboardContext)

  return (
    <div
      className={
        [
          //styles[baseClassName],
          baseClassName,
          match && C.active,
          isPreviousSlide && C.previous,
          isNextSlide && C.next,
          'u2',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      {
        parentLocation &&
          <HorizontalBar
            className='x-blue u50'
          >
            <div className='yf inside'>
              <Button
                simple
                className='it x-white xh-white'
                icon='h'
                iconSide='l'
                onClick={() => navigate(parentLocation, 'sidebar')}
              >
                {
                  treeDepth == 1 ?
                    'Home' :
                    (parentName || 'Back')
                }
              </Button>
            </div>
          </HorizontalBar>
      }
      <Heading className='h3 v1 mv-v mh-u'>{ title }</Heading>
      <IconList className={'u2 p-u ' + C.compact}>
        { content && content.map((e, i, a) =>
          <>
            {(
              ((i == 0) && e.section ) ||
            (e.section && (e.section != a[i-1].section ) )
            ) &&
              <Subtitle
                className='s-1 ks u1 mv-u v2 ml-v'
                upper
              >
                { e.section }
              </Subtitle>
            }
            { console.log(888, e, e.match ? true: false) }
            <IconList.Item
              icon={ e.match ? "    " : undefined } //TODO provide better default
              iconHover='L'
            >
              <NavItem
                onClick={ () => navigate(
                  e.location,
                  e.children ? 'sidebar ': 'main'
                ) }
              >
                { e.title }
              </NavItem>
              { e.children &&
                <Slide
                  title={ e.title }
                  match={ e.match }
                  location={ e.location }
                  content={ e.children }
                  parentName={ title }
                  parentLocation={ location }
                  treeDepth={ treeDepth + 1 }
                  isNextSlide={
                    (match && true) ||
                    isNextSlide
                  }
                  isPreviousSlide={
                    (isPreviousSlide && !e.match)
                  }
                />
              }
            </IconList.Item>
          </>
        ) }
        { children }
      </IconList>
    </div>
  )}

Slide.propTypes = {
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
   * treeDepth
   */
  treeDepth:PropTypes.number,

  /**
   * The title of the navigation slide
   */
  title:PropTypes.string,

  /**
   * On which location should the slide be displayed
   */
  match:PropTypes.object,

  /**
   * On which location should the slide be displayed
   */
  content:PropTypes.object,

  /**
   * On which location should the slide be displayed
   */
  location:PropTypes.string,

  /**
   * The name of the parent to display in the return button
   */
  parentName:PropTypes.string,

  /**
   * The location of the parent slide, for the return button
   */
  parentLocation:PropTypes.string,

  /**
   * Is this slide is after the active slide
   */
  isNextSlide:PropTypes.bool,

  /**
   * Whether this slide is before the active slide
   */
  isPreviousSlide:PropTypes.bool,

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

Slide.defaultProps = {
  isNextSlide    :false,
  isPreviousSlide:false,
}

export default Slide
