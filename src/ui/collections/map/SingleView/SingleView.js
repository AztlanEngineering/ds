/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'

import {
  useForm,
  FormContextProvider,
  FormInput,
  FormContextDebugger
} from 'ui/form'

import { Accordion } from 'ui/site'

import { Button, Heading } from 'ui/elements'

import { useObjectMap, MapActions as Actions } from '../common'

import { Link, useParams } from 'react-router-dom'

import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/client'
//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './single_view.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./single_view.scss')
}

const baseClassName = 'single_view'


/**
 * Use `SingleView` to
 * Has color `x`
 */
const SingleView = ({
  id,
  className,
  style,
  itemId,
}) => {

  const {
    guid:currentId,
    ...routeParams
  } = useParams()

  const {
    currentType,
    generateLocalPath
  } = useObjectMap()

  const {
    loading,
    error,
    data={},
    refetch
  } = useQuery(gql(currentType.graphql.queries.ONE),
    {
      variables:{
        id:itemId || currentId
      },
      skip                       :!currentType.name,
      notifyOnNetworkStatusChange:true
    })

  const { fields=[] } = currentType.name ?
    currentType.defaultViews.single : {}

  const finalData = useMemo(() => (data && data[Object.keys(data).reduce((a, e) => {
    return e
  }, '')]) || {},
  [currentType.name, loading])

  const [updateItem, {
    data:mutationData={},
    error:mutationError,
    loading:mutationLoading
  }] = useMutation(gql(currentType.graphql.mutations.UPDATE))

  const SubmitButton = React.memo((props) => {
    const {
      values,
      /* touched,
         errors,
         isValid */
    } = useForm()

    const mutate = () => {
      updateItem({variables:values}),
      refetch()
    }

    return(
      <Button
        className='x-success'
        {...props}
        onClick={ !mutationLoading ? mutate : undefined }
        loading={ mutationLoading }
      >
        Submit
      </Button>
    )})

  if(finalData.__typename) return (
    <div
      className={
        [
          //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <div className='pv-v v2'>
        <Heading
          headingAs='h1'
          label={
            
            <Link to={ 
              generateLocalPath('list',
                {
                  ...routeParams
              }) 
              }>  
              { currentType.name }
            </Link>

          }
          heading={ finalData._string || finalData.name || finalData.id }
        />
      </div>
      <FormContextProvider
        initialValues={ finalData }
      >
        <div className='pv-v v2i s-1 k-s'>
          { fields.map((e, i) =>
            <FormInput
              key={i}
              compact
              { ...e }
            />
          ) }
        </div>
        <div className='pv-v v2'>
          <Actions
            item={ finalData }
            enableEdit={false}
            independent
            style={{
              justifyContent:'end'
            }}
            extraActions={[
              {
                condition:(user) => true,
                Component:SubmitButton
              }
            ]}
          />
        </div>
        <div className='pv-v v2'>
          <Accordion
            className='s0 k-s y-white x-subtitle'
            toggleStyle='plus'
          >
            <Accordion.Item
              className='y-blue b-y ui-dark'
              title={
                <Heading
                  headingAs='h2'
                  heading='Full Response'
                />
              }
              id={ 'full_response' }
            >
              <pre className='c-x x-paragraph'>

                { data && JSON.stringify(finalData, null, 2) }
              </pre>
            </Accordion.Item>
            <Accordion.Item
              className='y-background b-y'
              title={
                <Heading
                  headingAs='h2'
                  heading='Form Debug'
                />
              }
              id={ 'form_debugger' }
            >
              <FormContextDebugger/>
            </Accordion.Item>
            { error &&
              <Accordion.Item
                className='y-error b-y'
                title={
                  <Heading
                    headingAs='h2'
                    heading='Loading Error (query)'
                    subtitle='This only appears if the object didnt load properly.'
                  />
                }
                id={ 'form_debugger' }
              >
              </Accordion.Item>}
            { mutationError &&
              <Accordion.Item
                className='y-error b-y'
                title={
                  <Heading
                    headingAs='h2'
                    heading='Save Error (mutation)'
                    subtitle='This only appears if the object didnt save properly.'
                  />
                }
                id={ 'form_debugger' }
              >
              </Accordion.Item>}
          </Accordion>
        </div>

      </FormContextProvider>
    </div>
  )
  else return(
    <div
      className={
        [
          //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { loading && ' LOADING' }
      { error && JSON.stringify(error) }
      If nothing else appears, the object was not found or there was no data returned

    </div>
  )
}

SingleView.propTypes = {
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
   * Overloads the automatic detection of the id in the url
   */
  itemId:PropTypes.string,

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

/*
SingleView.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default SingleView
