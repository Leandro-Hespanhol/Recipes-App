import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('teste da comida detalhada', () => {
  it('setup', async () => {
    renderWithRouter(<App />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    userEvent.type(email, 'p@p.com');
    userEvent.type(password, 'aaaaaaa');

    const button = screen.getByTestId('login-submit-btn');
    userEvent.click(button);

    const perfil = await screen.findByTestId('profile-top-btn');
    userEvent.click(perfil);

    const fav = await screen.findByTestId('profile-favorite-btn');
    userEvent.click(fav);
  });

  it('testando os botões', async () => {
    renderWithRouter(<App />);

    const all = await screen.findByTestId('filter-by-all-btn');
    const food = screen.getByTestId('filter-by-food-btn');
    const drink = screen.getByTestId('filter-by-drink-btn');
    expect(all).toBeDefined();
    expect(food).toBeDefined();
    expect(drink).toBeDefined();

    userEvent.click(food);
    userEvent.click(drink);
    userEvent.click(all);
  });
});
