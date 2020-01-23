/* @fwrlines/generator-react-component 1.1.2 */
import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import PaginatorContex from './Context'

/* Config
   import C from 'ui/cssClasses' */

const JumpButton = ({
  disabled,
  ...props
}) =>{

  const {
    buttonClassName,
    jumpButtonClassName:className
  } = useContext(PaginatorContext)

  return(
    <Button
      className={ className || buttonClassName }
      { ...props }
      disabled={ disabled }
    >
    …
    </Button>
  )}

JumpButton.propTypes = {
  /**
   * The JSX-Written, css styles to apply to the element.
   */
  disabled: PropTypes.bool,
}


JumpButton.defaultProps = {
  disabled:true,
}

export default JumpButton
