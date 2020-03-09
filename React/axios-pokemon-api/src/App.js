import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const handleClick = (e) => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=907")
      .then(res => setPokemon(res.data.results))
      .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <button className="btn btn-dark" onClick={(e) => handleClick(e)}>Fetch Pokemon</button>
      <br></br>
      {
        pokemon.map((p, idx) => {
          return <span key={idx}>{p.name}  </span>
        })
      }
    </div>
  );
}

export default App;
