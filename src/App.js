import React, { Component } from "react";

export class App extends Component {
  render() {
    const { texto }= this.props;
    return (
    <div className="container">
      <h1>Hola!!!</h1>
      <p>Parrafo de ejemplo { texto }</p>
    </div>
    );
  }
}

App.defaultProps = {
nombre: "React"
};

export default App;
