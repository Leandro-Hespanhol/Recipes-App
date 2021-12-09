import React from 'react';

const Buttons = () => (
  <>
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
    <button
      data-testid="start-recipe-btn"
      type="button"
      className="buttons"
    >
      Começar a receita
    </button>
  </>
);

export default Buttons;
