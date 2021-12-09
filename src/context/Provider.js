import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const myContext = createContext();

const Provider = ({ children }) => {
  const [category, setCategory] = useState('All');
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState('');

  const value = {
    category,
    recipes,
    currentRecipe,
    setCategory,
    setRecipes,
    setCurrentRecipe,
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
