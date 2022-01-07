import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import exploreIcon from '../images/exploreIcon.svg';
import mealsIcon from '../images/mealIcon.svg';
import '../App.css';
import { myContext } from '../context/Provider';
import { BiDrink } from 'react-icons/bi'
import { FaCompass } from 'react-icons/fa'
import { GiKnifeFork } from 'react-icons/gi'

const Footer = () => {
  const { setFilter } = useContext(myContext);

  return (
    <footer data-testid="footer" className="footer">
      <Link to="/recipes-app/bebidas">
        <button
          type="button"
          className='round-button'
          onClick={ () => setFilter('') }
        >
          <BiDrink />
        </button>
      </Link>
      <Link to="/recipes-app/explorar">
        <button
          type="button"
          className='round-button'
          onClick={ () => setFilter('') }
        >
          <FaCompass />
        </button>
      </Link>
      <Link to="/recipes-app/comidas">
        <button
          type="button"
          className='round-button'
          onClick={ () => setFilter('') }
        >
          <GiKnifeFork />
        </button>
      </Link>
    </footer>
  );
};

export default Footer;
