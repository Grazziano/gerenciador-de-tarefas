import React from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CadastrarTarefa() {
  return (
    <div>
      <h3 className="text-center">Cadastrar Tarefa</h3>
      <Alert variant="secondary">
        <Form>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
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
        <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title>Sucesso</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tarefa adicionada com sucesso!</Modal.Body>
          <Modal.Footer>
            <Button variant="success">Continuar</Button>
          </Modal.Footer>
        </Modal>
      </Alert>
    </div>
  );
}

export default CadastrarTarefa;
