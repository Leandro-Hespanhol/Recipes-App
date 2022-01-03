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
  });

  it('testando a busca por ingrediente', async () => {
    renderWithRouter(<App />);

    const searchButton = await screen.findByTestId('search-top-btn');
    userEvent.click(searchButton);

    const input = await screen.findByTestId('search-input');
    userEvent.type(input, 'beef');

    const enterButton = screen.getByTestId('exec-search-btn');
    userEvent.click(enterButton);

    const radioName = screen.getByTestId('name-search-radio');
    userEvent.click(radioName);
    userEvent.click(enterButton);

    userEvent.type(input, 'b');

    const radioFirstLetter = screen.getByTestId('first-letter-search-radio');
    userEvent.click(radioFirstLetter);
    userEvent.click(enterButton);
  });
});
