import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ item }) => {
  const entries = Object.entries(item);
  const ingredients = entries
    .filter((arr) => /strIngredient/.test(arr[0]) && arr[1]);
  const measures = entries
    .filter((arr) => /strMeasure/.test(arr[0]) && arr[1]);

  const lis = ingredients.map((arr, index) => (
    <li
      key={ `${arr[0]}, ${index}` }
      data-testid={ `${index}-ingredient-name-and-measure` }
    >
      {`${arr[1]} ${measures[index] ? measures[index][1] : ''}`}
    </li>
  ));

  return (
    <ul>
      { lis }
    </ul>
  );
};

export default Ingredients;

Ingredients.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};
