import React from 'react';
import PropTypes from 'prop-types';

function RemoverTarefa(props) {
  return <div>RemoverTarefa</div>;
}

RemoverTarefa.propTypes = {
  tarefa: PropTypes.object.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default RemoverTarefa;
