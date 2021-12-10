import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

const DoneCard = ({
  name,
  image,
  id,
  type,
  category,
  date,
  area,
  index,
  tags,
  alcoholicOrNot,
}) => {
  const [isCopy, setIsCopy] = useState(false);

  const showMessage = () => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, +'5000');
  };

  let newArray = [];
  if (typeof tags === 'string') {
    newArray.push(tags);
  } else {
    newArray = [...tags];
  }

  const tagsElements = newArray.map((item) => (
    <p key={ item } data-testid={ `${index}-${item}-horizontal-tag` }>{ item }</p>
  ));

  return (
    <div>
      <img
        style={ { width: '150px', height: '150px' } }
        data-testid={ `${index}-horizontal-image` }
        src={ image }
        alt={ name }
      />
      <h2
        data-testid={ `${index}-horizontal-name` }
      >
        { name }
      </h2>
      <h3
        data-testid={ `${index}-horizontal-top-text` }
      >
        { `
        ${area ? `${area} - ` : ''}${category}
        ${alcoholicOrNot ? '- Alcoholic' : ''}
        ` }
      </h3>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        { date }
      </p>
      { isCopy && <p>Link copiado!</p>}
      <button
        data-testid={ `${index}-horizontal-share-btn` }
        type="button"
        src={ shareIcon }
        onClick={ (event) => {
          event.preventDefault();
          showMessage();
        } }
      >
        <img src={ shareIcon } alt="share icon" />
      </button>
      { tagsElements }
    </div>
  );
};

export default DoneCard;

DoneCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
