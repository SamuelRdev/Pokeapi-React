const PokemonDetails = (props) => {
    return (

        <div>
            {props.PokemonDetails.length>0 && <h2>{props.PokemonDetails.name}</h2>}         
            {props.PokemonDetails.length>0 && <img src={props.PokemonDetails.sprites.front_default}></img>}         
        </div>

    );
}

export default PokemonDetails