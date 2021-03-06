import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React on Docker !! </h1>
        </header>
        <p className="App-intro">
         Dockerfile vs Dockerfile.dev with docker-compose.yaml<br/>
            AppName: frontend<br/>
            Dir: <code>docker-prod/frontend</code>
        </p>
      </div>
    );
  }
}

export default App;
