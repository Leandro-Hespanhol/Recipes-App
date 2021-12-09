import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getItemFromLocalStorage } from '../services/funcs';

export default function Perfil() {
  const user = getItemFromLocalStorage('user');
  const headerContent = user === null ? '' : user.email;
  return (
    <div>
      <Header title="Perfil" buttonDisable />
      <h3 data-testid="profile-email">{ headerContent }</h3>

      <Link to="../receitas-feitas">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
      </Link>

      <Link to="../receitas-favoritas">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>

      <Link to="../">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => localStorage.clear() }
        >
          Sair
        </button>
      </Link>

      <Footer />
    </div>
  );
}
