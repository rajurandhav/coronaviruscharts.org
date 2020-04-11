import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { StoreProvider } from './contexts';
import { Landing, HeaderNav, About, SwipeableTemporaryDrawer, HelpContainer } from './modules';
import './App.css';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <header><HeaderNav /></header>
          <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
          <div className='main-pane'>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/helpline">
                <HelpContainer />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
          </div>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
