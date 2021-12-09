import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

const FavoriteAndShareButtons = ({ type, id }) => {
  const [isCopy, setIsCopy] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const showMessage = () => {
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, +'5000');
  };

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
        data-testid="favorite-btn"
        type="button"
      >
        <img src={ whiteHeart } alt="imagem de favoritar" />
      </button>
    </div>
  );
};

export default FavoriteAndShareButtons;

FavoriteAndShareButtons.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
