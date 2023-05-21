import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testa o componente Header', () => {
  test('Testa se os elementos do Header são carregados corretamente', async () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailInput, 'email@email.com');
    userEvent.type(passwordInput, '123456');
    userEvent.click(button);

    screen.getByText(/email@email\.com/i);
  });
});
