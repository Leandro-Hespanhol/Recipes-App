import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ index, image, title }) => (
  <div
    className="card"
    data-testid={ `${index}-recipe-card` }
  >
    <img
      data-testid={ `${index}-card-img` }
      src={ image }
      alt={ image }
    />
    <h2
      data-testid={ `${index}-card-name` }
    >
      { title }
    </h2>
  </div>
);

export default Card;

Card.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
