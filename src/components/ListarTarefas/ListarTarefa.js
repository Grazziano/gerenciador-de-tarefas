import React from 'react';
import { Link } from 'react-router-dom';

function ListarTarefas() {
  return (
    <div>
      <h1>Listagem de Tarefas</h1>
      <Link to="/cadastrar" className="btn btn-success btn-sm">
        Nova Tarefa
      </Link>
    </div>
  );
}

export default ListarTarefas;
