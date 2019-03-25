import React from 'react';
import PropTypes from 'prop-types'
import { CardWrapper, Headline, 
  Author, ImageContainer } from './CardStyles'

const Card = props => {
  const { headline, img, author } = props.card
  
  return (
    <CardWrapper>
      <Headline>{headline}</Headline>
      <Author>
        <ImageContainer>
          <img src={img} alt='author thumbnail'/>
        </ImageContainer>
        <span>By {author}</span>
      </Author>
    </CardWrapper>
  )
}

// Make sure to include PropTypes.
Card.propType = {
  headline: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
}

export default Card;
