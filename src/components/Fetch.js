import {useState, useEffect} from 'react';


const initProfile = {
    id: null,
    image: null,
    type: null,
    name: null,
}

const Fetch = () => {
  const [profile, setProfile] = useState(initProfile);
    const getProfile = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
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
    <div className="bulb">
        <h1>{profile.name}</h1>
        <img src={profile.image} alt="Bulbasaur" />
        <h3>{`Type: ${profile.type}`}</h3>
        <ul className="attack-list"></ul>
        <progress id="health" value="100" max="100"></progress>
    </div>
  )
};

export default Fetch