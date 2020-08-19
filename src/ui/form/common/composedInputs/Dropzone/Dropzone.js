/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useState, useCallback, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Figure } from 'ui/common'

import { SnapSlider } from 'ui/elements'

import { useDropzone } from 'react-dropzone'

import { InputHolder, InputInside } from '../../elements'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} />

//Config

//import C from 'ui/cssClasses'


const baseClassName = 'dropzone'
*/

/**
 * Use `Dropzone` to ...
 * Can be called in `FormInput` as types `dropzone` and `image-dropzone`. When using `image-dropzone` it is equivalent to calling `dropzone` with the `imageUploader` prop to `true` and `accept` to png and jpg types
 */
const Dropzone = ({
  id,
  className,
  style,

  errors,
  valid,

  disabled,
  optional,

  as,
  aesthetic,
  compact,

  inputId,
  inputClassName,
  inputStyle,
  inputDisabled,

  label,
  labelId,
  labelClassName,
  labelStyle,

  description,
  descriptionAs,
  descriptionClassName,
  descriptionStyle,

  name,
  value,
  onChange,
  onBlur,
  onFocus,


  // We use a non traditional way of setting the value, provided by the contextprovider
  setInputValue,

  //Specific to this input
  accept,
  maxSize,
  minSize,
  multiple,

  imageUploader, //A boolean that sets up some other healthy default

  ...otherProps
}) => {

  const [dropzoneErrors, setDropzoneErrors] = useState(false)

  //console.log(`Component rendered with ${value} ${typeof value}`)

  const onDrop = useCallback((acceptedFiles, rejectedFiles, event) => {
    if(acceptedFiles.length) {
      const filesState = acceptedFiles.map(file => {
        return Object.assign(file, {
          preview:URL.createObjectURL(file)
        }
        )})
      setInputValue(multiple ? filesState : filesState[0])
    } else {
      setInputValue(null)
    }
    //console.log(`accepted`, acceptedFiles)

    //TODO in the future pass the errors to the form state
    if (rejectedFiles.length) {
      const newErrorState = []
      rejectedFiles.forEach(({ errors, file }) => {
        errors.forEach(({ code, message }) => newErrorState.push(
          `File ${file.name} : ${message}`
        ))
      })
      setDropzoneErrors(newErrorState)
    }
    else {
      setDropzoneErrors(false)
    }

    //console.log(`event`, event)
  },
  [
    setInputValue, setDropzoneErrors
  ]
  )

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    value && (multiple ?
      value.forEach(file => URL.revokeObjectURL(file.preview)) :
      URL.revokeObjectURL(value.preview))
  }, [value])

  const inputErrors = useMemo(() => {
    if (!(errors && errors.length)) return dropzoneErrors
    else {
      var otherErrors = (typeof errors ==='string') ? [errors] : errors
      return [
        ...otherErrors,
        ...dropzoneErrors
      ]

    }

  },
  [
    dropzoneErrors,
    errors
  ]
  )

  const dropzoneProps = {
    accept,
    disabled,
    maxSize,
    minSize,
    multiple,
    onDrop
  }

  const {
    getRootProps,
    getInputProps,
    isDragAccept
  } = useDropzone(dropzoneProps)


  const holderProps = {
    id,
    className:[
      //styles[baseClassName],
      baseClassName,
      className
    ].filter(e => e).join(' '),
    style,

    errors:inputErrors,
    valid,

    disabled,
    optional,

    as,
    aesthetic,
    compact,

    inputId,

    label,
    labelId,
    labelClassName,
    labelStyle,

    description,
    descriptionAs,
    descriptionClassName,
    descriptionStyle,

  }


  const {
    onBlur:dropzoneOnRootBlur,
    ...originalRootProps
  } = getRootProps()

  const finalOnBlur = useCallback((e) => {
    e.persist()
	  //console.log('9988', e)
    dropzoneOnRootBlur(e)
    onBlur(e)
  },
  [
    dropzoneOnRootBlur,
    onBlur
  ])

  const inputProps = {
    ...getInputProps(),
    id       :inputId,
    className:inputClassName,
    style    :inputStyle,
    disabled :inputDisabled,

    name,

    /* value,
       onChange, */
    onBlur,
    //onFocus,
    ...otherProps

  }

  return (
    <InputHolder
      { ...holderProps }
    >
      <SnapSlider className='thumbnails'>
        <div
          {...originalRootProps}
          className={[
            'upload-area',
            isDragAccept && 'drag-accept'
          ].filter(e => e).join(' ')
          }
          onBlur={ finalOnBlur }
        >
          <input
            {...inputProps}
          />
          <span className={[
            'add-icon',
            isDragAccept ? 'h3' : 'h1'
          ].filter(e => e).join(' ')
          }
          >
            {
              isDragAccept ? (multiple ?
                'Drop your files here.' :
                'Drop your file here.'
              ) : '+'
            }
          </span>
        </div>
        { multiple && imageUploader && value && value.length &&
          value.map((e, i) =>
            <div key={i}>
              <Figure src={ e.preview }>
                <span className='x-subtitle c-x'>
                  { e.path }
                </span>

              </Figure>
            </div>
          ) }
        { !multiple && imageUploader && value &&
          <div>
            <Figure src={ value.preview }>
              <span className='x-subtitle c-x'>
                { value.path }
              </span>

            </Figure>
          </div>
        }


      </SnapSlider>
    </InputHolder>
  )}

