/* @fwrlines/generator-react-component 1.1.2 */
import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */

//Relative imports
import { CurrentFolderContext } from './contexts'
const baseClassName = 'folder'

const Folder = ({
  id,
  className,
  style,
  children,

  iconColor,
  textColor,

  name,
  open
}) => {

  const [isOpen, setIsOpen] = useState(open)
  const { currentPath:parentsPath } = useContext(CurrentFolderContext)
  const currentPath = [parentsPath, name].join('/').replace('//','/')

  return (
    <li
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <CurrentFolderContext.Provider value={{
				  currentPath
      }}
      >
        <span
          onClick={ () => setIsOpen(!isOpen) }
          data-icon={ isOpen ? 'Y' : 'Z' }
          className={ 'c-off-black p01' }
        >
          { name }
        </span>
        <ul className={ isOpen ? '' : 'h' }>
          { children }
        </ul>
      </CurrentFolderContext.Provider>

    </li>
  )}

Folder.propTypes = {
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
   * The folder name
   */
  name: PropTypes.string,

  /**
   * Whether the folder is open
   */
  open: PropTypes.bool,

  /**
   * The color of the Icon
   */
  iconColor: PropTypes.string,

  /**
   * The color of the text
   */
  textColor: PropTypes.string,

}

Folder.defaultProps = {
  open:false,
  /* height:'2.2em',
     as:'p', */
}

export default Folder
