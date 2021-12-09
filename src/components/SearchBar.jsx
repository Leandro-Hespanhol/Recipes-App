import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { myContext } from '../context/Provider';
import { getByIngredients, getByName, getByFirstLetter } from '../services/funcs';

export default function SearchBar({ foodName, type }) {
  const ingredient = 'ingredient';
  const name = 'name';
  const firstLetter = 'first-letter';

  const { setRecipes } = useContext(myContext);
  const [mealType, setMealType] = useState('ingredient');

  const searchWithRadioButtons = async () => {
    let hold = [];
    switch (mealType) {
    case ingredient:
      hold = await getByIngredients(type, foodName);
      break;
    case name:
      hold = await getByName(type, foodName);
      break;
    case firstLetter:
      hold = await getByFirstLetter(type, foodName);
      break;
    default:
      break;
    }
    setRecipes(hold);
  };

  return (
    <div>
      <form
        onSubmit={ (e) => (
          e.preventDefault()
        ) }
      >
        <label htmlFor="ingredient-search">
          <input
            type="radio"
            name="inf"
            id="ingredient-search"
            checked={ mealType === ingredient }
            onChange={ () => setMealType(ingredient) }
            data-testid="ingredient-search-radio"
          />
          Ingredientes
        </label>
        <label htmlFor="name-search">
          <input
            type="radio"
            name="inf"
            id="name-search"
            checked={ mealType === name }
            onChange={ () => setMealType(name) }
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label htmlFor="first-letter-search">
          <input
            type="radio"
            name="inf"
            id="first-letter-search"
            checked={ mealType === firstLetter }
            onChange={ () => setMealType(firstLetter) }
            data-testid="first-letter-search-radio"
          />
          Primeira Letra
        </label>
        <button
          type="submit"
          data-testid="exec-search-btn"
          onClick={ () => (((mealType === firstLetter) && foodName.length > 1)
            ? alert('Sua busca deve conter somente 1 (um) caracter')
            : searchWithRadioButtons()) }
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
  foodName: PropTypes.string.isRequired,
};
