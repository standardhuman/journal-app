import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';
import NewEntry from './components/NewEntry'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Journal App</h2>
          <NewEntry />
        </div>
          <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
