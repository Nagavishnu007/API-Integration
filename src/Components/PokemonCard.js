import React, { useEffect, useState } from 'react';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  const [pokemonImage, setPokemonImage] = useState('');

  // Fetch Pokémon details for the image
  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => setPokemonImage(data.sprites.front_default))
      .catch((error) => console.error('Error fetching Pokémon details:', error));
  }, [pokemon.url]);

  return (
    <div className="pokemon-card">
      <img src={pokemonImage} alt={pokemon.name} />
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
    </div>
  );
};

export default PokemonCard;
