import {
  faSort,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

function Ordenacao(props) {
  function handleAscDesc() {
    return props.ordenarAsc || props.ordenarDesc ? 'd-none' : '';
  }

  function handleAsc() {
    return props.ordenarAsc ? '' : 'd-none';
  }

  function handleDesc() {
    return props.ordenarDesc ? '' : 'd-none';
  }

  return (
    <span>
      <FontAwesomeIcon
        icon={faSort}
        className={handleAscDesc()}
        data-testid="faSort"
      />
      <FontAwesomeIcon
        icon={faSortUp}
        className={handleAsc()}
        data-testid="faSortUp"
      />
      <FontAwesomeIcon
        icon={faSortDown}
        className={handleDesc()}
        data-testid="faSortDown"
      />
    </span>
  );
}

Ordenacao.propTypes = {
  ordenarAsc: PropTypes.bool.isRequired,
  ordenarDesc: PropTypes.bool.isRequired,
};

export default Ordenacao;
