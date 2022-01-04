import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { myContext } from '../context/Provider';
import { getByIngredients } from '../services/funcs';

const IngredientCard = ({ type, strIngredient, strIngredient1, index }) => {
  const [click, setClick] = useState(false);
  const { setRecipes, setCategory, setFilter } = useContext(myContext);

  const filterByIngredient = async () => {
    const ingredient = type === 'food' ? strIngredient : strIngredient1;
    const recipes = await getByIngredients(type, ingredient);
    setCategory('All');
    setFilter(ingredient);
    setRecipes(recipes);
  };

  let image = '';
  if (type === 'food') {
    image = `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`;
  } else {
    image = `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png`;
  }

  return (
    <Link
      onClick={ async (event) => {
        event.preventDefault();
        await filterByIngredient();
        setClick(true);
      } }
      to={ type === 'food' ? '/comidas' : '/bebidas' }
    >
      <div
        data-testid={ `${index}-ingredient-card` }
      >
        <img
          data-testid={ `${index}-card-img` }
          src={ image }
          alt={ `${strIngredient} img` }
        />
        <h2
          data-testid={ `${index}-card-name` }
        >
          { type === 'food' ? strIngredient : strIngredient1 }
        </h2>
        { click && <Redirect
          to={ type === 'food' ? '/comidas' : '/bebidas' }
        /> }
      </div>
    </Link>
  );
};

export default IngredientCard;

IngredientCard.propTypes = {
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  strIngredient: PropTypes.string.isRequired,
  strIngredient1: PropTypes.string.isRequired,
};
