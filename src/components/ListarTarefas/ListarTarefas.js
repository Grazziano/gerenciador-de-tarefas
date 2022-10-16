import React from 'react';
import ReactDOM from 'react-dom';
import ListarTarefas from './ListarTarefa';

describe('Teste do componente de istagem de tarefas', () => {
  it('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListarTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
