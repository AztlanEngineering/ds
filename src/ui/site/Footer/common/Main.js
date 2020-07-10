/* @fwrlines/generator-react-component 2.4.0 */
import * as React from 'react'
import { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

import { SiteContext } from 'ui/common'
import { Heading } from 'ui/elements'

import { Link } from 'react-router-dom'


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

const baseClassName = 'main'


/**
 * Use `Main` to
 * Has color `x`
 */
const Main = ({
  id,
  className,
  style,
  children
}) => {

  const {
    SITE_NAME,
    FACEBOOK,
    INSTAGRAM,
    TWITTER,
    HOME_URL,
    SITE_DESCRIPTION
  } = useContext(SiteContext)

  const socials = useMemo(() => {

    let ntks = [
      {
        url :FACEBOOK,
        name:'facebook'
      },
      {
        url :INSTAGRAM,
        name:'instagram'
      },
      {
        url :TWITTER,
        name:'instagram'
      },
    ]

    return ntks.filter(e => e.url)

  }, [FACEBOOK, INSTAGRAM, TWITTER]
  )

  const SocialsComp = useMemo(() => () => <ul 
      className='inline'
  >
    {socials.map(
    (e) => 
      <li>
        <a href={ e.url }>{ e.name }</a>
      </li>
  )}
  </ul>

  ,
    [socials]
  )




  return (
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
      <div className='ph-u'>
        <Link to={ HOME_URL }>
        <Heading
          heading={ SITE_NAME }
          headingClassName='h3'
          subtitle={
            <SocialsComp/>
          }
        />
        </Link>
      </div>
      { SITE_DESCRIPTION &&
      <div className="ph-u">
        <p>
          {SITE_DESCRIPTION}
        </p>
      </div>
      }
      { children }
    </div>
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

/*
Main.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Main
