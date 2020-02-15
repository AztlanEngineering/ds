import React from 'react'

import { cssClasses as C } from 'ui'

const InputLabel = (props) =>
  <label
    htmlFor={ props.htmlFor }
    className={
      C.label
    + ( props.className ? ' ' + props.className : '')
    + ( (props.colored && props.valid) ? ' ' + 't green': '')
    + ( (props.colored && props.error) ? ' ' + 't red': '')
    }
  >
    { props.label }
  </label>

export default InputLabel
