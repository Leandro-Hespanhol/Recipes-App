import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('teste da search bar', () => {
  it('setup', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    userEvent.type(email, 'p@p.com');
    userEvent.type(password, 'aaaaaaa');

    const button = screen.getByTestId('login-submit-btn');
    userEvent.click(button);

    const perfil = await screen.findByTestId('profile-top-btn');
    userEvent.click(perfil);
  });

  it('testa os botões', async () => {
    renderWithRouter(<App />);

    const fav = await screen.findByTestId('profile-favorite-btn');
    const done = await screen.findByTestId('profile-done-btn');
    const exit = await screen.findByTestId('profile-logout-btn');
    expect(fav).toBeDefined();
    expect(done).toBeDefined();
    expect(exit).toBeDefined();
  });

  it('vaza!', async () => {
    renderWithRouter(<App />);

    const exit = await screen.findByTestId('profile-logout-btn');
    userEvent.click(exit);
  });
});
