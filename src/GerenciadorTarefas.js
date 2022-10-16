import './GerenciadorTarefas.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

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
    path: '/atualizar:id',
    element: <AtualizarTarefa />,
  },
]);

function GerenciadorTarefas() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default GerenciadorTarefas;
