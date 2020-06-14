/* @fwrlines/generator-react-component 2.3.3 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'


import {
  IconList
} from 'ui/common'

import {
  Card,
  Heading
} from 'ui/elements'

import { 
  Feature ,
  Price,
} from './common'

import PlanContext from './Context'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './plan.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./plan.scss')
}

const baseClassName = 'plan'


/**
 * Use `Plan` to
 * Has color `x`
 */
const Plan = ({
  id,
  className,
  style,
  children,

  textClassName,
  name,

  price,
  currency,

  ...otherProps
}) => {

  return (
    <PlanContext.Provider value={{
      textClassName,
      name,
    }}
    >
      <Card
        className={
          [
            //styles[baseClassName],
            baseClassName,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
        { ...otherProps }
      >
        <Card.Section>
          <Heading
            heading={ name }
            headingClassName={
              [
                'h3',
                textClassName
              ].filter(e => e).join(' ')
            }
          />
          <Price
            price={ price }
            currency={ currency }
          ></Price>
        </Card.Section>
        <Card.Section>
          <Heading
            heading='Features'
            headingClassName={
              [
                'h4',
                textClassName
              ].filter(e => e).join(' ')
            }
          />
          <IconList className={textClassName}>
            { children }
          </IconList>
        </Card.Section>
      </Card>
    </PlanContext.Provider>
  )}

Plan.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * The html class names to be provided to all the children and grandchildren text elements
   */
  textClassName:PropTypes.string,

  /**
   * The plan name
   */
  name:PropTypes.string.isRequired,

  /**
   * The price, passed to `Plan.Price`
   */
  price:PropTypes.string,

  /**
   * The currency, passed to `Price``
   */
  currency:PropTypes.string,
  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

Plan.defaultProps = {
  currency:'€',
}

Plan.Feature = Feature
Plan.Price = Feature

export default Plan
