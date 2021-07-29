import { useState } from "react";
import Form from "../components/Form";
import PokemonDetails from "../components/PokemonDetails";

const PokemonSearchPage = () => {
    const [pokemonDetails, setPokemonDetails] = useState([])
    return (
        <div className = 'container'>
            <h1>Pokeapi</h1> 
            < Form setPokemonDetails={setPokemonDetails}/>
            < PokemonDetails pokemonDetails={pokemonDetails}/>   
        </div>
    );
}
export default PokemonSearchPage