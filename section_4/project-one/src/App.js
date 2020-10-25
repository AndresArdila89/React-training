import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: "1234", name: 'Max', age: 22 },
      { id: "1235", name: 'Manu', age: 29 },
      { id: "1236", name: 'Stephanie', age: 26 }
    ],
    otherState: "new state",
    showPersons: false,
    buttonName: false
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id} />
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
