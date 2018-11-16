import React, { Component } from "react";
import { MensajeSaludo } from "./MensajeSaludo"
import { FormSaludo } from "./FormSaludo";

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

//funcion 
manejarNuevoNombre = nombre =>{
  this.setState({
    nombre:nombre
  });
}
  render() {
    const { nombre } = this.state;
    return (
    <div className="container">
   
      
      <MensajeSaludo nombre ={nombre}/>
      <FormSaludo alObtenerNuevoNombre={this.manejarNuevoNombre}/>
    </div>
    );
  }
} 


export default App;
  