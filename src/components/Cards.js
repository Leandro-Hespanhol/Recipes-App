import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/Cards.css';

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
          to={ `comidas/${idMeal}` }
          key={ idMeal }
        >
          <div
            data-testid={ `${index}-recipe-card` }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ strMealThumb }
            />
            <h2
              data-testid={ `${index}-card-name` }
            >
              { strMeal }
            </h2>
          </div>
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
        to={ `bebidas/${idDrink}` }
        key={ idDrink }
      >
        <div
          data-testid={ `${index}-recipe-card` }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ strDrinkThumb }
            alt={ strDrinkThumb }
          />
          <h2
            data-testid={ `${index}-card-name` }
          >
            { strDrink }
          </h2>
        </div>
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
