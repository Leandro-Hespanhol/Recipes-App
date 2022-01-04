import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('teste da comida detalhada', () => {
  it('setup', async () => {
    renderWithRouter(<App />);

    const favoriteRecipes = [
      {
        id: '52771',
        type: 'comida',
        area: 'Italian',
        category: 'Vegetarian',
        alcoholicOrNot: '',
        name: 'Spicy Arrabiata Penne',
        image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      },
      {
        id: '178319',
        type: 'bebida',
        area: '',
        category: 'Cocktail',
        alcoholicOrNot: 'Alcoholic',
        name: 'Aquamarine',
        image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      },
    ];

    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));

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

    const firstFavorite = await screen.findByText('Spicy Arrabiata Penne');
    expect(firstFavorite).toBeDefined();

    const remover = screen.getByTestId('0-horizontal-favorite-btn');
    userEvent.click(remover);

    expect(firstFavorite).not.toBeInTheDocument();

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
