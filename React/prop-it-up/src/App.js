import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div class="App">
      <PersonCard lastName="Wick" firstName="John" age="40" hairColor="black" />
      <PersonCard lastName="Drake" firstName="Nathan" age="35" hairColor="brown" />
      <PersonCard lastName="Croft" firstName="Lara" age="30" hairColor="black" />
      <PersonCard lastName="Ozil" firstName="Mesut" age="32" hairColor="black" />
    </div>

  );
}

export default App;
