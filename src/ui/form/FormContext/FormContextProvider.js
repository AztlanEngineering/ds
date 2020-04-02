/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'


import FormContext from './FormContext'
/* Config
   import C from 'ui/cssClasses' */

//Relative imports


/**
 * Oh. This is a complicated one. Good luck to use it properly.
 * First provide the field names which are going to be mapped to the state
 */

const FormContextProvider = ({
  children,
}) => {

  return (
    <FormContext.Provider
      value={{}}
    >
      { children }
    </FormContext.Provider>
  )}

FormContextProvider.propTypes = {
  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   *  The children JSX
   */
  fields:PropTypes.arrayOf(PropTypes.string),

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
FormContextProvider.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default FormContextProvider
