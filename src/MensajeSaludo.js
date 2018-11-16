import React, { Component } from 'react';
export class MensajeSaludo extends Component {
   
    render() { 
        const { nombre }= this.props;
        return (  
            <div> 
                <h1>Hola { nombre }!!!</h1>
      <p>Parrafo de ejemplo</p>
            </div>
        );
    }
}
 
export default MensajeSaludo;