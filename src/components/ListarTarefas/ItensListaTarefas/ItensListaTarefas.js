import React from 'react';
import PropTypes from 'prop-types';

function ItensListaTarefas(props) {
  return <div>ItensListaTarefas</div>;
}

ItensListaTarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default ItensListaTarefas;
