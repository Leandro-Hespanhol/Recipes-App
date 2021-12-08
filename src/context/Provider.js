import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const myContext = createContext();

const Provider = ({ children }) => {
  const [type, setType] = useState('food');

  const value = {
    type,
    setType,
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
