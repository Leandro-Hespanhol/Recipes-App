import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../context/Provider';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealsIcon from '../images/mealIcon.svg';

export default function Footer() {
  const { setType } = useContext(myContext);

  return (
    <footer data-testid="footer">
      <Link to="/bebidas">
        <button
          onClick={ () => setType('drinks') }
          type="button"
        >
          <img
            src={ drinkIcon }
            alt="toDrinkPage"
            data-testid="drinks-bottom-btn"
          />
        </button>
      </Link>
      <Link to="explorar">
        <img
          src={ exploreIcon }
          alt="toExplorePage"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link to="comidas">
        <button
          onClick={ () => setType('food') }
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
}
