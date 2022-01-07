import React from 'react';
import { Link } from 'react-router-dom';
import DoneCard from './DoneCard';

const DoneCards = ({ info, setInfo }) => {
  const cards = info.map((obj, index) => (
    <Link key={ `${obj.name}-done ${index}` } to={ `/recipes-app/${obj.type}s/${obj.id}` }>
      <DoneCard
        key={ `${obj.name}-done ${index}` }
        { ...obj }
        info={ info }
        setInfo={ setInfo }
        index={ index }
      />
    </Link>
  ));

  return cards;
};

export default DoneCards;
