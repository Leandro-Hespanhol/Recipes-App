import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StartRecipeButtons = ({ type, id }) => (
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
    <Link to={ `../${type}/${id}/in-progress` }>
      <button
        data-testid="start-recipe-btn"
        type="button"
        className="buttons"
      >
        Começar a receita
      </button>
    </Link>
  </>
);

StartRecipeButtons.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default StartRecipeButtons;
