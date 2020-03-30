import React from 'react';
import { Provider } from 'mobx-react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { stores } from './stores';
import { Landing, HeaderNav, About } from './modules';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider {...stores}>
        <Router>
          <header><HeaderNav /></header>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
