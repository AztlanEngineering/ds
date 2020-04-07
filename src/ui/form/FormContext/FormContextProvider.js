/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import { useEffect, useState, useReducer } from 'react'
import PropTypes from 'prop-types'


import FormContext from './FormContext'

import { useFormState } from '@fwrlines/utils'
/* Config
   import C from 'ui/cssClasses' */

//Relative imports


/**
 * Oh. This is a complicated one. Good luck to use it properly.
 * First provide the field names which are going to be mapped to the state
 */
const FormContextProvider = ({
  context:Context,

  children,

  initialValues,
  initialTouched,
}) => {

  const contextValues = useFormState({
    initialValues,
    initialTouched,
  })

  console.warn(12309, contextValues)

  return (
    <Context.Provider
      value={ contextValues }
    >
      { children }
    </Context.Provider>
  )}

FormContextProvider.propTypes = {
  /**
   * A react context object to instantiate the provider
   */
  context:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * A map of input names to values to initialiwe the values of the inputs
   */
  initialValues:PropTypes.string,

  /**
   * A map of input names to boolean values to initialiwe the touched attribute of the inputs
   */
  initialTouched:PropTypes.object,

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

FormContextProvider.defaultProps = {
  context:FormContext,
  /* height:'2.2em',
     as:'p', */
}

export default FormContextProvider
