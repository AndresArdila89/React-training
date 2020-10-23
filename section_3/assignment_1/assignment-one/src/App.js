import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
class App extends Component {
  state = {

    username: "cliff"

  };

  userNameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  }


  render() {
    return (
      <div className="App">
        <UserInput changed={this.userNameChangedHandler}></UserInput>
        <UserOutput userName="Andres Ardila"></UserOutput>
        <UserOutput uName={this.state.username}></UserOutput>
        <UserOutput></UserOutput>
      </div>
    );
  }
}

export default App;
