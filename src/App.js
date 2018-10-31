import React, { Component } from "react";
import "./css/App.css";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Listado from "./components/Listado";

class App extends Component {
  state = {
    presupuesto: "",
    restante: "",
    gastos: {}
  };
  //agregar un nuevo gasto al state
  agregarGasto = gasto => {
    // tomar una copia del state actual
    const gastos = { ...this.state.gastos };
    // Agregar gasto al objeto del state
    gastos[`gastos${Date.now()}`] = gasto;
    // ponerlo en state
    this.setState({
      gastos
    });
  };
  render() {
    return (
      <div className="App container">
        <Header titulo="Control de Gastos" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario agregarGasto={this.agregarGasto} />
            </div>
            <div className="one-half column">
              <Listado gastos={this.state.gastos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
