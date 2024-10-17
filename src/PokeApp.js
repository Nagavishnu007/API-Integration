import React, { useEffect, useState } from 'react'
import PokemonCard from './Components/PokemonCard';
import './App.css';


const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100';

function PokeApp() {

    const [pokemonList, setPokemonList] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredPokemon, setFilteredPokemon] = useState([]);
  
    // Fetch data from server
    useEffect(() => {
        
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setPokemonList(data.results))
        .catch((error) => console.error('Error fetching Pokémon data:', error));
    }, []);
  
    // Filter Pokémon based on search input

    useEffect(() => {

      const results = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredPokemon(results);
    }, [search, pokemonList]);
  
    return (

      <div className="App">

        <h1>Pokémon List</h1>

        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="pokemon-grid">
          {filteredPokemon.map((pokemon) => (
           <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  }


export default PokeApp
