import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('To do list', () => {
  test('se ao clicar no botão adicionar com o input preenchido, a task é adicionada à lista', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Nova tarefa')
    const button = screen.getByTestId('btnSubmit')
    const expectedString = 'Primeira task'
    userEvent.type(input, expectedString)
    userEvent.click(button)
    await screen.findByText(expectedString)
  });

  test('se ao tentar cadastrar uma nova task, o formulário barra caso o campo esteja vazio', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Nova tarefa')
    const button = screen.getByTestId('btnSubmit')
    fireEvent.click(input, '')
    userEvent.click(button)
    await screen.findByText(/O campo não pode estar vazio!/i)
  });
})

