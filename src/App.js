import React, { Component } from "react";

export default class ListaTarefas extends Component {
  state = {
    tarefa: "",
    listaTarefas: []
  };

  buscarTarefa = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  add = () => {
    if(this.state.tarefa.length > 0 && !this.state.tarefa.match(/^[ \t]+$/)) {
    this.setState({
      listaTarefas: this.state.listaTarefas.concat({
      tarefa: this.state.tarefa, 
      id: Date.now()
    })
  });
      tarefa: ""
  };
}

  HandleKeyboard = (event) =>{
    if (event.key === "Enter"){
      this.setState({
        listaTarefas: this.state.listaTarefas.concat({
        tarefa: this.state.tarefa,
        id: Date.now()
        }),
        tarefa: ""
      })
    }
  }

  removerTarefa = (id) => {
    this.setState({
      listaTarefas: this.state.listaTarefas.filter((item) => {
        return item.id !== id;
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Lista de tarefas</h2>
        <input
        type="text"
        value={this.state.tarefa} 
        onChange={this.buscarTarefa}
        placeholder="Insira uma nova tarefa" 
        />
        <button onClick={this.add}>Adicionar</button>
        {this.state.listaTarefas.map((item) => (
          <div key={item.id}>
            <p>{item.tarefa}</p>
            <button onClick={() => this.removerTarefa(item.id)}>Remover tarefa</button>
          </div>
        ))}
      </div>
    );
  }
}
