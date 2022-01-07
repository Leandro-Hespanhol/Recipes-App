import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getListIngredients } from '../../services/funcs2';
import IngredientCards from '../../components/IngredientCards';

export default function ExplorarIngredientes({ location: { pathname } }) {
  const [info, setInfo] = useState([]);
  const [type, setType] = useState('');

  const getInfo = async () => {
    const isFood = /comidas/.test(pathname);
    const ingredients = await getListIngredients(isFood ? 'food' : 'drinks');
    setType(isFood ? 'food' : 'drinks');
    setInfo(ingredients);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <Header title="Explore Ingredients" singleRecipe />
      <div className="cards-container">
        { !!info.length && <IngredientCards info={ info } type={ type } /> }
      </div>
      <Footer />
    </>
  );
}

ExplorarIngredientes.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};
