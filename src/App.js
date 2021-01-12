import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import './App.css';


const HatsPage = () => (
  <div>
    <h1>HAT PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
