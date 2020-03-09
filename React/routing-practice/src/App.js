import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import WordOrNumber from './components/WordOrNumber';
import Color from './components/Color';

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <WordOrNumber path="/:id" />
        <Color path="/:word/:color1/:color2" />
      </Router>
    </div>
  );
}

export default App;
