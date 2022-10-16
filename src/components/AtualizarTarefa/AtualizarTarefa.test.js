import { render, screen } from '@testing-library/react';
import AtualizarTarefa from './AtualizarTarefa';

describe('Teste do componente de atualização de tarefas', () => {
  it('Deve renderizar o componente sem erros', () => {
    render(<AtualizarTarefa id={1} />);
  });
});
