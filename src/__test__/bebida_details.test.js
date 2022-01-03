import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('teste da bebidas detalhada', () => {
  it('setup', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');
    const email = await screen.findByTestId('email-input');
    const password = await screen.findByTestId('password-input');
    userEvent.type(email, 'p@p.com');
    userEvent.type(password, 'aaaaaaa');

    const button = screen.getByTestId('login-submit-btn');
    userEvent.click(button);

    const bebidas = await screen.findByRole('button', {
      name: /todrinkpage/i,
    });

    userEvent.click(bebidas);
  });

  it('entrando no card', async () => {
    renderWithRouter(<App />);

    const card = await screen.findByTestId('0-recipe-card');

    expect(card).toBeDefined();

    userEvent.click(card);

    const title = await screen.findByText('GG');
    const categoria = await screen.findByText('Categoria');
    expect(title).toBeDefined();
    expect(categoria).toBeDefined();
  });

  it('clicando no botão de fav', async () => {
    renderWithRouter(<App />);

    const fav = await screen.findByTestId('favorite-btn');
    const compartilhar = await screen.findByTestId('share-btn');

    expect(fav).toBeDefined();
    expect(compartilhar).toBeDefined();

    userEvent.click(fav);
  });
});
