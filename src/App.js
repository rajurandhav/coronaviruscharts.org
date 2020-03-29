import React from 'react';
import { Provider } from 'mobx-react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { stores } from './stores';
import { WorldWideCounter, HeaderNav, About} from './modules';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider {...stores}>
        <Router>
          <header><HeaderNav/></header>
          <header className="App-header">
            
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <WorldWideCounter/>
                </Route>
              </Switch>        
          </header>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
