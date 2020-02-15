import React, { memo } from 'react'

import { cssClasses as C } from 'ui'

import withLabelAndError from './withLabelAndError'
import withInputTracking from './withInputTracking'

const BaseTextarea = (props) =>
  <div className={
    'ui input ' + C.inputs
		//+ ( props.icon ? ' left icon':'')
		+ ( props.inline ? ' yib': '')
    + ( props.className ? ' ' + props.className : '')
    + ( props.valid ? ' ' + C.valid: '')
    + ( props.error ? ' ' + C.error: '')
  }
  >
    <textarea
      id={ props.prefix + '_' + props.name }
      rows={ props.rows || '8' }
      className='d-xs-16'
      value={ props.inputValue }
      onChange={ props.onChange }
      name={ props.name }
      placeholder={ props.placeholder || 'Enter text here' }
    />
  </div>

const isEqual = (prevProps, nextProps) => {
  const c1 = prevProps.inputValue == nextProps.inputValue
  if (!c1) {
    return false
  }
  else {
    return true
  }
}

export default process.env.GA_INPUTS_TRACKING === 'true' ?
  memo(withLabelAndError(withInputTracking(BaseTextarea)), isEqual) :
  memo(withLabelAndError(BaseTextarea), isEqual)

