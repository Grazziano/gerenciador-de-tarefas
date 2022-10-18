import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItensListaTarefas from './ItensListaTarefas/ItensListaTarefas';

function ListarTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);

  useEffect(() => {
    function obterTarefas() {
      const tarefasDB = localStorage['tarefas'];
      let listarTarefas = tarefasDB ? JSON.parse(tarefasDB) : [];
      setTarefas(listarTarefas);
      console.log(listarTarefas);
    }

    if (carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false);
    }
  }, [carregarTarefas]);

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

        <tbody>
          <ItensListaTarefas
            tarefas={tarefas}
            recarregarTarefas={setCarregarTarefas}
          />
        </tbody>
      </Table>
    </div>
  );
}

export default ListarTarefas;
