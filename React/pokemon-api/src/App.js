import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const handleClick = (e) => {
      fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=907")
      .then(response => response.json())
      .then(response => setPokemon(response.results))
      .catch(err => {
        console.log(err);
      });
    }
    
  return (
    <div className="App">
      <button className="btn btn-dark" onClick={(e) => handleClick(e)}>Fetch Pokemon</button>
      <br></br>
      {
        pokemon.map((p, idx) => {
          return (<span key={idx}>{p.name}  </span>)
        })
      }
    </div>
  );
}

export default App;
