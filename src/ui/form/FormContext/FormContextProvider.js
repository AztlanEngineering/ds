/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import { useEffect, useState, useReducer } from 'react'
import PropTypes from 'prop-types'

import { usePage } from 'ui/site'

import FormContext from './FormContext'
import ga from 'react-ga'

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

  useGa,
  gaCategory
}) => {

  const { id:pageId } = usePage()

  const contextValues = useFormState({
    initialValues,
    initialTouched,
  })

  const [sentEvents, setSentEvents] = useState([])

  const pushSentEvent = (e) => setSentEvents([...sentEvents, e])


  useEffect(() => {
    console.log('touched changed', contextValues.touched)
    if(useGa) {
    Object.keys(contextValues.touched).forEach(inputId =>
    {
      console.log(inputId, sentEvents)
      if(contextValues.touched[inputId] && !sentEvents.includes(inputId))

        ga.event({
          category:gaCategory || pageId && `${pageId}`,
          action  :`input_touched__${inputId}`
        })
      pushSentEvent(inputId)

    })


    }

  }, [contextValues.touched])


  // console.warn(12309, contextValues)

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
  initialValues:PropTypes.object,

  /**
   * A map of input names to boolean values to initialiwe the touched attribute of the inputs
   */
  initialTouched:PropTypes.object,

  /**
   * Whether to track the form using ga events
   */
  useGa:PropTypes.bool,

  /**
   * The category of the GA events
   */
  gaCategory:PropTypes.string,

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
  useGa  :false
  /* height:'2.2em',
     as:'p', */
}

export default FormContextProvider
