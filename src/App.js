import React, { Component } from "react";
import  { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import {Saludo} from "./Saludo";
import {Pelicula} from "./Pelicula";
import {PaginaNoExiste} from "./PaginaNoExiste";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          
        <Route path="/" component={Saludo} exact/>
        <Route path ="/Pelicula" component={Pelicula}/>
        <Route component={PaginaNoExiste}/>
        </Switch>
      </Router>
    );
  }
} 


export default App;
  