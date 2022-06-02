import {useState, useEffect} from 'react';

const initProfile = {
    id: null,
    image: null,
    type: null,
    name: null,
}

const Opponent = () => {
  const [profile, setProfile] = useState(initProfile);
    const getProfile = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/4");
      const json = await response.json();

      setProfile({
          id: json.id,
          name: json.name,
          image: json.sprites.other.dream_world.front_default,
          type: json.types[0].type.name,
      });
    };


  useEffect(() => {
    getProfile();
  }, [])
    return (
    <div className="char">
        <h1>{profile.name}</h1>
        <img src={profile.image} alt="Charmander" />
        <h3>{`Type: ${profile.type}`}</h3>
        <ul className="attack-list"></ul>
    </div>
  )
};

export default Opponent