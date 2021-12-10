import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteAndShareButtons from '../components/FavoriteAndShareButtons';
import IngredientsWithCheckbox from '../components/IngredientsWithCheckbox';
import { getItemById } from '../services/funcs';
import { myContext } from '../context/Provider';

export default function ComidaInProgress({ match: { params: { id } } }) {
  const [info, setInfo] = useState([]);
  const { currentRecipe } = useContext(myContext);

  const getInfo = async () => {
    const item = await getItemById('food', id);
    setInfo(item);
  };

  useEffect(() => {
    getInfo();
  }, [currentRecipe]);

  const renderItem = () => {
    const {
      strMeal,
      strMealThumb,
      strCategory,
      strInstructions,
    } = info[0];

    return (
      <>
        <img data-testid="recipe-photo" src={ strMealThumb } alt={ strMeal } />
        <h1 data-testid="recipe-title">{ strMeal }</h1>
        <FavoriteAndShareButtons />
        <p data-testid="recipe-category">{ strCategory }</p>
        <h2>Ingredientes</h2>
        <IngredientsWithCheckbox item={ info[0] } />
        <h2>Instruções</h2>
        <p data-testid="instructions">{ strInstructions }</p>
        <button data-testid="finish-recipe-btn" type="button">Finalizar receita</button>
      </>
    );
  };

  return (
    <div>
      { !!info.length && renderItem() }
    </div>
  );
}

ComidaInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
