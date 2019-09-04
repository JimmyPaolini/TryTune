import React from 'react';
import './App.css';
import Home from './components/Home.js';
import GuidedInput from './components/GuidedInput.js';
import FreeInput from './components/FreeInput.js';
import Nav from './components/Nav.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/freeinput' component={FreeInput} />
          <Route path='/guidedinput' component={GuidedInput} />
          <Route path='/tuningsystems' component={Home} />
          <Route path='/tuningsystems/justintonation' component={Home} />
          <Route path='/tuningsystems/limit' component={Home} />
          <Route path='/tuningsystems/meantone' component={Home} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
