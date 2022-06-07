import {useState, useEffect} from 'react';


const initProfile = {
    id: null,
    image: null,
    type: null,
    name: null,
}

const Opponent = () => {
  const [pokemon, setPokemon] = useState(initProfile);
    const getPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/4");
      const json = await response.json();

      setPokemon({
          id: json.id,
          name: json.name,
          image: json.sprites.other.dream_world.front_default,
          type: json.types[0].type.name,
      });
    };


  useEffect(() => {
    getPokemon();
  }, [])
    return (
    <div className="char">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image} alt="Charmander" />
        <h3>{`Type: ${pokemon.type}`}</h3>
        
    </div>
  )
};

export default Opponent