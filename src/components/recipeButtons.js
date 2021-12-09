import React from 'react';

const Buttons = () => (
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
    <button
      data-testid="start-recipe-btn"
      type="button"
    >
      Começar a receita
    </button>
  </div>
);

export default Buttons;
