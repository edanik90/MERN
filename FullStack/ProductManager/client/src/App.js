import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import Detail from './views/Detail';
import Update from './views/Update';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="/:id" />
        <Update path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
