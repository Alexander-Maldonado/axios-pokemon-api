import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((response) => {
      console.log(response.data.results);
      setPokemons(response.data.results)
    })
    .catch((err)=>console.log(err));
  },[]);
  return (
    <div className="App">
      <h1 className='pokemonTitle'>Pokemon List</h1>
      <ul>
        {pokemons.map((pokemon, index)=>(
          <li className='pokeList' key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
