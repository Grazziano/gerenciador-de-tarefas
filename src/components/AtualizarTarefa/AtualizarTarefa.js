import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

function AtualizarTarefa() {
  const [exibirModal, setExibirModal] = useState(false);
  const [formValidado, setFormValidado] = useState(false);
  const [tarefa, setTarefa] = useState('');
  const [carregarTarefa, setCarregarTarefa] = useState(true);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (carregarTarefa) {
      const tarefasDb = localStorage['tarefas'];
      const tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      const find = tarefas.filter((t) => t.id === parseInt(id))[0];
      setTarefa(find.name);
      setCarregarTarefa(false);
    }
  }, [carregarTarefa, id]);

  function voltar(event) {
    event.preventDefault();
    navigate('/');
  }

  function handleFecharModal() {
    navigate('/');
  }

  function atualizar(event) {
    event.preventDefault();
    setFormValidado(true);
    if (event.currentTarget.checkValidity() === true) {
      // obtém as tarefas
      const tarefasDb = localStorage['tarefas'];
      let tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];

      // persistir a tarefa atualizada
      tarefas = tarefas.map((tarefaObj) => {
        if (tarefaObj.id === parseInt(id)) {
          tarefaObj.name = tarefa;
        }
        return tarefaObj;
      });

      localStorage['tarefas'] = JSON.stringify(tarefas);

      setExibirModal(true);
    }
  }

  function handleTxtTarefa(event) {
    setTarefa(event.target.value);
  }

  return (
    <div>
      <h3 className="text-center">Atualizar</h3>
      <Alert variant="secondary">
        <Form onSubmit={atualizar} noValidate validated={formValidado}>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
              data-testid="txt-tarefa"
              value={tarefa}
              onChange={handleTxtTarefa}
            />
            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center my-3">
            <Button
              variant="success"
              type="button"
              data-testid="btn-atualizar"
              onClick={atualizar}
            >
              Atualizar
            </Button>
            &nbsp;
            <Link to="/" className="btn btn-light" onClick={voltar}>
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
          <Modal.Body>Tarefa atualizada com sucesso!</Modal.Body>
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

export default AtualizarTarefa;
