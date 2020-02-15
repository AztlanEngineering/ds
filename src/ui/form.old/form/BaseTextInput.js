import React, { memo } from 'react'

import { cssClasses as C } from 'ui'

import withLabelAndError from './withLabelAndError'
import withInputTracking from './withInputTracking'

const BaseTextInput = (props) =>
  <div className={
    'ui input ' + C.inputs
    + ( props.icon ? ' left icon':'')
    + ( props.inline ? ' yib': '')
    + ( props.className ? ' ' + props.className : '')
    + ( props.valid ? ' ' + C.valid: '')
    + ( props.error ? ' ' + C.error: '')
  }
  >
    <input
      id={ props.prefix + '_' + props.name }
      className='d-xs-16'
      value={ props.inputValue }
      onChange={ props.onChange }
      type={ props.type || 'text' }
      name={ props.name }
      placeholder={ props.placeholder || 'Enter text here' }
    />
    { props.icon &&
      <i className={ 'icon ' + props.icon }></i>
    }
  </div>

const isEqual = (prevProps, nextProps) => {
  const c0 = prevProps.icon == nextProps.icon
  const c1 = prevProps.inputValue == nextProps.inputValue
  if (!(c1 && c0)) {
    return false
  }
  else {
    return true
  }
}

export default process.env.GA_INPUTS_TRACKING === 'true' ?
  memo(withLabelAndError(withInputTracking(BaseTextInput)), isEqual) :
  memo(withLabelAndError(BaseTextInput), isEqual)

