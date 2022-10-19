import React from 'react';
import PropTypes from 'prop-types';

function ConcluirTarefa(props) {
  return <div>ConcluirTarefa</div>;
}

ConcluirTarefa.propTypes = {
  tarefa: PropTypes.object.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default ConcluirTarefa;
