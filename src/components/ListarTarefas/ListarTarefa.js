import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ListarTarefas() {
  return (
    <div className="text-center">
      <h3>Tarefas a fazer</h3>
      <Table striped bordered hover responsive data-testid="tabela">
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>
              <Link
                to="/cadastrar"
                className="btn btn-success btn-sm"
                data-testid="btn-nova-tarefa"
              >
                <FontAwesomeIcon icon={faPlus} /> Nova tarefa
              </Link>
            </th>
          </tr>
        </thead>

        <tbody></tbody>
      </Table>
    </div>
  );
}

export default ListarTarefas;
