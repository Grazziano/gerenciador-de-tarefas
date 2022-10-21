import ListarTarefas from './ListarTarefa';
import Tarefa from '../../models/Tarefa.model';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Teste do componente de listagem de tarefas', () => {
  const nomePrimeiraTarefa = 'Estudar Javascript';
  const nomeSegundaTarefa = 'Estudar ReactJS';
  const nomeTerceiraTarefa = 'Estudar NodeJS';

  beforeEach(() => {
    localStorage['tarefas'] = JSON.stringify([
      new Tarefa(1, nomePrimeiraTarefa, false),
      new Tarefa(2, nomeSegundaTarefa, false),
      new Tarefa(3, nomeTerceiraTarefa, false),
    ]);
  });

  afterEach(() => {
    delete localStorage['tarefas'];
  });

  it('Deve renderizar o componente sem erros', () => {
    render(<ListarTarefas />, { wrapper: BrowserRouter });
  });

  it('Deve exibir uma tabela contendo 3 tarefas', () => {
    render(<ListarTarefas />, { wrapper: BrowserRouter });
    const tabela = screen.getByTestId('tabela');
    expect(tabela).toHaveTextContent(nomePrimeiraTarefa);
    expect(tabela).toHaveTextContent(nomeSegundaTarefa);
    expect(tabela).toHaveTextContent(nomeTerceiraTarefa);
  });

  it('Deve filtrar os dados da tabela de tarefas', () => {
    render(<ListarTarefas />, { wrapper: BrowserRouter });

    const txtTarefa = screen.getByTestId('txt-tarefa');
    fireEvent.change(txtTarefa, { target: { value: nomePrimeiraTarefa } });

    const tabela = screen.getByTestId('tabela');

    expect(tabela).toHaveTextContent(nomePrimeiraTarefa);
    expect(tabela).not.toHaveTextContent(nomeSegundaTarefa);
    expect(tabela).not.toHaveTextContent(nomeTerceiraTarefa);
  });
});
