import React, { Component } from "react";

class FormularioGasto extends Component {
  nombreGasto = React.createRef();
  cantidadGasto = React.createRef();

  crearGasto = e => {
    //prevenir el default
    e.preventDefault();

    //crear el objeto con los datos
    const gasto = {
      nombreGasto: this.nombreGasto.current.value,
      cantidadGasto: this.cantidadGasto.current.value
    };

    console.log(gasto);

    //agregarlo y enviarlo por this.props.
    this.props.agregarGasto(gasto);
    //resetear el formulario
    e.currentTarget.reset();
  };
  render() {
    return (
      <form onSubmit={this.crearGasto}>
        <h2>Agrega tus gastos aqui</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Ej. Transporte"
            ref={this.nombreGasto}
          />
        </div>

        <div className="campo">
          <label>Cantidad</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Ej. 300"
            ref={this.cantidadGasto}
          />
        </div>

        <input
          className="button-primary u-full-width"
          type="submit"
          value="Agregar"
        />
      </form>
    );
  }
}

export default FormularioGasto;
