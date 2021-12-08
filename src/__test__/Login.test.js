import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa a pagina de Login', () => {
  it('testa se ao digitar somente o email da incorreto', () => {
    render(<App />);
    const email = screen.getByTestId('email-input');
    userEvent.type(email, 'p@p.com');

    const button = screen.getByRole('button', { name: 'Entrar' });
    expect(button.disabled).toBe(true);
  });

  it('testa se ao digitar somente a senha da incorreto', () => {
    render(<App />);
    const password = screen.getByTestId('password-input');
    userEvent.type(password, 'aaaaaaa');

    const button = screen.getByTestId('login-submit-btn');
    expect(button.disabled).toBe(true);
  });

  it('testa se ao digitar um login correto funciona', () => {
    render(<App />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    userEvent.type(email, 'p@p.com');
    userEvent.type(password, 'aaaaaaa');

    const button = screen.getByTestId('login-submit-btn');
    expect(button.disabled).toBe(false);
  });
});
