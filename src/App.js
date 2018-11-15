import React, { Component } from "react";

export class App extends Component {
  state={
    nombre:this.props.nombre
  };

  //declaro funcion
alOprimirBoton = e =>{
const nombre = e.target.nombre.value;
  e.preventDefault();
  if(typeof nombre==="string" && nombre.length>0){
    this.setState({
      nombre: nombre
      });
      e.target.nombre.value=""; 
  }

};

  render() {
    const { texto }= this.props;
    const { nombre } = this.state;
    return (
    <div className="container">
      <h1>Hola { nombre }!!!</h1>
      <p>Parrafo de ejemplo { texto }</p>
      <form onSubmit={ this.alOprimirBoton} >
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="nombre" id="nombre" className="form-control"/>
          <button type="submit" className="btn btn-primary">Saludar</button>
        </div>
      </form>
    </div>
    );
  }
} 



export default App;
  