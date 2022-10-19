import { render, screen } from '@testing-library/react';
import ItensListaTarefas from './ItensListaTarefas';
import Tarefa from '../../../models/Tarefa.model';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('Teste do componente que exibe um item da lista de tarefas', () => {
  const nomeTarefa = 'Tarefa';
  const tarefa = new Tarefa(1, nomeTarefa, false);
  const tarefaConcluida = new Tarefa(2, nomeTarefa, true);

  it('Deve renderizar o componente sem erros', () => {
    render(
      <table>
        <tbody>
          <ItensListaTarefas
            tarefas={[tarefa]}
            recarregarTarefas={() => false}
          />
        </tbody>
      </table>,
      {
        wrapper: BrowserRouter,
      }
    );
  });

  it('Deve exibir a tarefa', () => {
    render(
      <table>
        <tbody>
          <ItensListaTarefas
            tarefas={[tarefa]}
            recarregarTarefas={() => false}
          />
        </tbody>
      </table>,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByTestId('tarefa')).toHaveTextContent(nomeTarefa);
  });

  it('Deve exibir uma tarefa concluida', () => {
    render(
      <table>
        <tbody>
          <ItensListaTarefas
            tarefas={[tarefaConcluida]}
            recarregarTarefas={() => false}
          />
        </tbody>
      </table>,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByTestId('tarefa')).toHaveTextContent(nomeTarefa);
    expect(screen.getByTestId('nome-tarefa')).toHaveStyle(
      'text-decoration: line-through'
    );
  });
});
