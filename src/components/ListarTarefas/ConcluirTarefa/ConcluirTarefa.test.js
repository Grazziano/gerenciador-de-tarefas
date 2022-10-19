import { fireEvent, render, screen } from '@testing-library/react';
import ConcluirTarefa from './ConcluirTarefa';
import Tarefa from '../../../models/Tarefa.model';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('Teste do componente de conclusão de tarefas', () => {
  const nomeTarefa = 'Estudar Javascript';
  const tarefa = new Tarefa(1, nomeTarefa, false);

  it('Deve renderizar o componente sem erros', () => {
    render(<ConcluirTarefa tarefa={tarefa} recarregarTarefas={() => false} />, {
      wrapper: BrowserRouter,
    });
  });

  it('Deve exibir a modal', () => {
    render(<ConcluirTarefa tarefa={tarefa} recarregarTarefas={() => false} />, {
      wrapper: BrowserRouter,
    });

    const btnModal = screen.getByTestId('btn-abrir-modal');
    fireEvent.click(btnModal);

    const modal = screen.getByTestId('modal');

    expect(modal).toHaveTextContent(nomeTarefa);
  });

  it('Deve concluir uma tarefa', () => {
    localStorage['tarefas'] = JSON.stringify([tarefa]);

    render(<ConcluirTarefa tarefa={tarefa} recarregarTarefas={() => false} />, {
      wrapper: BrowserRouter,
    });

    const btnModal = screen.getByTestId('btn-abrir-modal');
    fireEvent.click(btnModal);
    const btnConcluir = screen.getByTestId('btn-concluir');
    fireEvent.click(btnConcluir);

    const tarefasDb = JSON.parse(localStorage['tarefas']);
    expect(tarefasDb[0].finish).toBeTruthy();
  });
});
