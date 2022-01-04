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
  });

  it('entrando no card', async () => {
    renderWithRouter(<App />);

    const card = await screen.findByTestId('0-recipe-card');

    expect(card).toBeDefined();

    userEvent.click(card);

    const title = await screen.findByText('Corba');
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

    const blackHeart = await screen.findByRole('img', {
      name: /imagem de favoritar/i,
    });
    expect(blackHeart).toBeDefined();
    expect(blackHeart.src).toBe('http://localhost/comidas/blackHeartIcon.svg');
  });

  it('testa recipe cards', async () => {
    renderWithRouter(<App />);

    const title = await screen.findByText('GG');
    expect(title).toBeDefined();

    for (let c = 0; c < +'5'; c += 1) {
      const recipeCard = screen.getByTestId(`${c}-recipe-card`);
      expect(recipeCard).toBeDefined();
    }

    const firstRecipe = screen.getByTestId('0-recipe-card');
    userEvent.click(firstRecipe);

    const GG = await screen.findByText('GG');
    expect(GG).toBeDefined();

    const corba = await screen.findByText('Corba');
    expect(corba).toBeDefined();

    userEvent.click(corba);
  });
});
