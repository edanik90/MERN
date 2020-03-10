import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.css';
import SearchForm from './components/SearchForm';
import People from './components/People';
import Film from './components/Film';
import Planet from './components/Planet';
import Species from './components/Species';
import Starship from './components/Starship';
import Vehicle from './components/Vehicle';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <Router>
        <People path="/people/:id" />
        <Film path="/films/:id" />
        <Planet path="/planets/:id" />
        <Species path="/species/:id" />
        <Starship path="/starship/:id" />
        <Vehicle path="/vehicles/:id" />
      </Router>
    </div>
  );
}

export default App;
