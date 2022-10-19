import React from 'react';
import PropTypes from 'prop-types';
import ConcluirTarefa from '../ConcluirTarefa/ConcluirTarefa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import RemoverTarefa from '../RemoverTarefa/RemoverTarefa';

function ItensListaTarefas(props) {
  function marcarConcluida(tarefa) {
    return tarefa.finish ? 'line-through' : 'none';
  }

  return (
    <>
      {props.tarefas.map((tarefa) => (
        <tr key={tarefa.id} data-testid="tarefa">
          <td
            width="75%"
            data-testid="nome-tarefa"
            style={{ textDecoration: marcarConcluida(tarefa) }}
          >
            {tarefa.name}
          </td>
          <td className="text-right">
            <ConcluirTarefa
              tarefa={tarefa}
              recarregarTarefas={props.recarregarTarefas}
              className={tarefa.finish ? 'hidden' : null}
            />
            &nbsp;
            <Link
              to={'/atualizar/' + tarefa.id}
              className={tarefa.finish ? 'hidden' : 'btn btn-warning btn-sm'}
            >
              <FontAwesomeIcon icon={faEdit} />
            </Link>
            &nbsp;
            <RemoverTarefa
              tarefa={tarefa}
              recarregarTarefas={props.recarregarTarefas}
            />
          </td>
        </tr>
      ))}
    </>
  );
}

ItensListaTarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default ItensListaTarefas;
