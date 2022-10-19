import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';

function RemoverTarefa(props) {
  const [exibirModal, setExibirModal] = useState(false);

  function handleAbrirModal(event) {
    event.preventDefault();
    setExibirModal(true);
  }

  function handleFecharModal() {
    setExibirModal(false);
  }

  function handleRemoverTarefa() {}

  return (
    <span>
      <Button
        variant="danger"
        className="btn btn-sm"
        onClick={handleAbrirModal}
        data-testid="btn-abrir-modal"
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
      <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
        <Modal.Header closeButton>
          <Modal.Title>Remover Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja realmente remover a seguinte tarefa?
          <br />
          <strong>{props.tarefa.name}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleRemoverTarefa}
            data-testid="btn-remover"
          >
            Sim
          </Button>
          <Button variant="light" onClick={handleFecharModal}>
            Não
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  );
}

RemoverTarefa.propTypes = {
  tarefa: PropTypes.object.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default RemoverTarefa;
