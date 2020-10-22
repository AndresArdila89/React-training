import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 22},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: "new state"
  }

  switchNameHandler = () => {
    // console.log('was click');
    this.setState({persons: [
      {name: 'Max', age: 20},
      {name: 'Manu', age: 19},
      {name: 'Stephanie', age: 18}
    ]
  })
  }

  render() {
    return (
      <div className="App">
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          

      </div>
    );
  }
}
// change state and props makes react render the view.
export default App;
