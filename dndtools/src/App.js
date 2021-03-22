import './App.css';
import React from 'react'

import LoginPage from './components/pages/LoginPage'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
