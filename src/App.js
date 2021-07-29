import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import PokemonDetails from './components/PokemonDetails';

function App() {

  const [pokemonDetails, setPokemonDetails] = useState([])

  return (
    <div className = 'container'>
      <h1>Pokeapi</h1> 
        < Form setPokemonDetails={setPokemonDetails}/>
        < PokemonDetails pokemonDetails={pokemonDetails}/>   
    </div>

  );
}

export default App;
