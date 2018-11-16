import React, { Component } from 'react';
import {Link} from "react-router-dom";
export class Menu extends Component {

    render() { 
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
               <a><Link className= "nav-item nav-link" to="/">Home</Link> </a>
                <a><Link className="nav-item nav-link" to="/Pelicula">Peliculas</Link></a>
               
              </div>
            </div>
          </nav>
            </div>
        );
    }
}

export default Menu;