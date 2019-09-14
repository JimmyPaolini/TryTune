import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Dev from './components/Dev.js'
import GuidedInput from './components/GuidedInput.js';
import FreeInput from './components/FreeInput.js';
import Nav from './components/Nav.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router className='App'>
      <Nav />
      <Switch>
        <Route path='/freeinput' component={FreeInput} />
        <Route path='/guidedinput' component={GuidedInput} />
        <Route path='/tuningsystems' component={Dev} />
        <Route path='/tuningsystems/justintonation' component={Dev} />
        <Route path='/tuningsystems/limit' component={Dev} />
        <Route path='/tuningsystems/meantone' component={Dev} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App;
