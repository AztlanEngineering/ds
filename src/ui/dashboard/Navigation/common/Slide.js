/* @fwrlines/generator-react-component 2.1.0 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import { DashboardContext } from '../../common'

import { Subtitle } from 'ui/common'
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
}) => {

  const { navigate } = useContext(DashboardContext)

  return (
      <div
        className={
          [
            //styles[baseClassName],
            baseClassName,
            match && C.active,
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
                  "Home" :
                  (parentName || 'Back') 
                }
              </Button>
            </div>
          </HorizontalBar>
      }
      <ul
      >
        <li>
          <Heading className='h3'>{ title }</Heading>
        { content && content.map((e, i, a) =>
          <>
            {(
              ((i == 0) && e.section ) ||
            (e.section && (e.section != a[i-1].section ) )
            ) &&
              <Subtitle
                className='s-1 ks'
                upper
              >
                { e.section }
              </Subtitle>
            }
            <NavItem
              onClick={ () => navigate(
                e.location, 
                e.children ? 'sidebar ': 'main'
              ) }
            >{ e.title }</NavItem>
            { e.children &&
              <Slide
                title={ e.title }
                match={ e.match }
                location={ e.location }
                content={ e.children }
                parentName={ title }
                parentLocation={ location }
                treeDepth={ treeDepth + 1 }
              />
            }
          </>
        ) }
        </li>
        { children }
      </ul>
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
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The title of the navigation slide
   */
  title:PropTypes.string,

  /**
   * On which location should the slide be displayed
   */
  location:PropTypes.string,

  /**
   * treeHeight
   */
  treeHeight:PropTypes.number,



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

/*
Slide.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Slide
