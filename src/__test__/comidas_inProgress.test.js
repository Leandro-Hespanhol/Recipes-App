import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const checkAllInputs = () => {
  for (let c = 0; c < +'12'; c += 1) {
    const checkbox = screen.getByTestId(`checkbox-${c}`);
    userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  }
};

describe('test comidas in progress', () => {
  it('setup', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    userEvent.type(email, 'p@p.com');
    userEvent.type(password, 'aaaaaaa');

    const button = screen.getByTestId('login-submit-btn');
    userEvent.click(button);

    const card = await screen.findByTestId('0-recipe-card');
    userEvent.click(card);

    const startButton = await screen.findByTestId('start-recipe-btn');
    userEvent.click(startButton);
  });

  it('testa checkboxs', async () => {
    renderWithRouter(<App />);

    const title = await screen.findByText(/Ingredientes/i);
    expect(title).toBeDefined();

    const checkbox = await screen.findByRole('checkbox', {
      name: /lentils 1 cup/i,
    });
    expect(checkbox).toBeDefined();
    expect(checkbox.checked).toBe(false);

    checkAllInputs();

    const finalizarReceita = await screen.findByTestId('finish-recipe-btn');
    expect(finalizarReceita).toBeDefined();

    userEvent.click(checkbox);
  });
});

export default checkAllInputs;
