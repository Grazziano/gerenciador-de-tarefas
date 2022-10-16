import { render, screen } from '@testing-library/react';
import CadastrarTarefa from './CadastrarTarefa';

describe('Teste do componente de cadastro de tarefas', () => {
  it('Deve renderizar o componente sem erros', () => {
    render(<CadastrarTarefa />);
  });
});
