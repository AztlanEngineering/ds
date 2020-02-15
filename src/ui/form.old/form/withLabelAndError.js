import React from 'react'

import InputLabel from './InputLabel'
import InputError from './InputError'

export default function withLabelAndError(
  ComposedComponent,
){
  return (props) =>
    <>
      { props.label &&
      <InputLabel
        htmlFor={ props.prefix + '_' + props.name }
        className={ props.className }
        valid={ props.valid }
        error={ props.error }
        label={ props.label }
        colored={ props.coloredLabel }
      />
      }
      <ComposedComponent
        {...props}
      />
      { props.displayError &&
      <InputError
        className={ props.className }
        colored={ props.coloredError }
        error={ props.error }
      />
      }
    </>
}
