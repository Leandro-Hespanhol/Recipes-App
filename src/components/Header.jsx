import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import { myContext } from '../context/Provider';

function Header({ title, buttonDisable, type }) {
  const [foodName, setFoodName] = useState('');
  const [inputDisable, setInputDisable] = useState(true);
  const { searchEnable } = useContext(myContext);

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
      { searchEnable && <SearchBar type={ type } foodName={ foodName } />}
    </>
  );
}

Header.propTypes = {
  buttonDisable: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Header;
