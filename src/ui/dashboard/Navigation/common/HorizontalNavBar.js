/* @fwrlines/generator-react-component 2.1.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import { Heading, Button } from 'ui/elements'
import { HorizontalBar } from 'ui/site'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './horizontal_nav_bar.scss' */
import('./horizontal_nav_bar.scss')

const baseClassName = 'horizontal_nav_bar'


/**
 * Use `HorizontalNavBar` to
 * Inner padding is read from `u`
 * */
const HorizontalNavBar = ({
  id,
  className,
  style,
  backLabel,
  backIcon,
  backTo
}) => {

  const history = useHistory()

  return (
    <HorizontalBar
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
      <div className='yf inside'>
        <Button
          simple
          className='it x-subtitles xh-paragraph k-s s1'
          icon={ backIcon }
          iconSide='l'
          onClick={ backTo ? () => history.push(backTo) : history.goBack }
        >
          { backLabel }
        </Button>
      </div>
    </HorizontalBar>
  )}

HorizontalNavBar.propTypes = {
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
  //children:PropTypes.node,

  /**
   * The back button label
   */
  backLabel:PropTypes.string,

  /**
   * The back button icon
   */
  backIcon:PropTypes.string,
}

HorizontalNavBar.defaultProps = {
  className:'u50',
  backLabel:'Back',
  backIcon:'h',
  //as:'p',
}

export default HorizontalNavBar
