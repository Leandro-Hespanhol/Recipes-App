import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const checkAllInputs = () => {
  for (let c = 0; c < +'3'; c += 1) {
    const checkbox = screen.getByTestId(`checkbox-${c}`);
    userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  }
};

describe('comidas done teste', () => {
  it('Setup', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');
    const email = await screen.findByTestId('email-input');
    const password = screen.getByTestId('password-input');
    userEvent.type(email, 'p@p.com');
    userEvent.type(password, 'aaaaaaa');

    const button = screen.getByTestId('login-submit-btn');
    userEvent.click(button);

    const bebidas = await screen.findByRole('button', {
      name: /todrinkpage/i,
    });

    userEvent.click(bebidas);

    const card = await screen.findByTestId('0-recipe-card');
    userEvent.click(card);

    const startButton = await screen.findByTestId('start-recipe-btn');
    userEvent.click(startButton);

    const checkbox = await screen.findByRole('checkbox', {
      name: /Ice/i,
    });
    expect(checkbox).toBeDefined();
    expect(checkbox.checked).toBe(false);

    checkAllInputs();

    const finalizarReceita = await screen.findByTestId('finish-recipe-btn');
    expect(finalizarReceita).toBeDefined();

    userEvent.click(finalizarReceita);
  });

  it('Receitas Feitas', async () => {
    renderWithRouter(<App />);

    const title = await screen.findByText('Receitas Feitas');
    expect(title).toBeDefined();

    const GG = await screen.findByText('GG');
    expect(GG).toBeDefined();

    const whiteHeart = screen.getByRole('img', {
      name: /heart/i,
    });
    expect(whiteHeart).toBeDefined();
    expect(whiteHeart.src).toBe('http://localhost/whiteHeartIcon.svg');

    userEvent.click(whiteHeart);
    expect(whiteHeart.src).toBe('http://localhost/blackHeartIcon.svg');

    userEvent.click(whiteHeart);

    const all = screen.getByTestId('filter-by-all-btn');
    const food = screen.getByTestId('filter-by-food-btn');
    const drink = screen.getByTestId('filter-by-drink-btn');
    expect(all).toBeDefined();
    expect(food).toBeDefined();
    expect(drink).toBeDefined();

    userEvent.click(food);
    userEvent.click(drink);
    userEvent.click(all);
  });

  it('clica em corba', async () => {
    renderWithRouter(<App />);

    const GG = await screen.findByText('GG');
    expect(GG).toBeDefined();

    const whiteHeart = screen.getByRole('img', {
      name: /heart/i,
    });
    expect(whiteHeart).toBeDefined();
    expect(whiteHeart.src).toBe('http://localhost/whiteHeartIcon.svg');

    userEvent.click(whiteHeart);
    expect(whiteHeart.src).toBe('http://localhost/blackHeartIcon.svg');

    userEvent.click(GG);

    const continuarReceita = await screen.findByRole('button', {
      name: /continuar receita/i,
    });
    expect(continuarReceita).toBeDefined();
  });
});
