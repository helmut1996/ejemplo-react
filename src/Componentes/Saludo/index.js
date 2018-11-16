import React, { Component } from "react";
import { MensajeSaludo } from "./MensajeSaludo"
import { FormSaludo } from "./FormSaludo";

export class Saludo extends Component {
  state={
    nombre:this.props.nombre,
    mensaje:this.props.mensaje
  };

mansajeNuevoSaludo = datos =>{
  this.setState(datos);
}
  render() {
    const { nombre,mensaje } = this.state;
    return (
    <div className="container">
   
      
      <MensajeSaludo nombre ={nombre} mensaje={mensaje}/>
      <FormSaludo alObtenerNuevoSaludo={this.mansajeNuevoSaludo}/>
    </div>
    );
  }
} 


export default Saludo;
  