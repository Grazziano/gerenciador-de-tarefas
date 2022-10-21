import { render, screen } from '@testing-library/react';
import Ordenacao from './Ordenacao';
import '@testing-library/jest-dom/extend-expect';

describe('Teste do componente de ordenação', () => {
  it('Deve renderizar o componente sem erros', () => {
    render(<Ordenacao ordenarAsc={false} ordenarDesc={false} />);
  });

  it('Deve exibir a ordenação padrão', () => {
    render(<Ordenacao ordenarAsc={false} ordenarDesc={false} />);

    const faSort = screen.getByTestId('faSort');
    const faSortUp = screen.getByTestId('faSortUp');
    const faSortDown = screen.getByTestId('faSortDown');

    expect(faSort).not.toHaveClass('d-none');
    expect(faSortUp).toHaveClass('d-none');
    expect(faSortDown).toHaveClass('d-none');
  });

  it('Deve exibir a ordenação ascendente', () => {
    render(<Ordenacao ordenarAsc={true} ordenarDesc={false} />);

    const faSort = screen.getByTestId('faSort');
    const faSortUp = screen.getByTestId('faSortUp');
    const faSortDown = screen.getByTestId('faSortDown');

    expect(faSort).toHaveClass('d-none');
    expect(faSortUp).not.toHaveClass('d-none');
    expect(faSortDown).toHaveClass('d-none');
  });

  it('Deve exibir a ordenação descendente', () => {
    render(<Ordenacao ordenarAsc={false} ordenarDesc={true} />);

    const faSort = screen.getByTestId('faSort');
    const faSortUp = screen.getByTestId('faSortUp');
    const faSortDown = screen.getByTestId('faSortDown');

    expect(faSort).toHaveClass('d-none');
    expect(faSortUp).toHaveClass('d-none');
    expect(faSortDown).not.toHaveClass('d-none');
  });
});
