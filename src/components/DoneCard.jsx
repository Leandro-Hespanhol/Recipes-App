import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { removeFavorite, getFavoriteRecipes, addFavorite } from '../services/funcs';
import shareIcon from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

const DoneCard = ({
  name,
  image,
  info,
  setInfo,
  id,
  type,
  category,
  doneDate,
  area,
  index,
  tags = '',
  alcoholicOrNot,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCopy, setIsCopy] = useState(false);

  const checkFavorite = () => {
    const favorites = getFavoriteRecipes();
    if (favorites.find((item) => item.id === id)) {
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    checkFavorite();
  }, []);

  const removeItem = () => {
    const newInfo = info.filter((item) => item.id !== id);
    removeFavorite(id);
    if (setInfo) {
      setInfo(newInfo);
    }
  };

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
  } else if (tags) {
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
        { doneDate }
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
      <button
        type="button"
        src={ isFavorite ? blackHeart : whiteHeart }
        onClick={ (event) => {
          event.preventDefault();
          if (isFavorite) {
            removeItem();
          } else {
            addFavorite(`${type}s`, id);
            setIsFavorite(true);
          }
        } }
        data-testid={ `${index}-horizontal-favorite-btn` }
      >
        <img src={ isFavorite ? blackHeart : whiteHeart } alt="heart" />
      </button>
      { !!newArray.length && tagsElements }
    </div>
  );
};

export default DoneCard;

DoneCard.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
  setInfo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  doneDate: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
