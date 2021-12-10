/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getRandomItens } from '../services/funcs';
import CarouselCard from './CarouselCard';
import { myContext } from '../context/Provider';

const Carousel = ({ type }) => {
  const { setCurrentRecipe } = useContext(myContext);
  const [info, setInfo] = useState([]);

  const getItens = async () => {
    const opositeType = type === 'food' ? 'drinks' : 'food';
    const itens = await getRandomItens(opositeType);
    setInfo(itens);
  };

  const renderItens = () => {
    if (type === 'food') {
      const cards = info.map(({
        idDrink,
        strDrinkThumb,
        strDrink,
      }, index) => (
        <Link
          onClick={ () => setCurrentRecipe(idDrink) }
          key={ `${strDrink} ${index}` }
          to={ `/bebidas/${idDrink}` }
          data-testid={ `${index}-recomendation-card` }
        >
          <CarouselCard index={ index } image={ strDrinkThumb } title={ strDrink } />
        </Link>
      ));
      return cards;
    }
    const cards = info.map(({
      idMeal,
      strMealThumb,
      strMeal,
    }, index) => (
      <Link
        onClick={ () => setCurrentRecipe(idMeal) }
        key={ `${strMeal} ${index}` }
        to={ `/comidas/${idMeal}` }
        data-testid={ `${index}-recomendation-card` }
      >
        <CarouselCard index={ index } image={ strMealThumb } title={ strMeal } />
      </Link>
    ));
    return cards;
  };

  useEffect(() => {
    getItens();
  }, []);

  return (
    <div className="carrousel">
      { renderItens() }
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  type: PropTypes.string.isRequired,
};
