/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'



//  Config
import C from 'ui/cssClasses'

/* Relative imports
   import styles from './menu_side_bar.scss' */
import './menu_side_bar.scss'

const baseClassName = 'menu_side_bar'

/**
 * Use `MenuSideBar` to
 * Has color `x`
 * Please note that some stories should be better seen in canvas than docs
 */
const MenuSideBar = ({
  id,
  className,
  style,
  children,

  as:Wrapper,

  insideClassName,

  //side,
}) => {


  return (
    <Wrapper
      className={
        [
        //styles[baseClassName],
          baseClassName,
          //      C[side],
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <div
        className={
          [
            C.inside,
            insideClassName
          ].filter(e => e).join(' ')
        }
      >
        { children }
      </div>
    </Wrapper>
  )}

MenuSideBar.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element (except width)
   */
  className:PropTypes.string,

  /**
   * The html class names to be provided to this element (width only)
   */
  widthClassName:PropTypes.string,

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
   * The html class names to be provided to the inside(sticky)
   */
  insideClassName:PropTypes.string,

  /**
   * On which side to display the sidebar
   */
  //side:PropTypes.oneOf(['left', 'right'])
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

MenuSideBar.defaultProps = {
  as:'nav',
  //side          :'left',
  /* height:'2.2em',
     as:'p', */
}

export default MenuSideBar
