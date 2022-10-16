import { render, screen } from '@testing-library/react';
import GerenciadorTarefas from './GerenciadorTarefas';

test('Deve renderizar o projeto sem erros', () => {
  render(<GerenciadorTarefas />);
});
