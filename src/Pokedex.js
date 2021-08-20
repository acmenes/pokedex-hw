import React from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'

const pokemonArray = [
    {id: 1, name: 'Bulbasaur', type: 'grass/poison', base_experience: 72},
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 79, name: 'Slowpoke', type: 'psychic/water', base_experience: 395},
    {id: 94, name: 'Gengar', type: 'ghost/poison', base_experience: 225},
    {id: 122, name: 'Mr. Mime', type: 'psychic/fairy', base_experience: 178},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]

const Pokedex = (props) => {
    return (
        <div className="Pokedex">
            <div className="Pokemon-Cards">
                {pokemonArray.map(p => (
                <Pokecard
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}
                />
                ))}
            </div>
        </div>
    )
}

export default Pokedex;