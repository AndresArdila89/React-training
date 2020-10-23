import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
class App extends Component {
state ={ 
    client: [
    {name: "andres", last: "ardila"},
    {name: "cliff", last: "ford"}

  ]
};

 


  render() {
    return (
      <div className="App">
          <UserInput></UserInput>
          <UserOutput userName="Andres Ardila"></UserOutput>
          <UserOutput uName={this.state.client[0].name}></UserOutput>
          <UserOutput></UserOutput>
      </div>
    );
  }
}

export default App;
