import React from 'react';
import IngredientCard from './IngredientCard';

const IngredientCards = ({ info, type }) => {
  const cards = info.map((item, index) => (
    <IngredientCard
      key={ item.idIngredient }
      index={ index }
      { ...item }
      type={ type }
    />
  ));
  return cards;
};

export default IngredientCards;
