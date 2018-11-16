import React, { Component } from 'react';

export class FormSaludo extends Component {

    alEnviarForm = e =>
        {    
        const datos ={};
        const nombre = e.target.nombre.value;
        const mensaje = e.target.mensaje.value;
        e.preventDefault();
        if(typeof nombre==="string" && nombre.length >0){
            datos.nombre=nombre;
            e.target.nombre.value="";
        }
        
        if(typeof mensaje==="string" && mensaje.length >0){
            datos.mensaje=mensaje;
            e.target.mensaje.value="";
        }
        this.props.alObtenerNuevoSaludo(datos);
            
        }
    render() {
        
        return (
            <div>
                <form onSubmit={ this.alEnviarForm} >
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" name="nombre" id="nombre" className="form-control" />
         
                    </div>
                    <div className="form-group">
                        <label>Mensaje</label>
                        <textarea rows="4" name="mensaje" id="mensaje" className="form-control" />
         
                    </div>
                    <button type="submit" className="btn btn-primary">Saludar</button>
                </form>
            </div>
        );
    }
}

export default FormSaludo;