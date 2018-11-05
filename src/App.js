import React, { Component } from "react";
import "./css/App.css";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";
import { validarPresupuesto } from "./helper";

class App extends Component {
  state = {
    presupuesto: "",
    restante: "",
    gastos: {}
  };

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt("Cual es el presupuesto?");
    let resultado = validarPresupuesto(presupuesto);
    if (resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      });
    } else {
      console.log("presupuesto no valido");
    }
  };
  //agregar un nuevo gasto al state
  agregarGasto = gasto => {
    // tomar una copia del state actual
    const gastos = { ...this.state.gastos };
    // Agregar gasto al objeto del state
    gastos[`gastos${Date.now()}`] = gasto;

    //Restar al presupuesto
    this.restarPresupuesto(gasto.cantidadGasto);

    // ponerlo en state
    this.setState({
      gastos
    });
  };

  // Restar del presupuesto cuando un gasto se crea
  restarPresupuesto = cantidad => {
    // leer el gasto
    let restar = Number(cantidad);
    // Tomar una copia del state actual
    let restante = this.state.restante;
    // lo restamos
    restante -= restar;
    this.setState({
      restante
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
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
