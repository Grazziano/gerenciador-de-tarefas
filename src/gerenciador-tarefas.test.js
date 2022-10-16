import { render, screen } from '@testing-library/react';
import GerenciadorTarefas from './gerenciador-tarefas';

test('Deve renderizar o projeto sem erros', () => {
  render(<GerenciadorTarefas />);
});
