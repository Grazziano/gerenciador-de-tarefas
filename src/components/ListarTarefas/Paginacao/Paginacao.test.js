import { render, screen } from '@testing-library/react';
import Paginacao from './Paginacao';
import '@testing-library/jest-dom/extend-expect';

describe('Teste do componente de paginacao', () => {
  it('Deve renderizar o componente sem erros', () => {
    render(
      <Paginacao
        totalItems={10}
        itemsPorPagina={10}
        paginaAtual={1}
        mudarPagina={() => false}
      />
    );
  });

  it('Deve exibir a paginação contendo 3 páginas', () => {
    render(
      <Paginacao
        totalItems={15}
        itemsPorPagina={5}
        paginaAtual={1}
        mudarPagina={() => false}
      />
    );

    const paginacao = screen.getByTestId('paginacao');
    expect(paginacao).toHaveTextContent('1');
    expect(paginacao).toHaveTextContent('2');
    expect(paginacao).toHaveTextContent('3');
  });
});
