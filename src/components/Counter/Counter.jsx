import React from "react";

// Componente em classe
export class Counter extends React.Component {
  // Posso criar uma variável
  // this.contador = 0;

  // Vou criar um atributo
  constructor() {
    super();
    // estado: variável que o react fica observando
    this.state = { contador: 0, name: "", password: "" };
  }

  render() {
    return (
      <div style={{ marginTop: "20px", marginLeft: "100px" }}>
        <h1>{this.state.contador}</h1>
        <div>
          <button
            onClick={() => {
              // ! this.contador -= 1;
              this.setState({ contador: this.state.contador - 1 });
            }}
          >
            Diminuir
          </button>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador + 1 });
            }}
          >
            Aumentar
          </button>
        </div>

        <form style={{ marginTop: "40px" }}>
          <input
            type="text"
            placeholder="Nome"
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={this.state.password}
            onChange={(event) => {
              // event.target.value: elemento html que dispara o evento (input)
              this.setState({ password: event.target.value });
            }}
          />
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
