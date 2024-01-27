// marvelAPI.js
import md5 from 'md5'; // Asegúrate de instalar esta dependencia antes de usarla

const PUBLIC_KEY = '79f4e56ee9988ac936410ebb288047db';
const PRIVATE_KEY = '612b7cef627a605a89525dc5cc0eef7c070f7768';
const API_BASE_URL = 'developer.marvel.com';

const getMarvelData = async () => {
  const timestamp = new Date().getTime();
  const hash = md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
  const response = await fetch(`${API_BASE_URL}/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`);
  const data = await response.json();
  return data;
};

export default getMarvelData;
