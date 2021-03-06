import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import GithubTable from './GithubTable';

class App extends Component {
  render() {
    return (
      <div className="App" id="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Repo Table</h1>
        </header>
        <div>
          <GithubTable />
        </div>
      </div>
    );
  }
}

export default App;
