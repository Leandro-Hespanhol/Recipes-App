import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { startRecipe, getInProgressRecipes } from '../services/funcs';

const Buttons = ({ type, id }) => {
  const [inProgress, setInprogress] = useState(false);
  const [complete] = useState(false);
  const inProgressRecipes = getInProgressRecipes();

  const checkButton = () => {
    if (type === 'food') {
      const { meals } = inProgressRecipes;
      const entries = Object.keys(meals);
      if (entries.some((key) => +key === +id)) {
        setInprogress(true);
      }
    } else {
      const { cocktails } = inProgressRecipes;
      const entries = Object.keys(cocktails);
      if (entries.some((key) => +key === +id)) {
        setInprogress(true);
      }
    }
  };

  useEffect(() => {
    checkButton();
  }, []);

  return (
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
      { !complete && (
        <Link to={ `/${type === 'food' ? 'comidas' : 'bebidas'}/${id}/in-progress` }>
          <button
            data-testid="start-recipe-btn"
            type="button"
            className="buttons"
            onClick={ () => {
              setInprogress(true);
              startRecipe(type, id);
            } }
          >
            { !inProgress ? 'Iniciar Receita' : 'Continuar Receita'}
          </button>
        </Link>
      ) }
    </>
  );
};

export default Buttons;

Buttons.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
