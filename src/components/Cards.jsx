import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/Cards.css';
import Card from './RecipeCard';

const Cards = ({ info, type }) => {
  const renderItens = () => {
    if (type === 'food') {
      const elements = info.map(({
        idMeal,
        strMealThumb,
        strMeal,
      }, index) => (
        <Link
          to={ `/recipes-app/comidas/${idMeal}` }
          key={ idMeal }
        >
          <Card
            index={ index }
            image={ strMealThumb }
            title={ `${strMeal && strMeal.length > +'16' ? (
              `${strMeal.slice(0, +'16').trim()}...`
            ) : (
              strMeal
            )}` }
          />
        </Link>
      ));
      return elements;
    }
    const elements = info.map(({
      idDrink,
      strDrinkThumb,
      strDrink,
    }, index) => (
      <Link
        to={ `/recipes-app/bebidas/${idDrink}` }
        key={ idDrink }
      >
        <Card
          index={ index }
          image={ strDrinkThumb }
          title={ `${strDrink && strDrink.length > +'16' ? (
            `${strDrink.slice(0, +'16').trim()}...`
          ) : (
            strDrink
          )}` }
        />
      </Link>
    ));
    return elements;
  };

  return (
    <div className="cards-container">
      { !!info.length && renderItens() }
    </div>
  );
};

export default Cards;

Cards.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};
