import React from "react";
import Pokedex from "./Pokedex";

const defaultPokemon = [
  { id: 4, name: "Charmander", type: "fire" },
  { id: 7, name: "Squirtle", type: "water"  },
  { id: 11, name: "Metapod", type: "bug"  },
  { id: 12, name: "Butterfree", type: "flying"  },
  { id: 19, name: "Rattata", type: "normal"  },
];



function Pokegame({ pokemon=defaultPokemon }) {
  const hand1 = [];
  const hand2 = [...pokemon];

  // move random cards from hand2 until the hands have the same number of cards
  while (hand1.length < hand2.length) {
    const randIdx = Math.floor(Math.random() * hand2.length);
    const randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }



  return (
      <div>
         <Pokedex pokemon={hand1}  />
        <Pokedex pokemon={hand2}  /> 
      </div>
  );
}


export default Pokegame;
