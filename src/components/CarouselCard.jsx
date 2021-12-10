import React from 'react';
import PropTypes from 'prop-types';

const CarouselCard = ({ index, image, title }) => (
  <div
    data-testid={ `${index}-recipe-card` }
  >
    <img
      data-testid={ `${index}-card-img` }
      src={ image }
      alt={ image }
    />
    <h2
      data-testid={ `${index}-recomendation-title` }
    >
      { title }
    </h2>
  </div>
);

export default CarouselCard;

CarouselCard.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
