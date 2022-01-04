import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const myContext = createContext();

const Provider = ({ children }) => {
  const [category, setCategory] = useState('All');
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState('');
  const [searchEnable, setSearchEnable] = useState(true);

  const value = {
    category,
    recipes,
    currentRecipe,
    searchEnable,
    filter,
    setFilter,
    setCategory,
    setRecipes,
    setCurrentRecipe,
    setSearchEnable,
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
