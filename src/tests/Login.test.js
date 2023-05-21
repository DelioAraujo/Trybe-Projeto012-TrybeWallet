import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('testa o componente Login', () => {
  test('componentes são carregados corretamente', () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.getByLabelText('E-mail:')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });

  test('atualiza corretamente o estado ao digitar no campo de e-mail', () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId('email-input');
    userEvent.type(emailInput, 'test@example.com');

    expect(emailInput.value).toBe('test@example.com');
  });

  test('atualiza corretamente o estado ao digitar no campo de senha', () => {
    renderWithRouterAndRedux(<App />);

    const passwordInput = screen.getByTestId('password-input');
    userEvent.type(passwordInput, 'password123');

    expect(passwordInput.value).toBe('password123');
  });

  test('Testa se o botão /entrar/ só é liberado quando os campos são preenchidos corretamente', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailInput, 'email@email');
    userEvent.type(passwordInput, '123456');
    expect(button).toHaveAttribute('disabled');
  });
});
