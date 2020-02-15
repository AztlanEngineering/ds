import React from 'react'

import { cssClasses as C } from 'ui'

const InputError = (props) =>
  props.error && <p
    className={
      C.error
    + ( props.className ? ' ' + props.className : '')
      //+ ( (props.colored && props.valid) ? ' ' + 't green': '')
    + ( (props.colored && props.error) ? ' ' + 't red': '')
    }
                 >
    { props.error }
                 </p>

export default InputError
