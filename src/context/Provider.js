import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const myContext = createContext();

const Provider = ({ children }) => {
  const value = {};

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
