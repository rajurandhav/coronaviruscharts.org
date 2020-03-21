import React from 'react';
import { Provider } from 'mobx-react'
import logo from './logo.svg';
import stores from './stores';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider {...stores}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </Provider>
    </div>
  );
}

export default App;
