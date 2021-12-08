import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <div>
      <Link to="/perfil">
        <img src={ profileIcon } alt="profile icon" data-testid="search-top-btn" />
      </Link>
      <h1 data-testid="page-title">Comidas</h1>
      <button type="button">
        <img src={ searchIcon } alt="search icon" data-testid="search-top-btn" />
      </button>
    </div>
  );
}

export default Header;
