import React from 'react';
import { Link } from 'react-router-dom';
import DoneCard from './DoneCard';

const DoneCards = ({ info }) => {
  const cards = info.map(({
    id,
    image,
    name,
    category,
    doneDate,
    area,
    alcoholicOrNot,
    tags,
    type,
  }, index) => (
    <Link key={ `${name}-done ${index}` } to={ `/${type}s/${id}` }>
      <DoneCard
        key={ `${name}-done ${index}` }
        id={ id }
        image={ image }
        area={ area }
        name={ name }
        alcoholicOrNot={ alcoholicOrNot }
        type={ type }
        category={ category }
        date={ doneDate }
        tags={ tags }
        index={ index }
      />
    </Link>
  ));

  return cards;
};

export default DoneCards;
