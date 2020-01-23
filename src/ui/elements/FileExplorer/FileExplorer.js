/* @fwrlines/generator-react-component 1.1.0 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

//Relative imports
import styles from './file_explorer.scss'
import {
  FileExplorerContext,
  CurrentFolderContext
} from './common/contexts'
import { Folder, File } from './common'

const baseClassName = 'file_explorer'

const FileExplorer = ({
  id,
  className,
  style,
  children,

  iconColor,
  textColor,

  rootName,
  rootIcon,
  rootPath,

  selectedClassName,
}) => {


  const [selectedFile, selectFile] = useState(undefined)

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
      { rootName &&
        <span
          data-icon={ rootIcon }
          className='tb tu tls c-grey root'
        >
          { rootName }
        </span>
      }
      <ul
        className={
          ' list'
        }
        id={ id }
        style={ style }
      >
        <FileExplorerContext.Provider value={{
	  selectedFile,
	  selectFile,
	  selectedClassName
        }}
        >
          <CurrentFolderContext.Provider value={{
				  currentPath:rootPath
          }}
          >
            { children }
          </CurrentFolderContext.Provider>
        </FileExplorerContext.Provider>
      </ul>
    </div>
  )}

FileExplorer.propTypes = {
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
   * The color of the icon
   */
  //iconColor: PropTypes.oneOf(['primary', 'stroke', 'flat'])
  iconColor: PropTypes.string,

  /**
   * The color of the text
   */
  textColor: PropTypes.string,

  /**
   * The name of the root node
   */
  root: PropTypes.string,

  /**
   * The icon for the root directory
   */
  rootIcon: PropTypes.string,

  /**
   * The path for context (???) of the root
   */
  rootPath: PropTypes.string,

  /**
   * The html class to apply to a selected element
   */
  selectedClassName: PropTypes.string,
}

FileExplorer.defaultProps = {
  rootPath:'/',
  selectedClassName:'c-teal',
}

FileExplorer.File = File
FileExplorer.Folder = Folder

export default FileExplorer
