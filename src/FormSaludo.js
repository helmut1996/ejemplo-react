import React, { Component } from 'react';

export class FormSaludo extends Component {

    alEnviarForm = e =>
        {    
        const nombre = e.target.nombre.value;
        e.preventDefault();
        if(typeof nombre==="string" && nombre.length >0){
            this.props.alObtenerNuevoNombre(nombre);
            e.target.nombre.value="";
        }
        }
    render() {
        
        return (
            <div>
                <form onSubmit={ this.alEnviarForm} >
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" name="nombre" id="nombre" className="form-control" />
                        <button type="submit" className="btn btn-primary">Saludar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormSaludo;