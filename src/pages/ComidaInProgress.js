import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getItemById } from '../services/funcs';
import { myContext } from '../context/Provider';

export default function ComidaInProgress({ match: { params: { id } } }) {
  const [info, setInfo] = useState([]);
  const { currentRecipe } = useContext(myContext);

  console.log(info);

  const getInfo = async () => {
    const item = await getItemById('food', id);
    setInfo(item);
  };

  useEffect(() => {
    getInfo();
  }, [currentRecipe]);

  const renderItem = () => {
    const {
      strMeal,
      strMealThumb,
    } = info[0];

    return (
      <>
        <img data-testid="recipe-photo" src={ strMealThumb } alt={ strMeal } />
        <h1 data-testid="recipe-title">{ strMeal }</h1>
      </>
    );
  };

  return (
    <div>
      { !!info.length && renderItem() }
    </div>
  );
}

ComidaInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
