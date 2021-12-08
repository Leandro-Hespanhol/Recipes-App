import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import Perfil from '../pages/Perfil';
import Explorar from '../pages/Explorar';
import Bebidas from '../pages/Bebidas';
// import Footer from '../components/Footer';

// describe('1 - Verifica se o footer não está presente no login', () => {
//   it('Verifica se o footer com ícons NÃO está presente no login', () => {
//     const footer = <Footer />;

//     expect(footer).not.toBeInTheDocument();
//   });
// });

describe('2 -Verifica ícones, botões e redirects do footer', () => {
  renderWithRouter(<App />);
  // const { history } = renderWithRouter(<App />);
  // history.push('/comidas');
  // beforeEach(() => {
  const email = screen.getByTestId('email-input');
  const password = screen.getByTestId('password-input');
  userEvent.type(email, '123deoliveira4@gmail.com');
  userEvent.type(password, '4321arievilo');

  const button = screen.getByTestId('login-submit-btn');
  userEvent.click(button);
  // });
  it('2.1 -Verifica existência dos ícones', () => {
    const mealsIcon = screen.getByRole('link', {
      name: /tomealspage/i,
    });
    const exploreIcon = screen.getByRole('link', {
      name: /toexplorepage/i,
    });
    const drinksIcon = screen.getByRole('link', {
      name: /todrinkpage/i,
    });
    expect(mealsIcon).toBeInTheDocument();
    expect(exploreIcon).toBeInTheDocument();
    expect(drinksIcon).toBeInTheDocument();
  });

  it('2.2 -Verifica icones na page Explorar', () => {
    renderWithRouter(<Explorar />);
    const exploreIcon = screen.getByRole('img', {
      name: /toexplorepage/i,
    });
    const mealsIcon = screen.getByRole('img', {
      name: /tomealspage/i,
    });
    const drinksIcon = screen.getByRole('img', {
      name: /todrinkpage/i,
    });

    expect(mealsIcon).toBeInTheDocument();
    expect(exploreIcon).toBeInTheDocument();
    expect(drinksIcon).toBeInTheDocument();
  });
  it('2.3 - Verifica icones na page Bebidas', () => {
    renderWithRouter(<Bebidas />);
    const exploreIcon = screen.getByRole('img', {
      name: /toexplorepage/i,
    });
    const mealsIcon = screen.getByRole('img', {
      name: /tomealspage/i,
    });
    const drinksIcon = screen.getByRole('img', {
      name: /todrinkpage/i,
    });
    expect(mealsIcon).toBeInTheDocument();
    expect(exploreIcon).toBeInTheDocument();
    expect(drinksIcon).toBeInTheDocument();
  });
});

describe('3 - Verifica footer na página de perfil', () => {
  it('3.1 - Verifica existência dos ícones e redirect', () => {
    renderWithRouter(<Perfil />);
    const mealsIcon = screen.getByRole('link', {
      name: /tomealspage/i,
    });
    const exploreIcon = screen.getByRole('link', {
      name: /toexplorepage/i,
    });
    const drinksIcon = screen.getByRole('link', {
      name: /todrinkpage/i,
    });
    expect(mealsIcon).toBeInTheDocument();
    expect(exploreIcon).toBeInTheDocument();
    expect(drinksIcon).toBeInTheDocument();
  });
});
