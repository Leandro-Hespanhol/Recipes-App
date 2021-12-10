/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import { addFavorite, removeFavorite, getFavoriteRecipes } from '../services/funcs';

const FavoriteAndShareButtons = ({ type, id }) => {
  const [isCopy, setIsCopy] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const checkFavorite = () => {
    const favorites = getFavoriteRecipes();
    if (favorites.some((item) => item.id === id)) {
      setIsFavorite(true);
    }
  };

  const showMessage = () => {
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, +'5000');
  };

  useEffect(() => {
    checkFavorite();
  }, []);

  return (
    <div>
      { isCopy && <p>Link copiado!</p> }
      <button
        data-testid="share-btn"
        type="button"
        onClick={ () => {
          showMessage();
          copy(`http://localhost:3000/${type}/${id}`);
        } }
      >
        <img src={ shareIcon } alt="imagem de compartilhar" />
      </button>
      <button
        src={ isFavorite ? blackHeart : whiteHeart }
        data-testid="favorite-btn"
        type="button"
        onClick={ () => {
          setIsFavorite(!isFavorite);
          if (isFavorite) {
            removeFavorite(id);
          } else {
            addFavorite(type, id);
          }
        } }
      >
        <img src={ isFavorite ? blackHeart : whiteHeart } alt="imagem de favoritar" />
      </button>
    </div>
  );
};

export default FavoriteAndShareButtons;

FavoriteAndShareButtons.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
