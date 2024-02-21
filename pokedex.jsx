import React from "react";


const Pokedex = ({pokemon}) => {
return (
    <>
      <div className = "pokedex">
        <h1>Pokedex</h1>
        <div className = "pokemon-list">
          {pokemon.map(p => (
            <div key={p.id} className = "pokemon-card">
              <h4>{p.name}</h4>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} alt={p.name} className = "pokemon-image"/>
              <ul className = "pokemon-details">
  
                <li>Type: {p.type}</li>
                <li>EXP: {p.base_experience}</li>
              </ul>
            </div>
            ))}
        </div>
      </div>
    </>
  )}

export default Pokedex;