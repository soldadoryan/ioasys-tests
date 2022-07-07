import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('se ao clicar no botão adicionar com o input preenchido, a task é adicionada à lista', async () => {
  const expectedString = 'Primeira task'
  render(<App />);
  const input = screen.getByPlaceholderText('Nova tarefa')
  const button = screen.getByTestId('btnSubmit')
  userEvent.type(input, expectedString)
  userEvent.click(button)
  await screen.findByText(expectedString)
});
