import React, { Component } from "react";
import Gasto from "./Gasto";
class Listado extends Component {
  render() {
    return (
      <div className="gastos-realizados">
        <h2>Desde listado</h2>
        {Object.keys(this.props.gastos).map(key => (
          <Gasto gasto={this.props.gastos[key]} />
        ))}
        <Gasto />
      </div>
    );
  }
}

export default Listado;
