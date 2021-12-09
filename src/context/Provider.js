import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const myContext = createContext();

const Provider = ({ children }) => {
  const [category, setCategory] = useState('All');
  const [recipes, setRecipes] = useState([]);

  const value = {
    category,
    recipes,
    setCategory,
    setRecipes,
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
