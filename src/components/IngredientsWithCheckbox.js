import React from 'react';
import PropTypes from 'prop-types';
import '../css/IngredientsWithCheckbox.css';
import Checkbox from './Checkbox';

const IngredientsWithCheckBox = ({ item }) => {
  const entries = Object.entries(item);
  const ingredients = entries
    .filter((arr) => /strIngredient/.test(arr[0]) && arr[1]);
  const measures = entries
    .filter((arr) => /strMeasure/.test(arr[0]) && arr[1]);

  const checkboxes = ingredients.map((arr, index) => (
    <Checkbox
      key={ `${arr[0]}, ${index}` }
      testid={ `${index}-ingredient-step` }
      inputValue={ index }
      content={ `${arr[1]} ${measures[index] ? measures[index][1] : ''}` }
    />
  ));

  return (
    <div className="checkboxes-ingredients-container">
      { checkboxes }
    </div>
  );
};

export default IngredientsWithCheckBox;

IngredientsWithCheckBox.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};
