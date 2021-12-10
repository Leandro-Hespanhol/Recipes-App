/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getInProgressRecipes, startRecipe } from '../services/funcs';

const StartRecipeButtons = ({ type, id }) => {
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
    <div>
      { !complete && (
        <Link to={ `/${type === 'food' ? 'comidas' : 'bebidas'}/${id}/in-progress` }>
          <button
            data-testid="start-recipe-btn"
            type="button"
            className="buttons"
            onClick={ () => {
              if (!inProgress) {
                startRecipe(type, id);
              }
              setInprogress(true);
            } }
          >
            { !inProgress ? 'Iniciar Receita' : 'Continuar Receita'}
          </button>
        </Link>
      ) }
    </div>
  );
};

export default StartRecipeButtons;

StartRecipeButtons.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
