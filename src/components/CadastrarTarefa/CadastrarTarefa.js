import React, { useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function CadastrarTarefa() {
  const [tarefa, setTarefa] = useState('');
  const [formValidado, setFormValidado] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);

  const navigate = useNavigate();

  function cadastrar(event) {}

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
            />
            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center mt-2">
            <Button variant="success" type="submit">
              Cadastrar
            </Button>
            &nbsp;
            <Link to="/" className="btn btn-light">
              Voltar
            </Link>
          </Form.Group>
        </Form>
        <Modal show={exibirModal} onHide={handleFecharModal}>
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
