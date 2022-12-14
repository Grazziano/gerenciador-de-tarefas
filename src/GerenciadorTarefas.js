import ListarTarefas from './components/ListarTarefas/ListarTarefa';
import CadastrarTarefa from './components/CadastrarTarefa/CadastrarTarefa';
import AtualizarTarefa from './components/AtualizarTarefa/AtualizarTarefa';
import './GerenciadorTarefas.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListarTarefas />,
  },
  {
    path: '/cadastrar',
    element: <CadastrarTarefa />,
  },
  {
    path: '/atualizar/:id',
    element: <AtualizarTarefa />,
  },
]);

function GerenciadorTarefas() {
  return (
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default GerenciadorTarefas;
