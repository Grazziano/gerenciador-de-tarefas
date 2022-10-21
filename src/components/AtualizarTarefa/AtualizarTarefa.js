import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function AtualizarTarefa(props) {
  const navigate = useNavigate();

  function voltar(event) {
    event.preventDefault();
    navigate('/');
  }

  return (
    <div>
      <h3 className="text-center">Atualizar</h3>
      <Alert variant="secondary">
        <Form noValidate>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
              data-testid="txt-tarefa"
            />
            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center">
            <Button variant="success" type="button" data-testid="btn-atualizar">
              Atualizar
            </Button>
            &nbsp;
            <Link to="/" className="btn btn-light" onClick={voltar}>
              Voltar
            </Link>
          </Form.Group>
        </Form>
      </Alert>
    </div>
  );
}

AtualizarTarefa.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AtualizarTarefa;
