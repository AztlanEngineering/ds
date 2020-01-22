/* @fwrlines/generator-react-component 1.1.2 */
import React from 'react'
import PropTypes from 'prop-types'



//Config
//import C from 'ui/cssClasses'

const baseClassName = 'wireframe_text'

const Text = mem({
  id,
  className,
  style,
}) =>
  <Element
    className={
	  main_class + text_suffix
		//+ (? '':'')
		+ (className ? ' ' + className : '')
		+ ' fw'
    }
    id={ id }
    style={ style }
  >
    { children || TEST_TXT[size] }
  </Element>
)


Text.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  size: PropTypes.string,
}


const Text = ({
  id,
  className,
  style
  children,

  size,

  as:Element,
}) => {
  
  
  return (
  <div 
    className={
      [
        styles[baseClassName],
        className
      ].filter(e => e).join(' ')
  }
    id={ id }
    style={ style }
  >
    <h2>Welcome to the Text component</h2>
  </div>
)}

Text.propTypes = {
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
   * With html tag to use
   */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),


  /**
   * The size of the text (??? unit)
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  */
}

Text.defaultProps = {
  size:'md',
  as:'p',
}

export default Text
