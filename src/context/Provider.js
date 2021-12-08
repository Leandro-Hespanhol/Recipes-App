import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const myContext = createContext();

const Provider = ({ children }) => {
  const [category, setCategory] = useState('All');
  const [recipes, setRecipes] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [foodOrDrink, setFoodOrDrink] = useState('food');

  const value = {
    category,
    recipes,
    setCategory,
    setRecipes,
    foodName,
    setFoodName,
    foodOrDrink,
    setFoodOrDrink,
  };

  return (
    <myContext.Provider value={ value }>
      { children }
    </myContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
