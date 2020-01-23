/* @fwrlines/generator-react-component 1.1.2 */
import React from 'react'
import PropTypes from 'prop-types'



//Config
import C from 'ui/cssClasses'

//Relative imports
const baseClassName = C.item

const Item = ({
  id,
  className,
  style,
  children,

  //itemId,//Unknown
  to,
  position,
}) => {
  var Wrapper
  const wrapper_args = { itemProp:'item' }
  if (to) {
    Wrapper = 'span'
  }
  else {
    Wrapper = Link
    wrapper_args['to'] = to
  }
  return (
    <li
      className={
        [
          styles[baseClassName],
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      itemProp='itemListElement'
      itemScope
      itemType='http://schema.org/ListItem'
    >
      <Wrapper
        { ...wrapper_args }
      >
        <span
          itemProp='name'
        >
          { children }
        </span>
        { position && <meta
          itemProp='position'
          content={ position }
                      />}
        {/* itemId && <meta
          itemProp='item'
          itemID={ itemId }
        /> */}
      </Wrapper>
    </li>
  )}

Item.propTypes = {
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

  /**
   * The Schema position (https://developers.google.com/search/docs/data-types/breadcrumb)
   */
  position: PropTypes.number.isRequired,

  /**
   * On click, internal link to
   */
  to: PropTypes.string,

  /**
   *
   */
  //itemId: PropTypes.string, //Required except for last
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
Item.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
}
*/

export default Item
