/* @fwrlines/generator-react-component 1.2.1 */
import * as React from 'react'
import PropTypes from 'prop-types'



import C from 'ui/cssClasses'

//Relative imports
import{ Card,Heading } from 'ui/elements'

const baseClassName = C.item


/**
 * Use `Item` to
 * Has color `x`
 */
const Item = ({
  id,
  className,
  style,

  active,
  heading,
  headingClassName,
  label,
  labelClassName,

  as:Element,
}) => {


  return (
    <Element
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <Heading
        className='yib'
        headingAs='p'
        headingClassName={
          [
            'fh s3 ks',
            headingClassName
          ].filter(e => e).join(' ')
        }
        heading={ heading }
        label={ label }
        //labelClassName='x-warning s-2 ks'
        labelClassName={
          [
            's-2 ks',
            labelClassName
          ].filter(e => e).join(' ')
        }
      />
    </Element>
  )}

Item.propTypes = {
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

Item.defaultProps = {
  as       :'li',
  className:'s-1 ks'
}

export default Item
