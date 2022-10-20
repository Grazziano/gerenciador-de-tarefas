import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

function Paginacao(props) {
  function gerarPrimeiroItem() {
    return (
      <Pagination.First
        key="pageFirst"
        onClick={() => props.mudarPagina(1)}
        disabled={props.paginaAtual === 1}
      />
    );
  }

  function obterPaginacao() {
    let items = [];

    items.push(gerarPrimeiroItem());

    return items;
  }

  return <Pagination data-testid="paginacao">{obterPaginacao()}</Pagination>;
}

Paginacao.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPorPagina: PropTypes.number.isRequired,
  paginaAtual: PropTypes.number.isRequired,
  mudarPagina: PropTypes.func.isRequired,
};

export default Paginacao;
