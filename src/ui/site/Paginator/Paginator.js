/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import PropTypes from 'prop-types'


import { Button } from 'ui/elements'

/* Config
   import C from 'ui/cssClasses' */

import {FormattedMessage} from 'react-intl'
import messages from './messages'


//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./paginator.scss')
}
import {
  Context as PaginatorContext,
  ArrowButton,
  PageNumberButton,
  SpreadPageNumbersButtons,
} from './common'

const baseClassName = 'paginator'

const Paginator = ({
  id,
  className,
  style,

  buttonClassName,
  jumpButtonClassName,
  currentClassName,

  paginator:{
    page,
    totalPages,
    /* totalDocs,
       limit,
       hasNextPage,
       hasPrevPage,
       prevPage,
       nextPage, */
  },
  spread,

  basic,
  stretch,
  getLink,

  leftIcon,
  rightIcon,

  previousMessage,
  nextMessage
}) => {

  return (
    <PaginatorContext.Provider
      value={{
        buttonClassName,
        jumpButtonClassName,
        getLink
      }}
    >
      <div
        className={
          [
            baseClassName,
            'row',
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
      >
        <Button.Group stretch={ stretch && 'horizontal' }>

          { page != 1 &&
            <>
              <ArrowButton
                iconSide='l'
                icon={ leftIcon }
                basic={ basic }
                pageNumber={ 1 }
              >
                <FormattedMessage {...previousMessage}/>
              </ArrowButton>

              <PageNumberButton
                pageNumber={ 1 }
                basic={ basic }
              />
              <SpreadPageNumbersButtons
                variation={ -1 }
                spread={ spread }
                pageNumber={ page }
                limit={ 1 }
                basic={ basic }
              />
            </>
          }

          <PageNumberButton
            className={ currentClassName || buttonClassName }
            pageNumber={ page }
            basic={ basic }
          />

          { page != totalPages &&
            <>
              <SpreadPageNumbersButtons
                variation={ 1 }
                spread={ spread }
                pageNumber={ page }
                limit={ totalPages }
                basic={ basic }
              />
              <PageNumberButton
                pageNumber={ totalPages }
                basic={ basic }
              />
              <ArrowButton
                iconSide='r'
                icon={ rightIcon }
                basic={ basic }
                pageNumber={ totalPages }
              >
                <FormattedMessage {...nextMessage}/>
              </ArrowButton>
            </>
          }

        </Button.Group>
      </div>
    </PaginatorContext.Provider>

  )}

Paginator.propTypes = {
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
   * The html class names for the buttons in general (??? TODO)
   */
  buttonClassName:PropTypes.string,

  /**
   * The html class for the "Jump to" buttons
   */
  jumpButtonClassName:PropTypes.string,

  /**
   * The html class for the current page
   */
  currentClassName:PropTypes.string,

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The paginator item, for instane generated by mongoose plugin
   */
  paginator:PropTypes.shape({
    totalPages:PropTypes.number.isRequired,
    page      :PropTypes.number.isRequired,
  }).isRequired,

  /**
   * Whether the style of the buttons is basic
   */
  basic:PropTypes.bool,

  /**
   * If the group should stretch (horizontally)
   */
  stretch:PropTypes.bool,

  /**
   * The function which retrieved the internal link based on the page number
   */
  getLink:PropTypes.func,

  /**
   * The icon for the left arrow
   */
  leftIcon:PropTypes.string,

  /**
   * The icon for the right arrow
   */
  rightIcon:PropTypes.string,

  /**
   * The icon for the right arrow
   */
  previousMessage:PropTypes.object,

  /**
   * The icon for the right arrow
   */
  nextMessage:PropTypes.object,
}

Paginator.defaultProps = {
  buttonClassName    :'s-lg b-grey bh-grey',
  jumpButtonCLassName:'c-white',
  paginator          :{},
  stretch            :false,
  getLink            :(n) => n,
  previousMessage    :messages.previous,
  nextMessage        :messages.next,
  leftIcon           :'h',
  rightIcon          :'l',
}

export default Paginator
