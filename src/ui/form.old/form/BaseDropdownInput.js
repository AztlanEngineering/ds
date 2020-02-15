import React, { memo } from 'react'
import {
  Dropdown,
} from 'semantic-ui-react'
import { cssClasses as C } from 'ui'
import {
  DEFAULT_OPTIONS
} from './text'

import withLabelAndError from './withLabelAndError'
import withInputTracking from './withInputTracking'

const BaseDropdownInput = (props) =>
  <Dropdown
    className={
      C.inputs
      /*+ ( props.icon ? ' left icon':'')
         + ( props.inline ? ' yib': '') */
    + ( props.className ? ' ' + props.className : '')
    + ( props.valid ? ' ' + C.valid: '')
    + ( props.error ? ' ' + C.error: '')
    }
    id={ props.prefix + '_' + props.name }
    value={ props.inputValue }
    onChange={ props.onChange }
    name={ props.name }
    placeholder={ props.placeholder || 'Enter text here' }
    search
    selection
    options={
      props.options || DEFAULT_OPTIONS
    }
  />

const isEqual = (prevProps, nextProps) => {
  const c0 = prevProps.options.length == nextProps.options.length
  const c1 = prevProps.inputValue == nextProps.inputValue
  if (!c0 || !c1) {
    return false
  }
  else {
    return true
  }
}

export default process.env.GA_INPUTS_TRACKING === 'true' ?
  memo(withLabelAndError(withInputTracking(BaseDropdownInput)), isEqual) :
  memo(withLabelAndError(BaseDropdownInput), isEqual)
