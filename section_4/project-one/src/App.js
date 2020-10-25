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
    otherState: "new state",
    showPersons: false,
    buttonName: false
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


  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 20 },
        { name: event.target.value, age: 19 },
        { name: 'Stephanie', age: 18 }
      ]
    })

  }

  toglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      width: '200px',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    let buttonMessage = "Show persons";
    if (this.state.showPersons) {
      buttonMessage = "Hide Persons";
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              return <Person name={person.name} age={person.age} />
            })
          }

        </div>
      );

    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.toglePersonHandler}
        >{buttonMessage}</button>
        {persons}
      </div>
    );
  }
}
// change state and props makes react render the view.
export default App;
