import { fireEvent, render, screen } from '@testing-library/react';
import CadastrarTarefa from './CadastrarTarefa';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('Teste do componente de cadastro de tarefas', () => {
  it('Deve cadastrar uma nova tarefa', () => {
    render(<CadastrarTarefa />, { wrapper: BrowserRouter });

    fireEvent.change(screen.getByTestId('txt-tarefa'), {
      target: { value: 'TESTAR COMPONENTE' },
    });

    fireEvent.click(screen.getByTestId('btn-cadastrar'));

    const modal = screen.getByTestId('modal');

    expect(modal).toHaveTextContent('Sucesso');
    expect(modal).toHaveTextContent('Tarefa adicionada com sucesso!');
  });
});
