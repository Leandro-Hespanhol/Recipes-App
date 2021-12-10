/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getItemById } from '../services/funcs';
import Ingredients from '../components/Ingredients';
import Video from '../components/Video';
import FavoriteAndShareButtons from '../components/FavoriteAndShareButtons';
import StartRecipeButtons from '../components/StartRecipeButtons';
import Carousel from '../components/Carousel';
import { myContext } from '../context/Provider';

const Comida = ({ match: { params: { id } } }) => {
  const [info, setInfo] = useState([]);
  const { currentRecipe } = useContext(myContext);

  const getInfo = async () => {
    const item = await getItemById('food', id);
    setInfo(item);
  };

  const renderItem = () => {
    const {
      idMeal,
      strMeal,
      strMealThumb,
      strCategory,
      strInstructions,
      strYoutube,
    } = info[0];

    return (
      <>
        <img data-testid="recipe-photo" src={ strMealThumb } alt={ strMeal } />
        <h1 data-testid="recipe-title">{ strMeal }</h1>
        <FavoriteAndShareButtons type="comidas" id={ idMeal } />
        <h2>Categoria</h2>
        <p data-testid="recipe-category">{ strCategory }</p>
        <h2>Ingredientes</h2>
        <Ingredients item={ info[0] } />
        <h2>Instruções</h2>
        <p data-testid="instructions">{ strInstructions }</p>
        <h2>Video</h2>
        { !!strYoutube && <Video item={ info[0] } /> }
        <h2>Compartilhar</h2>
        <StartRecipeButtons type="food" id={ idMeal } />
        <h2>Recomendação</h2>
        <Carousel type="food" />
      </>
    );
  };

  useEffect(() => {
    getInfo();
  }, [currentRecipe]);

  return (
    <div>
      { !!info.length && renderItem() }
    </div>
  );
};

export default Comida;

Comida.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
