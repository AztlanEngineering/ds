/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useState, useContext, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

import { Item, BodyLocker } from './common'
import { SiteContext } from 'ui/common'
import { HamburgerIcon } from 'ui/site'
import { Link } from 'react-router-dom'


//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './nav_bar.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./nav_bar.scss')
}

const baseClassName = 'nav_bar'


const DefaultTitleComponent = ({title, className, link, open,...otherProps}) => {

  const {
    SITE_NAME,
    HOME_URL,
  } = useContext(SiteContext)
  return(
    <div
      className={
        [
        //styles[baseClassName],
          'm0 v-v',
          className
        ].filter(e => e).join(' ')
      }
      {...otherProps}
    >
      <Link to={ HOME_URL }>
        <p className='fh m-v tb s2 k-s'>{ SITE_NAME }</p>
      </Link>
    </div>
  )

}

const DefaultFooterComponent = ({ open }) =>
  <footer className='gc-footer'>
    &nbsp;
  </footer>
/**
 * Use `NavBar` to
 * Has color `x`
 */
const NavBar = ({
  id,
  className,
  style,
  children,

  as:Wrapper,

  TitleComponent,
  FooterComponent,
  ExtraContentComponent,

  openClassName,
  closedClassName,

  headerClassName,
  headerOpenClassName,
  headerClosedClassName,
  headerStyle,

  contentClassName,
  contentOpenClassName,
  contentClosedClassName,
  contentStyle,

}) => {

  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)

  return (
    <Wrapper
      className={
        [
        //styles[baseClassName],
          baseClassName,
          open && 'open',
          open ? openClassName : closedClassName,
          't',
          //'s1 k-s',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { open && <BodyLocker /> }
      <header
        className={
          [
            'gc-header',
            open ? headerOpenClassName : headerClosedClassName,
            headerClassName
          ].filter(e => e).join(' ')
        }
        style={ headerStyle }
      >

        <HamburgerIcon
          onClick={ toggleOpen }
          active={open}
          className='md-h lg-h'
        />
        <TitleComponent
          className='title'
          open={ open }
        />
        {  }
      </header>
      <ul
        className={
          [
            'gc-content ph-u',
            open ? contentOpenClassName : contentClosedClassName,
            contentClassName
          ].filter(e => e).join(' ')
        }
        style={ contentStyle }
      >
        { children }
        <ExtraContentComponent open={open}/>
      </ul>
      <FooterComponent open={open}/>
    </Wrapper>
  )}

NavBar.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  openClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  closedClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  headerClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  headerOpenClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  headerClosedClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  contentClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  contentOpenClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  contentClosedClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  headerStyle:PropTypes.object,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  contentStyle:PropTypes.object,

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
   *  The children JSX for the title. Takes prop `open` as a boolean
   */
  TitleComponent:PropTypes.node,

  /**
   *  The children JSX for the footer. Takes prop `open` as a boolean
   */
  FooterComponent:PropTypes.node,

  /**
   *  The children JSX for the footer. Takes prop `open` as a boolean
   */
  ExtraContentComponent:PropTypes.node,


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

NavBar.defaultProps = {
  as:'nav',
  TitleComponent       :DefaultTitleComponent,
  FooterComponent      :DefaultFooterComponent,
  ExtraContentComponent:() => null,
  //headerClassName:'',
  /* height:'2.2em',
     as:'p', */
}

NavBar.Item = Item
export default NavBar
