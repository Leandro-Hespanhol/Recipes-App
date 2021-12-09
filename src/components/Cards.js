import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/Cards.css';
import Card from './RecipeCard';

const Cards = ({ info, type }) => {
  const maxItens = info.slice(0, +'12');

  const renderItens = () => {
    if (type === 'food') {
      const elements = maxItens.map(({
        idMeal,
        strMealThumb,
        strMeal,
      }, index) => (
        <Link
          to={ `/comidas/${idMeal}` }
          key={ idMeal }
        >
          <Card index={ index } image={ strMealThumb } title={ strMeal } />
        </Link>
      ));
      return elements;
    }
    const elements = maxItens.map(({
      idDrink,
      strDrinkThumb,
      strDrink,
    }, index) => (
      <Link
        to={ `/bebidas/${idDrink}` }
        key={ idDrink }
      >
        <Card index={ index } image={ strDrinkThumb } title={ strDrink } />
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
