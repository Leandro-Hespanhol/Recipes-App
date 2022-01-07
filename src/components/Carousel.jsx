/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getRandomItens } from '../services/funcs';
import CarouselCard from './CarouselCard';
import { myContext } from '../context/Provider';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const Carousel = ({ type }) => {
  const { setCurrentRecipe } = useContext(myContext);
  const [position, setPosition] = useState(0)
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
          to={ `/recipes-app/bebidas/${idDrink}` }
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
        to={ `/recipes-app/comidas/${idMeal}` }
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
    <div style={ { 'position': 'relative' } }>
      <button
        className="carrousel-bot prev"
        onClick={ () => { position > 90 ? setPosition(position - 90)  : setPosition(0) } }
      >
        <BiLeftArrowAlt />
      </button>
      <button
        className="carrousel-bot next"
        onClick={ () => { position < 180 ? setPosition(position + 90) : setPosition(225) } }
      >
        <BiRightArrowAlt />
      </button>
      <div
        style={ {'right': `${position}%`} }
        className="carrousel"
      >
        { renderItens() }
      </div>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  type: PropTypes.string.isRequired,
};
