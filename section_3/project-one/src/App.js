import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 22 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: "new state"
  }

  switchNameHandler = (newName) => {
    // console.log('was click');
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Manu', age: 19 },
        { name: 'Stephanie', age: 18 }
      ]
    })
  }


  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        { name: 'Max', age: 20 },
        { name: event.target.value, age: 19 },
        { name: 'Stephanie', age: 18 }
      ]
    })

  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };



    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Andres Ardila")}
        >Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        <Person
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Catherine Ospina")}
          changed={this.nameChangeHandler}
        />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
        />


      </div>
    );
  }
}
// change state and props makes react render the view.
export default App;
