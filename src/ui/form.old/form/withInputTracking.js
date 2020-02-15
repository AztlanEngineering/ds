import React from 'react'

import useInputTracking from './useInputTracking'

export default function withInputTracking(
  ComposedComponent,
){

  return (props) =>{

    const trackingCondition = typeof props.trackingCondition === 'undefined' ?
      props.valid :
      props.trackingCondition
    useInputTracking(props.name, props.value, trackingCondition)

    return(
      <ComposedComponent
        {...props}
      />
    )
  }
}
