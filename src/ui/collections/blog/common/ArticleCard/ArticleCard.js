/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Image } from 'ui/common'
import { Heading, Card } from 'ui/elements'



//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './article_card.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./article_card.scss')
}

const baseClassName = 'article_card'


/**
 * Use `ArticleCard` to
 * Has color `x`
 */
const ArticleCard = ({
  id,
  className,
  style,

  title,
  description,
  slug,

  headingAs,

  imageSrc,
  imageAlt
}) => {


  return (
    <Card
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'b-y y-red',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <Card.Section
        image
        className='gc-illustration'
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
        />
      </Card.Section>
      <Card.Section className='gc-heading'>
        <Heading
          headingAs={ headingAs }
          headingClassName=''
          heading={ title }
          subtitle={ description }
        />
      </Card.Section>
      <Card.Section className='gc-extra ur'>
        CTA
      </Card.Section>
    </Card>
  )}

ArticleCard.propTypes = {
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
   * Which html tag to use for the heading
   */
  headingAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The title of the card
   */
  title:PropTypes.string,

  /**
   * The description text
   */
  description:PropTypes.string,

  /**
   * the image src
   */
  imageSrc:PropTypes.string,

  /**
   * the image alt
   */
  imageAlt:PropTypes.string,

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,
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

ArticleCard.defaultProps = {
  headingAs:'h2'
  /* height:'2.2em',
     as:'p', */
}

export default ArticleCard
