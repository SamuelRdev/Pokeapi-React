import { useState } from "react";

const Form = (props) => {
    const [search, setSearch] = useState("");

    const handleChange = ({currentTarget}) => {
        const value = currentTarget.value.toLowerCase()
        setSearch(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            props.setPokemonDetails(data)
        })
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" name = "search" onChange = {handleChange}/>
            <input type = "submit" value = "submit"/>
        </form>
    );
}

export default Form