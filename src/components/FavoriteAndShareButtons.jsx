import React from 'react';

const FavoriteAndShareButtons = () => (
  <div>
    <button
      data-testid="share-btn"
      type="button"
    >
      Compartilhar
    </button>
    <button
      data-testid="favorite-btn"
      type="button"
    >
      Favoritar
    </button>
  </div>
);

export default FavoriteAndShareButtons;
