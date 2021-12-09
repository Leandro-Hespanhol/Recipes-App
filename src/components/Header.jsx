import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { myContext } from '../context/Provider';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title, buttonDisable }) {
  const { foodName, setFoodName } = useContext(myContext);
  const [inputDisable, setInputDisable] = useState(true);

  const onSearchIconClick = () => {
    setInputDisable(!inputDisable);
  };

  const onInputTextChange = ({ target }) => {
    const { value } = target;
    setFoodName(value);
  };

  return (
    <>
      <Link to="/perfil" data-testid="profile-top-btn" src={ profileIcon }>
        <img src={ profileIcon } alt="profile icon" />
      </Link>

      <h1 data-testid="page-title">{ title }</h1>

      {
        !buttonDisable && (
          <button
            type="button"
            data-testid="search-top-btn"
            onClick={ onSearchIconClick }
            src={ searchIcon }
          >
            <img src={ searchIcon } alt="search icon" />
          </button>
        )
      }

      {
        !inputDisable && (
          <label htmlFor="text">
            <input
              type="text"
              value={ foodName }
              onChange={ onInputTextChange }
              name="text"
              data-testid="search-input"
            />
          </label>
        )
      }
      <SearchBar />
    </>
  );
}

Header.propTypes = {
  buttonDisable: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
