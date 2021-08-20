import React from "react";
import './Pokecard.css'

const POKEMON_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

const Pokecard = (props) => {
    let img = `${POKEMON_API}/${props.id}.png`

    return (
        <div className = "Pokecard">
            <img src={img}></img>
            <p>Name: {props.name}</p>
            <p>Type: {props.type}</p>
            <p>EXP: {props.exp}</p>
        </div>
    )
}

export default Pokecard;