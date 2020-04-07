/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'

import {
  useFormInput
} from '@fwrlines/utils'

import {
  Input,
  Textarea,
  Choice,
  SVGChoice,
  CardChoice,
} from '../common'

import { FormContext } from '../FormContext'

/* Config*/
import C from 'ui/cssClasses'
import formConfig from '../formConfig'

/* Relative imports
   import styles from './input.scss' */
//import './form_input.scss'

//const baseClassName = 'input' // Better define in holder

const AcceptedHTMLInputTypes = [
  'text',
  'email',
  'password',
  'number',
  'date',
  'datetime',
  'month',
  'tel'
]

/**
 * Use `FormInput` to
 * Has color `x`
 * All the other props than type are passed to the particular input
 * Needs to be wrapped in FormContextProvider
 */
const FormInput = ({
  context,
  type,
  name,
  ...allProps
}) => {

  const inputProps = useFormInput(name, context)

  const passedProps = {
    ...allProps,
    ...inputProps,
    name,
  }

  //console.log(passedProps.onChange)

  if (AcceptedHTMLInputTypes.includes(type)) return(
    <Input
      type={ type }
      { ...passedProps }
    />
  )

  else if (type === 'textarea') return(
    <Textarea
      { ...passedProps }
    />

  )

  else if ([ 'checkboxes', 'radios' ].includes(type)) return(
    <Choice
      multiple={ type === 'checkboxes' ? true : false }
      {...passedProps}
    />

  )

  else if ([ 'svg-checkboxes', 'svg-radios' ].includes(type)) return(
    <SVGChoice
      multiple={ type === 'svg-checkboxes' ? true : false }
      { ...passedProps }
    />

  )

  else if ([ 'card-checkboxes', 'card-radios' ].includes(type)) return(
    <CardChoice
      multiple={ type === 'card-checkboxes' ? true : false }
      { ...passedProps }
    />

  )

  else if ( type == 'downshift-select' ) return(
    <>h</>
  )

  else if ( type == 'downshift-combobox' ) return(
    <>h</>
  )

}

FormInput.propTypes = {
  /**
   * A react context object to instantiate the provider
   */
  context:PropTypes.object,

  /**
   * The type of the input
   */
  type:PropTypes.oneOf([
    ...AcceptedHTMLInputTypes,
    'textarea',
    'checkboxes',
    'radios',
    'card-checkboxes',
    'card-radios',
    'svg-checkboxes',
    'svg-radios',
    'downshift-combobox',
    'downshift-select'
  ]
  ),

  /**
   * The display style.
   */
  aesthetic:PropTypes.oneOf(['mars', 'saturn']),
}

FormInput.defaultProps = {
  context  :FormContext,
  aesthetic:formConfig.defaultAesthetic,
  type     :'text',
}

export default FormInput
