import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Tarefa from '../../../models/Tarefa.model';
import RemoverTarefa from './RemoverTarefa';

describe('Teste do componente de remoção de tarefas', () => {
  const nomeTarefa = 'Estudar Typescript';
  const tarefa = new Tarefa(1, nomeTarefa, false);

  it('Deve renderizar o componente sem erros', () => {
    render(<RemoverTarefa tarefa={tarefa} recarregarTarefas={() => false} />, {
      wrapper: BrowserRouter,
    });
  });

  it('Deve exibir a modal', () => {
    render(<RemoverTarefa tarefa={tarefa} recarregarTarefas={() => false} />, {
      wrapper: BrowserRouter,
    });

    const btnAbrirModal = screen.getByTestId('btn-abrir-modal');
    fireEvent.click(btnAbrirModal);

    const modal = screen.getByTestId('modal');

    expect(modal).toHaveTextContent(nomeTarefa);
  });

  it('Deve remover uma tarefa', () => {
    localStorage['tarefas'] = JSON.stringify([tarefa]);

    render(<RemoverTarefa tarefa={tarefa} recarregarTarefas={() => false} />, {
      wrapper: BrowserRouter,
    });

    const btnAbrirModal = screen.getByTestId('btn-abrir-modal');
    fireEvent.click(btnAbrirModal);
    const btnRemoverTarefa = screen.getByTestId('btn-remover');
    fireEvent.click(btnRemoverTarefa);

    const tarefasDb = JSON.parse(localStorage['tarefas']);

    expect(tarefasDb.length).toBe(0);
  });
});
