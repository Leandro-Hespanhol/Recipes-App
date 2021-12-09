import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealsIcon from '../images/mealIcon.svg';
import '../App.css';

const Footer = () => (
  <footer data-testid="footer" className="footer">
    <Link to="/bebidas">
      <button
        type="button"
      >
        <img
          src={ drinkIcon }
          alt="toDrinkPage"
          data-testid="drinks-bottom-btn"
        />
      </button>
    </Link>
    <Link to="/explorar">
      <img
        src={ exploreIcon }
        alt="toExplorePage"
        data-testid="explore-bottom-btn"
      />
    </Link>
    <Link to="/comidas">
      <button
        type="button"
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

export default Footer;
