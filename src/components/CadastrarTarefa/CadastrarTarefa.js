import React, { useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Tarefa from '../../models/Tarefa.model';

function CadastrarTarefa() {
  const [tarefa, setTarefa] = useState('');
  const [formValidado, setFormValidado] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);

  const navigate = useNavigate();

  function cadastrar(event) {
    event.preventDefault();
    setFormValidado(true);

    if (event.currentTarget.checkValidity() === true) {
      // obtém as tarefas
      const tarefasDB = localStorage['tarefas'];
      const tarefas = tarefasDB ? JSON.parse(tarefasDB) : [];
      // persistir a tarefa
      tarefas.push(new Tarefa(new Date().getTime(), tarefa, false));
      localStorage['tarefas'] = JSON.stringify(tarefas);
      setExibirModal(true);
    }
  }

  function handleTxtTarefa(event) {
    setTarefa(event.target.value);
  }

  function handleFecharModal() {
    navigate('/');
  }

  return (
    <div>
      <h3 className="text-center">Cadastrar Tarefa</h3>
      <Alert variant="secondary">
        <Form validated={formValidado} noValidate onSubmit={cadastrar}>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
              value={tarefa}
              onChange={handleTxtTarefa}
              data-testid="txt-tarefa"
            />
            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center mt-2">
            <Button variant="success" type="submit" data-testid="btn-cadastrar">
              Cadastrar
            </Button>
            &nbsp;
            <Link to="/" className="btn btn-light">
              Voltar
            </Link>
          </Form.Group>
        </Form>
        <Modal
          show={exibirModal}
          onHide={handleFecharModal}
          data-testid="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Sucesso</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tarefa adicionada com sucesso!</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleFecharModal}>
              Continuar
            </Button>
          </Modal.Footer>
        </Modal>
      </Alert>
    </div>
  );
}

export default CadastrarTarefa;
