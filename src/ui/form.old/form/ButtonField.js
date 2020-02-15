import React, { memo } from 'react'
import { cssClasses as C } from 'ui'
import {
  DEFAULT_OPTIONS
} from './text'
import { SquareButton } from 'ui/common'

import withLabelAndError from './withLabelAndError'
import withInputTracking from './withInputTracking'

const ButtonField = (props) =>
  <div className={
    'ui buttons ' + C.inputs
    + ( props.vertical ? ' vertical': '')
    + ( props.size ? ' ' + props.size : ' tiny')
    + ( props.className ? ' ' + props.className : '')
    + ( props.valid ? ' ' + C.valid: '')
    /* + ( props.valid ? ' ' + C.valid: '')
       + ( props.error ? ' ' + C.error: '') */
  }
  >
    { (props.options || DEFAULT_OPTIONS).map( e =>
      <SquareButton
        id={ props.prefix + '_' + props.name + '_' + props.key }
        className={ props.buttonClassName }
        name={ props.name }
        value={e.value}
        onClick={ props.onClick }
        valid={ props.valid && (e.value == props.inputValue) }
        //value={ props.inputValue }
        key={e.key}
      >
        { e.content || e.text }
      </SquareButton>
    ) }
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
  memo(withLabelAndError(withInputTracking(ButtonField)), isEqual) :
  memo(withLabelAndError(ButtonField), isEqual)

