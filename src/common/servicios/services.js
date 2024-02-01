import React, { useState, useEffect } from 'react';
import MarvelModal from './poput';
import axios from 'axios';
import md5 from 'crypto-js/md5';

const Public_key = "640d1a3f181daef1d461ca9e45431977";
const Private_key = "6742d62f048eea0e5bba41006af05a1e7c8b4af6";

export const bringMarvelInfo = async () => {
  try {
    const timestamp = Date.now().toString();
    const hash = md5(timestamp + Private_key + Public_key).toString();
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters?apikey=${Public_key}&ts=${timestamp}&hash=${hash}`
    );

    // Devuelve la lista de personajes (results) de la respuesta
    return response.data?.data?.results || [];
  } catch (error) {
    console.error("Error fetching Marvel characters:", error);
    return [];
  }
};