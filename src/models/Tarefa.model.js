function Tarefa(id, name, finish) {
  this.id = id;
  this.name = name;
  this.finish = finish;

  return {
    id: id,
    name: name,
    finish: finish,
  };
}

export default Tarefa;
