import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="/:id" />
      </Router>
    </div>
  );
}

export default App;
