import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('Testa o componente WalletForm', () => {
  test('Testa se os elementos de formulário do WalletForm são carregados corretamente', async () => {
    renderWithRouterAndRedux(<Wallet />);
    screen.getByTestId('value-input');
    screen.getByRole('spinbutton', { name: /Valor da Despesa:/i });
  });
});
