const PokemonDetails = (props) => {
    return (

        <div>
            <h2>{props.pokemonDetails.name}</h2>        
            {props.pokemonDetails.sprites &&
                <img src={props.pokemonDetails.sprites.front_default} alt="image pokemon"></img>
            }         
        </div>

    );
}

export default PokemonDetails