Dropzone.propTypes = {
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
   * Whether the input is on an errors state. Will be displayed before the description.
   */
  errors:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),

  /**
   * Whether the input is valid. If a sentence, will be displayed before the description.
   */
  valid:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),

  /**
   * Whether the input is disabled. This property is applied at the wrapper level, and only if the wrapper is a fieldset
   */
  disabled:PropTypes.bool,

  /**
   * Whether the input is optional. Is considered a better practice than to mark the required fields
   */
  optional:PropTypes.bool,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * The display style.
   */
  aesthetic:PropTypes.oneOf(['mars', 'saturn']),

  /**
   * Whether the input is compact
   */
  compact:PropTypes.bool,

  /**
   * Provide an HTML id to the input
   */
  inputId:PropTypes.string.isRequired,

  /**
   * The html class names to be provided to the input
   */
  inputClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the input.
   */
  inputStyle:PropTypes.object,

  /**
   * Whether the input is disabled. Do not apply at the same time as 'disabled'
   */
  inputDisabled:PropTypes.bool,

  /**
   * The content of the label
   */
  label:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * Whether the input is on an errors state. Will be displayed before the description.
   */
  errors:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),

  /**
   * Provide an HTML id to the label
   */
  labelId:PropTypes.string,

  /**
   * The html class names to be provided to the label
   */
  labelClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the label.
   */
  labelStyle :PropTypes.object,
  /**
   * The input description
   */
  description:PropTypes.string,

  /**
   * The html class names to be provided to the input description
   */
  descriptionClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the input description.
   */
  descriptionStyle:PropTypes.object,

  /**
   * Which html tag to use
   */
  descriptionAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * The input name
   */
  name:PropTypes.string.isRequired,

  /**
   * The value of the input, for controlled inputs
   */
  value:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),

  /**
   * Which function to call on value change, for controlled inputs
   */
  onChange:PropTypes.func,

  /**
   * Which function to call on input focus
   */
  onFocus:PropTypes.func,

  /**
   * Which function to call on input blur
   */
  onBlur:PropTypes.func,

  /**
   * Which function to call as `const onDrop= (acceptedFiles) => setInputValue(acceptedFiles)`
   */
  setInputValue:PropTypes.func.isRequired,

  /**
   * The max size of the file. See https://react-dropzone.js.org/ for details
   */
  maxSize:PropTypes.number,

  /**
   * The max size of the file. See https://react-dropzone.js.org/ for details
   */
  minSize:PropTypes.number,

  /**
   * Whether several files are accepted. See https://react-dropzone.js.org/ for details
   */
  multiple:PropTypes.bool,


  /**
   * By selecting this you will display a thumnail gallery
   */
  imageUploader:PropTypes.bool,

  /**
   * The mime type accepted by the input. See https://react-dropzone.js.org/ for details
   */
  accept:PropTypes.string,
}

Dropzone.defaultProps = {
  multiple     :false,
  setInputValue:(v) => null,
  imageUploader:false
}

export default Dropzone
