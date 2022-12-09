import React from "react";
import "./Pokecard.css";

const POKE_API = "https://raw.githubusercontent.com/" +
    "PokeAPI/sprites/master/sprites/pokemon/";



function Pokecard({ id, name, type }) {
  const imgSrc = `${POKE_API}${id}.png`;

  return (
      <div className="Pokecard">
        <div className="Pokecard-title">{name}</div>
        <img className="Pokecard-image" src={imgSrc} alt={name} />
        <div className="Pokecard-data"><h3>Type: {type}</h3></div>
       
      </div>
  );
}

export default Pokecard;
