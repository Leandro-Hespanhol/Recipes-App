import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealsIcon from '../images/mealIcon.svg';
import '../App.css';
import { myContext } from '../context/Provider';

const Footer = () => {
  const { setFilter } = useContext(myContext);

  return (
    <footer data-testid="footer" className="footer">
      <Link to="/bebidas">
        <button
          type="button"
          onClick={ () => setFilter('') }
        >
          <img
            src={ drinkIcon }
            alt="toDrinkPage"
            data-testid="drinks-bottom-btn"
          />
        </button>
      </Link>
      <Link to="/explorar">
        <button
          type="button"
          onClick={ () => setFilter('') }
        >
          <img
            src={ exploreIcon }
            alt="toExplorePage"
            data-testid="explore-bottom-btn"
          />
        </button>
      </Link>
      <Link to="/comidas">
        <button
          type="button"
          onClick={ () => setFilter('') }
        >
          <img
            src={ mealsIcon }
            alt="toMealsPage"
            data-testid="food-bottom-btn"
          />
        </button>
      </Link>
    </footer>
  );
};

export default Footer;
