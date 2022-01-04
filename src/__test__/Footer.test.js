import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('1 -Verifica ícones, botões e redirects do footer', () => {
  it('1.1 -Verifica existência dos ícones', async () => {
    renderWithRouter(<App />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    userEvent.type(email, 'p@p.com');
    userEvent.type(password, 'aaaaaaa');

    const button = screen.getByTestId('login-submit-btn');
    userEvent.click(button);

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

  it('1.2 -Verifica icones na page Explorar', async () => {
    renderWithRouter(<App />);

    const explorar = await screen.findByRole('img', {
      name: /toexplorepage/i,
    });

    userEvent.click(explorar);

    const exploreIcon = await screen.findByRole('img', {
      name: /toexplorepage/i,
    });

    const mealsIcon = await screen.findByRole('img', {
      name: /tomealspage/i,
    });

    const drinksIcon = await screen.findByRole('img', {
      name: /todrinkpage/i,
    });

    expect(mealsIcon).toBeInTheDocument();
    expect(exploreIcon).toBeInTheDocument();
    expect(drinksIcon).toBeInTheDocument();

    userEvent.click(mealsIcon);
  });

  it('1.3 - Verifica icones na page Bebidas', async () => {
    renderWithRouter(<App />);
    const bebidas = await screen.findByRole('img', {
      name: /todrinkpage/i,
    });

    userEvent.click(bebidas);

    const exploreIcon = await screen.findByRole('img', {
      name: /toexplorepage/i,
    });

    const mealsIcon = await screen.findByRole('img', {
      name: /tomealspage/i,
    });

    const drinksIcon = await screen.findByRole('img', {
      name: /todrinkpage/i,
    });

    expect(mealsIcon).toBeInTheDocument();
    expect(exploreIcon).toBeInTheDocument();
    expect(drinksIcon).toBeInTheDocument();
  });
});

describe('3 - Verifica footer na página de perfil', () => {
  it('3.1 - Verifica existência dos ícones e redirect', async () => {
    renderWithRouter(<App />);
    const perfil = await screen.findByRole('img', {
      name: /profile icon/i,
    });

    userEvent.click(perfil);

    const mealsIcon = await screen.findByRole('link', {
      name: /tomealspage/i,
    });

    const exploreIcon = await screen.findByRole('link', {
      name: /toexplorepage/i,
    });

    const drinksIcon = await screen.findByRole('link', {
      name: /todrinkpage/i,
    });

    expect(mealsIcon).toBeInTheDocument();
    expect(exploreIcon).toBeInTheDocument();
    expect(drinksIcon).toBeInTheDocument();
  });
});
