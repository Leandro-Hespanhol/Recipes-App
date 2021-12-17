import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('1 - Implemente os elementos da tela principal de receitas', () => {
  it('A tela tem os data-testids de todos os 12', async () => {
    renderWithRouter(<App />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    userEvent.type(email, 'p@p.com');
    userEvent.type(password, 'aaaaaaa');

    const button = screen.getByTestId('login-submit-btn');
    userEvent.click(button);

    const card = await screen.findByTestId('1-recipe-card');
    const image = await screen.findByTestId('1-card-img');
    const name = await screen.findByTestId('1-card-name');

    expect(card).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('A tela tem os data-testids de todos os 12 cards da tela de bebidas', async () => {
    renderWithRouter(<App />);
    const bebidas = await screen.findByRole('img', {
      name: /todrinkpage/i,
    });

    userEvent.click(bebidas);

    const card = await screen.findByTestId('1-recipe-card');
    const image = await screen.findByTestId('1-card-img');
    const name = await screen.findByTestId('1-card-name');

    expect(card).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});

describe('2 - Carregue as 12 primeiras', () => {
  it('Caso as receitas sejam de comida', async () => {
    renderWithRouter(<App />);
    const comidas = await screen.findByRole('img', {
      name: /tomealspage/i,
    });

    userEvent.click(comidas);

    const card = await screen.findByTestId('3-recipe-card');
    const image = await screen.findByTestId('3-card-img');
    const name = await screen.findByTestId('3-card-name');

    expect(card).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});

describe('3 - Implemente os botões de categoria', () => {
  it('Caso as receitas sejam de comida', async () => {
    renderWithRouter(<App />);

    const categoria1 = await screen.findByTestId('Beef-category-filter');
    const categoria2 = await screen.findByTestId('Breakfast-category-filter');
    const categoria3 = await screen.findByTestId('Chicken-category-filter');
    const categoria4 = await screen.findByTestId('Dessert-category-filter');
    const categoria5 = await screen.findByTestId('Goat-category-filter');

    expect(categoria1).toBeInTheDocument();
    expect(categoria2).toBeInTheDocument();
    expect(categoria3).toBeInTheDocument();
    expect(categoria4).toBeInTheDocument();
    expect(categoria5).toBeInTheDocument();
  });

  it('Caso as receitas sejam de bebida', async () => {
    renderWithRouter(<App />);
    const bebidas = await screen.findByRole('img', {
      name: /todrinkpage/i,
    });

    userEvent.click(bebidas);

    const categoria1 = await screen.findByTestId('Ordinary Drink-category-filter');
    const categoria2 = await screen.findByTestId('Cocktail-category-filter');
    const categoria3 = await screen.findByTestId('Milk / Float / Shake-category-filter');
    const categoria4 = await screen.findByTestId('Other/Unknown-category-filter');
    const categoria5 = await screen.findByTestId('Cocoa-category-filter');

    expect(categoria1).toBeInTheDocument();
    expect(categoria2).toBeInTheDocument();
    expect(categoria3).toBeInTheDocument();
    expect(categoria4).toBeInTheDocument();
    expect(categoria5).toBeInTheDocument();
  });
});

describe('4 - Implemente o filtro das receitas ao clicar no filtro de categoria', () => {
  it('Caso as receitas sejam de comida e a categoria seja "Beef"', async () => {
    renderWithRouter(<App />);
    const comidas = await screen.findByRole('img', {
      name: /tomealspage/i,
    });

    userEvent.click(comidas);

    const beef = await screen.findByTestId('Beef-category-filter');

    userEvent.click(beef);

    const card = await screen.findByTestId('2-recipe-card');
    const image = await screen.findByTestId('2-card-img');
    const name = await screen.findByTestId('2-card-name');

    expect(card).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('Caso as receitas sejam de bebida e a categoria seja "Ordinary Drink"', async () => {
    renderWithRouter(<App />);
    const bebidas = await screen.findByRole('img', {
      name: /todrinkpage/i,
    });

    userEvent.click(bebidas);

    const drink = await screen.findByTestId('Ordinary Drink-category-filter');

    userEvent.click(drink);

    const card = await screen.findByTestId('2-recipe-card');
    const image = await screen.findByTestId('2-card-img');
    const name = await screen.findByTestId('2-card-name');

    expect(card).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
