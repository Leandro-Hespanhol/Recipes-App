import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { addFavorite, removeFavorite, getFavoriteRecipes } from '../services/funcs';
import { FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa';

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
    <>
      <div className="bot-container">
        <button
          data-testid="favorite-btn"
          type="button"
          style={ { 'color': 'red' } }
          className="round-button"
          onClick={ () => {
            setIsFavorite(!isFavorite);
            if (isFavorite) {
              removeFavorite(id);
            } else {
              addFavorite(type, id);
            }
          } }
        >
          { isFavorite ? <FaHeart /> : <FaRegHeart /> } 
        </button>
        <button
          data-testid="share-btn"
          type="button"
          className="round-button"
          style={ {'color': 'black' } }
          onClick={ () => {
            showMessage();
            copy(`https://ply3r.github.io/recipes-app/${type}/${id}`);
          } }
        >
          <FaShareAlt />
        </button>
      </div>
      { isCopy && <p style={ { 'textAlign': 'center' } }>Link copiado!</p> }
    </>
  );
};

export default FavoriteAndShareButtons;

FavoriteAndShareButtons.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
