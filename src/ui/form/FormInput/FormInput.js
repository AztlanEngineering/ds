/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'

import {
  Input,
  Textarea,
  Choice,
  SVGChoice,
  CardChoice,
} from '../common'

/* Config*/
import C from 'ui/cssClasses'

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
 */
const FormInput = ({
  type,
  ...allProps
}) => {

  console.log(allProps.onChange)

  if (AcceptedHTMLInputTypes.includes(type)) return(
    <Input
      type={ type }
      { ...allProps }
    />
  )

  else if (type === 'textarea') return(
    <Textarea
      { ...allProps }
    />

  )

  else if ([ 'checkboxes', 'radios' ].includes(type)) return(
    <Choice
      multiple={ type === 'checkboxes' ? true : false }
      {...allProps}
    />

  )

  else if ([ 'svg-checkboxes', 'svg-radios' ].includes(type)) return(
    <SVGChoice
      multiple={ type === 'svg-checkboxes' ? true : false }
      { ...allProps }
    />

  )

  else if ([ 'card-checkboxes', 'card-radios' ].includes(type)) return(
    <CardChoice
      multiple={ type === 'card-checkboxes' ? true : false }
      { ...allProps }
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
  aesthetic:'mars',
  type     :'text',
}

export default FormInput
