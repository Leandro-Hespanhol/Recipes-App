import React from 'react';
import PropTypes from 'prop-types';
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
        <div
          data-testid={ `${index}-recipe-card` }
          key={ idMeal }
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
      ));
      return elements;
    }
    const elements = maxItens.map(({
      idDrink,
      strDrinkThumb,
      strDrink,
    }, index) => (
      <div
        data-testid={ `${index}-recipe-card` }
        key={ idDrink }
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
