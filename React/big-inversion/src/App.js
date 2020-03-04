import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={8} hairColor={"Brown"}/> 
    </div>
  );
}

export default App;
