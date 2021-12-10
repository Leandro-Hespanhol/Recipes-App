import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoriteAndShareButtons from '../components/FavoriteAndShareButtons';
import IngredientsWithCheckbox from '../components/IngredientsWithCheckbox';
import { getItemById } from '../services/funcs';
import { myContext } from '../context/Provider';

export default function BebidaInProgress({ match: { params: { id } } }) {
  const [numberChecked, setNumberChecked] = useState(0);
  const [disabledButton, setDisabledButton] = useState(true);
  const [info, setInfo] = useState([{}]);
  const { currentRecipe } = useContext(myContext);

  const getInfo = async () => {
    const item = await getItemById('drinks', id);
    setInfo(item);
  };

  useEffect(() => {
    getInfo();
  }, [currentRecipe]);

  // Lógica para habilitar o botão
  const entries = Object.entries(info[0]);
  const ingredients = entries
    .filter((arr) => /strIngredient/.test(arr[0]) && arr[1]);
  const checkboxesLength = ingredients.length;

  useEffect(() => {
    if (checkboxesLength === numberChecked && checkboxesLength !== 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [numberChecked]);

  const renderItem = () => {
    const {
      strDrink,
      strDrinkThumb,
      strCategory,
      strInstructions,
    } = info[0];

    return (
      <>
        <img
          data-testid="recipe-photo"
          src={ strDrinkThumb }
          alt={ strDrink }
        />

        <h1
          data-testid="recipe-title"
        >
          { strDrink }
        </h1>

        <FavoriteAndShareButtons />

        <p
          data-testid="recipe-category"
        >
          { strCategory }
        </p>

        <h2>Ingredientes</h2>

        <IngredientsWithCheckbox
          item={ info[0] }
          numberChecked={ numberChecked }
          setNumberChecked={ setNumberChecked }
        />

        <h2>Instruções</h2>

        <p
          data-testid="instructions"
        >
          { strInstructions }
        </p>

        <Link to="/receitas-feitas">
          <button
            data-testid="finish-recipe-btn"
            type="button"
            disabled={ disabledButton }
          >
            Finalizar receita
          </button>
        </Link>
      </>
    );
  };

  return (
    <div>
      { !!info.length && renderItem() }
    </div>
  );
}

BebidaInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
