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
import Header from '../components/Header';

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
      strInstructions,
    } = info[0];

    return (
      <>
        <Header type="drinks" title="Details" singleRecipe />
        <div style={ { 'backgroundImage': `url(${strDrinkThumb})` } } className="details-title">
          <div>
            <h1 data-testid="recipe-title">{ strDrink }</h1>
            <FavoriteAndShareButtons type="bebidas" id={ idDrink } />
          </div>
          <img data-testid="recipe-photo" src={ strDrinkThumb } alt={ strDrink } />
        </div>
        <div className="container">
          <StartRecipeButtons type="drink" id={ idDrink } />
          <div className="information-container">
            <div className="info">
              <h2>Ingredientes</h2>
              <Ingredients item={ info[0] } />
            </div>
            <div className="info">
              <h2>Instruções</h2>
              <p data-testid="instructions">{ strInstructions }</p>
            </div>
          </div>
          <h2 style={{'color': '#cc1613'}}>Recomendação</h2>
          <Carousel type="drink" />
        </div>
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
