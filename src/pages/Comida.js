/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getItemById } from '../services/funcs';
import Ingredients from '../components/Ingredients';
import Video from '../components/Video';
import FavoriteAndShareButtons from '../components/FavoriteAndShareButtons';
import StartRecipeButtons from '../components/StartRecipeButtons';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import '../css/recipesDetail.css';
import { myContext } from '../context/Provider';
import { GiCookingGlove, GiCookingPot } from 'react-icons/gi';

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
      strInstructions,
      strYoutube,
    } = info[0];

    return (
      <>
        <Header type="food" title="Details" singleRecipe />
        <div style={ { 'backgroundImage': `url(${strMealThumb})` } } className="details-title">
          <div>
            <h1 data-testid="recipe-title">{ strMeal }</h1>
            <FavoriteAndShareButtons type="comidas" id={ idMeal } />
          </div>
          <img data-testid="recipe-photo" src={ strMealThumb } alt={ strMeal } />
        </div>
        <div className="container">
          <StartRecipeButtons type="food" id={ idMeal } />
          <div className="information-container">
            <div className="info">
              <h2><GiCookingGlove /> Ingredients</h2>
              <Ingredients item={ info[0] } />
            </div>
            <div className="info">
              <h2><GiCookingPot /> Instructions</h2>
              <p data-testid="instructions">{ strInstructions }</p>
            </div>
            { !!strYoutube && (
              <div className="info">
                <h2>Video</h2>
                <Video item={ info[0] } /> 
              </div>
            ) }
          </div>
          <h2 style={ { 'color': '#cc1613' } }>Recomendação</h2>
          <Carousel type="food" />
        </div>
      </>
    );
  };

  useEffect(() => {
    getInfo();
  }, [currentRecipe]);

  return (
    <>
      { !!info.length && renderItem() }
    </>
  );
};

export default Comida;

Comida.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
