import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../context/Provider';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const { foodName, setFoodName } = useContext(myContext);
  const [inputDisable, setInputDisable] = useState(true);

  const onSearchIconClick = () => {
    setInputDisable(!inputDisable);
  };

  const onInputTextChange = () => {
    console.log('input change');
  };

  return (
    <>
      <div>
        <Link to="/perfil">
          <img src={ profileIcon } alt="profile icon" data-testid="search-top-btn" />
        </Link>
        <h1 data-testid="page-title">Comidas</h1>
        <button type="button" onClick={ onSearchIconClick }>
          <img src={ searchIcon } alt="search icon" data-testid="search-top-btn" />
        </button>
      </div>
      {
        !inputDisable && (
          <label htmlFor="text">
            <input type="text" value="" onChange={ onInputTextChange } name="text" />
          </label>
        )
      }
    </>
  );
}

export default Header;
