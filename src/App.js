import React, { Component } from 'react';
import './App.css';
import Ticket from './components/Ticket';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ticket/>
      </div>
    );
  }
}

export default App;
