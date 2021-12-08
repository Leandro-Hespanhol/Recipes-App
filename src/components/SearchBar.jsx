import React, { useContext, useState } from 'react';
import { myContext } from '../context/Provider';
import { getByIngredients } from '../services/funcs';

export default function SearchBar() {
  const { foodName, setRecipes, foodOrDrink } = useContext(myContext);
  const [mealType, setMealType] = useState('');

  const searchWithRadioButtons = async () => {
    let hold = [];
    switch (mealType) {
    case 'ingredient-search':
      hold = await getByIngredients(foodOrDrink, foodName);
      break;
    case 'name-search':
      hold = await getByIngredients(foodOrDrink, foodName);
      break;
    case 'first-letter-search':
      hold = await getByIngredients(foodOrDrink, foodName);
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
            onChange={ () => setMealType('ingredient-search') }
            data-testid="ingredient-search-radio"
          />
          Ingredientes
        </label>
        <label htmlFor="name-search">
          <input
            type="radio"
            name="inf"
            id="name-search"
            onChange={ () => setMealType('name-search') }
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label htmlFor="first-letter-search">
          <input
            type="radio"
            name="inf"
            id="first-letter-search"
            onChange={ () => setMealType('first-letter-search') }
            data-testid="first-letter-search-radio"
          />
          Primeira Letra
        </label>
        <button
          type="submit"
          data-testid="exec-search-btn"
          onClick={ () => searchWithRadioButtons() }
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
