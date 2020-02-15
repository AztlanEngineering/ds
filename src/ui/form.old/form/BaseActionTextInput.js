import React, { memo } from 'react'

import { cssClasses as C } from 'ui'

import withLabelAndError from './withLabelAndError'
import withInputTracking from './withInputTracking'

const BaseActionTextInput = (props) =>
  <div className={
    'ui action input ' + C.inputs
    + ( props.icon ? ' left icon':'')
    + ( props.inline ? ' yib': '')
    + ( props.className ? ' ' + props.className : '')
    + ( props.valid ? ' ' + C.valid: '')
    + ( props.error ? ' ' + C.error: '')
  }
  >
    <input
      id={ props.prefix + '_' + props.name }
      className={ props.inputClassName || 'd-xs-10' }
      value={ props.inputValue }
      onChange={ props.onChange }
      type={ props.type || 'text' }
      name={ props.name }
      disabled={ props.buttonSuccess || props.buttonLoading }
      placeholder={ props.placeholder || 'Enter text here' }
    />
    { props.icon &&
      <i className={ 'icon ' + props.icon }></i>
    }
    <button
      className={
        'ui button'
      + ( (props.buttonIcon && !props.buttonLoading && !props.success) ? ' ' + ' right labeled icon' : '')
      + ( props.success ? ' icon' : '')
      + ( props.buttonLoading ? ' loading' : '' )
      + ( props.buttonClass ? ' ' + props.buttonClass : ' d-xs-6')
      + ( props.valid ? ' ' + C.valid: '')
      + ( props.error ? ' ' + C.error: '')
      }
      onClick={ props.buttonOnClick }
      disabled={ !props.valid || props.buttonSuccess || props.buttonLoading }
    >
      { (!props.buttonLoading && !props.buttonSuccess) &&
      <>
        { props.buttonIcon && <i className={ props.buttonIcon  + ' icon'}></i>}
        { props.button }
      </>
      }
      { props.buttonLoading && <p>nbsp;</p> }
      { props.buttonSuccess &&
      <>
        <i className='check icon'></i>
        { props.buttonSuccess }
      </>
      }
    </button>
  </div>

const isEqual = (prevProps, nextProps) => {
  const c1 = prevProps.inputValue == nextProps.inputValue
  const c2 = prevProps.buttonLoading == nextProps.buttonLoading
  const c3 = prevProps.buttonSUccess == nextProps.buttonSuccess
  if (!c1 || !c2 || !c3) {
    return false
  }
  else {
    return true
  }
}

export default process.env.GA_INPUTS_TRACKING === 'true' ?
  memo(withLabelAndError(withInputTracking(BaseActionTextInput)), isEqual) :
  memo(withLabelAndError(BaseActionTextInput), isEqual)

