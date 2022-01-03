import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const checkAllItens = () => {
  for (let c = 0; c < +'11'; c += 1) {
    const item = screen.getByTestId(`${0}-ingredient-card`);
    expect(item).toBeDefined();
  }
};

describe('testa pagina de explorar', () => {
  const exploreByFood = 'explore-food';

  it('setup', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    userEvent.type(email, 'p@p.com');
    userEvent.type(password, 'aaaaaaa');

    const button = screen.getByTestId('login-submit-btn');
    userEvent.click(button);

    const explorar = await screen.findByRole('button', {
      name: /toexplorepage/i,
    });
    userEvent.click(explorar);
  });

  it('testa se os botões existem', async () => {
    renderWithRouter(<App />);

    const explorarComidas = await screen.findByTestId(exploreByFood);
    const explorarBebidas = await screen.findByTestId('explore-drinks');
    expect(explorarComidas).toBeDefined();
    expect(explorarBebidas).toBeDefined();
  });

  it('explorar comidas', async () => {
    renderWithRouter(<App />);

    const explorarComidas = await screen.findByTestId(exploreByFood);
    userEvent.click(explorarComidas);

    const byIngredient = await screen.findByTestId('explore-by-ingredient');
    const byArea = await screen.findByTestId('explore-by-area');
    const imLucky = await screen.findByTestId('explore-surprise');
    expect(byIngredient).toBeDefined();
    expect(byArea).toBeDefined();
    expect(imLucky).toBeDefined();
  });

  it('explorar Ingredient', async () => {
    renderWithRouter(<App />);
    const byIngredient = await screen.findByTestId('explore-by-ingredient');
    userEvent.click(byIngredient);

    const chicken = await screen.findByTestId('0-ingredient-card');
    expect(chicken).toBeDefined();

    checkAllItens();

    userEvent.click(chicken);
  });

  it('explorar por area', async () => {
    renderWithRouter(<App />);
    const explorar = await screen.findByRole('button', {
      name: /toexplorepage/i,
    });
    userEvent.click(explorar);

    const explorarComidas = await screen.findByTestId(exploreByFood);
    userEvent.click(explorarComidas);

    const byArea = await screen.findByTestId('explore-by-area');
    userEvent.click(byArea);

    const select = await screen.findByTestId('explore-by-area-dropdown');
    userEvent.selectOptions(select, ['American']);
  });

  it('explorar Bebidas', async () => {
    renderWithRouter(<App />);

    const explorar = await screen.findByRole('button', {
      name: /toexplorepage/i,
    });
    userEvent.click(explorar);

    const explorarBebidas = await screen.findByTestId('explore-drinks');
    userEvent.click(explorarBebidas);

    const imLucky = await screen.findByTestId('explore-surprise');
    expect(imLucky).toBeDefined();

    userEvent.click(imLucky);
  });
});
