import React, { Component } from "react";
import Presupuesto from "./Presupuesto";
import Restante from "./Restante";

class ControlPresupuesto extends Component {
  render() {
    return (
      <React.Fragment>
        <Presupuesto presupuesto={this.props.presupuesto} />
        <Restante restante={this.props.restante} />
      </React.Fragment>
    );
  }
}

export default ControlPresupuesto;
