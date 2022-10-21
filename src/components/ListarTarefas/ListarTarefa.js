import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItensListaTarefas from './ItensListaTarefas/ItensListaTarefas';
import Ordenacao from './Ordenacao/Ordenacao';
import Paginacao from './Paginacao/Paginacao';

function ListarTarefas() {
  const ITENS_POR_PAGINA = 10;

  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [ordenarAsc, setOrdenarAsc] = useState(false);
  const [ordenarDesc, setOrdenarDesc] = useState(false);

  useEffect(() => {
    function obterTarefas() {
      const tarefasDB = localStorage['tarefas'];
      let listaTarefas = tarefasDB ? JSON.parse(tarefasDB) : [];

      // ordenar
      if (ordenarAsc) {
        listaTarefas.sort((t1, t2) =>
          t1.name.toLowerCase() > t2.name.toLowerCase() ? 1 : -1
        );
      } else if (ordenarDesc) {
        listaTarefas.sort((t1, t2) =>
          t1.name.toLowerCase() < t2.name.toLowerCase() ? 1 : -1
        );
      }

      // paginar
      setTotalItems(listaTarefas.length);
      setTarefas(
        listaTarefas.splice(
          (paginaAtual - 1) * ITENS_POR_PAGINA,
          ITENS_POR_PAGINA
        )
      );
      // console.log(listaTarefas);
    }

    if (carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false);
    }
  }, [carregarTarefas, paginaAtual, ordenarAsc, ordenarDesc]);

  function handleMudarPagina(pagina) {
    setPaginaAtual(pagina);
    setCarregarTarefas(true);
  }

  function handleOrdenar(event) {
    event.preventDefault();

    if (!ordenarAsc && !ordenarDesc) {
      setOrdenarAsc(true);
      setOrdenarDesc(false);
    } else if (ordenarAsc) {
      setOrdenarAsc(false);
      setOrdenarDesc(true);
    } else {
      setOrdenarAsc(false);
      setOrdenarDesc(false);
    }

    setCarregarTarefas(true);
  }

  return (
    <div className="text-center">
      <h3>Tarefas a fazer</h3>
      <Table striped bordered hover responsive data-testid="tabela">
        <thead>
          <tr>
            <th>
              <a href="/" onClick={handleOrdenar}>
                Tarefa {' '}
                <Ordenacao ordenarAsc={ordenarAsc} ordenarDesc={ordenarDesc} />
              </a>
            </th>
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
      <Paginacao
        totalItems={totalItems}
        itemsPorPagina={ITENS_POR_PAGINA}
        paginaAtual={paginaAtual}
        mudarPagina={handleMudarPagina}
      />
    </div>
  );
}

export default ListarTarefas;
