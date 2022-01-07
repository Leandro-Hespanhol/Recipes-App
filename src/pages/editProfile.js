/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getItemFromLocalStorage } from '../services/funcs';
import { FaUser, FaHeart } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';
import { MdVerified } from 'react-icons/md';
import '../css/profile.css';

export default function EditPerfil() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const getInitialItens = () => {
    const user = getItemFromLocalStorage('user');
    if (user) {
      setEmail(user.email);
      setName(user.name);
      setImage(user.image);
    }
  }

  const concludeEdit = () => {
    const newUser = {
      image,
      name,
      email,
    };
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  useEffect(() => {
    getInitialItens();
  }, [])

  return (
    <>
      <Header title="Profile" singleRecipe />
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-edit-icon">
            <div className="profile-icon">
              { image ? (
                <img src={ image } alt={ name } />
              ) : (
                <FaUser />
              ) }
            </div>
            <label htmlFor="image-input">
              Image url:
              <input 
                id="image-input" 
                value={ image } 
                onChange={ ({ target: { value } }) => setImage(value) } 
              />
            </label>
          </div>
          <div className="flex-column">
            <label htmlFor="name-input">
              Name:
              <input 
                id="name-input" 
                value={ name } 
                onChange={ ({ target: { value } }) => setName(value) } 
              />
            </label>
            <label htmlFor="email-input">
              Email:
              <input 
                id="email-input" 
                value={ email } 
                onChange={ ({ target: { value } }) => setEmail(value) } 
              />
            </label>
          </div>
          <div className="button-container">
            <Link to="/recipes-app/perfil">
              <button
                type="button"
                className="profile-button recipes-favorite"
                data-testid="profile-favorite-btn"
              >
                Cancel
              </button>
            </Link>
            <Link to="/recipes-app/perfil">
              <button
                type="button"
                onClick={ concludeEdit }
                className="profile-button recipes-done"
                data-testid="profile-done-btn"
              >
                Done <MdVerified />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
