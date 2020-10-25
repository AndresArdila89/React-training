import React, { Component } from 'react';
import './App.css';
import DificultyElement from './DificultyElement/DificultyElement';

class App extends Component {
  //all the information that is going to be display on the dificulty elements
  state = {
    test: [
      { id: "1231", nivel: "Basico", duracion: "20 minutos" },
      { id: "1232", nivel: "Intermedio", duracion: "25 minutos" },
      { id: "1233", nivel: "Avanzado", duracion: "30 minutos" }
    ]
  };


  render() {

    let box = (
      <div>
        {
          this.state.test.map((test, index) => {
            return <DificultyElement
              key={test.id}
              nivel={test.nivel}
              duracion={test.duracion} />
          })
        }
      </div>
    )


    return (
      <div className="App">
        {box}
      </div>
    );
  }
}

export default App;
