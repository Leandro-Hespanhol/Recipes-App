import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealsIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/bebidas">
        <img
          src={ drinkIcon }
          alt="toDrinkPage"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="explorar">
        <img
          src={ exploreIcon }
          alt="toExplorePage"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link to="comidas">
        <img
          src={ mealsIcon }
          alt="toMealsPage"
          data-testid="food-bottom-btn"
        />
      </Link>
    </footer>
  );
}
