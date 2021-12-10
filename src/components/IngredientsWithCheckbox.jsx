import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/IngredientsWithCheckbox.css';
import Checkbox from './Checkbox';
import { getInProgressRecipes, startRecipe } from '../services/funcs';

const IngredientsWithCheckBox = ({ item, numberChecked, setNumberChecked, type, id }) => {
  const [localItens, setLocalItens] = useState('');
  const entries = Object.entries(item);

  const findLocalItem = async () => {
    const local = getInProgressRecipes();
    if (type === 'food') {
      const { meals } = local;
      const localEntries = Object.entries(meals);
      let recipe = localEntries.find((arr) => arr[0] === id);
      if (!recipe) {
        await startRecipe(type, id);
        const novaRecipe = getInProgressRecipes();
        const localRecipe = Object.entries(novaRecipe.meals);
        recipe = localRecipe.find((arr) => arr[0] === id);
      }
      const ingredients = recipe[1];
      setLocalItens(ingredients);
    } else {
      const { cocktails } = local;
      const localEntries = Object.entries(cocktails);
      let recipe = localEntries.find((arr) => arr[0] === id);
      if (!recipe) {
        await startRecipe(type, id);
        const novaRecipe = getInProgressRecipes();
        const localRecipe = Object.entries(novaRecipe.cocktails);
        recipe = localRecipe.find((arr) => arr[0] === id);
      }
      const ingredients = recipe[1];
      setLocalItens(ingredients);
    }
  };

  const ingredients = entries
    .filter((arr) => /strIngredient/.test(arr[0]) && arr[1]);
  const measures = entries
    .filter((arr) => /strMeasure/.test(arr[0]) && arr[1]);

  const checkboxes = ingredients.map((arr, index) => (
    <Checkbox
      key={ `${arr[0]}, ${index}` }
      isChecked={ !localItens.includes(arr[1]) }
      testid={ `${index}-ingredient-step` }
      inputValue={ index }
      numberChecked={ numberChecked }
      setNumberChecked={ setNumberChecked }
      type={ type }
      id={ id }
      name={ arr[1] }
      content={ `${arr[1]} ${measures[index] ? measures[index][1] : ''}` }
    />
  ));

  useEffect(() => {
    findLocalItem();
  }, []);

  return (
    <div className="checkboxes-ingredients-container">
      { !!localItens && checkboxes }
    </div>
  );
};

IngredientsWithCheckBox.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  numberChecked: PropTypes.number.isRequired,
  setNumberChecked: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default IngredientsWithCheckBox;
