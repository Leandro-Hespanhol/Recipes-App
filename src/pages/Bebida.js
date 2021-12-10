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

const Bebida = ({ match: { params: { id } } }) => {
  const [info, setInfo] = useState([]);
  const { currentRecipe } = useContext(myContext);

  const getInfo = async () => {
    const item = await getItemById('drinks', id);
    setInfo(item);
  };

  const renderItem = () => {
    const {
      idDrink,
      strDrink,
      strDrinkThumb,
      strCategory,
      strInstructions,
      strYoutube,
    } = info[0];

    return (
      <>
        <img data-testid="recipe-photo" src={ strDrinkThumb } alt={ strDrink } />
        <h1 data-testid="recipe-title">{ strDrink }</h1>
        <FavoriteAndShareButtons type="bebidas" id={ idDrink } />
        <h2>Categoria</h2>
        <p data-testid="recipe-category">{ `${strCategory}, Alcoholic` }</p>
        <h2>Ingredientes</h2>
        <Ingredients item={ info[0] } />
        <h2>Instruções</h2>
        <p data-testid="instructions">{ strInstructions }</p>
        { !!strYoutube && (
          <>
            <h2>Video</h2>
            <Video item={ info[0] } />
          </>
        ) }
        <h2>Compartilhar</h2>
        <StartRecipeButtons type="drink" id={ idDrink } />
        <h2>Recomendação</h2>
        <Carousel type="drinks" />
      </>
    );
  };

  useEffect(() => {
    getInfo();
  }, [currentRecipe]);

  return (
    <div>
      { info && !!info.length && renderItem() }
    </div>
  );
};

export default Bebida;

Bebida.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
