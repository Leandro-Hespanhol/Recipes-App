/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getItemFromLocalStorage } from '../services/funcs';
import { FaUser, FaHeart } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';
import { MdVerified } from 'react-icons/md';
import '../css/profile.css';

export default function Perfil() {
  const user = getItemFromLocalStorage('user');
  return (
    <>
      <Header title="Profile" singleRecipe />
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-icon">
            { user.image ? (
              <img src={ user.image } alt={ user.name } />
            ) : (
              <FaUser />
            ) }
          </div>
          <Link to="/recipes-app/edit-profile">
            <button
              className="profile-button edit"
            >
              Edit Profile
            </button>
          </Link>
          <div>
            { user && (
              <>
                <h3>Name: { user.name }</h3>
                <h3>Email: { user.email }</h3>
              </>
            ) }
          </div>
          <div className="button-container">
            <Link to="/recipes-app/receitas-feitas">
              <button
                type="button"
                className="profile-button recipes-done"
                data-testid="profile-done-btn"
              >
                Receitas Feitas <MdVerified />
              </button>
            </Link>
            <Link to="/recipes-app/receitas-favoritas">
              <button
                type="button"
                className="profile-button recipes-favorite"
                data-testid="profile-favorite-btn"
              >
                Receitas Favoritas <FaHeart />
              </button>
            </Link>
            <Link to="/recipes-app/">
              <button
                type="button"
                className="profile-button exit-button"
                data-testid="profile-logout-btn"
                onClick={ () => localStorage.clear() }
              >
                <ImExit />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
