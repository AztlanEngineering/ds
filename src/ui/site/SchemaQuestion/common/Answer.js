/* @fwrlines/generator-react-component 1.1.2 */
import React from 'react'
import PropTypes from 'prop-types'

import { InnerContent } from 'ui/common'
import { BackToButton } from '../../common'


/* Config
   import C from 'ui/cssClasses' */


const baseClassName = 'answer'

const Answer = ({
  id,
  className,
  style,
  children,

  backTo,
  backToHTML,

  dangerouslySetInnerHTML
}) => {


  return (
    <div
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      itemScope
      itemProp='acceptedAnswer'
      itemType='https://schema.org/Answer'
      id={ id }
      style={ style }
    >
      <InnerContent
        itemProp='text'
        dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
      >
        { children }
      </InnerContent>
      <div className='ul pv1'>
        { backTo &&
          <BackToButton
            to={ backTo }
            dangerouslySetInnerHTML={{ __html:backToHTML }}
          />}
      </div>

    </div>
  )}

Answer.propTypes = {
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
   *  The children JSX
   */
  children: PropTypes.node,

  /**
   * Which html tag to use
   */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  //as: PropTypes.string,

  /**
   * The height of the element
   */
  height: PropTypes.string,

  /**
   * The width of the element
   */
  width: PropTypes.string,
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
Answer.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

export default Answer
