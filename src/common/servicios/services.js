import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

const MarvelCharacters = ({ onSelect }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const publicKey = '640d1a3f181daef1d461ca9e45431977';
    const privateKey = '6742d62f048eea0e5bba41006af05a1e7c8b4af6';
    const ts = new Date().getTime().toString();
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

    const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${ts}&hash=${hash}`;

    axios.get(url)
      .then(response => {
        setCharacters(response.data.data.results);
      })
      .catch(error => {
        console.error('Error fetching Marvel characters:', error);
      });
  }, []);

  const handleSelect = (character) => {
    onSelect(character);
  };

  return (
    <div>
      <h1>Marvel Characters</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id} onClick={() => handleSelect(character)} style={{ cursor: 'pointer' }}>
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarvelCharacters;
